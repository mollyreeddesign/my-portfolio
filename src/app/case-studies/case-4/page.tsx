import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import StickyNavigation from "@/components/StickyNavigation";
import CaseSection from "@/components/case-studies/CaseSection";
import Statement from "@/components/Statement";

export const metadata: Metadata = {
  title: "Case Study 4 | Portfolio",
  description: "Details for case study 4.",
};

export default function CaseStudyFourPage() {
  const sections = [
    { id: "theproblem", label: "The Problem" },
    { id: "howmightwe", label: "How might we" },
    { id: "processoverview", label: "Process overview" },
    { id: "settinggoals", label: "Setting goals" },
    { id: "testing", label: "Testing & Iteration" },
    { id: "results", label: "Results & Impact" }
  ];
  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] py-8 sm:py-12 bg-white text-gray-800">
      <PageContainer>
        <h1 className="custom-h1 mb-6">
        Brought 7x more contact form conversions
          <span className="hidden md:inline"><br /></span>
          to a high-end botanical designer
        </h1>
        <div className="flex flex-wrap gap-2 mb-8">
          <Tag tag="Responsive Web" />
          <Tag tag="Lead Generation" />
          <Tag tag="Branding" />
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 mb-4">
            <div className="space-y-2 mb-6">
              <h2 className="custom-h2">My role</h2>
              <ul className="list-disc list-inside space-y-1">
                <li className="p">Designed and built responsive business site</li>
                <li className="p">Conducted market research</li>
                <li className="p">Built business/customer user flows</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="custom-h2">Team</h2>
              <p className="p">
              Founders • Marketing • Finance
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="custom-h2">Result</h2>
            <div className="space-y-3">
              <Metric metric="72% increase in site engagement" />
              <Metric metric="7x more contact form conversions" />
              <Metric metric="92% reduction in site costs" />
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
            <CaseSection id="theproblem" title="The Problem" headingLevel="h4">
              <h2 className="custom-h2">Valerie Jurado needed a product that converted visitors into qualified leads while reflecting her high-end, avant- garde aesthetic.</h2>
              <p className="p mb-4">
              Valerie Jurado, a Los Angeles–based botanical designer, needed a new website that could better serve her business goals.
              </p>
              <p className="p mb-4">
              Valerie's original site was built in Squarespace in 2018. It was expensive, had low visual impact and was hard to update. Her business goals and clientele had changed. The site's contact form wasn't capturing viable leads and the photography didn't reflect the artistry in her work.
              </p>
              <p className="p mb-4">
              In May 2024, Valerie came to me to redesign and rebuild a website that showcased her brand's value, captured high-quality leads and supported her new business direction.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 text-center">
                    Valerie's original site and contact page.
                    </p>
            </CaseSection>

            <CaseSection id="howmightwe" title="How might we" headingLevel="h4">
              <Statement><h2 className="custom-h2">How might we create a sustainable digital experience that converts visitors into leads and showcases business value?</h2></Statement>
              
            </CaseSection>

            <CaseSection id="processoverview" title="Process overview" headingLevel="h4">
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
              I met with Valerie and her business partner, Allan, to define the goals and values guiding the website refresh. From that conversation, a few priorities emerged:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li className="p">The few leads from her existing site weren’t the right type of clientele.</li>
                <li className="p">She wanted an easy way to direct people to her site, where they could quickly contact her or sign up for email newsletters.</li>
                <li className="p">She wanted the brand to emphasize uniqueness and bespoke botanical experiences, rather than just weddings or events.</li>
              </ul>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 text-center">
                    Valerie, Allan and I's Figjam brainstorm.
                    </p>
                    <h2 className="custom-h2">Roadmap and scope</h2>
              <p className="p mb-4">
              After the brainstorm, I created a rough Now–Next–Later roadmap to define scope and keep the project on track.
              </p>
              <p className="p mb-4">
              I set the goal to launch the refreshed site within the year, with a plan to add new content quarterly and complete additional enhancements by the end of 2024/early 2025.
              </p>
              <div className="w-full bg-gray-100 rounded-lg mb-4" style={{ aspectRatio: '3/2' }}>
                      <div className="flex items-center justify-center h-full text-gray-500 text-sm p-4 text-center">
                        Placeholder Image Box<br/>(3:2 aspect ratio)
                      </div>
                    </div>
                    <p className="caption mb-8 text-center">
                    Valerie, Allan and I's Figjam brainstorm.
                    </p>
                    <h2 className="custom-h2">Competitive research and identifying business values</h2>
              <p className="p mb-4">
              A key part of this project was analyzing competitors in the high-end florist and botanical designer market. We observed that many luxury florists didn’t reference flowers or plants in their logo. The brand sounded more editorial and high fashion when we just used a name. We simplified Valerie’s logo by removing ‘Botanical Design’ and using just ‘Valerie Jurado’.
              </p>
              <p className="p mb-4">
              Valerie’s favorite designers emphasized minimal UI with large, striking photography. I knew her work photography was a major brand strength, so I designed the site with minimal typography, buttons and text. This let her work take center stage.

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


