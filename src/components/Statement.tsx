import React from "react";

type StatementProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Statement({ children, className }: StatementProps) {
  return (
    <div className={`bg-gradient-to-r from-blue-50 to-sky-100 p-6 rounded-lg border border-blue-200 transition-all duration-300 hover:scale-102 hover:shadow-md ${className || ""}`}>
      {children}
    </div>
  );
}
