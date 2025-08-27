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
      className={`relative overflow-hidden group inline-flex items-center gap-2.5 border border-gray-200 bg-gray-100 rounded px-3 py-1.5 text-gray-800 ${className || ""}`}
      data-success={success}
      role="group"
      aria-label={measure ? `${metric} ${measure}` : metric}
    >
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
        {measure ? <span className="p text-gray-600">{measure}</span> : null}
      </div>
    </div>
  );
}


