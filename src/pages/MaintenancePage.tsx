import { Link } from "react-router-dom";
import { Phone, Wrench, Droplets, Zap, Wind, Hammer, Paintbrush, ClipboardList, ShieldCheck, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { MAINTENANCE_FAQS } from "@/lib/service-faqs";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import SolutionSection from "@/components/fiveserv/SolutionSection";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import LeadMagnetSection from "@/components/fiveserv/LeadMagnetSection";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";

const TRADES = [
  { icon: Droplets, title: "Plumbing", desc: "Leaks, drains, water heaters, fixtures." },
  { icon: Zap, title: "Electrical", desc: "Outlets, breakers, lighting, ceiling fans." },
  { icon: Wind, title: "HVAC", desc: "AC repair, filter changes, thermostats, no-cool calls." },
  { icon: Hammer, title: "Drywall &amp; Carpentry", desc: "Holes, doors, trim, cabinetry." },
  { icon: Paintbrush, title: "Painting &amp; Touch-Ups", desc: "Hallways, units, common areas." },
  { icon: ClipboardList, title: "General Work Orders", desc: "Whatever's on the resident portal — done." },
];

const RESPONSE = [
  { icon: AlertTriangle, badge: "EMERGENCY", title: "2-Hour On-Site", body: "24/7 — water, power, AC, lockouts. Call and we move." },
  { icon: Clock, badge: "ROUTINE", title: "24-Hour Schedule", body: "Standard work orders scheduled within 1 business day." },
  { icon: ShieldCheck, badge: "PREVENTIVE", title: "Quarterly Plans", body: "Catch problems before residents call." },
];

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const MaintenancePage = () => {
  const path = "/maintenance";
  const title = "Property Maintenance Central Florida | 24/7 Emergency | FiveServ";
  const description =
    "Property maintenance Central Florida. FiveServ handles plumbing, electrical, HVAC, drywall, and 24/7 emergency work orders for multifamily property managers. 2-hour emergency response.";
  const service = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Maintenance", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={MAINTENANCE_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            {SITE.brand} Property Solutions
          </p>
          <h1 className="mt-3 font-display text-4xl text-brand-white sm:text-5xl lg:text-6xl">
            Property Maintenance Services for Property Managers in
            <span className="block text-brand-gold">Central Florida</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-white/90">
            Plumbing. Electrical. HVAC. Drywall. 24/7 emergencies. One call. We answer.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-brand-white">
            {["24/7 Emergency", "2-Hour Response", "Licensed & Insured", "Portfolio-Ready", "One Invoice"].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Maintenance Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock
            answer={`${SITE.brand} provides 24/7 property maintenance for multifamily communities in Central Florida. Plumbing, electrical, HVAC, drywall, painting, and general work orders. Emergency response within 2 hours. One invoice across the entire portfolio. Licensed and insured in Florida.`}
          />
        </div>
      </section>

      {/* Problem / Solution */}
      <SolutionSection />

      {/* What We Handle — trades */}
      <section className="bg-brand-gray">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
              What We <span className="text-brand-gold">Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-brand-white/80">
              Every trade. One call. In-house team plus licensed contractors under our coordination.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TRADES.map((t) => (
                <article key={t.title} className="hover-card rounded-lg border border-brand-gray bg-brand-black p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
                    <t.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-brand-white" dangerouslySetInnerHTML={{ __html: t.title }} />
                  <p className="mt-2 text-brand-white/80">{t.desc}</p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Response Tiers */}
      <section className="bg-brand-black">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
              Response <span className="text-brand-gold">Times</span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {RESPONSE.map((r) => (
                <article key={r.title} className="hover-card rounded-lg border-2 border-brand-gold bg-brand-gray/30 p-6">
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                    {r.badge}
                  </span>
                  <r.icon className="mt-4 h-10 w-10 text-brand-gold" />
                  <h3 className="mt-3 font-display text-2xl text-brand-white">{r.title}</h3>
                  <p className="mt-2 text-brand-white/80">{r.body}</p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <StatsBar />

      {/* Lead Magnet */}
      <LeadMagnetSection />

      {/* FAQ */}
      <FaqAccordion faqs={MAINTENANCE_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-brand-gray">
        <div className="container py-16">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-brand-white">More from {SITE.brand}</h2>
              <ul className="mt-4 space-y-2">
                {(["make-ready", "renovations", "residential"] as const).map((slug) => {
                  const s = SERVICES.find((x) => x.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link to={`/${slug}`} className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                        <ArrowRight className="h-4 w-4" /> {s.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                    <ArrowRight className="h-4 w-4" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-brand-white">Maintenance in your city</h2>
              <ul className="mt-4 space-y-2">
                {(["orlando-fl", "kissimmee-fl", "sanford-fl"] as const).map((slug) => {
                  const name = slug.replace("-fl", "").split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
                  return (
                    <li key={slug}>
                      <Link to={`/maintenance/${slug}`} className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                        <ArrowRight className="h-4 w-4" /> Maintenance in {name}, FL
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default MaintenancePage;
