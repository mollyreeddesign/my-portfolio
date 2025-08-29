"use client";

import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";
import Statement from "@/components/Statement";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CaseStudyOnePage() {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > scrollY);
      setPrevScrollY(scrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "businessgoal", label: "Business Goal" },
    { id: "design", label: "Process Overview" },
    { id: "insights", label: "Insights" },
    { id: "whatidid", label: "What I did" },
    { id: "results", label: "Results" },
    { id: "otherhiltonwork", label: "Other Hilton Work" }
  ];

  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] py-8 sm:py-12 bg-white text-gray-800">
      <PageContainer>
        <h1 className="custom-h1 mb-6">
          Increased conversion and engagement
          <span className="hidden md:inline"><br /></span>
          on 7,000+ hotel property pages
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Tag tag="User Testing" />
          <Tag tag="Accessibility" />
          <Tag tag="Prototyping" />
          <Tag tag="Design Systems" />
          <Tag tag="Templating" />
        </div>
        
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 mb-4">
            <div className="space-y-2 mb-6">
              <h2 className="custom-h2">My role</h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="p">Designed testable prototypes</li>
                <li className="p">Built and maintained a design system</li>
                <li className="p">Advocated for accessibility and sustainability</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="custom-h2">Team</h2>
              <p className="p">
                UX Design • Content Design <br />
                Product • Software Engineering
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="custom-h2">Result</h2>
            <div className="space-y-3">
              <Metric metric="32% increase in property page visits" icon="arrow-up-right" />
              <Metric metric="11% increase in reservations from property pages" icon="arrow-up-right" />
              <Metric metric="Reduced product team tech debt" icon="arrow-down-right" />
            </div>
          </div>
        </div>
      </PageContainer>

      {/* Custom Full Width Section - bypasses PageContainer */}
      <section className="w-full py-8 sm:py-12 bg-[#f5f5f5] overflow-hidden">
        <div className="relative overflow-hidden">
          {/* Background images positioned behind */}
          <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 opacity-90 w-full px-8 sm:px-12 md:px-16 lg:px-30 overflow-hidden">
              <div className="relative overflow-hidden" style={{ width: 'calc(100% + 140px)', marginLeft: '-140px' }}>
                <Image 
                  src="/images/hilton-hamptoninn.png"
                  alt="Hampton by Hilton Hotel"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg border border-[#D9D9D9] transition-transform duration-1000 ease-out hidden md:block"
                  style={{
                    transform: `translateX(-${isScrollingDown ? Math.min(scrollY * 0.2, 70) : Math.max(scrollY * 0.1, 0)}px)`
                  }}
                />
              </div>
              <div className="relative overflow-hidden" style={{ width: 'calc(100% + 140px)', marginRight: '-70px' }}>
                <Image 
                  src="/images/hilton-embassysuites.png"
                  alt="Embassy Suites by Hilton Hotel"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg border border-[#D9D9D9] transition-transform duration-1000 ease-out hidden md:block"
                  style={{
                    transform: `translateX(${isScrollingDown ? Math.min(scrollY * 0.2, 70) : Math.max(scrollY * 0.1, 0)}px)`
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Front image positioned on top */}
          <div className="relative z-10 flex justify-center">
            <Image 
              src="/images/hilton-doubletree.png"
              alt="DoubleTree Resort by Hilton Hotel"
              width={700}
              height={525}
              className="w-full h-auto rounded-lg border border-[#D9D9D9] max-w-3xl"
            />
          </div>
        </div>
      </section>

      <PageContainer>
        {/* Sticky Side Menu Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-2">
          {/* Sticky Sidebar - hidden on mobile, 1/4 width on lg+ */}
          <div className="hidden lg:block lg:w-1/4 lg:sticky lg:top-20 lg:self-start">
            <StickyNavigation sections={sections} />
          </div>

          {/* Main Content - full width on mobile, 3/4 width on lg+ */}
          <div className="w-full lg:w-3/4 space-y-16 lg:space-y-20">
            <CaseSection id="theproblem" title="The Problem" headingLevel="h4">
              <h2 className="custom-h2">
                Hilton's Property pages were poor-performing areas of the site.
              </h2>
              
              <p className="p mb-6">
                Hilton's UX Research team found through testing that users toggled between Property pages more than any other page during the booking flow. Despite their high traffic, the pages' design didn't reflect their importance. The pages had little brand presence, usability issues, and poor information architecture that weakened the user experience.
              </p>
              
              {/* Original Hilton Property page screens */}
              <div className="w-full rounded-lg mb-4 overflow-hidden">
                <Image 
                  src="/images/hilton-originalscreens.png"
                  alt="Original Hilton Property page screens"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              
              <p className="caption mb-8 text-center">
                DoubleTree by Hilton Denver Cherry Creek original Property page.
              </p>
            </CaseSection>

            <CaseSection id="businessgoal" title="Business Goal" headingLevel="h4">
              <Statement>
                <h2 className="custom-h2">
                  Hilton's business goal was to see more purposeful engagement and conversion from Property pages.
                </h2>
              </Statement>
            </CaseSection>

            <CaseSection id="design" title="Process Overview">
            <ProcessOverview
                steps={[
                  "Look at past tests",
                  "Make + test prototypes",
                  "Design new components",
                  "Monorepo Merge",
                  "Launch new components"
                ]}
              />
              
              
          
            </CaseSection>

            <CaseSection id="insights" title="Insights + Opportunities" headingLevel="h4">
            <h2 className="custom-h2">
            Gaining valuable information with user testing
                </h2>
              <p className="p mb-4">
              A UX designer, a content strategist and I reviewed previous user testing results to investigate prior user pain points and opportunities for page improvement. We also requested fresh user screen recordings where users could verbalize their experience on the page.


              </p>
              
              <p className="p mb-4">
              Hearing users articulate their thoughts out loud gave us clarity on which page elements were working and which ones were causing frustration. These insights combined with Hilton’s business goals shaped where we concentrated our design and content updates.

              </p>
              {/* Hilton Hero Test Results */}
              <div className="w-full rounded-lg mb-4 overflow-hidden">
                <Image 
                  src="/images/hilton-herotest.png"
                  alt="Hilton Hero Test Results"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <p className="caption mb-8 text-center">
              User testing showed 75% of participants preferred the carousel film strip hero over the gallery grid hero.

              </p>
              <p className="p mb-4">
              One of the challenges we had with Hilton’s property pages was that they lacked high- quality imagery. Pictures of the rooms, particularly in budget brands like DoubleTree and Hampton Inn, were not attractive or high resolution. This meant it was important for product design to carry the experience. We had to surface business value without turning to the easy answer of premium photography. One example where we achieved this was with room tiles.
              </p>
              {/* Hilton Room Crop Comparison */}
              <div className="w-full rounded-lg mb-4 overflow-hidden">
                <Image 
                  src="/images/hilton-roomcrop.png"
                  alt="Hilton Room Crop Comparison"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <p className="caption mb-8 text-center">
              User click through rate increased 2% after changing the crop of the room image from 2:3 to 3:2

              </p>
              
              
            </CaseSection>

            <CaseSection id="whatidid" title="What I did" headingLevel="h4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start mb-4 md:gap-8">
                {/* Left column with text content */}
                <div>
                  <h2 className="custom-h2">I designed impactful components</h2>
                  <p className="p mb-4">
                  We created new components based on business goals and user testing insights.
                  </p>
                  <p className="p mb-4">
                  We also surfaced essential information in pre-existing components like Hotel phone numbers, emails, room prices and check-in/check-out times.
                  </p>
                </div>
                
                {/* Right column with placeholder image box */}
                <div>
                <div className="w-full bg-gray-100 rounded-lg" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                      Placeholder Image Box<br/>(3:2 aspect ratio)
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start mb-4 md:gap-8">
                {/* Left column with text content */}
                <div>
                  <h2 className="custom-h2">I advocated for
                  accessibility</h2>
                  <p className="p mb-4">
                  I collaborated closely with Hilton's accessibility team during these updates to ensure I was up to date with the latest WCAG standards. Color contrast, Focus Indicators and translations adaptability were key elements I made sure to advocate for.
                  </p>
                  
                </div>
                
                {/* Right column with placeholder image box */}
                <div>
                  <div className="w-full bg-gray-100 rounded-lg" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                      Placeholder Image Box<br/>(3:2 aspect ratio)
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="custom-h2">I brought key branded elements into Property pages like
              buttons, colors, icons and font.</h2>
              <p className="p mb-4">
              I knew from my experience on Brand, Booking, Search, and Honors teams that Property pages were missing key branded elements: color, typography, buttons, and iconography. These might seem like minor design details, but they were crucial for signaling to users that they were still within the Hilton experience.
              </p>
              <p className="p mb-4">
              User testing confirmed this. We heard in recorded verbal tests that visitors felt like they had navigated to a different hotel website when entering a Property page.
              </p>
              <p className="p mb-4">
              To address this, I advocated for merging the Property pages into Hilton’s monorepo, a major tech debt initiative at the time, so we could use Hilton’s main codebase styles and create a more cohesive, on-brand experience.
              </p>
              {/* Placeholder Box - 3:2 aspect ratio */}
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  Placeholder Box (3:2 aspect ratio)
                </div>
              </div>
              <p className="caption mb-8 text-center">
              After merging into the monorepo, Hilton components could inherit color, font, and button styles based on the brand site they appeared on.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start mb-12 md:gap-8">
                {/* Mobile: Order 2 (image second), Desktop: Left column (image first) */}
                <div className="order-2 lg:order-1">
                  <div className="w-full bg-gray-100 rounded-lg" style={{ aspectRatio: '1/1' }}>
                    <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                      Placeholder Image Box<br/>(Square - 1:1 aspect ratio)
                    </div>
                  </div>
                </div>
                
                {/* Mobile: Order 1 (text first), Desktop: Right column (text second) */}
                <div className="order-1 lg:order-2">
                  <h2 className="custom-h2">I created custom iconography</h2>
                  <p className="p mb-4">
                  A teammate and I created a library of over 100 proprietary icons for Hilton. We used a keyline grid and a comprehensive icon creation guide to keep the library consistent.

The icons were published company- wide using the Hilton shared codebase. They were adopted across the entire Hilton website, the Hilton app, Marketing, Legal, and Hotel signage.
                  </p>
                </div>
              </div>
              <h2 className="custom-h2">I built and maintained Hilton's web design system</h2>
              <p className="p mb-4">
              An advantage I brought to the Property page redesign was my deep involvement in Hilton's Figma web design system. I had developed a strong familiarity with Hilton's design language across the site from spending significant time creating, maintaining, and improving the system.
              </p>
              <p className="p mb-4">
I regularly spoke at Hilton's monthly Figma showcases, managed library permissions, and supported teams in adopting the system. This experience directly improved the Property page update because of my foundational knowledge in Hilton's web styles.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  Placeholder Box (3:2 aspect ratio)
                </div>
              </div>
              <p className="caption mb-8 text-center">
              Views of the Hilton Design system I built and maintained in Figma.
              </p>
            </CaseSection>

            <CaseSection id="results" title="Results">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mobile: Order 2, Desktop: Left column */}
                <div className="order-2 md:order-1 col-span-1">
                  <p className="p mb-4">
                  This redesign directly drove higher engagement and reservations in Hilton property pages. In addition, it addressed significant tech debt by pushing the team's transition into Hilton's main codebase. This made the product far more sustainable. Updates became quicker to implement, design system changes could be adopted seamlessly, and site improvements no longer required band-aid fixes over an old system.
                  </p>
                  
                  {/* Mobile: Buttons below paragraph */}
                  <div className="md:hidden space-y-3 pt-4">
                    <button className="btn btn--primary w-full">
                      <span>View Case Study</span>
                      <ArrowRight size={20} />
                    </button>
                    <button className="btn btn--secondary w-full">
                      <span>Download PDF</span>
                      <Download size={20} />
                    </button>
                  </div>
                </div>
                
                {/* Mobile: Order 1, Desktop: Right column */}
                <div className="order-1 md:order-2 col-span-1 space-y-3">
                  <Metric metric="32% increase in property page visits" icon="arrow-up-right" />
                  <Metric metric="11% increase in reservations from property pages" icon="arrow-up-right" />
                  <Metric metric="Reduced product team tech debt" icon="arrow-down-right" />
                  
                  {/* Desktop: Buttons below metrics */}
                  <div className="hidden md:block space-y-3 pt-4">
                    <button className="btn btn--primary w-full">
                      <span>View Case Study</span>
                      <ArrowRight size={20} />
                    </button>
                    <button className="btn btn--secondary w-full">
                      <span>Download PDF</span>
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="otherhiltonwork" title="Other Hilton Work" headingLevel="h4">
              <h2 className="custom-h2">Personal Information</h2>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  Placeholder Box (3:2 aspect ratio)
                </div>
              </div>
              <p className="caption mb-8 text-center">
              Two other designers and I were tasked to give users a more focused view of their personal information. I brought new iconography, accessibility considerations, clear typographic hierarchy and an improved user experience.
              </p>
              <h2 className="custom-h2">Navigation</h2>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  Placeholder Box (3:2 aspect ratio)
                </div>
              </div>
              <p className="caption text-center">
              A UX designer and I modernized Hilton's site navigation across desktop, tablet and mobile. I brought accessible focus indicators, optical alignment, typography changes and improved the information architecture.
              </p>
                          </CaseSection>
              
              {/* Back to Top Button */}
              <div className="flex justify-center mt-16 mb-8">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn btn--primary"
                >
                  <span>Back to Top</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
      </PageContainer>

      
    </main>
  );
}


