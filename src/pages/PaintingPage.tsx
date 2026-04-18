import { Link } from "react-router-dom";
import {
  Phone,
  Paintbrush,
  Home,
  Building2,
  Palette,
  Sparkles,
  Key,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Camera,
  ClipboardList,
  CheckCircle2,
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
  { icon: Paintbrush, title: "Interior Room Painting", desc: "Bedrooms, living rooms, kitchens, bathrooms. Walls, ceilings, trim, doors." },
  { icon: Home, title: "Full Unit / Home Repaint", desc: "Whole-unit and whole-home repaints. Coordinated with drywall and cleaning." },
  { icon: Key, title: "Make-Ready Painting", desc: "Touch-up or full repaint between tenants. Inside the 5-day make-ready window." },
  { icon: Building2, title: "Exterior Painting", desc: "Apartment complexes, common areas, hallways, breezeways, single-family exteriors." },
  { icon: Sparkles, title: "Accent & Feature Walls", desc: "Color, pattern, board-and-batten, paneled looks. Designed to sell or to lease." },
  { icon: Palette, title: "Color Consultation", desc: "Tenant-proof palettes for rentals. Personalized palettes for homeowners. Included." },
];

const PROCESS = [
  { icon: ClipboardList, name: "Assessment & Quote", text: "Walk the space. Color selection. Clear, line-itemed quote before any work begins." },
  { icon: Paintbrush, name: "We Paint — Clean & Fast", text: "Professional crews. Drop cloths, masking, primer, two coats. No mess left behind." },
  { icon: Camera, name: "Photo Report", text: "Unit ready, photos delivered. PMs get a portfolio-ready report. Homeowners get peace of mind." },
];

const PAINTING_FAQS = [
  {
    q: "Do you paint rental units for property managers?",
    a: `Yes — multifamily painting is core ${SITE.brand} work. Make-ready repaints, full unit repaints, hallways, common areas, exteriors. Consistent color standards across your portfolio, one point of contact, one invoice.`,
  },
  {
    q: "Is painting included in your make-ready service?",
    a: `Yes. Every ${SITE.brand} make-ready includes painting — touch-up or full repaint depending on the unit's condition — coordinated with drywall, cleaning, and final inspection. No separate painter, no separate invoice, no scheduling conflicts.`,
  },
  {
    q: "What paint brands do you use?",
    a: `${SITE.brand} uses Sherwin-Williams premium paints by default — durable, washable, tenant-proof finishes that hold up to multifamily wear. Other brands available on request for owner-spec jobs.`,
  },
  {
    q: "How long does a full unit repaint take?",
    a: `A standard 1- or 2-bedroom unit repaint runs 1–2 business days inside our make-ready workflow (drywall first, paint second, cleaning third). Larger 3-bedroom or townhome units run 2–3 days. Standalone repaints with no drywall scope are typically faster.`,
  },
  {
    q: "Do you offer exterior painting for apartment complexes?",
    a: `Yes. Building exteriors, breezeways, stairwells, soffits, fascia, doors, hallways, trim. We handle prep (pressure wash, scrape, prime), full coats, and the documentation owners and asset managers need for capital reporting.`,
  },
  {
    q: "Can you match existing paint colors?",
    a: `Yes. We pull color matches from existing walls or from owner-spec sheets. For PM portfolios with a standard palette, we maintain the spec across every turn so units stay consistent.`,
  },
  {
    q: "Do you paint homes for homeowners?",
    a: `Yes. ${SITE.brand} works directly with homeowners — interior rooms, full home repaints, accent walls, exteriors. The same crews that turn 500-unit communities, now at your home. Color consultation included.`,
  },
  {
    q: "How much does interior painting cost in Central Florida?",
    a: `Pricing depends on square footage, ceiling height, prep work, paint grade, and trim/door count. For a typical Central Florida 1-bedroom rental repaint, expect a flat per-unit rate that covers walls, ceilings, and standard prep. We quote line-item before any work starts.`,
  },
  {
    q: "Do you offer color consultation?",
    a: `Yes — included on every job. Homeowners get a personalized palette walk-through. PMs get tenant-proof color recommendations and portfolio palette options that hold up over multiple turns.`,
  },
  {
    q: "What cities do you serve for painting services?",
    a: `We provide painting across all 18 Central Florida cities we cover: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.`,
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

const PaintingPage = () => {
  const path = "/painting";
  const title = "Painting Services Central Florida | Interior & Exterior | FiveServ";
  const description =
    "Professional interior and exterior painting for property managers and homeowners across Central Florida. Make-ready painting, full repaints, accent walls. Licensed, insured. FiveServ Property Solutions.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Painting", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "maintenance",
          name: "Painting Services",
          short: "Interior & exterior — multifamily and residential.",
          description:
            "Professional interior and exterior painting for property managers and homeowners across Central Florida. Make-ready painting, full unit repaints, accent walls, exterior painting, and color consultation.",
          cta: "Get a Painting Quote",
        }}
        faqs={PAINTING_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — {SITE.brand} Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Professional Painting Services in Central Florida —
            <span className="block text-brand-gold">Properties & Homes</span>
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

          <p className="mt-6 max-w-2xl text-lg text-gray-700">
            Interior. Exterior. Make-ready. Accent walls. Sherwin-Williams. One call.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Painting Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock
            answer={`${SITE.brand} provides professional interior and exterior painting services across Central Florida for both property managers and homeowners. Services include make-ready repaints, full unit repaints, accent walls, exterior painting, and color consultation. Licensed, insured, fast turnaround. Serving Orlando, Kissimmee, Sanford, Winter Park, and 14 more cities.`}
          />
        </div>
      </section>

      {/* TWO-AUDIENCE SPLIT */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              One Painting Team. <span className="text-gray-900">Two Audiences.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              The same painters who turn 500-unit communities also paint Central Florida homes. Pick your path.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* B2B */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Building2 className="h-3.5 w-3.5" /> Property Managers
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Multifamily & Portfolio Painting
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Make-ready painting between tenants",
                    "Full unit repaints on turnover",
                    "Consistent color standards across portfolio",
                    "Included in 5-day make-ready guarantee",
                    "One invoice per property",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/make-ready"
                  className="cta-gold mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Get a Make-Ready Painting Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              {/* B2C */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Home className="h-3.5 w-3.5" /> Homeowners
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Home & Residential Painting
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Interior room painting",
                    "Full home repaints",
                    "Accent walls and feature walls",
                    "Exterior painting",
                    "Color consultation included",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/residential"
                  className="cta-gold mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Get a Home Painting Quote <ArrowRight className="h-4 w-4" />
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
              Painting Services <span className="text-gray-900">We Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Six core service lines. In-house crews. Coordinated with drywall, cleaning, and final inspection.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_GRID.map((s) => (
                <article key={s.title} className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-700/10 text-gray-900">
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

      {/* Sherwin-Williams */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <Palette className="h-12 w-12 text-amber-700" />
              <p className="mt-6 font-display font-semibold text-2xl text-gray-900">
                <span className="text-amber-700">Sherwin-Williams</span> premium paints
              </p>
              <p className="mt-3 text-gray-700">
                Durable. Washable. Tenant-proof. The grade of paint that holds up across multiple turns and stays
                looking new in real-world rentals.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-amber-700">— Paint Spec</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                The right paint{" "}
                <span className="text-amber-700">cuts your turn cost over time</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Cheap paint shows scuffs in 6 months and needs full repaints every turn. Sherwin-Williams premium
                lines wash clean, hold color, and let us touch-up instead of fully repaint on most turns — which
                compounds into real savings across a portfolio.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Washable, scrubbable wall finishes
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Recommended tenant-proof palettes available on request
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Owner-spec brands honored on request
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Color matched and recorded for portfolio consistency
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Make-Ready Connection */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[auto,1fr,auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-amber-700">
                  <Key className="h-8 w-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                    Make-Ready Included
                  </span>
                  <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                    Every {SITE.brand} make-ready includes{" "}
                    <span className="text-amber-700">painting</span>
                  </h2>
                  <p className="mt-3 text-gray-700">
                    Touch-up or full repaint depending on unit condition. No separate painter, no separate invoice, no
                    scheduling conflicts. Drywall, paint, and cleaning move as one workflow inside the 5-day window.
                  </p>
                </div>
                <Link
                  to="/make-ready"
                  className="cta-gold flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide whitespace-nowrap"
                >
                  See Make-Ready
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Process — 3 steps */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Our 3-Step <span className="text-gray-900">Painting Process</span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PROCESS.map((p, i) => (
                <article key={p.name} className="rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-base font-semibold text-gray-900">
                    {i + 1}
                  </span>
                  <p.icon className="mt-4 h-8 w-8 text-amber-700" />
                  <h3 className="mt-3 font-display font-semibold text-xl text-gray-900">{p.name}</h3>
                  <p className="mt-2 text-gray-700">{p.text}</p>
                </article>
              ))}
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
              Painting Coverage —{" "}
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
                    <MapPin className="h-4 w-4 text-amber-700" />
                    <span className="font-semibold text-gray-900">
                      Painting {c.name}, {c.state}
                    </span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-amber-700/80">
                    {c.responseTime}
                  </span>
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={PAINTING_FAQS} emitSchema={false} />

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
                  { to: "/maintenance", label: "Property Maintenance" },
                  { to: "/residential", label: "Residential Services" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="inline-flex items-center gap-2 text-amber-700 hover:underline">
                      <ArrowRight className="h-4 w-4" /> {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-amber-700 hover:underline">
                    <ArrowRight className="h-4 w-4" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Painting in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-amber-700 hover:underline">
                      <ArrowRight className="h-4 w-4" /> Painting in {c.name}, FL
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
                Ready for a <span className="text-gray-900">painting quote?</span>
              </h2>
              <p className="mt-3 text-gray-700">
                Pick the path that fits. PM portfolios on the left. Homes on the right.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="cta-gold inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  <Building2 className="h-4 w-4" /> Get a Property Painting Quote
                </Link>
                <Link
                  to="/residential"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-amber-700 hover:bg-brand-gold hover:text-gray-900 transition-colors"
                >
                  <Home className="h-4 w-4" /> Get a Home Painting Quote
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Or call us directly:{" "}
                <a href={`tel:${SITE.phone}`} className="font-bold text-amber-700 hover:underline">
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

export default PaintingPage;
