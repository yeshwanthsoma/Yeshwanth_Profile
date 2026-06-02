"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  scrollProgress: number;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrollProgress }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isFloating = scrollProgress > 3;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed outer container — full width, sits at top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          paddingTop: isFloating ? "0.75rem" : "0",
          transition: "padding 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <motion.nav
          animate={
            isFloating
              ? {
                  background: "rgba(15,15,15,0.92)",
                  borderRadius: "9999px",
                  border: "1px solid #1a2e22",
                  marginLeft: "1.5rem",
                  marginRight: "1.5rem",
                  backdropFilter: "blur(16px)",
                }
              : {
                  background: "transparent",
                  borderRadius: "0px",
                  border: "1px solid transparent",
                  marginLeft: "0rem",
                  marginRight: "0rem",
                  backdropFilter: "blur(0px)",
                }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            pointerEvents: "all",
            borderBottom: isFloating ? "none" : "1px solid transparent",
            WebkitBackdropFilter: isFloating ? "blur(16px)" : "blur(0px)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 1.5rem",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                fontWeight: 900,
                fontSize: "1.25rem",
                color: "#10b981",
                letterSpacing: "-0.02em",
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              YS
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex"
              style={{ gap: "2rem", alignItems: "center" }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#888888",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#888888";
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Right: scroll % + theme icon */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.8rem",
                  color: "#10b981",
                  fontWeight: 600,
                  minWidth: "2.5rem",
                  textAlign: "right",
                }}
              >
                {scrollProgress}%
              </span>

              {/* Decorative sun icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4a4a4a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>

              {/* Hamburger */}
              <button
                className="flex md:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  color: "#888888",
                }}
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          {menuOpen && (
            <div
              className="mobile-menu-open md:hidden"
              style={{
                background: "#0d1a12",
                borderTop: "1px solid #152018",
                padding: "1rem 1.5rem 1.5rem",
                borderRadius: isFloating ? "0 0 24px 24px" : "0",
              }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  style={{
                    display: "block",
                    padding: "0.75rem 0",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#888888",
                    textDecoration: "none",
                    cursor: "pointer",
                    borderBottom: "1px solid #152018",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#10b981";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#888888";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </motion.nav>
      </div>
    </>
  );
}
