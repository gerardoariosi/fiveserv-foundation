import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  TrendingUp,
  Building2,
  User,
  Layers,
  ChefHat,
  Bath,
  Sofa,
  Home as HomeIcon,
  Trees,
  ClipboardCheck,
  HardHat,
  Receipt,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { RENOVATIONS_FAQS } from "@/lib/service-faqs";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import BeforeAfterSlider from "@/components/fiveserv/BeforeAfterSlider";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";

const PROJECT_TYPES = [
  { icon: Layers, title: "Flooring Replacement", desc: "LVP, tile, carpet — single units to full portfolios." },
  { icon: ChefHat, title: "Kitchen Upgrades", desc: "Cabinets, counters, appliances. Built to lift rents." },
  { icon: Bath, title: "Bathroom Renovations", desc: "Vanities, tile, fixtures. Modern look, durable build." },
  { icon: Sofa, title: "Common Area Improvements", desc: "Clubhouses, fitness centers, hallways, lounges." },
  { icon: HomeIcon, title: "Full Unit Rehab", desc: "Down-to-studs rebuilds for value-add acquisitions." },
  { icon: Trees, title: "Exterior Improvements", desc: "Paint, signage, landscaping coordination." },
];

const STEPS = [
  {
    name: "Assessment & clear quote",
    text: "Free on-site walk within 24 hours. Line-item quote within 3 business days. ROI estimate included.",
  },
  {
    name: "Project execution under our management",
    text: "One project manager. Daily progress photos. Weekly written updates. Permits and inspections handled.",
  },
  {
    name: "One invoice on completion",
    text: "Final walk-through, punch list closed, photo documentation delivered. One clean invoice. No surprises.",
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

const RenovationsPage = () => {
  const path = "/renovations";
  const title = "Property Renovation Central Florida | Increase NOI | FiveServ";
  const description =
    "Property renovation Central Florida. FiveServ manages CapEx and value-add renovations for multifamily — flooring, kitchens, baths, full rehabs, common areas. One contract. One invoice.";
  const service = SERVICES.find((s) => s.slug === "renovations")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Renovations", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={RENOVATIONS_FAQS}
      />

      {/* 1. Hero */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — <BrandName variant="light" /> Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Property Renovation Services Central Florida —{" "}
            <span className="block text-brand-gold">Increase Your NOI</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Increase property value and rental income across your portfolio. CapEx projects managed end-to-end. One
            contract. One project manager. One invoice.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-brand-black">
            {["15–20% Rent Lift", "Portfolio Rollouts", "Permits Handled", "One Project Manager", "One Invoice"].map(
              (t, i) => (
                <li key={t} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
                  <span className="text-brand-white">{t}</span>
                </li>
              ),
            )}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Free Project Assessment
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          {/* 2. AIOverviewBlock */}
          <AIOverviewBlock hidden
            tone="dark"
            directAnswer="FiveServ Property Solutions manages CapEx and renovation projects for multifamily properties across Central Florida, delivering flooring, kitchen, bathroom, and full unit rehabs under one contract and invoice."
            supportingFacts="Value-add renovations average 15 to 20 percent rent increase in Central Florida multifamily properties. One project manager. One invoice. Serving property managers and direct owners."
          />
        </div>
      </section>

      {/* 3. ROI Section */}
      <section className="bg-brand-gold">
        <div className="container py-16">
          <SectionReveal className="grid gap-8 lg:grid-cols-[auto,1fr] lg:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-black text-brand-gold">
              <TrendingUp className="h-10 w-10" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-900/70">The ROI</p>
              <h2 className="mt-2 font-display font-bold text-3xl text-gray-900 sm:text-4xl lg:text-5xl">
                Value-add renovations in Central Florida multifamily average a{" "}
                <span className="underline decoration-4 underline-offset-4">15–20% rent increase</span>.
              </h2>
              <p className="mt-4 max-w-3xl text-gray-900/80">
                Payback periods of 18 to 36 months depending on scope. Every <BrandName variant="dark" /> renovation quote includes an
                estimated ROI so you can underwrite the project before a hammer swings.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. For Who — two columns */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Built for <span className="text-gray-900">Two Buyers</span>
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-8">
                <Building2 className="h-10 w-10 text-gray-900" />
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">Property Management Companies</h3>
                <p className="mt-3 text-gray-700">
                  Portfolio rollouts across multiple assets. Phased schedules to protect occupancy. Centralized
                  reporting for asset-management decks. One PM. One invoice cycle.
                </p>
              </article>
              <article className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-8">
                <User className="h-10 w-10 text-gray-900" />
                <h3 className="mt-4 font-display font-semibold text-2xl text-gray-900">Direct Property Owners</h3>
                <p className="mt-3 text-gray-700">
                  Single assets, small portfolios, value-add acquisitions. We work directly with owners on full unit
                  rehabs and common-area improvements that move the rent roll.
                </p>
              </article>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Project Types Grid — 6 cards */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Project <span className="text-gray-900">Types</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              From a single bathroom to a full property repositioning.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECT_TYPES.map((p) => (
                <article key={p.title} className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/15 text-gray-900">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-xl text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-gray-700">{p.desc}</p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Before / After slider */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Renovation <span className="text-gray-900">Transformations</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Drag the handle to compare before and after.
            </p>
            <div className="mt-10">
              <BeforeAfterSlider
                caption="From dated to leasable. Coordinated trades, one invoice, one timeline."
                ctaLabel="Get a Free Renovation Quote"
              />
            </div>
          </SectionReveal>
        </div>
      </section>


      {/* 6. Process — 3 steps */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              How It Works — <span className="text-gray-900">3 Steps</span>
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {[ClipboardCheck, HardHat, Receipt].map((Icon, i) => {
                const step = STEPS[i];
                return (
                  <li key={step.name} className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                    <div className="flex items-center gap-4">
                      <div className="font-display text-5xl leading-none text-gray-900">{i + 1}</div>
                      <Icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-xl text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-gray-700">{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </SectionReveal>
        </div>
      </section>

      {/* 7. FAQ — 8 questions */}
      <FaqAccordion faqs={RENOVATIONS_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-16">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">More from <BrandName variant="dark" /></h2>
              <ul className="mt-4 space-y-2">
                {(["make-ready", "maintenance", "residential"] as const).map((slug) => {
                  const s = SERVICES.find((x) => x.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link to={`/${slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                        <ArrowRight className="h-4 w-4" /> {s.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                    <ArrowRight className="h-4 w-4" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Renovations in your city</h2>
              <ul className="mt-4 space-y-2">
                {(["orlando-fl", "kissimmee-fl", "sanford-fl"] as const).map((slug) => {
                  const name = slug
                    .replace("-fl", "")
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ");
                  return (
                    <li key={slug}>
                      <Link
                        to={`/renovations/${slug}`}
                        className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline"
                      >
                        <ArrowRight className="h-4 w-4" /> Renovations in {name}, FL
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 8. CTA Final form */}
      <ContactCTA />
    </>
  );
};

export default RenovationsPage;
