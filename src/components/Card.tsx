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
      className={`group block h-full rounded-xl border border-black/[.08] dark:border-white/[.145] bg-[#F6F6F6] shadow-sm overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md ${
        className ?? ""
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="relative w-full bg-[#F6F6F6] h-48 sm:h-56 lg:h-64">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
          {logo ? (
            <div className="absolute inset-0 pointer-events-none flex items-end">
              <div className="px-4 md:px-6 -mb-2 md:-mb-4">
                <img
                  src={logo}
                  alt=""
                  className={`${!logoWidth && !logoHeight ? "h-8 md:h-10 w-auto" : ""} object-contain ${logoClassName ?? ""}`}
                  style={{ width: logoWidth ? `${logoWidth}px` : undefined, height: logoHeight ? `${logoHeight}px` : undefined }}
                  loading="lazy"
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="p-4 md:p-5 mt-auto">
          <h3 className="custom-h3 text-[#2C2C2C]">{title}</h3>
          {Array.isArray(tags) && tags.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
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


