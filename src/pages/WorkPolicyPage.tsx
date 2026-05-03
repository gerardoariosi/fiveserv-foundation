import Seo from "@/lib/Seo";
import { SITE } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";

/**
 * Work Policy — operational standards & field procedures.
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

export const WorkPolicyPage = () => {
  return (
    <>
      <Seo
        title="Work Policy — FiveServ Property Solutions"
        description="FiveServ Property Solutions operational standards and field procedures: work authorization, scheduling, quality control, safety, and invoicing."
        path="/work-policy"
      />

      <div className="bg-white text-[#1A1A1A]">
        <article className="mx-auto max-w-3xl px-6 py-20 sm:py-20">
          <header className="mb-10">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              Operational Standards &amp; Field Procedures — Version 1.0 — 2025
            </p>
            <h1 className="mt-3 font-display text-4xl text-[#1A1A1A] sm:text-5xl">
              Work Policy
            </h1>
            <div className="mt-6 h-[2px] w-24 bg-[#FFD700]" aria-hidden="true" />
            <p className="mt-6 font-body text-sm text-[#1A1A1A]/70">
              Last updated: May 2025
            </p>
          </header>

          <Section number={1} title="Work Authorization">
            <p>
              No work shall begin without a written work order, signed contract, or written authorization from an
              authorized Client representative. Work orders must include: property address, unit number, scope of
              work, agreed pricing, and scheduled start date. Verbal authorizations are not sufficient. Emergency
              repairs may be authorized verbally with written confirmation required within 24 hours.
            </p>
          </Section>

          <Section number={2} title="Scheduling & Arrival">
            <p>
              <BrandName variant="dark" /> commits to arriving within the scheduled service window. Standard windows:
              Morning (8:00 AM – 12:00 PM) | Afternoon (12:00 PM – 5:00 PM) | Emergency (24/7). If <BrandName variant="dark" />
              {" "}anticipates a delay exceeding 30 minutes, the Client will be notified before the scheduled arrival
              time.
            </p>
          </Section>

          <Section number={3} title="Make-Ready Standards">
            <p>
              Every make-ready follows a standardized checklist: full interior painting, cleaning, touch-up
              repairs, door hardware and lock re-keying, appliance inspection, HVAC filter replacement, and final
              photo inspection report. Delivery: 5 business days guaranteed from confirmed start date for units in
              standard condition.
            </p>
          </Section>

          <Section number={4} title="Field Personnel Standards">
            <p>
              All <BrandName variant="dark" /> team members must: wear <BrandName variant="dark" /> uniform while on site;
              carry company identification; maintain a clean and professional work area; communicate respectfully
              with all parties; never access areas outside the defined scope; report any pre-existing damage
              before beginning work.
            </p>
          </Section>

          <Section number={5} title="Quality Control">
            <p>
              Every completed job is subject to quality review before sign-off. For make-readies, a final photo
              inspection report is mandatory. Client has 48 hours from delivery to report workmanship issues,
              which will be addressed at no additional charge under warranty terms.
            </p>
          </Section>

          <Section number={6} title="Safety & Site Conduct">
            <p>
              All team members follow applicable OSHA standards and Florida safety regulations. No alcohol or
              illegal substances are permitted on any job site. All electrical, plumbing, HVAC, and structural
              work is performed by licensed and insured subcontractors. Job sites must be left clean and secure at
              the end of each workday.
            </p>
          </Section>

          <Section number={7} title="Subcontractor Standards">
            <p>
              Licensed subcontractors operate under <BrandName variant="dark" /> coordination and are held to the same
              standards as direct employees. All subcontractors carry valid Florida licenses and general liability
              insurance. Client receives a single consolidated invoice from <BrandName variant="dark" /> regardless of how
              many trades were involved.
            </p>
          </Section>

          <Section number={8} title="Change Orders">
            <p>
              Any work outside the original agreed scope must be communicated to the Client immediately. No
              additional work shall proceed without a written change order approved by the Client. Change orders
              must include: description of additional work, estimated cost, and impact on timeline.
            </p>
          </Section>

          <Section number={9} title="Invoicing">
            <p>
              Invoices are issued upon completion of each work order or project milestone. Each invoice includes:
              property address, unit number, service description, labor and materials breakdown, and applicable
              warranty period. Payment is due within 15 days of invoice date.
            </p>
          </Section>

          <Section number={10} title="Communication Standards">
            <p>
              <BrandName variant="dark" /> responds to all Client communications within 2 business hours during standard
              hours (8:00 AM – 6:00 PM Monday–Friday). Emergency communications are answered 24/7. Project updates
              are provided proactively — Clients are not required to follow up on active work orders.
            </p>
          </Section>
        </article>
      </div>
    </>
  );
};

export default WorkPolicyPage;
