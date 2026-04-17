import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site-config";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import StatsBar from "./StatsBar";
import FaqAccordion from "./FaqAccordion";
import AIOverviewBlock from "./AIOverviewBlock";
import LeadMagnetSection from "./LeadMagnetSection";

export type CityPageData = {
  city: typeof import("@/lib/site-config").CITIES[number];
  /** Optional service context if accessed via /[service]/[city] */
  service?: typeof SERVICES[number];
  faqs?: { q: string; a: string }[];
};

/**
 * Template for 15+ city pages. Slots: [CITY] [ZIPS] [ZONES] [TIME].
 * Page content intentionally minimal — composed by city pages later.
 */
export const CityPageTemplate = ({ city, service, faqs = [] }: CityPageData) => {
  const path = service ? `/${service.slug}/${city.slug}` : `/cities/${city.slug}`;
  const title = service
    ? `${service.name} in ${city.name}, ${city.state}`
    : `${SITE.brand} Property Solutions in ${city.name}, ${city.state}`;
  const description = service
    ? `${service.short} ${SITE.brand} serves ${city.name}, ${city.state}. ${city.responseTime}. Call ${SITE.phone}.`
    : `${SITE.brand} Property Solutions serves ${city.name}, ${city.state}. Make-ready in 5 days. ${city.responseTime}. ${SITE.phone}.`;

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

      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">{SITE.brand} Property Solutions</p>
          <h1 className="mt-3 font-display text-4xl text-brand-white sm:text-5xl">
            {service ? service.name : "Property Maintenance"} in <span className="text-brand-gold">{city.name}, {city.state}</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-brand-white/80">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-gold" /> {city.zones}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-gold" /> Response: {city.responseTime}</span>
          </div>

          <AIOverviewBlock
            answer={`${SITE.brand} Property Solutions provides ${service?.name.toLowerCase() ?? "property maintenance and make-ready services"} in ${city.name}, ${city.state}. We serve zip codes ${city.zips.slice(0, 5).join(", ")}${city.zips.length > 5 ? "+" : ""}. Make-ready in 5 days. One call. One invoice. ${city.responseTime} response. Available 24/7.`}
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="cta-gold rounded-md px-6 py-3 font-bold uppercase tracking-wide">Get a Free Quote</Link>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 font-bold uppercase tracking-wide text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray">
        <div className="container py-16">
          <h2 className="font-display text-2xl text-brand-white">ZIP Codes We Serve in {city.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {city.zips.map((z) => (
              <span key={z} className="rounded-md bg-brand-black px-3 py-1.5 text-sm font-bold text-brand-gold">{z}</span>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <LeadMagnetSection />
      {faqs.length > 0 && <FaqAccordion faqs={faqs} emitSchema={false} />}
    </>
  );
};

export default CityPageTemplate;
