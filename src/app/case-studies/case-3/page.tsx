import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import BackToTopButton from "@/components/BackToTopButton";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";
import Statement from "@/components/Statement";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study 3 | Portfolio",
  description: "Details for case study 3.",
};

export default function CaseStudyThreePage() {
  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "businessgoal", label: "Business Goal" },
    { id: "processoverview", label: "Process Overview" },
    { id: "planningresearch", label: "Planning + Research" },
    { id: "whatidid", label: "What I did" },
    { id: "results", label: "Results" }
  ];
  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] py-8 sm:py-12 bg-white text-gray-800">
      <PageContainer>
        <h1 className="custom-h1 mb-6">
        Lightened the load on stressed parents
          <span className="hidden md:inline"><br /></span>{" "}
          with a responsive family calendar
        </h1>
        <div className="flex flex-wrap gap-2 mb-8">
          <Tag tag="SaaS" />
          <Tag tag="High Fi Mockups" />
          <Tag tag="Complex User Flows" />
          <Tag tag="Dashboard" />
          <Tag tag="User Personas" />
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 mb-4">
            <div className="space-y-2 mb-6">
              <h2 className="custom-h2">My role</h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="p">Designed High Fi responsive screens
                </li>
                <li className="p">Built complex user flows
                </li>
                <li className="p">Created a dashboard for kids and adults</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="custom-h2">Team</h2>
              <p className="p">
                Founders
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="custom-h2">Result</h2>
            <div className="space-y-3">
              <Metric metric="5K+ downloads on Google Play" />
              <Metric metric="Created 400+ High Fi mockup screens" />
              <Metric metric="Designed 5 complex user flows" />
            </div>
          </div>
        </div>
      </PageContainer>

      <FullWidthSection backgroundColor="#f5f5f5">
        <div className="text-center">
          <h2 className="custom-h2 mb-4">Image here</h2>
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
              <h2 className="custom-h2">“Nearly half of American parents—48%—report feeling completely and overwhelmingly stressed on most days...”
                <a href="https://www.psychologytoday.com/us/blog/parenting-translator/202409/parent-stress-is-a-serious-public-health-concern?utm_" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 underline inline-flex items-center gap-1 ml-5 align-baseline whitespace-nowrap text-sm"><b>pyschologytoday.com</b> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
              </h2>
              <p className="p mb-4">
              Former colleagues Jessica Etting and Amanda Roessler approached me with the idea for Jam, a family calendar app designed to ease the mental load of burnt-out parents. The concept was to bring together all the logistics of running a household into one shared, accessible app for the entire family.
              </p>
              <p className="p mb-4 md:mb-12">
              My role was to design the app at high fidelity for a future developer, define complex responsive user flows and explore the brand’s overall look and feel.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    A page of Jam's pitch deck illustrating the problem of the mental load on parents.
                    </p>
            </CaseSection>

            <CaseSection id="businessgoal" title="Business Goal" headingLevel="h4">
              <Statement>
                <h2 className="custom-h2">
                Jam's business goal was to take logistics of running a household and merge them in one singular app designed for and accessible by the entire family.
                </h2>
              </Statement>
            </CaseSection>

            <CaseSection id="processoverview" title="Process Overview" headingLevel="h4" className="hidden md:block">
            <ProcessOverview
            steps={[
              "Wireframing + Documentation",
              "Competitive Research, Look + Feel",
              "User Flows",
              "Style + Developer Guidelines",
            ]}
          />
            </CaseSection>

            <CaseSection id="planningresearch" title="Planning + Research" headingLevel="h4">
              <h2 className="custom-h2">Jam began as a few rough wireframes and
              documentation</h2>
              <p className="p mb-4">
              Starting with rough wireframes and a few pages of documentation, I conducted competitive research to understand the existing market.
I looked at shared calendar setups from Apple and Google, along with task management tools like Trello and Google Tasks.
              </p>
              <p className="p mb-4 md:mb-12">
              Throughout the design process, I referenced familiar patterns and interactions from these products. I wanted to shape a product experience that felt intuitive to users, yet was still differentiated for Jam's audience.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Original wireframes and documentation (blurred for confidentiality)
                    </p>
                    <h2 className="custom-h2">Exploring look and feel</h2>
              <p className="p mb-4">
              My next step was exploring the brand's visual identity: colors, shapes, font and grid. I selected elements with our target audience in mind to ensure the app’s design would resonate with them. The founders and I concluded that muted color tones with neutral backgrounds would be a strong direction. The target audience:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4 md:mb-12">
                <li className="p">Women, age 27 - 45 with children</li>
                <li className="p">Live in zip codes with the top 25% income</li>
                <li className="p">Interests include parenting, family, mom groups, organization, work life balance.</li>
                <li className="p">Enjoy brands like Goop, Magnolia Home, Home Edit, Hello Sunshine</li>
              </ul>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Exploring color and font from our target audiences' most loved brands.
                    </p>
            </CaseSection>

            <CaseSection id="whatidid" title="What I did" headingLevel="h4">
              <h2 className="custom-h2">
              I designed a dashboard for the whole family</h2>
              <p className="p mb-4">
              The dashboard was the centerpiece of Jam. Unlike traditional finance/sales dashboards, this needed to be accessible and engaging for children and adults.
              </p>
              <p className="p mb-4 md:mb-12">
              To achieve this, I focused on creating a clear, highly visual layout. I utilized color and structure over stats or progress charts. At the top, a weekly view provided an at-a-glance overview. Below, users could dive into a detailed daily calendar, to-do list, and shopping list.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Desktop dashboards explorations.
                    </p>
                    <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Final Designs for dashboard.
                    </p>
                    <h2 className="custom-h2">I mapped complex user flows</h2>
              <p className="p mb-4">
              The most complex part of this project was mapping out the extensive user flows. Users could create tasks, events, and lists in Jam. Each of these items were assignable, schedule-able and could be linked to one another. Because they were deeply integrated, it was important to show visual examples of how they worked together on mobile and desktop.
              </p>
              <p className="p mb-4 md:mb-12">
              In hindsight, I think creating these flows in wireframe fidelity would have been sufficient. If I were to approach this again, I would rely on Figma Dev Mode combined with direct developer conversations to save time and resources.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Add an Event Mobile User Flow (high level)
                    </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Add an Event Desktop User Flow (full)
                    </p>
                    <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Create Task Mobile User Flow (high level)
                    </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Create Task Desktop User Flow (full)
                    </p>
                    <h2 className="custom-h2">I creating a comprehensive style guide</h2>
              <p className="p mb-4">
              I created a comprehensive style guide to support a smooth handoff to a developer. This guide covered spacing, typography, responsive behavior, color, and user flows.
              </p>
              <p className="p mb-4 md:mb-12">
              Since I wouldn't be present to oversee development, my mockups and documentation were designed to be exceptionally clear so a future developer could easily implement my work.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 md:mb-12 text-center">
                    Developer guidelines for responsive margin.
                    </p>
            </CaseSection>

            <CaseSection id="results" title="Results">
            <div className="w-full bg-gray-100 rounded-lg mb-4 md:mb-12" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mobile: Order 2, Desktop: Left column */}
                <div className="order-2 md:order-1 col-span-1">
                  <p className="p mb-4">
                  I'm proud of the foundation I created through my design system, user flows and comprehensive style guide for Jam Family Calendar. This project taught me valuable lessons about when (or when not) to design in high fidelity, knowing your user and building a sustainable product that can be iterated in future redesigns. Most of all, it was rewarding to contribute to a product tackling a very real challenge for modern families. I'm excited to see Jam continue to grow and ease the mental load for parents.
                  </p>
                  
                                    {/* Mobile: Buttons below paragraph */}
                  <div className="md:hidden space-y-3 pt-4">
                    <BackToTopButton className="btn btn--primary w-full" />
                  </div>
                </div>
                
                {/* Mobile: Order 1, Desktop: Right column */}
                <div className="order-1 md:order-2 col-span-1 space-y-3">
                <Metric metric="5K+ downloads on Google Play" />
              <Metric metric="Created 400+ High Fi mockup screens" />
              <Metric metric="Designed 5 complex user flows" />
                  
                  {/* Desktop: Buttons below metrics */}
                  <div className="hidden md:block space-y-3 pt-4">
                    
                    <BackToTopButton className="btn btn--primary w-full" />
                    <a href="https://www.jamfamilycalendar.com/?gad_source=1&gad_campaignid=22671104318&gbraid=0AAAAA-IYjC7HodZzJbx1s9U4iLmu-she5&gclid=CjwKCAjwiNXFBhBKEiwAPSaPCT9nuE6mIzQUyAOHUI7BBvu5iQYYgW_SJouklDjDGQmr0-XsJiAXnBoC7_kQAvD_BwE" target="_blank" rel="noopener noreferrer" className="btn btn--secondary w-full">
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


