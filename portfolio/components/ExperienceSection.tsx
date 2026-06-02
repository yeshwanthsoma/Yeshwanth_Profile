"use client";

import { ArrowUpRight } from "lucide-react";
import FadeUp from "./FadeUp";

const EXPERIENCE = [
  {
    company: "Visa Inc.",
    role: "Staff Software Engineer",
    period: "Aug 2022 — Present",
    location: "Austin, TX",
    url: "https://visa.com",
    highlights: [
      "Engineered AI-powered Dev Automation System using Claude Agent SDK + multi-agent orchestration, reducing feature dev time by 70%",
      "Architected MCP server ecosystem (Jira, GitHub, Bitbucket, Artifactory, SonarQube), cutting onboarding effort by 50% across 200+ engineers",
      "Built intelligent Security Fix Agent using LangGraph & LangChain — patch time from days to <1 hour across 80+ repos, 90% less manual overhead",
      "Developed Sanitization Agent using OpenAI LLMs + ChromaDB — 75% less manual review, 98% PII redaction accuracy",
      "Built payment platform: Java Spring Boot + Kafka + Temporal, 25K TPS, 99.9% accuracy, 35% latency reduction",
      "Active-active multi-regional architecture on Azure — near-zero downtime",
      "Hazelcast distributed caching — 45% latency reduction",
    ],
    tech: ["Java", "Spring Boot", "LangGraph", "LangChain", "Claude SDK", "Kafka", "Kubernetes", "Docker", "PostgreSQL", "Azure", "Python"],
  },
  {
    company: "BlackRock",
    role: "Aladdin Client Services Analyst",
    period: "Jun 2022 — Aug 2022",
    location: "Atlanta, GA",
    url: "https://blackrock.com",
    highlights: [
      "Delivered Aladdin product demos using SQL and UNIX, boosting platform adoption",
      "Built product enhancement proposal improving client productivity through optimized support workflows",
      "Conducted stakeholder analysis guiding strategic product decisions",
    ],
    tech: ["SQL", "UNIX", "Aladdin"],
  },
  {
    company: "NCR Corp",
    role: "Professional Services Software Engineer",
    period: "Jul 2019 — Dec 2020",
    location: "Hyderabad, India",
    url: "https://ncr.com",
    highlights: [
      "Built end-to-end POS application for enterprise retail, 80% issue resolution rate",
      "Accelerated dev by 60% through documentation and standardized practices",
      "Designed fault-tolerant database schema for high-volume transaction processing",
    ],
    tech: ["C#", "HTML", "MS SQL", "REST API"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        scrollMarginTop: "64px",
      }}
    >
      {/* Section counter */}
      <FadeUp delay={0}>
        <span className="section-counter">03 / 05</span>
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
          Experience
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#888888",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          Where I&apos;ve built things that matter.
        </p>
      </FadeUp>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* Vertical orange line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, #10b981, rgba(16,185,129,0.1))",
          }}
          aria-hidden="true"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {EXPERIENCE.map((job, index) => (
            <FadeUp key={job.company} delay={index * 0.15}>
              <div style={{ position: "relative" }}>
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-2.4rem",
                    top: "1.5rem",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 8px rgba(16,185,129,0.6)",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />

                {/* Card */}
                <div
                  className="portfolio-card"
                  style={{ padding: "1.75rem" }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#ffffff",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            transition: "color 0.2s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#10b981";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                          }}
                        >
                          {job.company}
                          <ArrowUpRight size={14} strokeWidth={2} />
                        </a>
                      </div>
                      <p style={{ color: "#888888", fontSize: "0.875rem", fontWeight: 500 }}>
                        {job.role}
                      </p>
                      <p style={{ color: "#4a4a4a", fontSize: "0.8rem", marginTop: "0.2rem" }}>
                        {job.location}
                      </p>
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "0.72rem",
                        color: "#10b981",
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.18)",
                        borderRadius: "9999px",
                        padding: "0.25rem 0.75rem",
                        whiteSpace: "nowrap",
                        fontWeight: 600,
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                      marginBottom: "1.25rem",
                      listStyle: "none",
                    }}
                  >
                    {job.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          color: "#888888",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                        }}
                      >
                        <span
                          style={{
                            color: "#10b981",
                            flexShrink: 0,
                            marginTop: "0.35rem",
                            fontSize: "0.55rem",
                          }}
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {job.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
