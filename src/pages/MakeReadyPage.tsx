import { Link } from "react-router-dom";
import { Phone, Paintbrush, Sparkles, Wrench, Hammer, ClipboardCheck, Key, Camera, Layers, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import { MAKE_READY_FAQS } from "@/lib/service-faqs";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import SolutionSection from "@/components/fiveserv/SolutionSection";
import StatsBar from "@/components/fiveserv/StatsBar";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import VisibleQA from "@/components/fiveserv/VisibleQA";
import { VISIBLE_QA } from "@/lib/visible-qa";
import LeadMagnetSection from "@/components/fiveserv/LeadMagnetSection";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import BeforeAfterSlider from "@/components/fiveserv/BeforeAfterSlider";
import LiveStatsBar from "@/components/fiveserv/LiveStatsBar";
import TrustBar from "@/components/fiveserv/TrustBar";
import VacancyCalculator from "@/components/fiveserv/VacancyCalculator";
import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";


const INCLUDED = [
  { icon: Paintbrush, title: "Paint touch-up or full repaint" },
  { icon: Sparkles, title: "Deep cleaning" },
  { icon: Wrench, title: "Minor repairs" },
  { icon: Hammer, title: "Drywall repairs" },
  { icon: ClipboardCheck, title: "Move-out inspection" },
  { icon: Key, title: "Rekeying" },
  { icon: Camera, title: "Photo report" },
  { icon: Layers, title: "Flooring assessment" },
];

const STEPS = [
  {
    name: "Call or fill the form",
    text: "We schedule the on-site assessment within 24 hours. One number. No hold music.",
  },
  {
    name: "Our team assesses the unit",
    text: "You get a clear, line-item quote. No surprises. You decide what's in scope.",
  },
  {
    name: "Work complete in 5 business days",
    text: "One invoice. Photo report delivered with the keys. The unit is rent-ready.",
  },
];

const INTERNAL_SERVICES: ("maintenance" | "renovations" | "residential")[] = ["maintenance", "renovations", "residential"];
const INTERNAL_CITIES = ["orlando-fl", "kissimmee-fl", "sanford-fl"] as const;

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const MakeReadyPage = () => {
  const path = "/make-ready";
  const title = "Make-Ready Services Orlando FL | 5-Day Guarantee | FiveServ";
  const description =
    "Make-ready services Orlando FL. FiveServ completes every unit turn in 5 business days, guaranteed. Painting, cleaning, repairs, drywall, inspection, rekeying. One call. One invoice.";
  const service = SERVICES.find((s) => s.slug === "make-ready")!;

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Make-Ready", url: `${SITE.url}${path}` },
        ]}
        service={service}
        faqs={MAKE_READY_FAQS}
        howTo={{
          name: "FiveServ 5-Day Make-Ready Process",
          steps: STEPS,
        }}
      />

      {/* 1. Hero */}
      <section className="bg-brand-black pt-stack pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — <span style={{ whiteSpace: "nowrap" }}><span className="font-bold text-brand-gold">F</span><span className="text-white">iveServ</span></span> Property Solutions
          </p>
          <div className="mt-3 flex flex-col-reverse items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <h1 className="font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
              Make-Ready <span className="font-sans font-normal">&amp;</span> Unit Turn Services Orlando FL —
              <span className="block text-brand-gold">5-Day Guarantee</span>
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Central Florida property managers trust <BrandName variant="light" /> for make-ready. One call. Our team. 5 business days. Guaranteed in writing.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-brand-white">
            {["300+ Units", "50+ Communities", "18 Cities", "24/7", "5-Day Guarantee"].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
                <span className="text-brand-white">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold btn-shimmer rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Make-Ready Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          {/* 2. AIOverviewBlock */}
          <AIOverviewBlock hidden
            tone="dark"
            directAnswer="FiveServ Property Solutions completes every make-ready and unit turn in Central Florida in 5 business days, guaranteed in writing, including painting, cleaning, repairs, drywall, inspection, rekeying, and photo report."
            supportingFacts="Property managers across Orlando, Kissimmee, Sanford, and 15 more cities rely on FiveServ for consistent make-ready delivery under one invoice. 300+ units completed. No vendor coordination required."
          />
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* Live stats — right after hero */}
      <LiveStatsBar />

      {/* 3. Problem / Solution comparison (reuses homepage component) */}
      <SolutionSection />

      {/* 4. What is included — 8 items */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              What's <span className="text-gray-900">Included</span> in Every Make-Ready
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Eight things on every unit. Same checklist. Every time.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUDED.map((it) => (
                <article key={it.title} className="hover-card flex items-start gap-4 rounded-lg border border-gray-100 bg-white shadow-sm p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-gold/15 text-gray-900">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base text-gray-900">{it.title}</h3>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <VacancyCalculator />
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              See the <span className="text-gray-900">Transformation</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Drag the handle to compare. Same unit, 5 business days apart.
            </p>
            <div className="mt-10">
              <BeforeAfterSlider />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-900">
                <Award className="h-4 w-4" /> Written Guarantee
              </span>
              <h2 className="mt-4 font-display text-3xl text-gray-900 sm:text-5xl">
                The <span className="text-gray-900">5-Day Guarantee</span>
              </h2>
              <p className="mt-6 text-gray-700">
                Every make-ready complete in 5 business days from start. In writing. Signed.
              </p>
              <p className="mt-4 text-gray-700">
                If we miss the deadline, we make it right at our cost. No excuses. No fine print.
                You get the unit on time, or you get a credit. Period.
              </p>
              <a href="#contact-form" className="mt-8 inline-block cta-gold rounded-md px-6 py-3 font-bold uppercase tracking-wide">
                Lock In Your 5-Day Guarantee
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, title: "5 Business Days", body: "From start to keys." },
                { icon: ShieldCheck, title: "In Writing", body: "Signed guarantee on every job." },
                { icon: Award, title: "We Make It Right", body: "Miss it, we credit you." },
                { icon: Camera, title: "Photo Proof", body: "Before-and-after on every unit." },
              ].map((b) => (
                <div key={b.title} className="rounded-lg border border-gray-100 bg-white shadow-sm p-5">
                  <b.icon className="h-7 w-7 text-gray-900" />
                  <h3 className="mt-3 font-display text-lg text-gray-900">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{b.body}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <StatsBar />

      {/* 6. HowTo Process */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              How It Works — <span className="text-gray-900">3 Steps</span>
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.name} className="hover-card relative rounded-lg border border-gray-100 bg-white shadow-sm p-6">
                  <div className="font-display text-6xl leading-none text-gray-900">{i + 1}</div>
                  <h3 className="mt-4 font-display font-semibold text-xl text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-gray-700">{step.text}</p>
                </li>
              ))}
            </ol>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Lead Magnet */}
      <LeadMagnetSection variant="checklist" />

      {/* 8. FAQ — 8 questions */}
      <VisibleQA items={VISIBLE_QA} emitSchema={false} />
      <FaqAccordion faqs={MAKE_READY_FAQS} emitSchema={false} />

      {/* Internal links — services + cities (SEO requirement: 3+ services + 2+ cities) */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">More from <BrandName variant="dark" /></h2>
              <ul className="mt-4 space-y-2">
                {INTERNAL_SERVICES.map((slug) => {
                  const s = SERVICES.find((x) => x.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link to={`/${slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                        <ArrowRight className="h-4 w-4" /> {s.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                    <ArrowRight className="h-4 w-4" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-gray-900">Make-Ready in your city</h2>
              <ul className="mt-4 space-y-2">
                {INTERNAL_CITIES.map((slug) => {
                  const name = slug.replace("-fl", "").split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
                  return (
                    <li key={slug}>
                      <Link to={`/make-ready/${slug}`} className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                        <ArrowRight className="h-4 w-4" /> Make-Ready {name}, FL
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link to="/make-ready-vs-diy-property-management" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                    <ArrowRight className="h-4 w-4" /> Make-Ready In-House vs <BrandName variant="dark" />
                  </Link>
                </li>
                <li>
                  <Link to="/fiveserv-vs-handyman-orlando" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 hover:underline">
                    <ArrowRight className="h-4 w-4" /> <BrandName variant="dark" /> vs Handyman in Orlando
                  </Link>
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 9. CTA Final form */}
      <ContactCTA />
    </>
  );
};

export default MakeReadyPage;
