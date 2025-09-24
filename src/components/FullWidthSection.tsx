import React from "react";
import PageContainer from "@/components/PageContainer";

type FullWidthSectionProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundImageOpacity?: number; // 0.0 - 1.0
  backgroundSweep?: boolean; // enable sweep overlay animation
  backgroundSweepDurationSec?: number; // animation duration in seconds
  backgroundSweepMaxOpacity?: number; // max combined opacity (base + sweep) at center, 0-1
  backgroundRadialMask?: boolean; // fade image to 0 at edges, peak at center
  children: React.ReactNode;
  useContainer?: boolean;
  sectionClassName?: string;
  noPadding?: boolean;
};

export default function FullWidthSection({
  backgroundColor = "#ffffff",
  backgroundImage,
  backgroundImageOpacity,
  backgroundSweep = false,
  backgroundSweepDurationSec,
  backgroundSweepMaxOpacity,
  backgroundRadialMask = false,
  children,
  useContainer = true,
  sectionClassName,
  noPadding = false,
}: FullWidthSectionProps) {
  const shouldUseLayer = Boolean(backgroundImage && backgroundImageOpacity !== undefined);
  const shouldUseSweep = Boolean(backgroundImage && backgroundSweep);
  const sweepDuration = typeof backgroundSweepDurationSec === "number" && backgroundSweepDurationSec > 0 ? backgroundSweepDurationSec : 5;
  const maxCombinedOpacity = typeof backgroundSweepMaxOpacity === "number" && backgroundSweepMaxOpacity >= 0 && backgroundSweepMaxOpacity <= 1 ? backgroundSweepMaxOpacity : undefined;
  const baseOpacity = typeof backgroundImageOpacity === "number" ? backgroundImageOpacity : 0;
  const overlayOpacity = maxCombinedOpacity !== undefined ? Math.max(0, Math.min(1, maxCombinedOpacity - baseOpacity)) : undefined;
  const shouldUseRadialMask = Boolean(backgroundImage && backgroundRadialMask);

  const backgroundStyles: React.CSSProperties = shouldUseLayer
    ? {
        backgroundColor,
      }
    : {
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: backgroundImage ? "cover" : undefined,
        backgroundPosition: backgroundImage ? "center" : undefined,
      };

  return (
    <section className={`relative w-full ${noPadding ? "" : "py-16 sm:py-24"} bg-cover bg-center ${sectionClassName ?? ""}`} style={backgroundStyles}>
      {shouldUseLayer && !shouldUseRadialMask && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center pointer-events-none select-none"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: backgroundImageOpacity }}
        />
      )}
      {shouldUseRadialMask && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center pointer-events-none select-none"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: baseOpacity || 0.2,
            WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
            maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      )}
      {shouldUseSweep && (
        <div
          aria-hidden="true"
          className="background-sweep-overlay"
          style={{ backgroundImage: `url(${backgroundImage})`, animationDuration: `${sweepDuration}s`, opacity: overlayOpacity }}
        />
      )}
      {useContainer ? (
        <PageContainer>
          <div className={shouldUseLayer ? "relative z-10" : undefined}>{children}</div>
        </PageContainer>
      ) : (
        <div className={shouldUseLayer ? "relative z-10" : undefined}>{children}</div>
      )}
    </section>
  );
}


