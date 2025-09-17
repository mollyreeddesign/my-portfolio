"use client";
import Link from "next/link";
import Tag from "@/components/Tag";
import PageContainer from "@/components/PageContainer";
import FullWidthSection from "@/components/FullWidthSection";
import Card from "@/components/Card";
import Metric from "@/components/Metric";
import { ChevronDown, ArrowUpRight, Download, Copy } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-16 sm:py-24">
      <PageContainer>
       <section className="h-[65vh] flex flex-col">
        <div className="text-center my-2 md:-my-16">
        <Image src="/images/home-sky.png" alt="Sky" width={240} height={240} className="mx-auto mb-6" />
        <h1 className="text-xl md:text-3xl mb-2">Product Designer</h1>
        <p className="caption">I design distinct digital experiences<br />{" "}that clarify and convert.</p>
        </div>
         <div className="mt-auto mb-4 self-center text-center">
        <p className="caption">Based in Zurich, CH 🇨🇭</p>
        <p className="caption mb-0 md:mb-2">Open to on-site and remote <span className="text-[9px] align-middle">🟢</span></p>
        <ChevronDown className="mx-auto animated-chevron-down" size={28} strokeWidth={1.25} />
        </div>
      </section>

      

      
      
      
      </PageContainer>
      <FullWidthSection backgroundColor="#E8E8E8" noPadding>
        <PageContainer noPadding>
          <div className="-mx-4 md:-mx-8 lg:-mx-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
            <Card
              href="/case-studies/case-1"
              image="/window.svg"
              title="Increased conversion and engagement on 7,000+ hotel property pages"
              logo="/images/hilton-logo.svg"
              tags={[{ tag: "eCommerce" }, { tag: "Design Systems" }, { tag: "User Testing" }]}
              className="lg:col-span-6"
            />
            <Card
              href="/case-studies/case-2"
              image="/file.svg"
              title="Helped drive 9% revenue growth with a self-checkout program"
              logo="/images/uo-logo.svg"
              logoWidth={280}
              tags={[{ tag: "eCommerce" }, { tag: "Loyalty" }, { tag: "Point of Sale" }]}
              className="lg:col-span-4"
            />
            <Card
              href="/case-studies/case-3"
              image="/window.svg"
              title="Simplified family scheduling with a responsive calendar"
              logo="/images/jam-logo.png"
              tags={[{ tag: "SaaS" }, { tag: "User Flows" }, { tag: "Dashboards" }]}
              className="lg:col-span-4"
            />
            <Card
              href="/case-studies/case-4"
              image="/globe.svg"
              title="Brought 7x more contact form conversions to a high-end botanical designer"
              logo="/images/val-logo.svg"
              tags={[{ tag: "Responsive Web" }, { tag: "Growth Design" }, { tag: "Branding" }]}
              className="lg:col-span-6"
            />
            </div>
          </div>
        </PageContainer>
      </FullWidthSection>
      <FullWidthSection backgroundColor="#0b0b0b">
        <PageContainer className="h-[55vh] text-center">
        <div className="pt-8">
          <h1 className="custom-h1 text-white mb-4">Proven by Experience</h1>
          <p className="mb-8 text-white/80">
          Employing a foundation in visual design, a career <br /> in user experience and a gritty work ethic.
          </p>
          <div className="flex justify-center gap-6">
           <Link href="https://www.linkedin.com/in/mollyreeddesign/" className="btn btn--secondary-white inline-flex">
             LinkedIn
             <ArrowUpRight />
           </Link>
           <Link href="/case-studies/case-4" className="btn btn--secondary-white inline-flex">
             Download CV
             <Download />
           </Link>
          <button
            type="button"
            className="btn btn--secondary-white inline-flex"
            onClick={() => {
              const email = "mollyreeddesign@gmail.com";
              if (navigator?.clipboard?.writeText) {
                navigator.clipboard.writeText(email);
              } else {
                const t = document.createElement("textarea");
                t.value = email;
                document.body.appendChild(t);
                t.select();
                document.execCommand("copy");
                document.body.removeChild(t);
              }
            }}
          >
            Copy Email
            <Copy />
          </button>
           </div>
        </div>
        </PageContainer>
      </FullWidthSection>
      <FullWidthSection backgroundColor="#E8E8E8">
        <PageContainer noPadding className="h-[55vh]">
        <div className="py-12">
        <h1 className="custom-h1 text-black text-center mb-8">How I Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
        <h3 className="custom-h3 text-black mb-2">Align</h3>
        <p className="text-black/80">
        I bring together key business objectives, user/competitor research and product goals.</p>
        <p className="text-black/80"> I define scope early on.</p>
          </div>
          <div>
        <h3 className="custom-h3 text-black mb-2">Create</h3>
        <p className="text-black/80">
        I build working prototypes and validate with testing often.</p> 
        <p className="text-black/80">I don't design in a silo, I bring stakeholders along.</p>
        
          </div>
          <div>
        <h3 className="custom-h3 text-black mb-2">Execute</h3>
        <p className="text-black/80">
        I synthesize research, strategy, and design into a final product.</p>
        <p className="text-black/80"> I maintain my craft from start to finish.</p>
          </div>
          </div>
          </div>
          
      </PageContainer>
      </FullWidthSection>
      <FullWidthSection backgroundColor="#0b0b0b">
        <PageContainer noPadding className="h-[55vh]">
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image src="/images/home-about.png" alt="About" unoptimized width={600} height={600} className="rounded-lg object-cover mx-auto mb-6" style={{ aspectRatio: '1/1' }} />
            </div>
            <div>
          <h1 className="custom-h1 text-white mb-4">I'm a product designer, web designer and artist.</h1>
          <p className="mb-4 text-white/80">
          I’ve been designing experiences in technology for people and businesses for over a decade.
          </p>
          <p className="text-white/80">
          Born and raised in Vermont, USA. Based in
          </p>
          <p className="mb-4 text-white/80">
          <span className="line-through">Philadelphia</span> <span className="line-through">Los Angeles</span> Zurich, CH 🇨🇭
          </p>
          <p className="mb-8 text-white/80">
          Painter, gardener, hiker and motorcyclist.
          </p>
          <div className="flex gap-6">
          <Link href="https://www.linkedin.com/in/mollyreeddesign/" className="btn btn--secondary-white inline-flex">
             LinkedIn
             <ArrowUpRight />
           </Link>
            <Link href="/about" className="btn btn--white inline-flex">
             About Me
             <ArrowUpRight />
           </Link>
           </div>
          </div>
        </div>
        </PageContainer>
      </FullWidthSection>
    </main>
  );
}
