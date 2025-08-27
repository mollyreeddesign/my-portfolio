import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";

export const metadata: Metadata = {
  title: "Case Study 4 | Portfolio",
  description: "Details for case study 4.",
};

export default function CaseStudyFourPage() {
  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "research", label: "Research & Discovery" },
    { id: "design", label: "Design Process" },
    { id: "prototyping", label: "Prototyping" },
    { id: "testing", label: "Testing & Iteration" },
    { id: "results", label: "Results & Impact" }
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
                UX Design  •  Content Design <br />
                Product  •  Software Engineering
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="custom-h2">Result</h2>
            <div className="space-y-3">
              <Metric metric="32% increase in property page visits" />
              <Metric metric="11% increase in reservations from property pages" />
              <Metric metric="Reduced product team tech debt" />
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
          <div className="w-full lg:w-3/4 space-y-16">
            <CaseSection id="theproblem" title="The Problem">
              <p className="p mb-4">
                This case study explores the redesign of hotel property pages to improve user engagement and conversion rates. 
                The project involved extensive user research, iterative design, and comprehensive testing across multiple markets.
              </p>
              <p className="p">
                Through systematic improvements to information architecture, visual hierarchy, and user experience, 
                we achieved significant improvements in key metrics while maintaining the brand's visual identity.
              </p>
            </CaseSection>

            <CaseSection id="research" title="Research & Discovery">
              <p className="p mb-4">
                Our research phase involved analyzing user behavior data, conducting usability studies, and gathering 
                feedback from hotel partners and customers across different markets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="custom-h3 mb-3">User Insights</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Users struggled to find booking information</li>
                    <li>Property photos were not prominently displayed</li>
                    <li>Mobile experience was significantly lacking</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="custom-h3 mb-3">Business Goals</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Increase property page engagement</li>
                    <li>Improve conversion to booking</li>
                    <li>Reduce bounce rate</li>
                  </ul>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="design" title="Design Process">
              <p className="p mb-4">
                The design process followed a user-centered approach, starting with wireframes and progressing through 
                high-fidelity mockups and interactive prototypes.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="custom-h3 mb-3">Key Design Decisions</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Prioritized visual hierarchy for property information</li>
                  <li>Implemented responsive design patterns</li>
                  <li>Enhanced accessibility features</li>
                  <li>Optimized for mobile-first experience</li>
                </ul>
              </div>
            </CaseSection>

            <CaseSection id="prototyping" title="Prototyping & Development">
              <p className="p mb-4">
                We built interactive prototypes to test user flows and gather feedback before moving into development. 
                The development phase focused on creating a robust, scalable solution.
              </p>
              <p className="p">
                The final implementation included a design system that could be easily maintained and extended 
                across different property types and markets.
              </p>
            </CaseSection>

            <CaseSection id="testing" title="Testing & Iteration">
              <p className="p mb-4">
                Continuous testing and iteration were key to our success. We conducted A/B tests, usability studies, 
                and gathered quantitative data to validate our design decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">32%</div>
                  <div className="text-sm text-gray-600">Increase in page visits</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">11%</div>
                  <div className="text-sm text-gray-600">Increase in bookings</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-gray-600">Reduction in bounce rate</div>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="results" title="Results & Impact">
              <p className="p mb-4">
                The redesigned property pages delivered significant improvements across all key metrics, 
                validating our user-centered design approach and research findings.
              </p>
              <p className="p">
                Beyond the immediate metrics, the project established a foundation for future improvements 
                and demonstrated the value of systematic user research and iterative design.
              </p>
            </CaseSection>
          </div>
        </div>
      </PageContainer>

      <PageContainer>
        <p className="p-secondary mt-4">
          This is a secondary paragraph using Work Sans in #767676.
        </p>
        <div className="mt-8">
          <h2 className="custom-h3 mb-3">Process overview</h2>
          <ProcessOverview
            steps={[
              "Discovery",
              "User Research",
              "Ideation",
              "Design",
              "Prototype",
              "Test & Iterate",
              "Launch",
            ]}
          />
        </div>
      </PageContainer>
    </main>
  );
}


