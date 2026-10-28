
import type { Metadata } from "next";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Lexci Innovations — covering services, payments, intellectual property, cybersecurity, AI solutions, and governing law.",
  alternates: {
    canonical: "https://www.lexci.in/terms",
  },
};

type TermsCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

function TermsCard({ number, title, children }: TermsCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111215] p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.02] hover:shadow-none sm:p-8">
      <div className="flex items-start gap-4 sm:gap-5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/70 transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-white/20 group-hover:shadow-none">          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="mb-4 mt-1 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-white sm:text-xl">
            {title}
          </h2>

          <div className="space-y-3 text-[14px] font-light leading-[1.9] text-white/60 sm:text-[15px] [&_p]:m-0 [&_strong]:font-medium [&_strong]:text-white [&_a]:text-blue-400 [&_a]:no-underline [&_a:hover]:underline">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function TermsList({ children }: { children: ReactNode }) {
  return (
    <ul className="my-1 space-y-3 pl-0">
      {children}
    </ul>
  );
}

function TermsListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
    <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white" />      <span>{children}</span>
    </li>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <div
      className="flex min-h-screen flex-col bg-black text-white selection:bg-white/90 selection:text-black"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] animate-gradient-drift rounded-full bg-blue-600/10 blur-[180px] mix-blend-screen" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] animate-gradient-drift-reverse rounded-full bg-purple-600/10 blur-[180px] mix-blend-screen" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-8">
          <FadeIn>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                Legal Information
              </span>
            </div>

            <h1 className="hero-title mb-6 font-semibold tracking-tight">
              Terms &{" "}
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="lead-subtitle mx-auto max-w-3xl font-light text-white/40">
              Effective Date: August 6, 2026. These terms define how Lexci
              services, content, and projects are used and governed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-10 bg-black pb-28 md:pb-36">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn delay={0.15}>
            <div className="premium-card p-5 sm:p-8 md:p-10 lg:p-12">
              <div className="mx-auto max-w-4xl">
                <p className="mb-8 text-[14px] font-light leading-[1.9] text-white/65 sm:text-[15px]">
                  Welcome to <strong className="font-medium text-white">Lexci Innovations</strong>.
                  By accessing or using our website, products, applications,
                  and services, you agree to comply with these Terms &
                  Conditions. If you do not agree with these terms, please do
                  not use our website or services.
                </p>

                <div className="space-y-5">
                  <TermsCard number={1} title="About Lexci Innovations">
                    <p>
                      Lexci Innovations is a technology company providing
                      AI-powered solutions, cybersecurity services, software
                      development, web and mobile application development,
                      cloud solutions, digital transformation, consulting, and
                      related technology services.
                    </p>
                  </TermsCard>

                  <TermsCard number={2} title="Acceptance of Terms">
                    <p>
                      By accessing our website or engaging our services, you
                      acknowledge that you have read, understood, and agreed
                      to these Terms & Conditions and our Privacy Policy.
                    </p>
                  </TermsCard>

                  <TermsCard number={3} title="Services">
                    <p>Our services may include, but are not limited to:</p>
                    <TermsList>
                      <TermsListItem>AI Solutions & Automation</TermsListItem>
                      <TermsListItem>Cybersecurity Services</TermsListItem>
                      <TermsListItem>Web Development</TermsListItem>
                      <TermsListItem>Mobile App Development</TermsListItem>
                      <TermsListItem>
                        Cloud Development & Cloud Security
                      </TermsListItem>
                      <TermsListItem>LMS Development</TermsListItem>
                      <TermsListItem>UI/UX Design</TermsListItem>
                      <TermsListItem>Digital Marketing</TermsListItem>
                      <TermsListItem>
                        Software Maintenance & Support
                      </TermsListItem>
                      <TermsListItem>Custom Enterprise Solutions</TermsListItem>
                    </TermsList>
                    <p>
                      All services are subject to project agreements,
                      quotations, or signed contracts where applicable.
                    </p>
                  </TermsCard>

                  <TermsCard number={4} title="User Responsibilities">
                    <p>You agree to:</p>
                    <TermsList>
                      <TermsListItem>
                        Provide accurate and complete information.
                      </TermsListItem>
                      <TermsListItem>
                        Use our website and services only for lawful purposes.
                      </TermsListItem>
                      <TermsListItem>
                        Not misuse, hack, or attempt unauthorized access to our
                        systems.
                      </TermsListItem>
                      <TermsListItem>
                        Not upload malicious software, viruses, or harmful
                        code.
                      </TermsListItem>
                    </TermsList>
                  </TermsCard>

                  <TermsCard number={5} title="Intellectual Property">
                    <p>
                      All content available on this website, including text,
                      graphics, logos, software, designs, source code,
                      trademarks, and branding, is the exclusive property of
                      Lexci Innovations unless otherwise stated.
                    </p>
                    <p>
                      No content may be copied, modified, distributed, or
                      reproduced without our prior written permission.
                    </p>
                  </TermsCard>

                  <TermsCard number={6} title="Project Deliverables">
                    <TermsList>
                      <TermsListItem>
                        Project timelines begin after receiving all required
                        information and agreed payments.
                      </TermsListItem>
                      <TermsListItem>
                        Delays caused by the client may extend delivery
                        schedules.
                      </TermsListItem>
                      <TermsListItem>
                        Additional features requested outside the agreed scope
                        may require additional charges.
                      </TermsListItem>
                      <TermsListItem>
                        Final ownership of deliverables will be transferred
                        after full payment unless otherwise stated in the
                        project agreement.
                      </TermsListItem>
                    </TermsList>
                  </TermsCard>

                  <TermsCard number={7} title="Payments">
                    <TermsList>
                      <TermsListItem>
                        Payments must be made according to the agreed
                        quotation or contract.
                      </TermsListItem>
                      <TermsListItem>
                        Delayed payments may result in project suspension.
                      </TermsListItem>
                      <TermsListItem>
                        Advance payments are generally non-refundable once
                        project work has commenced.
                      </TermsListItem>
                      <TermsListItem>
                        Taxes, government charges, or payment gateway fees,
                        where applicable, are the client&apos;s responsibility.
                      </TermsListItem>
                    </TermsList>
                  </TermsCard>

                  <TermsCard number={8} title="Revisions">
                    <p>Unless otherwise specified in the project agreement:</p>
                    <TermsList>
                      <TermsListItem>
                        Minor revisions are included during the development
                        process.
                      </TermsListItem>
                      <TermsListItem>
                        Major changes or additional requirements after approval
                        may incur extra charges.
                      </TermsListItem>
                    </TermsList>
                  </TermsCard>

                  <TermsCard number={9} title="Confidentiality">
                    <p>
                      Lexci Innovations respects the confidentiality of all
                      client information and project data.
                    </p>
                    <p>
                      We will not disclose confidential information to third
                      parties without authorization unless required by law.
                    </p>
                  </TermsCard>

                  <TermsCard number={10} title="Cybersecurity Services">
                    <p>
                      While we implement industry-standard security practices
                      and recommendations, no digital system can be guaranteed
                      to be completely secure.
                    </p>
                    <p>
                      Lexci Innovations shall not be liable for cyber
                      incidents caused by third-party software, user
                      negligence, hosting providers, internet outages, or
                      factors beyond our reasonable control.
                    </p>
                  </TermsCard>

                  <TermsCard number={11} title="AI Solutions">
                    <p>
                      Our AI-powered tools generate responses based on
                      available data and machine learning models.
                    </p>
                    <p>
                      Clients are responsible for reviewing AI-generated
                      outputs before relying on them for legal, financial,
                      medical, educational, or business-critical decisions.
                    </p>
                  </TermsCard>

                  <TermsCard number={12} title="Third-Party Services">
                    <p>
                      Our solutions may integrate third-party APIs, cloud
                      providers, payment gateways, maps, analytics tools, or
                      external software.
                    </p>
                    <p>
                      Lexci Innovations is not responsible for service
                      interruptions, pricing changes, or policy updates made
                      by third-party providers.
                    </p>
                  </TermsCard>

                  <TermsCard number={13} title="Support & Maintenance">
                    <p>
                      Support and maintenance services are provided only if
                      included in the service agreement or purchased
                      separately.
                    </p>
                    <p>
                      Support does not include changes outside the original
                      project scope unless agreed upon.
                    </p>
                  </TermsCard>

                  <TermsCard number={14} title="Limitation of Liability">
                    <p>
                      To the maximum extent permitted by law, Lexci Innovations
                      shall not be liable for:
                    </p>
                    <TermsList>
                      <TermsListItem>
                        Indirect or consequential damages.
                      </TermsListItem>
                      <TermsListItem>Business interruption.</TermsListItem>
                      <TermsListItem>Loss of profits or revenue.</TermsListItem>
                      <TermsListItem>
                        Loss of data resulting from third-party failures.
                      </TermsListItem>
                      <TermsListItem>
                        Delays caused by circumstances beyond our reasonable
                        control.
                      </TermsListItem>
                    </TermsList>
                  </TermsCard>

                  <TermsCard number={15} title="Website Availability">
                    <p>
                      We strive to keep our website available at all times but
                      do not guarantee uninterrupted or error-free access.
                    </p>
                    <p>
                      We reserve the right to modify, suspend, or discontinue
                      any part of the website without prior notice.
                    </p>
                  </TermsCard>

                  <TermsCard number={16} title="Privacy">
                    <p>
                      Your use of our website is also governed by our Privacy
                      Policy.
                    </p>
                    <p>
                      By using our services, you consent to the collection and
                      processing of information as described in that policy.
                    </p>
                  </TermsCard>

                  <TermsCard number={17} title="Termination">
                    <p>
                      We reserve the right to suspend or terminate access to
                      our website or services if these Terms & Conditions are
                      violated or if required by law.
                    </p>
                  </TermsCard>

                  <TermsCard number={18} title="Governing Law">
                    <p>
                      These Terms & Conditions shall be governed by the laws
                      of India.
                    </p>
                    <p>
                      Any disputes shall be subject to the exclusive
                      jurisdiction of the competent courts in Hyderabad,
                      Telangana.
                    </p>
                  </TermsCard>

                  <TermsCard number={19} title="Changes to Terms">
                    <p>
                      Lexci Innovations may update these Terms & Conditions at
                      any time without prior notice.
                    </p>
                    <p>
                      The latest version published on this website will be
                      considered the current and applicable version.
                    </p>
                  </TermsCard>

                  <TermsCard
                    number={20}
                    title="Contact Information & Related Policies"
                  >
                    <p>
                      For any questions regarding these Terms & Conditions,
                      please contact us or review our related policies:
                    </p>
                    <p>
                      <strong>Lexci Innovations</strong>
                      <br />
                      Website: <Link href="/">www.lexci.in</Link>
                      <br />
                      Email:{" "}
                      <a href="mailto:info@lexci.in">info@lexci.in</a>
                      <br />
                      Direct Consultation:{" "}
                      <Link href="/contact">Contact Page</Link>
                      <br />
                      Policies: <Link href="/privacy">Privacy Policy</Link>
                      {" | "}
                      <Link href="/refunds">
                        Refund & Cancellation Policy
                      </Link>
                    </p>
                  </TermsCard>
                </div>

                <p className="mt-8 text-[14px] font-light leading-[1.9] text-white/65 sm:text-[15px]">
                  By continuing to use our website or services, you
                  acknowledge that you have read, understood, and agreed to
                  these Terms & Conditions.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="shimmer-line opacity-50" />
    </div>
  );
}
