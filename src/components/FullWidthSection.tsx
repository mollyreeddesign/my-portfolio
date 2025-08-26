import React from "react";
import PageContainer from "@/components/PageContainer";

type FullWidthSectionProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  children: React.ReactNode;
};

export default function FullWidthSection({
  backgroundColor = "#ffffff",
  backgroundImage,
  children,
}: FullWidthSectionProps) {
  const backgroundStyles: React.CSSProperties = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: backgroundImage ? "cover" : undefined,
    backgroundPosition: backgroundImage ? "center" : undefined,
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-cover bg-center" style={backgroundStyles}>
      <PageContainer>
        {children}
      </PageContainer>
    </section>
  );
}


