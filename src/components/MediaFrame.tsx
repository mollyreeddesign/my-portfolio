"use client";

import { CSSProperties, ReactNode, cloneElement, isValidElement, useCallback, useEffect, useRef, useState } from "react";

type MediaFrameProps = {
  children: ReactNode;
  /**
   * Aspect ratio for the container. Accepts CSS aspect-ratio values like "3 / 2", "16 / 9", or a number.
   * Defaults to "3 / 2".
   */
  aspectRatio?: number | string;
  /**
   * Tailwind padding classes to apply inside the frame (e.g., "p-4", "px-6 py-8").
   * This padding is applied to an absolutely positioned inner wrapper so it does not alter the outer aspect ratio.
   */
  padding?: string;
  /**
   * Additional classes for the outer container.
   */
  className?: string;
  /**
   * Override the default background utility class.
   */
  backgroundClassName?: string;
  /**
   * Override the default rounding utility class.
   */
  roundedClassName?: string;
  /**
   * Additional classes for the inner content wrapper.
   */
  contentClassName?: string;
  /**
   * Inline styles forwarded to the outer container.
   */
  style?: CSSProperties;
  /** Enable click-to-zoom modal. Defaults to false. */
  enableModal?: boolean;
  /** Override classes for the modal content container. */
  modalClassName?: string;
  /** Caption to show inside the modal (typically same as caption below frame). */
  caption?: ReactNode;
  /** Accessible label for the modal dialog. */
  modalAriaLabel?: string;
};

function cn(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(" ");
}

export default function MediaFrame({
  children,
  aspectRatio = "3 / 2",
  padding = "",
  className = "",
  backgroundClassName = "bg-gray-100",
  roundedClassName = "rounded-lg",
  contentClassName = "flex items-center justify-center",
  style,
  enableModal = false,
  modalClassName = "",
  caption,
  modalAriaLabel = "Expanded media",
}: MediaFrameProps) {
  const containerStyle: CSSProperties = {
    aspectRatio: typeof aspectRatio === "number" ? String(aspectRatio) : aspectRatio,
    ...style,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : (e as MediaQueryList).matches;
      setIsDesktop(matches);
    };
    // Initialize and subscribe
    handler(mq);
    mq.addEventListener?.("change", handler as (e: MediaQueryListEvent) => void);
    return () => mq.removeEventListener?.("change", handler as (e: MediaQueryListEvent) => void);
  }, []);

  const modalEnabled = enableModal && isDesktop;

  const open = useCallback(() => {
    if (modalEnabled) setIsOpen(true);
  }, [modalEnabled]);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <>
      <div
        className={cn(
          "relative w-full overflow-hidden mb-4",
          backgroundClassName,
          roundedClassName,
          modalEnabled && "cursor-zoom-in",
          className
        )}
        style={containerStyle}
        onClick={open}
        role={modalEnabled ? "button" : undefined}
        tabIndex={modalEnabled ? 0 : undefined}
        onKeyDown={(e) => {
          if (!modalEnabled) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        aria-label={modalEnabled ? "Open media in a larger view" : undefined}
      >
        <div className={cn("absolute inset-0 flex items-center justify-center", padding, contentClassName)}>{children}</div>
      </div>

      {modalEnabled && isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-center justify-center py-4 pb-1 md:py-4 md:pb-1"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={modalAriaLabel}
        >
          <div
            className={cn(
              "relative w-full max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden p-4 md:p-6 max-h-[90vh] flex flex-col",
              modalClassName
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-3 right-3 inline-flex cursor-pointer items-center justify-center p-2 rounded-md bg-gray-100/90 hover:bg-gray-200 text-gray-800 shadow-sm border border-gray-200 z-10"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <ZoomableMedia>
              {children}
            </ZoomableMedia>

            
          </div>
        </div>
      )}
    </>
  );
}

function ZoomableMedia({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [baseSize, setBaseSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY;
    const factor = delta > 0 ? 1.1 : 0.9;
    setScale((s) => {
      const next = Math.min(8, Math.max(1, s * factor));
      if (next === 1) setTranslate({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale === 1) return;
    e.preventDefault();
    setIsPanning(true);
    setOrigin({ x: e.clientX - translate.x, y: e.clientY - translate.y });
  }, [scale, translate]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning) return;
    e.preventDefault();
    const container = containerRef.current;
    const width = container?.clientWidth ?? 0;
    const height = container?.clientHeight ?? 0;
    const rawX = e.clientX - origin.x;
    const rawY = e.clientY - origin.y;
    const baseW = baseSize.w || width;
    const baseH = baseSize.h || height;
    const contentW = baseW * scale;
    const contentH = baseH * scale;
    const maxX = Math.max(0, (contentW - width) / 2);
    const maxY = Math.max(0, (contentH - height) / 2);
    const clampedX = Math.max(-maxX, Math.min(maxX, rawX));
    const clampedY = Math.max(-maxY, Math.min(maxY, rawY));
    setTranslate({ x: clampedX, y: clampedY });
  }, [isPanning, origin, scale, baseSize]);

  const endPan = useCallback(() => setIsPanning(false), []);

  const reset = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  // Compute fitted base size (object-contain) for accurate panning on tall/portrait media
  const recomputeBaseSize = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    let mediaW = 0;
    let mediaH = 0;
    const media = content.querySelector('img, video') as HTMLImageElement | HTMLVideoElement | null;
    if (media) {
      if (media instanceof HTMLImageElement) {
        mediaW = media.naturalWidth || 0;
        mediaH = media.naturalHeight || 0;
      } else if (media instanceof HTMLVideoElement) {
        mediaW = media.videoWidth || 0;
        mediaH = media.videoHeight || 0;
      }
    }
    let baseW = cw;
    let baseH = ch;
    if (mediaW > 0 && mediaH > 0 && cw > 0 && ch > 0) {
      const ar = mediaW / mediaH;
      const car = cw / ch;
      if (car > ar) {
        baseH = ch;
        baseW = ch * ar;
      } else {
        baseW = cw;
        baseH = cw / ar;
      }
    }
    setBaseSize({ w: baseW, h: baseH });
    // Clamp translate to new bounds
    const contentW = baseW * scale;
    const contentH = baseH * scale;
    const maxX = Math.max(0, (contentW - cw) / 2);
    const maxY = Math.max(0, (contentH - ch) / 2);
    setTranslate((t) => ({ x: Math.max(-maxX, Math.min(maxX, t.x)), y: Math.max(-maxY, Math.min(maxY, t.y)) }));
  }, [scale]);

  useEffect(() => {
    recomputeBaseSize();
  }, [recomputeBaseSize]);

  useEffect(() => {
    const onResize = () => recomputeBaseSize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [recomputeBaseSize]);

  return (
    <div className="flex-1 min-h-0 flex items-center justify-center">
      <div ref={containerRef} className="relative w-[80vw] h-[80vh] max-w-[80vw] max-h-[80vh] bg-white select-none">
        <div
          className={cn("absolute inset-0 flex items-center justify-center overflow-hidden", scale > 1 ? (isPanning ? "cursor-grabbing" : "cursor-grab") : "")}
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endPan}
          onMouseLeave={endPan}
          onDragStart={(e) => e.preventDefault()}
        >
          <div
            ref={contentRef}
            className="will-change-transform"
            style={{
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
              transformOrigin: "center center",
              width: baseSize.w || '100%',
              height: baseSize.h || '100%'
            }}
          >
            {isValidElement(children)
              ? cloneElement(children as any, {
                  className: cn((children as any).props?.className, "h-full w-full object-contain select-none"),
                  draggable: false,
                })
              : children}
          </div>
        </div>

        <div className="absolute bottom-3 right-3 flex gap-2 z-10">
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(8, s * 1.1))}
            className="inline-flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 border border-gray-200 shadow-sm px-3 py-1 text-sm"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(1, s / 1.1))}
            className="inline-flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 border border-gray-200 shadow-sm px-3 py-1 text-sm"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 border border-gray-200 shadow-sm px-3 py-1 text-sm"
            aria-label="Reset zoom"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}


