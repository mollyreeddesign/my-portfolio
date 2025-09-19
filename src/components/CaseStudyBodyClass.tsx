"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CaseStudyBodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const isCaseStudiesPage = pathname === "/case-studies" || pathname.startsWith("/case-studies/");
    const isDarkPage = pathname === "/" || pathname === "/about";
    if (isCaseStudiesPage) {
      document.body.classList.add("case-studies-route");
    } else {
      document.body.classList.remove("case-studies-route");
    }
    if (isDarkPage) {
      document.body.classList.add("dark-page-route");
    } else {
      document.body.classList.remove("dark-page-route");
    }
    return () => {
      document.body.classList.remove("case-studies-route");
      document.body.classList.remove("dark-page-route");
    };
  }, [pathname]);

  return null;
}


