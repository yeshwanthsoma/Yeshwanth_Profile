"use client";

import FadeUp from "./FadeUp";

export default function ContactSection() {
  const EMAIL = "soma.yeshwanth1@gmail.com";
  const LINKEDIN = "https://linkedin.com/in/soma-yeshwanth";
  const GITHUB = "https://github.com/soma-yeshwanth";

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "800px",
        margin: "0 auto",
        scrollMarginTop: "64px",
        textAlign: "center",
      }}
    >
      {/* Section counter */}
      <FadeUp delay={0}>
        <span className="section-counter" style={{ display: "block", textAlign: "center" }}>
          05 / 05
        </span>
        <div className="section-counter-line" style={{ margin: "0 auto 1.5rem" }} />
      </FadeUp>

      {/* Heading */}
      <FadeUp delay={0.05}>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.75rem",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#888888",
            marginBottom: "3rem",
            maxWidth: "480px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          Open to new opportunities, interesting projects, and conversations about AI/ML,
          distributed systems, or anything in between.
        </p>
      </FadeUp>

      {/* Contact buttons */}
      <FadeUp delay={0.15}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="portfolio-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.5rem",
              textDecoration: "none",
              cursor: "pointer",
              transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(240,240,240,0.4)";
              el.style.background = "#0f1f16";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#1a2e22";
              el.style.background = "#0d1a12";
              el.style.transform = "translateY(0)";
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "0.7rem", color: "#4a4a4a", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                Email
              </p>
              <p style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 500 }}>
                {EMAIL}
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.5rem",
              textDecoration: "none",
              cursor: "pointer",
              transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(240,240,240,0.4)";
              el.style.background = "#0f1f16";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#1a2e22";
              el.style.background = "#0d1a12";
              el.style.transform = "translateY(0)";
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#f0f0f0"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "0.7rem", color: "#4a4a4a", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                LinkedIn
              </p>
              <p style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 500 }}>
                soma-yeshwanth
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.5rem",
              textDecoration: "none",
              cursor: "pointer",
              transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(240,240,240,0.4)";
              el.style.background = "#0f1f16";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#1a2e22";
              el.style.background = "#0d1a12";
              el.style.transform = "translateY(0)";
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#f0f0f0"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "0.7rem", color: "#4a4a4a", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.15rem" }}>
                GitHub
              </p>
              <p style={{ color: "#ffffff", fontSize: "0.875rem", fontWeight: 500 }}>
                soma-yeshwanth
              </p>
            </div>
          </a>
        </div>
      </FadeUp>

      {/* CTA */}
      <FadeUp delay={0.25}>
        <a
          href={`mailto:${EMAIL}`}
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
        >
          Say Hello
        </a>
      </FadeUp>
    </section>
  );
}
