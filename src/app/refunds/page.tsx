import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund and Cancellation Policy for Lexci Innovations — covering advance payments, project cancellations, milestone-based projects, and refund processing.",
  alternates: {
    canonical: "https://lexci.in/refunds",
  },
};

export default function RefundsAndCancellationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/90 selection:text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none mix-blend-screen animate-gradient-drift-reverse" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/50 uppercase">Legal Information</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              Refund & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300">Cancellation</span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-3xl leading-relaxed">
              Effective Date: August 6, 2026. This policy explains how refunds and cancellations are handled for Lexci services and projects.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-28 md:pb-36 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <FadeIn delay={0.15}>
            <div className="premium-card p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto prose prose-invert prose-p:text-white/65 prose-p:font-light prose-p:leading-[1.9] prose-p:text-[15px] prose-h2:text-2xl prose-h2:font-medium prose-h2:tracking-tight prose-h2:mt-10 prose-h2:mb-5 prose-li:text-white/65 prose-li:font-light prose-li:text-[15px] prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-strong:font-medium">
                <p>
                  At <strong>Lexci Innovations</strong>, we are committed to delivering high-quality technology and digital services. This Refund & Cancellation Policy explains the terms under which refunds, cancellations, and service terminations are handled for our website, software products, applications, cybersecurity services, AI solutions, and other professional services.
                </p>

                <h2>1. General Policy</h2>
                <p>
                  Lexci Innovations provides customized technology and professional services. Since most of our services involve dedicated time, technical resources, research, design, and development efforts, refunds are limited and subject to the conditions below.
                </p>
                <p>By engaging our services, you agree to this Refund & Cancellation Policy.</p>

                <h2>2. Services Covered</h2>
                <p>This policy applies to:</p>
                <ul>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>AI Solutions & Automation</li>
                  <li>Cybersecurity Services</li>
                  <li>Cloud Services</li>
                  <li>LMS Development</li>
                  <li>UI/UX Design</li>
                  <li>Digital Marketing Services</li>
                  <li>Software Maintenance & Support</li>
                  <li>Consulting and Custom Development Projects</li>
                </ul>

                <h2>3. Advance Payments</h2>
                <ul>
                  <li>All advance payments made for project initiation are generally non-refundable once work has commenced.</li>
                  <li>Project work is considered commenced when requirement gathering begins, design work starts, development environment is created, technical planning is initiated, or any deliverable is shared with the client.</li>
                </ul>

                <h2>4. Cancellation by Client</h2>
                <h3 className="text-xl font-medium mt-6 mb-3">Before Work Starts</h3>
                <p>
                  If the client cancels the project before any work has started, a refund may be considered after deducting payment gateway charges, banking charges, and administrative processing charges.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-3">After Work Starts</h3>
                <p>
                  If the client cancels the project after work has started, no refund will be provided for completed work. The client must pay for work completed up to the cancellation date, and any unpaid dues become immediately payable.
                </p>

                <h2>5. Milestone-Based Projects</h2>
                <ul>
                  <li>Payments already made for completed milestones are non-refundable.</li>
                  <li>Future unpaid milestones may be cancelled without further billing.</li>
                  <li>Deliverables for unpaid milestones will not be transferred.</li>
                </ul>

                <h2>6. Digital Marketing Services</h2>
                <ul>
                  <li>Monthly retainers are non-refundable once the service period has begun.</li>
                  <li>Advertising spend paid to platforms such as Google, Meta, LinkedIn, or other third parties is non-refundable.</li>
                  <li>Campaign setup fees are non-refundable after setup completion.</li>
                </ul>

                <h2>7. Subscription or SaaS Services</h2>
                <ul>
                  <li>Refund requests must be submitted within 7 days of the initial subscription purchase, provided substantial usage has not occurred.</li>
                  <li>Renewal payments are non-refundable once processed.</li>
                  <li>Free trials, promotional plans, and discounted plans are non-refundable unless required by law.</li>
                </ul>

                <h2>8. Domain, Hosting, API & Third-Party Services</h2>
                <p>
                  Amounts paid for third-party services are non-refundable, including domain registration, web hosting, cloud hosting, SSL certificates, payment gateway setup fees, SMS/email gateway charges, maps and API usage fees, and app store registration fees. Refunds for such services are governed by the respective third-party provider policies.
                </p>

                <h2>9. Change of Mind</h2>
                <p>Refunds will not be issued for change of business plans, change of mind, internal management decisions, budget constraints arising after project confirmation, or lack of client availability or delayed feedback.</p>

                <h2>10. Delay in Client Communication</h2>
                <p>
                  If the client fails to provide required information, approvals, content, or feedback for more than 30 consecutive days, the project may be marked inactive. Payments already made will remain non-refundable.
                </p>

                <h2>11. Service Deficiency</h2>
                <p>If the client believes the delivered service materially deviates from the agreed scope:</p>
                <ol>
                  <li>The client must notify Lexci Innovations in writing within 7 days of delivery.</li>
                  <li>We will review the concern and provide reasonable rectification opportunities.</li>
                  <li>Refunds will be considered only if we are unable to deliver the agreed scope after reasonable remediation attempts.</li>
                </ol>

                <h2>12. Refund Processing</h2>
                <p>
                  Approved refunds will be processed within 7-15 business days through the original payment method whenever possible. Processing time may vary depending on banks and payment providers.
                </p>

                <h2>13. Chargebacks</h2>
                <p>
                  Clients agree to contact Lexci Innovations before initiating any payment dispute or chargeback. Unauthorized chargebacks may result in suspension of services, termination of agreements, and recovery proceedings for completed work.
                </p>

                <h2>14. Termination by Lexci Innovations</h2>
                <p>
                  We reserve the right to terminate services if the client violates contractual terms, engages in unlawful activities, abuses our staff, or fails to make payments as agreed. In such cases, refunds will not be provided for work completed or resources allocated.
                </p>

                <h2>15. Force Majeure</h2>
                <p>
                  Refunds will not be provided for delays or interruptions caused by events beyond our reasonable control, including natural disasters, government restrictions, internet outages, cyberattacks, strikes, or other force majeure events.
                </p>

                <h2>16. Contact for Refund Requests</h2>
                <p>All refund or cancellation requests must be submitted in writing to:</p>
                <p>
                  <strong>Lexci Innovations</strong>
                  <br />
                  Website: <a href="http://www.lexci.in/">www.lexci.in</a>
                  <br />
                  Email: <a href="mailto:info@lexci.in">info@lexci.in</a>
                </p>
                <p>Please include client name, project or invoice number, date of payment, and reason for cancellation or refund request.</p>

                <h2>17. Policy Updates</h2>
                <p>
                  Lexci Innovations may modify this Refund & Cancellation Policy at any time. Updated versions will be posted on our website and become effective upon publication.
                </p>
                <p>By purchasing or using our services, you acknowledge that you have read, understood, and agreed to this Refund & Cancellation Policy.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="shimmer-line opacity-50" />
    </div>
  );
}
