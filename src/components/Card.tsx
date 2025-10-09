"use client";
import React, { useState } from "react";
import Link from "next/link";
import Tag, { TagProps } from "@/components/Tag";
import { ChevronDown } from "lucide-react";

type CardProps = {
  image: string;
  title: string;
  titleClassName?: string;
  description?: string;
  logo?: string;
  logoClassName?: string;
  logoWidth?: number; // px
  logoHeight?: number; // px
  href: string;
  tags?: TagProps[];
  className?: string;
  imageClassName?: string;
  imageContainerClassName?: string;
  /** Remove the border around the image frame */
  noFrameBorder?: boolean;
  /** Disable hover animations (scale, shadow, overflow changes) */
  disableHover?: boolean;
  /** Disable pointer cursor and prevent navigation on click */
  disablePointer?: boolean;
  /**
   * Optional render prop to draw custom overlay/layers around the image area.
   * Useful for per-card hover animations that can escape the image frame.
   */
  renderImageOverlay?: (hovered: boolean) => React.ReactNode;
  /**
   * Optional render prop to fully control the content inside the framed image area.
   * When provided, the default <img> will not render and this content will fill the frame.
   */
  renderImageContent?: (hovered: boolean) => React.ReactNode;
};

export default function Card({
  image,
  title,
  titleClassName,
  description,
  logo,
  logoClassName,
  logoWidth,
  logoHeight,
  href,
  tags,
  className,
  imageClassName,
  imageContainerClassName,
  noFrameBorder,
  disableHover,
  disablePointer,
  renderImageOverlay,
  renderImageContent,
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);
  
  // Detect whether the device supports hover (e.g., desktop with a fine pointer)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mql.matches);
    update();
    try {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    } catch {
      // Safari < 14 fallback
      mql.addListener(update);
      return () => mql.removeListener(update);
    }
  }, []);

  const hoverEnabled = !disableHover;
  const effectiveHovered = hoverEnabled && canHover && isHovered;
  const hasLongDescription = typeof description === "string" && description.trim().length > 120;
  return (
    <Link
      href={href}
      className={`${hoverEnabled ? "group" : ""} block h-full ${disablePointer ? "cursor-default" : ""} ${className ?? ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (disablePointer) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <div className="flex h-full flex-col">
        <div className={`relative w-full aspect-[3/2] ${imageContainerClassName ?? ""}`}>
          {/* Cropped image frame */}
          <div className={`relative h-full w-full ${noFrameBorder ? "" : "border"} rounded-md overflow-hidden ${hoverEnabled ? "md:group-hover:overflow-visible" : ""} z-0 transition-shadow duration-300 ease-out ${hoverEnabled ? "group-hover:shadow-md" : ""}`}>
            {typeof renderImageContent === "function" ? (
              <div className="absolute inset-0">
                {renderImageContent(effectiveHovered)}
              </div>
            ) : (
              <img
                src={image}
                alt={title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out ${hoverEnabled ? "group-hover:scale-[1.03]" : ""} ${imageClassName ?? ""}`}
                loading="lazy"
              />
            )}
          </div>
          {/* Custom overlay that can escape the frame */}
          {typeof renderImageOverlay === "function" ? (
            <div className={`pointer-events-none absolute inset-0 z-10 overflow-hidden ${hoverEnabled ? "group-hover:overflow-visible" : ""}`}>
              {renderImageOverlay(effectiveHovered)}
            </div>
          ) : null}
        </div>
        <div className="py-2 md:py-3 mt-2">
          {logo ? (
            <div className="mb-3">
              <img
                src={logo}
                alt=""
                className={`${!logoWidth && !logoHeight ? "h-[20px] md:h-[20px] w-auto" : ""} object-contain ${logoClassName ?? ""}`}
                style={{ width: logoWidth ? `${logoWidth}px` : undefined, height: logoHeight ? `${logoHeight}px` : undefined }}
                loading="lazy"
              />
            </div>
          ) : null}
          <h3 className={`custom-h3 text-[#2C2C2C] ${titleClassName ?? ""}`}>{title}</h3>
          {description ? (
            <div className="mt-2">
              <p
                className={`!text-sm text-foreground/80 transition-[max-height] duration-300 ease-in-out ${
                  isExpanded ? "max-h-[40rem]" : "max-h-[3.25rem] md:max-h-[3.5rem] overflow-hidden"
                }`}
                style={!isExpanded ? {
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                } as React.CSSProperties : undefined}
              >
                {description}
              </p>
              {hasLongDescription ? (
                <button
                  type="button"
                  className="mt-1 flex items-center gap-1 underline underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded((v) => !v);
                  }}
                >
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                  />
                  {isExpanded ? "Less" : "More"}
                </button>
              ) : null}
            </div>
          ) : null}
          {Array.isArray(tags) && tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t, idx) => (
                <Tag key={`${t.tag}-${idx}`} {...t} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}


