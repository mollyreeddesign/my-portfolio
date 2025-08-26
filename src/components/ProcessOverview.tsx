"use client";

import React from "react";

type ProcessOverviewProps = {
  steps: string[];
};

/**
 * Displays a horizontal sequence of step boxes separated by right arrows.
 * - Responsive: wraps on small screens if overflow occurs.
 * - Hover: subtle scale and shadow on each box.
 */
export default function ProcessOverview({ steps }: ProcessOverviewProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-start gap-x-0 gap-y-3">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <React.Fragment key={`${index}-${step}`}>
              <div
                className="rounded-[8px] bg-[#F0F0F0] w-[90px] h-[60px] sm:w-[120px] sm:h-[80px] flex items-center justify-center text-center text-[#2C2C2C] font-medium text-[10px] sm:text-[14px] leading-tight transition-transform duration-150 ease-out hover:scale-[1.02] hover:shadow-md"
              >
                {step}
              </div>
              {!isLast && (
                <ArrowConnector />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function ArrowConnector() {
  return (
    <div className="flex-none h-[60px] sm:h-[80px] w-[43px] sm:w-[55px] flex items-center justify-center select-none" aria-hidden>
      {/* Mobile arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="12" viewBox="0 0 43 12" fill="none" className="block sm:hidden w-[43px] h-[12px]">
        <path fill="#767676" d="M36.679.527a.774.774 0 0 1 1.094 0L42.7 5.453a.774.774 0 0 1 0 1.094l-4.926 4.926a.774.774 0 0 1-1.094-1.095l3.603-3.604H9.054a4.128 4.128 0 1 1 0-1.548h31.228L36.68 1.622a.774.774 0 0 1 0-1.095Z"/>
      </svg>
      {/* Desktop arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="16" viewBox="0 0 55 16" fill="none" className="hidden sm:block w-[55px] h-[16px]">
        <path fill="#767676" d="M46.929.929a1 1 0 0 1 1.414 0l6.364 6.364a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 0 1-1.414-1.414L51.586 9H11.238a5.334 5.334 0 1 1 0-2h40.348l-4.657-4.657a1 1 0 0 1 0-1.414Z"/>
      </svg>
    </div>
  );
}

