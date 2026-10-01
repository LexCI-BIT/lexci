import type { Metadata } from "next";
import CyberShield from "@/components/CyberShield";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { Shield, Eye, CloudCog, Siren, ArrowRight, ChevronDown, HelpCircle, Lock, Cpu, Server, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Platform",
  description:
    "Lexci Cybersecurity — autonomous cyber defense with threat intelligence, zero-trust architecture, cloud security, and real-time incident response. Self-evolving protection for enterprise infrastructure.",
  keywords: [
    "cybersecurity platform",
    "autonomous cyber defense",
    "threat intelligence",
    "zero trust security",
    "cloud security platform",
    "incident response",
    "real-time threat detection",
    "enterprise cybersecurity",
    "AI security",
    "Lexci cybersecurity",
  ],
  openGraph: {
    title: "Lexci Cybersecurity — Autonomous Cyber Defense",
    description:
      "A self-evolving security system that continuously monitors, detects, and neutralizes threats in real-time.",
    url: "https://www.lexci.in/platform/cybersecurity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexci Cybersecurity — Autonomous Cyber Defense",
    description:
      "A self-evolving security system that continuously monitors, detects, and neutralizes threats in real-time.",
  },
  alternates: {
    canonical: "https://www.lexci.in/platform/cybersecurity",
  },
};

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift" />
        
        <div className="absolute top-[12%] right-0 w-[550px] h-[550px] opacity-80 hidden lg:block">
          <CyberShield />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/40 uppercase">CYBERSECURITY PLATFORM</span>
            </div>
            <h1 className="hero-title font-semibold tracking-tight mb-6 max-w-3xl">
              Autonomous <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Cyber Defense</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead-subtitle text-white/50 max-w-xl mb-10 font-light">
              A self-evolving security ecosystem that continuously inspects, detects, and neutralizes sophisticated cyber threats with sub-millisecond autonomous response.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="aiera-button-solid inline-flex items-center gap-2 px-7 py-3.5 text-sm group">
                Secure Your Environment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/capabilities" className="aiera-button inline-flex items-center gap-2 px-7 py-3.5 text-sm">
                Engineering Capabilities
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="shimmer-line mt-28" />
      </section>

      {/* CORE MODULES */}
      <section className="py-28 md:py-36 bg-black" aria-label="Core Defense Modules">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-4 block uppercase">CORE MODULES</span>
              <h2 className="section-title font-semibold tracking-tight mb-4">Defense Architecture</h2>
              <p className="lead-subtitle text-white/40 font-light">
                Safeguard distributed enterprise digital assets against zero-day exploits, ransomware, and unauthorized network intrusion through autonomous intelligence.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Eye,
                title: "Threat Intelligence",
                desc: "Predictive neural networks continuously ingest telemetry across endpoints, identity layers, and API transactions to intercept polymorphic payloads and emerging attack vectors before vulnerabilities can be exploited."
              },
              {
                icon: Shield,
                title: "Zero Trust Architecture",
                desc: "Strict cryptographic verification enforces micro-segmentation across internal microservices. Every user, device, and API request is continuously authenticated under least-privilege access rules to prevent lateral movement."
              },
              {
                icon: CloudCog,
                title: "Cloud Security & CSPM",
                desc: "Real-time posture management across AWS, Azure, Google Cloud, and private Kubernetes clusters. Automated detection flags identity misconfigurations, exposed storage buckets, and unencrypted ingress tunnels."
              },
              {
                icon: Siren,
                title: "Automated Incident Containment",
                desc: "Autonomous mitigation engines isolate compromised nodes, revoke temporary cryptographic session tokens, and route traffic to deception honeypots within milliseconds—halting active breaches without manual human triage."
              }
            ].map((mod, i) => (
              <FadeIn delay={i * 0.08} key={i}>
                <div className="premium-card p-8 md:p-9 h-full group flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-blue-500/20 group-hover:border-blue-500/30">
                      <mod.icon className="w-5 h-5 text-blue-400 transition-colors duration-500" />
                    </div>
                    <h3 className="card-title font-semibold text-white mb-3">{mod.title}</h3>
                    <p className="body-text text-white/45 font-light">{mod.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className="shimmer-line mt-28 md:mt-36" />
      </section>

      {/* ARCHITECTURE DEEP DIVE */}
      <section className="py-24 bg-black relative border-t border-white/[0.06]" aria-label="Technical Defense Capabilities">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-3 block uppercase">Technical Depth</span>
              <h2 className="section-title font-semibold tracking-tight mb-5">
                Engineered for High-Assurance Environments
              </h2>
              <p className="lead-subtitle text-white/40 font-light">
                Modern enterprise threats outpace manual intervention. Our defense infrastructure operates with mathematical precision at machine speed.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Network,
                title: "Micro-Segmentation Fabric",
                desc: "Perimeter defenses are no longer enough. Lexci encapsulates each microservice within an isolated software-defined perimeter, cryptographically signing inter-service communication via mutual TLS (mTLS)."
              },
              {
                icon: Cpu,
                title: "Sub-Millisecond Heuristics",
                desc: "Lightweight eBPF kernel agents inspect packet headers and system calls with microscopic compute overhead (&lt;0.5% CPU), identifying anomaly signatures without injecting network latency."
              },
              {
                icon: Lock,
                title: "Compliance & Audit Readiness",
                desc: "Immutable append-only audit ledgers log all privilege escalations and policy changes, producing instant compliance validation reports for ISO/IEC 27001, SOC 2 Type II, and India's DPDP Act."
              }
            ].map((pillar, idx) => (
              <FadeIn delay={idx * 0.1} key={idx}>
                <div className="premium-card p-8 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                      <pillar.icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="card-title font-semibold text-white mb-3">{pillar.title}</h3>
                    <p className="body-text text-white/45 font-light">{pillar.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM FAQ */}
      <section className="py-24 md:py-32 bg-black relative border-t border-white/[0.06]" aria-label="Cybersecurity Platform FAQ">
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs uppercase tracking-widest mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Platform FAQ</span>
              </div>
              <h2 className="section-title font-semibold tracking-tight mb-5">
                Cybersecurity Architecture Questions
              </h2>
              <p className="lead-subtitle text-white/40 font-light">
                Answers to essential technical questions about our threat intelligence pipeline, runtime performance impact, and integration methods.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                question: "How does Lexci intercept zero-day vulnerabilities without signature files?",
                answer: "Traditional antivirus tools search for known hashes and static malware signatures. Lexci's InMind AI models focus on behavioural telemetry and runtime invariants. By analyzing deviations in memory execution, unexpected child process spawning, and uncharacteristic outbound socket connections, the platform detects and halts zero-day attacks even if the threat has never been documented before."
              },
              {
                question: "What overhead or network latency does the Lexci security agent introduce?",
                answer: "Our sensor architecture is built on Linux eBPF (Extended Berkeley Packet Filter) technology, executing directly within kernel space without context switching to user space. This ensures non-blocking packet inspection with less than 0.5% CPU utilization and sub-millisecond routing latency, making it ideal for high-throughput fintech and SaaS applications."
              },
              {
                question: "How does Lexci integrate with existing SIEM, SOAR, and SOC platforms?",
                answer: "Lexci provides bi-directional API integrations, native Splunk/Datadog forwarders, and real-time webhook streams. When a critical threat is mitigated, structured JSON alerts containing full forensic timeline replays are automatically pushed to your security operations center (SOC) or incident management software."
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

      {/* MARQUEE */}
      <section className="py-16 bg-black overflow-hidden relative border-t border-white/[0.06]">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-12">
          {["Fully integrated with AI Cloud", "Secure AI Infrastructure", "Real-time Threat Analysis", "Zero-Trust Architecture"].map((text, i) => (
            <span key={i} className={`text-2xl md:text-3xl font-medium tracking-wide px-6 ${i % 2 === 0 ? 'text-white/60' : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'}`}>
              • {text}
            </span>
          ))}
          {["Fully integrated with AI Cloud", "Secure AI Infrastructure", "Real-time Threat Analysis", "Zero-Trust Architecture"].map((text, i) => (
            <span key={`d-${i}`} className={`text-2xl md:text-3xl font-medium tracking-wide px-6 ${i % 2 === 0 ? 'text-white/60' : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'}`}>
              • {text}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
