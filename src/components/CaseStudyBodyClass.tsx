"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CaseStudyBodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const isCaseStudiesPage = pathname === "/case-studies" || pathname.startsWith("/case-studies/");
    if (isCaseStudiesPage) {
      document.body.classList.add("case-studies-route");
    } else {
      document.body.classList.remove("case-studies-route");
    }
    return () => {
      document.body.classList.remove("case-studies-route");
    };
  }, [pathname]);

  return null;
}


