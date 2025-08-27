import React from "react";

type CaseSectionProps = {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export default function CaseSection({ id, title, className, children }: CaseSectionProps) {
  const sectionClassName = `scroll-mt-18${className ? ` ${className}` : ""}`;
  return (
    <section id={id} className={sectionClassName}>
      {title ? <h2 className="custom-h2 mb-6">{title}</h2> : null}
      {children}
    </section>
  );
}


