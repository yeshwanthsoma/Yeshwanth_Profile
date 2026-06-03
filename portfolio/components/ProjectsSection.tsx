"use client";

import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";

const PROJECTS = [
  {
    number: "01",
    name: "Debunker",
    subtitle: "AI-Powered Misinformation Combat Platform",
    description:
      "Built an AI-powered fact-checking platform using Python, FastAPI, PostgreSQL, Redis, and Docker that verifies claims from text, audio, and social media URLs. Integrates OpenAI, Anthropic Claude, and xAI Grok for multi-model analysis, with FAISS for semantic search. Deployed on Railway with rate limiting and per-user quota enforcement.",
    url: "https://www.de-bunker.com",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "OpenAI", "Anthropic Claude", "xAI Grok", "FAISS", "Railway"],
    stats: ["1000+ daily fact-checks", "Sub-2s response time", "95% uptime", "78% accuracy"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        scrollMarginTop: "64px",
      }}
    >
      {/* Section counter */}
      <FadeUp delay={0}>
        <span className="section-counter">04 / 05</span>
        <div className="section-counter-line" />
      </FadeUp>

      {/* Heading */}
      <FadeUp delay={0.05}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "0.75rem",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Projects
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#888888",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          Things I&apos;ve built and shipped.
        </p>
      </FadeUp>

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {PROJECTS.map((project, index) => (
          <FadeUp key={project.name} delay={0.1 + index * 0.15}>
            <div
              className="portfolio-card"
              style={{ padding: "2rem" }}
            >
              {/* Top row: number badge + name + link */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  {/* Number badge */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(240,240,240,0.1)",
                      border: "1px solid rgba(240,240,240,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "0.75rem",
                        color: "#f0f0f0",
                        fontWeight: 700,
                      }}
                    >
                      {project.number}
                    </span>
                  </div>

                  <div>
                    <h3
                      style={{
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        letterSpacing: "-0.02em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p style={{ color: "#888888", fontSize: "0.825rem" }}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* External link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live site`}
                  style={{
                    color: "#4a4a4a",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "inline-flex",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#f0f0f0";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#4a4a4a";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  <ArrowUpRight size={20} strokeWidth={2} />
                </a>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "#888888",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                {project.description}
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.625rem",
                  marginBottom: "1.25rem",
                }}
              >
                {project.stats.map((stat) => (
                  <div
                    key={stat}
                    style={{
                      padding: "0.25rem 0.75rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid #152018",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      color: "#888888",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {stat}
                  </div>
                ))}
              </div>

              {/* Live link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono, monospace)",
                  color: "#f0f0f0",
                  textDecoration: "none",
                  marginBottom: "1.25rem",
                  transition: "color 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#f0f0f0";
                }}
              >
                {project.url.replace("https://www.", "").replace("https://", "")}
                <ArrowUpRight size={12} strokeWidth={2} />
              </a>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
