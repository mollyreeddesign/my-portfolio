import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto max-w-6xl p-4 md:p-8 lg:px-16">
      {children}
    </div>
  );
}


