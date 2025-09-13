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
              <h2 className="custom-h2">My Role</h2>
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
          <div className="w-full lg:w-3/4 space-y-16 lg:space-y-26">
            <CaseSection id="theproblem" title="The Problem" headingLevel="h4">
              <h2 className="custom-h2">
                Hilton's Property pages were poor-performing areas of the site
              </h2>
              
              <p className="p mb-6 md:mb-12">
                Hilton's UX Research team found through testing that users toggled between Property pages more than any other page during the booking flow. Despite their high traffic, the pages' design didn't reflect their importance. The pages had little brand presence, usability issues, and poor information architecture that weakened the user experience.
              </p>
              
              {/* Original Hilton Property page screens */}
              <div className="w-full bg-gray-100 rounded-lg border border-gray-200 overflow-hidden mb-4 relative flex items-center justify-center" style={{ aspectRatio: '3/2' }}>
                <Image 
                  src="/images/hilton-originalscreens.png"
                  alt="Original Hilton Property page screens"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                />
                <div className="absolute top-2 right-2 z-10">
                  <Tag tag="Before Redesign" className="bg-black/80" />
                </div>
              </div>
              
              <p className="caption mb-8 md:mb-12 text-center">
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
              <div className="w-full bg-gray-100 rounded-lg border border-gray-200 overflow-hidden mb-4 relative" style={{ aspectRatio: '3/2' }}>
                <LottieCover src="/animations/hilton-designsystem.json" />
              </div>
              <p className="caption mb-8 md:mb-12 text-center">
              Views of the Hilton Design system I built and maintained in Figma.
              </p>
            <h2 className="custom-h2">
            Gaining valuable information with user testing
                </h2>
              <p className="p mb-4">
              A UX designer, a content strategist and I reviewed previous user testing results to investigate prior user pain points and opportunities for page improvement. We also requested fresh user screen recordings where users could verbalize their experience on the page.


              </p>
              
              <p className="p mb-4 md:mb-12">
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
              <p className="caption mb-8 md:mb-12 text-center">
              User testing showed 75% of participants preferred the carousel film strip hero over the gallery grid hero.

              </p>
              <p className="p mb-4 md:mb-12">
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
              <p className="caption mb-8 md:mb-12 text-center">
              User click through rate increased 2% after changing the crop of the room image from 2:3 to 3:2

              </p>
              
              
            </CaseSection>

            <CaseSection id="whatidid" title="What I Did" headingLevel="h4">
              
                
                <div className="mb-4 md:mb-12">
                  <h2 className="custom-h2">I designed impactful components</h2>
                  <p className="p mb-4">
                  We created new components based on business goals and user testing insights.
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
                  <p className="caption mb-8 md:mb-12 text-center">The Locations component (left) we designed to surface information about nearby attractions and airport transportation; items that we heard users ask for in screen recordings.  We created the Info box (right) to be a flexible component that showcases bite-sized blocks of text for better information architecture.</p>
                <div>
                <h2 className="custom-h2">I unified Property into Hilton's core codebase 
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
                          <path fill="#000" d="M158.749 134.877a8.985 8.985 0 0 0-5.939 2.481v-10.404h-6.402v1.176l1.6.241v23.873l-1.6.232v1.2h6.402v-.984a8.032 8.032 0 0 0 4.642 1.336c5.602 0 8.772-3.601 8.772-9.912 0-5.522-3.145-9.239-7.475-9.239ZM156.9 152.38a6.598 6.598 0 0 1-4.09-1.573V138.91a8.202 8.202 0 0 1 3.266-.908c3.145 0 5.034 2.713 5.034 7.003 0 4.562-1.577 7.355-4.21 7.355v.02Zm23.958-17.151h5.35v1.3l-1.493.276-7.435 18.007c-1.693 4.13-3.225 7.551-6.726 7.551a12.325 12.325 0 0 1-3.109-.356v-4.061h1.064l.708 1.6a2.29 2.29 0 0 0 1.532.468c2.201 0 3.658-3.297 4.562-5.466l.2-.472-7.515-17.263-1.457-.316v-1.301h8.223v1.341l-1.601.316 4.838 11.325 4.522-11.405-1.653-.276-.012-1.269.002.001Zm30.567-7.471h8.756v1.301l-1.753.215v22.809l1.769.24v1.337h-8.772v-1.337l1.889-.24v-10.404H202.11v10.404l1.729.24v1.337h-8.62v-1.337l1.733-.24v-22.809l-1.733-.231v-1.301h8.616v1.301l-1.729.231v9.757h11.204v-9.757l-1.889-.231.004-1.285Zm13.97 1.768a2.803 2.803 0 0 1 4.151-2.513 2.803 2.803 0 0 1 1.451 2.397 2.843 2.843 0 0 1-2.801 3.03 2.714 2.714 0 0 1-2.813-2.933l.011.02.001-.001Zm4.994 22.737 1.653.232v1.2h-8.064v-1.2l1.653-.232v-15.606l-1.653-.232v-1.2h6.403l.008 17.039v-.001Zm11.569 0 1.648.232v1.2h-8.063v-1.2l1.601-.232V128.37l-1.601-.24v-1.177h6.403l.012 25.31Zm14.593-.592c.857.038 1.716-.028 2.557-.196v1.26a17.952 17.952 0 0 1-5.939 1.2c-3.701 0-4.566-1.692-4.566-4.918V136.94h-3.381v-1.732h3.502v-3.85l4.678-1.416v5.266h4.33v1.732h-4.338v10.977c0 2.833.6 3.733 3.158 3.733v.02l-.001.001Zm13.249-16.97a9.308 9.308 0 0 0-9.912 9.908 8.403 8.403 0 0 0 9.604 9.604 9.17 9.17 0 0 0 9.912-9.604 8.92 8.92 0 0 0-9.604-9.908Zm-.196 18.09c-2.717 0-4.445-2.437-4.445-8.299 0-5.938 1.729-8.379 4.445-8.379 2.801 0 4.522 2.556 4.522 8.379.008 5.99-1.604 8.299-4.514 8.299h-.008Zm31.112-.548 1.653.232v1.2h-8.055v-1.2l1.601-.232v-10.504c0-2.909-1.06-4.205-3.265-4.205a8.007 8.007 0 0 0-3.814 1.532v13.177l1.653.232v1.2h-8.091v-1.2l1.653-.232v-15.502l-1.653-.232v-1.3h6.451v2.556a10.304 10.304 0 0 1 6.646-2.909c3.601 0 5.23 2.125 5.23 6.291l-.008 11.096h-.001Zm13.533-24.113v4.593l.513.097v.4h-2.241v-.4l.523-.097v-4.097l-2.041 4.578h-.211l-1.945-4.506v4.025l.512.097v.4h-1.601v-.4l.496-.097v-4.593l-.496-.112v-.373h1.969l1.545 3.601 1.601-3.601h1.884v.373l-.508.112Zm-11.964-.484h5.074v1.109h-.425l-.112-.584h-1.388v4.553l.592.096v.4h-2.401v-.4l.609-.096v-4.553h-1.389l-.1.584h-.452l-.008-1.109ZM252.959 3.515V1.526H235.59l-10.469 21.745-9.892-21.745h-2.998v-.001H196.38v1.988h6.617v29.513h-6.617v1.988h15.851v-1.988h-6.617V5.35l13.495 29.664h3.114L235.59 7.251v25.774h-6.015l-.001 1.988h6.016v.002h11.354v-.002h6.015v-1.988h-6.015V3.515h6.015Zm87.642-2.335-4.073-.01-.007-.002h-2.224l-14.22 31.859h-5.352v1.988h15.851v-1.988h-6.364l3.78-8.468h11.691l3.779 8.466h-5.686v1.989h22.666v-1.989h-5.627L340.601 1.18Zm-11.722 21.39 4.958-11.106 4.958 11.107h-9.916Zm60.661-8.659c-2.619-.635-1.624-.4-3.824-.937-2.2-.536-8.299-2.212-8.299-5.167 0-2.954 3.437-4.738 7.3-4.861 3.641-.116 7.178 1.638 8.973 4.861a21.844 21.844 0 0 1 1.405 4.25l2.572-.569a27.353 27.353 0 0 1-.416-4.561c.013-1.758-.035-2.715.344-5.258l-1.735-.43-1.759 1.433a22.057 22.057 0 0 0-9.203-2.036c-7.582 0-14.001 4.302-14.001 10.14 0 7.313 8.336 9.854 12.51 10.925l3.557.908c4.139.99 7.591 2.081 7.591 4.926 0 2.73-3.154 5.953-9.011 5.823-4.654-.103-8.064-1.693-10.144-5.26a15.826 15.826 0 0 1-1.913-5l-2.509.43c.272 2.114.423 3.834.478 5.977 0 1.568.039 2.482-.282 4.966l1.994.822 1.63-2.022a26.349 26.349 0 0 0 10.914 2.63c8.91 0 15.378-5.115 15.378-11.44.005-7.314-7.848-9.653-11.55-10.551v.001Zm45.059 0c-2.62-.635-1.624-.4-3.825-.937-2.199-.536-8.299-2.212-8.299-5.167 0-2.954 3.438-4.738 7.3-4.861 3.642-.116 7.178 1.638 8.973 4.861a21.777 21.777 0 0 1 1.405 4.25l2.572-.569a27.353 27.353 0 0 1-.416-4.561c.013-1.758-.035-2.715.344-5.258l-1.735-.43-1.759 1.433a22.06 22.06 0 0 0-9.203-2.036c-7.581 0-14.001 4.302-14.001 10.14 0 7.313 8.336 9.854 12.51 10.925l3.556.908c4.14.99 7.592 2.081 7.592 4.926 0 2.73-3.154 5.953-9.012 5.823-4.653-.103-8.064-1.693-10.144-5.26a15.848 15.848 0 0 1-1.912-5l-2.51.43c.273 2.114.423 3.834.478 5.977 0 1.568.039 2.482-.281 4.966l1.993.822 1.63-2.022a26.348 26.348 0 0 0 10.913 2.63c8.91 0 15.378-5.115 15.378-11.44.005-7.314-7.848-9.653-11.549-10.551l.002.001Zm-138.535 3.793v-.163c4.687-.714 8.324-3.992 8.324-7.934 0-5.084-4.319-8.08-13.037-8.08h-10.377v-.002h-15.851v1.99h6.563v29.508h-6.563v1.99h6.563v.002h21c9.345 0 13.976-3.213 13.976-8.664 0-4.683-4.792-8.49-10.597-8.648h-.001Zm-1.842-.015h-.067c.023 0 .044-.002.067-.003v.003ZM286.12 3.52c5.863 0 8.375 2.884 8.375 6.443a6.442 6.442 0 0 1-6.442 6.442h-5.012V3.52h3.079Zm.63 29.48h-3.71V18.422h5.897a7.29 7.29 0 0 1 7.289 7.288c0 4.026-2.842 7.29-9.476 7.29ZM494.995 3.49H500V1.563h-3.694v-.001h-11.163l-.001 1.926h6.775l-9.84 13.7-9.841-13.702h5.647V1.562h-22.771l-.001 1.925h5.579l11.875 17.445v12.092h-6.686v1.99h24.726v-1.99h-6.686V19.759l11.076-16.27Zm-320.44 29.533-.06.002H163.56V18.399h3.783a4.415 4.415 0 0 1 4.381 4.352v1.381h1.988V10.676h-1.988v1.38a4.415 4.415 0 0 1-4.399 4.354h-3.765V3.513h8.082l.082.001c7.341 0 9.276 3.088 9.702 7.163h2.1l-.707-9.152h-36.411v1.988h5.797v29.512h-5.797v1.989h37.926l.824-10.667h-1.927c-.412 3.362-2.852 8.676-8.676 8.676Zm41.164 31.882h6.953L222.6 84.17c0 7.02-4.552 11.156-11.416 11.156-5.706 0-9.79-2.59-9.79-9.455l.072-20.967h7.561v-1.987h-24.88v1.987h6.748v19.032c0 10.218 7.751 14.337 18.577 14.337 9.191 0 16.428-3.03 16.428-14.91V64.904h6.77v-1.987h-16.951v1.987Zm49.496.001.001-1.99h-23.725v1.99h6.185v29.511h-6.185v1.99h23.724l.001-1.99h-6.186V64.906h6.185Zm53.873-1.992H277.34l-.001 1.992h.001v10.32h1.966v-1.803c.035-5.355 3.771-8.511 10.035-8.511.168 0 .316-.003.444-.006h2.751v29.51h-6.633v1.99h24.621v-1.99h-6.634v-29.51h2.754c.129.003.276.005.444.005 6.259 0 9.992 3.15 10.035 8.496v1.819h1.965V62.914Zm39.854 31.501-.06.001h-10.935V79.79h3.785a4.415 4.415 0 0 1 4.38 4.352v1.382h1.988V72.068h-1.988v1.38a4.416 4.416 0 0 1-4.399 4.354h-3.765V64.904h8.081l.083.002c7.341 0 9.275 3.087 9.702 7.162h2.1l-.707-9.151h-36.411v1.988h5.797v29.512h-5.797v1.988h37.926l.824-10.666h-1.927c-.412 3.362-2.852 8.676-8.677 8.676Zm42.388-19.112c-2.62-.636-1.624-.401-3.825-.937-2.199-.536-8.298-2.213-8.298-5.167 0-2.955 3.437-4.738 7.3-4.862 3.641-.116 7.177 1.639 8.972 4.862a21.846 21.846 0 0 1 1.406 4.25l2.572-.57a27.351 27.351 0 0 1-.416-4.56c.012-1.758-.035-2.716.344-5.259l-1.735-.43-1.76 1.434a22.05 22.05 0 0 0-9.202-2.036c-7.582 0-14.002 4.302-14.002 10.14 0 7.313 8.337 9.854 12.51 10.925l3.557.908c4.14.99 7.592 2.08 7.592 4.927 0 2.73-3.153 5.952-9.011 5.822-4.654-.103-8.064-1.692-10.145-5.259a15.848 15.848 0 0 1-1.912-5l-2.51.43c.273 2.114.422 3.833.479 5.976 0 1.568.038 2.482-.283 4.966l1.993.823 1.63-2.023a26.36 26.36 0 0 0 10.914 2.63c8.911 0 15.379-5.115 15.379-11.44.004-7.313-7.848-9.653-11.55-10.551h.001Zm-236.278 0c-2.62-.636-1.625-.401-3.825-.937-2.199-.536-8.298-2.213-8.298-5.167 0-2.955 3.437-4.738 7.299-4.862 3.642-.116 7.178 1.639 8.973 4.862a21.846 21.846 0 0 1 1.406 4.25l2.572-.57a27.246 27.246 0 0 1-.416-4.56c.012-1.758-.036-2.716.344-5.259l-1.735-.43-1.76 1.434a22.054 22.054 0 0 0-9.202-2.036c-7.582 0-14.002 4.302-14.002 10.14 0 7.313 8.337 9.854 12.51 10.925l3.556.908c4.141.99 7.592 2.08 7.592 4.927 0 2.73-3.153 5.952-9.01 5.822-4.654-.103-8.064-1.692-10.145-5.259a15.848 15.848 0 0 1-1.912-5l-2.51.43c.273 2.114.423 3.833.478 5.976 0 1.568.039 2.482-.281 4.966l1.993.823 1.63-2.023a26.356 26.356 0 0 0 10.913 2.63c8.911 0 15.379-5.115 15.379-11.44.005-7.313-7.848-9.652-11.549-10.55Z"/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 171" className="h-8 w-auto" aria-hidden="true"><path fill="#55565A" fillRule="evenodd" d="M54.118 142.605v16.144c-6.883 8.029-13.86 11.397-24.697 11.397-18.912 0-28.49-13.955-28.49-31.541 0-10.31 2.75-19.395 10.733-26.36 5.59-4.939 12.788-7.165 20.156-7.165 5.068 0 9.056 1.508 13.293 3.997l4.065-3.013h2.2v17.476h-3.7c-1.677-9.707-3.714-15.26-14.971-15.26-7.01 0-12.252 2.914-14.203 9.785-1.785 5.908-2.045 12.599-2.045 18.768 0 5.945.26 12.032 1.24 17.955 1.067 7.231 4.256 12.606 12.433 12.606 3.462 0 5.776-.439 8.17-3.087 1.507-1.764 2.048-2.917 2.048-5.215v-16.487h-9.417v-3.644h29.038v3.644h-5.853Zm55.442 26.333v-3.005h-7.175v-29.425c0-5.936-1.418-9.301-7.176-11.788-3.285-1.44-7.271-1.976-10.733-1.976-6.938 0-18.913 2.957-18.913 11.734 0 3.455 2.57 5.935 6.026 5.935 3.46 0 6.124-2.566 6.124-6.028 0-2.485-2.137-4.076-2.137-5.761 0-2.399 4.89-3.103 6.494-3.103 6.31 0 7.555 2.484 7.555 8.156v8.5c-7.026.715-15.737 1.51-21.582 5.854-3.627 2.664-6.192 6.558-6.192 11.257 0 7.447 5.755 10.787 12.656 10.787 6.318 0 11.384-2.735 15.471-7.412.445 1.056.887 2.122 1.502 3.01 2.307 3.087 7.446 3.265 10.905 3.265h7.175Zm-19.935-23.74v8.247c0 3.276-.359 6.109-3.025 8.324-1.328 1.061-3.024 1.776-4.712 1.776-4.708 0-7.381-3.449-7.381-7.889 0-8.957 8.006-10.018 15.118-10.458Zm58.625-6.464c-3.631 0-6.823-2.481-6.823-6.289 0-2.836 1.859-4.34 1.859-5.055 0-.705-.882-1.062-1.507-1.062-1.415 0-4.167 3.465-4.878 4.43-3.196 4.082-4.342 9.652-4.342 14.787v20.285h8.958v3.108h-29.773v-3.108h7.259v-38.787h-7.259v-3.094h20.899v8.135c3.372-5.307 6.477-9.546 13.395-9.546 5.31 0 9.388 3.437 9.388 8.929 0 4.336-2.837 7.267-7.176 7.267Zm64.951 30.09v-3.014h-7.088v-60.463h-20.768v2.999h7.116v21.404c-3.736-4.521-7.742-7.007-13.792-7.007-3.023 0-6.047.889-8.615 2.22-8.208 4.343-11.918 13.001-11.918 22.022 0 12.731 7.858 23.176 21.067 23.176 6.766 0 9.69-2.842 13.258-8.074v6.737h20.74Zm-31.325-42.439c3.908 0 7.38 3.181 9.07 6.457 1.96 3.796 1.96 9.714 1.96 13.96 0 3.19-.093 8.49-1.332 11.587-1.603 3.796-5.431 8.226-9.875 8.226-8.905 0-9.347-13.976-9.347-20.252 0-6.45.27-19.978 9.524-19.978Zm77.004 17.113c-.893-5.67-1.781-9.833-5.768-14.168-4.076-4.422-10.097-6.608-16.033-6.608-13.654 0-23.726 9.893-23.726 23.538 0 14.264 10.612 23.901 24.613 23.901 10.095 0 15.944-5.102 20.378-13.623l-2.666-1.338c-3.885 6.304-8.327 11.62-16.395 11.62-10.461 0-11.165-9.752-11.165-17.735v-5.587h30.762Zm-14.181-3.102h-16.315c.093-7.078-.97-15.227 8.695-15.227 6.018 0 7.62 3.719 7.62 8.946v6.281Zm49.494 28.542v-3.005h6.038v-27.355c0-4.961 0-11.075-6.568-11.075-5.123 0-9.997 5.047-11.24 9.741-.533 2.215-.445 4.602-.445 6.819v21.87h6.909v3.005h-27.625v-3.005h7.278v-38.869h-7.278v-3.107h20.716v6.903c2.751-3.27 4.608-5.045 8.593-6.636 2.572-1.063 5.397-1.682 8.143-1.682 2.036 0 4.169.354 6.119.883 7.361 2.128 9.124 6.916 9.124 13.819v28.689h7.099v3.005h-26.863Zm41.798 0v-3.108h7.433v-56.319h-7.433v-3.105h28.987v3.105h-7.451v56.319h7.451v3.108h-28.987Zm64.989 0v-3.005h6.01v-27.355c0-4.961 0-11.075-6.551-11.075-5.139 0-10.007 5.047-11.248 9.741-.529 2.215-.437 4.602-.437 6.819v21.87h6.909v3.005h-27.62v-3.005h7.265v-38.869h-7.265v-3.107h20.711v6.903c2.751-3.27 4.606-5.045 8.587-6.636 2.565-1.063 5.399-1.682 8.149-1.682 2.036 0 4.16.354 6.12.883 7.356 2.128 9.118 6.916 9.118 13.819v28.689h7.093v3.005H400.98Zm62.028 0v-3.005h6.016v-27.355c0-4.961 0-11.075-6.547-11.075-5.132 0-10 5.047-11.254 9.741-.525 2.215-.437 4.602-.437 6.819v21.87h6.915v3.005h-27.612v-3.005h7.264v-38.869h-7.264v-3.107h20.697v6.903c2.733-3.27 4.601-5.045 8.583-6.636 2.577-1.063 5.409-1.682 8.155-1.682 2.039 0 4.167.354 6.118.883 7.351 2.128 9.124 6.916 9.124 13.819v28.689h7.089v3.005h-26.847Z" clipRule="evenodd"/><path fill="#BD2B3B" fillRule="evenodd" d="M2.263 92.356H95.15V.504H2.263v91.852Z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M19.46 16.1a2.165 2.165 0 0 0-2.112 2.233 2.173 2.173 0 0 0 2.229 2.107 2.173 2.173 0 0 0 2.11-2.232A2.169 2.169 0 0 0 19.46 16.1Z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M37.945 13.61c-6.328-5.69-10.79-5.836-20.376-6.354 0 0-4.732-.584-8.302-1.241-.692-.125-1.717-.212-1.92.086-.298.198-.211 1.224-.095 1.915.646 3.576 1.211 8.309 1.211 8.309.49 9.588.618 14.05 6.284 20.396 0 0 15.54 16.611 27.646 4.55 0 0 .887-1 .614-1.827-.455-1.367-8.49-9.132-11.579-12.28-3.167-3.23-6.832-6.103-7.655-6.32a.784.784 0 0 0-.502-.024c-.668.165-1.116.955-1.116.955-.07.135-.217.368-.036.813.557 1.2 2.433 3.624 6.332 7.538 4.133 4.15 9.774 9.202 9.774 9.202-7.059 5.427-17.758-3.296-17.758-3.296-6.934-5.782-9.02-17.1-8.495-25.254 8.154-.479 19.518 1.614 25.265 8.54 0 0 5.787 7.641 4.604 14.257a.67.67 0 0 0 .104.493c1.062 1.458 2.91 1.668 4.338.356.113-.136.092-.155.233-.393 2.208-10.258-8.571-20.422-8.571-20.422Zm40.44 4.545a2.18 2.18 0 0 0-2.229-2.111 2.183 2.183 0 0 0-2.115 2.229 2.175 2.175 0 0 0 2.23 2.108 2.174 2.174 0 0 0 2.114-2.226Z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M80.87 36.639c5.69-6.327 5.837-10.784 6.355-20.37 0 0 .588-4.733 1.241-8.302.126-.688.217-1.717-.086-1.922-.198-.299-1.224-.214-1.914-.09-3.576.642-8.31 1.204-8.31 1.204-9.583.489-14.05.625-20.393 6.285 0 0-16.614 15.544-4.55 27.647 0 0 .999.887 1.825.615 1.37-.454 9.129-8.492 12.28-11.579 3.231-3.168 6.105-6.835 6.325-7.654.035-.123.082-.316.024-.502-.17-.672-.96-1.124-.96-1.124-.13-.066-.37-.218-.814-.026-1.198.558-3.624 2.427-7.544 6.33-4.14 4.133-9.195 9.775-9.195 9.775C49.73 29.863 58.45 19.16 58.45 19.16c5.784-6.931 17.1-9.013 25.254-8.486.483 8.15-1.608 19.516-8.542 25.257 0 0-7.64 5.789-14.257 4.602a.674.674 0 0 0-.489.109c-1.46 1.065-1.67 2.912-.354 4.343.134.107.155.086.389.224 10.26 2.208 20.42-8.571 20.42-8.571Zm-4.54 40.439a2.163 2.163 0 0 0 2.109-2.227 2.18 2.18 0 0 0-2.232-2.108 2.169 2.169 0 0 0-2.105 2.224 2.16 2.16 0 0 0 2.227 2.11Z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M57.843 79.569c6.323 5.685 10.788 5.838 20.368 6.355 0 0 4.734.592 8.305 1.245.693.126 1.717.21 1.921-.087.298-.205.211-1.227.091-1.917-.64-3.579-1.206-8.304-1.206-8.304-.489-9.593-.618-14.053-6.285-20.397 0 0-15.542-16.618-27.645-4.556 0 0-.887 1.003-.615 1.825.458 1.374 8.492 9.13 11.578 12.284 3.167 3.228 6.834 6.103 7.654 6.327.122.03.316.082.502.012.67-.156 1.12-.954 1.12-.954.069-.127.22-.364.035-.815-.558-1.19-2.43-3.62-6.332-7.535-4.135-4.15-9.777-9.2-9.777-9.2 7.06-5.427 17.764 3.296 17.764 3.296 6.929 5.78 9.013 17.099 8.49 25.255-8.153.48-19.519-1.61-25.263-8.544 0 0-5.784-7.641-4.601-14.256a.697.697 0 0 0-.102-.492c-1.068-1.456-2.914-1.663-4.345-.35-.113.132-.093.155-.233.387-2.2 10.257 8.576 20.42 8.576 20.42Zm-40.44-4.545a2.165 2.165 0 0 0 2.226 2.113 2.167 2.167 0 0 0 2.11-2.228 2.173 2.173 0 0 0-2.227-2.11 2.162 2.162 0 0 0-2.109 2.225Z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M14.912 56.543C9.223 62.87 9.075 67.325 8.553 76.919c0 0-.584 4.726-1.235 8.299-.127.693-.217 1.716.085 1.917.2.3 1.225.217 1.916.088 3.574-.64 8.308-1.21 8.308-1.21 9.582-.478 14.051-.612 20.395-6.28 0 0 16.613-15.54 4.551-27.644 0 0-1-.882-1.825-.61-1.372.453-9.13 8.484-12.284 11.576-3.232 3.163-6.102 6.831-6.326 7.648-.028.128-.08.324-.015.507.165.668.952 1.125.952 1.125.137.064.368.21.815.021 1.197-.554 3.624-2.425 7.54-6.328 4.15-4.133 9.201-9.774 9.201-9.774 5.426 7.062-3.296 17.762-3.296 17.762-5.78 6.933-17.104 9.016-25.254 8.491-.485-8.15 1.609-19.517 8.542-25.263 0 0 7.64-5.785 14.258-4.6a.684.684 0 0 0 .488-.103c1.459-1.066 1.667-2.91.355-4.344-.135-.11-.157-.088-.39-.225-10.263-2.209-20.422 8.57-20.422 8.57Z" clipRule="evenodd"/><path fill="#55565A" fillRule="evenodd" d="M192.492 5.938V86.8l6.336.837v4.738h-31.391v-4.738l6.757-.837V49.99h-40.117V86.8l6.195.837v4.738h-30.826v-4.738l6.193-.837V5.938l-6.193-.838V.5h30.826v4.6l-6.195.838v34.576h40.117V5.938l-6.757-.838V.5h31.391v4.6l-6.336.838Zm42.796 81.424 5.909.832v4.18h-28.854v-4.18l5.917-.832V32.005l-5.917-.83V26.99h22.945v60.372Zm18.441.956 5.773-.81V5.367l-5.773-.813V.5h22.946v87.008l5.912.81v4.06h-28.858v-4.06Zm63.91-61.328h15.482v6.133h-15.482v38.898c0 10.038 2.104 13.246 11.255 13.246 3.38 0 6.345 0 9.155-.699v4.461c-8.307 2.93-15.347 4.185-21.259 4.185-13.227 0-16.329-5.992-16.329-17.431v-42.66h-12.103V26.99h12.53V13.33l16.751-5.024V26.99Zm93.048 33.32c0 20.357-13.79 34.019-35.471 34.019-20.979 0-34.353-8.927-34.353-34.02 0-21.053 13.796-35.134 35.474-35.134 21.401 0 34.35 12.692 34.35 35.135Zm-18.861-.416c0-20.639-6.191-29.7-16.194-29.7-9.709 0-15.908 8.645-15.908 29.7 0 20.773 6.199 29.416 15.908 29.416 10.425 0 16.194-8.223 16.194-29.416Zm97.125 28.299v4.182h-28.858v-4.182l5.776-.833V50.13c0-10.314-3.798-14.917-11.69-14.917-3.658 0-9.428 2.51-13.65 5.438v46.71l5.909.832v4.182h-28.989v-4.182l5.903-.833V32.423l-5.903-.831v-4.603h23.08v9.064c7.174-5.717 14.078-10.32 23.787-10.32 12.952 0 18.722 7.531 18.722 22.307v39.32l5.913.833ZM236.122 9.702c0 5.082-4.16 9.202-9.288 9.202-5.135 0-9.293-4.12-9.293-9.202 0-5.084 4.158-9.202 9.293-9.202 5.128 0 9.288 4.118 9.288 9.202ZM496.231 121.47l2.353-6.136H501v8.653h-1.579v-6.762h-.04l-2.584 6.762h-1.178l-2.584-6.762h-.049v6.762h-1.565v-8.653h2.43l2.38 6.136Zm-6.571-4.768h-2.647v7.285h-1.687v-7.285h-2.639v-1.368h6.973v1.368Z" clipRule="evenodd"/></svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 501 350" className="h-14 w-auto" aria-hidden="true"><path fill="#0047B5" d="M227.12 5.88 27.288 62.135C10.915 66.753 0 81.447 0 98.24v122.167c0 16.792 11.335 31.486 27.288 36.104l199.832 56.255c14.694 4.198 30.647 4.198 45.34 0l200.252-55.835C489.085 252.312 500 237.618 500 220.825V98.659c0-16.792-11.335-31.486-27.288-36.104L272.46 5.88c-14.693-4.198-30.227-4.198-45.34 0Z"/><path fill="#D03242" d="M469.353 73.89 269.521 17.635c-13.014-3.779-26.448-3.359-39.042 0L30.646 73.89c-10.914 2.94-18.89 13.434-18.89 24.77v122.165c0 11.335 7.556 21.411 18.892 24.77L230.48 301.85c11.754 3.358 25.188 3.778 39.042 0l199.832-56.255c10.916-2.939 18.892-13.435 18.892-24.77V98.659c-.42-11.755-7.976-21.83-18.892-24.769Zm10.076 146.935c0 7.557-5.038 14.274-12.175 16.373l-200.252 56.256c-10.495 2.938-22.25 3.358-34.005 0L32.746 236.778c-7.137-2.099-12.175-8.816-12.175-16.372V98.659c0-7.556 5.038-14.274 12.175-16.373l200.251-56.255c10.496-2.938 22.251-3.358 34.005 0l199.833 56.255c7.136 2.1 12.174 8.817 12.174 16.373v122.166h.42Z"/><path fill="#fff" d="M413.938 211.17c0-3.359-1.26-5.038-3.779-5.038-2.099 0-3.778 1.259-5.037 2.519v-2.099h-5.038v.839h1.259v12.175h-1.259v.84h6.297v-.84h-1.259V209.49c.839-.419 2.099-1.259 2.938-1.259 1.68 0 2.519.84 2.519 3.359v7.976h-1.259v.84h6.297v-.84h-1.259v-8.396h-.42Zm-24.349-5.038c-4.618 0-7.977 2.939-7.977 7.557 0 5.457 2.939 7.556 7.557 7.556s7.976-2.938 7.976-7.556-2.939-7.557-7.556-7.557Zm0 14.274c-2.1 0-3.359-2.099-3.359-6.298 0-4.198 1.259-6.297 3.359-6.297 2.099 0 3.778 2.099 3.778 6.297 0 4.199-1.679 6.298-3.778 6.298Zm-13.015-4.198v-8.397h3.359v-1.259h-3.359v-4.198l-3.778 1.259v2.939h-2.519v1.259h2.519v9.236c0 2.519.84 3.778 3.778 3.778 1.26 0 2.939-.419 4.618-.839v-.84c-.42.42-1.259.42-2.099.42-2.099-.42-2.519-.84-2.519-3.358Zm-8.816-15.953h-5.038v.839l1.26.42v18.472h-1.26v.839h6.298v-.839h-1.26v-19.731Zm-10.915 4.198c1.259 0 2.099-.84 2.099-2.519 0-1.26-.84-2.099-2.099-2.099-1.259 0-2.099.839-2.099 2.099 0 1.679.84 2.519 2.099 2.519Zm1.679 2.099h-5.038v.839l1.26.42v12.175h-1.26v.839h6.298v-.839h-1.26v-13.434Zm-15.113-4.618h1.679v7.556h-8.816v-7.556h1.259v-.84h-6.717v.84h1.68v17.632h-1.68v.84h6.717v-.84h-1.259v-8.396h8.816v8.396h-1.679v.84h7.137v-.84h-1.26v-17.632h1.26v-.84h-7.137v.84Zm-23.93 5.457h1.26l-3.359 9.236-4.198-8.816 1.26-.42v-.839h-6.298v.839l.84.42 5.877 13.434v.42c-.839 1.679-2.099 4.198-3.778 4.198-.42 0-.84 0-1.259-.42l-.42-1.259h-.84v2.939c.84 0 1.26.42 2.519.42 2.519 0 4.198-2.519 5.458-5.878l5.877-14.274h1.26v-.839h-4.199v.839Zm-17.632-1.259c-1.679 0-2.939.84-4.618 2.099v-7.976h-5.038v.839l1.26.42v18.472h-1.26v.839h5.038v-.839c.84.42 2.099.839 3.779.839 4.198 0 6.717-2.938 6.717-7.556 0-4.198-2.519-7.137-5.878-7.137Zm-1.259 13.434c-1.26 0-2.519-.84-3.359-1.259v-9.236c.84-.42 1.679-.84 2.519-.84 2.519 0 3.778 2.099 3.778 5.458.42 3.778-.839 5.877-2.938 5.877ZM142.317 142.74c0-.42-.419-.84-.839-.84H135.6c5.458-16.373 13.015-34.844 24.35-46.18.419-.42.419-.84.419-1.259 0-.84-.419-1.68-1.679-1.68-5.038 0-23.929 9.657-36.944 48.699h-18.471c4.618-16.372 7.556-26.868 14.693-36.524.84-1.259 1.679-2.518 1.679-3.358 0-1.259-1.259-1.68-3.778-1.68-17.212-.42-42.821 5.038-42.821 15.114 0 1.679.42 2.939 1.68 2.939.419 0 .839 0 1.259-.42 6.717-6.297 17.632-12.175 36.523-14.274-9.235 5.878-17.632 22.25-22.67 38.203h-4.618c-3.358 0-5.877 2.939-5.877 3.779 0 .42.42.839.84.839h8.396c-.42.84-.42 1.26-.42 2.099-6.717 23.93-15.113 52.897-36.104 52.897-4.198 0-7.557-1.679-10.076-4.198-.42-.42-.84-.84-1.259-.84-.84 0-1.26.84-1.26 1.68 0 4.198 5.458 7.976 12.175 7.976 27.288 0 42.821-30.227 50.798-57.934 0-.84.42-1.26.42-2.099h18.891c-11.335 37.363-.839 56.255 5.038 56.255.84 0 1.679-.84 1.26-2.099-2.939-13.434.839-34.005 7.556-54.576h2.519c2.099 1.259 4.198-1.68 4.198-2.519Zm307.305 33.165c-.42 0-.84.42-1.259.84-3.779 5.038-8.816 8.396-13.854 8.396-7.977 0-11.335-7.976-6.717-22.25l6.297-18.892c2.519-8.396 1.259-16.792-7.137-16.792-6.717 0-12.175 4.618-16.373 10.915.84-5.038-.42-9.656-7.137-9.656-1.259 0-2.099 0-2.518 1.26l-.84 2.099c-2.519 7.976-8.816 13.014-14.274 15.113v-4.618c0-7.976-3.778-15.113-12.594-15.113-13.015 0-21.831 11.755-25.609 24.349-.84 2.519-1.679 4.618-2.519 7.137-3.358 6.297-8.816 13.014-12.594 13.014-2.519 0-2.939-2.939-.84-8.816l9.656-30.647h7.976c3.359 0 5.038-2.099 5.038-3.358 0-.42-.42-.84-.84-.84h-10.915l5.878-18.052c.419-1.679-.84-2.099-2.939-2.099-5.458 0-9.656 2.939-11.335 7.977l-3.778 12.174h-5.038c-3.359 0-5.038 2.099-5.038 3.359 0 .42.42.839.84.839h7.976l-8.816 26.869c-2.519 8.396-7.977 14.273-14.694 14.273-1.259 0-2.518 0-3.778-.419 13.854-14.694 18.892-45.341 2.099-45.341-5.457 0-10.495 3.779-14.273 8.817.419-4.199-1.26-7.977-7.557-7.977-1.26 0-2.099 0-2.519 1.26l-7.557 23.929c-2.519 8.396-10.075 18.472-15.113 18.472-2.519 0-2.939-2.939-.84-8.816l5.878-18.892c2.519-8.396 1.259-16.793-7.137-16.793-7.137 0-13.014 5.458-17.213 11.755.84-6.717-1.679-11.755-7.976-11.755-6.717 0-12.175 4.618-16.373 10.916.84-5.038-.42-9.656-7.137-9.656-1.259 0-2.099 0-2.519 1.259l-7.976 23.09c-2.519 8.397-10.076 18.472-15.113 18.472-2.519 0-2.939-2.939-.84-8.816l10.495-32.746c.42-1.679-.419-2.099-2.938-2.099-5.038 0-8.817 2.519-10.496 6.298-.839-4.199-3.358-7.557-8.396-7.557-24.349 0-39.463 52.897-17.632 52.897 5.877 0 10.915-4.199 15.113-10.076 0 5.458 2.519 10.076 8.396 10.076 6.717 0 12.175-5.038 16.373-10.916-1.259 4.618-.42 10.076 5.878 10.076 1.679 0 2.938 0 3.358-1.259l6.717-21.411c3.778-11.755 10.915-20.991 15.953-20.991 2.519 0 2.939 2.939.84 8.816l-6.717 23.09c-2.099 7.137-1.26 12.175 5.457 12.175 1.68 0 2.939 0 3.359-1.26l6.717-21.41c3.778-11.755 10.915-20.991 15.953-20.991 2.519 0 2.939 2.939.839 8.816l-5.877 18.892c-2.519 8.396-1.259 16.792 7.137 16.792 6.717 0 12.175-5.037 16.373-10.915l-5.458 17.632c-2.099 7.137-1.259 12.175 5.458 12.175 1.679 0 2.938 0 3.358-1.259l7.977-24.769c.839 4.198 3.358 6.717 8.396 6.717 4.198 0 7.976-1.68 11.335-4.199 2.099.84 4.618 1.68 6.717 1.68 4.618 0 8.816-2.099 12.595-6.717 0 5.037 2.518 9.236 8.396 9.236 8.816 0 15.953-8.817 20.571-17.213 0 9.236 4.198 17.213 13.854 17.213 13.854 0 22.67-15.114 25.189-28.968 3.778-1.259 7.556-3.358 10.915-6.717l-7.137 22.67c-2.099 7.137-1.26 12.175 5.458 12.175 1.679 0 2.938 0 3.358-1.259l6.717-21.411c3.778-11.755 10.915-20.991 15.953-20.991 2.519 0 2.939 2.939.84 8.816l-4.618 14.274c-6.298 19.311.42 31.906 15.533 31.906 10.075 0 19.311-6.717 19.311-13.014-.419-.42-.839-1.26-1.679-1.26Zm-293.451-4.198c-10.075 0 1.26-37.363 13.434-37.363 2.099 0 3.779 1.679 3.779 5.457 0 7.137-7.977 31.906-17.213 31.906Zm128.464 1.26c-2.099 0-3.779-1.68-3.779-5.458 0-7.137 7.977-31.906 17.213-31.906 10.075 0-1.679 37.364-13.434 37.364Zm78.505.419c-3.778 0-5.457-4.618-5.457-10.075 0-7.557 2.518-16.793 6.297-23.09.42 7.557 6.297 11.335 13.434 11.755-2.099 10.915-7.557 21.41-14.274 21.41Zm15.114-25.608c-5.038 0-9.236-2.939-9.236-8.816 0-3.779 2.518-6.298 5.037-6.298 3.359 0 5.038 3.779 5.038 8.816-.42 2.099-.42 4.199-.839 6.298Z"/><path fill="#0047B5" d="M482.368 273.722v-8.816h-3.359v-1.679h8.396v1.679h-3.358v8.816h-1.679Zm14.273 0v-7.556l-2.518 5.877h-1.68l-2.519-5.877v7.556h-1.679v-10.495h2.519c.42.42 2.099 4.618 2.519 5.877.839-1.259 2.519-5.457 2.939-5.877h2.099v10.495h-1.68Z"/></svg>),
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
                  I collaborated heavily with software engineering to enforce this. For example, in the Groups & Meetings component shown below, I had to evaluate whether each brand's primary or secondary colors in the monorepo were more accessible when paired with white text.
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
                  <Metric metric="32% increase in property page visits" icon="arrow-up-right" />
                  <Metric metric="11% increase in reservations from property pages" icon="arrow-up-right" />
                  <Metric metric="Reduced product team tech debt" icon="arrow-down-right" />
                  
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


