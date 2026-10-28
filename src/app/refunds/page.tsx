
import type { Metadata } from "next";
import type { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and Cancellation Policy for Lexci Innovations — covering advance payments, project cancellations, milestone-based projects, and refund processing.",
  alternates: {
    canonical: "https://www.lexci.in/refunds",
  },
};

type PolicyCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

function PolicyCard({ number, title, children }: PolicyCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111215] p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.02] hover:shadow-none sm:p-8">
      <div className="flex items-start gap-4 sm:gap-5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/70 transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-white/20 group-hover:shadow-none">          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="mb-4 mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
            {title}
          </h2>

          <div className="space-y-3 text-[14px] font-light leading-[1.9] text-white/65 sm:text-[15px] [&_p]:m-0 [&_strong]:font-medium [&_strong]:text-white [&_a]:text-blue-400 [&_a]:no-underline [&_a:hover]:underline">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function PolicyList({ children }: { children: ReactNode }) {
  return <ul className="my-1 space-y-3 pl-0">{children}</ul>;
}

function PolicyListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
    <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white" />      <span>{children}</span>
    </li>
  );
}

function PolicyOrderedList({ children }: { children: ReactNode }) {
  return (
    <ol className="my-1 list-decimal space-y-3 pl-5 marker:text-white/70">
      {children}
    </ol>
  );
}

export default function RefundsAndCancellationPage() {
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
              Refund{" "}
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                & Cancellation
              </span>
            </h1>

            <p className="lead-subtitle mx-auto max-w-3xl font-light text-white/40">
              Effective Date: August 6, 2026. This policy explains how refunds
              and cancellations are handled for Lexci services and projects.
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
                  At <strong className="font-medium text-white">Lexci Innovations</strong>,
                  we are committed to delivering high-quality technology and
                  digital services. This Refund & Cancellation Policy explains
                  the terms under which refunds, cancellations, and service
                  terminations are handled for our website, software products,
                  applications, cybersecurity services, AI solutions, and
                  other professional services.
                </p>

                <div className="space-y-5">
                  <PolicyCard number={1} title="General Policy">
                    <p>
                      Lexci Innovations provides customized technology and
                      professional services. Since most of our services involve
                      dedicated time, technical resources, research, design,
                      and development efforts, refunds are limited and subject
                      to the conditions below.
                    </p>
                    <p>
                      By engaging our services, you agree to this Refund &
                      Cancellation Policy.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={2} title="Services Covered">
                    <p>This policy applies to:</p>
                    <PolicyList>
                      <PolicyListItem>Web Development</PolicyListItem>
                      <PolicyListItem>Mobile App Development</PolicyListItem>
                      <PolicyListItem>
                        AI Solutions & Automation
                      </PolicyListItem>
                      <PolicyListItem>Cybersecurity Services</PolicyListItem>
                      <PolicyListItem>Cloud Services</PolicyListItem>
                      <PolicyListItem>LMS Development</PolicyListItem>
                      <PolicyListItem>UI/UX Design</PolicyListItem>
                      <PolicyListItem>
                        Digital Marketing Services
                      </PolicyListItem>
                      <PolicyListItem>
                        Software Maintenance & Support
                      </PolicyListItem>
                      <PolicyListItem>
                        Consulting and Custom Development Projects
                      </PolicyListItem>
                    </PolicyList>
                  </PolicyCard>

                  <PolicyCard number={3} title="Advance Payments">
                    <PolicyList>
                      <PolicyListItem>
                        All advance payments made for project initiation are
                        generally non-refundable once work has commenced.
                      </PolicyListItem>
                      <PolicyListItem>
                        Project work is considered commenced when requirement
                        gathering begins, design work starts, development
                        environment is created, technical planning is
                        initiated, or any deliverable is shared with the
                        client.
                      </PolicyListItem>
                    </PolicyList>
                  </PolicyCard>

                  <PolicyCard number={4} title="Cancellation by Client">
                    <div className="space-y-5">
                      <div className="space-y-3">
                        <h3 className="text-base font-medium text-white sm:text-lg">
                          Before Work Starts
                        </h3>
                        <p>
                          If the client cancels the project before any work has
                          started, a refund may be considered after deducting
                          payment gateway charges, banking charges, and
                          administrative processing charges.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-base font-medium text-white sm:text-lg">
                          After Work Starts
                        </h3>
                        <p>
                          If the client cancels the project after work has
                          started, no refund will be provided for completed
                          work. The client must pay for work completed up to
                          the cancellation date, and any unpaid dues become
                          immediately payable.
                        </p>
                      </div>
                    </div>
                  </PolicyCard>

                  <PolicyCard number={5} title="Milestone-Based Projects">
                    <PolicyList>
                      <PolicyListItem>
                        Payments already made for completed milestones are
                        non-refundable.
                      </PolicyListItem>
                      <PolicyListItem>
                        Future unpaid milestones may be cancelled without
                        further billing.
                      </PolicyListItem>
                      <PolicyListItem>
                        Deliverables for unpaid milestones will not be
                        transferred.
                      </PolicyListItem>
                    </PolicyList>
                  </PolicyCard>

                  <PolicyCard number={6} title="Digital Marketing Services">
                    <PolicyList>
                      <PolicyListItem>
                        Monthly retainers are non-refundable once the service
                        period has begun.
                      </PolicyListItem>
                      <PolicyListItem>
                        Advertising spend paid to platforms such as Google,
                        Meta, LinkedIn, or other third parties is
                        non-refundable.
                      </PolicyListItem>
                      <PolicyListItem>
                        Campaign setup fees are non-refundable after setup
                        completion.
                      </PolicyListItem>
                    </PolicyList>
                  </PolicyCard>

                  <PolicyCard number={7} title="Subscription or SaaS Services">
                    <PolicyList>
                      <PolicyListItem>
                        Refund requests must be submitted within 7 days of the
                        initial subscription purchase, provided substantial
                        usage has not occurred.
                      </PolicyListItem>
                      <PolicyListItem>
                        Renewal payments are non-refundable once processed.
                      </PolicyListItem>
                      <PolicyListItem>
                        Free trials, promotional plans, and discounted plans
                        are non-refundable unless required by law.
                      </PolicyListItem>
                    </PolicyList>
                  </PolicyCard>

                  <PolicyCard
                    number={8}
                    title="Domain, Hosting, API & Third-Party Services"
                  >
                    <p>
                      Amounts paid for third-party services are non-refundable,
                      including domain registration, web hosting, cloud
                      hosting, SSL certificates, payment gateway setup fees,
                      SMS/email gateway charges, maps and API usage fees, and
                      app store registration fees. Refunds for such services
                      are governed by the respective third-party provider
                      policies.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={9} title="Change of Mind">
                    <p>
                      Refunds will not be issued for change of business plans,
                      change of mind, internal management decisions, budget
                      constraints arising after project confirmation, or lack
                      of client availability or delayed feedback.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={10} title="Delay in Client Communication">
                    <p>
                      If the client fails to provide required information,
                      approvals, content, or feedback for more than 30
                      consecutive days, the project may be marked inactive.
                      Payments already made will remain non-refundable.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={11} title="Service Deficiency">
                    <p>
                      If the client believes the delivered service materially
                      deviates from the agreed scope:
                    </p>
                    <PolicyOrderedList>
                      <li>
                        The client must notify Lexci Innovations in writing
                        within 7 days of delivery.
                      </li>
                      <li>
                        We will review the concern and provide reasonable
                        rectification opportunities.
                      </li>
                      <li>
                        Refunds will be considered only if we are unable to
                        deliver the agreed scope after reasonable remediation
                        attempts.
                      </li>
                    </PolicyOrderedList>
                  </PolicyCard>

                  <PolicyCard number={12} title="Refund Processing">
                    <p>
                      Approved refunds will be processed within 7-15 business
                      days through the original payment method whenever
                      possible. Processing time may vary depending on banks and
                      payment providers.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={13} title="Chargebacks">
                    <p>
                      Clients agree to contact Lexci Innovations before
                      initiating any payment dispute or chargeback. Unauthorized
                      chargebacks may result in suspension of services,
                      termination of agreements, and recovery proceedings for
                      completed work.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={14} title="Termination by Lexci Innovations">
                    <p>
                      We reserve the right to terminate services if the client
                      violates contractual terms, engages in unlawful
                      activities, abuses our staff, or fails to make payments
                      as agreed. In such cases, refunds will not be provided
                      for work completed or resources allocated.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={15} title="Force Majeure">
                    <p>
                      Refunds will not be provided for delays or interruptions
                      caused by events beyond our reasonable control, including
                      natural disasters, government restrictions, internet
                      outages, cyberattacks, strikes, or other force majeure
                      events.
                    </p>
                  </PolicyCard>

                  <PolicyCard
                    number={16}
                    title="Contact for Refund Requests & Related Policies"
                  >
                    <p>
                      All refund or cancellation requests must be submitted in
                      writing to:
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
                      Policies: <Link href="/terms">Terms &amp; Conditions</Link>
                      {" | "}
                      <Link href="/privacy">Privacy Policy</Link>
                    </p>
                    <p>
                      Please include client name, project or invoice number,
                      date of payment, and reason for cancellation or refund
                      request.
                    </p>
                  </PolicyCard>

                  <PolicyCard number={17} title="Policy Updates">
                    <p>
                      Lexci Innovations may modify this Refund & Cancellation
                      Policy at any time. Updated versions will be posted on
                      our website and become effective upon publication.
                    </p>
                    <p>
                      By purchasing or using our services, you acknowledge
                      that you have read, understood, and agreed to this Refund
                      & Cancellation Policy.
                    </p>
                  </PolicyCard>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="shimmer-line opacity-50" />
    </div>
  );
}
