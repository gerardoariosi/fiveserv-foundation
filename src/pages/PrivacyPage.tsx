import Seo from "@/lib/Seo";
import { SITE } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";

const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <section className="py-8">
    <h2 className="font-display text-2xl text-[#1A1A1A] sm:text-3xl">
      <span className="text-[#1A1A1A]/50">{number}.</span> {title}
    </h2>
    <div className="mt-4 space-y-3 font-body text-base leading-relaxed text-[#1A1A1A]">
      {children}
    </div>
    <div className="mt-8 h-px w-full bg-[#FFD700]" aria-hidden="true" />
  </section>
);

export const PrivacyPage = () => {
  const phone = SITE.phone;

  return (
    <>
      <Seo
        title="Privacy Policy — FiveServ Property Solutions"
        description="FiveServ Property Solutions privacy policy. Learn how we collect, use, and protect your personal information."
        path="/privacy"
      />

      <div className="bg-white text-[#1A1A1A]">
        <article className="mx-auto max-w-3xl px-6 py-20 sm:py-20">
          <header className="mb-10">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Legal
            </p>
            <h1 className="mt-3 font-display text-4xl text-[#1A1A1A] sm:text-5xl">
              Privacy Policy
            </h1>
            <div className="mt-6 h-[2px] w-24 bg-[#FFD700]" aria-hidden="true" />
            <p className="mt-6 font-body text-sm text-[#1A1A1A]/70">
              Last updated: May 2026
            </p>
          </header>

          <Section number={1} title="Introduction">
            <p>
              FiveServ Group LLC is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit fiveserv.net or contact us
              to request services. By using our website or submitting any form, you agree to the collection and
              use of information in accordance with this policy.
            </p>
          </Section>

          <Section number={2} title="Information We Collect">
            <p>
              We collect: <strong>Contact Information</strong> — name, email address, phone number, and property
              address submitted through any form. <strong>Business Information</strong> — company name, portfolio
              size, and service needs submitted through B2B forms. <strong>Usage Data</strong> — IP address,
              browser type, and pages visited collected automatically through cookies and analytics.{" "}
              <strong>Communications</strong> — records of emails, messages, and service requests submitted to{" "}
              <BrandName variant="dark" />.
            </p>
          </Section>

          <Section number={3} title="How We Use Your Information">
            <p>
              We use your information to: respond to service inquiries and quote requests; schedule and deliver
              property maintenance services; send service updates, invoices, and follow-up communications;
              improve our website and service offerings; and comply with legal obligations. We do not use your
              information for automated decision-making or profiling.
            </p>
          </Section>

          <Section number={4} title="SMS & Email Communications">
            <p>
              By submitting any form on fiveserv.net, you consent to receive communications from FiveServ Group
              LLC via phone, email, and SMS. <strong>SMS:</strong> Message frequency varies. Reply{" "}
              <strong>STOP</strong> at any time to unsubscribe. Reply <strong>HELP</strong> for assistance.
              Standard message and data rates may apply. <strong>Email:</strong> You may opt out of marketing
              emails at any time by clicking the unsubscribe link or contacting info@fiveserv.net.
            </p>
          </Section>

          <Section number={5} title="Information Sharing">
            <p>
              <BrandName variant="dark" /> does not sell, trade, or rent your personal information to third
              parties. We may share your information with: service providers and subcontractors who assist in
              delivering our services, bound by confidentiality agreements; analytics platforms (Google
              Analytics, Microsoft Clarity) — data shared is anonymized; and legal authorities when required by
              law.
            </p>
          </Section>

          <Section number={6} title="Cookies & Tracking">
            <p>
              Our website uses cookies to improve your experience. We use: essential cookies required for the
              website to function; analytics cookies (Google Analytics, Microsoft Clarity) to understand how
              visitors use our site; and marketing cookies to measure advertising effectiveness. You can control
              cookie preferences through your browser settings.
            </p>
          </Section>

          <Section number={7} title="Data Retention">
            <p>
              We retain your information as long as necessary to deliver services and comply with legal
              obligations. Contact and service information: minimum 3 years after last service. Invoice and
              contract records: 7 years per Florida business record requirements. You may request deletion of
              your data at any time by contacting info@fiveserv.net.
            </p>
          </Section>

          <Section number={8} title="Data Security">
            <p>
              We implement industry-standard security measures to protect your information. All data transmitted
              through our website forms is encrypted via SSL/TLS. Access to personal data is restricted to
              authorized personnel only.
            </p>
          </Section>

          <Section number={9} title="Your Rights">
            <p>
              You have the right to: access the personal information we hold about you; request correction of
              inaccurate information; request deletion of your personal information subject to legal obligations;
              and opt out of marketing communications at any time. Contact info@fiveserv.net to exercise these
              rights. We will respond within 30 days.
            </p>
          </Section>

          <Section number={10} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Updated versions will be posted at
              fiveserv.net/privacy with the revised effective date. Continued use of our website after any update
              constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section number={11} title="Contact Us">
            <p>
              Email:{" "}
              <a href="mailto:info@fiveserv.net" className="underline hover:text-[#1A1A1A]/70">
                info@fiveserv.net
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://fiveserv.net" className="underline hover:text-[#1A1A1A]/70">
                fiveserv.net
              </a>
            </p>
            <p>Orlando, Florida — Available 24/7 for emergencies.</p>
            <p className="text-sm text-[#1A1A1A]/60">Phone: {phone}</p>
          </Section>
        </article>
      </div>
    </>
  );
};

export default PrivacyPage;
