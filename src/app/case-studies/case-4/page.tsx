import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Case Study 4 | Portfolio",
  description: "Details for case study 4.",
};

export default function CaseStudyFourPage() {
  return (
    <main className="min-h-[60vh] py-8 sm:py-12 bg-white text-[#2c2c2c]">
      <PageContainer>
      <h1 className="text-3xl font-semibold mb-4">Case Study 4</h1>
      <p className="text-base/7 text-foreground/80">
        Replace with the project background, problem statement, goals, process,
        and outcomes. Include visuals and metrics where helpful.
      </p>
      </PageContainer>
    </main>
  );
}


