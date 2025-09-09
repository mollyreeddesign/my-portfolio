import React from "react";

type StatementProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Statement({ children, className }: StatementProps) {
  return (
    <div className={`relative glisten-hover bg-gradient-to-r from-blue-50 to-sky-100 p-6 rounded-lg border border-blue-200 transition-all duration-300 hover:scale-[1.005] ${className || ""}`}>
      <span className="glisten-overlay-on-hover" aria-hidden="true" />
      {children}
    </div>
  );
}
