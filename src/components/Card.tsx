"use client";
import React, { useState } from "react";
import Link from "next/link";
import Tag, { TagProps } from "@/components/Tag";

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
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasLongDescription = typeof description === "string" && description.trim().length > 120;
  return (
    <Link
      href={href}
      className={`block h-full overflow-hidden ${className ?? ""}`}
    >
      <div className="flex h-full flex-col">
        <div className="relative w-full aspect-[3/2] border rounded-md overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
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
                className={`!text-sm text-foreground/80 transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                  isExpanded ? "max-h-[40rem]" : "max-h-[3.25rem] md:max-h-[3.5rem]"
                }`}
              >
                {description}
              </p>
              {hasLongDescription ? (
                <button
                  type="button"
                  className="mt-2 underline underline-offset-2 hover:opacity-80"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded((v) => !v);
                  }}
                >
                  {isExpanded ? "Show less" : "Read more"}
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


