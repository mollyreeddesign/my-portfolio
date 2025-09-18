import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import FullWidthSection from "@/components/FullWidthSection";
import Card from "@/components/Card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About the creator of this portfolio.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[60vh] py-8 sm:py-12">
      <PageContainer>
      <section className="h-[67vh] md:h-[65vh] flex flex-col">
      <h1 className="custom-h1 max-w-[41rem] mb-3 mx-auto">I’m a Product Designer merging distinct craft, user experience and business goals. Advocate for accessibility and sustainable product design.</h1>
      
      </section>
      </PageContainer>
      {/* About Me as a Designer Paragraph */}
      <FullWidthSection backgroundColor="#f5f5f4">
        <PageContainer noPadding className="mb-8 sm:mb-24">
        <Image src="/images/about-smallportrait.png" alt="About Me" width={130} height={130} className="-mt-8 mb-8 mx-auto rounded-full" />
        <div className="mx-auto flex flex-col">
      <h2 className="custom-h2 text-black max-w-[40rem] mb-4 mx-auto">My foundation in visual digital design shapes products that are engaging and easy to use. My career in UI/UX brings a strong business perspective, build-then-test workflow and the adaptability to thrive on any team.
      </h2>
      <p className="p text-black max-w-[40rem] mb-4 mx-auto">
      I’ve been designing digital experiences for people and businesses for over a decade. From agency internships to B2B products to representing design across five agile teams, I’ve grown into a multidisciplinary product designer with a versatile toolkit and strong work ethic.</p>
<p className="p text-black max-w-[40rem] mb-4 mx-auto">Along the way, I’ve built design systems, launched apps, and taken products from concept to reality. I’m not a one-trick pony. I thrive as an all-around designer, committed to improving myself and my team while learning everything I can.</p> 
<p className="text-black !font-semibold max-w-[40rem] mb-4 mx-auto">I’m currently based in Zurich, Switzerland and open to on-site or remote projects.</p>

</div>
        </PageContainer>
        <h1 className="custom-h1 text-black max-w-[41rem] mb-16 text-center mx-auto">Experience</h1>
        <div className="max-w-[45rem] mx-auto flex flex-col">

          <div className="px-8 pb-5 rounded-lg border-b border-gray-200">
          <p className="p text-black">May 2024 - ✷</p>
          <h3 className="custom-h3 !text-2xl text-black mb-0">Freelance Product Designer <span className="!font-normal text-gray-400">BitcoinOS, Valerie Jurado...</span></h3>
          </div>

          <div className="px-8 py-5 border-b border-gray-200">
          <p className="p text-black">July 2023 - May 2024</p>
          <h3 className="custom-h3 !text-2xl text-black mb-0">Travel Career Break <span className="!font-normal text-gray-400">New Zealand, Asia</span></h3>
          
          </div>

          <div className="px-8 py-5 border-b border-gray-200">
          <p className="p text-black mb-0 ">Jan 2022 - Jun 2023</p>
          <h3 className="custom-h3 !text-2xl text-black mb-0">UI Designer <span className="!font-normal text-gray-400">Hilton</span></h3>
          </div>

          <div className="px-8 py-5 border-b border-gray-200">
          <p className="p text-black mb-0 ">Jan 2022 - Jul 2022</p>
          <h3 className="custom-h3 !text-2xl text-black mb-0">Product Designer <span className="!font-normal text-gray-400">Jam Family Calendar</span></h3>
          </div>

          <div className="px-8 py-5 border-b border-gray-200">
          <p className="p text-black mb-0 ">Feb 2019 - Jan 2022</p>
          <h3 className="custom-h3 !text-2xl text-black mb-0">Product Designer <span className="!font-normal text-gray-400">BAI Connect</span></h3>
          </div>

          <div className="px-8 py-5">
          <p className="p text-black mb-0 ">Oct 2017 - Aug 2018</p>
          <h3 className="custom-h3 !text-2xl text-black mb-0">Junior UI Designer <span className="!font-normal text-gray-400">Urban Outfitters</span></h3>
          </div>
          
          </div>

      </FullWidthSection>
      {/* How I Started */}
      <FullWidthSection noPadding backgroundColor="#0b0b0b">
        <PageContainer className="">
        <div>
          <h1 className="custom-h1 text-white text-center mb-16">How I Started</h1>
          <div className="grid grid-cols-1 -mx-16 mb-16 md:grid-cols-3 gap-12">
          <Card
                href=""
                image="/images/uo-after.png"
                title="Early"
                titleClassName="text-white"
                description="I’ve always been fascinated by telling stories through art and technology. Since I was little, I’ve been drawing and writing books, usually several at a time. My earliest memories of using our family computer was using Photoshop to color my own graphic novels and Windows Media Player to make my own short movies and animations.
Naturally, I gravitated toward graphic design where I discovered a love for building websites. I could tell a story that combined all my interests: writing, drawing, animation, and interaction. I graduated in 2017 from the University of the Arts in Philadelphia with a BFA in Graphic Design, with a strong focus on web."
              />
              <Card
                href="/case-studies/case-2"
                image="/images/uo-after.png"
                title="Career"
                description="I launched my career in UI Design at Urban Outfitters HQ in Philadelphia, where I honed my skills in visual design and user experience. In 2018, I moved to LA to design for a boutique telecom company, learning how to build B2B products that met real business goals and thinking beyond just UI. In 2022, I returned to my hometown in Vermont and worked remotely for Hilton Hotels across five agile web product teams, pulling in user research, business goals, and visual design to deliver measurable results. Throughout these roles, I’ve worked closely with engineers, product managers, and stakeholders with tools like Figma, Miro, and Jira to bring ideas from concept to launch."
                titleClassName="text-white"
              />
              <Card
                href="/case-studies/case-2"
                image="/images/uo-after.png"
                title="Recently"
                description="Recently, I’ve had the good fortune to travel extensively with my husband, Kai. We lived in a campervan in New Zealand for nine months, trailoring a DRZ400 and a KTM650. At the end of our trip, we sold everything and bought Honda Blades in Southeast Asia, riding through Cambodia, Laos, Thailand, Taiwan, and Vietnam covering over 23,000 kilometers.
                
These days, I’m based in a small town outside Zurich, Switzerland. When I’m not designing, you’ll find me hiking, gardening, traveling, cooking, learning German, drawing, riding motorcycles, or catching a show.
Explore my work, read my journal, or reach out if you’d like to chat."
                titleClassName="text-white"
              />

          </div>
          <div className="flex justify-center">
            <Link href="/art" className="btn btn--white">
              More of my Art
              <ArrowUpRight />
            </Link>
          </div>
          
        </div>
        </PageContainer>
      </FullWidthSection>
      {/* My Principals */}
      <FullWidthSection backgroundColor="#f5f5f4">
        <PageContainer className="py-18 md:py-28">
        <div>
        <h1 className="custom-h1 text-black text-center mb-10">My Principals</h1>
        <div className="mx-8 md:-mx-8 lg:-mx-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
        <h3 className="custom-h3 text-black mb-2">Accessibility</h3>
        <p className="text-black/80 mb-4">
        I believe technology is for everyone. We now have tools and design standards to make products accessible to every user. I make sure to know them and use them accordingly. </p>
        <p className="text-black/80"><span className="font-bold">I follow WebAIM</span> to stay updated on current accessibility standards.</p>
          </div>
          <div>
        <h3 className="custom-h3 text-black mb-2">Consistency</h3>
        <p className="text-black/80">
        I value consistency because it builds trust in design and character. <span className="font-bold">I use platform-native patterns, style guides, and design systems</span> to create predictable, meaningful interactions that help people interact with technology. I bring the same reliability to my work, my colleagues and my friendships.</p>
        
          </div>
          
          <div>
        <h3 className="custom-h3 text-black mb-2">Sustainability</h3>
        <p className="text-black/80">
        I practice sustainable product design. This means <span className="font-bold">I front load a lot of research and effort up front to get things right the first time,</span> so they don’t need to be updated 6 months later.
If a product is meant to be updated, I design with this in mind so it can be adapted by others.</p>
          </div>
          </div>
          </div>
          
      </PageContainer>
      </FullWidthSection>
    </main>
  );
}


