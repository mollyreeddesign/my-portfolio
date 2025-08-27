import Link from "next/link";
import Tag from "@/components/Tag";
import PageContainer from "@/components/PageContainer";
import FullWidthSection from "@/components/FullWidthSection";
import Card from "@/components/Card";
import Metric from "@/components/Metric";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="py-16 sm:py-24">
      <PageContainer>
      <section className="text-center sm:text-left">
        <h1 className="custom-h1 tracking-tight">
          Hello, I'm Molly — designer & developer
        </h1>
        <p className="mt-4 text-base/7 text-foreground/80 max-w-2xl">
          I build thoughtful digital experiences. Explore selected work, a bit about me,
          and some art experiments.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/case-studies" className="btn btn--primary">
            View case studies
          </Link>
          <Link href="/about" className="btn btn--secondary">
            About me
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 justify-center sm:justify-start">
          <Tag tag="Product" titile="Product Design" role="designer" type="discipline" />
          <Tag tag="UX" titile="User Experience" role="designer" type="discipline" />
          <Tag tag="React" titile="React" role="developer" type="tech" />
          <Tag tag="Next.js" titile="Next.js" role="developer" type="tech" />
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
          <Metric metric="Uptime" measure="99.98%" success />
          <Metric metric="Monthly Users" measure="24k" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-medium mb-4">Quick links</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li>
            <Link href="/case-studies/case-1" className="block rounded-lg p-4 border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition">
              Case Study 1
            </Link>
          </li>
          <li>
            <Link href="/case-studies/case-2" className="block rounded-lg p-4 border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition">
              Case Study 2
            </Link>
          </li>
          <li>
            <Link href="/case-studies/case-3" className="block rounded-lg p-4 border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition">
              Case Study 3
            </Link>
          </li>
          <li>
            <Link href="/art" className="block rounded-lg p-4 border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition">
              Art
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-medium mb-4">Buttons</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn btn--primary">
            <span>Primary</span>
            <ArrowRight size={20} />
          </button>
          <button className="btn btn--secondary">
            <span>Secondary</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
      
      <section className="mt-16">
        <h2 className="text-xl font-medium mb-4">Featured work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4">
          <Card
            href="/case-studies/case-1"
            image="/window.svg"
            title="Case Study 1"
            description="High-level overview of project one."
            tags={[{ tag: "Product" }, { tag: "Next.js" }]}
            className="lg:col-span-5"
          />
          <Card
            href="/case-studies/case-2"
            image="/file.svg"
            title="Case Study 2"
            description="High-level overview of project two."
            tags={[{ tag: "UX" }, { tag: "React" }]}
            className="lg:col-span-3"
          />
          <Card
            href="/case-studies/case-3"
            image="/window.svg"
            title="Case Study 3"
            description="High-level overview of project three."
            tags={[{ tag: "Design" }, { tag: "Frontend" }]}
            className="lg:col-span-3"
          />
          <Card
            href="/art"
            image="/globe.svg"
            title="Art Showcase"
            description="Selected artwork and experiments."
            tags={[{ tag: "Art" }, { tag: "Visual" }]}
            className="lg:col-span-5"
          />
        </div>
      </section>
      </PageContainer>
      <FullWidthSection backgroundImage="/globe.svg" backgroundColor="#0b0b0b">
        <div className="text-center sm:text-left">
          <h2 className="custom-h2 text-white">Full-width demo section</h2>
          <p className="mt-2 text-base/7 text-white/80">
            This band spans the full viewport width, while its content follows the
            same margins as the rest of the page.
          </p>
        </div>
      </FullWidthSection>
    </main>
  );
}
