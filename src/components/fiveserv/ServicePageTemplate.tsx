import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE, CITIES, type ServiceSlug } from "@/lib/site-config";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import AIOverviewBlock from "./AIOverviewBlock";
import FaqAccordion from "./FaqAccordion";
import LeadMagnetSection from "./LeadMagnetSection";
import PageHero from "./shared/PageHero";
import TrustStrip from "./shared/TrustStrip";
import RelatedServicesPills from "./shared/RelatedServicesPills";
import PageCTA from "./shared/PageCTA";

export type ServicePageData = {
  service: { slug: ServiceSlug; name: string; short: string; description: string; cta: string };
  faqs?: { q: string; a: string }[];
};

// Map service slugs to hero images we have on disk.
const SERVICE_IMAGE: Record<string, string> = {
  maintenance: "/images/maintenance-repair.jpg",
  painting: "/images/services/painting.jpg",
  flooring: "/images/services/flooring.jpg",
  cleaning: "/images/services/cleaning.jpg",
  electrical: "/images/services/electrical.jpg",
  plumbing: "/images/services/plumbing.jpg",
  hvac: "/images/services/hvac.jpg",
  drywall: "/images/services/drywall.jpg",
  carpentry: "/images/services/carpentry.jpg",
  "make-ready": "/images/make-ready-unit.jpg",
  renovations: "/images/renovation-project.jpg",
  residential: "/images/residential-service.jpg",
};

/** Template for all standard service pages — Stan's-style cream + photo hero. */
export const ServicePageTemplate = ({ service, faqs = [] }: ServicePageData) => {
  const path = `/${service.slug}`;
  const title = `${service.name} | ${SITE.brand} Property Solutions`;
  const description = `${service.description} Serving Central Florida. Call ${SITE.phone}.`;
  const heroImage = SERVICE_IMAGE[service.slug] ?? "/images/orlando.webp";

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

      <PageHero
        image={heroImage}
        imageAlt={`${service.name} by ${SITE.brand} in Central Florida`}
        eyebrow="Licensed · Insured · 24/7"
        title={service.name}
        subtitle={service.description}
        primaryCTA={{ label: service.cta, to: "/contact" }}
      />

      <TrustStrip />

      <AIOverviewBlock
        hidden
        tone="dark"
        answer={`${service.description} ${SITE.brand} serves 18 cities in Central Florida. ${SITE.hours}. Call ${SITE.phone} or request a free quote online.`}
      />

      {/* Cities served — cream card grid */}
      <section className="bg-white">
        <div className="container py-20 sm:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black/55">
              Service Areas
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-brand-black">
              {service.name} in your city
            </h2>
            <p className="mt-3 text-base text-brand-black/65">
              Pick your city for local response times and ZIP coverage.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to={`/${service.slug}/${c.slug}`}
                className="group flex items-center justify-between rounded-full bg-[#FAF8F3] border border-black/5 px-5 py-3 text-sm font-semibold text-brand-black transition-all hover:-translate-y-0.5 hover:border-brand-gold hover:bg-white"
              >
                {c.name}
                <ArrowRight className="h-4 w-4 text-brand-black/40 group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedServicesPills excludeSlug={service.slug} />

      <LeadMagnetSection />
      {faqs.length > 0 && <FaqAccordion faqs={faqs} emitSchema={false} />}

      <PageCTA />
    </>
  );
};

export default ServicePageTemplate;
