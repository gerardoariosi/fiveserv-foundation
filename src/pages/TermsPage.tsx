import Seo from "@/lib/Seo";
import { SITE } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";

/**
 * Terms & Conditions — light-themed legal document page.
 * Covers both B2B (property managers) and B2C (residential) contacts.
 * Linked from footer + all form consent checkboxes.
 */
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

export const TermsPage = () => {
  const phone = SITE.phone;

  return (
    <>
      <Seo
        title="Terms & Conditions — FiveServ Property Solutions"
        description="FiveServ Property Solutions terms of service, communication consent, and privacy policy for property managers and residential clients in Central Florida."
        path="/terms"
      />

      {/* Override dark theme: light background + dark text scoped to this page */}
      <div className="bg-white text-[#1A1A1A]">
        <article className="mx-auto max-w-3xl px-6 py-20 sm:py-20">
          {/* Page heading */}
          <header className="mb-10">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Legal
            </p>
            <h1 className="mt-3 font-display text-4xl text-[#1A1A1A] sm:text-5xl">
              Terms <span className="font-sans font-normal">&amp;</span> Conditions
            </h1>
            <div className="mt-6 h-[2px] w-24 bg-[#FFD700]" aria-hidden="true" />
            <p className="mt-6 font-body text-sm text-[#1A1A1A]/70">
              Last updated: April 2025
            </p>
          </header>

          <Section number={1} title="Introduction">
            <p>
              <strong><BrandName variant="dark" /> Group LLC</strong> — Orlando, Florida.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@fiveserv.net" className="underline hover:text-[#1A1A1A]/70">
                info@fiveserv.net
              </a>{" "}
              | Website:{" "}
              <a href="https://fiveserv.net" className="underline hover:text-[#1A1A1A]/70">
                fiveserv.net
              </a>
            </p>
            <p>
              These Terms &amp; Conditions govern your use of this website and the services
              provided by <BrandName variant="dark" /> Group LLC. By submitting a form, requesting a quote, or
              engaging <BrandName variant="dark" />, you agree to the terms below.
            </p>
          </Section>

          <Section number={2} title="Communication Consent">
            <p>
              By submitting any form on this website, the user agrees to be contacted by
              <BrandName variant="dark" /> Group LLC via phone, email, or SMS. Message frequency varies.
              Reply <strong>STOP</strong> to unsubscribe from SMS. Standard message and
              data rates may apply.
            </p>
          </Section>

          <Section number={3} title="Services">
            <p>
              <BrandName variant="dark" /> provides property maintenance, make-ready and unit turn services,
              repairs, renovations, and residential maintenance in Central Florida.
            </p>
          </Section>

          <Section number={4} title="No Guarantee of Availability">
            <p>
              Service availability is subject to scheduling, market conditions, and
              geographic coverage. <BrandName variant="dark" /> will notify the client if services are
              unavailable.
            </p>
          </Section>

          <Section number={5} title="Pricing and Quotes">
            <p>
              All quotes are estimates provided before work begins. Final invoices
              reflect actual work completed and approved by the client.
            </p>
          </Section>

          <Section number={6} title="Privacy">
            <p>
              <BrandName variant="light" /> does not sell or share personal information with third parties.
              Information collected is used solely to respond to service requests.
            </p>
          </Section>

          <Section number={7} title="Contact">
            <p>
              Email:{" "}
              <a href="mailto:info@fiveserv.net" className="underline hover:text-[#1A1A1A]/70">
                info@fiveserv.net
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="underline hover:text-[#1A1A1A]/70">
                {phone}
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://fiveserv.net" className="underline hover:text-[#1A1A1A]/70">
                fiveserv.net
              </a>
            </p>
            <p>Orlando, FL — Available 24/7 for emergencies.</p>
          </Section>
        </article>
      </div>
    </>
  );
};

export default TermsPage;
