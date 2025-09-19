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
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] py-8 sm:py-12 bg-white text-gray-800">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 mb-4">
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
          <div className="w-full lg:w-3/4 space-y-16 lg:space-y-26">
            <CaseSection id="theproblem" title="The Problem" headingLevel="h4">
              <h2 className="custom-h2">
                Hilton's Property pages were poor-performing areas of the site
              </h2>
              
              <p className="p mb-6 md:mb-12">
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
                  Hilton's business goal was to see more purposeful engagement and conversion from Property pages.
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
              <p className="p mb-4 md:mb-12">
              My foundational knowledge of Hilton's design system heavily informed the strategy of the new Property page design.
              </p>
                <div className="relative overflow-hidden border border-gray-200 mb-4" style={{ aspectRatio: '3/2' }}>
                <LottieCover src="/animations/hilton-designsystem.json" />
              </div>
              <p className="caption mb-8 md:mb-12 text-center">
              Views of the Hilton Design system I built and maintained in Figma.
              </p>
            <h2 className="custom-h2">
            Gaining valuable information with user testing
                </h2>
              <p className="p mb-4">
              A UX designer, a content strategist and I reviewed previous user testing results to investigate prior user pain points and opportunities for page improvement. We also requested fresh user screen recordings where users could verbalize their experience on the Hilton Property pages.
              
              
              </p>
              
              <p className="p mb-4 md:mb-12">
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
              <p className="caption mb-8 md:mb-12 text-center">
              User testing showed 75% of participants preferred the carousel film strip hero over the gallery grid hero.
              
              </p>
              <p className="p mb-4 md:mb-12">
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
              
                
                <div className="mb-4 md:mb-12">
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
                    <div className="w-1/2 rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                      <video data-auto-play loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                        <source src="/videos/Hilton-Embassy.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="w-1/2 rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden relative shadow-lg">
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
              <p className="p mb-4 md:mb-12">
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 163"
                          className="h-8 w-auto"
                          aria-hidden="true"
                        >
                          <path fill="#000" d="M158.749 134.877a8.985 8.985 0 0 0-5.939 2.481v-10.404h-6.402v1.176l1.6.241v23.873l-1.6.232v1.2h6.402v-.984a8.032 8.032 0 0 0 4.642 1.336c5.602 0 8.772-3.601 8.772-9.912 0-5.522-3.145-9.239-7.475-9.239ZM156.9 152.38a6.598 6.598 0 0 1-4.09-1.573V138.91a8.202 8.202 0 0 1 3.266-.908c3.145 0 5.034 2.713 5.034 7.003 0 4.562-1.577 7.355-4.21 7.355v.02Zm23.958-17.151h5.35v1.3l-1.493.276-7.435 18.007c-1.693 4.13-3.225 7.551-6.726 7.551a12.325 12.325 0 0 1-3.109-.356v-4.061h1.064l.708 1.6a2.29 2.29 0 0 0 1.532.468c2.201 0 3.658-3.297 4.562-5.466l.2-.472-7.515-17.263-1.457-.316v-1.301h8.223v1.341l-1.601.316 4.838 11.325 4.522-11.405-1.653-.276-.012-1.269.002.001Z"/>
                          <path fill="#2E888D" d="M117.935 1.354H0v152.422h117.935V1.354Z"/>
                          <path fill="#fff" d="M85.248 100.293c0 10.754-4.795 19.293-15.314 19.293H53.855v-35.61c-4.93 3.435-10.963 5.476-16.957 5.066v17.755l.009 6.861c.001.095-.007.189-.01.284v5.62h-2.114v.001h-6.977v6.452h62.283v-25.723h-4.84l-.001.001Z"/>
                          <path fill="#fff" d="M88.172 50.496V29.052H27.805v5.785h9.094l.004 6.47.003.079v3.664l.001 3.496h-.002L36.9 81.534a19.054 19.054 0 0 1-11.109-5.011l-2.132 2.994c4.712 3.781 12.66 8.995 25.608 2.958 1.655-.697 3.253-1.646 4.864-2.67.114-.072.225-.136.34-.21v-.007c.633-.405 1.268-.819 1.91-1.232 5.694-3.661 13.015-6.567 20.1-4.6l-.23.866c-8.838-.076-15.627 4.073-20.971 8.522 0 0 .227.296.365.463 2.199 2.67 7.803 4.576 13.01 2.958 8.666-2.694 7.217-9.239 18.138-8.91l.229-.914c-12.14-13.78-25.446-9.948-30.38-4.961-.924.934-2.025 2.199-2.789 3.097V34.836h14.144a14.606 14.606 0 0 1 15.32 15.659h4.854Z"/>
                        </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 171" className="h-8 w-auto" aria-hidden="true"><path fill="#55565A" fillRule="evenodd" d="M54.118 142.605v16.144c-6.883 8.029-13.86 11.397-24.697 11.397-18.912 0-28.49-13.955-28.49-31.541 0-10.31 2.75-19.395 10.733-26.36 5.59-4.939 12.788-7.165 20.156-7.165 5.068 0 9.056 1.508 13.293 3.997l4.065-3.013h2.2v17.476h-3.7c-1.677-9.707-3.714-15.26-14.971-15.26-7.01 0-12.252 2.914-14.203 9.785-1.785 5.908-2.045 12.599-2.045 18.768 0 5.945.26 12.032 1.24 17.955 1.067 7.231 4.256 12.606 12.433 12.606 3.462 0 5.776-.439 8.17-3.087 1.507-1.764 2.048-2.917 2.048-5.215v-16.487h-9.417v-3.644h29.038v3.644h-5.853Zm55.442 26.333v-3.005h-7.175v-29.425c0-5.936-1.418-9.301-7.176-11.788-3.285-1.44-7.271-1.976-10.733-1.976-6.938 0-18.913 2.957-18.913 11.734 0 3.455 2.57 5.935 6.026 5.935 3.46 0 6.124-2.566 6.124-6.028 0-2.485-2.137-4.076-2.137-5.761 0-2.399 4.89-3.103 6.494-3.103 6.31 0 7.555 2.484 7.555 8.156v8.5c-7.026.715-15.737 1.51-21.582 5.854-3.627 2.664-6.192 6.558-6.192 11.257 0 7.447 5.755 10.787 12.656 10.787 6.318 0 11.384-2.735 15.471-7.412.445 1.056.887 2.122 1.502 3.01 2.307 3.087 7.446 3.265 10.905 3.265h7.175Zm-19.935-23.74v8.247c0 3.276-.359 6.109-3.025 8.324-1.328 1.061-3.024 1.776-4.712 1.776-4.708 0-7.381-3.449-7.381-7.889 0-8.957 8.006-10.018 15.118-10.458Zm58.625-6.464c-3.631 0-6.823-2.481-6.823-6.289 0-2.836 1.859-4.34 1.859-5.055 0-.705-.882-1.062-1.507-1.062-1.415 0-4.167 3.465-4.878 4.43-3.196 4.082-4.342 9.652-4.342 14.787v20.285h8.958v3.108h-29.773v-3.108h7.259v-38.787h-7.259v-3.094h20.899v8.135c3.372-5.307 6.477-9.546 13.395-9.546 5.31 0 9.388 3.437 9.388 8.929 0 4.336-2.837 7.267-7.176 7.267Zm64.951 30.09v-3.014h-7.088v-60.463h-20.768v2.999h7.116v21.404c-3.736-4.521-7.742-7.007-13.792-7.007-3.023 0-6.047.889-8.615 2.22-8.208 4.343-11.918 13.001-11.918 22.022 0 12.731 7.858 23.176 21.067 23.176 6.766 0 9.69-2.842 13.258-8.074v6.737h20.74Zm-31.325-42.439c3.908 0 7.38 3.181 9.07 6.457 1.96 3.796 1.96 9.714 1.96 13.96 0 3.19-.093 8.49-1.332 11.587-1.603 3.796-5.431 8.226-9.875 8.226-8.905 0-9.347-13.976-9.347-20.252 0-6.45.27-19.978 9.524-19.978Zm77.004 17.113c-.893-5.67-1.781-9.833-5.768-14.168-4.076-4.422-10.097-6.608-16.033-6.608-13.654 0-23.726 9.893-23.726 23.538 0 14.264 10.612 23.901 24.613 23.901 10.095 0 15.944-5.102 20.378-13.623l-2.666-1.338c-3.885 6.304-8.327 11.62-16.395 11.62-10.461 0-11.165-9.752-11.165-17.735v-5.587h30.762Zm-14.181-3.102h-16.315c.093-7.078-.97-15.227 8.695-15.227 6.018 0 7.62 3.719 7.62 8.946v6.281Zm49.494 28.542v-3.005h6.038v-27.355c0-4.961 0-11.075-6.568-11.075-5.123 0-9.997 5.047-11.24 9.741-.533 2.215-.445 4.602-.445 6.819v21.87h6.909v3.005h-27.625v-3.005h7.278v-38.869h-7.278v-3.107h20.716v6.903c2.751-3.27 4.608-5.045 8.593-6.636 2.572-1.063 5.397-1.682 8.143-1.682 2.036 0 4.169.354 6.119.883 7.361 2.128 9.124 6.916 9.124 13.819v28.689h7.099v3.005h-26.863Zm41.798 0v-3.108h7.433v-56.319h-7.433v-3.105h28.987v3.105h-7.451v56.319h7.451v3.108h-28.987Zm64.989 0v-3.005h6.01v-27.355c0-4.961 0-11.075-6.551-11.075-5.139 0-10.007 5.047-11.248 9.741-.529 2.215-.437 4.602-.437 6.819v21.87h6.909v3.005h-27.62v-3.005h7.265v-38.869h-7.265v-3.107h20.711v6.903c2.751-3.27 4.606-5.045 8.587-6.636 2.565-1.063 5.399-1.682 8.149-1.682 2.036 0 4.16.354 6.12.883 7.356 2.128 9.118 6.916 9.118 13.819v28.689h7.093v3.005H400.98Zm62.028 0v-3.005h6.016v-27.355c0-4.961 0-11.075-6.547-11.075-5.132 0-10 5.047-11.254 9.741-.525 2.215-.437 4.602-.437 6.819v21.87h6.915v3.005h-27.612v-3.005h7.264v-38.869h-7.264v-3.107h20.697v6.903c2.733-3.27 4.601-5.045 8.583-6.636 2.577-1.063 5.409-1.682 8.155-1.682 2.039 0 4.167.354 6.118.883 7.351 2.128 9.124 6.916 9.124 13.819v28.689h7.089v3.005h-26.847Z"/></svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 350" className="h-14 w-auto" aria-hidden="true"><path fill="#0047B5" d="M227.12 5.88 27.288 62.135C10.915 66.753 0 81.447 0 98.24v122.167c0 16.792 11.335 31.486 27.288 36.104l199.832 56.255c14.694 4.198 30.647 4.198 45.34 0l200.252-55.835C489.085 252.312 500 237.618 500 220.825V98.659c0-16.792-11.335-31.486-27.288-36.104L272.46 5.88c-14.693-4.198-30.227-4.198-45.34 0Z"/><path fill="#D03242" d="M469.353 73.89 269.521 17.635c-13.014-3.779-26.448-3.359-39.042 0L30.646 73.89c-10.914 2.94-18.89 13.434-18.89 24.77v122.165c0 11.335 7.556 21.411 18.892 24.77L230.48 301.85c11.754 3.358 25.188 3.778 39.042 0l199.832-56.255c10.916-2.939 18.892-13.435 18.892-24.77V98.659c-.42-11.755-7.976-21.83-18.892-24.769Zm10.076 146.935c0 7.557-5.038 14.274-12.175 16.373l-200.252 56.256c-10.495 2.938-22.25 3.358-34.005 0L32.746 236.778c-7.137-2.099-12.175-8.816-12.175-16.372V98.659c0-7.556 5.038-14.274 12.175-16.373l200.251-56.255c10.496-2.938 22.251-3.358 34.005 0l199.833 56.255c7.136 2.1 12.174 8.817 12.174 16.373v122.166h.42Z"/><path fill="#fff" d="M413.938 211.17c0-3.359-1.26-5.038-3.779-5.038-2.099 0-3.778 1.259-5.037 2.519v-2.099h-5.038v.839h1.259v12.175h-1.259v.84h6.297v-.84h-1.259V209.49c.839-.419 2.099-1.259 2.938-1.259 1.68 0 2.519.84 2.519 3.359v7.976h-1.259v.84h6.297v-.84h-1.259v-8.396h-.42Zm-24.349-5.038c-4.618 0-7.977 2.939-7.977 7.557 0 5.457 2.939 7.556 7.557 7.556s7.976-2.938 7.976-7.556-2.939-7.557-7.556-7.557Zm0 14.274c-2.1 0-3.359-2.099-3.359-6.298 0-4.198 1.259-6.297 3.359-6.297 2.099 0 3.778 2.099 3.778 6.297 0 4.199-1.679 6.298-3.778 6.298Zm-13.015-4.198v-8.397h3.359v-1.259h-3.359v-4.198l-3.778 1.259v2.939h-2.519v1.259h2.519v9.236c0 2.519.84 3.778 3.778 3.778 1.26 0 2.939-.419 4.618-.839v-.84c-.42.42-1.259.42-2.099.42-2.099-.42-2.519-.84-2.519-3.358Zm-8.816-15.953h-5.038v.839l1.26.42v18.472h-1.26v.839h6.298v-.839h-1.26v-19.731Zm-10.915 4.198c1.259 0 2.099-.84 2.099-2.519 0-1.26-.84-2.099-2.099-2.099-1.259 0-2.099.839-2.099 2.099 0 1.679.84 2.519 2.099 2.519Zm1.679 2.099h-5.038v.839l1.26.42v12.175h-1.26v.839h6.298v-.839h-1.26v-13.434Zm-15.113-4.618h1.679v7.556h-8.816v-7.556h1.259v-.84h-6.717v.84h1.68v17.632h-1.68v.84h6.717v-.84h-1.259v-8.396h8.816v8.396h-1.679v.84h7.137v-.84h-1.26v-17.632h1.26v-.84h-7.137v.84Zm-23.93 5.457h1.26l-3.359 9.236-4.198-8.816 1.26-.42v-.839h-6.298v.839l.84.42 5.877 13.434v.42c-.839 1.679-2.099 4.198-3.778 4.198-.42 0-.84 0-1.259-.42l-.42-1.259h-.84v2.939c.84 0 1.26.42 2.519.42 2.519 0 4.198-2.519 5.458-5.878l5.877-14.274h1.26v-.839h-4.199v.839Zm-17.632-1.259c-1.679 0-2.939.84-4.618 2.099v-7.976h-5.038v.839l1.26.42v18.472h-1.26v.839h5.038v-.839c.84.42 2.099.839 3.779.839 4.198 0 6.717-2.938 6.717-7.556 0-4.198-2.519-7.137-5.878-7.137Zm-1.259 13.434c-1.26 0-2.519-.84-3.359-1.259v-9.236c.84-.42 1.679-.84 2.519-.84 2.519 0 3.778 2.099 3.778 5.458.42 3.778-.839 5.877-2.938 5.877ZM142.317 142.74c0-.42-.419-.84-.839-.84H135.6c5.458-16.373 13.015-34.844 24.35-46.18.419-.42.419-.84.419-1.259 0-.84-.419-1.68-1.679-1.68-5.038 0-23.929 9.657-36.944 48.699h-18.471c4.618-16.372 7.556-26.868 14.693-36.524.84-1.259 1.679-2.518 1.679-3.358 0-1.259-1.259-1.68-3.778-1.68-17.212-.42-42.821 5.038-42.821 15.114 0 1.679.42 2.939 1.68 2.939.419 0 .839 0 1.259-.42 6.717-6.297 17.632-12.175 36.523-14.274-9.235 5.878-17.632 22.25-22.67 38.203h-4.618c-3.358 0-5.877 2.939-5.877 3.779 0 .42.42.839.84.839h8.396c-.42.84-.42 1.26-.42 2.099-6.717 23.93-15.113 52.897-36.104 52.897-4.198 0-7.557-1.679-10.076-4.198-.42-.42-.84-.84-1.259-.84-.84 0-1.26.84-1.26 1.68 0 4.198 5.458 7.976 12.175 7.976 27.288 0 42.821-30.227 50.798-57.934 0-.84.42-1.26.42-2.099h18.891c-11.335 37.363-.839 56.255 5.038 56.255.84 0 1.679-.84 1.26-2.099-2.939-13.434.839-34.005 7.556-54.576h2.519c2.099 1.259 4.198-1.68 4.198-2.519Zm307.305 33.165c-.42 0-.84.42-1.259.84-3.779 5.038-8.816 8.396-13.854 8.396-7.977 0-11.335-7.976-6.717-22.25l6.297-18.892c2.519-8.396 1.259-16.792-7.137-16.792-6.717 0-12.175 4.618-16.373 10.915.84-5.038-.42-9.656-7.137-9.656-1.259 0-2.099 0-2.518 1.26l-.84 2.099c-2.519 7.976-8.816 13.014-14.274 15.113v-4.618c0-7.976-3.778-15.113-12.594-15.113-13.015 0-21.831 11.755-25.609 24.349-.84 2.519-1.679 4.618-2.519 7.137-3.358 6.297-8.816 13.014-12.594 13.014-2.519 0-2.939-2.939-.84-8.816l9.656-30.647h7.976c3.359 0 5.038-2.099 5.038-3.358 0-.42-.42-.84-.84-.84h-10.915l5.878-18.052c.419-1.679-.84-2.099-2.939-2.099-5.458 0-9.656 2.939-11.335 7.977l-3.778 12.174h-5.038c-3.359 0-5.038 2.099-5.038 3.359 0 .42.42.839.84.839h7.976l-8.816 26.869c-2.519 8.396-7.977 14.273-14.694 14.273-1.259 0-2.518 0-3.778-.419 13.854-14.694 18.892-45.341 2.099-45.341-5.457 0-10.495 3.779-14.273 8.817.419-4.199-1.26-7.977-7.557-7.977-1.26 0-2.099 0-2.519 1.26l-7.557 23.929c-2.519 8.396-10.075 18.472-15.113 18.472-2.519 0-2.939-2.939-.84-8.816l5.878-18.892c2.519-8.396 1.259-16.793-7.137-16.793-7.137 0-13.014 5.458-17.213 11.755.84-6.717-1.679-11.755-7.976-11.755-6.717 0-12.175 4.618-16.373 10.916.84-5.038-.42-9.656-7.137-9.656-1.259 0-2.099 0-2.519 1.259l-7.976 23.09c-2.519 8.397-10.076 18.472-15.113 18.472-2.519 0-2.939-2.939-.84-8.816l10.495-32.746c.42-1.679-.419-2.099-2.938-2.099-5.038 0-8.817 2.519-10.496 6.298-.839-4.199-3.358-7.557-8.396-7.557-24.349 0-39.463 52.897-17.632 52.897 5.877 0 10.915-4.199 15.113-10.076 0 5.458 2.519 10.076 8.396 10.076 6.717 0 12.175-5.038 16.373-10.916-1.259 4.618-.42 10.076 5.878 10.076 1.679 0 2.938 0 3.358-1.259l6.717-21.411c3.778-11.755 10.915-20.991 15.953-20.991 2.519 0 2.939 2.939.84 8.816l-6.717 23.09c-2.099 7.137-1.26 12.175 5.457 12.175 1.68 0 2.939 0 3.359-1.26l6.717-21.41c3.778-11.755 10.915-20.991 15.953-20.991 2.519 0 2.939 2.939.839 8.816l-5.877 18.892c-2.519 8.396-1.259 16.792 7.137 16.792 6.717 0 12.175-5.037 16.373-10.915l-5.458 17.632c-2.099 7.137-1.259 12.175 5.458 12.175 1.679 0 2.938 0 3.358-1.259l7.977-24.769c.839 4.198 3.358 6.717 8.396 6.717 4.198 0 7.976-1.68 11.335-4.199 2.099.84 4.618 1.68 6.717 1.68 4.618 0 8.816-2.099 12.595-6.717 0 5.037 2.518 9.236 8.396 9.236 8.816 0 15.953-8.817 20.571-17.213 0 9.236 4.198 17.213 13.854 17.213 13.854 0 22.67-15.114 25.189-28.968 3.778-1.259 7.556-3.358 10.915-6.717l-7.137 22.67c-2.099 7.137-1.26 12.175 5.458 12.175 1.679 0 2.938 0 3.358-1.259l6.717-21.411c3.778-11.755 10.915-20.991 15.953-20.991 2.519 0 2.939 2.939.84 8.816l-4.618 14.274c-6.298 19.311.42 31.906 15.533 31.906 10.075 0 19.311-6.717 19.311-13.014-.419-.42-.839-1.26-1.679-1.26Z"/></svg>
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
                          className="h-14 w-auto"
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
                  <p className="p mb-4 md:mb-12">
                  I collaborated heavily with software engineering to enforce this. For example, in the Groups & Meetings component shown below, I had to evaluate whether each brand's primary or secondary colors in the monorepo were more accessible when paired with white text and then communicated this to the software engineering team for implimentation.
                  </p>               
                </div>
                  <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full">
                      <div className="w-3/4 rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                        <video data-auto-play loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                          <source src="/videos/hilton-accessiblecomponent.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                  <p className="caption mb-8 md:mb-12 text-center">
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
                  <p className="p mb-4">
                  A teammate and I created a library of over 100 proprietary icons for Hilton. We used a keyline grid and a comprehensive icon creation guide to keep the library consistent.
                  
The icons were published company- wide using the Hilton shared codebase. They were adopted across the entire Hilton website, the Hilton app, Marketing, Legal, and Hotel signage.
                  </p>
                </div>
              </div>
              
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
                      <div className="w-3/4 rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
                        <video data-auto-play loop muted playsInline preload="metadata" className="w-full h-full object-cover">
                          <source src="/videos/Hilton-PersonalInformation.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
              <p className="caption mb-8 md:mb-12 text-center">
              Two other designers and I were tasked to give users a more focused view of their personal information. I brought new iconography, accessibility considerations, clear typographic hierarchy and an improved user experience.
              </p>
              <h2 className="custom-h2">Navigation</h2>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                    <div className="flex items-center justify-center h-full">
                      <div className="w-1/4 rounded-2xl border-[5px] md:border-[7px] border-[#4D4D4D] overflow-hidden shadow-lg">
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



