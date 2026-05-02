import { Link } from "react-router-dom";
import {
  Phone,
  Wind,
  Snowflake,
  Wrench,
  Filter,
  Gauge,
  ShieldCheck,
  Clock,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Siren,
  ThermometerSun,
  Scale,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, CITIES } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";

const SERVICES_GRID = [
  { icon: Snowflake, title: "AC Repair & Diagnostics", desc: "No-cool calls, weak airflow, frozen coils, capacitors, refrigerant. Diagnose, fix, document." },
  { icon: Wrench, title: "HVAC Unit Replacement", desc: "Full system swaps, condensers, air handlers, mini-splits. Permits and disposal handled." },
  { icon: Filter, title: "Filter & Coil Maintenance", desc: "Quarterly filter changes, coil cleaning, drain line flushing — across the entire portfolio." },
  { icon: Wind, title: "Duct Cleaning & Repair", desc: "Sealing leaks, replacing crushed runs, cleaning systems for IAQ and efficiency." },
  { icon: Gauge, title: "Thermostat Installation", desc: "Standard, programmable, smart, sensor-based. Wiring corrections and system pairing." },
  { icon: AlertTriangle, title: "Emergency HVAC 24/7", desc: "No cool in Florida heat is an emergency. We answer. We move. 2-hour response." },
];

const HVAC_FAQS = [
  {
    q: "Do you offer emergency HVAC services in Florida?",
    a: `Yes. ${SITE.brand} answers the phone 24/7 — no cool, no heat, water from the air handler, breaker tripping the AC. Real human, day or night, weekends and holidays. On-site response within 2 hours across the Orlando metro core.`,
  },
  {
    q: "Are your HVAC technicians licensed in Florida?",
    a: `Yes. All HVAC work is performed by Florida-licensed Class A or B mechanical contractors under ${SITE.brand} coordination. We handle dispatch, scope, scheduling, EPA-certified refrigerant work, and one consolidated invoice. FiveServ Property Solutions LLC is fully licensed and insured in the state of Florida.`,
  },
  {
    q: "How fast do you respond to an AC emergency?",
    a: `2-hour on-site response 24/7 across the Orlando metro core (Orlando, Kissimmee, Winter Park, Altamonte Springs, Apopka, Ocoee, Winter Garden). Outer-ring cities respond within 4 hours for true emergencies.`,
  },
  {
    q: "Is a landlord required to provide AC in Florida?",
    a: `Florida Statute 83.51 requires landlords to maintain habitable conditions, and most local codes plus virtually every Florida lease treat working air conditioning as a required habitability standard. Failure to repair AC promptly can trigger lease violations, rent withholding, and code enforcement. ${SITE.brand} keeps your portfolio compliant.`,
  },
  {
    q: "What HVAC services do you offer for apartments?",
    a: `AC repair and diagnostics, full unit replacement, condenser and air handler swaps, mini-splits, filter and coil maintenance programs, duct cleaning and repair, thermostat installation (standard, programmable, smart), and 24/7 emergency HVAC.`,
  },
  {
    q: "How do I submit an HVAC work order?",
    a: `Call ${SITE.phone}, email ${SITE.email}, or fill out the contact form on this page. PM clients can submit batch work orders in a single email — we triage by urgency (no-cool calls jump the queue) and confirm scheduling within 24 hours.`,
  },
  {
    q: "Do you handle HVAC for multiple properties?",
    a: `Yes. ${SITE.brand} runs portfolio-wide HVAC programs — quarterly filter changes, preventive maintenance, on-call repair, and capital replacements — across single buildings up to 500-unit communities in Central Florida. One point of contact, one invoice cycle.`,
  },
  {
    q: "What cities do you serve for HVAC services?",
    a: `We provide HVAC services across all 18 Central Florida cities we cover: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.`,
  },
];

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const HvacPage = () => {
  const path = "/hvac";
  const title = "HVAC Services Central Florida | Licensed & Insured | FiveServ";
  const description =
    "Licensed HVAC services for multifamily properties across Central Florida. Emergency response 24/7. One call, one invoice. FiveServ Property Solutions.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "HVAC", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "maintenance",
          name: "HVAC Services",
          short: "Licensed HVAC for multifamily and residential.",
          description:
            "Licensed HVAC services for multifamily properties and homes across Central Florida. AC repair, unit replacement, filter and coil maintenance, duct cleaning, thermostats, and 24/7 emergency response.",
          cta: "Get an HVAC Quote",
        }}
        faqs={HVAC_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — <BrandName variant="light" /> Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            HVAC Services for Property Managers in
            <span className="block text-brand-gold">Central Florida</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <ShieldCheck className="h-3.5 w-3.5" /> Licensed & Insured
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <AlertTriangle className="h-3.5 w-3.5" /> 24/7 Emergency
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            AC repair. Unit replacement. Filters. Ducts. No-cool emergencies. One call. We answer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get an HVAC Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock hidden
            tone="dark"
            directAnswer="FiveServ Property Solutions provides licensed HVAC services for multifamily properties across Central Florida, critical under Florida law requiring landlords to maintain working air conditioning year-round."
            supportingFacts="Services include AC repair, unit replacement, filter maintenance, duct cleaning, and 24/7 emergency HVAC. Response within 2 hours. Serving Orlando and 17 more cities."
          />
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— Florida Heat Reality</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                A broken AC in July is a{" "}
                <span className="text-gray-900">code violation waiting to happen</span>
              </h2>
              <p className="mt-4 text-gray-700">
                In Florida heat, a broken AC in a rental unit means angry residents, lease violations, code enforcement
                calls, and potential legal exposure. <BrandName variant="dark" />'s HVAC technicians respond within 2 hours — keeping
                residents cool and your portfolio compliant.
              </p>
            </div>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
              <div className="flex items-center gap-4">
                <ThermometerSun className="h-10 w-10 text-gray-900" />
                <div>
                  <p className="font-display font-semibold text-2xl text-gray-900">2-Hour Response</p>
                  <p className="text-sm text-gray-600">No-cool calls, 24/7, across Central Florida</p>
                </div>
              </div>
              <a
                href={`tel:${SITE.phone}`}
                className="cta-gold btn-shimmer mt-6 flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide"
              >
                <Phone className="h-5 w-5" /> Call {SITE.phone}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              HVAC Services <span className="text-gray-900">We Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Six core service lines. In-house coordination. Florida-licensed mechanical contractors on every job.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_GRID.map((s) => (
                <article key={s.title} className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/15 text-gray-900">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-xl text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-700">{s.desc}</p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Response Time section */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[auto,1fr,auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-gray-900">
                  <Clock className="h-8 w-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                    Response Time
                  </span>
                  <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                    Emergency HVAC response within{" "}
                    <span className="text-gray-900">2 hours</span> — critical in Florida heat
                  </h2>
                  <p className="mt-3 text-gray-700">
                    24/7 dispatch. Real human answers the phone. Truck rolling within minutes for no-cool calls in
                    Orlando, Kissimmee, Winter Park, Altamonte Springs, Apopka, Ocoee, and Winter Garden.
                  </p>
                </div>
                <a
                  href={`tel:${SITE.phone}`}
                  className="cta-gold btn-shimmer flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide whitespace-nowrap"
                >
                  <Phone className="h-5 w-5" /> {SITE.phone}
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Florida-specific compliance */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <Scale className="h-12 w-12 text-gray-900" />
              <p className="mt-6 font-display font-semibold text-2xl text-gray-900">
                Compliant. <span className="text-gray-900">Year-round.</span>
              </p>
              <p className="mt-3 text-gray-700">
                $<BrandName variant="dark" /> keeps your portfolio inside the lines on AC habitability — quarterly filter programs,
                rapid no-cool response, full documentation for any code or insurance review.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— Florida Compliance</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Florida law requires landlords to{" "}
                <span className="text-gray-900">maintain working AC</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Under Florida Statute 83.51 and most local codes, working air conditioning is part of the habitability
                standard landlords must maintain. Slow AC repair triggers lease disputes, rent withholding, code
                enforcement, and fair-housing exposure. <BrandName variant="dark" /> keeps you compliant — and your residents
                comfortable — year-round.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Florida-licensed mechanical contractors, EPA-certified refrigerant
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  2-hour no-cool response in the Orlando metro core
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Documented work orders for habitability and insurance files
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  One consolidated invoice — coded by unit
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      <StatsBar />

      {/* Coverage — all 18 cities */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              HVAC Coverage —{" "}
              <span className="text-gray-900">18 Cities Across Central Florida</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Same-day response across the Orlando metro core. Within 24 hours across the rest of the region.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/maintenance-${c.slug}`}
                  className="hover-card group flex items-center justify-between rounded-md border border-gray-100 bg-white shadow-sm px-4 py-3"
                >
                  <span className="flex items-center gap-3">
                    <Snowflake className="h-4 w-4 text-gray-900" />
                    <span className="font-semibold text-gray-900">
                      HVAC {c.name}, {c.state}
                    </span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-700">
                    {c.responseTime}
                  </span>
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={HVAC_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { to: "/maintenance", label: "Property Maintenance" },
                  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
                  { to: "/plumbing", label: "Plumbing Services" },
                  { to: "/electrical", label: "Electrical Services" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                      <ArrowRight className="h-4 w-4" /> {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                    <ArrowRight className="h-4 w-4" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">HVAC in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                      <ArrowRight className="h-4 w-4" /> HVAC in {c.name}, FL
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default HvacPage;
