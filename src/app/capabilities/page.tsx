import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { Globe, BookOpen, Smartphone, Cloud, Lock, Brain, ArrowRight, ChevronDown, HelpCircle, Layers, ShieldCheck, Cpu, Code2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Capabilities",
  description:
    "Full-spectrum engineering services by Lexci — web development, app development, LMS systems, cloud architecture, cloud security, and AI integration. From concept to deployment.",
  keywords: [
    "web development services",
    "app development India",
    "LMS systems",
    "cloud architecture",
    "cloud security services",
    "AI integration",
    "engineering services Bangalore",
    "full-stack development",
    "cross-platform apps",
    "Lexci engineering",
  ],
  openGraph: {
    title: "Lexci Engineering Capabilities",
    description:
      "Full-spectrum engineering services designed for modern digital infrastructure. From concept to deployment — we build systems that scale.",
    url: "https://www.lexci.in/capabilities",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexci Engineering Capabilities",
    description:
      "Full-spectrum engineering services designed for modern digital infrastructure.",
  },
  alternates: {
    canonical: "https://www.lexci.in/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* HERO with 3D Element */}
      <section className="pt-36 pb-24 overflow-hidden relative">
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-gradient-pulse" />
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <FadeIn>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                  <span className="text-[11px] font-medium tracking-[0.2em] text-white/40">ENGINEERING</span>
                </div>
                <h1 className="hero-title font-semibold tracking-tight mb-5 max-w-lg">
                  Engineering <br /><span className="text-transparent text-gradient-white">Capabilities</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="lead-subtitle text-white/50 max-w-md mb-8 font-light">
                  Full-spectrum engineering services designed for modern digital infrastructure. From concept to deployment — we engineer distributed, fault-tolerant systems that scale securely to millions of users worldwide.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-6 text-[11px] font-medium tracking-[0.15em] text-white/40 mb-8">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> DESIGN</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> DEVELOP</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> DEPLOY</span>
                </div>
                <Link href="/contact" className="bg-white text-black px-6 py-3 text-sm font-medium rounded-full inline-flex items-center gap-2 group hover:bg-white/90 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="hidden lg:flex justify-center items-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.06] to-purple-500/[0.06] rounded-full blur-[80px] scale-90 pointer-events-none" />
                <img
                  src="https://static.wixstatic.com/media/11062b_3be7f4cbca03445db9529f685cb65ba2f000.png"
                  alt="Engineering 3D Element"
                  className="w-[360px] h-auto object-contain animate-float drop-shadow-[0_0_50px_rgba(100,100,255,0.2)] relative z-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="shimmer-line mt-8" />
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden" aria-label="Core Engineering Domains">
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-purple-600/[0.03] rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <FadeIn>
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-3 block uppercase">Specialized Solutions</span>
              <h2 className="section-title font-semibold tracking-tight mb-4">Enterprise Engineering Domains</h2>
              <p className="lead-subtitle text-white/40 font-light">
                We combine modern application architectures, cybersecurity hardening, and cloud-native standards to build digital products that endure.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Web Development",
                desc: "High-performance web applications built on Next.js, React, and TypeScript. We engineer sub-second page loads, accessible responsive interfaces, and robust server-side rendering pipelines optimized for search crawlers and conversion.",
                accent: "from-blue-500/20 to-blue-500/0",
                iconColor: "text-blue-400"
              },
              {
                icon: BookOpen,
                title: "LMS Systems",
                desc: "Enterprise learning management systems featuring real-time video streaming, automated grading, cohort progress analytics, and interactive assessment modules designed to support hundreds of thousands of concurrent learners.",
                accent: "from-emerald-500/20 to-emerald-500/0",
                iconColor: "text-emerald-400"
              },
              {
                icon: Smartphone,
                title: "App Development",
                desc: "Cross-platform mobile applications for iOS and Android powered by Flutter and React Native. Engineered for native 60fps fluidity, biometric authentication, offline synchronization, and frictionless app-store deployment.",
                accent: "from-orange-500/20 to-orange-500/0",
                iconColor: "text-orange-400"
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                desc: "Scalable distributed system topologies engineered on AWS, GCP, and Azure. We design serverless event streams, Kubernetes microservices clusters, and automated database sharding to deliver resilient 99.99% uptime guarantees.",
                accent: "from-cyan-500/20 to-cyan-500/0",
                iconColor: "text-cyan-400"
              },
              {
                icon: Lock,
                title: "Cloud Security",
                desc: "Comprehensive zero-trust network segregation, automated posture management (CSPM), end-to-end cryptographic encryption, and continuous compliance enforcement aligned with ISO 27001, SOC 2, and DPDP frameworks.",
                accent: "from-red-500/20 to-red-500/0",
                iconColor: "text-red-400"
              },
              {
                icon: Brain,
                title: "AI Integration",
                desc: "Custom large language model fine-tuning, retrieval-augmented generation (RAG) vector pipelines, and autonomous workflow automation that embed intelligent contextual reasoning directly into your existing business software.",
                accent: "from-purple-500/20 to-purple-500/0",
                iconColor: "text-purple-400"
              }
            ].map((cap, i) => (
              <FadeIn delay={i * 0.06} key={i}>
                <div className="premium-card p-8 h-full group cursor-default flex flex-col justify-between">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${cap.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.15]">
                      <cap.icon className={`w-5 h-5 transition-colors duration-500 ${cap.iconColor}`} />
                    </div>
                    <h3 className="card-title font-semibold text-white mb-3">{cap.title}</h3>
                    <p className="body-text text-white/50 font-light">{cap.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE METHODOLOGY */}
      <section className="py-24 bg-black relative border-t border-white/[0.06]" aria-label="Our Engineering Lifecycle">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-3 block uppercase">Our Methodology</span>
              <h2 className="section-title font-semibold tracking-tight mb-5">
                The Engineering Lifecycle
              </h2>
              <p className="lead-subtitle text-white/40 font-light">
                From initial architecture discovery to continuous edge deployment, our delivery model pairs relentless technical rigor with transparent milestone velocity.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Layers,
                title: "Threat-First Discovery",
                desc: "We analyze technical constraints, user workflows, and attack surfaces to architect scalable blueprints with baked-in zero-trust security from line one."
              },
              {
                step: "02",
                icon: Code2,
                title: "Full-Stack Development",
                desc: "Agile two-week sprints deliver modular, fully typed microservices and fluid user interfaces, backed by continuous integration and peer code reviews."
              },
              {
                step: "03",
                icon: ShieldCheck,
                title: "Automated Verification",
                desc: "Every pull request undergoes automated unit testing, end-to-end integration runs, and static/dynamic application security screening (SAST/DAST)."
              },
              {
                step: "04",
                icon: Cpu,
                title: "Global Edge Orchestration",
                desc: "Containerized deployment across multi-region edge nodes with real-time telemetry, automated database backups, and 24/7 reliability overwatch."
              }
            ].map((method, idx) => (
              <FadeIn delay={idx * 0.08} key={idx}>
                <div className="premium-card p-8 h-full flex flex-col justify-between group">
                  <div>
                    <div className="text-xs font-mono font-semibold tracking-widest text-blue-400 mb-4">{method.step}</div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                      <method.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="card-title font-semibold text-white mb-2">{method.title}</h3>
                    <p className="body-text text-white/40 font-light">{method.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 md:py-32 bg-black relative border-t border-white/[0.06]" aria-label="Capabilities FAQ">
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs uppercase tracking-widest mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="section-title font-semibold tracking-tight mb-5">
                Engineering &amp; Engagement Questions
              </h2>
              <p className="lead-subtitle text-white/40 font-light">
                Everything you need to know about our technical standards, engagement models, project timelines, and code ownership.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                question: "What technology stack and frameworks does Lexci build on?",
                answer: "We engineer systems using state-of-the-art, proven enterprise stacks. For web frontends and APIs, we specialize in Next.js, React, Node.js, and TypeScript. For mobile platforms, we leverage Flutter and React Native. On the infrastructure layer, we build cloud-agnostic architectures using Docker, Kubernetes, AWS, Google Cloud, and Terraform. For intelligent AI features, we utilize Python, PyTorch, LangChain, and high-performance vector databases like Pinecone and Qdrant."
              },
              {
                question: "How does Lexci integrate security into standard software engineering projects?",
                answer: "Rather than treating cybersecurity as a post-launch audit checklist, we adhere strictly to 'Security by Design'. Every project begins with an architectural threat model. We implement mandatory static code analysis (SAST), automated dependency vulnerability scanning, zero-trust token authentication (OAuth 2.0 / JWT), encrypted data stores, and continuous pen-testing throughout development sprints to guarantee enterprise-grade protection."
              },
              {
                question: "What is the typical timeline and engagement model for custom development?",
                answer: "Timelines depend on application scope and complexity. Rapid MVP applications and targeted security assessments typically require 4 to 8 weeks, while full-scale distributed enterprise platforms and LMS ecosystems span 3 to 6 months. We offer flexible collaboration models, including milestone-based fixed deliverable contracts and dedicated long-term engineering pod augmentations."
              },
              {
                question: "Do clients retain complete ownership of all created source code and IP?",
                answer: "Yes, 100%. All custom source code, database architectures, documentation, and design assets engineered during your engagement are the sole proprietary property of your organization upon milestone completion. We provide clean Git repositories, comprehensive developer documentation, and seamless handover sessions."
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
      <section className="py-24 bg-black relative border-t border-white/[0.06] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="section-title font-semibold tracking-tight mb-6">
              Ready to Engineer Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Next Breakthrough?</span>
            </h2>
            <p className="lead-subtitle text-white/40 font-light mb-10 max-w-xl mx-auto">
              Connect with our technical architects to scope your architecture, schedule a feasibility review, or request a custom proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-black px-8 py-4 text-sm font-medium rounded-full inline-flex items-center gap-2 group hover:bg-white/90 transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/clients" className="border border-white/20 text-white px-8 py-4 text-sm font-medium rounded-full hover:bg-white/[0.04] hover:border-white/30 transition-all">
                View Case Studies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
