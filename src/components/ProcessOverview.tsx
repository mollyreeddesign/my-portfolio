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
              <div className="rounded-lg bg-gray-100 w-[90px] h-[60px] sm:w-[120px] sm:h-[80px] flex items-center justify-center text-center text-gray-800 font-medium text-xs sm:text-sm leading-tight transition-transform duration-150 ease-out hover:scale-[1.02] hover:shadow-md">
                {step}
              </div>
              {!isLast && (
                <div className="flex-none h-[60px] sm:h-[80px] w-[43px] sm:w-[55px] flex items-center justify-center select-none text-gray-500" aria-hidden>
                  →
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

