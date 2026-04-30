import { Link } from "react-router-dom";
import {
  Phone,
  Droplets,
  Wrench,
  Flame,
  ShieldCheck,
  Clock,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Siren,
  ToiletIcon,
  PipetteIcon,
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
  { icon: Droplets, title: "Leak Detection & Repair", desc: "Pinhole leaks, slab leaks, supply lines, fixtures. Found fast, fixed clean." },
  { icon: Wrench, title: "Pipe Replacement & Repair", desc: "Copper, PEX, PVC, cast iron. Repipes and section repairs for multifamily and homes." },
  { icon: Flame, title: "Water Heater Installation", desc: "Tank and tankless. Same-day swaps when stock allows. Electric and gas." },
  { icon: PipetteIcon, title: "Drain Cleaning & Unclogging", desc: "Sinks, tubs, mainlines. Cabling and hydro-jetting for serious blockages." },
  { icon: ToiletIcon, title: "Toilet & Fixture Repair", desc: "Running toilets, faulty flappers, faucets, shower valves, garbage disposals." },
  { icon: AlertTriangle, title: "Emergency Plumbing 24/7", desc: "Burst pipes, sewer backups, no-water calls. We answer. We move. 2-hour response." },
];

const PLUMBING_FAQS = [
  {
    q: "Do you offer emergency plumbing services?",
    a: `Yes. ${SITE.brand} answers the phone 24/7 — burst pipes, no water, sewer backups, leaks. Real human, day or night, weekends and holidays. On-site response within 2 hours across the Orlando metro core.`,
  },
  {
    q: "Are your plumbers licensed in Florida?",
    a: `Yes. All plumbing work is performed by Florida-licensed plumbing contractors under ${SITE.brand} coordination. We handle dispatch, scope, scheduling, and one consolidated invoice. [LICENSES_AND_INSURANCE].`,
  },
  {
    q: "How fast do you respond to a plumbing emergency?",
    a: `2-hour on-site response 24/7 across the Orlando metro core (Orlando, Kissimmee, Winter Park, Altamonte Springs, Apopka, Ocoee, Winter Garden). Outer-ring cities respond within 4 hours for true emergencies.`,
  },
  {
    q: "Do you handle plumbing for multifamily properties?",
    a: `Yes — multifamily is our core business. ${SITE.brand} works with property managers across single buildings up to 500-unit communities in Central Florida. One point of contact, one invoice cycle, zero vendor chasing.`,
  },
  {
    q: "What plumbing services do you offer?",
    a: `Leak detection and repair, pipe repair and replacement, water heater installation (tank and tankless), drain cleaning and unclogging, toilet and fixture repair, garbage disposals, shower valves, and 24/7 emergency plumbing.`,
  },
  {
    q: "How do I submit a plumbing work order?",
    a: `Call ${SITE.phone}, email ${SITE.email}, or fill out the contact form on this page. PM clients can submit batch work orders in a single email — we triage by urgency and confirm scheduling within 24 hours.`,
  },
  {
    q: "Do you provide one invoice for plumbing work?",
    a: `Yes. ${SITE.brand} sends one consolidated invoice — no surprise charges, no per-trade billing. Line-itemed by unit, building, or work order so your accounting team can code it cleanly.`,
  },
  {
    q: "What cities do you serve for plumbing?",
    a: `We provide plumbing services across all 18 Central Florida cities we cover: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.`,
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

const PlumbingPage = () => {
  const path = "/plumbing";
  const title = "Plumbing Services Central Florida | Licensed & Insured | FiveServ";
  const description =
    "Licensed plumbing services for multifamily properties across Central Florida. Emergency response 24/7. One call, one invoice. FiveServ Property Solutions.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Plumbing", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "maintenance",
          name: "Plumbing Services",
          short: "Licensed plumbing for multifamily and residential.",
          description:
            "Licensed plumbing services for multifamily properties and homes across Central Florida. Leak repairs, pipe replacement, water heater installation, drain cleaning, and 24/7 emergency response.",
          cta: "Get a Plumbing Quote",
        }}
        faqs={PLUMBING_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — <BrandName variant="light" /> Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Plumbing Services for Property Managers in
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
            Leaks. Pipes. Water heaters. Drains. Emergencies. One call. We answer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Plumbing Quote
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
            directAnswer="FiveServ Property Solutions provides licensed plumbing services for multifamily properties across Central Florida with 24/7 emergency response and one invoice per job."
            supportingFacts="Services include leak repair, pipe replacement, water heater installation, drain cleaning, and emergency plumbing. Response within 2 hours. Serving Orlando, Kissimmee, Sanford, and 15 more cities."
          />
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— The Real Cost of Delay</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                A 4-hour delay on a leak is a{" "}
                <span className="text-gray-900">$10,000 claim</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Property managers lose thousands in water damage from delayed plumbing response. Drywall, flooring,
                cabinets, downstairs units. Insurance claims, displaced residents, lost rent. <BrandName variant="dark" /> responds
                within 2 hours — before the damage compounds.
              </p>
            </div>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
              <div className="flex items-center gap-4">
                <Siren className="h-10 w-10 text-gray-900" />
                <div>
                  <p className="font-display font-semibold text-2xl text-gray-900">2-Hour Response</p>
                  <p className="text-sm text-gray-600">Across the Orlando metro core, 24/7</p>
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
              Plumbing Services <span className="text-gray-900">We Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Six core service lines. In-house coordination. Florida-licensed plumbers on every job.
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
                    Emergency plumbing response within{" "}
                    <span className="text-gray-900">2 hours</span> across Central Florida
                  </h2>
                  <p className="mt-3 text-gray-700">
                    24/7 dispatch. Real human answers the phone. Truck rolling within minutes for water emergencies in
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

      {/* Why Licensed Matters */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <ShieldCheck className="h-12 w-12 text-gray-900" />
              <p className="mt-6 font-display font-semibold text-2xl text-gray-900">
                One invoice. <span className="text-gray-900">Full accountability.</span>
              </p>
              <p className="mt-3 text-gray-700">
                You don't chase the plumber. You don't track the license. You don't reconcile three vendors. <BrandName variant="dark" />{" "}
                does it. You get one invoice and one accountable team.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— Why Licensed Matters</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                All plumbing performed by{" "}
                <span className="text-gray-900">Florida-licensed contractors</span>
              </h2>
              <p className="mt-4 text-gray-700">
                In Florida, plumbing work above a low threshold legally requires a licensed plumbing contractor.
                Insurance carriers require it for claims. <BrandName variant="dark" /> coordinates licensed plumbers on every job —
                you get the protection of licensed work plus the simplicity of a single point of contact.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Licensed plumbing contractors on every job
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Pulled permits when required by code
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Insurance-claim-ready documentation
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
              Plumbing Coverage —{" "}
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
                    <MapPin className="h-4 w-4 text-gray-900" />
                    <span className="font-semibold text-gray-900">
                      Plumbing {c.name}, {c.state}
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
      <FaqAccordion faqs={PLUMBING_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-16">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { to: "/maintenance", label: "Property Maintenance" },
                  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
                  { to: "/electrical", label: "Electrical Services" },
                  { to: "/hvac", label: "HVAC Services" },
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
              <h2 className="font-display font-semibold text-2xl text-gray-900">Plumbing in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                      <ArrowRight className="h-4 w-4" /> Plumbing in {c.name}, FL
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

export default PlumbingPage;
