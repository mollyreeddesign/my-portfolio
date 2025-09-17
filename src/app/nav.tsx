"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  isActive: (pathname: string) => boolean;
};

export default function Nav() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // Check if we're on case studies pages
  const isCaseStudiesPage = pathname === "/case-studies" || pathname.startsWith("/case-studies/");

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const lastY = lastScrollYRef.current;
          const isScrollingDown = currentY > lastY;

          // Threshold avoids jitter near the top
          if (currentY < 10) {
            setIsHidden(false);
          } else if (isScrollingDown) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }

          lastScrollYRef.current = currentY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  const links: NavLink[] = [
    {
      label: "Work",
      href: "/",
      isActive: (p) => p === "/" || p.startsWith("/case-studies/"),
    },
    {
      label: "About",
      href: "/about",
      isActive: (p) => p === "/about",
    },
  ];

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 will-change-transform backdrop-blur border-b " +
        (isCaseStudiesPage 
          ? "bg-[#FFFFFF] text-[#2C2C2C] border-none" 
          : "bg-background/80 text-foreground border-none dark:border-none"
        ) +
        (isHidden ? " -translate-y-full" : " translate-y-0")
      }
    >
      <div className="font-americana text-[18px] md:text-[24px] mx-auto max-w-6xl px-4 md:px-8 lg:px-16 py-2 flex items-center justify-between">
      {/* Left: Brand (no active underline) */}
      <Link href="/" className="tracking-tight hover:opacity-80">
        molly reed
      </Link>

      {/* Right: Links with active underline indicator */}
      <ul className="flex items-center gap-6">
        {links.map((item) => {
          const active = item.isActive(pathname);
          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`group relative inline-block px-1 pt-2 pb-0.5 transition-all duration-200 focus:outline-none focus-visible:outline-none 
                  after:absolute after:left-0 after:bottom-0 after:h-px after:rounded-full after:transition-all after:duration-200 
                  ${isCaseStudiesPage ? "after:bg-[#2C2C2C]" : "after:bg-foreground"}
                  ${active ? "after:w-full after:opacity-100" : "after:w-0 after:opacity-60 hover:after:w-full"}
                `}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      </div>
    </nav>
  );
}


