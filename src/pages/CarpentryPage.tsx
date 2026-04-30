import { Link } from "react-router-dom";
import {
  Phone,
  Hammer,
  Home,
  Building2,
  DoorOpen,
  Ruler,
  Layers,
  Boxes,
  Key,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Wrench,
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
  { icon: DoorOpen, title: "Door Repair & Replacement", desc: "Interior doors, exterior doors, closet doors, hardware, frames, weatherstripping." },
  { icon: Boxes, title: "Cabinet Installation & Repair", desc: "Kitchen and bath cabinets. Replace doors, drawers, hinges, hardware. Full installs on turnover." },
  { icon: Ruler, title: "Baseboard & Trim Work", desc: "Baseboards, shoe molding, casing. Replace damaged sections or full unit re-trim." },
  { icon: Layers, title: "Window Trim & Molding", desc: "Window casing, sills, crown molding, chair rail. Match existing profiles." },
  { icon: Boxes, title: "Shelving & Storage", desc: "Closet systems, pantry shelving, garage storage, built-ins. Floating and bracketed." },
  { icon: Hammer, title: "Custom Carpentry", desc: "Built-ins, decks, fence repair, accent walls, board-and-batten. One-off owner-spec jobs." },
];

const CARPENTRY_FAQS = [
  {
    q: "What carpentry services do you offer for rental properties?",
    a: `${SITE.brand} handles all interior carpentry on multifamily units — door repair and replacement, cabinet repair, baseboard and trim work, shelving, and punch-list custom work. Coordinated with drywall and paint so the unit comes back as one finished package, not piecemeal.`,
  },
  {
    q: "Is carpentry included in your make-ready service?",
    a: `Yes. Damaged doors, broken cabinets, and missing trim are the most common punch-list items on unit turns, so carpentry is part of every make-ready assessment. No separate carpenter, no separate invoice — it moves with drywall, paint, and cleaning inside the 5-day window.`,
  },
  {
    q: "Can you replace apartment doors?",
    a: `Yes — interior doors, closet doors, exterior doors, and frames. We match existing door size, style, and hardware so the replacement is invisible. Includes hinges, latch, strike plate, and weatherstripping where applicable.`,
  },
  {
    q: "Do you repair kitchen cabinets in rental units?",
    a: `Yes. Re-hang doors, replace hinges and pulls, fix drawer slides, repair or swap damaged faces, and re-secure cabinet boxes. For cabinets past repair, we install replacements that match the existing kitchen so the unit stays consistent.`,
  },
  {
    q: "How fast can you complete carpentry repairs?",
    a: `Most punch-list carpentry — door swaps, trim sections, cabinet hardware — is completed in a single visit. Larger scopes like full cabinet replacement or full unit re-trim run inside the make-ready window alongside drywall and paint.`,
  },
  {
    q: "Do you offer carpentry services for homeowners?",
    a: `Yes. ${SITE.brand} works directly with Central Florida homeowners on door replacement, custom cabinet installs, trim and molding, shelving and storage solutions, deck and fence repair, and one-off custom carpentry. Same crews that handle multifamily portfolios.`,
  },
  {
    q: "How do I get a carpentry quote?",
    a: `Send the request through our quote form or call ${SITE.phone}. We schedule an on-site assessment, walk the scope, and return a clear line-itemed quote — labor, materials, and timeline — before any work starts.`,
  },
  {
    q: "What cities do you serve for carpentry services?",
    a: `We provide carpentry across all 18 Central Florida cities we cover: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.`,
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

const CarpentryPage = () => {
  const path = "/carpentry";
  const title = "Carpentry Services Central Florida | Doors, Cabinets & Trim | FiveServ";
  const description =
    "Professional carpentry services for property managers and homeowners across Central Florida. Door repair, cabinet installation, trim work, and custom carpentry. One call, one invoice. FiveServ Property Solutions.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Carpentry", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "maintenance",
          name: "Carpentry Services",
          short: "Doors, cabinets, trim, custom — multifamily and residential.",
          description:
            "Professional carpentry services for property managers and homeowners across Central Florida. Door repair and replacement, cabinet installation, baseboards, trim work, and custom carpentry.",
          cta: "Get a Carpentry Quote",
        }}
        faqs={CARPENTRY_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — <BrandName variant="light" /> Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Carpentry Services for Properties and Homes —
            <span className="block text-brand-gold">Central Florida</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <Building2 className="h-3.5 w-3.5" /> Property Managers
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <Home className="h-3.5 w-3.5" /> Homeowners
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <Key className="h-3.5 w-3.5" /> Make-Ready Specialist
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Doors. Cabinets. Trim. Shelving. Custom builds. One call.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Carpentry Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock hidden
            answer={`${SITE.brand} provides professional carpentry services for multifamily properties and homeowners across Central Florida. Services include door repair and replacement, cabinet installation, baseboards, trim work, and custom carpentry. Fast turnaround for make-ready units. One call, one invoice. Serving Orlando, Kissimmee, Sanford, Winter Park, and 14 more cities.`}
          />
        </div>
      </section>

      {/* TWO-AUDIENCE SPLIT */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              One Carpentry Team. <span className="text-gray-900">Two Audiences.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              The same crews that punch-list 500-unit communities also build for Central Florida homes. Pick your path.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* B2B */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Building2 className="h-3.5 w-3.5" /> Property Managers
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Multifamily & Portfolio Carpentry
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Door repair and replacement on unit turns",
                    "Cabinet repair and installation",
                    "Baseboard and trim repair",
                    "Included in make-ready process",
                    "One invoice per property",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/make-ready"
                  className="cta-gold btn-shimmer mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Get a Property Carpentry Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              {/* B2C */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Home className="h-3.5 w-3.5" /> Homeowners
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Home & Residential Carpentry
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Custom cabinet installation",
                    "Door replacement and hardware",
                    "Trim and molding installation",
                    "Shelving and storage solutions",
                    "Deck and fence repair",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/residential"
                  className="cta-gold btn-shimmer mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Get a Home Carpentry Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Carpentry Services <span className="text-gray-900">We Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Six core service lines. In-house crews. Coordinated with drywall, paint, and final inspection.
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

      {/* Make-Ready Connection */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[auto,1fr,auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-gray-900">
                  <Key className="h-8 w-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                    Make-Ready Included
                  </span>
                  <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                    Damaged doors, broken cabinets, missing trim —{" "}
                    <span className="text-gray-900">caught on every assessment</span>
                  </h2>
                  <p className="mt-3 text-gray-700">
                    These are the most common punch-list items on a unit turn, and the ones most often missed by
                    single-trade vendors. <BrandName variant="dark" /> carpentry is included in every make-ready assessment so
                    nothing slips through to the resident walk.
                  </p>
                </div>
                <Link
                  to="/make-ready"
                  className="cta-gold btn-shimmer flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide whitespace-nowrap"
                >
                  See Make-Ready
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Quality / Match Section */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <Wrench className="h-12 w-12 text-gray-900" />
              <p className="mt-6 font-display font-semibold text-2xl text-gray-900">
                <span className="text-gray-900">Invisible repairs</span> that pass inspection
              </p>
              <p className="mt-3 text-gray-700">
                Same wood species. Same paint color. Same hardware style. Same trim profile. Carpentry that
                disappears into the existing unit instead of standing out as a patch job.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— Quality Spec</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Carpentry that{" "}
                <span className="text-gray-900">matches the rest of the unit</span>
              </h2>
              <p className="mt-4 text-gray-700">
                A door that doesn't match the others on the floor, trim with a different profile, hardware in the
                wrong finish — these are the punch-list rejections that cost a make-ready an extra day. We finish
                every carpentry repair to match what's already there.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Wood species and grain matched
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Paint color matched and recorded for portfolio
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Hardware finish matched (brushed nickel, bronze, brass, matte black)
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Trim profiles matched — no mixed casing or baseboard
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
              Carpentry Coverage —{" "}
              <span className="text-gray-900">18 Cities Across Central Florida</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Same-day assessment across the Orlando metro core. Within 24 hours across the rest of the region.
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
                      Carpentry {c.name}, {c.state}
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
      <FaqAccordion faqs={CARPENTRY_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-16">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
                  { to: "/drywall", label: "Drywall Repair" },
                  { to: "/painting", label: "Painting Services" },
                  { to: "/maintenance", label: "Property Maintenance" },
                  { to: "/residential", label: "Residential Services" },
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
              <h2 className="font-display font-semibold text-2xl text-gray-900">Carpentry in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                      <ArrowRight className="h-4 w-4" /> Carpentry in {c.name}, FL
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA — TWO buttons side by side */}
      <section id="contact-form" className="bg-brand-black">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white border border-gray-100 shadow-sm p-8 sm:p-12 text-center">
              <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Ready for a <span className="text-gray-900">carpentry quote?</span>
              </h2>
              <p className="mt-3 text-gray-300">
                Pick the path that fits. PM portfolios on the left. Homes on the right.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="cta-gold btn-shimmer inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  <Building2 className="h-4 w-4" /> Get a Property Carpentry Quote
                </Link>
                <Link
                  to="/residential"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 hover:bg-brand-gold hover:text-gray-900 transition-colors"
                >
                  <Home className="h-4 w-4" /> Get a Home Carpentry Quote
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Or call us directly:{" "}
                <a href={`tel:${SITE.phone}`} className="font-bold text-gray-900 hover:underline">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default CarpentryPage;
