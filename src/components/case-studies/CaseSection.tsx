import React from "react";

type CaseSectionProps = {
  id: string;
  title?: string;
  headingLevel?: 'h2' | 'h3' | 'h4';
  className?: string;
  children: React.ReactNode;
};

export default function CaseSection({ id, title, headingLevel = 'h2', className, children }: CaseSectionProps) {
  const sectionClassName = `scroll-mt-18${className ? ` ${className}` : ""}`;
  
  const renderHeading = () => {
    if (!title) return null;
    
    const baseClasses = "mb-1";
    const headingClasses = {
      h2: `custom-h2 ${baseClasses}`,
      h3: `custom-h3 ${baseClasses}`,
      h4: `custom-h4 ${baseClasses}`
    };
    
    const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;
    
    return <HeadingTag className={headingClasses[headingLevel]}>{title}</HeadingTag>;
  };
  
  return (
    <section id={id} className={sectionClassName}>
      {renderHeading()}
      {children}
    </section>
  );
}


