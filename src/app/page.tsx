"use client";
import Link from "next/link";
import Tag from "@/components/Tag";
import PageContainer from "@/components/PageContainer";
import FullWidthSection from "@/components/FullWidthSection";
import Card from "@/components/Card";
import Metric from "@/components/Metric";
import { ChevronDown, ArrowUpRight, Download, Copy } from "lucide-react";
import BackToTopButton from "@/components/BackToTopButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-16 sm:py-32">
      <PageContainer>
       <section className="h-[67vh] md:h-[65vh] flex flex-col">
        <div className="text-center my-2 md:-my-16">
        <Image src="/images/home-sky.png" alt="Sky" width={240} height={240} className="mx-auto mb-6 w-40 h-auto md:w-60 md:h-atuo" sizes="(max-width: 767px) 160px, 240px" />
        <h1 className="text-2xl md:text-3xl mb-2">Product Designer</h1>
        <p className="text-gray-400 text-base md:!text-sm">I design distinct digital experiences<br />{" "}that clarify and convert.</p>
        </div>
         <div className="mt-auto mb-6 md:mb-10 self-center text-center">
        <p className="text-gray-400 text-base md:!text-sm">Based in Zurich, CH 🇨🇭</p>
        <p className="text-gray-400 text-base md:!text-sm mb-2">Open to on-site and remote <span className="text-[9px] align-middle">🟢</span></p>
        <ChevronDown className="mx-auto animated-chevron-down" size={35} strokeWidth={1.75} />
        </div>
      </section>

      </PageContainer>
      <FullWidthSection backgroundColor="#E8E8E8" sectionClassName="scroll-mt-18" >
        <PageContainer noPadding>
          <div className="mx-2 md:-mx-8 lg:-mx-16" id="cases">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
              <Card
                href="/case-studies/case-1"
                image="/images/hilton-after.png"
                title="Increased conversion and engagement on 7,000+ hotel property pages"
                logo="/images/hilton-logo.svg"
                logoWidth={90}
                tags={[{ tag: "eCommerce" }, { tag: "Design Systems" }, { tag: "User Testing" }]}
              />
              <Card
                href="/case-studies/case-2"
                image="/images/uo-after.png"
                title="Helped drive 9% revenue growth with a self-checkout program"
                logo="/images/uo-logo.svg"
                logoWidth={220}
                logoClassName="md:py-1"
                tags={[{ tag: "eCommerce" }, { tag: "Loyalty" }, { tag: "Point of Sale" }]}
              />
              <Card
                href="/case-studies/case-3"
                image="/images/jam-dashexploration.png"
                title="Simplified family scheduling with a responsive calendar"
                logo="/images/jam-logo.png"
                tags={[{ tag: "SaaS" }, { tag: "User Flows" }, { tag: "Dashboards" }]}
              />
              <Card
                href="/case-studies/case-4"
                image="/images/val-nownextlater.png"
                title="Brought 7x more contact form conversions to a high-end botanical designer"
                logo="/images/val-logo.svg"
                tags={[{ tag: "Responsive Web" }, { tag: "Growth Design" }, { tag: "Branding" }]}
              />
            </div>
          </div>
        </PageContainer>
      </FullWidthSection>
      <FullWidthSection backgroundColor="#0b0b0b">
        <PageContainer className="py-22 md:py-32 text-center">
        <div>
          <h1 className="custom-h1 text-white mb-4">Proven by Experience</h1>
          <p className="mb-8 text-white/80 max-w-[18rem] md:max-w-none mx-auto">
          Employing a foundation in visual design, a career in user experience and a gritty work ethic.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
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
        <PageContainer className="py-18 md:py-28">
        <div>
        <h1 className="custom-h1 text-black text-center mb-10">How I Work</h1>
        <div className="mx-8 md:-mx-8 lg:-mx-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
        <h3 className="custom-h3 text-black mb-2">Align</h3>
        <p className="text-black/80">
        I bring together key business objectives, user/competitor research and product goals.
        I define scope early on.</p>
          </div>
          <div>
        <h3 className="custom-h3 text-black mb-2">Create</h3>
        <p className="text-black/80">
        I build working prototypes and validate with testing often. 
        I don't design in a silo, I bring stakeholders along.</p>
        
          </div>
          <div>
        <h3 className="custom-h3 text-black mb-2">Execute</h3>
        <p className="text-black/80">
        I synthesize research, strategy, and design into a final product.
       I maintain my craft from start to finish.</p>
          </div>
          </div>
          </div>
          
      </PageContainer>
      </FullWidthSection>
      <FullWidthSection backgroundColor="#0b0b0b">
        <PageContainer noPadding  className="-mb-6 md:-mb-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <Image src="/images/home-about.png" alt="About" unoptimized width={600} height={600} className="rounded-lg object-cover mx-auto mb-6" style={{ aspectRatio: '1/1' }} />
            </div>
            <div>
          <h1 className="custom-h1 text-white mb-4 md:mb-6">I'm a product designer, web designer and artist.</h1>
          <p className="mb-4 text-white/80">
          I’ve been designing experiences in technology for people and businesses for over a decade.
          </p>
          <p className="text-white/80">
          Born and raised in Vermont, USA. Based in
          </p>
          <p className="mb-4 text-white/80">
          <span className="line-through">Philadelphia</span> <span className="line-through">Los Angeles</span> Zurich, CH 🇨🇭
          </p>
          <p className="mb-14 md:mb-10 text-white/80">
          Painter, gardener, hiker and motorcyclist.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
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
      <FullWidthSection noPadding backgroundColor="#0b0b0b">
        <PageContainer className="-mb-18 md:-mb-48">
        <div className="grid grid-cols-1 mb-22 md:grid-cols-2 gap-12">
          <div className="p-6 md:p-8 bg-white/10 border border-white/30 rounded-lg h-full flex flex-col">
            <p className="text-white/80 mb-8">“Molly was my absolute favorite UI design partner at Hilton. She was quick and receptive to feedback, adapting quickly to stakeholder demands. When in doubt, her own skills and leadership abilities were showcased as she quickly made executive level decisions based on team feedback for overall product success. She was a limited resource, and we made sure to openly and expressively fight for her attentions. She will delight anyone that hires her with her creative abilities and fast approach to art and design.”</p>
            <Link href="https://www.linkedin.com/in/april-walczak" target="_blank" rel="noopener noreferrer" className="mt-auto -m-2 p-2 flex items-center gap-3 rounded-md transition-colors hover:bg-white/5 group">
              <Image src="/images/april.png" alt="April Walczak" width={50} height={50} className="rounded-full object-cover transition-transform duration-200 group-hover:scale-105" />
              <div>
                <h3 className="custom-h3 text-white transition-colors group-hover:text-white group-hover:underline">April Walczak</h3>
                <p className="text-white/70 transition-colors group-hover:text-white/80">UX Design Lead</p>
              </div>
            </Link>
            </div>
            <div className="p-6 md:p-8 bg-white/10 border border-white/30 rounded-lg h-full flex flex-col">
            <p className="text-white/80 mb-4">“I had the pleasure of working with Molly at Hilton, where she jumped right in and became a key part of the team from day one. She picked things up fast, brought a can-do attitude, and always contributed thoughtful, well-reasoned ideas.”
</p>
            <p className="text-white/80 mb-8">“If you’re looking for a smart, dependable designer who makes an impact and is a joy to work with, you’ll be lucky to have her on your team.”</p>
            
            <Link href="https://www.linkedin.com/in/ilke-vn" target="_blank" rel="noopener noreferrer" className="mt-auto -m-2 p-2 flex items-center gap-3 rounded-md transition-colors hover:bg-white/5 group">
              <Image src="/images/ilke.png" alt="Ilke Ingram" width={50} height={50} className="rounded-full object-cover transition-transform duration-200 group-hover:scale-105" />
              <div>
                <h3 className="custom-h3 text-white transition-colors group-hover:text-white group-hover:underline">Ilke Ingram</h3>
                <p className="text-white/70 transition-colors group-hover:text-white/80">Product Designer</p>
              </div>
            </Link>
            </div>
        </div>
        <div className="text-center">
        <BackToTopButton className="btn btn--white inline-flex gap-2" label="Back to Top" />
      </div>
        
        </PageContainer>
      </FullWidthSection>
      
    </main>
  );
}
