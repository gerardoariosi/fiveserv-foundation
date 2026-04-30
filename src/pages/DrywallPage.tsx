import { Link } from "react-router-dom";
import {
  Phone,
  Hammer,
  Square,
  Droplets,
  Brush,
  Layers,
  Key,
  ShieldCheck,
  Clock,
  ArrowRight,
  MapPin,
  Sparkles,
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
  { icon: Square, title: "Hole Repair & Patching", desc: "Doorknob holes, fist holes, anchor blowouts, picture nail damage. Patched, taped, mudded, sanded." },
  { icon: Hammer, title: "Crack Repair & Finishing", desc: "Settling cracks, ceiling cracks, corner bead failures. Re-taped and finished to match." },
  { icon: Droplets, title: "Water Damage Restoration", desc: "Cut out compromised drywall, dry the cavity, replace, finish, and prep for paint." },
  { icon: Brush, title: "Texture Matching", desc: "Smooth, orange peel, knockdown, popcorn. We match existing texture so repairs disappear." },
  { icon: Layers, title: "Full Panel Replacement", desc: "Sheets, ceilings, water-impacted assemblies. Hung, taped, finished, primed, paint-ready." },
  { icon: Key, title: "Make-Ready Drywall Prep", desc: "Walk every wall and ceiling. Repair, prime, prep — included in every make-ready turn." },
];

const DRYWALL_FAQS = [
  {
    q: "What types of drywall damage do you repair?",
    a: `Everything you'd see in a multifamily turn or repair call: doorknob holes, fist holes, anchor blowouts, settling cracks, corner bead damage, ceiling cracks, water-stained ceilings, full water-damaged sections, popped fasteners, and full sheet or ceiling replacements.`,
  },
  {
    q: "Can you match existing wall texture?",
    a: `Yes. ${SITE.brand} matches smooth, orange peel, knockdown, and popcorn textures so repairs are invisible after paint. Texture matching is part of every make-ready and standalone drywall repair we run.`,
  },
  {
    q: "How fast can you complete drywall repairs?",
    a: `Standard patches and texture matching are typically completed in 1–2 business days including dry time. Larger water-damage assemblies and full panel replacements run 2–5 days depending on scope and paint coordination.`,
  },
  {
    q: "Is drywall included in your make-ready service?",
    a: `Yes. Every ${SITE.brand} make-ready includes a full drywall inspection and standard repair scope — no separate contractor, no separate invoice, no scheduling conflicts. Drywall, paint, cleaning, and final inspection are coordinated as one workflow.`,
  },
  {
    q: "Do you handle water damage drywall repair?",
    a: `Yes. We cut out compromised drywall, dry the cavity, address the source if needed (coordinated with our plumbing and HVAC teams), then replace, tape, finish, prime, and prep for paint. Documented for insurance when required.`,
  },
  {
    q: "How do I get a drywall repair quote?",
    a: `Call ${SITE.phone}, email ${SITE.email}, or fill out the form on this page. Same-day assessment in the Orlando metro core. Line-item quote before any work begins — no surprise charges.`,
  },
  {
    q: "Do you provide one invoice for drywall work?",
    a: `Yes. ${SITE.brand} sends one consolidated invoice — no surprise charges, no per-trade billing. Line-itemed by unit, building, or work order so your accounting team can code it cleanly.`,
  },
  {
    q: "What cities do you serve for drywall repair?",
    a: `We provide drywall repair across all 18 Central Florida cities we cover: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.`,
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

const DrywallPage = () => {
  const path = "/drywall";
  const title = "Drywall Repair Services Central Florida | FiveServ Property Solutions";
  const description =
    "Professional drywall repair for multifamily properties across Central Florida. Holes, cracks, water damage, full replacements. One call, one invoice. FiveServ Property Solutions.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Drywall Repair", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "maintenance",
          name: "Drywall Repair Services",
          short: "Holes, cracks, water damage, full panels — make-ready ready.",
          description:
            "Professional drywall repair for multifamily properties and homes across Central Florida. Hole repair, crack repair, water damage restoration, texture matching, and full panel replacement.",
          cta: "Get a Drywall Quote",
        }}
        faqs={DRYWALL_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — <BrandName variant="light" /> Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Drywall Repair Services for Property Managers in
            <span className="block text-brand-gold">Central Florida</span>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <Clock className="h-3.5 w-3.5" /> Same-Day Assessment
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <Key className="h-3.5 w-3.5" /> Make-Ready Specialist
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Holes. Cracks. Water damage. Full panels. Texture matched. Paint-ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Drywall Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock hidden
            answer={`${SITE.brand} provides professional drywall repair services for multifamily properties across Central Florida. Services include hole repair, crack repair, water damage restoration, texture matching, and full panel replacement. Fast turnaround for make-ready units. One call, one invoice. Serving Orlando, Kissimmee, Sanford, Winter Park, and 14 more cities.`}
          />
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— The Hidden Make-Ready Killer</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Drywall is the{" "}
                <span className="text-gray-900">#1 reason make-readies slip</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Holes, cracks, and water damage left unrepaired cost vacancy days and owner trust. The painter can't
                paint until drywall is done. The cleaner can't clean until paint is dry. <BrandName variant="dark" /> runs drywall
                inside the make-ready workflow — not as a separate contractor — so the schedule actually holds.
              </p>
            </div>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
              <div className="flex items-center gap-4">
                <Key className="h-10 w-10 text-gray-900" />
                <div>
                  <p className="font-display font-semibold text-2xl text-gray-900">5-Day Make-Ready</p>
                  <p className="text-sm text-gray-600">Drywall + paint + clean — coordinated</p>
                </div>
              </div>
              <Link
                to="/make-ready"
                className="cta-gold btn-shimmer mt-6 flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide"
              >
                See the 5-Day Process
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Drywall Services <span className="text-gray-900">We Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Six core service lines. In-house crews. Coordinated with paint and final inspection.
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

      {/* Make-Ready connection */}
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
                    Every <BrandName variant="dark" /> make-ready includes{" "}
                    <span className="text-gray-900">drywall inspection and repair</span>
                  </h2>
                  <p className="mt-3 text-gray-700">
                    No separate contractor. No separate invoice. No scheduling conflicts. Drywall, paint, cleaning, and
                    final inspection move as one workflow — that's how we hit 5 business days.
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

      {/* Texture Matching */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <Sparkles className="h-12 w-12 text-gray-900" />
              <p className="mt-6 font-display font-semibold text-2xl text-gray-900">
                Repairs that{" "}
                <span className="text-gray-900">disappear under paint.</span>
              </p>
              <p className="mt-3 text-gray-700">
                The wrong texture shows up the second the light hits it. Residents notice. Inspectors notice. We
                texture-match so the wall reads as one continuous surface.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— Texture Matching</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                We match existing wall texture —{" "}
                <span className="text-gray-900">smooth, orange peel, knockdown</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Most multifamily walls in Central Florida are orange peel or knockdown. We carry the spray rigs, the
                hopper textures, and the experience to feather a repair into the surrounding wall so it disappears
                after primer and topcoat.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Smooth wall finishing — Level 4 and Level 5
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Orange peel and knockdown spray-matching
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Popcorn ceiling patching when required
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Primer-ready, paint-ready handoff to our paint crew
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
              Drywall Coverage —{" "}
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
                      Drywall {c.name}, {c.state}
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
      <FaqAccordion faqs={DRYWALL_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
                  { to: "/painting", label: "Painting Services" },
                  { to: "/maintenance", label: "Property Maintenance" },
                  { to: "/renovations", label: "CapEx & Renovations" },
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
              <h2 className="font-display font-semibold text-2xl text-gray-900">Drywall in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                      <ArrowRight className="h-4 w-4" /> Drywall in {c.name}, FL
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

export default DrywallPage;
