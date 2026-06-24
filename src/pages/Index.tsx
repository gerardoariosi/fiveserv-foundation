import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, Phone, Quote, Wrench } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import { HOMEPAGE_FAQS } from "@/lib/homepage-faqs";

import HeroSection from "@/components/fiveserv/HeroSection";
import HeroServicePicker from "@/components/fiveserv/HeroServicePicker";

/**
 * Homepage section audit (2026-06-22):
 * Each of the following appears exactly once on this page —
 * HeroSection, HeroServicePicker, TrustBar, ProblemSection,
 * SolutionSection, ServicesGrid, VacancyCalculator, FivePillars, LiveStatsBar,
 * BeforeAfterSection, FamilyStory, TestimonialsSection, EmergencyBanner,
 * CityGrid, VisibleQA, FaqAccordion, LeadMagnetSection, ContactCTA, BrandsBar.
 * Duplicate H1/subhead inside HeroSection was removed at the same time.
 * Note: LiveStatsBar (animated counters) and HeroStatStrip (inside hero) both
 * surface stats — kept as-is per spec; flag if you want LiveStatsBar removed.
 */
import ProblemSection from "@/components/fiveserv/ProblemSection";
import SolutionSection from "@/components/fiveserv/SolutionSection";
import FivePillars from "@/components/fiveserv/FivePillars";
import LiveStatsBar from "@/components/fiveserv/LiveStatsBar";
import VacancyCalculator from "@/components/fiveserv/VacancyCalculator";
import FamilyStory from "@/components/fiveserv/FamilyStory";
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

/* ------------------------------------------------------------------ */
/* Shared visual primitives                                            */
/* ------------------------------------------------------------------ */

const SECTION_PAD = { paddingTop: 80, paddingBottom: 80 } as const;

const dotGridDark: React.CSSProperties = {
  backgroundColor: "#1A1A1A",
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg width=%2728%27 height=%2728%27 viewBox=%270 0 28 28%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27rgba(255,215,0,0.18)%27%3E%3Cpath d=%27M7 3 Q7.6 6.4 10 7 Q7.6 7.6 7 11 Q6.4 7.6 4 7 Q6.4 6.4 7 3 Z%27/%3E%3Cpath d=%27M21 17 Q21.6 20.4 24 21 Q21.6 21.6 21 25 Q20.4 21.6 18 21 Q20.4 20.4 21 17 Z%27/%3E%3C/g%3E%3C/svg%3E")',
  backgroundSize: "48px 48px",
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-center font-bold uppercase mb-3"
    style={{ color: "#FFD700", letterSpacing: "0.15em", fontSize: 11 }}
  >
    {children}
  </p>
);

/* ------------------------------------------------------------------ */
/* Services grid — dark + dot grid                                     */
/* ------------------------------------------------------------------ */

const SERVICE_META = [
  {
    slug: "maintenance",
    href: "/maintenance",
    icon: Wrench,
    badge: "24/7",
    name: "Property Maintenance and Repairs",
    description: "Ongoing maintenance, emergency repairs, and turnkey property care for managers and owners.",
  },
  {
    slug: "handyman-orlando",
    href: "/handyman-orlando",
    icon: Wrench,
    badge: undefined,
    name: "Handyman Services",
    description: "Skilled handymen for repairs, installations, and small projects across Orlando and Central Florida.",
  },
  {
    slug: "renovations",
    href: "/renovations",
    icon: Building2,
    badge: undefined,
    name: "CapEx and Renovations",
    description: "Full renovations, value-add upgrades, and capital improvements managed end-to-end.",
  },
  {
    slug: "residential",
    href: "/residential",
    icon: Home,
    badge: undefined,
    name: "Residential Services",
    description: "Home repairs, maintenance, and improvements for Central Florida homeowners.",
  },
] as const;

const TRADES = [
  { slug: "make-ready", label: "Make-Ready" },
  { slug: "painting", label: "Painting" },
  { slug: "plumbing", label: "Plumbing" },
  { slug: "electrical", label: "Electrical" },
  { slug: "hvac", label: "HVAC" },
  { slug: "drywall", label: "Drywall" },
  { slug: "flooring", label: "Flooring" },
  { slug: "carpentry", label: "Carpentry" },
  { slug: "cleaning", label: "Cleaning" },
];

const ServicesGrid = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section style={dotGridDark}>
      <div ref={ref} className="container reveal" style={SECTION_PAD}>
        <SectionLabel>— The Solution</SectionLabel>
        <h2 className="text-center font-display font-bold text-white" style={{ fontSize: "clamp(2rem,4vw,2.625rem)" }}>
          Full-Service Property Maintenance.{" "}
          <span className="text-brand-gold">One Team.</span>
        </h2>
        <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
          From unit turns and emergency repairs to full renovations and recurring maintenance — one team handles everything your property needs.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICE_META.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                to={m.href}
                key={m.slug}
                className="group relative block p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,215,0,0.2)",
                  borderRadius: 8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,215,0,0.8)";
                  e.currentTarget.style.background = "rgba(255,215,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,215,0,0.2)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              >
                {m.badge && (
                  <span
                    className="absolute -top-3 left-6 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase shadow-md"
                    style={{ backgroundColor: "#FFD700", color: "#1A1A1A" }}
                  >
                    {m.badge}
                  </span>
                )}
                <Icon className="h-8 w-8" style={{ color: "#FFD700" }} strokeWidth={2} />
                <h3 className="mt-4 font-display text-lg font-bold text-white">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{m.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 border-t pt-10" style={{ borderColor: "rgba(255,215,0,0.2)" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6 text-center">
            Individual Trade Services
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TRADES.map((t) => (
              <Link
                key={t.slug}
                to={`/${t.slug}`}
                className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition-all"
                style={{
                  border: "1px solid rgba(255,215,0,0.2)",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFD700";
                  e.currentTarget.style.color = "#1A1A1A";
                  e.currentTarget.style.borderColor = "#FFD700";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "rgba(255,215,0,0.2)";
                }}
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

/* ------------------------------------------------------------------ */
/* Testimonials — dark + dot grid + restyled cards                     */
/* ------------------------------------------------------------------ */

const TESTIMONIALS = [
  { quote: "Finding a reliable maintenance crew in Orlando is always the hardest part. A colleague recommended FiveServ and I gave them a shot. They knocked out the unit in 4 days — paint, cleaning, repairs, full inspection. Now they handle all my turns. Complete game changer.", name: "Carlos M.", title: "Property Manager", company: "Orlando, FL" },
  { quote: "Had a tenant move out on short notice and needed the unit turned fast. Called FiveServ Monday morning, they started Tuesday, done by Friday afternoon. New tenant moved in the following Monday. That turnaround is almost impossible to find.", name: "David R.", title: "Property Manager", company: "Kissimmee, FL" },
  { quote: "What I appreciate most is the communication. They update you without you having to chase them down. For anyone managing multiple properties that's huge. Work quality is solid. One invoice for everything.", name: "Patricia M.", title: "Director of Maintenance", company: "Sanford, FL" },
  { quote: "Had a pipe burst on a Sunday evening. FiveServ answered immediately and had someone at my house within 2 hours. Fixed the leak, documented everything with photos, and followed up the next morning. That level of response on a weekend is rare.", name: "Ana S.", title: "Property Owner", company: "Sanford, FL" },
  { quote: "Work gets done on schedule, one clean invoice, no surprises. You don't have to chase them. That consistency is extremely rare in this industry.", name: "Marcus T.", title: "Director of Maintenance", company: "Altamonte Springs, FL" },
  { quote: "Used to deal with a different contractor for every issue. FiveServ handled plumbing, painting, drywall — had the unit ready in less than a week. One invoice for everything. I didn't know that was possible.", name: "Jennifer W.", title: "Property Owner", company: "Winter Park, FL" },
  { quote: "They showed up on time, did the work, and sent one clean invoice. No back and forth, no chasing people down. That's all I ask and they delivered every single time.", name: "Robert A.", title: "Property Manager", company: "Lake Nona, FL" },
  { quote: "I was skeptical about the turnaround but they pulled it off. Unit was painted, cleaned, and inspected in 4 business days. Owner was happy, tenant moved in on time. Will use them again.", name: "Melissa C.", title: "Property Manager", company: "Winter Garden, FL" },
  { quote: "Emergency call on a Friday night — AC unit down, tenant with kids in the unit. FiveServ had someone there within the hour. Problem solved same night. That kind of reliability is everything.", name: "Tony B.", title: "Portfolio Owner", company: "Apopka, FL" },
];

const TestimonialsSection = () => {
  const ref = useReveal<HTMLDivElement>();
  const cards = TESTIMONIALS.map((t, i) => (
    <div
      key={i}
      className="flex-shrink-0 w-[320px] sm:w-[380px] p-7 mx-4 relative"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,215,0,0.2)",
        borderRadius: 12,
      }}
    >
      <Quote className="absolute top-4 left-4 h-8 w-8 opacity-60" style={{ color: "#FFD700" }} />
      <div className="flex items-center gap-1 text-lg justify-end" style={{ color: "#FFD700" }}>
        {Array.from({ length: 5 }).map((_, s) => (
          <span key={s}>★</span>
        ))}
      </div>
      <blockquote className="mt-6 text-sm leading-relaxed text-gray-200">"{t.quote}"</blockquote>
      <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,215,0,0.15)" }}>
        <p className="font-display font-bold text-sm" style={{ color: "#FFD700" }}>{t.name}</p>
        <p className="text-xs text-gray-400">{t.title}</p>
        <p className="text-xs text-gray-500">{t.company}</p>
      </div>
    </div>
  ));

  return (
    <section style={dotGridDark} className="overflow-hidden">
      <div ref={ref} className="reveal" style={SECTION_PAD}>
        <div className="container mb-10">
          <SectionLabel>— Testimonials</SectionLabel>
          <h2 className="text-center font-display font-bold text-white" style={{ fontSize: "clamp(2rem,4vw,2.625rem)" }}>
            What Our Clients Say
          </h2>
          <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
            Property managers and homeowners across Central Florida trust <BrandName variant="light" /> to handle every repair, every turn, every renovation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {cards}
            {cards}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8 italic container">
          Testimonials collected directly from clients via email and phone.
        </p>

        <div className="container mt-8 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all"
            style={{ backgroundColor: "#FFD700", color: "#1A1A1A" }}
          >
            Join 50+ Property Managers Who Trust FiveServ
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Before/After section with gold-framed slider                        */
/* ------------------------------------------------------------------ */

const BeforeAfterSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section style={{ backgroundColor: "#FAFAF8" }}>
      <div ref={ref} className="container reveal" style={SECTION_PAD}>
        <SectionLabel>— The Results</SectionLabel>
        <h2 className="text-center font-display font-bold text-brand-black mb-10" style={{ fontSize: "clamp(2rem,4vw,2.625rem)" }}>
          See the Difference
        </h2>
        <div
          className="overflow-hidden mx-auto"
          style={{
            borderRadius: 12,
            border: "2px solid #FFD700",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            maxWidth: 760,
          }}
        >
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Emergency banner                                                    */
/* ------------------------------------------------------------------ */

const EmergencyBanner = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#FFD700",
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="container py-10 lg:py-14">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <Phone className="h-7 w-7" style={{ color: "#FFD700" }} />
            </div>
            <div>
              <p className="font-display text-2xl lg:text-3xl font-black" style={{ color: "#1A1A1A" }}>
                Property Emergency?
              </p>
              <p className="text-sm font-semibold" style={{ color: "#1A1A1A", opacity: 0.85 }}>
                We respond in 2 hours. Available 24/7.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="font-display text-3xl lg:text-4xl font-black tracking-tight"
              style={{ color: "#1A1A1A" }}
            >
              {SITE.phone}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all"
              style={{ backgroundColor: "#1A1A1A", color: "#FFD700" }}
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Index = () => {
  const title = "Property Maintenance & Handyman Services Orlando FL | FiveServ";
  const description =
    "FiveServ is Orlando's trusted property maintenance and handyman service — licensed, insured, 24/7. Painting, plumbing, electrical, HVAC, bathroom remodel, flooring, cleaning and more across 18 cities in Central Florida. One call. One team. One invoice.";

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
      <HeroServicePicker />

      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesGrid />
      <VacancyCalculator />
      <FivePillars />
      <LiveStatsBar />
      <BeforeAfterSection />
      <FamilyStory />
      <TestimonialsSection />
      <EmergencyBanner />
      <CityGrid />

      <VisibleQA items={VISIBLE_QA} emitSchema={false} />
      <FaqAccordion faqs={HOMEPAGE_FAQS} emitSchema={false} />

      <LazyVisible minHeight={600}>
        <LeadMagnetSection />
      </LazyVisible>
      <LazyVisible minHeight={600}>
        <ContactCTA />
      </LazyVisible>

      <BrandsBar />
    </>
  );
};

export default Index;
