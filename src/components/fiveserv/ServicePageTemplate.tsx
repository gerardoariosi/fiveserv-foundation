import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { SITE, CITIES, type ServiceSlug } from "@/lib/site-config";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import AIOverviewBlock from "./AIOverviewBlock";
import StatsBar from "./StatsBar";
import FaqAccordion from "./FaqAccordion";
import LeadMagnetSection from "./LeadMagnetSection";
import SectionHeading from "./SectionHeading";
import BrandName from "@/components/fiveserv/BrandName";

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

      {/* Hero — dark */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-white">— <BrandName /> Property Solutions</p>
          <h1 className="mt-3 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">{service.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{service.description}</p>

          <AIOverviewBlock hidden
            tone="dark"
            answer={`${service.description} ${SITE.brand} serves 18 cities in Central Florida. ${SITE.hours}. Call ${SITE.phone} or request a free quote online.`}
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-brand-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-yellow-400"
            >
              {service.cta}
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-lg border-2 border-brand-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Cities — light gray */}
      <section className="bg-gray-50">
        <div className="container py-28 lg:py-32">
          <SectionHeading
            eyebrow="Service Areas"
            subtext="Pick your city for local response times and ZIP coverage."
          >
            {service.name} <span className="text-gray-900">in your city</span>
          </SectionHeading>
          <div className="mt-16 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to={`/${service.slug}/${c.slug}`}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-900 transition-all hover:border-brand-gold hover:bg-brand-gold/5"
              >
                {c.name}, {c.state}
                <ArrowRight className="h-4 w-4 text-gray-900" />
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
