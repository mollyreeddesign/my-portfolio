import React from "react";
import Link from "next/link";
import Tag, { TagProps } from "@/components/Tag";

type CardProps = {
  image: string;
  title: string;
  description?: string;
  href: string;
  tags?: TagProps[];
  className?: string;
};

export default function Card({
  image,
  title,
  description,
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
        <div className="w-full overflow-hidden bg-[#F6F6F6] h-48 sm:h-56 lg:h-64">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="p-4 md:p-5 mt-auto">
          <h3 className="custom-h3 text-[#2C2C2C]">{title}</h3>
          {description ? (
            <p className="mt-2 text-sm text-[#2C2C2C]">{description}</p>
          ) : null}
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


