"use client";

import FadeUp from "./FadeUp";

const SKILLS: Record<string, string[]> = {
  "Programming Languages": ["Java", "Python", "C#", "JavaScript", "TypeScript", "SQL", "C++", "NodeJS"],
  "AI/ML & LLMs": ["LangGraph", "LangChain", "Claude SDK", "OpenAI API", "RAG", "ChromaDB", "Vector Databases", "Hugging Face"],
  "Backend & Frameworks": ["Spring Boot", "FastAPI", "Kafka", "Temporal", "REST API", "GraphQL"],
  "Cloud & Infrastructure": ["AWS (Lambda, EC2, S3)", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"],
  "Databases": ["PostgreSQL", "Redis", "MongoDB", "MySQL", "ElasticSearch", "PgBouncer"],
  "Monitoring & Security": ["Prometheus", "Grafana", "Splunk", "SonarQube", "Checkmarx", "JMeter"],
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        scrollMarginTop: "64px",
      }}
    >
      {/* Section counter */}
      <FadeUp delay={0}>
        <span className="section-counter">02 / 05</span>
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
          Skills &amp; Technologies
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#888888",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          The tools I use to build production systems.
        </p>
      </FadeUp>

      {/* Skills grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {Object.entries(SKILLS).map(([category, items], index) => (
          <FadeUp key={category} delay={index * 0.1}>
            <div
              className="portfolio-card"
              style={{ padding: "1.5rem" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.65rem",
                  color: "#10b981",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                {category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {items.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
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
