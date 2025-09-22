"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before revealing after the element is intersecting */
  delayMs?: number;
  /** Initial translateY offset in pixels before reveal */
  offsetY?: number;
  /** Reveal only once (true) or toggle on/off when leaving/entering */
  once?: boolean;
  /** Optional role for wrapper element */
  role?: string;
  /** Optional aria-label for wrapper element */
  ariaLabel?: string;
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  offsetY = 12,
  once = true,
  role,
  ariaLabel,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasRevealed(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const trigger = () => {
              setIsVisible(true);
              setHasRevealed(true);
            };
            if (delayMs > 0) {
              const id = window.setTimeout(trigger, delayMs);
              // Clear timeout if quickly unmounting
              return () => window.clearTimeout(id);
            }
            trigger();
            if (once) observer.unobserve(entry.target);
          } else if (!once && hasRevealed) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // Intentionally not depending on delayMs/once to avoid re-subscribing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, hasRevealed]);

  const style: React.CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : `translateY(${offsetY}px)`,
        transition: "opacity 700ms ease, transform 700ms ease",
        willChange: "opacity, transform",
      };

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      role={role}
      aria-label={ariaLabel}
      data-reveal={true}
      aria-hidden={false}
    >
      {children}
    </div>
  );
}


