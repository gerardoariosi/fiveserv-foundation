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
              Last updated: May 2025
            </p>
          </header>

          <Section number={1} title="Agreement to Terms">
            <p>
              By requesting, scheduling, or receiving any service from <BrandName variant="dark" /> Property Solutions LLC,
              you agree to be bound by these Terms and Conditions. These terms apply to all services
              including make-readies, unit turns, maintenance, repairs, renovations, and residential services.
              These Terms constitute a legally binding agreement. If you do not agree, do not engage our services.
            </p>
          </Section>

          <Section number={2} title="Communication Consent">
            <p>
              By submitting any form on this website, you agree to be contacted by <BrandName variant="dark" /> Property
              Solutions LLC via phone, email, or SMS. Message frequency varies. Reply <strong>STOP</strong> to
              unsubscribe from SMS. Standard message and data rates may apply.
            </p>
          </Section>

          <Section number={3} title="Services Provided">
            <p>
              <BrandName variant="dark" /> provides property maintenance, make-ready and unit turn services, general
              repairs, CapEx and renovation projects, and residential maintenance across Central Florida. All
              services are scoped and agreed upon in writing before work begins. Any changes to the agreed scope
              must be documented and approved by both parties in writing.
            </p>
          </Section>

          <Section number={4} title="Make-Ready Guarantee">
            <p>
              <BrandName variant="dark" /> guarantees delivery of standard make-ready units within 5 business days from
              the confirmed start date, provided that: (a) the unit is fully vacant and accessible at the agreed
              start time; (b) the scope of work has been agreed upon in writing; (c) no additional scope is added
              after work begins without a signed change order; and (d) all required materials and access are
              available. The 5-day guarantee does not apply to units requiring extensive renovation, structural
              repairs, or permits.
            </p>
          </Section>

          <Section number={5} title="Warranties">
            <p>
              <BrandName variant="dark" /> warrants the quality of all completed work as follows: Make-Ready and Unit
              Turns: 30-day workmanship warranty. General Repairs and Maintenance: 30-day workmanship warranty on
              labor. Paint and Drywall: 60-day warranty. CapEx and Renovation Projects: 90-day workmanship
              warranty unless otherwise specified in the project contract. Warranties cover defects in workmanship
              only and do not cover tenant misuse, natural disasters, or pre-existing conditions.
            </p>
          </Section>

          <Section number={6} title="Payment Terms">
            <p>
              All invoices are due within 15 days of the invoice date unless otherwise agreed in writing. For
              projects exceeding $2,500, <BrandName variant="dark" /> may require a deposit of up to 50% before work
              begins. Late payments are subject to a 1.5% monthly interest charge. Accepted payment methods: ACH
              bank transfer, check, or other methods agreed upon in writing.
            </p>
          </Section>

          <Section number={7} title="Cancellation Policy">
            <p>
              Client must provide a minimum of 24 hours advance notice to cancel or reschedule without penalty.
              Cancellations with less than 24 hours notice may be subject to a fee equal to 15% of the estimated
              job cost, or a minimum of $75, whichever is greater. Emergency cancellations due to property
              emergencies are exempt with written documentation.
            </p>
          </Section>

          <Section number={8} title="Client Responsibilities">
            <p>
              Client agrees to: (a) provide safe and unobstructed access at the scheduled time; (b) ensure
              utilities are active during service; (c) remove personal property and valuables before work begins;
              (d) provide accurate information about property conditions and known hazards; and (e) obtain all
              required permits when applicable.
            </p>
          </Section>

          <Section number={9} title="Limitation of Liability">
            <p>
              <BrandName variant="dark" /> total liability for any claim shall not exceed the total amount paid for the
              specific service. <BrandName variant="dark" /> is not liable for pre-existing conditions, consequential
              damages, loss of rent or income, or damage caused by third parties not under <BrandName variant="dark" />
              {" "}supervision.
            </p>
          </Section>

          <Section number={10} title="Contact">
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
