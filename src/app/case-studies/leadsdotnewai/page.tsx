"use client";

import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";
import Statement from "@/components/Statement";
import { ArrowUpRight, ChevronDown, Compass } from "lucide-react";
import { useEffect, useState } from "react";
import BackToTopButton from "@/components/BackToTopButton";
import MediaFrame from "@/components/MediaFrame";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function CaseStudyOnePage() {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isSidequestOpen, setIsSidequestOpen] = useState(false);
  

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
    { id: "exploration", label: "Exploration" },
    { id: "businessgoal", label: "Business Goal" },
    { id: "design", label: "Process Overview" },
    { id: "insights", label: "Research" },
    { id: "whatidid", label: "What I Did" },
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
      <section className="w-full py-8 sm:py-12 bg-[#D3E7F5] overflow-hidden mb-6 md:mb-0">
        <div className="relative overflow-hidden">
          {/* Mobile: Homepage-style layout with three overlapping images */}
          <div className="block md:hidden">
            <div className="w-full rounded-md h-64 sm:h-80" style={{ backgroundColor: "#D3E7F5" }}>
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
                    className="w-full h-auto rounded-lg border border-[#D9D9D9] transition-transform duration-1000 ease-out bg-gray-400"
                    style={{
                      aspectRatio: '4/3',
                      transform: `translateX(-${isScrollingDown ? Math.min(scrollY * 0.2, 70) : Math.max(scrollY * 0.1, 0)}px)`
                    }}
                  />
                </div>
                <div className="relative overflow-hidden" style={{ width: 'calc(100% + 140px)', marginRight: '-70px' }}>
                  <div 
                    className="w-full h-auto rounded-lg border border-[#D9D9D9] transition-transform duration-1000 ease-out bg-gray-400"
                    style={{
                      aspectRatio: '4/3',
                      transform: `translateX(${isScrollingDown ? Math.min(scrollY * 0.2, 70) : Math.max(scrollY * 0.1, 0)}px)`
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Front image positioned on top */}
            <div className="relative z-10 flex justify-center">
              <div 
                className="w-full h-auto rounded-lg border border-[#D9D9D9] max-w-3xl bg-gray-400"
                style={{ aspectRatio: '4/3' }}
              />
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
              Low AI engagement was preventing users from realizing the full value of Leads.new.
              </h2>
              <p className="p mb-4">
              Leads.new helps marketers create AI-powered lead magnets. When I joined, only 38% of users were interacting with the AI agent in the workspace. As a result, many users never experienced the product’s full value which reduced the likelihood of publishing or converting to a paid plan.
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
            What is a lead magnet?
              </h2>
              <p className="p mb-4">
              A lead magnet is a digital incentive offered in exchange for a user’s contact information, commonly used by marketing teams. It could be a quiz, predictor, or planner. Understanding who uses lead magnets and why helped clarify the value the editor needed to deliver and the target user's point of view.
              </p>
              <p className="p mb-12">
              Throughout the project, I leaned on my previous experience working with marketing teams. I thought from their perspective what would make an AI editor genuinely useful and easy to use.
              </p>
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
              This audit helped me focus on the highest-impact issues and gave me a clear direction for improving AI engagement in the workspace.
              </p>
              {/* Loom Video */}
              <div className="w-full bg-black rounded-lg mb-4 overflow-hidden" style={{ aspectRatio: '3/2' }}>
                <video 
                  src="/videos/leadsdotnew-audit.mp4" 
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <p className="caption mb-12 text-center">
              It was extremely helpful to do a UX audit early in the project. Since I knew nothing about the creation flow or Leads.new at the time, I could use it as unbiased user feedback and reference it throughout the project.
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
              How might AI make creating a lead magnet feel effortless?
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
                How might AI make creating a lead magnet feel effortless?
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
              <p className="p mb-12">
              At this point, I was able to start creating informed solutions for the new Leads.new edit experience. I leveraged my knowledge of current AI agent best practices, my original UX audit and user flow pain points to start shaping an experience that felt effortless. 
              </p> 
            </CaseSection>

            <CaseSection id="whatidid" title="What I Did" headingLevel="h4">
              
                
                <div className="mb-12">
                  <h2 className="custom-h2">I created a phased approach</h2>
                  <p className="p mb-4">
                  I knew the founding software engineer would need a clear plan to execute my solutions, so I proposed three phases ordered by effort and impact:
                  </p>
                  <p className="p mb-4">
                  <span className="font-bold">Phase 1: Improve AI agent interface</span> Surface the chat early, rewrite messaging, add interaction animation, and give the AI more screen real estate.
                  </p>
                  <p className="p mb-4">
                  <span className="font-bold">Phase 2: Distinguish edit and AI modes</span> Implement a panel takeover when a user selects text, icons or images to direct edit . This would temporarily hide the AI chat to allow the user to focus on the task at hand.
                  </p>
                  <p className="p mb-4">
                  <span className="font-bold">Phase 3: Clarify the layout and next steps</span> Define steps with ‘next’ buttons and a top navigation. Place editing tools in a vertical left-hand panel.
                  </p>
                  <p className="p mb-12">While shaping Phase 3, I realized defining next steps with buttons could look dated and limit user freedom. I paused and aligned with my stakeholder before committing to this direction.</p>
                </div>
                
                
             
              <MediaFrame aspectRatio="3 / 2" enableModal>
                <img 
                  src="/images/leadsdotnew-phases.png" 
                  alt="I prioritized my solutions from highest to lowest impact and effort. Then, I arranged these solutions into 3 phases." 
                  className="w-full h-full object-contain"
                />
              </MediaFrame>
                  <p className="caption mb-8 md:mb-12 text-center">I prioritized my solutions from highest to lowest impact and effort. Then, I arranged these solutions into 3 phases.</p>
                
                <div>
                <h2 className="custom-h2">I reimagined the AI workspace</h2>
              <p className="p mb-4">
              After sharing the phased plan with the founder, we made several pivotal decisions: 
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
                <li className="p">Implementing next buttons did feel very dated, but putting edit and AI tools in a vertical side panels brought a lot of clarity to the workspace</li>
                <li className="p">It was more valuable to the business for me to create a “blue-sky” redesigned prototype rather than iterate on the current experience, since Leads.new was still in an exploratory phase.</li>
                <li className="p">Instead of building Figma mockups, I would build a working prototype with Figma MCP and Cursor to test and then present to the founding developer.</li>
              </ul>
              <p className="p mb-12">
              I took a step back to rethink the AI workspace interface. I created a cleaner, more modern layout referencing my competitive research and core UI principles. I removed distracting borders and patterns, gave the AI more space, improved contrast with color selection, and simplified the navigation.
              </p>
              {/* Revised workspace design */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="My revised design of the Leads.new workspace">
                <img 
                  src="/images/leadsdotnew-firstdesign.png" 
                  alt="My revised design of the Leads.new workspace" 
                  className="w-full h-full object-contain"
                />
              </MediaFrame>
              <p className="caption mb-12 text-center">
              My revised design of the Leads.new workspace
              </p>
              
             
                  <h2 className="custom-h2">I brought the new design into Cursor with Figma MCP</h2>
                  <p className="p mb-12">
                  Once the visual UI was in a good place, I incorporated the solutions from my phased approach and earlier discussions with the founder. I moved the AI and edit tools into a left vertical menu, rewrote the helper text, and redesigned the chat input controls, including the Design and Edit/Ask modes. After refining responsiveness with auto-layout, I used Figma MCP to bring the design into Cursor so I could start building my prototype.
                  </p>              
                </div>
                  <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                  </div>
                  <p className="caption mb-12 text-center">
                  Building live code from my mockup with Figma MCP.
              </p>
              <p className="p mb-4">
              It was a pretty exciting (and funny) to see Figma MCP and Cursor build my design. A few discoveries stood out: 
              </p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-12">
                <li className="p">Vertical spacing in Figma did not map well to real screens</li>
                  <li className="p">The chat area needed way less space than I originally designed</li>
                  <li className="p">The coded result wasn't too much more exciting or useful than my original Figma mockup</li>
                  <li className="p">The icons in the mockup didn’t map over at all </li>
                </ul>
               {/* Original Figma MCP prototype */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="The original prototype, built directly from my design.">
                <div className="w-full bg-gray-100 rounded-lg" style={{ aspectRatio: '3/2' }}>
                </div>
              </MediaFrame>
              <p className="caption mb-12 text-center">
              The original prototype, built directly from my design.
              </p>
              <p className="p mb-12">I used Cursor to refine the prototype based on my original design, adding hover states, animations, and small interaction details. I also built a lightweight AI simulation that let me design input, prompt, and response patterns without building out real AI logic.</p>
              
              <h2 className="custom-h2">I defined each tool's purpose and flow</h2>
                  <p className="p mb-4">
                  After sharing my rough prototype with the founder, the next step was to define the flows for the Design and Brand tools. 
                  </p>  
                  <p className="p mb-4">
                  Around this time, the founder introduced the idea of Prompts, a tool meant to give users more control over the AI generated results of the lead magnet. Because the magnet itself used AI to generate outcomes, two users could answer the magnets’ questions the same way and still receive different results. To manage the variability, the founders had decided on this tool as a potential solution, so I added Prompts to the list of tools to define.
                  </p> 
                  <p className="p mb-4">
                  I broke down each tool to clarify its purpose, what it controlled, and what it should achieve in the workspace.
                  </p> 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <div className="bg-gray-400 rounded-lg min-h-[200px] md:min-h-0 md:row-span-3 order-1"></div>
                    <div className="md:col-span-2 order-2">
                      <p className="p mb-4"><span className="font-semibold">Design</span> This tool let users select text, icons, or images in Design mode, then edit or swap those elements using the left panel. The options in the panel updated based on what was selected. Previously, this capability lived as a small button in the chat input. I proposed elevating it to a full mode accessible from the vertical menu so it felt more discoverable and intentional.</p>
                    </div>
                    <div className="md:col-span-2 order-3">
                      <p className="p mb-4"><span className="font-semibold">Brand</span> Brand gave users the ability to make broader changes across the magnet, such as colors, typography, and button styles. In the original version, these options lived on a dedicated page accessed through the top navigation. In my redesign, Brand became a tool within the left panel. Because of the reduced space, I simplified the toolset to prioritize what marketers would use most.</p>
                    </div>
                    <div className="md:col-span-2 order-4">
                      <p className="p"><span className="font-semibold"><span className="line-through">Prompts</span> → Controls </span>The original name, Prompts, didn't clearly communicate what the tool was for. Even though magnets' results were powered by prompts under the hood, marketers needed a more straightforward term. I renamed the tool Controls to convey that it controlled the logic behind the magnet's output.</p>
                    </div>
                  </div>
                  
                  {/* Collapsible Sidequest Section */}
                  <div className={`mb-12 relative ${!isSidequestOpen ? "glisten-hover" : ""} bg-gradient-to-r from-blue-50 to-sky-100 rounded-lg border border-blue-200 transition-all duration-300 ${!isSidequestOpen ? "hover:scale-[1.005]" : ""}`}>
                    {!isSidequestOpen && <span className="glisten-overlay-on-hover" aria-hidden="true" />}
                    <button
                      type="button"
                      onClick={() => setIsSidequestOpen(!isSidequestOpen)}
                      className="w-full flex flex-col p-4 cursor-pointer"
                      aria-expanded={isSidequestOpen}
                    >
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <Compass className="w-5 h-5 text-blue-900 flex-shrink-0 translate-y-[3px]" />
                        <h4 className="custom-h4 mb-0 !text-blue-900">Sidequest</h4>
                      </div>
                      <h2 className="custom-h2 mb-0">Managing LLM Variability with Controls</h2>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                            isSidequestOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span className="text-gray-600 text-sm !font-semibold">
                          {isSidequestOpen ? "Collapse" : "Expand"}
                        </span>
                      </div>
                    </button>
                    {isSidequestOpen && (
                      <div className="px-4 pb-4">
                        <div className="border-t border-blue-200 mt-4 mb-6"></div>
                        <h2 className="custom-h2">I rethought Controls</h2>
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
                      <div className="w-full bg-gray-100 rounded-lg" style={{ aspectRatio: '3/2' }}>
                      </div>
                    </MediaFrame>
                    <p className="caption mb-12 text-center">
                    Seeing the Controls experience live in the prototype made it clear that giving users direct edit access would introduce too many failure points in results generation. I recommended shaping the prompt with AI instead of allowing a user direct edit.
                    </p>
                    <p className="p mb-12">
                    Building the Controls functionality would allow for better control of LLM outputs. Other opportunities to better manage LLM output included using a secondary agent to perform quality control on the primary model's responses (LLM orchestration). AI agents like v0, Replit already use this multi-agent system. We thought about how this might be an emerging best practice for AI agents, especially based on the varied results we were seeing from the current Leads.new model.
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-6 pt-4 border-t border-blue-200">
                      <button
                        type="button"
                        onClick={() => setIsSidequestOpen(false)}
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                      >
                        <ChevronDown className="w-5 h-5 rotate-180 transition-transform duration-200" />
                        <span className="text-sm !font-semibold">Collapse</span>
                      </button>
                    </div>
                      </div>
                    )}
                  </div>

              <h2 className="custom-h2">I ran a no-budget round of user testing</h2>
                  {/* Controls prototype */}
              <MediaFrame aspectRatio="3 / 2" enableModal caption="Seeing the experience in the prototype made it clear that giving users full control would introduce too many failure points in results generation. I recommended shaping the prompt with AI instead of allowing a user direct edit, and my stakeholder agreed after reviewing the prototype.">
                <div className="w-full bg-gray-100 rounded-lg" style={{ aspectRatio: '3/2' }}>
                </div>
              </MediaFrame>
              <p className="caption mb-12 text-center">
              I showed the prototype to several people and recorded their responses. X% of users preferred the new design I proposed over the current Leads.new experience.
              </p>
              <h2 className="custom-h2">I created a final proposed direction</h2>
              <p className="p mb-4">I presented my final recommendation to the founders as a live prototype. It included:</p>
              <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
              <li className="p">A simplified, AI-centered workspace that allowed seamless collaboration between the user and the agent</li>
                <li className="p">Clear navigation at the top of the workspace and within the lead magnet preview</li>
                <li className="p">Edit modes organized in a left panel: Chat, Design, Brand, Code, and Controls</li>
                <li className="p">Reorganized and reimagined tool functionality</li>
                
              </ul>
            </CaseSection>

            <CaseSection id="results" title="Results">
            <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                </div>
              <p className="caption mb-12 text-center">
              The Before and After of the Leads.new workspace experiences
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Mobile: Order 2, Desktop: Left column */}
                <div className="order-2 md:order-1 col-span-1">
                  <p className="p mb-4">
                  The solution I proposed was implemented early December 2025. Metrics that were measured a month before and after revealed that we did/did not achieve our goal of making editing a lead magnet with AI feel effortless. Elaborate a bit...
                  </p>
                  <p className="p !font-semibold mb-4">
                  Takeaways: 
                  </p>
                  <ul className="list-disc list-outside pl-6 space-y-1 mb-4">
                    <li className="p">Working on agentic AI UX was really exciting. The space has matured enough to provide strong reference points, yet is still young enough to explore new interaction patterns and ideas.</li>
                    <li className="p">Live prototyping is my preferred way to communicate product ideas. Building an interactive prototype gave the team a much clearer understanding of my solutions than static designs ever could.</li>
                    <li className="p">Time constraints = tradeoffs. I had to decide whether refining UI details and animations added value, or if 80% there was enough to clearly communicate the core idea.</li>
                    
                  </ul>
                  
                  
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

