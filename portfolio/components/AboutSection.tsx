"use client";

import { BookOpen, Cpu, Zap, Briefcase, GitBranch } from "lucide-react";
import FadeUp from "./FadeUp";

const ABOUT_PARAGRAPHS = [
  <>
    Solution-driven Staff Software Engineer with{" "}
    <span style={{ color: "#10b981", fontWeight: 600 }}>5+ years of professional experience</span>{" "}
    and a Master&apos;s degree in Business Analytics. I specialize in architecting enterprise-scale
    applications with advanced{" "}
    <span style={{ color: "#10b981", fontWeight: 600 }}>AI/ML automation</span>, microservices, and
    cloud infrastructure.
  </>,
  <>
    I&apos;ve engineered intelligent agents using{" "}
    <span style={{ color: "#10b981", fontWeight: 600 }}>LangGraph and LangChain</span>, built payment
    platforms processing{" "}
    <span style={{ color: "#10b981", fontWeight: 600 }}>25K+ transactions per minute</span>, and
    led cross-functional engineering teams. My work spans from low-level distributed systems to
    high-level AI orchestration — always focused on eliminating manual overhead.
  </>,
  <>
    When I&apos;m not building systems at{" "}
    <span style={{ color: "#10b981", fontWeight: 600 }}>Visa</span>, I&apos;m exploring multi-agent AI
    architectures, full-stack applications, and developer tooling that makes engineers{" "}
    <span style={{ color: "#10b981", fontWeight: 600 }}>10× more productive</span>.
  </>,
];

const EDUCATION = [
  {
    degree: "MS Business Analytics & Information Systems",
    school: "University of South Florida",
    gpa: "GPA 3.6",
    year: "2022",
  },
  {
    degree: "B.Tech Computer Science",
    school: "VNRVJIET",
    gpa: "GPA 3.6",
    year: "2019",
  },
];

const FEATURES = [
  {
    icon: Cpu,
    title: "AI/ML Architecture",
    description:
      "Built production multi-agent systems with LangGraph, LangChain, and Claude SDK. Reduced security patch time from days to under 1 hour across 80+ repos.",
  },
  {
    icon: Zap,
    title: "High-Performance Systems",
    description:
      "Engineered payment platforms processing 25K+ TPS with 99.9% accuracy. Active-active multi-regional Azure architecture with near-zero downtime.",
  },
  {
    icon: BookOpen,
    title: "Developer Experience",
    description:
      "Architected MCP server ecosystem cutting onboarding effort by 50% across 200+ engineers. Built AI-powered Dev Automation System reducing feature dev time by 70%.",
  },
];

const STATS = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: GitBranch, value: "80+", label: "Repos Secured" },
  { icon: Zap, value: "90%", label: "Overhead Reduced" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        scrollMarginTop: "64px",
      }}
    >
      {/* Section counter */}
      <FadeUp delay={0}>
        <span className="section-counter">01 / 05</span>
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
          About Me
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#888888",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          Builder. Problem-solver. Engineer at heart.
        </p>
      </FadeUp>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          marginBottom: "4rem",
        }}
      >
        {/* Left: paragraphs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {ABOUT_PARAGRAPHS.map((para, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <p
                style={{
                  color: "#888888",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                }}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* Right: education card */}
        <FadeUp delay={0.2}>
          <div>
            <h3
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono, monospace)",
                color: "#10b981",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              Education
            </h3>
            <div
              className="portfolio-card"
              style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid #152018",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.875rem", lineHeight: 1.4, marginBottom: "0.25rem" }}>
                      {edu.degree}
                    </p>
                    <p style={{ color: "#10b981", fontSize: "0.8rem", fontWeight: 500 }}>
                      {edu.school}
                    </p>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "0.7rem",
                        color: "#10b981",
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {edu.year}
                    </p>
                    <p style={{ fontSize: "0.7rem", color: "#4a4a4a" }}>{edu.gpa}</p>
                  </div>
                </div>
              ))}
              <div style={{ paddingTop: "0.25rem" }}>
                <p style={{ fontSize: "0.75rem", color: "#4a4a4a", lineHeight: 1.6 }}>
                  Based in Austin, Texas. Open to remote opportunities.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Feature rows — horizontal list style */}
      <div style={{ marginBottom: "3rem" }}>
        {FEATURES.map(({ icon: Icon, title, description }, i) => (
          <FadeUp key={title} delay={0.1 + i * 0.12}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.25rem",
                borderBottom: "1px solid #152018",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color="#10b981" strokeWidth={2} />
              </div>
              <div>
                <h3
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.375rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#888888", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  {description}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Stat counter cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <FadeUp key={label} delay={0.1 + i * 0.12}>
            <div
              className="portfolio-card"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "0.625rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={20} color="#10b981" strokeWidth={2} />
              </div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#888888", fontWeight: 500 }}>
                {label}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
