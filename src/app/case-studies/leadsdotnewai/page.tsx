"use client";

import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";
import Statement from "@/components/Statement";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import BackToTopButton from "@/components/BackToTopButton";
import MediaFrame from "@/components/MediaFrame";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Image from "next/image";

export default function CaseStudyOnePage() {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [openToolSection, setOpenToolSection] = useState<string>("chat");
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [showLeadMagnetTooltip, setShowLeadMagnetTooltip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cycleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  

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

  // Auto-cycle through tool sections
  useEffect(() => {
    if (!isAutoCycling) {
      // Clear interval if auto-cycling is disabled
      if (cycleIntervalRef.current) {
        clearInterval(cycleIntervalRef.current);
        cycleIntervalRef.current = null;
      }
      return;
    }

    const sections = ["chat", "design", "brand", "controls"];
    const currentIndexRef = { current: sections.indexOf(openToolSection) };
    if (currentIndexRef.current === -1) currentIndexRef.current = 0;

    const cycle = () => {
      currentIndexRef.current = (currentIndexRef.current + 1) % sections.length;
      setOpenToolSection(sections[currentIndexRef.current]);
    };

    cycleIntervalRef.current = setInterval(cycle, 3000);

    return () => {
      if (cycleIntervalRef.current) {
        clearInterval(cycleIntervalRef.current);
        cycleIntervalRef.current = null;
      }
    };
  }, [isAutoCycling]);

  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "exploration", label: "Exploration" },
    { id: "businessgoal", label: "Business Goal" },
    { id: "design", label: "Process Overview" },
    { id: "insights", label: "Research" },
    { id: "whatidid", label: "What I Did" },
    { id: "sidequest", label: "Sidequest" },
    { id: "results", label: "Results" }
  ];

  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] pt-8 sm:pt-12 bg-white text-gray-800">
      <PageContainer>
        <h1 className="custom-h1 mb-6">
        Increased AI feature adoption by X%
          <span className="hidden md:inline"><br /></span>{" "}
           for a B2B SaaS startup
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
        <Tag tag="AI agent" />
        <Tag tag="SaaS" />
          <Tag tag="B2B" />
          <Tag tag="Figma MCP" />
          <Tag tag="Cursor" />
        </div>
        
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-0">
          <div className="space-y-2 mb-0 md:mb-4">
            <div className="space-y-2 mb-6">
              <h2 className="custom-h2">My Role</h2>
              <ul className="list-disc list-outside pl-6 space-y-1">
                <li className="p">Audited AI agent experience</li>
                <li className="p">Defined new user flows</li>
                <li className="p">Built live AI prototype</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="custom-h2">Team</h2>
              <p className="p">
              Product Design (me) <br />
              Founding Product Leader <br />
              Founding Software Engineer Leader
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="custom-h2">Result</h2>
            <div className="space-y-3">
              <Metric metric="xx% increase in AI feature adoption" icon="arrow-up-right" />
              <Metric metric="xx% increase in published lead magnets" icon="arrow-up-right" />
              <Metric metric="xx% decrease in time to publish" icon="arrow-down-right" />
            </div>
          </div>
        </div>
      </PageContainer>

      {/* Custom Full Width Section - bypasses PageContainer */}
      <section className="w-full py-8 sm:py-12 bg-[#DFE3FC] overflow-hidden mb-6 md:mb-0">
        <div className="relative overflow-hidden">
          {/* Mobile: Homepage-style layout with three overlapping images */}
          <div className="block md:hidden">
            <div className="w-full rounded-md h-64 sm:h-80" style={{ backgroundColor: "#DFE3FC" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-end justify-center w-[86%] h-[80%]">
                  <div className="relative z-0 h-[80%] rounded-md w-auto bg-gray-400 drop-shadow-md -mr-5 -translate-y-3" style={{ width: '200px' }} />
                  <div className="relative z-10 h-[100%] rounded-md w-auto bg-gray-400 drop-shadow-md" style={{ width: '200px' }} />
                  <div className="relative z-0 h-[80%] rounded-md w-auto bg-gray-400 drop-shadow-md -ml-5 -translate-y-3" style={{ width: '200px' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:block">
            {/* Background images positioned behind */}
            <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 opacity-90 w-full px-8 sm:px-12 md:px-16 lg:px-30 overflow-hidden">
                <div className="relative overflow-hidden" style={{ width: 'calc(100% + 140px)', marginLeft: '-140px' }}>
                  <div 
                    className="relative w-full h-auto rounded-lg border border-[#D9D9D9] transition-transform duration-1000 ease-out"
                    style={{
                      aspectRatio: '8/5',
                      transform: `translateX(-${isScrollingDown ? Math.min(scrollY * 0.2, 70) : Math.max(scrollY * 0.1, 0)}px)`
                    }}
                  >
                    <Image 
                      src="/images/leadsdotnew-brandshot.png"
                      alt="Leads.new brand shot"
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-[#C4CEF0] opacity-40 rounded-lg" />
                  </div>
                </div>
                <div className="relative overflow-hidden" style={{ width: 'calc(100% + 140px)', marginRight: '-70px' }}>
                  <div 
                    className="relative w-full h-auto rounded-lg border border-[#D9D9D9] transition-transform duration-1000 ease-out"
                    style={{
                      aspectRatio: '8/5',
                      transform: `translateX(${isScrollingDown ? Math.min(scrollY * 0.2, 70) : Math.max(scrollY * 0.1, 0)}px)`
                    }}
                  >
                    <Image 
                      src="/images/leadsdotnew-datacapture.png"
                      alt="Leads.new data capture"
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-[#C4CEF0] opacity-40 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Front image positioned on top */}
            <div className="relative z-10 flex justify-center">
              <div 
                className="w-full h-auto rounded-lg border border-[#D9D9D9] max-w-4xl overflow-hidden"
                style={{ aspectRatio: '8/5' }}
              >
                <video 
                  ref={videoRef}
                  src="/videos/leadsdotnew-AI.mp4" 
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = 1.3;
                  }}
                />
              </div>
            </div>
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
              Low AI engagement was limiting user activation and conversion on Leads.new.
              </h2>
              <p className="p mb-4">
              Leads.new helps marketers create AI-powered <span 
                className="relative inline-block cursor-help border-b border-dotted border-gray-400 font-semibold"
                onMouseEnter={() => setShowLeadMagnetTooltip(true)}
                onMouseLeave={() => setShowLeadMagnetTooltip(false)}
              >
                lead magnets
                {showLeadMagnetTooltip && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm z-50 pointer-events-none">
                    <span className="block text-left">A lead magnet is a digital incentive exchanged for a user's contact information. Historically this was often a PDF or ebook download, but modern lead magnets include AI-powered quizzes, predictors, and planners.</span>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-200"></span>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-white"></span>
                  </span>
                )}
              </span>. When I joined, only 38% of users were interacting with the AI agent in the workspace. As a result, many users never experienced the product's full value which reduced the likelihood of publishing or converting to a paid plan.
              </p>
              <p className="p mb-12">
              I partnered with the founders to redesign the workspace, focusing on increasing AI engagement. The goal was to leverage the value of the AI to build a workspace flow that felt effortless from start to finish.
              </p>
              
              
              {/* Slider with Original and New Experience */}
              <div className="w-full mb-12">
                <BeforeAfterSlider
                  beforeSrc="/images/leadsdotnew-after.png"
                  afterSrc="/images/leadsdotnew-before.png"
                  aspectRatio="3/2"
                  contentInset="0%"
                  objectFit="contain"
                />
              </div>
              
            </CaseSection>

            <CaseSection id="exploration" title="Exploration" headingLevel="h4">
              <h2 className="custom-h2">
              Auditing the current AI experience
              </h2>
              <p className="p mb-4">
              I recorded a Loom video with my first impressions of the Leads.new AI workspace, which helped me identify some immediate issues:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
                <li className="p">The AI was hard to find when first landing in the workspace</li>
                <li className="p">The design of the AI inputs, outputs and controls didn’t feel like Leads.new</li>
                <li className="p">Switching to direct edit mode was unclear due to an unlabeled button</li>
              </ul>
              <p className="p mb-12">
              This audit helped me focus on the highest-impact issues and gave me a clear direction for improving AI engagement in the workspace. It also gave me unbiased insight that I referenced throughout the project.
              </p>
              
              <h2 className="custom-h2">
              Defining the problem and success metrics
              </h2>
              <p className="p mb-4">
              Before exploring solutions, I mapped out two potential problem spaces:
              </p>
              <p className="p mb-4">
              <span className="font-semibold">1. The user's experience of the AI itself: </span> This focused on the performance of the AI such as output quality, hallucinations, and response times.
              </p>
              <p className="p mb-12">
              <span className="font-semibold">2. The user's experience with the AI as part of the creation flow:</span> This focused on how users interacted with the AI as part of the overall workflow, including research insights, UI design, and information architecture. 
              </p>
              {/* Loom Video */}
              <MediaFrame aspectRatio="3 / 2" enableModal>
                <img 
                  src="/images/leadsdotnew-workshop.png" 
                  alt="My Figjam workshop outlining both problem spaces" 
                  className="w-full h-full object-contain"
                />
              </MediaFrame>
              <p className="caption mb-12 text-center">
              My Figjam workshop outlining both problem spaces.
              </p>
              <p className="p mb-4">
              The founder and I agree that the second choice aligned best with what was currently needed by Leads.new. After workshopping ideas, we landed on the project’s goal:
              </p>
              <p className="p mb-4">
              How might we make creating a lead magnet with AI feel effortless?
              </p>
              <p className="p mb-4">
              Success would be measured by:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1">
                <li className="p">Reducing time from magnet creation to publish (<span className="font-semibold">Time to Value</span>)</li>
                <li className="p">Increasing percent of published magnets (<span className="font-semibold">Engagement rate</span>)</li>
                <li className="p">Increasing percent of users who interact with the AI  (<span className="font-semibold">Feature adoption rate</span>)</li>
              </ul>
            </CaseSection>

            <CaseSection id="businessgoal" title="Business Goal" headingLevel="h4">
              <Statement>
                <h2 className="custom-h2">
                How might we make creating a lead magnet<span className="hidden md:inline"><br /></span> with AI feel effortless?
                </h2>
              </Statement>
            </CaseSection>

            <CaseSection id="design" title="Process Overview" headingLevel="h4" className="hidden md:block">
            <ProcessOverview
                steps={[
                  "Audit current UX",
                  "Research + map user journey",
                  "Create + prioritize solutions",
                  "Build + test prototypes",
                  "Launch + track success"
                ]}
              />
              
              
          
            </CaseSection>

            <CaseSection id="insights" title="Research" headingLevel="h4">
            <h2 className="custom-h2">I analyzed other AI creation tools</h2>
              
              <p className="p mb-4">
                Tools like Lovable, Magic Patterns, Replit, and v0 gave me insight into current AI agent best practices. I focused on layout, editing, chat real estate, and how each tool guided users forward.
              </p>
              <p className="p mb-4">
                My takeaways were:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
                <li className="p">None offered a clear step-by-step creation flow</li>
                <li className="p">Most gave significant real estate to the AI and prompt area</li>
                <li className="p">Direct editing and prompting were clearly separated</li>
                <li className="p">Many AI agent tools were built for developers or technical designers, not marketers</li>
              </ul>
              <p className="p mb-12">There was a clear opportunity to borrow patterns from these tools in a way that still felt like Leads.new, while speaking more directly to marketers.</p>
              {/* Slider with AI creation tools */}
              <MediaFrame aspectRatio="3 / 2" enableModal>
                <img 
                  src="/images/leadsdotnew-compresearch.png" 
                  alt="Competitive research for Leads.new showing AI agent best practices" 
                  className="w-full h-full object-cover object-top"
                />
              </MediaFrame>
              <p className="caption mb-12 text-center">
              Conducting competitive research for Leads.new presented me with current AI agent best practices  and opportunities to improve them.
              </p>
            <h2 className="custom-h2">
            I mapped the current user journey
                </h2>
              <p className="p mb-4">
              Creating the user journey helped me understand where users were losing momentum during magnet creation. A few opportunities became immediately clear to me:
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
                <li className="p">The AI needed to be surfaced earlier in the flow to increase feature adoption rate</li>
                <li className="p">We needed to improve the initial edit loop currently present in the flow</li>
                <li className="p">There was no obvious next steps for the user after the magnet was published</li>
              </ul>
              <p className="p mb-12">
              Mapping the current journey highlighted these issues but also presented solutions where I needed to focus my energy.  
              </p>
              {/* Hilton Hero Test Results */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="The current and proposed user flows I created for Leads.new.">
                <img 
                  src="/images/leadsdotnew-userjourney.png" 
                  alt="The current and proposed user flows I created for Leads.new" 
                  className="w-full h-full object-contain"
                />
              </MediaFrame>
              <p className="caption mb-12 text-center">
              The current and proposed user flows I created for Leads.new.
              </p>
            </CaseSection>

            <CaseSection id="whatidid" title="What I Did" headingLevel="h4">
              
                
                <div className="mb-12">
                  <h2 className="custom-h2">I translated insights into clear solutions</h2>
                  <p className="p mb-12">
                  Once I had a clear understanding of what wasn't working in the Leads.new workspace, I began translating my insights into concrete design solutions. I made my decisions based on my UX audit, pain points in the user flow, and my competitive research on AI agent interfaces.
                  </p>
                  <div className="relative bg-gradient-to-r from-blue-50 to-sky-100 px-6 pt-6 pb-5 rounded-lg border border-blue-200 mb-12">
                    <h4 className="custom-h4 !mb-0">Insight</h4>
                    <p className="p !font-semibold mb-1">AI didn't feel central to the workspace experience</p>
                    <p className="p mb-6">
                    If we wanted to increase AI feature adoption, the AI couldn't feel hidden or optional. It needed to be clearly positioned as the starting point of the workspace flow. It needed to be easy to find, easy to understand, and inviting to interact with.
                    </p>
                    <h4 className="custom-h4 !mb-0">Solution</h4>
                    <p className="p !font-semibold mb-1">Surface and highlight the AI immediately on first land</p>
                    <p className="p mb-1">
                    I redesigned the first landing page of the workspace to make the AI the most prominent element on the page. This ensured users immediately understood where to begin and reinforced the AI as the primary driver of value.
                    </p>
                    <p className="p mb-1">
                    To support this, I introduced several supporting design decisions:
                    </p>
                    <ul className="list-disc list-outside pl-6 space-y-1 mb-6">
                      <li className="p">Gave the AI more screen real estate to signal importance</li>
                      <li className="p">Added subtle animation and higher contrast to draw attention without feeling disruptive</li>
                      <li className="p">Introduced prompt suggestions to direct users to an easy next step</li>
                      <li className="p">Improved UX writing to set clear expectations</li>
                      <li className="p">Redesigned prompt box buttons to feel more cohesive with Leads.new</li>
                    </ul>
                    <MediaFrame aspectRatio="3 / 2" enableModal>
                      <Image 
                        src="/images/leadsdotnew-ai.png" 
                        alt="AI workspace redesign" 
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </MediaFrame>
                  </div>

                  <div className="relative bg-gradient-to-r from-green-50 to-lime-100 px-6 pt-6 pb-5 rounded-lg border border-green-200 mb-12">
                    <h4 className="custom-h4 !mb-0">Insight</h4>
                    <p className="p !font-semibold mb-1">Direct editing/designing felt hidden and hard to discover</p>
                    <p className="p mb-6">
                    A major friction point during my UX audit was not immediately understanding how to directly edit text, icons and images within the lead magnet. The edit/design action was represented by a single icon button which allowed the user to direct select items on the preview. This is a common pattern in other AI agents, but it wasn’t self explanatory or intuitive in this context. 
                    </p>
                    <h4 className="custom-h4 !mb-0">Solution</h4>
                    <p className="p !font-semibold mb-1">Clearly separate Chat and Design modes to improve speed and clarity</p>
                    <p className="p mb-1">
                    I proposed a clearer distinction between AI chat and direct editing to reduce confusion and increase creation speed. When a user selects text, icons, or images in the lead magnet preview, the interface shifts into a focused Design mode which triggers a panel takeover. This temporarily hides the AI chat, allowing the user to concentrate on the task at hand. The Design panel stays context aware, showing only the tools relevant to the selected element. 
                    </p>
                    <p className="p mb-6">
                    By making direct editing automatic and easy to discover, the workspace reduces cognitive load, increases creation speed, and improves the likelihood that users publish a lead magnet.
                    </p>
                    <MediaFrame aspectRatio="3 / 2" enableModal>
                      <Image 
                        src="/images/leadsdotnew-design.png" 
                        alt="Design mode panel takeover" 
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </MediaFrame>
                  </div>

                  <div className="relative bg-gradient-to-r from-yellow-50 to-amber-100 px-6 pt-6 pb-5 rounded-lg border border-amber-200 mb-4">
                    <h4 className="custom-h4 !mb-0">Insight</h4>
                    <p className="p !font-semibold mb-1">Steps and tools were not clearly separated</p>
                    <p className="p mb-6">
                    A major friction point during my UX audit was not immediately understanding how to directly edit text, icons and images within the lead magnet. The edit/design action was represented by a single icon button which allowed the user to direct select items on the preview. This is a common pattern in other AI agents, but it wasn’t self explanatory or intuitive in this context. 
                    </p>
                    <h4 className="custom-h4 !mb-0">Solution</h4>
                    <p className="p !font-semibold mb-1">Group steps with steps and tools with tools in intuitive locations</p>
                    <p className="p mb-1">
                    I reorganized the workspace into two clear groups: Tools and Steps.
                    </p>
                    <p className="p mb-1">
                    Tools allow users to directly edit the lead magnet and remain available at all times. I grouped the existing tools, Chat, Design, Brand, and Code, into a fixed left-hand panel so users could easily switch between them while editing.
                    </p>
                    <p className="p mb-1">
                    Steps guide users through the creation process, from building to publishing and sharing. I placed these in the top navigation to make next steps clear and intuitive.
                    </p>
                    <p className="p mb-6">
                    By grouping similar elements, the workspace became easier to learn and faster to use.
                    </p>
                    <MediaFrame aspectRatio="3 / 2" enableModal>
                      <Image 
                        src="/images/leadsdotnew-design.png" 
                        alt="Design mode panel takeover" 
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </MediaFrame>
                  </div>
                </div>
                
                <div>
                <h2 className="custom-h2">I designed how each tool works</h2>
                  <p className="p mb-4">
                  After sharing my rough prototype with the founder, we decided the next step was to define the behavior and options for each tool in the workspace.
                  </p>  
                  <p className="p mb-12">
                  Around this time, the founder introduced Prompts, a tool designed to give more control over AI-generated results. Because the lead magnet itself used AI, two users could have the same inputs and receive different outcomes. I added the Prompts tool to my prototype and explored how it could add value to the Leads.new workspace without creating confusion.
                  </p> 
                  
                  <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-4 mb-12">
                    <div className="hidden md:block bg-gray-400 rounded-lg md:h-[600px] md:w-[350px] order-1 relative overflow-hidden">
                      <Image 
                        src="/images/leadsdotnew-ai.png" 
                        alt="Chat panel" 
                        fill
                        className={`object-contain transition-opacity duration-500 ease-in-out ${openToolSection === "chat" ? "opacity-100" : "opacity-0 absolute"}`}
                        unoptimized
                      />
                      <Image 
                        src="/images/leadsdotnew-design.png" 
                        alt="Design panel" 
                        fill
                        className={`object-contain transition-opacity duration-500 ease-in-out ${openToolSection === "design" ? "opacity-100" : "opacity-0 absolute"}`}
                        unoptimized
                      />
                      <Image 
                        src="/images/leadsdotnew-brand.png" 
                        alt="Brand panel" 
                        fill
                        className={`object-contain transition-opacity duration-500 ease-in-out ${openToolSection === "brand" ? "opacity-100" : "opacity-0 absolute"}`}
                        unoptimized
                      />
                      <Image 
                        src="/images/leadsdotnew-controls.png" 
                        alt="Controls panel" 
                        fill
                        className={`object-contain transition-opacity duration-500 ease-in-out ${openToolSection === "controls" ? "opacity-100" : "opacity-0 absolute"}`}
                        unoptimized
                      />
                    </div>
                    <div className="order-2 flex flex-col">
                      <div 
                        className={`mb-4 md:overflow-hidden md:transition-all md:duration-500 md:ease-in-out md:cursor-pointer md:rounded-md md:p-3 md:hover:bg-gray-100 ${openToolSection === "chat" ? "md:max-h-[500px] md:bg-gray-100" : ""}`}
                        onClick={(e) => {
                          if (window.innerWidth >= 768) {
                            setIsAutoCycling(false);
                            setOpenToolSection("chat");
                          }
                        }}
                      >
                        <p className={`p ${openToolSection === "chat" ? "" : "md:line-clamp-2"}`}>
                          <span className="font-semibold">Chat</span> The core tool in the Leads.new workspace, with a prompt input field, response window, and send button. Users could switch between Edit and Plan modes, revert to previous prompts, and use chat suggestions to explore and what’s possible in the workspace.
                        </p>
                      </div>
                      <div 
                        className={`mb-4 md:overflow-hidden md:transition-all md:duration-500 md:ease-in-out md:cursor-pointer md:rounded-md md:p-3 md:hover:bg-gray-100 ${openToolSection === "design" ? "md:max-h-[500px] md:bg-gray-100" : ""}`}
                        onClick={(e) => {
                          if (window.innerWidth >= 768) {
                            if (openToolSection === "design") {
                              setOpenToolSection("brand");
                            } else {
                              setOpenToolSection("design");
                            }
                          }
                        }}
                      >
                        <p className={`p ${openToolSection === "design" ? "" : "md:line-clamp-2"}`}>
                          <span className="font-semibold">Design</span> This tool let users select text, icons, or images in Design mode, then edit or swap those elements using the left panel. The options in the panel updated based on what was selected. Previously, this capability lived as a small button in the chat input. I proposed elevating it to a full mode accessible from the vertical menu so it felt more discoverable and intentional.
                        </p>
                      </div>
                      <div 
                        className={`mb-4 md:overflow-hidden md:transition-all md:duration-500 md:ease-in-out md:cursor-pointer md:rounded-md md:p-3 md:hover:bg-gray-100 ${openToolSection === "brand" ? "md:max-h-[500px] md:bg-gray-100" : ""}`}
                        onClick={(e) => {
                          if (window.innerWidth >= 768) {
                            if (openToolSection === "brand") {
                              setOpenToolSection("design");
                            } else {
                              setOpenToolSection("brand");
                            }
                          }
                        }}
                      >
                        <p className={`p ${openToolSection === "brand" ? "" : "md:line-clamp-2"}`}>
                          <span className="font-semibold">Brand</span> Brand gave users the ability to make broader changes across the magnet, such as colors, typography, and button styles. In the original version, these options lived on a dedicated page accessed through the top navigation. In my redesign, Brand became a tool within the left panel. Because of the reduced space, I simplified the toolset to prioritize what marketers would use most.
                        </p>
                      </div>
                      <div 
                        className={`mb-4 md:overflow-hidden md:transition-all md:duration-500 md:ease-in-out md:cursor-pointer md:rounded-md md:p-3 md:hover:bg-gray-100 ${openToolSection === "controls" ? "md:max-h-[500px] md:bg-gray-100" : ""}`}
                        onClick={(e) => {
                          if (window.innerWidth >= 768) {
                            if (openToolSection === "controls") {
                              setOpenToolSection("brand");
                            } else {
                              setOpenToolSection("controls");
                            }
                          }
                        }}
                      >
                        <p className={`p ${openToolSection === "controls" ? "" : "md:line-clamp-2"}`}>
                          <span className="font-semibold"><span className="line-through">Prompts</span> → Controls </span>The original name, Prompts, didn't clearly communicate what the tool was for. Even though magnets' results were powered by prompts under the hood, marketers needed a more straightforward term. I renamed the tool Controls to convey that it controlled the logic behind the magnet's output. <p className="mb-4">
                  <a href="#sidequest" className="relative inline-block font-semibold after:absolute after:left-0 after:bottom-0.5 after:h-px after:rounded-full after:bg-[#2C2C2C] after:transition-all after:duration-200 after:w-0 after:opacity-60 hover:after:w-full">More about my exploration with LLM variability below</a> <ArrowDown className="inline w-5 h-5" />
                  </p>
                        </p>
                      </div>
                    </div>
                  </div>
                <h2 className="custom-h2">I brought the new design into Cursor with Figma MCP</h2>
              <p className="p mb-4">
              After aligning with the founder, we decided to build a “blue-sky” prototype instead of iterating on the existing workspace. I designed a cleaner, more modern AI interface in Figma that included my solutions and core UI principals. 
              </p>
              
              <p className="p mb-12">
              Once the design was 80% there, I turned it into a working prototype using Figma MCP and Cursor. Making the switch from design to code early allowed me to start testing interactions and working out kinks sooner. Even if the original design wasn’t completely perfect, I knew it made more sense to put my energy into the final handoff.
              </p>
              <MediaFrame aspectRatio="3 / 2" enableModal>
                    <Image 
                      src="/images/leadsdotnew-figmamcpbuild.png" 
                      alt="Building live code from my mockup with Figma MCP" 
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </MediaFrame>
                  <p className="caption mb-12 text-center">
                  Building live code from my mockup with Figma MCP.
              </p>
              
                  <p className="p mb-12">
                  I used Cursor to refine and enhance the prototype. This included a lightweight AI simulation that let me design input, prompt, and response patterns without building real AI logic. I also added hover states, animations, and subtle interaction details to make the workspace feel more intuitive and engaging.
                  </p>              
                </div>
                  
              

              <h2 className="custom-h2">I ran a no-budget round of user testing</h2>
                  {/* Controls prototype */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="Seeing the experience in the prototype made it clear that giving users full control would introduce too many failure points in results generation. I recommended shaping the prompt with AI instead of allowing a user direct edit, and my stakeholder agreed after reviewing the prototype.">
                <video 
                  src="/videos/leadsdotnew-natalie.mp4" 
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover', objectPosition: 'left center', width: '100%', height: '100%', transform: 'scale(1.1)' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </MediaFrame>
              <p className="caption mb-12 text-center">
              I showed the prototype to several people and recorded their responses. 72% of users preferred the new design I proposed over the current Leads.new experience.
              </p>
              <h2 className="custom-h2">I created a final proposed direction</h2>
              <p className="p mb-4">I presented my final recommendation to the founders as a live prototype. It included:</p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
              <li className="p">A simplified, AI-centered workspace that allowed seamless collaboration between the user and the agent</li>
                <li className="p">Clear navigation at the top of the workspace and within the lead magnet preview</li>
                <li className="p">Edit tools organized in a left panel: Chat, Design, Brand, Code, and Controls</li>
                <li className="p">Reorganized and reimagined tool functionality</li>
                
              </ul>
            </CaseSection>

            <CaseSection id="sidequest" title="Sidequest" headingLevel="h4">
              <h2 className="custom-h2">Designing Controls to manage LLM variability</h2>
              <p className="p mb-4">
              Controls became the most complex out of all Leads.new's tools. It allowed users to adjust the logic powering the results page through chat inputs. As I explored it further, more questions surfaced about its purpose, how it should function, and how to present it in a way that felt clear and valuable to users. Key questions I began exploring:
              </p>  
              <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
                <li className="p">Why rely on LLM variability for lead magnet results instead of generating a fixed set of outputs like a traditional quiz?</li>
                <li className="p">Would Controls only manage the Results page, or could it change other parts of the magnet?</li>
                <li className="p">Was giving users access to this tool actually valuable, or would it create unnecessary complexity?</li>
              </ul>
              <p className="p mb-12">
              After realigning with the founders of Leads.new, it became clear that AI generated results were a core value they wanted users to benefit from, not something to hide behind the scenes. This shifted my focus toward designing Controls in a way that explained the feature simply, made its value obvious, and kept the experience from feeling overwhelming.
              </p>
              {/* Controls prototype */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="Seeing the experience in the prototype made it clear that giving users full control would introduce too many failure points in results generation. I recommended shaping the prompt with AI instead of allowing a user direct edit, and my stakeholder agreed after reviewing the prototype.">
                <video 
                  src="/videos/leadsdotnew-controlsvideo.mp4" 
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </MediaFrame>
              <p className="caption mb-12 text-center">
              Seeing the Controls experience live in the prototype made it clear that giving users direct edit access would introduce too many failure points in results generation. I recommended shaping the prompt with AI instead of allowing a user direct edit.
              </p>
              <p className="p mb-12">
              Building the Controls functionality would allow for better control of LLM outputs. Other opportunities to better manage LLM output included using a secondary agent to perform quality control on the primary model's responses (LLM orchestration). AI agents like v0, Replit already use this multi-agent system. We thought about how this might be an emerging best practice for AI agents, especially based on the varied results we were seeing from the current Leads.new model.
              </p>
            </CaseSection>

            <CaseSection id="results" title="Results">
            <div className="w-full bg-white rounded-lg mb-4 border border-gray-200 overflow-hidden">
                <video 
                  src="/videos/leadsdotnew-results-2.mp4" 
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                </div>
              <p className="caption mb-12 text-center">
              The new proposed workspace experience for Leads.new, focusing on AI collaboration and engagement.
              </p>
              <p className="p !font-semibold mb-4">
              Takeaways: 
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-12">
                <li className="p">Working on agentic AI UX was really exciting. The space has matured enough to provide strong reference points, yet is still young enough to explore new interaction patterns and ideas.</li>
                <li className="p">Live prototyping is my preferred way to communicate product ideas. Building an interactive prototype gave the team a much clearer understanding of my solutions than static designs ever could.</li>
                <li className="p">Time constraints = tradeoffs. I had to decide whether refining UI details and animations added value, or if 80% there was enough to clearly communicate the core idea.</li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Mobile: Order 2, Desktop: Left column */}
                <div className="order-2 md:order-1 col-span-1">
                  <p className="p mb-4">
                  The solution I proposed was implemented early December 2025. Metrics that were measured a month before and after revealed that we did/did not achieve our goal of making editing a lead magnet with AI feel effortless. Elaborate a bit...
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
                  <Metric className="md:flex md:w-full" metric="xx% increase in AI feature adoption" icon="arrow-up-right" />
                  <Metric className="md:flex md:w-full" metric="xx% increase in published lead magnets" icon="arrow-up-right" />
                  <Metric className="md:flex md:w-full" metric="xx% decrease in time to publish" icon="arrow-down-right" />
                  
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
            </div>
        </div>
      </PageContainer>

      
    </main>
  );
}

