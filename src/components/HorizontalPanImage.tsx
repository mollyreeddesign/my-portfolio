'use client';

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type HorizontalPanImageProps = {
  src: string;
  alt: string;
};

export default function HorizontalPanImage({ src, alt }: HorizontalPanImageProps) {
  const [positionPercent, setPositionPercent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const fraction = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setPositionPercent(Math.max(0, Math.min(100, fraction * 100)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    onScroll();
    const handler = () => onScroll();
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [onScroll]);

  return (
    <div className="relative h-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: `${positionPercent}% 50%` }}
      />
      <div
        ref={scrollRef}
        className="absolute bottom-0 left-0 right-0 h-3 overflow-x-auto overflow-y-hidden scrollbar-thin"
        aria-label="Scroll to pan image horizontally"
      >
        <div className="h-full w-[250%]" />
      </div>
    </div>
  );
}


