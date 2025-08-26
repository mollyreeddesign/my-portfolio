import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About the creator of this portfolio.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[60vh] py-8 sm:py-12">
      <PageContainer>
      <h1 className="text-3xl font-semibold mb-4">About</h1>
      <h2 className="custom-h2 mb-3">This is an H2 set in Work Sans</h2>
      <h3 className="custom-h3 mb-3">This is an H3 set in Work Sans</h3>
      <h4 className="custom-h4 mb-3">This is an H4 set in Work Sans</h4>
      <p className="p text-foreground/80">
        This is the about page. Replace this content with your bio, experience,
        and what you’re currently working on.
      </p>
      </PageContainer>
    </main>
  );
}


