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
import { useEffect, useRef, useState } from "react";

export default function CaseStudyTwoPage() {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [imageScrollProgress, setImageScrollProgress] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);

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
    const updateProgress = () => {
      const el = galleryRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      const raw = (viewportH - rect.top) / viewportH;
      const clamped = Math.max(0, Math.min(1, raw));
      setImageScrollProgress(clamped);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const offsetFirst = -7 * (1 - imageScrollProgress);
  const offsetSecond = -2 * (1 - imageScrollProgress);
  const offsetThird = 2 * (1 - imageScrollProgress);
  const offsetFourth = 7 * (1 - imageScrollProgress);

  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "howmightwe", label: "How Might We" },
    { id: "whatidid", label: "What I Did" },
    { id: "inthefield", label: "In the Field" },
    { id: "results", label: "Results" },
    { id: "otheruowork", label: "Other UO Work" }
  ];

  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] py-8 sm:py-12 bg-white text-gray-800">
      <PageContainer>
        <h1 className="custom-h1 mb-6">
        Helped drive 9% revenue growth
          <span className="hidden md:inline"><br /></span>{" "}
          with a self checkout program
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Tag tag="eCommerce" />
          <Tag tag="Loyalty" />
          <Tag tag="Point of Sale" />
          <Tag tag="Agile" />
        </div>
        
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 mb-4">
            <div className="space-y-2 mb-6">
              <h2 className="custom-h2">My Role</h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="p">Designed self checkout screen states</li>
                <li className="p">Implemented loyalty program personalization</li>
                <li className="p">Identified branding opportunities</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="custom-h2">Team</h2>
              <p className="p">
              Illustrator • UI Lead
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="custom-h2">Result</h2>
            <div className="space-y-3">
              <Metric metric="Contributed to 9% revenue growth in Q3 2018" icon="arrow-up-right" />
              <Metric metric="Drove direct sales from self checkout" icon="arrow-up-right" />
              <Metric metric="Increased in-store engagement" icon="arrow-up-right" />
            </div>
          </div>
        </div>
      </PageContainer>

      <FullWidthSection backgroundColor="#f5f5f5" useContainer={false} noPadding>
        
          <div className="w-full overflow-hidden" ref={galleryRef}>
            <div className="grid grid-cols-4 w-[calc(100vw+14vw)] -ml-[7vw] gap-0 transition-transform duration-300 ease-out">
              <div className="relative h-[90vh] overflow-hidden">
                <div style={{ transform: `translateX(${offsetFirst}vw)`, transition: 'transform 200ms ease-out' }} className="w-full h-full">
                  <Image src="/images/uo-selfcheckout-1.png?v=1" alt="Urban Outfitters self checkout 1" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <div className="relative h-[90vh] overflow-hidden">
                <div style={{ transform: `translateX(${offsetSecond}vw)`, transition: 'transform 200ms ease-out' }} className="w-full h-full">
                  <Image src="/images/uoselfcheckout-2.png?v=1" alt="Urban Outfitters self checkout 2" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <div className="relative h-[90vh] overflow-hidden">
                <div style={{ transform: `translateX(${offsetThird}vw)`, transition: 'transform 200ms ease-out' }} className="w-full h-full">
                  <Image src="/images/uoselfcheckout-3.png?v=1" alt="Urban Outfitters self checkout 3" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
              <div className="relative h-[90vh] overflow-hidden">
                <div style={{ transform: `translateX(${offsetFourth}vw)`, transition: 'transform 200ms ease-out' }} className="w-full h-full">
                  <Image src="/images/uo-selfcheckout-4.png?v=1" alt="Urban Outfitters self checkout 4" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
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
              <h2 className="custom-h2">
              The default software for Urban Outfitters' upcoming self-checkout system had a poor user experience and confusing information architecture that didn’t align with the brand.
              </h2>
              
              <p className="p mb-4">
              In 2018, Urban Outfitters planned to initiate a pilot self-checkout program at its flagship store in Herald Square, New York City. The aim was to stay competitive with other retailers testing self checkout and cater to their younger tech-savvy audience with new touchscreen kiosks.
              </p>
              <p className="p mb-4 md:mb-12">
              The point of sale 'Elo' kiosks came with a default software that had a poor user experience and confusing information architecture that did not reflect the Urban Outfitters brand.
              </p>
              
              <div>
                <div className="w-full bg-gray-100 rounded-lg mb-4 relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  <Image src="/images/uo-originalui.png" alt="Urban Outfitters default checkout UI" fill className="object-contain pb-4 pt-8" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
              </div>
              
              <p className="caption mb-8 md:mb-12 text-center">
              Default checkout software
              </p>
              <p className="p mb-4">
              A lead UI designer and I were brought onto the project to improve the visual design, brand presence, UO Rewards options and overall user experience in self checkout.
              </p>
            </CaseSection>

            <CaseSection id="howmightwe" title="How might we" headingLevel="h4">
              <Statement>
                <h2 className="custom-h2">
                How might we redesign the default self-checkout software on the point of sale kiosks to be more intuitive, align with the Urban Outfitters brand, and enhance the in-store customer experience?
                </h2>
              </Statement>
            </CaseSection>

            <CaseSection id="whatidid" title="" headingLevel="h4">
            
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                {/* Left column - gif animation */}
                <div className="order-2 lg:order-1">
                  <div className="w-full bg-white rounded-lg border-[5px] md:border-[7px] border-[#4D4D4D] relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                    <Image src="/images/uo-cardanimation.gif" alt="UO card animation" fill className="object-cover shadow-lg rounded-lg mt-2" sizes="(min-width: 1024px) 50vw, 100vw" unoptimized />
                  </div>
                </div>
                
                {/* Right column - text content */}
                <div className="order-1 lg:order-2 mb-8 md:mb-12">
                  <h4 className="custom-h4">What I Did</h4>
                <h2 className="custom-h2">I designed the self checkout screens</h2>
                  
                  <p className="p mb-4">
                  I worked with illustrator and designer, Miranda Leung, to come up with UO- style empty state animations to keep the user engaged on static screens.

                  </p>
                  <p className="p mb-4">
                  I utilized Urban Outfitters branded text, logo and buttons for the UI, making sure to keep the design and colors minimal throughout a process that could easily overwhelm to a user. I created Signed In/Signed Out states for users that were in the UO Rewards program, bringing in personalization where possible.
                  </p>
                </div>
              </div>
              <h2 className="custom-h2">I oversaw development and launch</h2>
              <p className="p mb-4 md:mb-12">
              I oversaw the development process, performing several rounds of VQA with software engineering before the test product was launched in August, 2018.
                  </p>
                  
                    <div className="w-full rounded-lg grid grid-cols-3 sm:grid-cols-3 gap-4 p-4 mb-4">
                      <div className="w-full shadow-lg bg-white rounded-lg border-[5px] md:border-[7px] border-[#4D4D4D] relative overflow-hidden" style={{ aspectRatio: '3/5' }}>
                        <Image src="/images/uo-flatselfcheckout-1.png" alt="UO flat self checkout screen 1" fill className="object-contain object-center" sizes="(min-width: 768px) 33vw, 100vw" />
                      </div>
                      <div className="w-full shadow-lg bg-white rounded-lg border-[5px] md:border-[7px] border-[#4D4D4D] relative overflow-hidden" style={{ aspectRatio: '3/5' }}>
                        <Image src="/images/uo-flatselfcheckout-2.png" alt="UO flat self checkout screen 2" fill className="object-contain object-center" sizes="(min-width: 768px) 33vw, 100vw" />
                      </div>
                      <div className="w-full shadow-lg bg-white rounded-lg border-[5px] md:border-[7px] border-[#4D4D4D] relative overflow-hidden" style={{ aspectRatio: '3/5' }}>
                        <Image src="/images/uo-flatselfcheckout-3.png" alt="UO flat self checkout screen 3" fill className="object-contain object-center" sizes="(min-width: 768px) 33vw, 100vw" />
                      </div>
                    </div>
                  
              
                             <p className="caption mb-8 md:mb-12 text-center">
               Final UI of self checkout screens
               </p>
            </CaseSection>

            <CaseSection id="inthefield" title="In the Field" headingLevel="h2">
            
            
              <div>
               <div className="w-full bg-gray-100 rounded-lg mb-6 relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                 <Image src="/images/uo-inthefield3.jpeg" alt="Urban Outfitters self checkout in the field" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
               </div>
              </div>
                
               {/* Two column grid with portrait images */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="w-full bg-gray-100 rounded-lg relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                  <Image src="/images/uo-inthefield1.jpeg" alt="Urban Outfitters in the field portrait" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="w-full bg-gray-100 rounded-lg relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                  <Image src="/images/uo-inthefield2.jpeg" alt="Urban Outfitters in the field portrait 2" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
               </div>
                              <p className="caption mb-8 md:mb-12 text-center">
                Customers interacting with the new self checkout screens in Herald Square, New York City.
                </p>
                
                {/* Two column layout with text and image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8 mb-20">
                  {/* Left column - text content */}
                  <div className="order-1 lg:order-1">
                    <h2 className="custom-h2">“The Urban Outfitters customer is clearly voting for self checkouts with the percentage of self checkout transactions highly exceeding expectations...”</h2>
                    <p className="p-secondary mb-4">
                    “...Not only is this a convenient way for our customers to transact, but it also allows us to reposition labor to further service customers and drive conversion on the selling floor. Given its success, we are currently working on plans to rollout self checkout to additional Urban Outfitters stores.’”
                    </p>
                                         <p className="p-secondary mb-4">
                     Urban Outfitters Group CEO Trish Donnelly <br/> <a href="https://www.barrons.com/articles/urban-outfitters-self-checkout-is-exceeding-expectations-1534970120" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 underline inline-flex items-center gap-1"><b>www.barrons.com</b> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
                      </p>
                  </div>
                  
                  {/* Right column - portrait image */}
                  <div className="order-2 lg:order-2">
                    <div className="w-full bg-gray-100 rounded-lg overflow-hidden">
                      <video autoPlay muted loop playsInline preload="metadata" className="w-full h-auto object-contain">
                        <source src="/videos/UO-Tiktok-SelfCheckout.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="caption mt-4 md:mb-12 text-center">
                      A Tiktok video from 2023 with the UI I designed in 2018.
                    </p>
                  </div>
                </div>
                </CaseSection>
                
                
              
                <CaseSection id="results" title="Results" headingLevel="h2">
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mobile: Order 2, Desktop: Left column */}
                <div className="order-2 md:order-1 col-span-1">
                  <p className="p mb-4">
                  A month after the kiosks were rolled out with the newly designed interface, the results came back that self checkout had been highly favored by the UO Customer. </p> 
                  <p className="p mb-4"><a href="https://www.forbes.com/sites/greatspeculations/2018/11/16/urban-outfitters-to-benefit-from-improved-all-round-growth-in-the-third-quarter/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 underline inline-flex items-center gap-1"><b>Forbes published an article</b> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a> stating Urban Outfitters had been among the top performing companies in the retail sector that year, with Self checkout being one of the reasons for its 9% revenue growth and 50%+ earnings growth.
                  </p>
                  
                                    {/* Mobile: Buttons below paragraph */}
                  <div className="md:hidden space-y-3 pt-4">
                    <button 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="btn btn--primary w-full"
                    >
                      <span>Back to Top</span>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Mobile: Order 1, Desktop: Right column */}
                <div className="order-1 md:order-2 col-span-1 space-y-3">
                  <Metric metric="Contributed to 9% revenue growth in Q3 2018" icon="arrow-up-right" />
                  <Metric metric="Drove direct sales from self checkout" icon="arrow-up-right" />
                  <Metric metric="Increased in-store engagement" icon="arrow-up-right" />
                  
                  {/* Desktop: Buttons below metrics */}
                  <div className="hidden md:block space-y-3 pt-4">
                    <button 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="btn btn--primary w-full"
                    >
                      <span>Back to Top</span>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="otheruowork" title="Other Urban Outfitters Work" headingLevel="h4">
              <h2 className="custom-h2">Help & Info Section Redesign</h2>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  Placeholder Box (3:2 aspect ratio)
                </div>
              </div>
              <p className="caption mb-8 md:mb-12 text-center">
              I redesigned the typography and information architecture for 20 Help + Info pages, breaking up dense text with iconography, photography, and clear type hierarchy.

              </p>
              <h2 className="custom-h2">UO Blog Overhaul</h2>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  Placeholder Box (3:2 aspect ratio)
                </div>
              </div>
              <p className="caption mb-8 md:mb-12 text-center">
              I redesigned the Urban Outfitters blog to create a more engaging experience. I introduced clear typographic hierarchy, integrated video content, quiz layout ideas and shoppable product rails.
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


