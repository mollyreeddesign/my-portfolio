"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Tag from "@/components/Tag";

export type BeforeAfterSliderProps = {
  beforeSrc?: string;
  beforeVideo?: string;
  afterSrc?: string;
  afterVideo?: string;
  alt?: string;
  className?: string;
  aspectRatio?: string; // e.g. "3/2"
  contentInset?: string; // e.g. "6%" or "24px" to shrink images inside the frame
  objectFit?: "cover" | "contain";
  afterImageBackground?: string; // Background color for after image wrapper
  afterImageMatchBefore?: boolean; // If true, match the before video's size and border styling
};

export default function BeforeAfterSlider({ beforeSrc, beforeVideo, afterSrc, afterVideo, alt = "Before and after comparison", className, aspectRatio = "3/2", contentInset = "0%", objectFit = "contain", afterImageBackground, afterImageMatchBefore }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positionPct, setPositionPct] = useState<number>(50);
  const isDraggingRef = useRef<boolean>(false);

  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPositionPct(clamp(pct, 0, 100));
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  }, [updateFromClientX]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    updateFromClientX(e.clientX);
  }, [updateFromClientX]);

  const onPointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  useEffect(() => {
    const onMouseUp = () => { isDraggingRef.current = false; };
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-gray-100 rounded-lg overflow-hidden ${className ?? ""}`}
      style={{ aspectRatio }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center" style={{ top: contentInset, right: contentInset, bottom: contentInset, left: contentInset }}>
          {beforeVideo ? (
            <div className="relative rounded-[16px] border-[5px] md:border-[6px] overflow-hidden" style={{ width: "600px", height: "384px", maxWidth: "100%", maxHeight: "100%", borderColor: "#4d4d4d" }}>
              <video
                src={beforeVideo}
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: objectFit === "contain" ? "contain" : "cover" }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          ) : beforeSrc ? (
            <Image src={beforeSrc} alt={alt} fill className={objectFit === "contain" ? "object-contain" : "object-cover"} sizes="(min-width: 768px) 50vw, 100vw" unoptimized />
          ) : null}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - positionPct}% 0 0)`, backgroundColor: afterImageBackground || undefined }}>
        <div className="absolute inset-0 flex items-center justify-center" style={{ top: contentInset, right: contentInset, bottom: contentInset, left: contentInset }}>
          {afterVideo ? (
            <div className="relative rounded-lg border-[5px] md:border-[7px] overflow-hidden" style={{ width: "590px", height: "355px", maxWidth: "100%", maxHeight: "100%", borderColor: "#4d4d4d" }}>
              <video
                src={afterVideo}
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: objectFit === "contain" ? "contain" : "cover" }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          ) : afterSrc ? (
            afterImageMatchBefore && beforeVideo ? (
              <div className="relative rounded-[16px] border-[5px] md:border-[6px] overflow-hidden" style={{ width: "600px", height: "384px", maxWidth: "100%", maxHeight: "100%", borderColor: "#4d4d4d", backgroundColor: afterImageBackground || "transparent" }}>
                <Image src={afterSrc} alt={alt} fill className={objectFit === "contain" ? "object-contain" : "object-cover"} sizes="(min-width: 768px) 50vw, 100vw" unoptimized />
              </div>
            ) : (
              <Image src={afterSrc} alt={alt} fill className={objectFit === "contain" ? "object-contain" : "object-cover"} sizes="(min-width: 768px) 50vw, 100vw" unoptimized />
            )
          ) : null}
        </div>
      </div>

      <div className="absolute top-2 left-2 z-10">
        <Tag tag="Before" className="bg-black/80" />
      </div>
      <div className="absolute top-2 right-2 z-10">
        <Tag tag="After" className="bg-black/80" />
      </div>

      <div
        className="absolute inset-y-0 z-20 flex items-center"
        style={{ left: `${positionPct}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-[2px] h-full bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]" />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          className="absolute left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-gray-700 shadow-md border border-black/10 flex items-center justify-center cursor-ew-resize"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 21 12 15 6" />
            <polyline points="9 6 3 12 9 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}


