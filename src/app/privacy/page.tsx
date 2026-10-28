
import type { Metadata } from "next";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Lexci Privacy Policy — learn how we collect, use, and protect your data across our cybersecurity and AI platforms. Enterprise-grade encryption and zero-trust architecture.",
  keywords: [
    "Lexci privacy policy",
    "data protection",
    "cybersecurity privacy",
    "data security",
    "GDPR compliance",
  ],
  openGraph: {
    title: "Privacy Policy | Lexci",
    description:
      "Learn how Lexci collects, uses, and protects your data across our platforms and services.",
    url: "https://www.lexci.in/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://www.lexci.in/privacy",
  },
};

type PrivacyCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

function PrivacyCard({ number, title, children }: PrivacyCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111215] p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.02] hover:shadow-none sm:p-8">
      <div className="flex items-start gap-4 sm:gap-5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] text-sm font-semibold text-white/70 transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-white/20 group-hover:shadow-none">          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="mb-4 mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
            {title}
          </h2>

          <div className="space-y-3 text-[14px] font-light leading-[1.8] text-white/60 sm:text-[15px] [&_p]:m-0 [&_strong]:font-medium [&_strong]:text-white [&_a]:text-blue-400 [&_a]:no-underline [&_a:hover]:underline">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function PrivacyList({ children }: { children: ReactNode }) {
  return <ul className="my-1 space-y-3 pl-0">{children}</ul>;
}

function PrivacyListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
    <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white" />      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div
      className="flex min-h-screen flex-col bg-black text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <section className="relative overflow-hidden px-6 pb-20 pt-40 md:px-10">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.04] blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
              Legal Information
            </span>

            <h1 className="hero-title mb-6 font-semibold tracking-tight">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="lead-subtitle mx-auto max-w-2xl font-light text-white/40">
              Last updated: March 31, 2026. This Privacy Policy outlines how
              Lexci collects, uses, and protects your data across our platforms
              and services.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.04] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <PrivacyCard number={1} title="Information We Collect">
                <p>
                  We collect information that you explicitly provide to us
                  when using our platform, including but not limited to your
                  name, email address, company details, and billing information.
                  In addition, our systems automatically collect telemetric
                  hardware data and generic platform usage statistics to
                  improve AI model optimizations and enhance security protocols
                  (like InMind AI and CyberShield).
                </p>
              </PrivacyCard>

              <PrivacyCard number={2} title="How We Use Your Information">
                <p>
                  The information we collect is primarily used to provide,
                  maintain, and improve our unified cybersecurity and
                  intelligent systems ecosystem. Specifically, we use your data
                  to:
                </p>

                <PrivacyList>
                  <PrivacyListItem>
                    Deliver adaptive threat detection tailored to your
                    infrastructure.
                  </PrivacyListItem>
                  <PrivacyListItem>
                    Provide personalized insights through the InMind AI
                    platform.
                  </PrivacyListItem>
                  <PrivacyListItem>
                    Process transactions and send related notifications.
                  </PrivacyListItem>
                  <PrivacyListItem>
                    Monitor and prevent fraudulent activity across our scaling
                    digital world.
                  </PrivacyListItem>
                </PrivacyList>
              </PrivacyCard>

              <PrivacyCard number={3} title="Security Infrastructure">
                <p>
                  Security is the core of Lexci. We utilize enterprise-grade
                  encryption (AES-256 for data at rest and TLS 1.3 for data in
                  transit), decentralized zero-trust architecture, and our
                  proprietary autonomous threat defense networks to ensure your
                  data remains completely compartmentalized and protected from
                  unauthorized access.
                </p>
              </PrivacyCard>

              <PrivacyCard number={4} title="Data Sharing and Third Parties">
                <p>
                  We do not sell, rent, or monetize your personal information.
                  Data may be shared with trusted third-party service providers
                  entirely for operational and legal compliance purposes under
                  strict data processing agreements. In the event of a merger,
                  acquisition, or asset sale, we will notify you of any change
                  in ownership or the use of your personal information.
                </p>
              </PrivacyCard>

              <PrivacyCard number={5} title="International Data Transfers">
                <p>
                  By utilizing our global capabilities, your information may be
                  processed in countries outside of your residence. Lexci
                  ensures that international data transfers comply with
                  applicable data protection laws, providing adequate safeguards
                  for transferred data through Standard Contractual Clauses
                  mapping.
                </p>
              </PrivacyCard>

              <PrivacyCard number={6} title="Your Rights">
                <p>
                  Depending on your location, you have the right to request
                  access to, correction of, or deletion of your personal data.
                  You may also object to or restrict processing by contacting
                  our Data Protection Officer at{" "}
                  <strong>hr@lexci.in</strong>.
                </p>
              </PrivacyCard>

              <PrivacyCard number={7} title="Changes to This Policy">
                <p>
                  This Privacy Policy may be updated periodically to reflect
                  changes in our robust engineering practices or legal
                  obligations. We will notify you of significant changes via our
                  platform interface or standard email communication.
                </p>
              </PrivacyCard>

              <PrivacyCard number={8} title="Related Legal Policies & Contact">
                <p>
                  For additional details, please consult our{" "}
                  <Link href="/terms">Terms &amp; Conditions</Link> and{" "}
                  <Link href="/refunds">
                    Refund &amp; Cancellation Policy
                  </Link>
                  . If you have questions regarding data privacy or security
                  governance, reach out to our team via our{" "}
                  <Link href="/contact">Contact Page</Link>.
                </p>
              </PrivacyCard>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="shimmer-line opacity-50" />
    </div>
  );
}
