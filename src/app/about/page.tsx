import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, Shield, Brain, Cpu, Globe2, Activity, Zap, ChevronDown, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lexci — an AI-native platform built on three core pillars: cybersecurity, intelligent systems, and precision engineering. Offices in Bangalore and Hyderabad, India.",
  keywords: [
    "about Lexci",
    "AI cybersecurity company",
    "cybersecurity company India",
    "intelligent systems",
    "engineering services Bangalore",
    "Hyderabad tech company",
    "zero trust architecture",
    "AI platform",
  ],
  openGraph: {
    title: "About Lexci — AI-Native Cybersecurity & Engineering",
    description:
      "Lexci engineers resilient ecosystems capable of anticipating threats and optimizing themselves. Built on cybersecurity, intelligent systems, and precision engineering.",
    url: "https://www.lexci.in/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lexci — AI-Native Cybersecurity & Engineering",
    description:
      "Lexci engineers resilient ecosystems capable of anticipating threats and optimizing themselves.",
  },
  alternates: {
    canonical: "https://www.lexci.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* CORE PILLARS OVERVIEW */}
      <section className="pt-40 pb-28 md:pt-52 md:pb-36 bg-black relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="mb-20 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-medium tracking-widest text-white/50 uppercase">About Us</span>
              </div>
              <h1 className="hero-title font-semibold tracking-tight mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">DNA &amp; Mission</span>
              </h1>
              <p className="lead-subtitle text-white/50 font-light">
                We don't just build software; we engineer resilient ecosystems capable of anticipating threats and optimizing themselves. Our interdisciplinary teams unite cryptographers, systems architects, and machine learning researchers to deliver uncompromised digital defense.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 1 */}
            <FadeIn delay={0.1}>
              <div className="premium-card p-10 h-full flex flex-col group hover:border-blue-500/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-blue-500/20 duration-500">
                  <Shield className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="card-title font-semibold text-white mb-4">Cybersecurity</h3>
                <p className="body-text text-white/50 font-light flex-grow">
                  A proprietary zero-trust architecture driven by machine learning that actively hunts, isolates, and neutralizes unprecedented network threats. We combine real-time threat intelligence feeds with continuous anomaly detection to safeguard critical database endpoints, internal microservice fabrics, and user identities against zero-day exploits, malicious payload injections, and credential stuffing attacks.
                </p>
              </div>
            </FadeIn>

            {/* Pillar 2 */}
            <FadeIn delay={0.2}>
              <div className="premium-card p-10 h-full flex flex-col group hover:border-purple-500/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-purple-500/20 duration-500">
                  <Brain className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="card-title font-semibold text-white mb-4">Intelligent Systems</h3>
                <p className="body-text text-white/50 font-light flex-grow">
                  Leveraging behavioral AI (InMind) to predict user interactions, automate complex workflows, and allocate computational resources dynamically. Our adaptive algorithms analyze telemetry data across distributed enterprise pipelines, forecasting traffic spikes and automatically adjusting server capacities to maintain optimal application responsiveness while optimizing operational cloud spend.
                </p>
              </div>
            </FadeIn>

            {/* Pillar 3 */}
            <FadeIn delay={0.3}>
              <div className="premium-card p-10 h-full flex flex-col group hover:border-emerald-500/20 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:bg-emerald-500/20 duration-500">
                  <Cpu className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="card-title font-semibold text-white mb-4">Engineering</h3>
                <p className="body-text text-white/50 font-light flex-grow">
                  Precision-built infrastructure designed for microscopic latency, hyper-scalability, and uncompromised uptime across distributed global networks. From cloud-native microservices and fault-tolerant event streams to cross-platform mobile ecosystems, our engineering practice implements rigorous code quality standards, automated unit testing, and continuous security verification at every deployment tier.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="shimmer-line mt-28 md:mt-36" />
      </section>

      {/* GLOBAL STATS OVERLAY */}
      <section className="py-24 bg-black relative border-b border-white/[0.06] overflow-hidden">
        {/* Hexagon Grid Backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="text-white">
            <path d="M0 50 L20 20 L50 20 L70 50 L50 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            <path d="M50 50 L70 20 L100 20 L120 50 L100 80 L70 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center md:items-start group">
                <Globe2 className="w-6 h-6 text-blue-400/50 mb-4 group-hover:text-blue-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">12+</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Global Data Centers</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center md:items-start group">
                <Activity className="w-6 h-6 text-purple-400/50 mb-4 group-hover:text-purple-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">&lt;2ms</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Average Latency</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center md:items-start group">
                <Zap className="w-6 h-6 text-yellow-400/50 mb-4 group-hover:text-yellow-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">350k</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Threats Mitigated Daily</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center md:items-start group">
                <Shield className="w-6 h-6 text-emerald-400/50 mb-4 group-hover:text-emerald-400 transition-colors" />
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">24/7</div>
                <div className="text-xs tracking-widest text-white/40 uppercase">Autonomous Overwatch</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 md:py-32 bg-black relative border-t border-white/[0.06]" aria-label="About Lexci FAQ">
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs uppercase tracking-widest mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="section-title font-semibold tracking-tight mb-5">
                Understanding Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">Mission &amp; Architecture</span>
              </h2>
              <p className="lead-subtitle text-white/40 font-light">
                Learn more about our core philosophy, engineering standards, autonomous intelligence models, and how we collaborate with ambitious enterprises worldwide.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                question: "What was the core inspiration behind founding Lexci?",
                answer: "Lexci was established to solve a fundamental fracture in modern enterprise technology: security is almost always an afterthought bolted onto completed software rather than an intrinsic architectural property. As distributed cloud architectures and automated cyber weapons evolved, traditional perimeter defenses proved insufficient. We founded Lexci to engineer self-defending, resilient digital infrastructure where autonomous AI defense, zero-trust cryptographic verification, and high-performance software engineering are synthesized into a single cohesive foundation."
              },
              {
                question: "Where are Lexci's primary engineering hubs located?",
                answer: "Lexci operates its core engineering and security research facilities out of India's leading technology centers: Bangalore (Karnataka) and Hyderabad (Telangana). Our distributed engineering labs bring together cryptographers, security analysts, distributed systems architects, and machine learning researchers dedicated to building next-generation digital defense and software infrastructure for international clients."
              },
              {
                question: "What is Lexci's philosophy regarding AI and autonomous defense?",
                answer: "We believe that modern cyber defense cannot succeed through human monitoring alone. With sophisticated polymorphic malware and automated botnets attacking at machine speeds, defense systems must counter threats at equal or greater velocity. Our InMind AI architecture focuses on continuous behavioral observation and self-evolving protection models that neutralize zero-day vectors within milliseconds, liberating human security operations teams to focus on high-level strategic risk governance."
              },
              {
                question: "How does Lexci maintain code quality, security audits, and delivery timelines?",
                answer: "Every system built or reviewed by Lexci undergoes our rigorous DevSecOps lifecycle. This includes automated static and dynamic application security testing (SAST/DAST), strict dependency vulnerability screening, comprehensive peer review cycles, and zero-trust container sandboxing. We balance rapid iterative delivery with enterprise-grade stability, providing our partners with verifiable milestones, complete documentation, and transparent progress at every phase."
              },
              {
                question: "How does Lexci collaborate with enterprises during long-term engagements?",
                answer: "We structure partnerships for scalability and continuous alignment. Whether serving as an autonomous cybersecurity overwatch partner or leading end-to-end digital engineering initiatives, we integrate directly with your internal leadership and engineering teams. We provide dedicated communication channels, weekly sprint reviews, real-time threat telemetry dashboards, and 24/7 incident response readiness to ensure resilient, uninterrupted operations."
              },
              {
                question: "What data residency and sovereign cloud options does Lexci provide for enterprises?",
                answer: "In compliance with the Digital Personal Data Protection (DPDP) Act in India and international sovereign data directives, Lexci offers strict geographic data residency guarantees. Organizations in highly regulated sectors—such as banking, financial technology, healthcare, and government governance—can deploy our infrastructure within dedicated Indian data center enclaves (Bangalore and Mumbai) or private cloud regions. All cryptographic keys remain solely under customer control via Hardware Security Modules (HSM)."
              },
              {
                question: "What is Lexci's philosophy regarding software development and security integration?",
                answer: "Our core engineering methodology adheres to the 'Security by Design' principle. Rather than treating security as an audit checklist after software is completed, every architectural decision—from database schemas and API boundaries to asynchronous queue workers—is evaluated through a threat modeling lens. This proactive posture minimizes technical debt, prevents runtime security flaws, and ensures enterprise applications withstand intense real-world cyber conditions."
              },
              {
                question: "What is Lexci's commitment to customer data privacy and intellectual property?",
                answer: "We enforce an uncompromising zero-trust policy for client data. Lexci never utilizes proprietary client datasets, source code, or telemetry logs to train shared public machine learning models. All custom codebases and intellectual property produced during client projects belong 100% to our clients, backed by enterprise-grade nondisclosure agreements, isolated virtual private cloud (VPC) testing clusters, and strict role-based access governance."
              },
              {
                question: "How does Lexci support zero-downtime migrations and high-availability enterprise SLAs?",
                answer: "Enterprise migrations require zero margin for operational error. Lexci implements automated blue-green deployments, canary testing releases, and real-time state synchronization across redundant multi-region cloud environments. Our distributed architectures are built with automated failover mechanisms, circuit breakers, and database replication pipelines that guarantee 99.99% uptime SLAs. During infrastructure upgrades or security patching cycles, end users experience uninterrupted service continuity without session drops or data degradation."
              },
              {
                question: "What certifications, security benchmarks, and compliance roadmaps does Lexci follow?",
                answer: "Our security practices adhere to international cybersecurity benchmarks established by the Center for Internet Security (CIS), NIST Cybersecurity Framework (CSF), and OWASP Top 10 Application Security Standards. We routinely conduct independent third-party penetration testing, maintain continuous vulnerability management workflows, and enforce strict cryptographic protocols across all communication layers. Lexci actively assists enterprise clients with achieving SOC 2, ISO 27001, and regional data governance certifications."
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

      {/* RESEARCH & INFRASTRUCTURE EXCELLENCE */}
      <section className="py-20 md:py-28 bg-black relative border-t border-white/[0.06]" aria-label="Research and Innovation">
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div>
              <span className="text-xs font-medium tracking-widest text-white/35 mb-4 block uppercase">Research & Innovation</span>
              <h2 className="section-title font-semibold tracking-tight mb-6">Continuous Defense and Systems Evolution</h2>
              <p className="body-text text-white/50 font-light mb-6">
                At Lexci, engineering excellence is not a static milestone; it is an active, continuous discipline. Our dedicated security research laboratories continuously simulate adversarial breach scenarios, evaluating emerging attack vectors including zero-day memory corruptions, supply-chain package tampering, and unauthorized AI model parameter extraction. By anticipating vulnerabilities before they are weaponized in the wild, our defensive algorithms evolve ahead of malicious campaigns.
              </p>
              <p className="body-text text-white/50 font-light mb-6">
                We believe that software resilience is intrinsically tied to transparent, verifiable architecture. Every codebase engineered within our facilities adheres to the highest global standards for concurrency, memory safety, and cryptographic integrity. Through close collaboration with enterprise partners, open-source maintainers, and international security standards committees, Lexci continues to pioneer high-assurance digital infrastructure for an increasingly connected world.
              </p>
              <p className="body-text text-white/50 font-light">
                Our laboratories maintain direct collaboration channels with academic institutions and global threat research collectives, analyzing real-time threat signatures across millions of daily network endpoints. By integrating continuous automated fuzz testing, formal code verification, and zero-knowledge verification frameworks into every product release pipeline, Lexci guarantees that mission-critical systems deployed by our enterprise clients remain impervious to modern cyber warfare tactics and unauthorized data intrusion.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 md:py-48 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="section-title font-semibold tracking-tight mb-8">
              Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">Future</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead-subtitle text-white/50 font-light mb-12 max-w-2xl mx-auto">
              We are constantly seeking brilliant engineers, cryptographers, and AI researchers to join our mission.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/capabilities" className="aiera-button inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center group">
                <span className="font-semibold">Explore Engineering</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/clients" className="aiera-button-solid inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center group">
                <span className="font-semibold">View Case Studies</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
