"use client";

import { useEffect, useState } from "react";

export default function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="spotlight pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(100, 255, 218, 0.05), transparent 80%)`,
      }}
    />
  );
}
