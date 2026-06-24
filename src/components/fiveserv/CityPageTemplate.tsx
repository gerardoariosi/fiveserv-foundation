import { SITE, SERVICES } from "@/lib/site-config";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import FaqAccordion from "./FaqAccordion";
import AIOverviewBlock from "./AIOverviewBlock";
import LeadMagnetSection from "./LeadMagnetSection";
import PageHero from "./shared/PageHero";
import TrustStrip from "./shared/TrustStrip";
import RelatedServicesPills from "./shared/RelatedServicesPills";
import PageCTA from "./shared/PageCTA";

export type CityPageData = {
  city: typeof import("@/lib/site-config").CITIES[number];
  service?: typeof SERVICES[number];
  faqs?: { q: string; a: string }[];
};

const cityImage = (slug: string) => `/images/cities/${slug}.jpg`;

export const CityPageTemplate = ({ city, service, faqs = [] }: CityPageData) => {
  const path = service ? `/${service.slug}/${city.slug}` : `/cities/${city.slug}`;
  const title = service
    ? `${service.name} in ${city.name}, ${city.state}`
    : `${SITE.brand} Property Solutions in ${city.name}, ${city.state}`;
  const description = service
    ? `${service.short} ${SITE.brand} serves ${city.name}, ${city.state}. ${city.responseTime}. Call ${SITE.phone}.`
    : `${SITE.brand} Property Solutions serves ${city.name}, ${city.state}. Make-ready in 5 days. ${city.responseTime}. ${SITE.phone}.`;

  const heroTitle = service ? service.name : "Property Maintenance";
  const heroAccent = `in ${city.name}, ${city.state}`;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: service ? service.name : "Cities", url: `${SITE.url}${service ? `/${service.slug}` : "/cities"}` },
          { name: city.name, url: `${SITE.url}${path}` },
        ]}
        city={city}
        service={service}
        faqs={faqs}
      />

      <PageHero
        image={cityImage(city.slug)}
        imageAlt={`${heroTitle} in ${city.name}, ${city.state}`}
        eyebrow={`Local response · ${city.responseTime}`}
        title={heroTitle}
        titleAccent={heroAccent}
        subtitle={service ? service.short : `Family-owned. Licensed and insured. Serving every neighborhood in ${city.name}.`}
        primaryCTA={{ label: "Get a free quote", to: "/contact" }}
      />

      <TrustStrip
        stats={[
          { value: city.responseTime, label: "Local response" },
          { value: `${city.zips.length}+`, label: "ZIPs served" },
          { value: "24/7", label: "Emergency" },
          { value: "5★", label: "Local reviews" },
        ]}
      />

      <AIOverviewBlock
        hidden
        tone="dark"
        answer={`${SITE.brand} Property Solutions provides ${service?.name.toLowerCase() ?? "property maintenance and make-ready services"} in ${city.name}, ${city.state}. We serve zip codes ${city.zips.slice(0, 5).join(", ")}${city.zips.length > 5 ? "+" : ""}. ${city.responseTime} response. Available 24/7.`}
      />

      {/* ZIPs */}
      <section className="bg-white">
        <div className="container py-20 sm:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black/55">
              Coverage
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-brand-black">
              ZIP codes we serve in {city.name}
            </h2>
            <p className="mt-3 text-base text-brand-black/65">{city.zones}</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {city.zips.map((z) => (
              <span
                key={z}
                className="rounded-full border border-black/8 bg-[#FAF8F3] px-4 py-1.5 text-sm font-semibold text-brand-black"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
      </section>

      <RelatedServicesPills excludeSlug={service?.slug} title="Other services in this city" />

      <LeadMagnetSection />
      {faqs.length > 0 && <FaqAccordion faqs={faqs} emitSchema={false} />}

      <PageCTA />
    </>
  );
};

export default CityPageTemplate;
