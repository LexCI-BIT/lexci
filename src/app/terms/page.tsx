import type { Metadata } from "next";
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

export default function TermsAndConditionsPage() {
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
            <h1 className="hero-title font-semibold tracking-tight mb-6">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300">Conditions</span>
            </h1>
            <p className="lead-subtitle text-white/40 font-light max-w-3xl">
              Effective Date: August 6, 2026. These terms define how Lexci services, content, and projects are used and governed.
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
                  Welcome to <strong>Lexci Innovations</strong>. By accessing or using our website, products, applications, and services, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please do not use our website or services.
                </p>

                <h2>1. About Lexci Innovations</h2>
                <p>
                  Lexci Innovations is a technology company providing AI-powered solutions, cybersecurity services, software development, web and mobile application development, cloud solutions, digital transformation, consulting, and related technology services.
                </p>

                <h2>2. Acceptance of Terms</h2>
                <p>
                  By accessing our website or engaging our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions and our Privacy Policy.
                </p>

                <h2>3. Services</h2>
                <p>Our services may include, but are not limited to:</p>
                <ul>
                  <li>AI Solutions & Automation</li>
                  <li>Cybersecurity Services</li>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Cloud Development & Cloud Security</li>
                  <li>LMS Development</li>
                  <li>UI/UX Design</li>
                  <li>Digital Marketing</li>
                  <li>Software Maintenance & Support</li>
                  <li>Custom Enterprise Solutions</li>
                </ul>
                <p>All services are subject to project agreements, quotations, or signed contracts where applicable.</p>

                <h2>4. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information.</li>
                  <li>Use our website and services only for lawful purposes.</li>
                  <li>Not misuse, hack, or attempt unauthorized access to our systems.</li>
                  <li>Not upload malicious software, viruses, or harmful code.</li>
                </ul>

                <h2>5. Intellectual Property</h2>
                <p>
                  All content available on this website, including text, graphics, logos, software, designs, source code, trademarks, and branding, is the exclusive property of Lexci Innovations unless otherwise stated.
                </p>
                <p>No content may be copied, modified, distributed, or reproduced without our prior written permission.</p>

                <h2>6. Project Deliverables</h2>
                <ul>
                  <li>Project timelines begin after receiving all required information and agreed payments.</li>
                  <li>Delays caused by the client may extend delivery schedules.</li>
                  <li>Additional features requested outside the agreed scope may require additional charges.</li>
                  <li>Final ownership of deliverables will be transferred after full payment unless otherwise stated in the project agreement.</li>
                </ul>

                <h2>7. Payments</h2>
                <ul>
                  <li>Payments must be made according to the agreed quotation or contract.</li>
                  <li>Delayed payments may result in project suspension.</li>
                  <li>Advance payments are generally non-refundable once project work has commenced.</li>
                  <li>Taxes, government charges, or payment gateway fees, where applicable, are the client&apos;s responsibility.</li>
                </ul>

                <h2>8. Revisions</h2>
                <p>Unless otherwise specified in the project agreement:</p>
                <ul>
                  <li>Minor revisions are included during the development process.</li>
                  <li>Major changes or additional requirements after approval may incur extra charges.</li>
                </ul>

                <h2>9. Confidentiality</h2>
                <p>Lexci Innovations respects the confidentiality of all client information and project data.</p>
                <p>We will not disclose confidential information to third parties without authorization unless required by law.</p>

                <h2>10. Cybersecurity Services</h2>
                <p>
                  While we implement industry-standard security practices and recommendations, no digital system can be guaranteed to be completely secure.
                </p>
                <p>
                  Lexci Innovations shall not be liable for cyber incidents caused by third-party software, user negligence, hosting providers, internet outages, or factors beyond our reasonable control.
                </p>

                <h2>11. AI Solutions</h2>
                <p>
                  Our AI-powered tools generate responses based on available data and machine learning models.
                </p>
                <p>
                  Clients are responsible for reviewing AI-generated outputs before relying on them for legal, financial, medical, educational, or business-critical decisions.
                </p>

                <h2>12. Third-Party Services</h2>
                <p>
                  Our solutions may integrate third-party APIs, cloud providers, payment gateways, maps, analytics tools, or external software.
                </p>
                <p>
                  Lexci Innovations is not responsible for service interruptions, pricing changes, or policy updates made by third-party providers.
                </p>

                <h2>13. Support & Maintenance</h2>
                <p>Support and maintenance services are provided only if included in the service agreement or purchased separately.</p>
                <p>Support does not include changes outside the original project scope unless agreed upon.</p>

                <h2>14. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Lexci Innovations shall not be liable for:</p>
                <ul>
                  <li>Indirect or consequential damages.</li>
                  <li>Business interruption.</li>
                  <li>Loss of profits or revenue.</li>
                  <li>Loss of data resulting from third-party failures.</li>
                  <li>Delays caused by circumstances beyond our reasonable control.</li>
                </ul>

                <h2>15. Website Availability</h2>
                <p>We strive to keep our website available at all times but do not guarantee uninterrupted or error-free access.</p>
                <p>We reserve the right to modify, suspend, or discontinue any part of the website without prior notice.</p>

                <h2>16. Privacy</h2>
                <p>Your use of our website is also governed by our Privacy Policy.</p>
                <p>By using our services, you consent to the collection and processing of information as described in that policy.</p>

                <h2>17. Termination</h2>
                <p>We reserve the right to suspend or terminate access to our website or services if these Terms & Conditions are violated or if required by law.</p>

                <h2>18. Governing Law</h2>
                <p>These Terms & Conditions shall be governed by the laws of India.</p>
                <p>Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.</p>

                <h2>19. Changes to Terms</h2>
                <p>Lexci Innovations may update these Terms & Conditions at any time without prior notice.</p>
                <p>The latest version published on this website will be considered the current and applicable version.</p>

                <h2>20. Contact Information &amp; Related Policies</h2>
                <p>For any questions regarding these Terms &amp; Conditions, please contact us or review our related policies:</p>
                <p>
                  <strong>Lexci Innovations</strong>
                  <br />
                  Website: <Link href="/">www.lexci.in</Link>
                  <br />
                  Email: <a href="mailto:info@lexci.in">info@lexci.in</a>
                  <br />
                  Direct Consultation: <Link href="/contact">Contact Page</Link>
                  <br />
                  Policies: <Link href="/privacy">Privacy Policy</Link> | <Link href="/refunds">Refund &amp; Cancellation Policy</Link>
                </p>
                <p>By continuing to use our website or services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="shimmer-line opacity-50" />
    </div>
  );
}
