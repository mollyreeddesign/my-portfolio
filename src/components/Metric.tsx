import React from "react";

export type MetricProps = {
  metric: string; // Primary text, e.g., "Conversion rate"
  measure?: string; // Secondary detail, e.g., "+12%"
  success?: boolean; // Optional flag for external usage
  className?: string;
};

export default function Metric({ metric, measure, success, className }: MetricProps) {
  return (
    <div
      className={[
        "relative",
        "overflow-hidden",
        "group",
        "inline-flex",
        "items-center",
        "gap-[10px]",
        "border",
        "border-[#E3E3E3]",
        "bg-[#F9F9F9]",
        "rounded-[4px]",
        "px-[12px]",
        "py-[6px]",
        "text-[#2C2C2C]",
      ].join(" ") + (className ? ` ${className}` : "")}
      data-success={success}
      role="group"
      aria-label={measure ? `${metric} ${measure}` : metric}
    >
      {/* glisten overlay */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-[-20%] left-[-50%] w-[60%] bg-gradient-to-r from-transparent via-[#ffffffcc] to-transparent"
        style={{
          animation: "glisten 5s ease-out infinite",
        }}
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 md:w-6 md:h-6 flex-none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="#007BFF" strokeWidth="2" />
        <path d="M8 12.5l2.5 2.5L16 9" stroke="#007BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex items-baseline gap-2">
        <span className="p">{metric}</span>
        {measure ? <span className="p text-[#2C2C2C]/70">{measure}</span> : null}
      </div>
    </div>
  );
}


