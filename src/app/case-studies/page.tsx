import Link from "next/link";
import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";

export const metadata: Metadata = {
  title: "Case Studies | Portfolio",
  description: "A selection of case studies.",
};

const studies = [
  { slug: "case-1", title: "Case Study 1", summary: "High-level overview of project one." },
  { slug: "case-2", title: "Case Study 2", summary: "High-level overview of project two." },
  { slug: "case-3", title: "Case Study 3", summary: "High-level overview of project three." },
  { slug: "case-4", title: "Case Study 4", summary: "High-level overview of project four." },
];

export default function CaseStudiesIndexPage() {
  return (
    <main className="min-h-[60vh] py-8 sm:py-12">
      <PageContainer>
      <h1 className="text-3xl font-semibold mb-6">Case Studies</h1>
      <ul className="space-y-4">
        {studies.map((study) => (
          <li key={study.slug} className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-4 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors">
            <Link href={`/case-studies/${study.slug}`} className="block">
              <h2 className="text-xl font-medium">{study.title}</h2>
              <p className="text-sm text-foreground/80 mt-1">{study.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
      </PageContainer>
    </main>
  );
}


