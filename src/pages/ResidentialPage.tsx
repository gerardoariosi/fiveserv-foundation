import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Droplets,
  Zap,
  Paintbrush,
  Hammer,
  Layers,
  Wrench,
  ShieldCheck,
  Clock,
  PhoneCall,
  ClipboardCheck,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES, CITIES } from "@/lib/site-config";
import { RESIDENTIAL_FAQS } from "@/lib/service-faqs";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";

const SERVICES_GRID = [
  { icon: Droplets, title: "Plumbing Repairs", desc: "Leaks, drains, water heaters, fixtures, garbage disposals." },
  { icon: Zap, title: "Electrical Work", desc: "Outlets, switches, lighting, ceiling fans, breaker panels." },
  { icon: Paintbrush, title: "Interior Painting", desc: "Single rooms or whole-home repaints. Clean lines, no mess." },
  { icon: Hammer, title: "Drywall Repairs", desc: "Holes, cracks, water damage patches, full sheet replacement." },
  { icon: Layers, title: "Flooring", desc: "LVP, tile, laminate. Repair, replace, or full-room install." },
  { icon: Wrench, title: "General Repairs", desc: "Doors, trim, cabinetry, weather stripping, and the rest." },
];

const STEPS = [
  {
    icon: PhoneCall,
    name: "Call or fill the form",
    text: "We schedule your free assessment within 24 to 48 hours. One number. A real person answers.",
  },
  {
    icon: ClipboardCheck,
    name: "We assess — clear quote",
    text: "On-site walk-through. Line-item quote in writing before any work starts. You decide what's in scope.",
  },
  {
    icon: CheckCircle2,
    name: "We fix it — one invoice",
    text: "Our team handles the work. Cleaned up after. One clean invoice. Backed by our family name.",
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

const ResidentialPage = () => {
  const path = "/residential";
  const title = "Home Maintenance Services Orlando FL | FiveServ Property Solutions";
  const description =
    "Home maintenance services Orlando FL. FiveServ provides plumbing, electrical, painting, drywall, flooring, and general repairs for homeowners across Central Florida. Licensed. Insured. 24/7.";
  const service = SERVICES.find((s) => s.slug === "residential")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Residential", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={RESIDENTIAL_FAQS}
      />

      {/* 1. Hero */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — <BrandName variant="light" /> Property Solutions
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Home Maintenance Services Orlando FL —{" "}
            <span className="block text-brand-gold">Repairs &amp; Renovations</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            The same crews that turn 500-unit communities — now at your home. One call. One team. One invoice.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <ShieldCheck className="h-4 w-4" /> Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
              <Clock className="h-4 w-4" /> Available 24/7
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Free Home Assessment
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          {/* 2. AIOverviewBlock */}
          <AIOverviewBlock
            answer={`${SITE.brand} provides professional home maintenance and repair services for homeowners across Central Florida. Services include plumbing, electrical, painting, drywall, flooring, and general repairs. Licensed, insured, available 24/7.`}
          />
        </div>
      </section>

      {/* 3. Trust — family story */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-xl border border-brand-gold/40">
              {/* TODO: Replace with real photo — family-fiveserv.jpg */}
              <img
                src="/images/family-fiveserv.svg"
                alt={`The ${SITE.brand} Venezuelan-American family behind every home repair in Central Florida`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-900">Built by a Family</p>
              <h2 className="mt-3 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
                A <span className="text-gray-900">Venezuelan-American family</span> with{" "}
                <span className="text-gray-900">15+ years</span> of combined experience.
              </h2>
              <p className="mt-5 text-gray-700">
                Five family members. One name on every invoice. We treat your home the way we'd treat our mother's —
                because some of us still do.
              </p>
              <p className="mt-4 text-gray-700">
                <BrandName variant="dark" /> started in maintenance and grew through referrals from homeowners and property managers
                across Central Florida. Same crews. Same standards. Whether it's one room or a 200-unit community.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 font-bold text-gray-900 hover:text-gray-900 hover:underline"
              >
                Meet the family <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Services Grid — 6 cards */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              What We <span className="text-gray-900">Fix at Home</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              From a dripping faucet to a full-room remodel. One number for it all.
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

      <StatsBar />

      {/* 5. Process — 3 steps */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              How It Works — <span className="text-gray-900">3 Steps</span>
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.name} className="hover-card rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-5xl leading-none text-gray-900">{i + 1}</div>
                    <step.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-xl text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-gray-700">{step.text}</p>
                </li>
              ))}
            </ol>
          </SectionReveal>
        </div>
      </section>

      {/* 6. Coverage — all 18 cities (GEO signal) */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Serving Homeowners Across{" "}
              <span className="text-gray-900">18 Central Florida Cities</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Same-day response in our Orlando metro core. Within 24 hours across the rest of the region.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/residential/${c.slug}`}
                  className="hover-card group flex items-center justify-between rounded-md border border-gray-100 bg-white shadow-sm px-4 py-3"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-900" />
                    <span className="font-semibold text-gray-900">
                      Home Repairs {c.name}, {c.state}
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

      {/* 7. FAQ — 8 questions */}
      <FaqAccordion faqs={RESIDENTIAL_FAQS} emitSchema={false} />

      {/* Internal links */}
      <section className="bg-gray-50">
        <div className="container py-16">
          <SectionReveal>
            <h2 className="font-display font-semibold text-2xl text-gray-900">More from <BrandName variant="dark" /></h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {(["make-ready", "maintenance", "renovations"] as const).map((slug) => {
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
          </SectionReveal>
        </div>
      </section>

      {/* 8. CTA Final form */}
      <ContactCTA variant="b2c" />
    </>
  );
};

export default ResidentialPage;
