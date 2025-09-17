import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
  noPadding?: boolean;
  className?: string;
};

export default function PageContainer({ children, noPadding, className }: PageContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl ${noPadding ? "" : "p-4 md:p-8 md:pt-12 lg:px-16"} ${className ?? ""}`}>
      {children}
    </div>
  );
}


