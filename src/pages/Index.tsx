import React from "react";
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
import LazyVisible from "@/components/fiveserv/LazyVisible";
import BeforeAfterSlider from "@/components/fiveserv/BeforeAfterSlider";
import TrustBar from "@/components/fiveserv/TrustBar";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";
import BrandsBar from "@/components/fiveserv/BrandsBar";

const SERVICE_META = [
  { slug: "make-ready", icon: Key, badge: "5-Day Guarantee", cta: "Learn More" },
  { slug: "maintenance", icon: Wrench, badge: "24/7", cta: "Learn More" },
  { slug: "renovations", icon: Building2, badge: undefined, cta: "Learn More" },
  { slug: "residential", icon: Home, badge: undefined, cta: "Learn More" },
] as const;

const TESTIMONIALS = [
  {
    quote: "Finding a reliable maintenance crew in Orlando is always the hardest part. A colleague recommended FiveServ and I gave them a shot. They knocked out the unit in 4 days — paint, cleaning, repairs, full inspection. Now they handle all my turns. Complete game changer.",
    name: "Carlos M.",
    title: "Property Manager",
    company: "Orlando, FL",
  },
  {
    quote: "Had a tenant move out on short notice and needed the unit turned fast. Called FiveServ Monday morning, they started Tuesday, done by Friday afternoon. New tenant moved in the following Monday. That turnaround is almost impossible to find.",
    name: "David R.",
    title: "Property Manager",
    company: "Kissimmee, FL",
  },
  {
    quote: "What I appreciate most is the communication. They update you without you having to chase them down. For anyone managing multiple properties that's huge. Work quality is solid. One invoice for everything.",
    name: "Patricia M.",
    title: "Director of Maintenance",
    company: "Sanford, FL",
  },
  {
    quote: "Had a pipe burst on a Sunday evening. FiveServ answered immediately and had someone at my house within 2 hours. Fixed the leak, documented everything with photos, and followed up the next morning. That level of response on a weekend is rare.",
    name: "Ana S.",
    title: "Property Owner",
    company: "Sanford, FL",
  },
  {
    quote: "Work gets done on schedule, one clean invoice, no surprises. You don't have to chase them. That consistency is extremely rare in this industry.",
    name: "Marcus T.",
    title: "Director of Maintenance",
    company: "Altamonte Springs, FL",
  },
  {
    quote: "Used to deal with a different contractor for every issue. FiveServ handled plumbing, painting, drywall — had the unit ready in less than a week. One invoice for everything. I didn't know that was possible.",
    name: "Jennifer W.",
    title: "Property Owner",
    company: "Winter Park, FL",
  },
  {
    quote: "They showed up on time, did the work, and sent one clean invoice. No back and forth, no chasing people down. That's all I ask and they delivered every single time.",
    name: "Robert A.",
    title: "Property Manager",
    company: "Lake Nona, FL",
  },
  {
    quote: "I was skeptical about the 5-day guarantee but they pulled it off. Unit was painted, cleaned, and inspected in 4 business days. Owner was happy, tenant moved in on time. Will use them again.",
    name: "Melissa C.",
    title: "Property Manager",
    company: "Winter Garden, FL",
  },
  {
    quote: "Emergency call on a Friday night — AC unit down, tenant with kids in the unit. FiveServ had someone there within the hour. Problem solved same night. That kind of reliability is everything.",
    name: "Tony B.",
    title: "Portfolio Owner",
    company: "Apopka, FL",
  },
];

const ServicesGrid = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-white">
      <div ref={ref} className="container reveal py-28 lg:py-32">
        <SectionHeading
          eyebrow="What We Do"
          subtext="From unit turns and emergency repairs to full renovations and recurring maintenance — one team handles everything your property needs."
        >
          Full-Service Property Maintenance.{" "}
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

        <div className="mt-12 border-t border-gray-100 pt-10">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
            Individual Trade Services
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { slug: "painting", label: "Painting" },
              { slug: "plumbing", label: "Plumbing" },
              { slug: "electrical", label: "Electrical" },
              { slug: "hvac", label: "HVAC" },
              { slug: "drywall", label: "Drywall" },
              { slug: "flooring", label: "Flooring" },
              { slug: "carpentry", label: "Carpentry" },
              { slug: "cleaning", label: "Cleaning" },
            ].map((t) => (
              <Link
                key={t.slug}
                to={`/${t.slug}`}
                className="flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-brand-gold hover:text-gray-900 hover:bg-brand-gold/5 transition-all"
              >
                {t.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 text-center">
            Need just one trade? We handle individual service calls too — no package required.
          </p>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const cards = TESTIMONIALS.map((t, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mx-4"
    >
      <div className="flex items-center gap-1 text-brand-gold text-lg">
        {Array.from({ length: 5 }).map((_, s) => <span key={s}>★</span>)}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
        "{t.quote}"
      </blockquote>
      <div className="mt-5 pt-5 border-t border-gray-100">
        <p className="font-display font-bold text-brand-black text-sm">{t.name}</p>
        <p className="text-xs text-gray-500">{t.title}</p>
        <p className="text-xs text-gray-400">{t.company}</p>
      </div>
    </div>
  ));

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div ref={ref} className="reveal py-28 lg:py-32">
        <div className="container mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-black">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-black animate-pulse" />
              Latest Reviews
            </span>
          </div>
          <SectionHeading
            eyebrow="Testimonials"
            subtext={<>Property managers and homeowners across Central Florida trust <BrandName variant="dark" /> to handle every repair, every turn, every renovation.</>}
          >
            What Our Clients Say
          </SectionHeading>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {cards}
            {cards}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8 italic container">
          Testimonials collected directly from clients via email and phone.
        </p>

        <div className="container mt-8 text-center">
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
  const title = "Property Maintenance & Home Services Central Florida | FiveServ";
  const description =
    "FiveServ Property Solutions — property maintenance, repairs, make-ready, painting, plumbing, HVAC, and renovations for property managers and homeowners across Central Florida. One call. One team. One invoice.";

  return (
    <>
      <Seo title={title} description={description} path="/" ogImage={`${SITE.url}/og-default.png`} />
      <SchemaOrg
        organization
        breadcrumbs={[{ name: "Home", url: SITE.url }]}
        faqs={[...HOMEPAGE_FAQS, ...VISIBLE_QA]}
        aggregateRating
      />

      <HeroSection />
      <section className="bg-white">
        <div className="container pt-12">
          <AIOverviewBlock hidden
            directAnswer="FiveServ Property Solutions is a full-service property maintenance and home repair company in Orlando, FL serving property managers and homeowners across Central Florida — painting, plumbing, electrical, HVAC, drywall, flooring, carpentry, cleaning, make-ready unit turns, and CapEx renovations."
            supportingFacts="Primary clients are property management companies with 30 to 500 units across 18 cities. Also serves Central Florida homeowners. 2 active crews. 300+ units completed. 50+ communities served. 15+ years combined experience. 24/7 emergency response — 2-hour on-site target. One call, one team, one invoice. Make-ready units guaranteed in 5 business days in writing. Serving Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa, FL."
          />
        </div>
      </section>
      <TrustBar />
      <BrandsBar />
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

      <VisibleQA items={VISIBLE_QA} emitSchema={false} />
      <FaqAccordion faqs={HOMEPAGE_FAQS} emitSchema={false} />
      <LeadMagnetSection />
      <ContactCTA />
    </>
  );
};

export default Index;
