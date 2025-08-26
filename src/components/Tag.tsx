import React from "react";

export type TagProps = {
  tag: string;
  titile?: string; // Keeping the prop name as requested
  role?: string;
  type?: string;
  className?: string;
};

export default function Tag({ tag, titile, role, type, className }: TagProps) {
  const baseClasses = [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-[8px]",
    "py-[6px]",
    "px-[12px]",
    "bg-[#2C2C2C]",
    "text-[#F5F5F5]",
    "font-medium",
    "text-[12px]",
    "md:text-[16px]",
  ].join(" ");

  return (
    <span
      className={`${baseClasses} ${className ?? ""}`.trim()}
      data-title={titile}
      data-role={role}
      data-type={type}
      aria-label={titile ?? tag}
    >
      {tag}
    </span>
  );
}


