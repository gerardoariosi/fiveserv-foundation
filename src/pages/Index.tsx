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
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % TESTIMONIALS.length;
        const el = scrollRef.current;
        if (el) {
          const cards = el.querySelectorAll(".snap-center");
          const card = cards[next] as HTMLElement;
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".snap-center");
    const card = cards[index] as HTMLElement;
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveIndex(index);
  };

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div ref={ref} className="reveal py-28 lg:py-32">
        {/* Header */}
        <div className="container mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-black">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-black animate-pulse" />
              Latest Reviews
            </span>
          </div>
          <SectionHeading
            eyebrow="Testimonials"
            subtext={<>Property managers across Central Florida trust <BrandName variant="dark" /> to handle every turn, every repair, every renovation.</>}
          >
            What Property Managers Say About <span className="text-gray-900"><BrandName variant="dark" /></span>
          </SectionHeading>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex-none w-[85vw] sm:w-[380px] lg:w-[360px] snap-center"
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-brand-gold" : "w-2 bg-gray-300"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="container mt-8 text-center">
          <p className="text-xs text-gray-400 italic mb-10">
            Testimonials collected directly from clients via email and phone.
          </p>
          <Link
            to="/reviews"
            className="inline-block rounded-lg bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-gray-800"
          >
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const title = "FiveServ | Make-Ready in 5 Days | Central FL";
  const description =
    "Family-owned property maintenance. Make-ready in 5 business days, guaranteed. One call. One team. One invoice. Serving Central Florida 24/7. fiveserv.net";

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
            directAnswer="FiveServ Property Solutions is a family-owned property maintenance company in Orlando, FL that completes every make-ready in 5 business days, guaranteed in writing, with one call, one team, one invoice."
            supportingFacts="Serving property managers with 30 to 500 units across 18 cities in Central Florida. 300+ units completed. 50+ communities served. Available 24/7 for emergency repairs. Licensed and insured in Florida."
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
