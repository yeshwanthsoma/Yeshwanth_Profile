"use client";

import SocialLinks from "./SocialLinks";
import { resumeData } from "@/data/resume";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

interface LeftPanelProps {
  activeSection: string;
}

export default function LeftPanel({ activeSection }: LeftPanelProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        paddingLeft: "0.5rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Identity ── */}
      <div>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#e2e8f0",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "0.6rem",
          }}
        >
          {resumeData.name}
        </h1>

        <h2
          style={{
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "#ccd6f6",
            marginBottom: "1rem",
            lineHeight: 1.4,
          }}
        >
          {resumeData.title}
        </h2>

        <p
          style={{
            fontSize: "0.875rem",
            color: "#8892b0",
            lineHeight: 1.7,
            maxWidth: "280px",
          }}
        >
          {resumeData.tagline}
        </p>
      </div>

      {/* ── Nav (desktop only) ── */}
      <nav
        className="hidden lg:flex"
        style={{ flexDirection: "column", gap: "1rem", marginTop: "3rem" }}
        aria-label="Page sections"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "none",
                border: "none",
                padding: "0.25rem 0",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "1px",
                  width: isActive ? "64px" : "32px",
                  background: isActive ? "#ccd6f6" : "#374159",
                  transition: "width 0.3s ease, background 0.3s ease",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isActive ? "#ccd6f6" : "#374159",
                  transition: "color 0.3s ease",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ── Social links — pinned to bottom ── */}
      <div style={{ marginTop: "auto" }}>
        <SocialLinks />
      </div>
    </div>
  );
}
