import React from "react";
import { ArrowUpRight, ArrowDownRight, CheckCircle } from "lucide-react";

export type MetricProps = {
  metric: string; // Primary text, e.g., "Conversion rate"
  measure?: string; // Secondary detail, e.g., "+12%"
  success?: boolean; // Optional flag for external usage
  className?: string;
  icon?: "arrow-up-right" | "arrow-down-right" | "check" | "default";
};

export default function Metric({ metric, measure, success, className, icon = "default" }: MetricProps) {
  const renderIcon = () => {
    switch (icon) {
      case "arrow-up-right":
        return <ArrowUpRight size={20} className="text-blue-600 w-5 h-5 flex-none" />;
      case "arrow-down-right":
        return <ArrowDownRight size={20} className="text-blue-600 w-5 h-5 flex-none" />;
      case "check":
        return <CheckCircle size={20} className="text-blue-600 w-5 h-5 flex-none" />;
      default:
        return <CheckCircle size={20} className="text-blue-600 w-5 h-5 flex-none" />;
    }
  };

  return (
    <div
      className={`relative overflow-hidden group inline-flex items-center gap-2.5 border border-gray-200 bg-gray-50 rounded px-3 py-1.5 text-gray-800 ${className || ""}`}
      data-success={success}
      role="group"
      aria-label={measure ? `${metric} ${measure}` : metric}
    >
      <span className="glisten-overlay" aria-hidden="true" />
      {renderIcon()}
      <div className="flex items-baseline gap-2">
        <span className="p">{metric}</span>
        {measure ? <span className="p text-gray-600">{measure}</span> : null}
      </div>
    </div>
  );
}


