"use client";

import React from "react";

type BackToTopButtonProps = {
  className?: string;
  label?: string;
};

export default function BackToTopButton({ className = "", label = "Back to Top" }: BackToTopButtonProps) {
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button onClick={handleClick} className={className}>
      <span>{label}</span>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}


