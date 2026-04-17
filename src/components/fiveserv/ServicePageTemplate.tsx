import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { SITE, CITIES, type ServiceSlug } from "@/lib/site-config";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import AIOverviewBlock from "./AIOverviewBlock";
import StatsBar from "./StatsBar";
import FaqAccordion from "./FaqAccordion";
import LeadMagnetSection from "./LeadMagnetSection";

export type ServicePageData = {
  service: { slug: ServiceSlug; name: string; short: string; description: string; cta: string };
  faqs?: { q: string; a: string }[];
};

/** Template for 4 service pages */
export const ServicePageTemplate = ({ service, faqs = [] }: ServicePageData) => {
  const path = `/${service.slug}`;
  const title = `${service.name} | ${SITE.brand} Property Solutions`;
  const description = `${service.description} Serving Central Florida. Call ${SITE.phone}.`;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: service.name, url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={faqs}
      />

      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">{SITE.brand} Property Solutions</p>
          <h1 className="mt-3 font-display text-4xl text-brand-white sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-white/80">{service.description}</p>

          <AIOverviewBlock answer={`${service.description} ${SITE.brand} serves 18 cities in Central Florida. ${SITE.hours}. Call ${SITE.phone} or request a free quote online.`} />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="cta-gold rounded-md px-6 py-3 font-bold uppercase tracking-wide">{service.cta}</Link>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 font-bold uppercase tracking-wide text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="bg-brand-gray">
        <div className="container py-16">
          <h2 className="font-display text-3xl text-brand-white">{service.name} in your city</h2>
          <p className="mt-2 text-brand-white/80">Pick your city for local response times and ZIP coverage.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to={`/${service.slug}/${c.slug}`}
                className="hover-card flex items-center justify-between rounded-md border border-brand-gray bg-brand-black px-4 py-3 text-sm font-bold text-brand-white"
              >
                {c.name}, {c.state}
                <ArrowRight className="h-4 w-4 text-brand-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnetSection />
      {faqs.length > 0 && <FaqAccordion faqs={faqs} emitSchema={false} />}
    </>
  );
};

export default ServicePageTemplate;
