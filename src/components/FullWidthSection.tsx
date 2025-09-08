import React from "react";
import PageContainer from "@/components/PageContainer";

type FullWidthSectionProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  children: React.ReactNode;
  useContainer?: boolean;
  sectionClassName?: string;
  noPadding?: boolean;
};

export default function FullWidthSection({
  backgroundColor = "#ffffff",
  backgroundImage,
  children,
  useContainer = true,
  sectionClassName,
  noPadding = false,
}: FullWidthSectionProps) {
  const backgroundStyles: React.CSSProperties = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: backgroundImage ? "cover" : undefined,
    backgroundPosition: backgroundImage ? "center" : undefined,
  };

  return (
    <section className={`w-full ${noPadding ? "" : "py-16 sm:py-24"} bg-cover bg-center ${sectionClassName ?? ""}`} style={backgroundStyles}>
      {useContainer ? (
        <PageContainer>
          {children}
        </PageContainer>
      ) : (
        <>{children}</>
      )}
    </section>
  );
}


