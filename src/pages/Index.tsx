import { Link } from "react-router-dom";
import { Key, Wrench, Building2, Home } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";

import HeroSection from "@/components/fiveserv/HeroSection";
import ProblemSection from "@/components/fiveserv/ProblemSection";
import SolutionSection from "@/components/fiveserv/SolutionSection";
import ServiceCard from "@/components/fiveserv/ServiceCard";
import FivePillars from "@/components/fiveserv/FivePillars";
import LiveStatsBar from "@/components/fiveserv/LiveStatsBar";
import FamilyStory from "@/components/fiveserv/FamilyStory";
import TestimonialCard from "@/components/fiveserv/TestimonialCard";
import InteractiveMap from "@/components/fiveserv/InteractiveMap";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import LeadMagnetSection from "@/components/fiveserv/LeadMagnetSection";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import BeforeAfterSlider from "@/components/fiveserv/BeforeAfterSlider";
import TrustBar from "@/components/fiveserv/TrustBar";
import { useReveal } from "@/hooks/use-fiveserv";

const SERVICE_META = [
  { slug: "make-ready", icon: Key, badge: "5-Day Guarantee", cta: "Get a Make-Ready Quote" },
  { slug: "maintenance", icon: Wrench, badge: "24/7", cta: "Get a Maintenance Quote" },
  { slug: "renovations", icon: Building2, badge: undefined, cta: "Get a Renovation Quote" },
  { slug: "residential", icon: Home, badge: undefined, cta: "Get a Residential Quote" },
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
    <section className="section-light">
      <div ref={ref} className="container reveal py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-brand-black font-display font-black text-3xl lg:text-4xl leading-tight">
            Everything Your Properties Need.{" "}
            <span className="text-brand-gold">One Team.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
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
                  image={`/images/services/${svc.slug}.jpg`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-light">
      <div ref={ref} className="container reveal py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-brand-black font-display font-black text-3xl lg:text-4xl leading-tight">
            What Property Managers Say About <span className="text-brand-gold">FiveServ</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="cta-dark inline-block rounded-md px-6 py-3 font-bold uppercase tracking-wide">
            Join 50+ Property Managers Who Trust FiveServ
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
      <Seo title={title} description={description} path="/" ogImage={`${SITE.url}/images/og-default.jpg`} />
      <SchemaOrg
        organization
        breadcrumbs={[{ name: "Home", url: SITE.url }]}
        faqs={HOMEPAGE_FAQS}
        aggregateRating
      />

      {/* Element 3: Hero (Elements 1 & 2 are in RootLayout) */}
      <HeroSection />

      {/* Trust bar — right after hero */}
      <TrustBar />

      {/* Element 4: Problem — light gray */}
      <ProblemSection />

      {/* Element 5: Solution — light */}
      <SolutionSection />

      {/* Element 6: Services 2x2 Grid — light */}
      <ServicesGrid />

      {/* Element 7: 5 Pillars — gold */}
      <FivePillars />

      {/* Element 8: Stats counter — dark */}
      <LiveStatsBar />

      {/* Element 9: Family Story (light gray) + Before/After slider (light) */}
      <FamilyStory />
      <section className="section-light">
        <div className="container py-16">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Element 10: Testimonials — light */}
      <TestimonialsSection />

      {/* Element 11: Cities + interactive map — light gray */}
      <section className="section-light-gray">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Service Areas</p>
            <h2 className="text-brand-black font-display font-black text-3xl lg:text-4xl leading-tight">
              18 Cities Across <span className="text-brand-gold">Central Florida</span>
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
            Hover any city for response time. Tampa Bay coming soon.
          </p>
          <div className="mt-10">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Element 12: FAQ — light */}
      <FaqAccordion faqs={HOMEPAGE_FAQS} emitSchema={false} />

      {/* Element 13: Lead magnets (light gray) + final CTA form (dark) */}
      <LeadMagnetSection />
      <ContactCTA />
    </>
  );
};

export default Index;
