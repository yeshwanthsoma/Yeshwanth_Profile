export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #0f1f16",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "0.8rem",
          color: "#4a4a4a",
          fontFamily: "var(--font-mono, monospace)",
          letterSpacing: "0.03em",
        }}
      >
        Designed &amp; Built by{" "}
        <a
          href="https://linkedin.com/in/soma-yeshwanth"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#888888",
            textDecoration: "none",
            transition: "color 0.2s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.color = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.color = "#888888";
          }}
        >
          Yeshwanth Soma
        </a>
      </p>
    </footer>
  );
}
