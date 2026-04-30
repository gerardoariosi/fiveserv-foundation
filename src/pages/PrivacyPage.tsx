import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";

/**
 * Privacy Policy — light-themed legal document page.
 * Mirrors the visual system used in TermsPage.tsx.
 */
const Section = ({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) => (
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
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      <Seo
        title="Privacy Policy — FiveServ Property Solutions"
        description="FiveServ Property Solutions privacy policy. How we collect, use, and protect your personal information. Serving property managers and homeowners in Central Florida."
        path="/privacy"
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Privacy Policy", url: `${SITE.url}/privacy` },
        ]}
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
              Last updated: April 2025
            </p>
            <p className="mt-6 font-body text-base leading-relaxed text-[#1A1A1A]">
              <BrandName variant="dark" /> Group LLC (&ldquo;<BrandName variant="dark" />,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
              This Privacy Policy explains how we collect, use, share, and protect personal
              information when you visit{" "}
              <a href={SITE.url} className="underline hover:text-[#1A1A1A]/70">
                {SITE.url.replace(/^https?:\/\//, "")}
              </a>{" "}
              or engage our property maintenance services in Central Florida.
            </p>
          </header>

          <Section number={1} title="Information We Collect">
            <p>
              <strong>Information you provide directly.</strong> When you submit a form,
              request a quote, schedule service, call, email, or text us, we may collect
              your name, company or property name, email address, phone number, service
              address, property type and unit count, the nature of your maintenance
              request, photos you choose to upload, and any other details you share.
            </p>
            <p>
              <strong>Information we collect automatically.</strong> When you visit our
              website, we automatically collect technical data such as IP address,
              browser type and version, device type, operating system, referring URL,
              pages viewed, time on page, click and scroll behavior, and approximate
              geographic location derived from your IP.
            </p>
          </Section>

          <Section number={2} title="How We Use Your Information">
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to inquiries, send quotes, and schedule services.</li>
              <li>Dispatch technicians and coordinate make-ready, maintenance, and renovation work.</li>
              <li>Send invoices, receipts, and service follow-ups.</li>
              <li>
                Manage leads and client communications through our customer relationship
                management platform (GoHighLevel CRM), including automated email and SMS
                workflows that you have consented to receive.
              </li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Comply with legal, tax, accounting, and contractual obligations.</li>
              <li>Prevent fraud, enforce our Terms, and protect our rights.</li>
            </ul>
          </Section>

          <Section number={3} title="SMS and Text Message Communications">
            <p>
              By submitting a form or providing your phone number, you consent to receive
              transactional and marketing text messages from <BrandName variant="dark" /> at the number
              provided, including messages sent via automated systems. Consent is not a
              condition of purchase. Message frequency varies. Message and data rates may
              apply.
            </p>
            <p>
              <strong>Opt out at any time:</strong> reply <strong>STOP</strong> to any
              text message to unsubscribe. Reply <strong>HELP</strong> for assistance, or
              contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="underline hover:text-[#1A1A1A]/70">
                {SITE.email}
              </a>
              . We comply with the Telephone Consumer Protection Act (TCPA) and applicable
              CTIA messaging guidelines. Mobile opt-in data and consent records are not
              shared with third parties or affiliates for marketing purposes.
            </p>
          </Section>

          <Section number={4} title="Sharing of Information">
            <p>
              We do not sell your personal information. We share information only with
              trusted service providers that help us operate our business, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>GoHighLevel</strong> — CRM, email, SMS, and lead management.
              </li>
              <li>
                <strong>Google Analytics 4 (GA4)</strong> — website analytics and traffic
                measurement.
              </li>
              <li>
                <strong>Microsoft Clarity</strong> — session replay and heatmaps used to
                improve site usability.
              </li>
              <li>
                <strong>QuickBooks (Intuit)</strong> — invoicing, payments, and accounting.
              </li>
              <li>
                <strong>Vetted subcontractors and trade partners</strong> — limited to the
                information necessary to perform the service you requested at your property.
              </li>
            </ul>
            <p>
              We may also disclose information when required by law, subpoena, or court
              order, or to protect the rights, property, or safety of <BrandName variant="dark" />, our
              clients, or others.
            </p>
          </Section>

          <Section number={5} title="Cookies and Tracking Technologies">
            <p>
              Our website uses cookies and similar tracking technologies to remember your
              preferences, measure traffic, and improve performance. We use{" "}
              <strong>Google Analytics 4</strong> to understand how visitors use the site
              and <strong>Microsoft Clarity</strong> to record anonymized session
              interactions and heatmaps.
            </p>
            <p>
              You can control cookies through your browser settings or opt out of GA4 via
              the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="underline hover:text-[#1A1A1A]/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-Out Browser Add-on
              </a>
              . Disabling cookies may affect site functionality.
            </p>
          </Section>

          <Section number={6} title="Data Retention">
            <p>
              We retain personal information for as long as needed to fulfill the purposes
              outlined in this policy and to comply with our legal obligations.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Service, invoicing, and tax records:</strong> retained for at
                least <strong>seven (7) years</strong> in accordance with Florida and
                federal record-keeping requirements.
              </li>
              <li>
                <strong>Website analytics data:</strong> retained for up to{" "}
                <strong>26 months</strong> in Google Analytics 4, after which it is
                automatically deleted.
              </li>
              <li>
                <strong>Marketing communication records:</strong> retained until you
                unsubscribe or request deletion.
              </li>
            </ul>
          </Section>

          <Section number={7} title="Your Rights and Choices">
            <p>You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>
                Request deletion of your personal information, subject to legal retention
                requirements.
              </li>
              <li>
                Opt out of marketing emails by clicking &ldquo;unsubscribe&rdquo; in any
                message.
              </li>
              <li>Opt out of SMS messages by replying STOP.</li>
              <li>Withdraw consent for future processing where consent is the legal basis.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="underline hover:text-[#1A1A1A]/70">
                {SITE.email}
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section number={8} title="Security">
            <p>
              We use commercially reasonable administrative, technical, and physical
              safeguards to protect personal information from unauthorized access, loss,
              misuse, or disclosure. This includes encrypted data transmission (HTTPS),
              access controls on our CRM and accounting systems, and confidentiality
              agreements with subcontractors. No method of transmission over the internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section number={9} title="Children's Privacy">
            <p>
              Our website and services are not directed to children under the age of 13.
              We do not knowingly collect personal information from children under 13. If
              you believe a child has provided us with personal information, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="underline hover:text-[#1A1A1A]/70">
                {SITE.email}
              </a>{" "}
              and we will delete it promptly.
            </p>
          </Section>

          <Section number={10} title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites, including social
              media platforms, vendor sites, and partner resources. We are not
              responsible for the privacy practices or content of those sites. We
              encourage you to review the privacy policies of any third-party site you
              visit.
            </p>
          </Section>

          <Section number={11} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in
              our practices, technologies, legal requirements, or business operations.
              Updates will be posted on this page with a revised &ldquo;Last updated&rdquo;
              date. Material changes will be communicated through prominent notice on the
              website or by email where appropriate. Your continued use of the site or
              services after changes take effect constitutes acceptance of the updated
              policy.
            </p>
          </Section>

          <Section number={12} title="Contact Us">
            <p>
              Questions, concerns, or requests regarding this Privacy Policy or your
              personal information can be directed to:
            </p>
            <p>
              <strong><BrandName variant="dark" /> Group LLC</strong>
              <br />
              Orlando, Florida
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="underline hover:text-[#1A1A1A]/70">
                {SITE.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={phoneHref} className="underline hover:text-[#1A1A1A]/70">
                {phone}
              </a>
            </p>
            <p>
              Website:{" "}
              <a href={SITE.url} className="underline hover:text-[#1A1A1A]/70">
                {SITE.url.replace(/^https?:\/\//, "")}
              </a>
            </p>
            <p>Available 24/7 for emergencies.</p>
          </Section>
        </article>
      </div>
    </>
  );
};

export default PrivacyPage;
