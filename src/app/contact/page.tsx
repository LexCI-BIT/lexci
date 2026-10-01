import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { Mail, MapPin, ChevronDown, HelpCircle, Clock, ShieldCheck, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Lexci engineering team for inquiries regarding AI-powered cybersecurity, intelligent systems, and engineering services. Offices in Bangalore and Hyderabad, India.",
  keywords: [
    "contact Lexci",
    "cybersecurity consultation",
    "AI platform demo",
    "Bangalore office",
    "Hyderabad office",
    "enterprise security inquiry",
    "Lexci engineering team",
  ],
  openGraph: {
    title: "Contact Lexci — Connect with Our Engineering Team",
    description:
      "Our engineering team is ready to discuss how our AI-native platform can secure and optimize your digital infrastructure.",
    url: "https://www.lexci.in/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lexci — Connect with Our Engineering Team",
    description:
      "Our engineering team is ready to discuss how our AI-native platform can secure and optimize your digital infrastructure.",
  },
  alternates: {
    canonical: "https://www.lexci.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        {/* Ambient Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift-reverse" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col items-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Get in Touch</span>
            </div>
            <h1 className="hero-title font-semibold tracking-tight mb-6">
              Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Lexci</span>
            </h1>
            <p className="lead-subtitle text-white/50 max-w-2xl mx-auto">
              Our engineering team is ready to discuss how our AI-native platform can secure and optimize your digital infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="pb-28 md:pb-36 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Form Side */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <div className="premium-card p-8 md:p-12 relative group">
                  <ContactForm />
                </div>
              </FadeIn>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 flex flex-col justify-between py-4">
              <div className="space-y-12">
                <FadeIn delay={0.3}>
                  <div className="space-y-4">
                    <h3 className="card-title font-medium tracking-tight">Direct Contact</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                          <Mail className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">Human Resources</p>
                          <a href="mailto:hr@lexci.in" className="text-white/70 hover:text-white transition-colors font-light">hr@lexci.in</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                          <Mail className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">General inquiries</p>
                          <a href="mailto:lexciinnovation@gmail.com" className="text-white/70 hover:text-white transition-colors font-light text-xs sm:text-sm">lexciinnovation@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="space-y-6">
                    <h3 className="card-title font-medium tracking-tight">Global Presence</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                          <MapPin className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">Bangalore Office</p>
                          <p className="text-white/70 font-light leading-relaxed">
                            HSR Layout,<br />
                            Bangalore, Karnataka<br />
                            India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                          <MapPin className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium tracking-widest text-white/30 uppercase mb-1">Hyderabad Office</p>
                          <p className="text-white/70 font-light leading-relaxed">
                            HITEC City,<br />
                            Hyderabad, Telangana 500081<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.5}>
                <div className="glass-panel-sharp p-8 mt-12 bg-white/[0.02]">
                  <p className="text-sm text-white/40 font-light leading-relaxed">
                    Looking for technical support or documentation? Visit our <Link href="/capabilities" className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-all">Engineering Resource Portal</Link>.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="py-24 bg-black relative border-t border-white/[0.06]" aria-label="Our Consultation Process">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-medium tracking-widest text-white/35 mb-3 block uppercase">Our Engagement Process</span>
              <h2 className="section-title font-semibold tracking-tight mb-5">
                What to Expect When You Connect
              </h2>
              <p className="lead-subtitle text-white/40 font-light">
                We respect your engineering timelines and organizational confidentiality. Here is how our team processes your inquiry from submission to architectural kickoff.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Clock,
                title: "Rapid Assessment (24h)",
                desc: "Your inquiry is routed directly to a senior systems architect or security director in Bangalore or Hyderabad. We review your technical objectives and provide an initial response within 24 business hours."
              },
              {
                step: "02",
                icon: ShieldCheck,
                title: "Confidential Scoping & NDA",
                desc: "Prior to deep technical discovery, we execute standard mutual non-disclosure agreements (NDAs) to protect your proprietary logic, infrastructure diagrams, and commercial requirements."
              },
              {
                step: "03",
                icon: FileCheck,
                title: "Proposal & Technical Blueprint",
                desc: "Following a structured 30-minute discovery consultation, our architects deliver a comprehensive project proposal featuring architecture diagrams, sprint timelines, and transparent milestone costs."
              }
            ].map((item, idx) => (
              <FadeIn delay={idx * 0.1} key={idx}>
                <div className="premium-card p-8 h-full flex flex-col justify-between group">
                  <div>
                    <div className="text-xs font-mono font-semibold tracking-widest text-blue-400 mb-4">PHASE {item.step}</div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                      <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="card-title font-semibold text-white mb-2">{item.title}</h3>
                    <p className="body-text text-white/40 font-light">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FAQ SECTION */}
      <section className="py-24 md:py-32 bg-black relative border-t border-white/[0.06]" aria-label="Contact FAQ">
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-xs uppercase tracking-widest mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Consultation FAQs</span>
              </div>
              <h2 className="section-title font-semibold tracking-tight mb-5">
                Frequently Asked Consultation Questions
              </h2>
              <p className="lead-subtitle text-white/40 font-light">
                Have questions before reaching out? Here are answers to common questions regarding technical consultations, office visits, and partnerships.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                question: "How quickly can we expect a response after submitting our inquiry?",
                answer: "All enterprise inquiries submitted via our contact form or official email addresses (lexciinnovation@gmail.com and hr@lexci.in) are acknowledged immediately. A technical solutions director will review your project requirements and follow up with available consultation slots within 24 business hours."
              },
              {
                question: "Can our organization sign a mutual Non-Disclosure Agreement (NDA) first?",
                answer: "Yes, absolutely. We frequently execute mutual NDAs prior to in-depth technical discussions or sharing sensitive system logs, database topologies, or source code. If you have an internal corporate NDA, you can upload or email it, or we can provide our standard enterprise agreement."
              },
              {
                question: "Can we arrange an in-person meeting at your Bangalore or Hyderabad facilities?",
                answer: "Yes. Our executive engineering offices in HSR Layout (Bangalore) and HITEC City (Hyderabad) welcome enterprise leadership and prospective engineering partners. Please notify our team in advance via the contact form to coordinate an agenda and reserve a meeting space."
              },
              {
                question: "Can we request a live demonstration of the InMind AI security platform?",
                answer: "Yes. In your inquiry submission, specify 'Requesting InMind AI Demonstration'. Our security engineering team will arrange a guided sandbox walkthrough showing real-time threat detection, automated isolation protocols, and telemetry visualization tailored to your industry."
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

      {/* SHIMMER DIVIDER */}
      <div className="shimmer-line opacity-50" />
    </div>
  );
}
