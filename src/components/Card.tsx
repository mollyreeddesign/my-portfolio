import React from "react";
import Link from "next/link";
import Tag, { TagProps } from "@/components/Tag";

type CardProps = {
  image: string;
  title: string;
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
  logo,
  logoClassName,
  logoWidth,
  logoHeight,
  href,
  tags,
  className,
}: CardProps) {
  return (
    <Link
      href={href}
      className={`block h-full overflow-hidden ${className ?? ""}`}
    >
      <div className="flex h-full flex-col">
        <div className="relative w-full aspect-[3/2] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover rounded-md"
            loading="lazy"
          />
        </div>
        <div className="py-2 md:py-3 mt-2">
          {logo ? (
            <div className="mb-3">
              <img
                src={logo}
                alt=""
                className={`${!logoWidth && !logoHeight ? "h-6 md:h-6 w-auto" : ""} object-contain ${logoClassName ?? ""}`}
                style={{ width: logoWidth ? `${logoWidth}px` : undefined, height: logoHeight ? `${logoHeight}px` : undefined }}
                loading="lazy"
              />
            </div>
          ) : null}
          <h3 className="custom-h3 text-[#2C2C2C]">{title}</h3>
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


