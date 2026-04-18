import { Link } from "react-router-dom";
import {
  Phone,
  LayoutGrid,
  Grid3x3,
  Square,
  Trees,
  Trash2,
  Wrench,
  TrendingUp,
  Building2,
  Home,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Camera,
  ClipboardList,
  CheckCircle2,
  Droplets,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, CITIES } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";

const FLOORING_TYPES = [
  { icon: LayoutGrid, title: "Luxury Vinyl Plank (LVP)", desc: "Waterproof, scratch-resistant, the #1 multifamily floor. Wood and stone looks, click-lock or glue-down." },
  { icon: Grid3x3, title: "Ceramic & Porcelain Tile", desc: "Bathrooms, kitchens, entryways. Mortar-set, grouted, sealed. Wall tile available." },
  { icon: Square, title: "Carpet Installation", desc: "Bedrooms, common areas, stairs. Pad, tack strip, stretched and seamed clean." },
  { icon: Trees, title: "Hardwood & Engineered Wood", desc: "Solid hardwood and engineered planks. Refinishing on existing floors when condition allows." },
  { icon: Trash2, title: "Flooring Removal & Disposal", desc: "Tear-out of any existing floor — carpet, tile, glued vinyl, hardwood. Hauled and disposed." },
  { icon: Wrench, title: "Subfloor Repair & Prep", desc: "Soft spots, water damage, leveling, moisture barriers. Done right before any new floor goes in." },
];

const PROCESS = [
  { icon: ClipboardList, name: "Assessment & Quote", text: "Free walk-through. Material selection. Line-itemed quote covering material, install, removal, and prep." },
  { icon: Wrench, name: "Professional Installation", text: "Clean, fast, in-house crews. Furniture moved when needed. Daily site cleanup." },
  { icon: Camera, name: "Photo Report", text: "Unit ready, photos delivered. PMs get portfolio-ready documentation. Homeowners get peace of mind." },
];

const FLOORING_FAQS = [
  {
    q: "What flooring types do you install in rental properties?",
    a: `Luxury vinyl plank (LVP) is our most-recommended floor for multifamily rentals. We also install ceramic and porcelain tile, carpet, hardwood and engineered wood, plus full removal, subfloor repair, and prep on every job.`,
  },
  {
    q: "What is the best flooring for rental apartments in Florida?",
    a: `Luxury vinyl plank (LVP) is the #1 choice for Florida rentals — waterproof, scratch-resistant, easy to clean, easy to replace plank-by-plank, and presents like wood. ${SITE.brand} recommends LVP for nearly every unit turn unless an owner spec calls for tile or carpet.`,
  },
  {
    q: "How long does flooring installation take?",
    a: `A typical 1- or 2-bedroom apartment in LVP runs 1–2 business days including removal and subfloor prep. Tile runs 2–4 days with mortar and grout cure time. Whole-home installs typically run 3–5 days depending on square footage and material.`,
  },
  {
    q: "Does flooring replacement increase rental value?",
    a: `Yes. New flooring is one of the highest-ROI upgrades in multifamily — Central Florida operators typically see 10–15% rent uplift on units that move from old carpet or worn vinyl to fresh LVP, plus faster lease-up and lower turn cost on the next move-out.`,
  },
  {
    q: "Do you handle flooring removal and disposal?",
    a: `Yes. ${SITE.brand} handles full tear-out of any existing flooring — carpet and pad, glued or click-lock vinyl, tile, hardwood — plus dump fees and disposal. One invoice covers removal and install.`,
  },
  {
    q: "Can you install flooring in occupied units?",
    a: `Yes — for homeowner jobs and PM repair work. We coordinate furniture moving, work room-by-room when needed, and protect the rest of the home during install. For full unit turns we strongly recommend installing during the make-ready window when the unit is vacant.`,
  },
  {
    q: "Do you install flooring for homeowners?",
    a: `Yes. ${SITE.brand} installs flooring for homeowners across Central Florida — full-home replacements, single-room upgrades, and refresh projects. The same crews that handle multifamily portfolios, with material and color consultation included.`,
  },
  {
    q: "How much does flooring installation cost in Central Florida?",
    a: `Pricing depends on material grade, square footage, removal scope, and subfloor condition. LVP typically runs the most cost-effective per square foot installed; tile is highest. We quote line-item before any work starts so material, install, removal, and prep are all transparent.`,
  },
  {
    q: "Do you repair subfloor before installation?",
    a: `Yes — and we always check first. Soft spots, water damage, height mismatches, and old adhesive all get addressed before new flooring goes down. Skipping subfloor prep is the #1 cause of failed flooring installs.`,
  },
  {
    q: "What cities do you serve for flooring services?",
    a: `We provide flooring across all 18 Central Florida cities we cover: Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.`,
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

const FlooringPage = () => {
  const path = "/flooring";
  const title = "Flooring Services Central Florida | Installation & Replacement | FiveServ";
  const description =
    "Professional flooring installation and replacement for property managers and homeowners across Central Florida. Vinyl plank, tile, carpet, hardwood. One call, one invoice. FiveServ Property Solutions.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Flooring", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "renovations",
          name: "Flooring Services",
          short: "LVP, tile, carpet, hardwood — multifamily and residential.",
          description:
            "Professional flooring installation and replacement for multifamily properties and homeowners across Central Florida. Luxury vinyl plank, tile, carpet, hardwood. Removal and subfloor prep included.",
          cta: "Get a Flooring Quote",
        }}
        faqs={FLOORING_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — {SITE.brand} Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Flooring Services for Properties and Homes in
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
              <TrendingUp className="h-3.5 w-3.5" /> CapEx Specialist
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-gray-700">
            Vinyl plank. Tile. Carpet. Hardwood. Removal, subfloor prep, install. One invoice.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Flooring Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock
            answer={`${SITE.brand} provides professional flooring installation and replacement for multifamily properties and homeowners across Central Florida. Services include luxury vinyl plank, tile, carpet, and hardwood installation. Value-add upgrades that increase rental income. One call, one invoice. Serving Orlando, Kissimmee, Sanford, Winter Park, and 14 more cities.`}
          />
        </div>
      </section>

      {/* TWO-AUDIENCE SPLIT */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              One Flooring Team. <span className="text-gray-900">Two Audiences.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              The same crews installing 50-unit LVP rollouts also handle whole-home installs. Pick your path.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* B2B */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Building2 className="h-3.5 w-3.5" /> Property Managers
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Multifamily & Portfolio Flooring
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Flooring replacement on unit turns",
                    "Portfolio-wide flooring upgrades",
                    "LVP — most durable for rentals",
                    "Increases rental value 10–15%",
                    "Included in CapEx renovation packages",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/renovations"
                  className="cta-gold mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Get a Property Flooring Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              {/* B2C */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Home className="h-3.5 w-3.5" /> Homeowners
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Home & Residential Flooring
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Full home flooring replacement",
                    "Room-by-room installation",
                    "Wide selection of materials",
                    "Color and style consultation",
                    "Clean install with furniture moving",
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
                  Get a Home Flooring Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Flooring Types Grid */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Flooring Types <span className="text-gray-900">We Install</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Every major material. Removal and subfloor prep coordinated under one workflow.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FLOORING_TYPES.map((s) => (
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

      {/* Why LVP for Rentals */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <Droplets className="h-12 w-12 text-amber-700" />
              <p className="mt-6 font-display font-semibold text-2xl text-gray-900">
                <span className="text-amber-700">LVP</span> — the #1 rental floor in Florida
              </p>
              <p className="mt-3 text-gray-700">
                Waterproof. Scratch-resistant. Tenant-proof. Replaceable plank-by-plank. Presents like wood, costs less,
                outlasts carpet by 4–5 turns.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-amber-700">— Why LVP for Rentals</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Luxury vinyl plank is the{" "}
                <span className="text-amber-700">#1 choice for rental properties</span> in Florida
              </h2>
              <p className="mt-4 text-gray-700">
                Florida humidity destroys hardwood. Florida tenants destroy carpet. LVP holds up to both — plus
                kitchens, bathrooms, pets, and water leaks. {SITE.brand} recommends LVP for every unit turn unless
                an owner spec calls for something else.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Waterproof — survives leaks and mop water
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Scratch- and dent-resistant — pet- and tenant-proof
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Plank-level replaceability — no full tear-out for a damaged spot
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
                  Presents like premium hardwood at a fraction of the cost
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ROI section */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[auto,1fr,auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-amber-700">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                    Highest-ROI Upgrade
                  </span>
                  <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                    Flooring upgrades average{" "}
                    <span className="text-amber-700">10–15% rent increase</span> in Central Florida multifamily
                  </h2>
                  <p className="mt-3 text-gray-700">
                    One of the highest-ROI capital improvements in property management. Faster lease-up, premium
                    pricing, lower turn cost on the next move-out.
                  </p>
                </div>
                <Link
                  to="/renovations"
                  className="cta-gold flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide whitespace-nowrap"
                >
                  See CapEx & Renovations
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
              Our 3-Step <span className="text-gray-900">Flooring Process</span>
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
              Flooring Coverage —{" "}
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
                      Flooring {c.name}, {c.state}
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
      <FaqAccordion faqs={FLOORING_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-16">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { to: "/renovations", label: "CapEx & Renovations" },
                  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
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
              <h2 className="font-display font-semibold text-2xl text-gray-900">Flooring in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-amber-700 hover:underline">
                      <ArrowRight className="h-4 w-4" /> Flooring in {c.name}, FL
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
                Ready for a <span className="text-gray-900">flooring quote?</span>
              </h2>
              <p className="mt-3 text-gray-700">
                Pick the path that fits. PM portfolios on the left. Homes on the right.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="cta-gold inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  <Building2 className="h-4 w-4" /> Get a Property Flooring Quote
                </Link>
                <Link
                  to="/residential"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-amber-700 hover:bg-brand-gold hover:text-gray-900 transition-colors"
                >
                  <Home className="h-4 w-4" /> Get a Home Flooring Quote
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

export default FlooringPage;
