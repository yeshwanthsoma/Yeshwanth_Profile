import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yeshwanth Soma — Staff Software Engineer",
  description:
    "Staff Software Engineer specializing in enterprise-scale AI/ML automation, microservices architecture, and distributed systems. 5+ years building production systems at Visa.",
  keywords: [
    "Yeshwanth Soma",
    "Staff Software Engineer",
    "AI/ML",
    "Java",
    "Spring Boot",
    "LangChain",
    "LangGraph",
    "Distributed Systems",
    "Visa",
    "Austin Texas",
  ],
  authors: [{ name: "Yeshwanth Soma" }],
  openGraph: {
    title: "Yeshwanth Soma — Staff Software Engineer",
    description:
      "Staff Software Engineer specializing in enterprise-scale AI/ML automation, microservices, and distributed systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body style={{ background: "#0a0a0f", color: "#ffffff", minHeight: "100vh" }}>
        {children}
      </body>
    </html>
  );
}
