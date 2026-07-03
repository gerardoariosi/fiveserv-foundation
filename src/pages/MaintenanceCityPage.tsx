import { useParams, Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
  Key,
  Wrench,
  Building2,
  Home as HomeIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, CITIES, CITY_SERVICES, type CitySlug } from "@/lib/site-config";
import { CITY_EDITORIAL } from "@/lib/city-data";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import NotFound from "@/pages/NotFound";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";

const SERVICE_ICONS: Record<string, typeof Key> = {
  "make-ready": Key,
  maintenance: Wrench,
  renovations: Building2,
  residential: HomeIcon,
};

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

type MaintenanceCityPageProps = {
  /** Optional explicit slug — when provided, overrides the route param. */
  citySlug?: CitySlug;
};

const MaintenanceCityPage = ({ citySlug: propSlug }: MaintenanceCityPageProps = {}) => {
  const params = useParams<{ city: CitySlug }>();
  const slug = propSlug ?? params.city;
  const city = CITIES.find((c) => c.slug === slug);
  const editorial = slug ? CITY_EDITORIAL[slug as CitySlug] : undefined;
  if (!city || !editorial) return <NotFound />;

  const path = `/maintenance-${city.slug}`;
  const title = `Property Maintenance & Home Services ${city.name} FL | Handyman, Remodeling, Painting, Flooring | ${SITE.brand}`;
  const description = `${SITE.brand} serves ${city.name} FL — property maintenance, handyman services, bathroom remodel, kitchen remodel, painting, flooring, cleaning, plumbing, electrical, HVAC, drywall, carpentry. Licensed and insured. Available 24/7. Free quote in 24 hours. Call ${SITE.phone}.`;

  const aiAnswer = `${SITE.brand} Property Solutions is a licensed and insured property maintenance and home services company serving ${city.name}, ${city.state} and surrounding areas in Central Florida. ${SITE.brand} services in ${city.name} include property maintenance and repairs, handyman services, bathroom remodeling, kitchen remodeling, interior and exterior painting, flooring installation including LVP tile laminate and epoxy, cleaning services including move-out and deep clean, CapEx and renovations, make-ready and unit turns completed in 5 business days, plumbing services, electrical services, HVAC and AC repair, drywall repair and installation, and carpentry services. ${SITE.brand} serves homeowners and property managers across 18 cities in Central Florida. Licensed and insured in Florida. Available 24/7 for emergencies. Phone: ${SITE.phone}. Website: ${SITE.domain}`;

  const entityParagraph = `${SITE.brand} is ${city.name}'s licensed and insured home services company. We serve homeowners and property managers with property maintenance and repairs, handyman services, bathroom and kitchen remodeling, interior and exterior painting, flooring installation, cleaning services, plumbing, electrical, HVAC, drywall, and carpentry. One call. One team. One invoice. Available 24/7 across Central Florida.`;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Cities", url: `${SITE.url}/cities` },
          { name: `Property Maintenance ${city.name} FL`, url: `${SITE.url}${path}` },
        ]}
        city={city}
        faqs={editorial.faqs}
      />

      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden bg-brand-black pt-stack pb-16">
        <img
          src={editorial.heroImage}
          alt={`FiveServ property maintenance service ${city.name} Florida`}
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ objectPosition: editorial.heroImagePosition ?? "center center" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* 60% dark overlay for text legibility */}
        <div className="absolute inset-0 -z-10 bg-brand-black/60" aria-hidden />
        {/* extra bottom fade so the section blends into next light section */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-brand-black" aria-hidden />
        <div className="container">
          <p className="uppercase tracking-[0.12em] text-brand-gold text-base font-bold">
            — <BrandName variant="light" /> Property Solutions • {city.name}, {city.state}
          </p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            {city.name} {city.state} Property Maintenance —{" "}
            <span className="block text-brand-gold">One Call. One Team. One Invoice.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            {slug === "orlando-fl"
              ? `${SITE.brand} is based in ${city.name} — fastest response times in the market.`
              : `${SITE.brand} serves the ${city.name} multifamily market — bilingual team, written guarantees, one invoice.`}
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-white">
            {[
              `${editorial.responseMinutes}-min from Orlando`,
              "Written Work Guarantee",
              "24/7 Emergency",
              "Licensed & Insured",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Free Quote in {city.name}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          {/* 2. AIOverviewBlock (hidden, crawler-only structured answer) */}
          <AIOverviewBlock hidden answer={aiAnswer} />
        </div>
      </section>

      {/* 2b. Visible entity paragraph — for users AND crawlers */}
      <section className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700">
            {entityParagraph}
          </p>
        </div>
      </section>

      {/* 3. Why FiveServ in [city] */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Why <span className="text-gray-900"><BrandName variant="dark" /></span> in {city.name}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-gray-700">
              {editorial.angle ? (
                <p>{editorial.angle}</p>
              ) : (
                <p>
                  <BrandName variant="dark" /> works {city.name} regularly out of our Orlando base — we know the {editorial.zones.slice(0, 2).join(" and ")} markets, and we cover ZIP codes {editorial.zips.join(", ")}. Same crews, same standards, every job.
                </p>
              )}
              <p>
                Coverage in {city.name} includes ZIP codes{" "}
                <span className="font-semibold text-gray-900">{editorial.zips.join(", ")}</span>, with focus on{" "}
                <span className="font-semibold text-gray-900">{editorial.zones.join(", ")}</span>.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Services — full 14-service catalog */}
      <section style={{ backgroundColor: "#FAFAF8" }}>
        <div className="container py-20">
          <SectionReveal>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-black/60">
              {city.name} Services — One Call Covers Everything
            </p>
            <h2 className="mt-2 font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              {city.name} Property Maintenance & Home Services
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-600">
              Licensed and insured across Central Florida. One call. One team. One invoice.
            </p>
            <div className="mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {CITY_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="group flex flex-col bg-white border-l-4 border-[#FFD700] shadow-sm p-6 rounded-r-lg transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <h3 className="font-bold text-lg text-[#1A1A1A]">{s.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 flex-1">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#FFD700] group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Response Time */}
      <section className="bg-gray-50 border-y border-brand-gold/20">
        <div className="container py-14">
          <SectionReveal className="grid gap-6 lg:grid-cols-[auto,1fr,auto] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-black text-brand-gold">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-black/70">Response Time</p>
              <h2 className="mt-1 font-display font-semibold text-2xl text-brand-black sm:text-3xl">
                We typically reach {city.name} within{" "}
                <span className="text-brand-gold underline decoration-4 underline-offset-4">{editorial.responseMinutes} minutes</span>{" "}
                from our Orlando base.
              </h2>
            </div>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 rounded-md bg-brand-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-gold whitespace-nowrap hover:bg-brand-black/90"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* 6 + 7. Zones + ZIP codes */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">
                Zones We Cover in {city.name}
              </h2>
              <ul className="mt-5 grid gap-2">
                {editorial.zones.map((z) => (
                  <li key={z} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>{z}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">
                ZIP Codes We Serve in {city.name}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {editorial.zips.map((z) => (
                  <span
                    key={z}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-100 bg-white shadow-sm px-3 py-1.5 text-sm font-bold text-gray-900 hover:text-gray-900"
                  >
                    <MapPin className="h-3.5 w-3.5" /> {z}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Don't see your ZIP? Call {SITE.phone} — we cover the entire {city.name} area.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <StatsBar />

      {/* 8. FAQ */}
      <FaqAccordion
        faqs={editorial.faqs}
        title={`${city.name} FAQs`}
        emitSchema={false}
      />

      {/* 9. CTA Final */}
      <ContactCTA />
    </>
  );
};

export default MaintenanceCityPage;
