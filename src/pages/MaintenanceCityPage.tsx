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
import { SITE, CITIES, SERVICES, type CitySlug } from "@/lib/site-config";
import { CITY_EDITORIAL } from "@/lib/city-data";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import NotFound from "@/pages/NotFound";
import { useReveal } from "@/hooks/use-fiveserv";

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

const MaintenanceCityPage = () => {
  const { city: slug } = useParams<{ city: CitySlug }>();
  const city = CITIES.find((c) => c.slug === slug);
  const editorial = slug ? CITY_EDITORIAL[slug as CitySlug] : undefined;
  if (!city || !editorial) return <NotFound />;

  const path = `/maintenance-${city.slug}`;
  const title = `Property Maintenance ${city.name} ${city.state} | Make-Ready Services | ${SITE.brand}`;
  const description = `Property maintenance ${city.name} ${city.state}. ${SITE.brand} serves ZIP ${editorial.zips.join(", ")} and ${editorial.zones.slice(0, 3).join(", ")}. 5-day make-ready. One call. One invoice.`;

  const aiAnswer = `${SITE.brand} Property Solutions provides make-ready and maintenance services in ${city.name}, ${city.state}. We serve ZIP codes ${editorial.zips.join(", ")} and neighborhoods including ${editorial.zones.join(", ")}. We reach ${city.name} within ${editorial.responseMinutes} minutes from our Orlando base.`;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Cities", url: `${SITE.url}/cities` },
          { name: city.name, url: `${SITE.url}${path}` },
        ]}
        city={city}
        faqs={editorial.faqs}
      />

      {/* 1. Hero */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            {SITE.brand} Property Solutions • {city.name}, {city.state}
          </p>
          <h1 className="mt-3 font-display text-4xl text-brand-white sm:text-5xl lg:text-6xl">
            {city.name} {city.state} Property Maintenance —{" "}
            <span className="block text-brand-gold">One Call. One Team. One Invoice.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-white/90">
            {slug === "orlando-fl"
              ? `${SITE.brand} is based in ${city.name} — fastest response times in the market.`
              : `${SITE.brand} serves the ${city.name} multifamily market — bilingual team, written guarantees, one invoice.`}
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-brand-white">
            {[
              `${editorial.responseMinutes}-min from Orlando`,
              "5-Day Make-Ready",
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
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Free Quote in {city.name}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          {/* 2. AIOverviewBlock */}
          <AIOverviewBlock answer={aiAnswer} />
        </div>
      </section>

      {/* 3. Why FiveServ in [city] */}
      <section className="bg-brand-gray">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
              Why <span className="text-brand-gold">{SITE.brand}</span> in {city.name}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-brand-white/85">
              {editorial.angle ? (
                <p>{editorial.angle}</p>
              ) : (
                <p>
                  {SITE.brand} works {city.name} regularly out of our Orlando base — we know the {editorial.zones.slice(0, 2).join(" and ")} markets, and we cover ZIP codes {editorial.zips.join(", ")}. Same crews, same standards, every job.
                </p>
              )}
              <p>
                Coverage in {city.name} includes ZIP codes{" "}
                <span className="font-bold text-brand-white">{editorial.zips.join(", ")}</span>, with focus on{" "}
                <span className="font-bold text-brand-white">{editorial.zones.join(", ")}</span>.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Services — 4 cards */}
      <section className="bg-brand-black">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
              Services in <span className="text-brand-gold">{city.name}</span>
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.slug] ?? Wrench;
                return (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="hover-card group flex flex-col rounded-lg border border-brand-gray bg-brand-gray/30 p-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-brand-white">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-brand-white/80">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-gold group-hover:underline">
                      {s.cta} <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Response Time */}
      <section className="bg-brand-gold">
        <div className="container py-14">
          <SectionReveal className="grid gap-6 lg:grid-cols-[auto,1fr,auto] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-black text-brand-gold">
              <Clock className="h-8 w-8" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-black/70">Response Time</p>
              <h2 className="mt-1 font-display text-2xl text-brand-black sm:text-3xl">
                We typically reach {city.name} within{" "}
                <span className="underline decoration-4 underline-offset-4">{editorial.responseMinutes} minutes</span>{" "}
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
      <section className="bg-brand-gray">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-brand-white">
                Zones We Cover in {city.name}
              </h2>
              <ul className="mt-5 grid gap-2">
                {editorial.zones.map((z) => (
                  <li key={z} className="flex items-center gap-3 text-brand-white/90">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-gold" />
                    <span>{z}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-brand-white">
                ZIP Codes We Serve in {city.name}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {editorial.zips.map((z) => (
                  <span
                    key={z}
                    className="inline-flex items-center gap-2 rounded-md border border-brand-gold/40 bg-brand-black px-3 py-1.5 text-sm font-bold text-brand-gold"
                  >
                    <MapPin className="h-3.5 w-3.5" /> {z}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-white/70">
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
