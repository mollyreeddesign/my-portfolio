import type { Metadata } from "next";
import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";
import Statement from "@/components/Statement";
import BackToTopButton from "@/components/BackToTopButton";
import { ArrowUpRight } from "lucide-react";
import LottieCover from "@/components/LottieCover";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MediaFrame from "@/components/MediaFrame";

export const metadata: Metadata = {
  title: "Valerie Jurado | Portfolio",
  description: "Brought 7x more contact form conversions to a high-end botanical designer.",
};

export default function ValerieJuradoPage() {
  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "howmightwe", label: "How Might We" },
    { id: "processoverview", label: "Process Overview" },
    { id: "settinggoals", label: "Setting Goals" },
    { id: "whatidid", label: "What I Did" },
    { id: "results", label: "Results" }
  ];
  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] pt-8 sm:pt-12 bg-white text-gray-800">
      <PageContainer>
        <h1 className="custom-h1 mb-6">
        Drove 7x increase in contact form conversions
          <span className="hidden md:inline"><br /></span>{" "}
          for a high-end botanical designer
        </h1>
        <div className="flex flex-wrap gap-2 mb-8">
          <Tag tag="Responsive Web" />
          <Tag tag="Growth Design" />
          <Tag tag="Branding" />
          <Tag tag="Business Goals" />
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 mb-0 md:mb-4">
            <div className="space-y-2 mb-6">
              <h2 className="custom-h2">My role</h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="p">Aligned design direction with business</li>
                <li className="p">Improved lead quality</li>
                <li className="p">Built bespoke business site</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="custom-h2">Team</h2>
              <p className="p">
              Product Design (me) <br />
              Founders • Marketing
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="custom-h2">Result</h2>
            <div className="space-y-3 mb-12 md:mb-0">
              <Metric metric="72% increase in site engagement" icon="arrow-up-right" />
              <Metric metric="7x more contact form conversions" icon="arrow-up-right" />
              <Metric metric="92% reduction in site costs" icon="arrow-down-right" />
            </div>
          </div>
        </div>
      </PageContainer>

      <FullWidthSection backgroundColor="#EAF0FF" sectionClassName="mb-8 md:mb-0" noPadding useContainer={false}>
        <div className="relative w-full overflow-hidden md:hidden" style={{ aspectRatio: '7/4' }}>
          <LottieCover src="/animations/val-mainvideo.json" fit="cover" />
        </div>
        <div className="relative w-full overflow-hidden hidden md:block" style={{ aspectRatio: '21/9' }}>
          <LottieCover src="/animations/val-mainvideo.json" fit="cover" />
        </div>
      </FullWidthSection>

      <PageContainer>
        {/* Sticky Side Menu Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-2">
          {/* Sticky Sidebar - hidden on mobile, 1/4 width on lg+ */}
          <div className="hidden lg:block lg:w-1/4 lg:sticky lg:top-20 lg:self-start">
            <StickyNavigation sections={sections} />
          </div>

          {/* Main Content - full width on mobile, 3/4 width on lg+ */}
          <div className="w-full lg:w-3/4 space-y-16 lg:space-y-26">
            <CaseSection id="theproblem" title="The Problem" headingLevel="h4">
              <h2 className="custom-h2">Valerie Jurado needed a new website that converted visitors into qualified leads while reflecting her high-end, avant-garde aesthetic.</h2>
              <p className="p mb-4">
              Valerie Jurado, a Los Angeles–based botanical designer, needed a new website that could better serve her business goals.
              </p>
              <p className="p mb-4">
              Valerie's original site was built in Squarespace in 2018. It was expensive, had low visual impact and was hard to update. Her business goals and clientele had changed since then. The site's contact form wasn't capturing viable leads and the photography didn't reflect the artistry in her work.
              </p>
              <p className="p mb-12">
              Valerie came to me to redesign and rebuild a website that showcased her brand's value, captured high-quality leads and supported her new business direction.
              </p>
              <div className="w-full mb-4">
                <BeforeAfterSlider
                  beforeSrc="/images/val-after.png"
                  afterSrc="/images/val-before.png"
                  aspectRatio="3/2"
                  contentInset="0%"
                  objectFit="contain"
                />
              </div>
              
            </CaseSection>

            <CaseSection id="howmightwe" title="How might we" headingLevel="h4">
              <Statement><h2 className="custom-h2">How might we create a sustainable digital experience for a botanical designer that converts visitors into leads and showcases business value?</h2></Statement>
              
            </CaseSection>

            <CaseSection id="processoverview" title="Process overview" headingLevel="h4" className="hidden md:block">
              <ProcessOverview
                steps={[
                  "Inital goal setting",
                  "Research + roadmap",
                  "Sitemap + contact form",
                  "Build with Prismic",
                  "Site Launch + measure"
                ]}
              />
            </CaseSection>

            <CaseSection id="settinggoals" title="Setting goals" headingLevel="h4">
              <h2 className="custom-h2">Aligning on Valerie's business goals</h2>
              <p className="p mb-4">
              I set up a remote workshop with Valerie and her business partner, Allan, to define the goals and values guiding the website refresh. From that conversation, a few priorities emerged:
              </p>
              <ul className="list-disc list-outside pl-4 space-y-4 mb-12">
                <li className="p"><strong>Attracting the Right Audience</strong> The few leads from her existing site weren't the right type of clientele.</li>
                <li className="p"><strong>Streamlined Engagement</strong> She wanted an easy way to direct people to her site, where they could quickly contact her or sign up for email newsletters.</li>
                <li className="p"><strong>Defining a Unique Brand</strong> She wanted the brand to emphasize uniqueness and bespoke botanical experiences, rather than just weddings or events.</li>
              </ul>
              <MediaFrame aspectRatio="3 / 2" className="mb-4" enableModal>
              <Image 
                  src="/images/val-brainstorm.png"
                  alt="Valerie, Allan and I's Figjam brainstorm"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                />
                </MediaFrame>
                    <p className="caption mb-12 text-center">
                    Valerie, Allan and I's Figjam brainstorm.
                    </p>
                    <h2 className="custom-h2">Roadmap and scope</h2>
              <p className="p mb-4">
              After the brainstorm, I created a rough Now-Next-Later roadmap to define scope and keep the project on track.
              </p>
              <p className="p mb-12">
              I set the goal to launch the refreshed site within the year, with a plan to add new content quarterly and complete additional enhancements by the end of 2024.
              </p>
              <MediaFrame aspectRatio="3 / 2" enableModal>
              <Image 
                  src="/images/val-nownextlater.png"
                  alt="Valerie, Allan and I's Figjam brainstorm"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                />
                </MediaFrame>
                    <p className="caption mb-12 text-center">
                    The Now-Next-Later roadmap I created from our remote brainstorm session.
                    </p>
                    <h2 className="custom-h2">Competitive research and identifying business values</h2>
              <p className="p mb-4">
              A key part of this project was analyzing competitors in the high-end florist and botanical designer market. We observed that many luxury florists didn’t reference flowers or plants in their logo. The brand sounded more editorial and high fashion when we just used a name. We simplified Valerie's logo by removing ‘Botanical Design’ and used just ‘Valerie Jurado’.
              </p>
              <p className="p mb-4">
              Valerie's favorite designers emphasized minimal UI with large, striking photography. I knew her work photography was a major brand strength, so I designed the site with minimal typography, buttons and text. This let her work take center stage.
              
              </p>
            </CaseSection>

            <CaseSection id="whatidid" title="What I did" headingLevel="h4">
              <h2 className="custom-h2">I defined the site structure</h2>
              <p className="p mb-4">
              I mapped out the site structure to support Valerie's business goals and new brand direction. We decided the homepage would be a long-form, Tumblr-inspired experience, with custom sections to showcase her projects. This would form the bulk of the design and development effort.
              </p>
              <p className="p mb-12">
              One of Valerie's business goals from our initial brainstorm was growing the ‘Greens’ portion of her business, where she designed and maintained living plant displays for her clients. This informed the decision to surface supporting pages like Greens and Floral early on the homepage with About and Contact.
              </p>
              
              <MediaFrame aspectRatio="3 / 2" className="mb-4" enableModal>
              <Image 
                  src="/images/val-sitemap.png"
                  alt="Valeriejurado.com sitemap"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                />
                </MediaFrame>
                    
                    <p className="caption mb-12 text-center">
                    The valeriejurado.com sitemap
                    </p>
                    <h2 className="custom-h2">I aligned business needs with technical solutions</h2>
                    <p className="p mb-4">
                    A key business goal of the refresh was making the site easier for Valerie to update independently. I prioritized two capabilities when choosing platforms:
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-4 mb-4">
                      <li className="p"><strong>Complete Customization</strong> I wanted to build a bespoke experience that didn't look like a template site.
                      </li>
                      <li className="p"><strong>A Sustainable Solution</strong> I wanted Valerie to be able to update content without relying on me to write code.
                      </li>
                    </ul>
                    <p className="mb-12">
                    I selected Prismic, a headless CMS that let me build custom-coded slices with HTML, Tailwind CSS, Next.js, and React. On Valerie's end, she could update text, switch images and rearrange the slices using a clean UI. 
              </p>
              <MediaFrame aspectRatio="3 / 2" className="mb-4" enableModal>
              <Image 
                  src="/images/val-headlesscms.png"
                  alt="Valeriejurado.com sitemap"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                />
                </MediaFrame>
                    <p className="caption mb-12 text-center">
                    My view in VS Code, Valerie's view on Prismic UI and what the user sees in the end. Essentially a diagram of the headless CMS workflow.
                    </p>
              <h2 className="custom-h2">I overhauled the contact form</h2>
                    <p className="p mb-4">
                    I improved the user experience of the contact form by removing a bulk of the fields, minimizing what was required and simplifying the design. I added Mailchimp integrations so Valerie's leads were pulled directly into her mailing list audience when they filled out the contact form. In addition,I added a spam filter to improve lead quality.
              
              </p>
              <p className="p mb-12">
              I explored placing an opt-in form in the footer, however data from Mailchimp revealed that it was collecting mostly spam submissions. We decided to remove it and keep only the main form on the Contact page.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full">
                      <div className="w-3/4 rounded-lg md:rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                        <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                          <source src="/videos/val-spamfilter.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                    <p className="caption mb-12 text-center">
                    The new contact form flow with a Mailchimp spam filter.
                    </p>
                    <MediaFrame aspectRatio="3 / 2" className="mb-4" enableModal>
              <Image 
                  src="/images/val-contactpageflow.png"
                  alt="Valeriejurado.com contact page flow"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                />
                </MediaFrame>
                    <p className="caption mb-12 text-center">
                    I created a service blueprint to show the actions on the business and client side when a user sends a submission through the contact form.
                    </p>
                    
              <h2 className="custom-h2">I built the site</h2>
              <p className="p mb-4">
              Once the design was finalized, I shifted into the development phase. I built the site using Next.js, React, Tailwind CSS and Prismic. To keep it flexible, I coded the content in modular sections that could be rearranged or reused to create new pages.
              </p>
              <p className="p mb-4">
              On the backend, I connected Prismic’s editor to the custom code, so any updates made in the CMS (like swapping photos, changing text, or reordering sections) instantly appeared on the live site. This setup gave Valerie the freedom to update her content independently while keeping the fully custom design we created.
              </p>
              <p className="p mb-4">
              Finally, I set up hosting on Vercel, connected Valerie’s existing domain and provided her team with a walkthrough of the CMS. I wanted to make sure they could confidently use Prismic to update content as her business evolved.
              </p>
              
            </CaseSection>

            <CaseSection id="results" title="Results">
            
            <div className="w-full bg-gray-100 rounded-lg border border-gray-200 overflow-hidden mb-4 md:mb-12 relative" style={{ aspectRatio: '16/9' }}>
                <LottieCover src="/animations/val-finalvideo.json" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Mobile: Order 2, Desktop: Left column */}
                <div className="order-2 md:order-1 col-span-1">
                <p className="p mb-4">
              On December 10, 2024, valeriejurado.com successfully launched with Vercel hosting. Migrating to cloud-based hosting reduced Valerie's annual hosting costs by 92% compared to the cost of her old Squarespace site.
              </p>
              <p className="p mb-4">
              When I measured post-launch metrics (measured 8 months before and after), I found a significant boost in engagement and over 7x more contact form conversions. I can confidently say I achieved Valerie's business goals we identified at the beginning of the project.
              </p>
              <p className="p mb-4 md:mb-12">
              While my work on the contact form and site infrastructure made these improvements possible, the real strength of the site lies in Valerie and her team’s artistry. Their stunning photography and bespoke botanicals are really what give the website its lasting impact. 
              </p>
                  
                                    {/* Mobile: Buttons below paragraph */}
                  <div className="md:hidden space-y-6 pt-4">
                    <BackToTopButton className="btn btn--primary w-full" />
                    <a href="https://www.valeriejurado.com/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary w-full">
                      <span>View Live Project</span>
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
                
                {/* Mobile: Order 1, Desktop: Right column */}
                <div className="order-1 md:order-2 col-span-1 space-y-3">
                <Metric className="md:flex md:w-full" metric="72% increase in site engagement" icon="arrow-up-right" />
              <Metric className="md:flex md:w-full" metric="7x more contact form conversions" icon="arrow-up-right" />
              <Metric className="md:flex md:w-full" metric="92% reduction in site costs" icon="arrow-down-right" />
                  
                  {/* Desktop: Buttons below metrics */}
                  <div className="hidden md:block space-y-3 pt-4">
                    
                    <BackToTopButton className="btn btn--primary w-full" />
                    <a href="https://www.valeriejurado.com/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary w-full">
                      <span>View Live Project</span>
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </CaseSection>
          </div>
        </div>
      </PageContainer>

    </main>
  );
}



