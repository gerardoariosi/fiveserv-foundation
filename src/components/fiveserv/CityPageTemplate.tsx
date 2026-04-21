import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site-config";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import StatsBar from "./StatsBar";
import FaqAccordion from "./FaqAccordion";
import AIOverviewBlock from "./AIOverviewBlock";
import LeadMagnetSection from "./LeadMagnetSection";
import SectionHeading from "./SectionHeading";
import BrandName from "@/components/fiveserv/BrandName";

export type CityPageData = {
  city: typeof import("@/lib/site-config").CITIES[number];
  service?: typeof SERVICES[number];
  faqs?: { q: string; a: string }[];
};

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

      {/* Hero — dark */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">— <BrandName variant="light" /> Property Solutions</p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            {service ? service.name : "Property Maintenance"} in <span className="text-brand-gold">{city.name}, {city.state}</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-gold" /> {city.zones}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-gold" /> Response: {city.responseTime}</span>
          </div>

          <AIOverviewBlock hidden
            tone="dark"
            answer={`${SITE.brand} Property Solutions provides ${service?.name.toLowerCase() ?? "property maintenance and make-ready services"} in ${city.name}, ${city.state}. We serve zip codes ${city.zips.slice(0, 5).join(", ")}${city.zips.length > 5 ? "+" : ""}. Make-ready in 5 days. One call. One invoice. ${city.responseTime} response. Available 24/7.`}
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-brand-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-yellow-400"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-lg border-2 border-brand-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ZIPs — light gray */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-32">
          <SectionHeading eyebrow="Coverage">
            ZIP Codes We Serve <span className="text-gray-900">in {city.name}</span>
          </SectionHeading>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {city.zips.map((z) => (
              <span key={z} className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-bold text-gray-900">{z}</span>
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
