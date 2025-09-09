"use client";

import React from "react";
import { MoveRight } from "lucide-react";

type ProcessOverviewProps = {
  steps: string[];
};

/**
 * Displays a horizontal sequence of step boxes separated by right arrows.
 * - Desktop: items automatically adjust to fit on one line without wrapping
 * - Mobile: items can wrap to multiple lines if needed
 * - No hover effects on boxes or arrows.
 * - Arrows are larger and touch the sides of the boxes.
 */
export default function ProcessOverview({ steps }: ProcessOverviewProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="hidden md:block w-full">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-y-3 md:gap-y-0">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <React.Fragment key={`${index}-${step}`}>
              <div className="rounded-lg bg-gray-100 w-[90px] h-[60px] sm:w-[120px] sm:h-[80px] md:w-auto md:min-w-[120px] md:px-4 flex items-center justify-center text-center text-gray-800 font-medium text-xs sm:text-sm leading-tight">
                {step}
              </div>
              {!isLast && (
                <div className="flex-none h-[60px] sm:h-[80px] w-[30px] sm:w-[40px] flex items-center justify-center select-none text-gray-500" aria-hidden>
                  <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

