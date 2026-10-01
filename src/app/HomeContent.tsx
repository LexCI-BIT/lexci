"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Shield, Brain, Globe, BookOpen, Smartphone, Cloud, Lock, Zap, ChevronDown, HelpCircle } from "lucide-react";
import CyberShield from "@/components/CyberShield";
import CyberBrain from "@/components/CyberBrain";
export default function HomeContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Animate progress circle on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(91);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const menuLinks = ["Home", "About Us", "Services", "Projects", "Contact"];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white" style={{ fontFamily: "'Geist', sans-serif" }}>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative min-h-screen flex flex-col" aria-label="Hero">

        {/* Video Background — no overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "37% center" }}
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4" type="video/mp4" />
        </video>

        {/* ── NAVBAR ── */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-[120px] py-5" aria-label="Primary navigation">
          {/* Left: Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/10 transition-all"
            aria-label="Open navigation menu"
          >
            <div className="flex flex-col gap-[4px]">
              <span className="block w-7 h-[2px] bg-white" />
              <span className="block w-7 h-[2px] bg-white" />
            </div>
            <span className="text-white text-sm font-medium uppercase tracking-widest">Menu</span>
          </button>

          {/* Center: Logo */}
          <span className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider text-white">
            LEXCI
          </span>

          {/* Right: Nav pills (desktop) */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link href="/platform/cybersecurity" className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:text-white hover:bg-white/10 transition-all">
              Platform
            </Link>
            <Link href="/capabilities" className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:text-white hover:bg-white/10 transition-all">
              Capabilities
            </Link>
            <Link href="/clients" className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:text-white hover:bg-white/10 transition-all">
              Clients
            </Link>
            <Link href="/about" className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:text-white hover:bg-white/10 transition-all">
              About
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-black text-sm font-medium uppercase bg-gradient-to-r from-[hsl(220,70%,78%)] to-[hsl(40,80%,82%)] hover:opacity-90 transition-all"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* ── FULL-SCREEN MENU OVERLAY ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-white flex flex-col"
              initial={{ clipPath: "circle(0% at 80px 40px)" }}
              animate={{ clipPath: "circle(150% at 80px 40px)" }}
              exit={{ clipPath: "circle(0% at 80px 40px)" }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Menu Navbar */}
              <div className="flex items-center justify-between px-6 md:px-[120px] py-5">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/30 hover:bg-black/5 transition-all"
                  aria-label="Close navigation menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-black">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-black text-sm font-medium uppercase tracking-widest">Close</span>
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-wider text-black">
                  LEXCI
                </span>
              </div>

              {/* Menu Links */}
              <div className="flex-1 flex flex-col justify-center px-6 md:px-[120px]">
                {[
                  {
                    label: "Platform", href: "#platform", children: [
                      { label: "Cybersecurity", href: "/platform/cybersecurity" },
                      { label: "InMind AI", href: "https://in-mind-app.vercel.app/" },
                    ]
                  },
                  { label: "Services", href: "#services" },
                  { label: "Capabilities", href: "/capabilities" },
                  { label: "Clients", href: "/clients" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item, i) => (
                  <div key={item.label}>
                    <motion.a
                      href={item.href}
                      onClick={() => !item.children && setMenuOpen(false)}
                      className="group flex items-center justify-between py-4 md:py-5 border-b border-black/10 transition-all"
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.08,
                        duration: 0.6,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                    >
                      <span
                        className="text-black font-light -tracking-[0.06em] transition-transform group-hover:translate-x-1"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                      >
                        {item.label}
                      </span>
                      <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-black/40 transition-all group-hover:translate-x-0.5 group-hover:text-black" />
                    </motion.a>
                    {item.children && item.children.map((child, ci) => (
                      <motion.a
                        key={child.label}
                        href={child.href}
                        {...(child.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-3 md:py-3.5 pl-6 md:pl-10 border-b border-black/5 transition-all"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15 + i * 0.08 + (ci + 1) * 0.06,
                          duration: 0.6,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                      >
                        <span
                          className="text-black/60 font-light -tracking-[0.04em] transition-all group-hover:translate-x-1 group-hover:text-black"
                          style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)" }}
                        >
                          {child.label}
                        </span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black/20 transition-all group-hover:translate-x-0.5 group-hover:text-black/50" />
                      </motion.a>
                    ))}
                  </div>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="flex items-center justify-between px-6 md:px-[120px] py-6">
                <span className="text-black/40 text-xs tracking-[0.2em] uppercase">Lexci Platform</span>
                <span className="text-black/40 text-xs tracking-[0.2em] uppercase">© 2026</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-start pt-6 px-6 pb-2 md:justify-end md:pt-0 md:px-10 md:pb-16">
          {/* Subheading Row */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-white">AI-Native Platform</span>
          </div>

          {/* Heading + Stats */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            {/* Heading */}
            <div className="max-w-2xl">
              <h1 className="hero-title mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <span className="block font-light">AI-Powered Security</span>
                <span className="block font-light">Infrastructure for a</span>
                <span className="block mt-2" style={{ fontFamily: "'Gilda Display', serif" }}>Scalable World</span>
              </h1>
              <p className="lead-subtitle text-white/50 font-light max-w-lg mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                A unified platform combining cybersecurity, artificial intelligence, and engineering systems to build, protect, and scale digital ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link href="#platform" className="bg-white text-black px-7 py-3.5 text-sm font-medium rounded-full inline-flex items-center gap-2 group hover:bg-white/90 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                  Explore Platform
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/contact" className="border border-white/25 text-white px-7 py-3.5 text-sm font-medium rounded-full hover:bg-white/[0.06] hover:border-white/40 transition-all">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Stats / Progress Circle */}
            <div className="mt-8 md:mt-0 lg:max-w-xs lg:pb-4">
              <div className="flex items-start gap-5">
                <svg width="120" height="120" viewBox="0 0 120 120" className="shrink-0" aria-hidden="true">
                  <circle
                    cx="60" cy="60" r="54"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="60" cy="60" r="54"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />
                  <text x="60" y="60" textAnchor="middle" dominantBaseline="central" className="fill-white text-lg font-medium" style={{ fontFamily: "'Geist', sans-serif" }}>
                    91%
                  </text>
                </svg>
                <p className="text-white/70 text-sm leading-relaxed pt-1">
                  Average increase in digital infrastructure resilience by unifying cybersecurity, AI, and engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── MARQUEE BAR ── */}
        <div className="relative z-10 px-6 md:px-10 pb-6" aria-label="Client logos">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white">Our Clients</span>
            <span className="hidden md:block text-xs font-medium tracking-[0.2em] uppercase text-white">Trusted by leading organizations</span>
          </div>
          <div className="border-t border-white/10 overflow-hidden py-5">
            <div className="animate-marquee-evr whitespace-nowrap flex items-center">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-16 mr-16">
                  {["Onyx Edutech", "Onyx EduVoyage", "Camplyft", "Bidryde", "Evacodes", "Smart Clues", "NexGenTechno Consulting"].map((brand) => (
                    <span key={`${setIdx}-${brand}`} className="text-white/50 text-lg font-medium tracking-wide">
                      {brand}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REST OF PAGE (Poppins) ═══════════ */}
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>

        {/* STATS */}
        <section className="py-14 bg-black/50 border-y border-white/[0.04]" aria-label="Key statistics">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "99.9%", label: "Uptime SLA" },
                { value: "< 5ms", label: "Threat Response" },
                { value: "50+", label: "Enterprise Clients" },
                { value: "24/7", label: "Active Monitoring" },
              ].map((stat, i) => (
                <FadeIn delay={i * 0.06} key={i}>
                  <div className="group cursor-default">
                    <div className="text-2xl md:text-3xl font-semibold text-white mb-1 tracking-tight transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">{stat.value}</div>
                    <div className="text-[11px] font-light text-white/30 tracking-[0.15em]">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section id="platform" className="py-24 md:py-32 relative z-10 bg-black" aria-label="Core platform products">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <FadeIn>
              <div className="mb-14 md:mb-16 max-w-xl">
                <span className="text-[11px] font-medium tracking-[0.2em] text-white/30 mb-4 block">CORE PRODUCTS</span>
                <h2 className="section-title font-semibold tracking-tight mb-4">
                  The Lexci <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Platform</span>
                </h2>
                <p className="lead-subtitle text-white/40 font-light">
                  Two integrated systems. One intelligent infrastructure designed to protect, analyze, and scale your digital operations.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-5">
              <FadeIn delay={0.1}>
                <div className="premium-card p-8 md:p-10 h-full flex flex-col group">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/[0.05] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-[11px] font-medium tracking-[0.15em] text-white/30">SECURITY</span>
                    </div>
                    <h3 className="card-title font-semibold mb-3 text-white">Cybersecurity</h3>
                    <p className="body-text text-white/40 mb-6 font-light max-w-sm">
                      Autonomous threat detection, zero-trust architecture, and real-time defense systems for enterprise scale.
                    </p>
                  </div>
                  <div className="w-full h-32 md:h-40 relative my-2 flex justify-center items-center transition-all duration-700 group-hover:scale-[1.03]">
                    <div className="w-full h-full absolute flex items-center justify-center pointer-events-none transform scale-[0.8] sm:scale-90">
                      <CyberShield />
                    </div>
                  </div>
                  <div className="relative z-10 pt-5 border-t border-white/[0.05]">
                    <Link href="/platform/cybersecurity" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-all group/link">
                      View Platform <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="premium-card p-8 md:p-10 h-full flex flex-col group">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/[0.05] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/15 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-[11px] font-medium tracking-[0.15em] text-white/30">INTELLIGENCE</span>
                    </div>
                    <h3 className="card-title font-semibold mb-3 text-white">InMind AI</h3>
                    <p className="body-text text-white/40 mb-6 font-light max-w-sm">
                      Behavioral intelligence and mental wellness powered by adaptive AI systems for modern organizations.
                    </p>
                  </div>
                  <div className="w-full h-32 md:h-40 relative my-2 flex justify-center items-center transition-all duration-700 group-hover:-translate-y-1.5">
                    <div className="w-full h-full absolute flex items-center justify-center pointer-events-none transform scale-[0.8] sm:scale-90">
                      <CyberBrain />
                    </div>
                  </div>
                  <div className="relative z-10 pt-5 border-t border-white/[0.05]">
                    <a href="https://in-mind-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-all group/link">
                      Explore InMind <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="shimmer-line mt-24 md:mt-32" />
        </section>

        {/* CAPABILITIES */}
        <section id="services" className="py-24 md:py-32 relative z-10 bg-black overflow-hidden" aria-label="Engineering services">
          <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-16 md:mb-20">
              <FadeIn>
                <div className="max-w-xl">
                  <span className="text-[11px] font-medium tracking-[0.2em] text-white/30 mb-4 block">SERVICES</span>
                  <h2 className="section-title font-semibold tracking-tight mb-4">
                    Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Capabilities</span>
                  </h2>
                  <p className="lead-subtitle text-white/40 font-light mb-6">
                    Full-spectrum engineering services designed for modern digital infrastructure.
                  </p>
                  <div className="flex items-center gap-6 text-[11px] font-medium tracking-[0.15em] text-white/25">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" /> DESIGN</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400/60" /> DEVELOP</span>
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" /> DEPLOY</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="hidden lg:flex justify-center items-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.06] to-purple-500/[0.06] rounded-full blur-[80px] scale-75 pointer-events-none" />
                  <img src="https://static.wixstatic.com/media/11062b_3be7f4cbca03445db9529f685cb65ba2f000.png" alt="3D engineering element representing Lexci platform capabilities" className="w-[320px] h-auto object-contain animate-float drop-shadow-[0_0_40px_rgba(100,100,255,0.2)] relative z-10" />
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Globe, title: "Web Development", desc: "Scalable, high-performance web platforms.", accent: "from-blue-500/20 to-blue-500/0", iconColor: "text-blue-400/70 group-hover:text-blue-400" },
                { icon: BookOpen, title: "LMS Systems", desc: "Intelligent education platforms with analytics.", accent: "from-emerald-500/20 to-emerald-500/0", iconColor: "text-emerald-400/70 group-hover:text-emerald-400" },
                { icon: Smartphone, title: "App Development", desc: "Cross-platform apps for performance.", accent: "from-orange-500/20 to-orange-500/0", iconColor: "text-orange-400/70 group-hover:text-orange-400" },
                { icon: Cloud, title: "Cloud Development", desc: "Secure cloud-native system design.", accent: "from-cyan-500/20 to-cyan-500/0", iconColor: "text-cyan-400/70 group-hover:text-cyan-400" },
                { icon: Lock, title: "Cloud Security", desc: "Protection for distributed cloud environments.", accent: "from-red-500/20 to-red-500/0", iconColor: "text-red-400/70 group-hover:text-red-400" },
                { icon: Brain, title: "AI Integration", desc: "Custom AI deployment and automation.", accent: "from-purple-500/20 to-purple-500/0", iconColor: "text-purple-400/70 group-hover:text-purple-400" }
              ].map((cap, i) => (
                <FadeIn delay={i * 0.05} key={i}>
                  <div className="premium-card p-6 h-full group cursor-default">
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${cap.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                    <div className="relative z-10">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.12]">
                        <cap.icon className={`w-3.5 h-3.5 transition-colors duration-500 ${cap.iconColor}`} />
                      </div>
                      <h3 className="card-title font-semibold text-white mb-1.5">{cap.title}</h3>
                      <p className="body-text text-white/40 font-light">{cap.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-12 text-center">
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group px-6 py-3 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02]"
                >
                  Explore All Engineering Capabilities &amp; System Architectures
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="shimmer-line mt-24 md:mt-32" />
        </section>

        {/* CLIENTS / TRUST LAYER */}
        <section className="py-20 md:py-24 bg-black overflow-hidden relative" aria-label="Trusted clients">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">Trust Layer</span>
              </div>
              <h2 className="section-title font-semibold tracking-tight text-white mb-3">
                Powering Modern Brands &amp; Enterprises
              </h2>
              <p className="lead-subtitle text-white/60 font-light max-w-xl mx-auto">
                Trusted by digital-first organizations and forward-thinking enterprises worldwide.
              </p>
            </div>
          </FadeIn>
          <div className="relative w-full flex overflow-x-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee whitespace-nowrap flex items-center space-x-6 md:space-x-8 px-4">
              {[
                "Onyx Edutech",
                "Onyx EduVoyage",
                "Camplyft",
                "Bidryde",
                "Evacodes",
                "Smart Clues",
                "NexGenTechno Consulting",
              ].map((client, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-default shadow-sm"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                  </span>
                  <span className="text-base md:text-lg font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
                    {client}
                  </span>
                </div>
              ))}
              {[
                "Onyx Edutech",
                "Onyx EduVoyage",
                "Camplyft",
                "Bidryde",
                "Evacodes",
                "Smart Clues",
                "NexGenTechno Consulting",
              ].map((client, i) => (
                <div
                  key={`dup-${i}`}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-default shadow-sm"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
                  </span>
                  <span className="text-base md:text-lg font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Link
                href="/clients"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group px-6 py-3 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02]"
              >
                View Detailed Client Case Studies &amp; Success Stories
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section className="py-24 md:py-32 bg-black relative border-t border-white/[0.06]" aria-label="Frequently Asked Questions">
          <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
            <FadeIn>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs uppercase tracking-widest mb-4">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="section-title font-semibold tracking-tight mb-5">
                  Everything You Need to Know About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">Lexci</span>
                </h2>
                <p className="lead-subtitle text-white/40 font-light">
                  Discover how our autonomous cybersecurity architecture, InMind AI platform, and full-stack engineering services safeguard and scale modern enterprise infrastructure.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {[
                {
                  question: "What is Lexci and how does our AI-powered security infrastructure work?",
                  answer: "Lexci is a specialized cybersecurity and intelligent systems engineering firm headquartered in Bangalore and Hyderabad, India. Our proprietary platform combines autonomous artificial intelligence (InMind AI) with zero-trust network architecture to defend modern enterprise infrastructure against sophisticated digital threats. Rather than relying on static firewall rules and outdated signature databases, Lexci operates dynamically by monitoring network telemetry, analyzing behavioral patterns, and executing automated containment protocols with sub-millisecond precision."
                },
                {
                  question: "How does InMind AI differ from conventional enterprise cybersecurity tools?",
                  answer: "Legacy cybersecurity software reacts only after a known attack signature is detected or manual intervention occurs, leaving systems vulnerable to zero-day vulnerabilities, polymorphism, and credential hijacking. Lexci's InMind AI functions as an autonomous behavioral neural layer. It continuously learns baseline organizational behavior across users, microservices, APIs, and data transactions. When abnormal activity or unauthorized lateral movement is detected, InMind AI instantly isolates compromised nodes and mitigates the threat before sensitive data can be accessed or exfiltrated."
                },
                {
                  question: "What custom engineering, web, and mobile app development services does Lexci provide?",
                  answer: "Beyond our security infrastructure platform, Lexci provides full-lifecycle engineering services for high-growth startups and global enterprises. Our engineering capabilities include high-throughput web application development, cross-platform mobile apps for iOS and Android, enterprise cloud architecture on AWS and Microsoft Azure, API design, microservices orchestration, and custom artificial intelligence pipelines. Every digital product engineered by Lexci is designed with built-in zero-trust security and high-concurrency performance from day one."
                },
                {
                  question: "Can Lexci integrate with existing cloud providers and legacy on-premise networks?",
                  answer: "Yes. Lexci is architected with a cloud-agnostic, modular structure that seamlessly integrates into diverse enterprise environments. Whether your systems are deployed across Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, hybrid cloud setups, or private on-premise data centers, Lexci connects via non-intrusive API gateways, containerized agents, and webhook feeds. Our deployment model ensures zero downtime during installation and requires no disruptive modifications to your existing production codebases."
                },
                {
                  question: "How does Lexci assist enterprises with data privacy and compliance standards?",
                  answer: "Data governance and compliance are central to Lexci's architecture. Our security framework is engineered to align with major international and domestic data protection regulations, including the Digital Personal Data Protection Act (DPDP India), General Data Protection Regulation (GDPR), ISO/IEC 27001, and SOC 2 Type II readiness. We incorporate end-to-end cryptographic encryption for data in transit and at rest, granular identity and access management (IAM), and automated, tamper-evident audit logging for regulatory reviews."
                },
                {
                  question: "How does Lexci ensure zero-trust architecture against ransomware and insider threats?",
                  answer: "Under a zero-trust model, no user, device, or internal service is implicitly trusted, regardless of whether the request originates from inside or outside the enterprise perimeter. Lexci enforces continuous authentication, micro-segmentation, and dynamic least-privilege access across all digital assets. In the event of an attempted ransomware attack or unauthorized insider access, strict perimeter boundaries isolate the affected component immediately, preventing horizontal lateral movement and protecting critical databases."
                },
                {
                  question: "How can our organization get started with an initial assessment or consultation?",
                  answer: "Starting with Lexci is streamlined and collaborative. You can initiate contact through our inquiry form or schedule a demonstration with our engineering team. We begin by reviewing your current infrastructure topology, threat profile, and technical objectives. From there, we deliver a targeted assessment along with a proposed implementation roadmap—ranging from rapid security penetration audits to custom software and cloud infrastructure development tailored to your timeline and scale."
                },
                {
                  question: "What is Lexci's methodology for proactive vulnerability testing and attack simulations?",
                  answer: "Lexci utilizes automated adversarial attack simulations and continuous penetration testing frameworks to test enterprise networks against real-world threat actor tactics. Instead of waiting for scheduled annual or quarterly audits, our platform continuously evaluates configuration integrity, exposed cryptographic endpoints, API vulnerabilities, and authentication bypass risks. Each automated assessment generates prioritized remediation guidelines and compliance proof to harden your perimeter against emerging cyber threats."
                },
                {
                  question: "How does Lexci handle distributed cloud infrastructure scalability and high concurrency?",
                  answer: "Our engineering architecture is developed from the ground up for massive horizontal concurrency, fault-tolerant reliability, and sub-millisecond response times. Leveraging distributed Kubernetes clusters, edge-computing nodes, and serverless compute pipelines across global regions, Lexci ensures that enterprise systems automatically scale computational capacity in direct response to traffic surges. We implement intelligent load distribution, automated database sharding, connection pooling, and multi-tier caching to maintain 99.99% operational availability under intense enterprise workloads."
                }
              ].map((faq, index) => (
                <FadeIn delay={index * 0.05} key={index}>
                  <details className="group border border-white/[0.08] hover:border-white/20 rounded-2xl bg-white/[0.02] p-6 transition-all duration-300">
                    <summary className="cursor-pointer list-none flex items-center justify-between text-left text-white/90 group-hover:text-white transition-colors">
                      <span className="card-title font-medium pr-4">{faq.question}</span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-white/50 group-open:rotate-180 transition-transform duration-300 group-hover:border-white/25">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="body-text pt-4 text-white/50 font-light border-t border-white/[0.04] mt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-black relative overflow-hidden" aria-label="Call to action">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/[0.06] to-purple-600/[0.06] rounded-full blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <FadeIn>
              <div className="text-center max-w-xl mx-auto">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-5 h-5 text-white/50" />
                </div>
                <h2 className="section-title font-semibold tracking-tight mb-4">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">get started?</span>
                </h2>
                <p className="lead-subtitle text-white/40 font-light mb-8">
                  Join the next generation of enterprises building on secure, intelligent infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/contact" className="bg-white text-black px-7 py-3.5 text-sm font-medium rounded-full inline-flex items-center gap-2 group hover:bg-white/90 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/contact" className="border border-white/20 text-white px-7 py-3.5 text-sm font-medium rounded-full hover:bg-white/[0.04] hover:border-white/30 transition-all">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
