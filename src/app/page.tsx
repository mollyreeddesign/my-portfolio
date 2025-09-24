"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Tag from "@/components/Tag";
import PageContainer from "@/components/PageContainer";
import FullWidthSection from "@/components/FullWidthSection";
import Card from "@/components/Card";
import Metric from "@/components/Metric";
import { ChevronDown, ArrowUpRight, Download, Copy, Users, Wrench, MonitorSmartphone } from "lucide-react";
import BackToTopButton from "@/components/BackToTopButton";
import Image from "next/image";
import LottieCover from "@/components/LottieCover";
import TiledLottie from "@/components/TiledLottie";
import Reveal from "@/components/Reveal";

export default function Home() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [skyLightOpacity, setSkyLightOpacity] = useState(0.05);
  const pinWrapperRef = useRef<HTMLDivElement | null>(null);
  const [heroHidden, setHeroHidden] = useState(false);
  const [isAlignHovered, setIsAlignHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<"align" | "create" | "execute" | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const videoSources = [
    "/videos/home-skyvideo.mp4",
    "/videos/sunset-loop.mp4",
  ];
  const [selectedVideo] = useState(() => videoSources[Math.floor(Math.random() * videoSources.length)]);

  useEffect(() => {
    const updateOpacity = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight || window.innerHeight * 0.67;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      // Start the effect once we reach the section (keep faint before)
      const start = sectionTop; // begin at section top
      const end = sectionTop + sectionHeight * 0.90; // finish halfway through the section
      const progressRaw = (scrollTop - start) / Math.max(1, end - start);
      const progress = Math.max(0, Math.min(1, progressRaw));
      if (scrollTop <= sectionTop) {
        setSkyLightOpacity(0.05);
        return;
      }
      const opacity = 0.05 + progress * 0.95; // fade from 0.05 to 1.0
      setSkyLightOpacity(opacity);
    };

    updateOpacity();
    window.addEventListener("scroll", updateOpacity, { passive: true });
    window.addEventListener("resize", updateOpacity);
    return () => {
      window.removeEventListener("scroll", updateOpacity);
      window.removeEventListener("resize", updateOpacity);
    };
  }, []);

  useEffect(() => {
    const updateHeroVisibility = () => {
      const wrapper = pinWrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      setHeroHidden(rect.bottom <= 0);
    };
    updateHeroVisibility();
    window.addEventListener("scroll", updateHeroVisibility, { passive: true });
    window.addEventListener("resize", updateHeroVisibility);
    return () => {
      window.removeEventListener("scroll", updateHeroVisibility);
      window.removeEventListener("resize", updateHeroVisibility);
    };
  }, []);
  return (
    <main className="py-16 sm:py-32 bg-[#0b0b0b]">
      <PageContainer>
      
       <div ref={pinWrapperRef} className="relative overflow-x-hidden">
        <section ref={sectionRef} className="fixed left-0 right-0 top-40 h-[67vh] md:h-[65vh] flex flex-col z-10 pointer-events-none" style={{ opacity: heroHidden ? 0 : 1 }} aria-hidden={heroHidden}>
          
        <div className="absolute left-1/2 -translate-x-[325px] md:-translate-x-[500px] -translate-y-[67px] md:-translate-y-[180px] w-[720px] md:w-[1100px] pointer-events-none z-30" style={{ opacity: skyLightOpacity, transition: "opacity 100ms ease" }}>
          <Image
            src="/images/home-skylight.png"
            alt=""
            width={1000}
            height={1000}
            className="w-[720px] md:w-[1100px] h-auto"
            priority
          />
        </div>
       
        <div className="text-center my-2 md:-my-16">
        <div className="mx-auto mb-6 w-40 h-20 md:w-60 md:h-30 relative">
          <video
            className="home-sky-mask w-full h-full object-cover"
            src={selectedVideo}
            poster="/images/home-sky.png"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <LottieCover src="/animations/birdflock.json" className="home-sky-mask z-[5] pointer-events-none" fit="cover" />
          <Image
            src="/images/home-sky-frame.png"
            alt=""
            fill
            className="pointer-events-none select-none z-10"
            sizes="(max-width: 767px) 160px, 240px"
            priority
          />
        </div>
        <h1 className="text-2xl text-white md:text-3xl mb-2">Product Designer</h1>
        <p className="text-gray-400 text-base md:!text-sm">I design distinct digital experiences<br />{" "}that clarify and convert.</p>
        </div>
         <div className="mt-auto mb-6 md:mb-0 self-center text-center">
        <p className="text-gray-400 text-base md:!text-sm">Based in Zurich, CH 🇨🇭</p>
        <p className="text-gray-400 text-base md:!text-sm mb-2">Open to on-site and remote <span className="text-[9px] align-middle">🟢</span></p>
        <ChevronDown className="mx-auto text-gray-400 animated-chevron-down" size={35} strokeWidth={1.75} />
        </div>
      </section>
      <div className="h-[150vh] md:h-[150vh]"></div>
      </div>

      </PageContainer>
      <FullWidthSection backgroundColor="#f5f5f4" sectionClassName="scroll-mt-18 relative z-20 overflow-x-hidden" >
        <PageContainer noPadding>
          <Reveal>
          <div className="mx-2 md:-mx-8 lg:-mx-16" id="cases">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
            <div className="order-2 md:order-none">
            <Card
                href="/case-studies/uoselfcheckout"
                image="/images/uo-after.png"
                title="Helped drive 9% revenue growth with a self-checkout program"
                logo="/images/uo-logo.svg"
                logoWidth={200}
                logoClassName="md:py-1"
                tags={[{ tag: "eCommerce" }, { tag: "Loyalty" }, { tag: "Point of Sale" }]}
                renderImageContent={(hovered) => (
                  <div className="w-full h-full" style={{ backgroundColor: "#FFFFFF" }}>
                    {/* Mobile: static cover image only */}
                    <div className="absolute inset-0 block md:hidden">
                      <img src="/images/home-uo-mobilecardcover.png" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    </div>
                    {/* Desktop: animated composition */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center">
                      <div className="flex items-end justify-center w-[86%] h-[80%]">
                      <img
                          src="/images/home-uo-homecard5.png"
                          alt=""
                          className={`relative z-0 h-[80%] md:h-[80%] w-auto rounded-md object-contain drop-shadow-md transition-transform duration-300 ease-out -ml-5 md:-ml-44 -translate-y-4 ${hovered ? "translate-x-[85px] -translate-y-5 scale-101" : "translate-x-[127px]"}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/home-uo-homecard4.png"
                          alt=""
                          className={`relative z-5 h-[100%] md:h-[100%] w-auto rounded-md object-contain drop-shadow-md transition-transform duration-300 ease-out -mr-5 md:-mr-44 translate-y-2 ${hovered ? "-translate-x-[70px] -translate-y-4 scale-105" : "-translate-x-[50px]"}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/home-uo-homecard1.gif"
                          alt=""
                          className={`relative z-10 h-[120%] md:h-[120%] w-auto rounded-md object-contain drop-shadow-md transition-transform duration-300 ease-out translate-y-7 translate-x-[22px] ${hovered ? "-translate-y-1 scale-105" : ""}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/home-uo-homecard2-1.png"
                          alt=""
                          className={`relative z-5 h-[100%] md:h-[100%] w-auto rounded-md object-contain drop-shadow-md transition-transform duration-300 ease-out -ml-5 md:-ml-44 translate-y-2 translate-x-[50px] ${hovered ? "translate-x-[70px] -translate-y-4 scale-105" : ""}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/home-uo-homecard6.png"
                          alt=""
                          className={`relative z-0 h-[80%] md:h-[80%] w-auto rounded-md object-contain drop-shadow-md transition-transform duration-300 ease-out -ml-5 md:-ml-44 -translate-y-4 translate-x-[50px] ${hovered ? "translate-x-[90px] -translate-y-5 scale-101" : ""}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* White overlay that fades from 20% to 0% on hover */}
                    <div
                      className={`absolute z-20 inset-0 bg-[#D3E7F5] pointer-events-none transition-opacity duration-300 ease-out ${hovered ? "opacity-0" : "md:opacity-20 opacity-0"}`}
                    />
                  </div>
                )}
                
              />
              </div>
              <div className="order-1 md:order-none">
              <Card
                href="/case-studies/hiltonpropertypages"
                image="/images/hilton-after.png"
                title="Increased conversion and engagement on 7,000+ hotel property pages"
                logo="/images/hilton-logo.svg"
                logoWidth={90}
                tags={[{ tag: "eCommerce" }, { tag: "Design Systems" }, { tag: "User Testing" }]}
                renderImageContent={(hovered) => (
                  <div className="w-full rounded-md h-full" style={{ backgroundColor: "#D3E7F5" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-end justify-center w-[86%] h-[80%]">
                        <img
                          src="/images/hilton-hamptoninn.png"
                          alt=""
                          className={`relative z-0 h-[80%] md:h-[80%] rounded-md w-auto object-contain drop-shadow-md -mr-5 md:-mr-44 -translate-y-3 transition-transform duration-300 ease-out ${hovered ? "-translate-x-[25px] -translate-y-4 scale-105" : ""}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/hilton-doubletree.png"
                          alt=""
                          className={`relative z-10 h-[100%] md:h-[100%] rounded-md w-auto object-contain drop-shadow-md transition-transform duration-300 ease-out ${hovered ? "-translate-y-1 scale-105" : ""}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/hilton-embassysuites.png"
                          alt=""
                          className={`relative z-0 h-[80%] md:h-[80%] rounded-md w-auto object-contain drop-shadow-md -ml-5 md:-ml-44 -translate-y-3 transition-transform duration-300 ease-out ${hovered ? "translate-x-[25px] -translate-y-4 scale-105" : ""}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* White overlay that fades from 20% to 0% on hover */}
                    <div
                      className={`absolute z-20 inset-0 bg-[#D3E7F5] pointer-events-none transition-opacity duration-300 ease-out ${hovered ? "opacity-0" : "md:opacity-20 opacity-0"}`}
                    />
                  </div>
                )}
              />
              </div>
              
              <div className="order-3 md:order-none">
              <Card
                href="/case-studies/jamfamilycalendar"
                image="/images/jam-dashexploration.png"
                title="Simplified family scheduling with a responsive calendar"
                logo="/images/jam-logo.png"
                tags={[{ tag: "SaaS" }, { tag: "User Flows" }, { tag: "Dashboards" }]}
                renderImageContent={(hovered) => (
                  <div className="w-full h-full">
                    <div className={`relative w-full h-full rounded-md overflow-hidden transition-transform duration-300 ease-out ${hovered ? "scale-[1.03]" : "scale-100"}`} style={{ backgroundColor: "#EAF0FF" }}>
                      <LottieCover src="/animations/home-jam-card.json" className="rounded-md" fit="cover" />
                      {/* White overlay that fades from 20% to 0% on hover */}
                      <div
                        className={`absolute z-20 inset-0 bg-[#D3E7F5] pointer-events-none transition-opacity duration-300 ease-out ${hovered ? "opacity-0" : "md:opacity-20 opacity-0"}`}
                      />
                    </div>
                  </div>
                )}
              />
              </div>
              <div className="order-4 md:order-none">
              <Card
                href="/case-studies/valeriejurado"
                image="/images/val-nownextlater.png"
                title="Brought 7x more contact form conversions to a high-end botanical designer"
                logo="/images/val-logo.svg"
                tags={[{ tag: "Responsive Web" }, { tag: "Growth Design" }, { tag: "Branding" }]}
                renderImageContent={(hovered) => (
                  <div className="w-full h-full" style={{ backgroundColor: "#000000" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="relative flex items-end justify-center w-[86%] h-[80%]">
                        <img
                          src="/images/ValFlowers-test.png"
                          alt=""
                          className={`relative z-0 h-[110%] md:h-[110%] rounded-md w-auto object-contain -mr-5 md:-mr-80 -translate-y-3 transition-transform duration-500 ease-out ${hovered ? "-translate-x-[40px] -translate-y-4 scale-120" : ""}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/home-val-form.png"
                          alt=""
                           className={`absolute left-1/2 -translate-x-1/2 bottom-2 z-10 h-[90%] md:h-[90%] rounded-md w-auto object-contain drop-shadow-md transition-transform duration-300 ease-out ${hovered ? "-translate-y-1 scale-105" : ""}`}
                          loading="lazy"
                        />
                        <img
                          src="/images/ValFruit-test.png"
                          alt=""
                          className={`relative z-0 h-[120%] md:h-[120%] rounded-md w-auto object-contain -ml-20 md:ml-100 -translate-y-3 transition-transform duration-500 ease-out ${hovered ? "translate-x-[40px] -translate-y-4 scale-120" : ""}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* White overlay that fades from 20% to 0% on hover */}
                    <div
                      className={`absolute z-20 inset-0 bg-[#D3E7F5] pointer-events-none transition-opacity duration-300 ease-out ${hovered ? "opacity-0" : "md:opacity-20 opacity-0"}`}
                    />
                  </div>
                )}
              />
              </div>
            </div>
          </div>
          </Reveal>
        </PageContainer>
      </FullWidthSection>
      <FullWidthSection
        backgroundColor="#0b0b0b"
        backgroundImage="/images/about-bg-grid.png"
        backgroundImageOpacity={0.2}
        backgroundSweep
        backgroundSweepDurationSec={8}
        backgroundSweepMaxOpacity={0.6}
        backgroundRadialMask
        backgroundSweepHideOnMobile
      >
        <PageContainer className="py-22 md:py-32 text-center">
        <div>
          <Reveal>
          <h1 className="custom-h1 text-white mb-4">Proven by Experience</h1>
          </Reveal>
          <Reveal delayMs={120}>
          <p className="mb-8 text-white/80 max-w-[18rem] md:max-w-none mx-auto">
          Employing a foundation in visual design, a career in user experience and a gritty work ethic.
          </p>
          </Reveal>
          <div className="flex flex-col md:flex-row justify-center gap-6">
           <Reveal delayMs={240}>
             <Link href="https://www.linkedin.com/in/mollyreeddesign/" className="btn btn--secondary-white inline-flex w-full md:w-auto justify-center">
               LinkedIn
               <ArrowUpRight />
             </Link>
           </Reveal>
           <Reveal delayMs={360}>
             <Link href="/case-studies/case-4" className="btn btn--secondary-white inline-flex w-full md:w-auto justify-center">
               Download CV
               <Download />
             </Link>
           </Reveal>
           <Reveal delayMs={480}>
            <button
              type="button"
              className="btn btn--secondary-white inline-flex w-full md:w-auto justify-center"
              onClick={() => {
                const email = "mollyreeddesign@gmail.com";
                if (navigator?.clipboard?.writeText) {
                  navigator.clipboard.writeText(email);
                } else {
                  const t = document.createElement("textarea");
                  t.value = email;
                  document.body.appendChild(t);
                  t.select();
                  document.execCommand("copy");
                  document.body.removeChild(t);
                }
              }}
            >
              Copy Email
              <Copy />
            </button>
           </Reveal>
           </div>
        </div>
        </PageContainer>
      </FullWidthSection>
      <FullWidthSection backgroundColor="#f5f5f4" sectionClassName="relative overflow-hidden">
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none -rotate-90 transition-opacity duration-300 ${isAlignHovered ? 'opacity-80' : 'opacity-0'}`}
          style={{ width: 'max(100vw, 100vh)', height: 'max(100vw, 100vh)' }}
        >
          <LottieCover src="/animations/home-pulsinglines.json" fit="cover" />
        </div>
        <div
          className={`absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300 ${hoveredCard === 'create' ? 'opacity-20' : 'opacity-0'}`}
        >
          <TiledLottie src="/animations/home-dotsdancing.json" tileSize={240} overlapXPercent={0.35} overlapYPercent={0.5} preserveAspect="cover" />
        </div>
        <div
          className={`absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300 ${hoveredCard === 'execute' ? 'opacity-40' : 'opacity-0'}`}
         >
           <LottieCover src="/animations/home-rotation.json" fit="cover" className="grayscale" />
        </div>
        <PageContainer className="py-18 md:py-28 relative z-10">
        <div>
        <Reveal>
        <h1 className="custom-h1 text-black text-center mb-10">How I Work</h1>
        </Reveal>
        <div className="mx-8 md:-mx-8 lg:-mx-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Reveal>
          <div
            className="bg-[#f5f5f4] rounded-lg p-4 relative md:cursor-none transition-transform duration-200 ease-out shadow-sm hover:shadow-lg hover:scale-[1.02]"
            onMouseEnter={(e) => { setIsAlignHovered(true); setHoveredCard("align"); }}
            onMouseLeave={() => { setIsAlignHovered(false); setHoveredCard(null); }}
            onMouseMove={(e) => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <h3 className="custom-h3 text-black mb-2">Align</h3>
            <p className="text-black/80">
            I bring together key business objectives, user/competitor research and product goals.
            I define scope early on.</p>
            {/* Custom cursor overlay - desktop only */}
            <div className="hidden md:block pointer-events-none absolute inset-0">
              {hoveredCard === "align" && (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md"
                  style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
                >
                  <Users size={18} strokeWidth={2} color="#fff" />
                </div>
              )}
            </div>
          </div>
          </Reveal>
          <Reveal delayMs={120}>
          <div
            className="bg-[#f5f5f4] rounded-lg p-4 relative md:cursor-none transition-transform duration-200 ease-out shadow-sm hover:shadow-lg hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard("create")}
            onMouseLeave={() => setHoveredCard(null)}
            onMouseMove={(e) => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <h3 className="custom-h3 text-black mb-2">Create</h3>
            <p className="text-black/80">
            I build working prototypes and validate with testing often. 
            I don't design in a silo, I bring stakeholders along.</p>
            {/* Custom cursor overlay - desktop only */}
            <div className="hidden md:block pointer-events-none absolute inset-0">
              {hoveredCard === "create" && (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md"
                  style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
                >
                  <Wrench size={18} strokeWidth={2} color="#fff" />
                </div>
              )}
            </div>
          </div>
          </Reveal>
          <Reveal delayMs={240}>
          <div
            className="bg-[#f5f5f4] rounded-lg p-4 relative md:cursor-none transition-transform duration-200 ease-out shadow-sm hover:shadow-lg hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard("execute")}
            onMouseLeave={() => setHoveredCard(null)}
            onMouseMove={(e) => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <h3 className="custom-h3 text-black mb-2">Execute</h3>
            <p className="text-black/80">
            I synthesize research, strategy, and design into a final product.
           I maintain my craft from start to finish.</p>
            {/* Custom cursor overlay - desktop only */}
            <div className="hidden md:block pointer-events-none absolute inset-0">
              {hoveredCard === "execute" && (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-md"
                  style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
                >
                  <MonitorSmartphone size={18} strokeWidth={2} color="#fff" />
                </div>
              )}
            </div>
          </div>
          </Reveal>
          </div>
          </div>
          
      </PageContainer>
      </FullWidthSection>
      <FullWidthSection backgroundColor="#0b0b0b">
        <PageContainer noPadding  className="-mb-6 md:-mb-22">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <Reveal>
          <div>
            <Image src="/images/home-about.png" alt="About" unoptimized width={600} height={600} className="rounded-lg object-cover mx-auto mb-6" style={{ aspectRatio: '1/1' }} />
            </div>
            </Reveal>
            <div>
              <Reveal>
          <h1 className="custom-h1 text-white mb-4 md:mb-6">I'm a product designer, web designer and artist.</h1>
          </Reveal>
          <Reveal delayMs={120}>
          <p className="mb-4 text-white/80">
          I’ve been designing experiences in technology for people and businesses for over a decade.
          </p>
          <p className="mb-4 text-white/80">
          With a background in visual design and industry experience in eCommerce, Telecom and Hospitality, I design products that bring real results.
          </p>
          <p className="text-white/80">
          Born and raised in Vermont, USA. Based in
          </p>
          <p className="mb-4 text-white/80">
          <span className="line-through">Philadelphia</span> <span className="line-through">Los Angeles</span> Zurich, CH 🇨🇭
          </p>
          <p className="mb-14 md:mb-10 text-white/80">
          Painter, gardener, hiker and motorcyclist.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6">
          <Link href="https://www.linkedin.com/in/mollyreeddesign/" className="btn btn--secondary-white inline-flex w-full md:w-auto justify-center">
             LinkedIn
             <ArrowUpRight />
           </Link>
            <Link href="/about" className="btn btn--white inline-flex w-full md:w-auto justify-center">
             More About Me
             <ArrowUpRight />
           </Link>
           </div>
           </Reveal>
          </div>
        </div>
        
        </PageContainer>
      </FullWidthSection>
      <FullWidthSection noPadding backgroundColor="#0b0b0b">
        <PageContainer className="-mb-18 md:-mb-48">
        <Reveal>
        <div className="grid grid-cols-1 mb-22 md:grid-cols-2 gap-12">
          <div className="p-6 md:p-8 bg-white/10 border border-white/30 rounded-lg h-full flex flex-col">
            <p className="text-white/80 mb-8">“Molly was my absolute favorite UI design partner at Hilton. She was quick and receptive to feedback, adapting quickly to stakeholder demands. When in doubt, her own skills and leadership abilities were showcased as she quickly made executive level decisions based on team feedback for overall product success. She was a limited resource, and we made sure to openly and expressively fight for her attentions. She will delight anyone that hires her with her creative abilities and fast approach to art and design.”</p>
            <Link href="https://www.linkedin.com/in/april-walczak" target="_blank" rel="noopener noreferrer" className="mt-auto -m-2 p-2 flex items-center gap-3 rounded-md transition-colors hover:bg-white/5 group">
              <Image src="/images/april.png" alt="April Walczak" width={50} height={50} className="rounded-full object-cover transition-transform duration-200 group-hover:scale-105" />
              <div>
                <h3 className="custom-h3 text-white transition-colors group-hover:text-white group-hover:underline">April Walczak</h3>
                <p className="text-white/70 transition-colors group-hover:text-white/80">UX Design Lead</p>
              </div>
            </Link>
            </div>
            <div className="p-6 md:p-8 bg-white/10 border border-white/30 rounded-lg h-full flex flex-col">
            <p className="text-white/80 mb-4">“I had the pleasure of working with Molly at Hilton, where she jumped right in and became a key part of the team from day one. She picked things up fast, brought a can-do attitude, and always contributed thoughtful, well-reasoned ideas.”
</p>
            <p className="text-white/80 mb-8">“If you’re looking for a smart, dependable designer who makes an impact and is a joy to work with, you’ll be lucky to have her on your team.”</p>
            
            <Link href="https://www.linkedin.com/in/ilke-vn" target="_blank" rel="noopener noreferrer" className="mt-auto -m-2 p-2 flex items-center gap-3 rounded-md transition-colors hover:bg-white/5 group">
              <Image src="/images/ilke.png" alt="Ilke Ingram" width={50} height={50} className="rounded-full object-cover transition-transform duration-200 group-hover:scale-105" />
              <div>
                <h3 className="custom-h3 text-white transition-colors group-hover:text-white group-hover:underline">Ilke Ingram</h3>
                <p className="text-white/70 transition-colors group-hover:text-white/80">Product Designer</p>
              </div>
            </Link>
            </div>
        </div>
        </Reveal>
        <Reveal delayMs={75}>
        <div className="text-center">
        <BackToTopButton className="btn btn--white inline-flex gap-2 w-full md:w-auto justify-center" label="Back to Top" />
      </div>
        </Reveal>
        
        </PageContainer>
      </FullWidthSection>
      
    </main>
  );
}
