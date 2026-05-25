import { Link } from "react-router-dom";
import {
  Phone,
  Sparkles,
  Home,
  Building2,
  Key,
  ShieldCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Bed,
  HardHat,
  Repeat,
  FileText,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, CITIES } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { CLEANING_FAQS } from "@/lib/service-faqs";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";

const SERVICES_GRID = [
  { icon: Key, title: "Move-Out Deep Clean", desc: "Full vacate clean for unit turns. Appliances, bathrooms, floors, baseboards, cabinets — everything." },
  { icon: ClipboardCheck, title: "Make-Ready Cleaning", desc: "Coordinated with drywall, paint, and final inspection inside the 5-day make-ready window." },
  { icon: Home, title: "Residential Deep Clean", desc: "Whole-home scrub. Kitchens, baths, bedrooms, living areas, fixtures, floors. One-time or scheduled." },
  { icon: HardHat, title: "Post-Construction Cleaning", desc: "Dust, debris, paint splatter, sticker removal. Punch-list ready for inspection." },
  { icon: Bed, title: "Airbnb / Short-Term Clean", desc: "Fast back-to-back turnaround for STR hosts. Linen reset, restock check, photo report." },
  { icon: Repeat, title: "Recurring Maintenance Clean", desc: "Weekly, bi-weekly, or monthly. Same crew, same checklist, consistent standard." },
];

const MAKE_READY_CHECKLIST = [
  "Full kitchen deep clean including appliances",
  "Bathroom scrub and sanitize",
  "All floors mopped and vacuumed",
  "Baseboards, blinds and window sills",
  "Inside cabinets and drawers",
  "Walls spot cleaned",
  "Trash removal",
  "Photo report on completion",
];

const RESIDENTIAL_CHECKLIST = [
  "Kitchen including oven and refrigerator",
  "Bathrooms scrubbed top to bottom",
  "All bedrooms and living areas",
  "Dusting all surfaces and fixtures",
  "Floor cleaning — all types",
  "Windows and mirrors",
  "Baseboards and door frames",
  "Optional: laundry and organizing",
];


const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const CleaningPage = () => {
  const path = "/cleaning";
  const title = "Cleaning Services Orlando FL | Move-Out & Deep Cleaning | FiveServ";
  const description =
    "Professional cleaning services for property managers and homeowners across Central Florida. Move-out cleaning, deep cleaning, make-ready cleaning, post-construction cleaning, and recurring maintenance cleaning. Fast turnaround for unit turns. One call, one invoice. FiveServ Property Solutions — serving Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Cleaning", url: `${SITE.url}${path}` },
        ]}
        service={{
          slug: "maintenance",
          name: "Cleaning Services",
          short: "Move-out, deep clean, post-construction — multifamily and residential.",
          description:
            "Professional cleaning services for property managers and homeowners across Central Florida. Move-out cleaning, deep cleaning, make-ready cleaning, post-construction cleaning, and recurring maintenance cleaning.",
          cta: "Get a Cleaning Quote",
        }}
        faqs={CLEANING_FAQS}
      />

      {/* Hero */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="uppercase tracking-[0.12em] text-brand-gold text-base font-bold">
            — <BrandName variant="light" /> Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Professional Cleaning Services for Properties and Homes —
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
              <Key className="h-3.5 w-3.5" /> Make-Ready Included
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/60 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <Clock className="h-3.5 w-3.5" /> Same-Day Available
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Move-out. Deep clean. Make-ready. Post-construction. Airbnb. One call.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Cleaning Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <AIOverviewBlock hidden
            directAnswer="FiveServ Property Solutions provides professional cleaning services for property managers and homeowners across Central Florida — including move-out cleaning, deep cleaning, make-ready cleaning, post-construction cleaning, and recurring maintenance cleaning for multifamily properties."
            supportingFacts="Serves multifamily property managers and residential homeowners. 15+ years combined experience. Move-out cleans include appliances, bathrooms, floors, windows, and full unit walkthrough. Cleaning coordinated inside the 5-day make-ready window for unit turns. One call, one invoice. Serving Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa, FL."
          />
        </div>
      </section>

      {/* TWO-AUDIENCE SPLIT */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              One Cleaning Team. <span className="text-gray-900">Two Audiences.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Multifamily move-outs and residential deep cleans run on the same 40-point checklist. Pick your path.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* B2B */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Building2 className="h-3.5 w-3.5" /> Property Managers
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Multifamily & Make-Ready Cleaning
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Move-out deep clean on every unit turn",
                    "Make-ready cleaning included in 5-day guarantee",
                    "Consistent cleaning standards across portfolio",
                    "Photo documentation before and after",
                    "Appliances, bathrooms, floors, windows — everything",
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
                  Get a Make-Ready Cleaning Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              {/* B2C */}
              <article className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Home className="h-3.5 w-3.5" /> Homeowners
                </span>
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">
                  Home & Residential Cleaning
                </h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {[
                    "Deep cleaning for any occasion",
                    "Move-in and move-out cleaning",
                    "Post-renovation cleaning",
                    "Regular maintenance cleaning",
                    "Airbnb and short-term rental cleaning",
                    "One-time or recurring service",
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
                  Get a Home Cleaning Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* What's Included — TWO checklists */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              What's Included — <span className="text-gray-900">Two Checklists</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Spelled out. No surprises. The same lists we hand to our crews on every job.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Building2 className="h-3.5 w-3.5" /> Make-Ready / Move-Out
                </span>
                <h3 className="mt-4 font-display font-semibold text-xl text-gray-900">Multifamily Move-Out Checklist</h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {MAKE_READY_CHECKLIST.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                  <Home className="h-3.5 w-3.5" /> Residential
                </span>
                <h3 className="mt-4 font-display font-semibold text-xl text-gray-900">Residential Deep Clean Checklist</h3>
                <ul className="mt-5 space-y-2 text-gray-700">
                  {RESIDENTIAL_CHECKLIST.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Cleaning Services <span className="text-gray-900">We Handle</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Six core service lines. In-house crews. Coordinated with the rest of the make-ready when applicable.
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
      <section className="bg-white">
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
                    Every <BrandName variant="dark" /> make-ready includes a{" "}
                    <span className="text-gray-900">full move-out deep clean</span>
                  </h2>
                  <p className="mt-3 text-gray-700">
                    No separate cleaning vendor. No scheduling headaches. No second invoice. Our team handles the
                    whole turn — drywall, paint, cleaning, photo report — in one visit, inside the 5-day window.
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

      {/* Standards — 40-point checklist */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-8">
              <ClipboardCheck className="h-12 w-12 text-gray-900" />
              <p className="mt-6 font-display font-semibold text-2xl text-gray-900">
                <span className="text-gray-900">40-point</span> cleaning checklist on every unit
              </p>
              <p className="mt-3 text-gray-700">
                Same checklist on every job, every crew, every property. The same checklist available as a free
                download below — verifiable against the photo report on completion.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— Cleaning Standard</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Verifiable cleaning. <span className="text-gray-900">Not "trust us."</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Every move-out clean ships with a photo report you can audit against the 40-point list — appliances
                inside and out, bathrooms, floors, baseboards, cabinets, windows. If a checklist item isn't shown in
                the photo set, it isn't done.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Same 40-point checklist on every job
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Photo report on completion — auditable proof of work
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Consistent standard across every unit and every property
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" />
                  Free download — same checklist your crew gets
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Airbnb / STR section */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[auto,1fr,auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-gray-900">
                  <Bed className="h-8 w-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                    Airbnb / Short-Term Rental
                  </span>
                  <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                    Central Florida is one of the{" "}
                    <span className="text-gray-900">top Airbnb markets in the US</span>
                  </h2>
                  <p className="mt-3 text-gray-700">
                    Fast back-to-back turnarounds. Same-day service available between bookings. Linen reset, restock
                    check, photo report. The reliability short-term rental hosts can't afford to gamble on.
                  </p>
                </div>
                <a
                  href="#contact-form"
                  className="cta-gold btn-shimmer flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide whitespace-nowrap"
                >
                  Get STR Cleaning
                </a>
              </div>
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
              Cleaning Coverage —{" "}
              <span className="text-gray-900">18 Cities Across Central Florida</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Same-day service across the Orlando metro core. Within 24 hours across the rest of the region.
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
                      Cleaning {c.name}, {c.state}
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
      <FaqAccordion title="Cleaning Questions — Answered" faqs={CLEANING_FAQS} emitSchema={false} />

      {/* Lead Magnet — 40-point checklist */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[auto,1fr,auto] lg:items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-gray-900">
                  <FileText className="h-8 w-8" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-900">
                    Free Download
                  </span>
                  <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                    Download the{" "}
                    <span className="text-gray-900">40-point Make-Ready Cleaning Checklist</span>
                  </h2>
                  <p className="mt-3 text-gray-700">
                    The exact checklist our crews use on every unit. Use it to audit your current vendor or train
                    your in-house team. Email it to yourself in 30 seconds.
                  </p>
                </div>
                <Link
                  to="/contact?offer=cleaning-checklist"
                  className="cta-gold btn-shimmer flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold uppercase tracking-wide whitespace-nowrap"
                >
                  Get the Checklist
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Internal links */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Related Services</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
                  { to: "/painting", label: "Painting Services" },
                  { to: "/drywall", label: "Drywall Repair" },
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
              <h2 className="font-display font-semibold text-2xl text-gray-900">Cleaning in your city</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { slug: "orlando-fl", name: "Orlando" },
                  { slug: "kissimmee-fl", name: "Kissimmee" },
                ].map((c) => (
                  <li key={c.slug}>
                    <Link to={`/maintenance-${c.slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                      <ArrowRight className="h-4 w-4" /> Cleaning in {c.name}, FL
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA — TWO buttons side by side */}
      <section id="contact-form" className="bg-brand-gray">
        <div className="container py-20">
          <SectionReveal>
            <div className="rounded-xl border-2 border-brand-gold bg-white shadow-md p-8 sm:p-12 text-center">
              <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                Ready for a <span className="text-gray-900">cleaning quote?</span>
              </h2>
              <p className="mt-3 text-gray-700">
                Pick the path that fits. PM portfolios on the left. Homes on the right.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="cta-gold btn-shimmer inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  <Building2 className="h-4 w-4" /> Get a Property Cleaning Quote
                </Link>
                <Link
                  to="/residential"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 hover:bg-brand-gold hover:text-gray-900 transition-colors"
                >
                  <Sparkles className="h-4 w-4" /> Get a Home Cleaning Quote
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Or call us directly:{" "}
                <a href={`tel:${SITE.phone}`} className="font-bold text-gray-900 hover:underline">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ContactCTA variant="b2c" />
    </>
  );
};

export default CleaningPage;
