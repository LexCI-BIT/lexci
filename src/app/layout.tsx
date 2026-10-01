import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lexci.in"),
  title: {
    default: "Lexci — AI-Powered Security Infrastructure",
    template: "%s | Lexci",
  },
  description:
    "Lexci is an AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities to power the next generation of digital infrastructure.",
  keywords: [
    "Lexci",
    "AI cybersecurity",
    "cybersecurity platform",
    "AI security",
    "zero trust",
    "cloud security",
    "threat detection",
    "InMind AI",
    "web development",
    "app development",
    "engineering services",
    "digital infrastructure",
    "Bangalore",
    "Hyderabad",
    "India",
  ],
  authors: [{ name: "Lexci", url: "https://www.lexci.in" }],
  creator: "Lexci",
  publisher: "Lexci",
  applicationName: "Lexci",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.lexci.in",
    siteName: "Lexci",
    title: "Lexci — AI-Powered Security Infrastructure",
    description:
      "An AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities for modern enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexci — AI-Powered Security Infrastructure",
    description:
      "An AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities for modern enterprises.",
  },
  alternates: {
    canonical: "https://www.lexci.in",
  },
};

import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedDots from "@/components/AnimatedDots";
import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Gilda+Display&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <JsonLd />
        <AnimatedDots />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
        
        {/* Chatling AI Chatbot Integration */}
        <Script id="chatling-config" strategy="afterInteractive">
          {`window.chtlConfig = { chatbotId: "7646939173" }`}
        </Script>
        <Script
          async
          data-id="7646939173"
          id="chtl-script"
          src="https://chatling.ai/js/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
