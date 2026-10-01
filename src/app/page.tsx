import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "AI-Powered Security Infrastructure",
  description:
    "Lexci is an AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities. Protect, analyze, and scale your digital infrastructure with autonomous threat detection and zero-trust architecture.",
  keywords: [
    "AI cybersecurity",
    "AI security platform",
    "zero trust architecture",
    "autonomous threat detection",
    "cybersecurity India",
    "AI infrastructure",
    "cloud security",
    "enterprise cybersecurity",
    "InMind AI",
    "Lexci",
    "digital infrastructure security",
    "web development India",
    "app development Bangalore",
  ],
  openGraph: {
    title: "Lexci — AI-Powered Security Infrastructure for a Scalable World",
    description:
      "A unified platform combining cybersecurity, artificial intelligence, and engineering systems to build, protect, and scale digital ecosystems.",
    url: "https://lexci.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexci — AI-Powered Security Infrastructure",
    description:
      "A unified platform combining cybersecurity, AI, and engineering systems to protect and scale digital ecosystems.",
  },
  alternates: {
    canonical: "https://lexci.in",
  },
};

export default function Home() {
  return <HomeContent />;
}
