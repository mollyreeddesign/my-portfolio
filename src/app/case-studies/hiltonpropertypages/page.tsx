"use client";

import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";
import Statement from "@/components/Statement";
import Tabs from "@/components/Tabs";
import ImageShowcaseGrid from "@/components/ImageShowcaseGrid";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import BackToTopButton from "@/components/BackToTopButton";
import dynamic from "next/dynamic";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MediaFrame from "@/components/MediaFrame";
const LottieCover = dynamic(() => import("@/components/LottieCover"), { ssr: false });

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

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video[data-auto-play]'));
    if (!videos || videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            el.muted = true;
            const playPromise = el.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "businessgoal", label: "Business Goal" },
    { id: "design", label: "Process Overview" },
    { id: "insights", label: "Insights" },
    { id: "whatidid", label: "What I Did" },
    { id: "results", label: "Results" },
    { id: "otherhiltonwork", label: "Other Hilton Work" }
  ];

  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] pt-8 sm:pt-12 bg-white text-gray-800">
      <PageContainer>
        <h1 className="custom-h1 mb-6">
          Increased conversion and engagement 
          <span className="hidden md:inline"><br /></span>{" "}
          on 7,000+ hotel property pages
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
        <Tag tag="eCommerce" />
        <Tag tag="Design Systems" />
          <Tag tag="User Testing" />
          <Tag tag="Accessibility" />
          <Tag tag="Prototyping" />
        </div>
        
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-0">
          <div className="space-y-2 mb-0 md:mb-4">
            <div className="space-y-2 mb-6">
              <h2 className="custom-h2">My Role</h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="p">Used testing insights to inform design updates</li>
                <li className="p">Developed and maintained Hilton's design system</li>
                <li className="p">Designed reusable components for 12 Hilton brands</li>
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
      <section className="w-full py-8 sm:py-12 bg-[#f5f5f5] overflow-hidden mb-6 md:mb-0">
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
          <div className="w-full lg:w-3/4 space-y-16 lg:space-y-26">
            <CaseSection id="theproblem" title="The Problem" headingLevel="h4">
              <h2 className="custom-h2">
                Hilton's Property pages were not engaging users, despite their high traffic.
              </h2>
              
              <p className="p mb-12">
                Hilton's UX Research team found through testing that users toggled between Property pages more than any other page during the booking flow. Despite their high traffic, the pages' design didn't reflect their importance. The pages had little brand presence, usability issues, and poor information architecture that weakened the user experience.
              </p>
              
              {/* Original Hilton Property page screens */}
              <div className="w-full mb-4">
                <BeforeAfterSlider
                  beforeSrc="/images/hilton-after.png"
                  afterSrc="/images/hilton-before.png"
                  aspectRatio="3/2"
                  contentInset="0%"
                  objectFit="contain"
                />
              </div>
            </CaseSection>

            <CaseSection id="businessgoal" title="Business Goal" headingLevel="h4">
              <Statement>
                <h2 className="custom-h2">
                  Hilton’s business goal was to see more engagement with Property pages that led to measurable downstream actions such as booking, loyalty enrollment, or continued exploration.
                </h2>
              </Statement>
            </CaseSection>

            <CaseSection id="design" title="Process Overview" headingLevel="h4" className="hidden md:block">
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

            <CaseSection id="insights" title="Insights + Foundations" headingLevel="h4">
            <h2 className="custom-h2">Leveraging my knowledge of Hilton's design system</h2>
              <p className="p mb-4">
              An initial advantage I brought to the Property page redesign was my deep involvement in Hilton's Figma web design system. I had developed a strong familiarity with Hilton's design language across the site from spending significant time creating, maintaining, and improving the system. I regularly spoke at Hilton's monthly Figma showcases, managed library permissions, and supported teams in adopting the system.
              </p>
              <p className="p mb-12">
              My foundational knowledge of Hilton's design system heavily informed the strategy of the new Property page design.
              </p>
                <div className="relative overflow-hidden border border-gray-200 mb-4" style={{ aspectRatio: '3/2' }}>
                <LottieCover src="/animations/hilton-designsystem.json" />
              </div>
              <p className="caption mb-12 text-center">
              Views of the Hilton Design system I built and maintained in Figma.
              </p>
            <h2 className="custom-h2">
            Gaining valuable information with user testing
                </h2>
              <p className="p mb-4">
              A UX designer, a content strategist and I reviewed previous user testing results to investigate prior user pain points and opportunities for page improvement. We also requested fresh user screen recordings where users could verbalize their experience on the Hilton Property pages.
              
              
              </p>
              
              <p className="p mb-12">
              Hearing users articulate their thoughts out loud gave us clarity on which page elements were working and which ones were causing frustration. These insights combined with Hilton’s business goals shaped where we concentrated our design and content updates.
              
              </p>
              {/* Hilton Hero Test Results */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="User testing showed 75% of participants preferred the carousel film strip hero over the gallery grid hero.">
                <Image 
                  src="/images/hilton-herotest.png"
                  alt="Hilton Hero Test Results"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </MediaFrame>
              <p className="caption mb-12 text-center">
              User testing showed 75% of participants preferred the carousel film strip hero over the gallery grid hero.
              
              </p>
              <p className="p mb-12">
              One of the challenges we had with Hilton’s property pages was that they lacked high- quality imagery. Pictures of the rooms, particularly in budget brands like DoubleTree and Hampton Inn, were not attractive or high resolution. This meant it was important for product design to carry the experience. We had to surface business value without turning to the easy answer of premium photography. One example where we achieved this was with room tiles.
              </p>
              {/* Hilton Room Crop Comparison */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="User click through rate increased 2% after changing the crop of the room image from 2:3 to 3:2">
                <Image 
                  src="/images/hilton-roomcrop.png"
                  alt="Hilton Room Crop Comparison"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </MediaFrame>
              <p className="caption mb-8 md:mb-12 text-center">
              User click through rate increased 2% after changing the crop of the room image from 2:3 to 3:2
              
              </p>
              
              
            </CaseSection>

            <CaseSection id="whatidid" title="What I Did" headingLevel="h4">
              
                
                <div className="mb-12">
                  <h2 className="custom-h2">I designed impactful components</h2>
                  <p className="p mb-4">
                  We created new components based on business goals and user testing insights. For example, we designed the Locations component to surface information about nearby attractions and airport transportation; items that we heard users ask for in screen recordings.  We also created the Info Card, a stackable component that showcases bite-sized blocks of heading and paragraph text for easier scannability.
                  </p>
                  <p className="p mb-4">
                  We also surfaced essential information in pre-existing components like Hotel phone numbers, emails, room prices and check-in/check-out times.
                  </p>
                </div>
                
                
             
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full">
                    <div className="flex gap-4 w-1/2">
                    <div className="w-1/2 rounded-lg md:rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                      <video data-auto-play loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                        <source src="/videos/Hilton-Embassy.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="w-1/2 rounded-lg md:rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden relative shadow-lg">
                      <Image src="/images/hilton-meetingcomponent.png" alt="Hilton meeting component" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                  </div>
                    </div>
                  </div>
                  <p className="caption mb-8 md:mb-12 text-center">The Locations component (left) and Info Card component (right)</p>
                <div>
                <h2 className="custom-h2">I unified the Property team into Hilton's core codebase 
                  </h2>
              <p className="p mb-4">
              I knew from my experience on Brand, Booking, Search, and Honors teams that Property pages were missing key branded elements: color, typography, buttons, and iconography. These might seem like minor design details, but they were crucial for signaling to users that they were still within the Hilton experience.
              </p>
              <p className="p mb-4">
              User testing confirmed this. We heard in recorded verbal tests that visitors felt like they had navigated to a different hotel website when entering a Property page.
              </p>
              <p className="p mb-4">
              To address this, I advocated for merging the Property pages into Hilton's monorepo, a major tech debt initiative at the time, so we could use Hilton’s main codebase styles and create a more cohesive, on-brand experience. 
              </p>
              <p className="p mb-12">
              When we designed the new components, not only did we have to make sure they were translatable across all 12 brands but also that we were designing with the correct styles from monorepo. 
              </p>
              {/* Tabs showcasing brand elements with image titles */}
              <div className="w-full mb-4 md:mb-12 hidden lg:block">
                <Tabs
                  items={[
                    {
                      key: "embassysuites",
                      label: "Embassy Suites",
                      titleNode: (
                        <Image
                          src="/images/hilton-embassylogo.png"
                          alt="Embassy Suites by Hilton logo"
                          width={200}
                          height={70}
                          className="h-8 w-auto max-w-full"
                        />
                      ),
                      content: (
                        <div>
                          <ImageShowcaseGrid
                            images={[
                              { src: "/images/hilton-embassytab/attendee.png", alt: "Attendee website" },
                              { src: "/images/hilton-embassytab/whatsnearby.png", alt: "What's nearby" },
                              { src: "/images/hilton-embassytab/amenities.png", alt: "Featured amenities" },
                              { src: "/images/hilton-embassytab/search.png", alt: "Search dates" },
                              { src: "/images/hilton-embassytab/group.png", alt: "Group travel and events" },
                              { src: "/images/hilton-embassytab/member.png", alt: "Hilton Honors member benefits" },
                              { src: "/images/hilton-embassytab/hotelpolicies.png", alt: "Hotel policies" },
                            ]}
                            rightTallBgClass="bg-[#f1f1f1]"
                          />
                        </div>
                      ),
                    },
                    {
                      key: "hiltongardeninn",
                      label: "Hilton Garden Inn",
                      titleNode: (
                        <Image
                          src="/images/hilton-gardeninnlogo.png"
                          alt="Hampton by Hilton logo"
                          width={200}
                          height={80}
                          className="h-18 w-auto max-w-full"
                        />
                      ),
                      content: (
                        <div>
                          <ImageShowcaseGrid
                            images={[
                              { src: "/images/hilton-gardeninntab/attendee.png", alt: "Attendee website" },
                              { src: "/images/hilton-gardeninntab/whatsnearby.png", alt: "What's nearby" },
                              { src: "/images/hilton-gardeninntab/amenities.png", alt: "Featured amenities" },
                              { src: "/images/hilton-gardeninntab/search.png", alt: "Search dates" },
                              { src: "/images/hilton-gardeninntab/group.png", alt: "Group travel and events" },
                              { src: "/images/hilton-gardeninntab/member.png", alt: "Hilton Honors member benefits" },
                              { src: "/images/hilton-gardeninntab/hotelpolicies.png", alt: "Hotel policies" },
                            ]}
                            rightTallBgClass="bg-[#f1f1f1]"
                          />
                        </div>
                      ),
                    },
                    {
                      key: "hamptoninn",
                      label: "Hampton Inn",
                      titleNode: (
                        <Image
                          src="/images/hilton-hamptonlogo.png"
                          alt="Hampton by Hilton logo"
                          width={160}
                          height={48}
                          className="h-14 w-auto max-w-full"
                        />
                      ),
                      content: (
                        <div>
                          <ImageShowcaseGrid
                            images={[
                              { src: "/images/hilton-hamptontab/attendee.png", alt: "Attendee website" },
                              { src: "/images/hilton-hamptontab/whatsnearby.png", alt: "What's nearby" },
                              { src: "/images/hilton-hamptontab/amenities.png", alt: "Featured amenities" },
                              { src: "/images/hilton-hamptontab/search.png", alt: "Search dates" },
                              { src: "/images/hilton-hamptontab/group.png", alt: "Group travel and events" },
                              { src: "/images/hilton-hamptontab/member.png", alt: "Hilton Honors member benefits" },
                              { src: "/images/hilton-hamptontab/hotelpolicies.png", alt: "Hotel policies" },
                            ]}
                            rightTallBgClass="bg-[#f1f1f1]"
                          />
                        </div>
                      ),
                    },
                    {
                      key: "doubletree",
                      label: "Double Tree",
                      titleNode: (
                        <Image
                          src="/images/hilton-doubletreelogo.png"
                          alt="DoubleTree by Hilton logo"
                          width={160}
                          height={48}
                          className="h-14 w-auto max-w-full"
                        />
                      ),
                      content: (
                        <div>
                          <ImageShowcaseGrid
                            images={[
                              { src: "/images/hilton-doubletreetab/attendee.png", alt: "Attendee website" },
                              { src: "/images/hilton-doubletreetab/whatsnearby.png", alt: "What's nearby" },
                              { src: "/images/hilton-doubletreetab/amenities.png", alt: "Featured amenities" },
                              { src: "/images/hilton-doubletreetab/search.png", alt: "Search dates" },
                              { src: "/images/hilton-doubletreetab/group.png", alt: "Group travel and events" },
                              { src: "/images/hilton-doubletreetab/member.png", alt: "Hilton Honors member benefits" },
                              { src: "/images/hilton-doubletreetab/hotelpolicies.png", alt: "Hotel policies" },
                            ]}
                            rightTallBgClass="bg-[#f1f1f1]"
                          />
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
                  <h2 className="custom-h2">I advocated for
                  accessibility</h2>
                  <p className="p mb-4">
                  I collaborated closely with Hilton's accessibility team during these updates to ensure I was up to date with the latest WCAG standards. I advocated for key elements like color contrast, focus indicators and translations adaptability. Accessibility was especially important during this update because the components we built had to be translatable across all Hilton brands. 
                  </p>
                  <p className="p mb-12">
                  I collaborated heavily with software engineering to enforce this. For example, in the Groups & Meetings component shown below, I had to evaluate whether each brand's primary or secondary colors in the monorepo were more accessible when paired with white text and then communicated this to the software engineering team for implimentation.
                  </p>               
                </div>
                  <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full">
                      <div className="w-3/4 rounded-lg md:rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                        <video data-auto-play loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                          <source src="/videos/hilton-accessiblecomponent.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                  <p className="caption mb-12 text-center">
              Examples of the Groups & Meetings component we designed for all 12 of Hilton's portfolio brands. 
              
              </p>
                
              
             
              
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start mb-12 md:gap-8">
                {/* Mobile: Order 2 (image second), Desktop: Left column (image first) */}
                <div className="order-2 lg:order-1">
                  <div className="w-full bg-gray-100 rounded-lg border border-gray-200 relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                    <Image
                      src="/videos/hilton-icons.gif"
                      alt="Hilton custom icons animation"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                
                {/* Mobile: Order 1 (text first), Desktop: Right column (text second) */}
                <div className="order-1 lg:order-2">
                  <h2 className="custom-h2">I created custom iconography</h2>
                  <p className="p mb-12 md:mb-4">
                  A teammate and I created a library of over 100 proprietary icons for Hilton. We used a keyline grid and a comprehensive icon creation guide to keep the library consistent.
                  
The icons were published company- wide using the Hilton shared codebase. They were adopted across the entire Hilton website, the Hilton app, Marketing, Legal, and Hotel signage.
                  </p>
                </div>
              </div>
              
            </CaseSection>

            <CaseSection id="results" title="Results">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Mobile: Order 2, Desktop: Left column */}
                <div className="order-2 md:order-1 col-span-1">
                  <p className="p mb-4">
                  This redesign directly drove higher engagement and reservations in Hilton property pages. In addition, it addressed significant tech debt by pushing the team's transition into Hilton's main codebase. This made the product far more sustainable. Updates became quicker to implement, design system changes could be adopted seamlessly, and site improvements no longer required band-aid fixes over an old system.
                  </p>
                  
                  {/* Mobile: Buttons below paragraph */}
                  <div className="md:hidden space-y-6 pt-4">
                  <BackToTopButton className="btn btn--primary w-full" />
                  <a href="https://www.hilton.com/en/hotels/oggmkhx-hampton-suites-maui-north-shore/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary w-full">
                      <span>View Live Project</span>
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
                
                {/* Mobile: Order 1, Desktop: Right column */}
                <div className="order-1 md:order-2 col-span-1 space-y-3">
                  <Metric className="md:flex md:w-full" metric="32% increase in property page visits" icon="arrow-up-right" />
                  <Metric className="md:flex md:w-full" metric="11% increase in reservations from property pages" icon="arrow-up-right" />
                  <Metric className="md:flex md:w-full" metric="Reduced product team tech debt" icon="arrow-down-right" />
                  
                  {/* Desktop: Buttons below metrics */}
                  <div className="hidden md:block space-y-3 pt-4">
                    
                    <BackToTopButton className="btn btn--primary w-full" />
                    <a href="https://www.hilton.com/en/hotels/oggmkhx-hampton-suites-maui-north-shore/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary w-full">
                      <span>View Live Project</span>
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="otherhiltonwork" title="Other Hilton Work" headingLevel="h4">
              <h2 className="custom-h2">Personal Information</h2>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full">
                      <div className="w-3/4 rounded-lg md:rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                        <video data-auto-play loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                          <source src="/videos/Hilton-PersonalInformation.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
              <p className="caption mb-12 text-center">
              Two other designers and I were tasked to give users a more focused view of their personal information. I brought new iconography, accessibility considerations, clear typographic hierarchy and an improved user experience.
              </p>
              <h2 className="custom-h2">Navigation</h2>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full">
                      <div className="w-1/4 rounded-lg md:rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                        <video data-auto-play loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                          <source src="/videos/Hilton-SiteNavigation.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
              <p className="caption mb-8 md:mb-12 text-center">
              A UX designer and I modernized Hilton's site navigation across desktop, tablet and mobile. I brought accessible focus indicators, optical alignment, typography changes and improved the information architecture.
              </p>
                          </CaseSection>
              
              {/* Back to Top Button */}
              <div className="flex justify-center mt-16 w-full">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn btn--primary w-full md:w-auto"
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



