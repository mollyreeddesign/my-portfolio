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
      label: "Home",
      href: "/",
      isActive: (p) => p === "/",
    },
    {
      label: "Case Studies",
      href: "/case-studies",
      isActive: (p) => p === "/case-studies" || p.startsWith("/case-studies/"),
    },
    {
      label: "About",
      href: "/about",
      isActive: (p) => p === "/about",
    },
    {
      label: "Art",
      href: "/art",
      isActive: (p) => p === "/art",
    },
  ];

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 will-change-transform backdrop-blur border-b " +
        (isCaseStudiesPage 
          ? "bg-[#FFFFFF] text-[#2C2C2C] border-[#2C2C2C]/[.08]" 
          : "bg-background/80 text-foreground border-black/[.08] dark:border-white/[.145]"
        ) +
        (isHidden ? " -translate-y-full" : " translate-y-0")
      }
    >
      <div className="font-americana text-[20px] md:text-[28px] mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
      {/* Left: Brand (no active underline) */}
      <Link href="/" className="font-semibold tracking-tight hover:opacity-80">
        Portfolio
      </Link>

      {/* Right: Links with active underline indicator */}
      <ul className="flex items-center gap-6">
        {links.map((item) => {
          const active = item.isActive(pathname);
          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className="relative inline-block group focus:outline-none"
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={
                    `pointer-events-none absolute left-0 right-0 -bottom-[10px] h-px ` +
                    (isCaseStudiesPage ? "bg-[#2C2C2C]" : "bg-foreground") +
                    (active ? " block" : " hidden group-hover:block group-focus:block group-focus-visible:block")
                  }
                />
              </Link>
            </li>
          );
        })}
      </ul>
      </div>
    </nav>
  );
}


