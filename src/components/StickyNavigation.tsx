"use client";

import { useState, useEffect, useCallback } from "react";

type StickyNavigationProps = {
  sections: Array<{
    id: string;
    label: string;
  }>;
};

export default function StickyNavigation({ sections }: StickyNavigationProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        const newActiveSection = sections[i].id;
        if (newActiveSection !== activeSection) {
          console.log(`Active section changed from ${activeSection} to ${newActiveSection}`);
          setActiveSection(newActiveSection);
        }
        break;
      }
    }
  }, [sections, activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <div className="w-2/7">
      <div className="sticky top-18 space-y-2">
        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block py-2 px-3 rounded-lg transition-all duration-100 ease-in-out text-[16px] md:text-[18px] leading-[26px] ${
                isActive(section.id)
                  ? "bg-gray-50 font-semibold text-gray-800"
                  : "bg-transparent font-normal text-gray-800 hover:bg-gray-100"
              }`}
              data-active={isActive(section.id)}
              data-section={section.id}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
