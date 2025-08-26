"use client";

import PageContainer from "@/components/PageContainer";
import ProcessOverview from "@/components/ProcessOverview";
import Tag from "@/components/Tag";
import Metric from "@/components/Metric";
import FullWidthSection from "@/components/FullWidthSection";
import { useState, useEffect } from "react";

export default function CaseStudyOnePage() {
  const [activeSection, setActiveSection] = useState("theproblem");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "theproblem",
        "research", 
        "design",
        "prototyping",
        "testing",
        "results"
      ];
      
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <main className="min-h-screen -mt-[72px] md:-mt-[88px] pt-[72px] md:pt-[88px] py-8 sm:py-12 bg-white text-[#2c2c2c]">
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
            <li>Designed testable prototypes</li>
            <li>Built and maintained a design system</li>
            <li>Advocated for accessibility and sustainability</li>
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
        <div className="flex gap-8 mt-2">
          {/* Sticky Sidebar - 2/7 width */}
          <div className="w-2/7">
            <div className="sticky top-10 space-y-2">
              
              <nav className="space-y-2">
                <a 
                  href="#theproblem" 
                  className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive("theproblem") 
                      ? "bg-gray-100 font-semibold text-[#2c2c2c]" 
                      : "hover:bg-gray-100 text-[#2c2c2c] hover:text-[#2c2c2c]"
                  }`}
                >
                  The Problem
                </a>
                <a 
                  href="#research" 
                  className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive("research") 
                      ? "bg-gray-100 font-semibold text-[#2c2c2c]" 
                      : "hover:bg-gray-100 text-[#2c2c2c] hover:text-[#2c2c2c]"
                  }`}
                >
                  Research & Discovery
                </a>
                <a 
                  href="#design" 
                  className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive("design") 
                      ? "bg-gray-100 font-semibold text-[#2c2c2c]" 
                      : "hover:bg-gray-100 text-[#2c2c2c] hover:text-[#2c2c2c]"
                  }`}
                >
                  Design Process
                </a>
                <a 
                  href="#prototyping" 
                  className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive("prototyping") 
                      ? "bg-gray-100 font-semibold text-[#2c2c2c]" 
                      : "hover:bg-gray-100 text-[#2c2c2c] hover:text-[#2c2c2c]"
                  }`}
                >
                  Prototyping
                </a>
                <a 
                  href="#testing" 
                  className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive("testing") 
                      ? "bg-gray-100 font-semibold text-[#2c2c2c]" 
                      : "hover:bg-gray-100 text-[#2c2c2c] hover:text-[#2c2c2c]"
                  }`}
                >
                  Testing & Iteration
                </a>
                <a 
                  href="#results" 
                  className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive("results") 
                      ? "bg-gray-100 font-semibold text-[#2c2c2c]" 
                      : "hover:bg-gray-100 text-[#2c2c2c] hover:text-[#2c2c2c]"
                  }`}
                >
                  Results & Impact
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content - 5/7 width */}
          <div className="w-5/7 space-y-12">
            <section id="theproblem">
              <h2 className="custom-h2 mb-6">The Problem</h2>
              <p className="p mb-4">
                This case study explores the redesign of hotel property pages to improve user engagement and conversion rates. 
                The project involved extensive user research, iterative design, and comprehensive testing across multiple markets.
              </p>
              <p className="p">
                Through systematic improvements to information architecture, visual hierarchy, and user experience, 
                we achieved significant improvements in key metrics while maintaining the brand's visual identity.
              </p>
            </section>

            <section id="research">
              <h2 className="custom-h2 mb-6">Research & Discovery</h2>
              <p className="p mb-4">
                Our research phase involved analyzing user behavior data, conducting usability studies, and gathering 
                feedback from hotel partners and customers across different markets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
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
            </section>

            <section id="design">
              <h2 className="custom-h2 mb-6">Design Process</h2>
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
            </section>

            <section id="prototyping">
              <h2 className="custom-h2 mb-6">Prototyping & Development</h2>
              <p className="p mb-4">
                We built interactive prototypes to test user flows and gather feedback before moving into development. 
                The development phase focused on creating a robust, scalable solution.
              </p>
              <p className="p">
                The final implementation included a design system that could be easily maintained and extended 
                across different property types and markets.
              </p>
            </section>

            <section id="testing">
              <h2 className="custom-h2 mb-6">Testing & Iteration</h2>
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
            </section>

            <section id="results">
              <h2 className="custom-h2 mb-6">Results & Impact</h2>
              <p className="p mb-4">
                The redesigned property pages delivered significant improvements across all key metrics, 
                validating our user-centered design approach and research findings.
              </p>
              <p className="p">
                Beyond the immediate metrics, the project established a foundation for future improvements 
                and demonstrated the value of systematic user research and iterative design.
              </p>
            </section>
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


