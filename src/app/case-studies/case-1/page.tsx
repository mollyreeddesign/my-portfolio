import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";

export const metadata: Metadata = {
  title: "Case Study 1 | Portfolio",
  description: "Details for case study 1.",
};

export default function CaseStudyOnePage() {
  return (
    <main className="min-h-[60vh] py-8 sm:py-12 bg-white text-[#2c2c2c]">
      <PageContainer>
      <h1 className="text-3xl font-semibold mb-4">Case Study 1</h1>
      <p className="p text-foreground/80">
        Replace with the project background, problem statement, goals, process,
        and outcomes. Include visuals and metrics where helpful.
      </p>
      <p className="p-secondary mt-4">
        This is a secondary paragraph using Work Sans in #767676.
      </p>
      <div className="mt-8">
        <h2 className="custom-h3 mb-3">Process overview</h2>
        <ProcessOverview
          steps={[
            "Discovery",
            "User Research",
            "Ideation",
            "Design",
            "Prototype",
            "Test & Iterate",
            "Launch",
          ]}
        />
      </div>
      </PageContainer>
    </main>
  );
}


