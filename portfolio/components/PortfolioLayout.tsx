"use client";

import { useEffect, useState, useRef } from "react";
import LeftPanel from "./LeftPanel";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import Footer from "./Footer";
import SpotlightCursor from "./SpotlightCursor";

const SECTIONS = ["about", "experience", "projects", "skills"];

export default function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const ratios = new Map<string, number>();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.id, e.intersectionRatio));
        let best = "";
        let bestRatio = 0;
        ratios.forEach((r, id) => {
          if (r > bestRatio) { bestRatio = r; best = id; }
        });
        if (best) setActiveSection(best);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: "-10% 0px -30% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <SpotlightCursor />

      {/* Mobile sticky header */}
      <header className="lg:hidden sticky top-0 z-40 px-6 py-4 bg-[#0a192f]/95 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between">
          <span
            className="text-[#64ffda] font-bold text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            YS
          </span>
          <nav className="flex gap-6">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-xs uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === id ? "text-[#64ffda]" : "text-[#8892b0]"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {id}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="lg:flex lg:gap-20 xl:gap-28">

          {/* ── Left: sticky sidebar ── */}
          <div
            className="lg:sticky lg:top-0 lg:flex-shrink-0"
            style={{ width: "clamp(260px, 40%, 480px)", height: "100vh" }}
          >
            <LeftPanel activeSection={activeSection} />
          </div>

          {/* ── Right: scrollable content ── */}
          <div className="flex-1 min-w-0 pb-16" style={{ paddingTop: "6rem" }}>
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <Footer />
          </div>

        </div>
      </main>
    </>
  );
}
