"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Dot {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  vx: number;
  vy: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initDots = () => {
      if (!canvas) return;
      const seed = 42;
      const rand = (n: number, offset: number) => {
        const x = Math.sin(n * seed + offset) * 10000;
        return x - Math.floor(x);
      };
      dotsRef.current = Array.from({ length: 120 }, (_, i) => ({
        x: rand(i, 1) * canvas.width,
        y: rand(i, 2) * canvas.height,
        radius: rand(i, 3) * 2 + 1,
        opacity: rand(i, 4) * 0.25 + 0.15,
        vx: (rand(i, 5) - 0.5) * 0.3,
        vy: (rand(i, 6) - 0.5) * 0.3,
      }));
    };

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const dot of dotsRef.current) {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x < -dot.radius) dot.x = canvas.width + dot.radius;
        else if (dot.x > canvas.width + dot.radius) dot.x = -dot.radius;
        if (dot.y < -dot.radius) dot.y = canvas.height + dot.radius;
        else if (dot.y > canvas.height + dot.radius) dot.y = -dot.radius;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 240, 240, ${dot.opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 1.5rem 2rem",
      }}
    >
      {/* Canvas background dots */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Subtle radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(240,240,240,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Status badge */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "9999px",
            marginBottom: "2rem",
            fontSize: "0.8rem",
            color: "#888888",
            letterSpacing: "0.02em",
          }}
        >
          <span style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "8px",
            height: "8px",
            flexShrink: 0,
          }}>
            <span className="ping-dot" />
            <span style={{
              position: "relative",
              zIndex: 1,
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 0 6px rgba(34,197,94,0.7)",
              flexShrink: 0,
            }} />
          </span>
          Staff SWE @ Visa Inc.
        </motion.div>

        {/* Name line 1 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(3.5rem, 10vw, 6rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
            }}
          >
            Yeshwanth
          </span>
        </motion.div>

        {/* Name line 2 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          style={{ marginBottom: "1.25rem" }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(3.5rem, 10vw, 6rem)",
              fontWeight: 900,
              color: "#f0f0f0",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
            }}
          >
            Soma
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            color: "#888888",
            marginBottom: "2.25rem",
            letterSpacing: "0.03em",
            fontWeight: 400,
          }}
        >
          Staff Software Engineer —{" "}
          <span style={{ color: "#ffffff" }}>Java</span>
          {" · "}
          <span style={{ color: "#ffffff" }}>AI/ML</span>
          {" · "}
          <span style={{ color: "#ffffff" }}>Cloud</span>
        </motion.p>

        {/* Stat pills */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.625rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { value: "25K+", label: "TPS" },
            { value: "5+", label: "yrs" },
            { value: "200+", label: "engineers" },
            { value: "90%", label: "overhead↓" },
          ].map(({ value, label }) => (
            <div key={label} className="stat-pill">
              <strong>{value}</strong> {label}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.875rem",
            justifyContent: "center",
          }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Get in Touch
          </a>

          <a
            href="https://linkedin.com/in/soma-yeshwanth"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/yeshwanthsoma"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          <a
            href="/resume.pdf"
            download="Yeshwanth_Soma_Resume.pdf"
            className="btn-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 18 15 15" />
            </svg>
            Resume
          </a>
        </motion.div>
      </div>

      {/* Bounce arrow */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="bounce-arrow"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#4a4a4a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "#f0f0f0";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "#4a4a4a";
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}
