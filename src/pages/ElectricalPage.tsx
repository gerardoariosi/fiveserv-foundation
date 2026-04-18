import { Link } from "react-router-dom";
import {
  Phone,
  Zap,
  Plug,
  Lightbulb,
  Cable,
  Fan,
  ShieldCheck,
  Clock,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Siren,
  Power,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, CITIES } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";

const SERVICES_GRID = [
  { icon: Plug, title: "Outlet & Switch Repair", desc: "Dead outlets, GFCI failures, scorched switches, USB outlets, smart switches." },
  { icon: Power, title: "Panel Upgrades & Breakers", desc: "Tripping breakers, panel swaps, sub-panels, code corrections, capacity upgrades." },
  { icon: Lightbulb, title: "Lighting Installation", desc: "Hallways, common areas, exterior, parking lots, recessed, fixtures, dimmers." },
  { icon: Cable, title: "Wiring Repair & Replacement", desc: "Failed runs, aluminum repair, knob-and-tube remediation, new circuits, rewires." },
  { icon: Fan, title: "Ceiling Fan Installation", desc: "Bedrooms, living rooms, patios. New box, mount, wire, balance, test." },
  { icon: AlertTriangle, title: "Emergency Electrical 24/7", desc: "No power, sparking outlets, burning smell, breaker won't reset. We answer. We move." },
];

const ELECTRICAL_FAQS = [
  {
    q: "Do you offer emergency electrical services?",
    a: `Yes. ${SITE.brand} answers the phone 24/7 — no power, sparking outlets, burning smell, breaker that won't reset. Real human, day or night, weekends and holidays. On-site response within 2 hours across the Orlando metro core.`,
  },
  {
    q: "Are your electricians licensed in Florida?",
    a: `Yes. All electrical work is performed by Florida-licensed electrical contractors under ${SITE.brand} coordination. We handle dispatch, scope, scheduling, and one consolidated invoice. [LICENSES_AND_INSURANCE].`,
  },
  {
    q: "How fast do you respond to an electrical emergency?",
    a: `2-hour on-site response 24/7 across the Orlando metro core (Orlando, Kissimmee, Winter Park, Altamonte Springs, Apopka, Ocoee, Winter Garden). Outer-ring cities respond within 4 hours for true emergencies.`,
  },
  {
    q: "Do you handle electrical work for multifamily properties?",
    a: `Yes — multifamily is our core business. ${SITE.brand} works with property managers across single buildings up to 500-unit communities in Central Florida. One point of contact, one invoice cycle, zero vendor chasing.`,
  },
  {
    q: "What electrical services do you offer?",
    a: `Outlet and switch repair, panel upgrades and breakers, lighting installation, wiring repair and replacement, ceiling fan installation, EV charger setup, code corrections, and 24/7 emergency electrical.`,
  },
  {
    q: "How do I submit an electrical work order?",
    a: `Call ${SITE.phone}, email ${SITE.email}, or fill out the contact form on this page. PM clients can submit batch work orders in a single email — we triage by urgency and confirm scheduling within 24 hours.`,
  },
  {
    q: "Do you provide one invoice for electrical work?",
    a: `Yes. ${SITE.brand} sends one consolidated invoice — no surprise charges, no per-trade billing. Line-itemed by unit, building, or work order so your accounting team can code it cleanly.`,
  },
  {
    q: "What cities do you serve for electrical services?",
    a: `We provide electrical services across all 18 Central Florida cities we cover: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.`,
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

const ElectricalPage = () => {
  const path = "/electrical";
  const title = "Electrical Services Central Florida | Licensed & Insured | FiveServ";
  const description =
    "Licensed electrical services for multifamily properties across Central Florida. Emergency response 24/7. One call, one invoice. FiveServ Property Solutions.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Electrical", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "maintenance",
          name: "Electrical Services",
          short: "Licensed electrical for multifamily and residential.",
          description:
            "Licensed electrical services for multifamily properties and homes across Central Florida. Outlet repair, panel upgrades, lighting installation, wiring repair, and 24/7 emergency response.",
          cta: "Get an Electrical Quote",
        }}
        faqs={ELECTRICAL_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            {SITE.brand} Property Solutions
          </p>
          <h1 className="mt-3 font-display text-4xl text-brand-black sm:text-5xl lg:text-6xl">
            Electrical Services for Property Managers in
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

          <p className="mt-6 max-w-2xl text-lg text-gray-700">
            Outlets. Panels. Lighting. Wiring. Emergencies. One call. We answer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get an Electrical Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock
            answer={`${SITE.brand} provides licensed electrical services for multifamily properties across Central Florida. Services include outlet repair, panel upgrades, lighting installation, wiring repair, and 24/7 emergency electrical. One call, one invoice. Serving Orlando, Kissimmee, Sanford, Winter Park, and 14 more cities.`}
          />
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">Liability & Safety</p>
              <h2 className="mt-3 font-display text-3xl text-brand-black sm:text-4xl">
                A failed outlet is a{" "}
                <span className="text-brand-gold">fire risk and a lawsuit</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Electrical issues in rental properties create real liability and safety risks. Sparking outlets,
                overloaded panels, failed wiring — every hour of delay raises the stakes for residents and the
                portfolio. {SITE.brand}'s licensed electricians respond within 2 hours, with documentation insurance
                carriers accept.
              </p>
            </div>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
              <div className="flex items-center gap-4">
                <Siren className="h-10 w-10 text-brand-gold" />
                <div>
                  <p className="font-display text-2xl text-brand-black">2-Hour Response</p>
                  <p className="text-sm text-gray-600">Across the Orlando metro core, 24/7</p>
                </div>
              </div>
              <a
                href={`tel:${SITE.phone}`}
                className="cta-gold mt-6 flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide"
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
            <h2 className="font-display text-3xl text-brand-black sm:text-4xl">
              Electrical Services <span className="text-brand-gold">We Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Six core service lines. In-house coordination. Florida-licensed electricians on every job.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_GRID.map((s) => (
                <article key={s.title} className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-brand-black">{s.title}</h3>
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                  <Clock className="h-8 w-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">
                    Response Time
                  </span>
                  <h2 className="mt-3 font-display text-3xl text-brand-black sm:text-4xl">
                    Emergency electrical response within{" "}
                    <span className="text-brand-gold">2 hours</span> across Central Florida
                  </h2>
                  <p className="mt-3 text-gray-700">
                    24/7 dispatch. Real human answers the phone. Truck rolling within minutes for power emergencies in
                    Orlando, Kissimmee, Winter Park, Altamonte Springs, Apopka, Ocoee, and Winter Garden.
                  </p>
                </div>
                <a
                  href={`tel:${SITE.phone}`}
                  className="cta-gold flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide whitespace-nowrap"
                >
                  <Phone className="h-5 w-5" /> {SITE.phone}
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Licensed Matters */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <ShieldCheck className="h-12 w-12 text-brand-gold" />
              <p className="mt-6 font-display text-2xl text-brand-black">
                One invoice. <span className="text-brand-gold">Zero liability.</span>
              </p>
              <p className="mt-3 text-gray-700">
                You don't track the electrician's license. You don't pull the permit. You don't carry the risk.
                {" "}{SITE.brand} does it all — you get one invoice and full accountability.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">Why Licensed Matters</p>
              <h2 className="mt-3 font-display text-3xl text-brand-black sm:text-4xl">
                All electrical performed by{" "}
                <span className="text-brand-gold">Florida-licensed contractors</span>
              </h2>
              <p className="mt-4 text-gray-700">
                In Florida, electrical work above a low threshold legally requires a licensed electrical contractor.
                Insurance carriers require it for fire and liability claims. {SITE.brand} coordinates licensed
                electricians on every job — you get the protection of licensed work plus the simplicity of a single
                point of contact.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                  Licensed electrical contractors on every job
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                  Pulled permits when required by code
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                  Insurance- and liability-claim-ready documentation
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
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
            <h2 className="font-display text-3xl text-brand-black sm:text-4xl">
              Electrical Coverage —{" "}
              <span className="text-brand-gold">18 Cities Across Central Florida</span>
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
                    <Zap className="h-4 w-4 text-brand-gold" />
                    <span className="font-bold text-brand-black">
                      Electrical {c.name}, {c.state}
                    </span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-gold/80">
                    {c.responseTime}
                  </span>
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={ELECTRICAL_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-16">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-brand-black">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { to: "/maintenance", label: "Property Maintenance" },
                  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
                  { to: "/plumbing", label: "Plumbing Services" },
                  { to: "/hvac", label: "HVAC Services" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                      <ArrowRight className="h-4 w-4" /> {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                    <ArrowRight className="h-4 w-4" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-brand-black">Electrical in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                      <ArrowRight className="h-4 w-4" /> Electrical in {c.name}, FL
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

export default ElectricalPage;
