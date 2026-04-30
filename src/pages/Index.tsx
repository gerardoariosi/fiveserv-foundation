import { Link } from "react-router-dom";
import { Key, Wrench, Building2, Home } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";

import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import HeroSection from "@/components/fiveserv/HeroSection";
import ProblemSection from "@/components/fiveserv/ProblemSection";
import SolutionSection from "@/components/fiveserv/SolutionSection";
import ServiceCard from "@/components/fiveserv/ServiceCard";
import SectionHeading from "@/components/fiveserv/SectionHeading";
import FivePillars from "@/components/fiveserv/FivePillars";
import LiveStatsBar from "@/components/fiveserv/LiveStatsBar";
import VacancyCalculator from "@/components/fiveserv/VacancyCalculator";
import FamilyStory from "@/components/fiveserv/FamilyStory";
import TestimonialCard from "@/components/fiveserv/TestimonialCard";
import CityGrid from "@/components/fiveserv/CityGrid";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import VisibleQA from "@/components/fiveserv/VisibleQA";
import { VISIBLE_QA } from "@/lib/visible-qa";
import LeadMagnetSection from "@/components/fiveserv/LeadMagnetSection";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import BeforeAfterSlider from "@/components/fiveserv/BeforeAfterSlider";
import TrustBar from "@/components/fiveserv/TrustBar";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";

const SERVICE_META = [
  { slug: "make-ready", icon: Key, badge: "5-Day Guarantee", cta: "Learn More" },
  { slug: "maintenance", icon: Wrench, badge: "24/7", cta: "Learn More" },
  { slug: "renovations", icon: Building2, badge: undefined, cta: "Learn More" },
  { slug: "residential", icon: Home, badge: undefined, cta: "Learn More" },
] as const;

const TESTIMONIALS = [
  {
    quote: "[TESTIMONIAL_1] — placeholder until first real PM testimonial.",
    name: "[NAME_1]",
    title: "[TITLE_1]",
    company: "[COMPANY_1]",
  },
  {
    quote: "[TESTIMONIAL_2] — placeholder until first real PM testimonial.",
    name: "[NAME_2]",
    title: "[TITLE_2]",
    company: "[COMPANY_2]",
  },
  {
    quote: "[TESTIMONIAL_3] — placeholder until first real PM testimonial.",
    name: "[NAME_3]",
    title: "[TITLE_3]",
    company: "[COMPANY_3]",
  },
];

const ServicesGrid = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-white">
      <div ref={ref} className="container reveal py-28 lg:py-32">
        <SectionHeading
          eyebrow="Our Services"
          subtext="Four core service lines. One team. One invoice. One point of accountability."
        >
          Everything Your Properties Need.{" "}
          <span className="text-gray-900">One Team.</span>
        </SectionHeading>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICE_META.map((m) => {
            const svc = SERVICES.find((s) => s.slug === m.slug)!;
            return (
              <div key={svc.slug} className="relative">
                {m.badge && (
                  <span className="absolute -top-3 left-6 z-10 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase text-brand-black shadow-md">
                    {m.badge}
                  </span>
                )}
                <ServiceCard
                  icon={m.icon}
                  title={svc.name}
                  description={svc.description}
                  href={`/${svc.slug}`}
                  cta={m.cta}
                  index={SERVICE_META.indexOf(m)}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-gray-100 pt-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Also available</p>
          <div className="flex flex-wrap gap-3">
            {[
              { slug: "plumbing", label: "Plumbing" },
              { slug: "electrical", label: "Electrical" },
              { slug: "hvac", label: "HVAC" },
              { slug: "drywall", label: "Drywall" },
              { slug: "painting", label: "Painting" },
              { slug: "flooring", label: "Flooring" },
              { slug: "carpentry", label: "Carpentry" },
              { slug: "cleaning", label: "Cleaning" },
            ].map((t) => (
              <Link
                key={t.slug}
                to={`/${t.slug}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-gold hover:text-gray-900 transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-gray-50">
      <div ref={ref} className="container reveal py-28 lg:py-32">
        <SectionHeading
          eyebrow="Testimonials"
          subtext={<>Property managers across Central Florida trust <BrandName variant="dark" /> to handle every turn, every repair, every renovation.</>}
        >
          What Property Managers Say About <span className="text-gray-900"><BrandName variant="dark" /></span>
        </SectionHeading>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-gray-800"
          >
            Join 50+ Property Managers Who Trust <BrandName variant="light" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const title = "FiveServ | Make-Ready in 5 Days | Central Florida Property Maintenance";
  const description =
    "Family-owned property maintenance. Make-ready in 5 business days, guaranteed. One call. One team. One invoice. Serving Central Florida 24/7. fiveserv.net";

  return (
    <>
      <Seo title={title} description={description} path="/" ogImage={`${SITE.url}/og-default.png`} />
      <SchemaOrg
        organization
        breadcrumbs={[{ name: "Home", url: SITE.url }]}
        faqs={HOMEPAGE_FAQS}
        aggregateRating
      />

      <HeroSection />
      <section className="bg-white">
        <div className="container pt-12">
          <AIOverviewBlock hidden
            directAnswer="FiveServ Property Solutions is a family-owned property maintenance company in Orlando, FL that completes every make-ready in 5 business days, guaranteed in writing, with one call, one team, one invoice."
            supportingFacts="Serving property managers with 30 to 500 units across 18 cities in Central Florida. 300+ units completed. 50+ communities served. Available 24/7 for emergency repairs. Licensed and insured in Florida."
          />
        </div>
      </section>
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesGrid />
      <VacancyCalculator />
      <FivePillars />
      <LiveStatsBar />
      <FamilyStory />
      <section className="bg-white">
        <div className="container py-28 lg:py-32">
          <BeforeAfterSlider />
        </div>
      </section>
      <TestimonialsSection />

      {/* Cities grid — light gray */}
      <CityGrid />

      <VisibleQA items={VISIBLE_QA} />
      <FaqAccordion faqs={HOMEPAGE_FAQS} emitSchema={false} />
      <LeadMagnetSection />
      <ContactCTA />
    </>
  );
};

export default Index;
