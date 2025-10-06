import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import FullWidthSection from "@/components/FullWidthSection";
import Card from "@/components/Card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About the creator of this portfolio.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[60vh] pt-0 pb-8 sm:pb-12 bg-[#0b0b0b]">
      <FullWidthSection
        backgroundColor="#0b0b0b"
        backgroundImage="/images/about-bg-grid.png"
        backgroundImageOpacity={0.2}
        backgroundSweep
        backgroundSweepDurationSec={3.5}
        backgroundSweepMaxOpacity={0.6}
        backgroundRadialMask
        backgroundSweepHideOnMobile
        noPadding
        sectionClassName="h-[67vh] md:h-[85vh] -mt-[72px] md:-mt-[88px] flex items-center justify-center"
      >
        <Reveal>
          <h1 className="custom-h1 max-w-[28rem] md:max-w-[41rem] mb-0 mx-auto text-white text-center">I’m a Product Designer crafting solutions that bring real business impact. Advocate for accessibility and sustainable product design.</h1>
        </Reveal>
      </FullWidthSection>
      {/* About Me as a Designer Paragraph */}
      <FullWidthSection backgroundColor="#f5f5f4">
        <PageContainer noPadding className="mb-16 sm:mb-24">
        <Reveal>
        <Image src="/images/about-smallportrait.png" alt="About Me" width={130} height={130} className="-mt-4 md:-mt-20 mb-8 mx-auto rounded-full" />
        </Reveal>
        <div className="mx-auto flex flex-col">
      <Reveal>
      <h2 className="custom-h2 text-black max-w-[40rem] md:mb-4 mx-auto">My foundation in visual design drives engagement and simplifies complexity. 
      My career in UI/UX connects design decisions to higher conversion and ROI.
      </h2>
      </Reveal>
      <Reveal delayMs={120}>
      <p className="p text-black max-w-[40rem] mb-4 mx-auto">
      I’ve been designing digital experiences for people and businesses for over a decade. From building B2B telecom products to designing the latest features for ecommerce apps, I’ve grown into a multidisciplinary product designer with a versatile toolkit and strong work ethic.</p>
      </Reveal>
      <Reveal delayMs={240}>
<p className="p text-black max-w-[40rem] mb-4 mx-auto">Along the way, I’ve built design systems, launched apps, and taken products from concept to reality. I’ve learned not only how to make good design decisions, but also how to target specific business goals.</p> 
      </Reveal>
      <Reveal delayMs={360}>
<p className="text-black max-w-[40rem] mb-4 mx-auto">I’m not a one-trick pony. I thrive as an all-around designer, constantly improving my craft, supporting my team, and learning everything I can.</p>
      </Reveal>
      <Reveal delayMs={480}>
<p className="text-black !font-semibold max-w-[40rem] mx-auto">I’m currently based in Zurich, Switzerland and open to on-site or remote projects.</p>
      </Reveal>

</div>
        </PageContainer>
        <Reveal>
        <h1 className="custom-h1 text-black md:mb-16 mb-8 text-center mx-auto">Experience</h1>
        </Reveal>
        <Reveal>
        <div className="max-w-[45rem] mx-auto flex flex-col px-4 md:px-8 gap-3 md:gap-5">

          <div className="pb-3 md:pb-5 border-b border-gray-200">
          <p className="p text-black">May 2024 - ✷</p>
          <div className="flex flex-col md:flex-row md:gap-2 gap-0">
          <h3 className="custom-h3 !text-xl md:!text-2xl text-black mb-0">Freelance Product Designer </h3>
          <h3 className="custom-h3 !text-xl md:!text-2xl !font-normal text-gray-400">BitcoinOS, Valerie Jurado...</h3>
          </div>
          </div>

          <div className="pb-3 md:pb-5 border-b border-gray-200">
          <p className="p text-black">July 2023 - May 2024</p>
          <div className="flex flex-col md:flex-row md:gap-2 gap-0">
          <h3 className="custom-h3 !text-xl md:!text-2xl text-black mb-0">Travel Career Break</h3>
          <h3 className="custom-h3 !text-xl md:!text-2xl !font-normal text-gray-400">New Zealand, Asia</h3>
          </div>
          </div>

          <div className="pb-3 md:pb-5 border-b border-gray-200">
          <p className="p text-black mb-0 ">Jan 2022 - Jun 2023</p>
          <div className="flex flex-col md:flex-row md:gap-2 gap-0">
          <h3 className="custom-h3 !text-xl md:!text-2xl md:!text-2xl text-black mb-0">UI Designer</h3>
          <h3 className="custom-h3 !text-xl md:!text-2xl md:!text-2xl !font-normal text-gray-400">Hilton</h3>
          </div>
          </div>

          <div className="pb-3 md:pb-5 border-b border-gray-200">
          <p className="p text-black mb-0 ">Jan 2022 - Jul 2022</p>
          <div className="flex flex-col md:flex-row md:gap-2 gap-0">
          <h3 className="custom-h3 !text-xl md:!text-2xl text-black mb-0">Product Designer</h3>
          <h3 className="custom-h3 !text-xl md:!text-2xl !font-normal text-gray-400">Jam Family Calendar</h3>
          </div>
          </div>

          <div className="pb-3 md:pb-5 border-b border-gray-200">
          <p className="p text-black mb-0 ">Feb 2019 - Jan 2022</p>
          <div className="flex flex-col md:flex-row md:gap-2 gap-0">
          <h3 className="custom-h3 !text-xl md:!text-2xl text-black mb-0">Product Designer</h3>
          <h3 className="custom-h3 !text-xl md:!text-2xl !font-normal text-gray-400">BAI Connect</h3>
          </div>
          </div>

          <div className="pb-3 md:pb-5">
          <p className="p text-black mb-0 ">Oct 2017 - Aug 2018</p>
          <div className="flex flex-col md:flex-row md:gap-2 gap-0">
          <h3 className="custom-h3 !text-xl md:!text-2xl text-black mb-0">Junior UI Designer</h3>
          <h3 className="custom-h3 !text-xl md:!text-2xl !font-normal text-gray-400">Urban Outfitters</h3>
          </div>
          </div>

          </div>
        </Reveal>

      </FullWidthSection>
      {/* How I Started */}
      <FullWidthSection noPadding backgroundColor="#0b0b0b">
        <PageContainer className="mt-12">
        <div>
          <Reveal>
          <h1 className="custom-h1 text-white text-center mb-16">How I Started</h1>
          </Reveal>
          <div className="grid grid-cols-1 mx-0 md:-mx-16 mb-16 md:grid-cols-3 gap-12 text-white">
          <Reveal>
          <Card
                href=""
                image="/images/about-plant.png"
                imageClassName="opacity-90"
                title="Early"
                titleClassName="text-white"
                imageContainerClassName="border-0 p-2 bg-white/95 rounded-lg"
                noFrameBorder
                disableHover
                disablePointer
                description="I’ve always been fascinated by telling stories through art and technology. Since I was little, I’ve been drawing and writing books, usually several at a time. My earliest memories of using our family computer was using Photoshop to color my own graphic novels and Windows Media Player to make my own short movies and animations.
Naturally, I gravitated toward graphic design where I discovered a love for building websites. I could tell a story that combined all my interests: writing, drawing, animation, and interaction. I graduated in 2017 from the University of the Arts in Philadelphia with a BFA in Graphic Design, with a strong focus on web."
              />
              </Reveal>
              <Reveal delayMs={120}>
              <Card
                href=""
                image="/images/about-butter.png"
                imageContainerClassName="border-0 p-2 bg-white/95 rounded-lg"
                imageClassName="opacity-90 bg-black"
                noFrameBorder
                disableHover
                disablePointer
                title="Career"
                description="I launched my career in UI Design at Urban Outfitters HQ in Philadelphia, where I honed my skills in user experience. In 2018, I moved to LA to design for a boutique telecom company, learning how to build B2B products that met real business goals and thinking beyond just UI. In 2022, I returned to my hometown in Vermont and worked remotely for Hilton Hotels across five agile web product teams, pulling in user research, business goals, and visual design to deliver measurable results. Throughout these roles, I’ve worked closely with engineers, product managers, and stakeholders to build apps, websites, and design systems."
                titleClassName="text-white"
              />
              </Reveal>
              <Reveal delayMs={240}>
              <Card
                href=""
                image="/images/about-clip.png"
                title="Recently"
                imageContainerClassName="border-0 p-2 bg-white/95 rounded-lg"
                imageClassName="opacity-90"
                noFrameBorder
                disableHover
                disablePointer
                description="Recently, I’ve had the good fortune to travel extensively with my husband, Kai. We lived in a campervan in New Zealand for nine months, trailoring a DRZ400 and a KTM650. At the end of our trip, we sold everything and bought Honda Blades in Southeast Asia, riding through Cambodia, Laos, Thailand, Taiwan, and Vietnam covering over 23,000 kilometers.
                
These days, I’m based in a small town outside Zurich, Switzerland. When I’m not designing, you’ll find me hiking, gardening, traveling, cooking, learning German, drawing, riding motorcycles, or catching a metal show.
Explore my work, or reach out if you'd like to connect!"
                titleClassName="text-white"
              />
              </Reveal>

          </div>
          <Reveal delayMs={360}>
          <div className="flex justify-center">
            <Link href="/art" className="btn btn--white mb-16">
              More of my Art
              <ArrowUpRight />
            </Link>
          </div>
          </Reveal>
          
        </div>
        </PageContainer>
      </FullWidthSection>
      {/* My Principals */}
      <FullWidthSection backgroundColor="#f5f5f4">
        <PageContainer noPadding className="mb-16 md:mb-8">
        <div>
        <Reveal>
        <h1 className="custom-h1 text-black text-center mb-10">My Principals</h1>
        </Reveal>
        <div className="mx-0 md:-mx-8 lg:-mx-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <Reveal>
        <div>
        <h3 className="custom-h3 text-black mb-2">Accessibility</h3>
        <p className="text-black/80 md:mb-4 mb-0">
        I believe technology is for everyone. We now have tools and design standards to make products accessible to every user. I make sure to know them and use them accordingly. </p>
        <p className="text-black/80"><span className="font-bold">I follow WebAIM</span> to stay updated on current accessibility standards.</p>
          </div>
        </Reveal>
          <Reveal delayMs={120}>
          <div>
        <h3 className="custom-h3 text-black mb-2">Consistency</h3>
        <p className="text-black/80">
        I value consistency because it builds trust in design and character. <span className="font-bold">I use platform-native patterns, style guides, and design systems</span> to create predictable, meaningful experiences. I bring the same reliability to my work, my colleagues and my friendships.</p>
        
          </div>
          </Reveal>
          
          <Reveal delayMs={240}>
          <div>
        <h3 className="custom-h3 text-black mb-2">Sustainability</h3>
        <p className="text-black/80">
        I practice sustainable product design. This means <span className="font-bold">I front load a lot of research and effort up front to get things right the first time,</span> so they don’t need to be updated 6 months later.
If a product is meant to be updated, I design with this in mind so it can be adapted by others.</p>
          </div>
          </Reveal>
          </div>
          </div>
          
      </PageContainer>
      </FullWidthSection>
    </main>
  );
}


