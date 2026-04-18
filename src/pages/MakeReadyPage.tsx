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
import LeadMagnetSection from "@/components/fiveserv/LeadMagnetSection";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import { useReveal } from "@/hooks/use-fiveserv";

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
  const title = "Make-Ready Services Central Florida | 5-Day Guarantee | FiveServ";
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
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            {SITE.brand} Property Solutions
          </p>
          <h1 className="mt-3 font-display text-4xl text-brand-white sm:text-5xl lg:text-6xl">
            Make-Ready &amp; Unit Turn Services —
            <span className="block text-brand-gold">5-Day Guarantee</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-white/90">
            Central Florida property managers trust {SITE.brand} for make-ready. One call. Our team. 5 business days. Guaranteed in writing.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-brand-white">
            {["300+ Units", "50+ Communities", "18 Cities", "24/7", "5-Day Guarantee"].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Get a Make-Ready Quote
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          {/* 2. AIOverviewBlock */}
          <AIOverviewBlock
            answer={`${SITE.brand} Property Solutions completes every make-ready in Central Florida in 5 business days. Services include painting, cleaning, repairs, drywall, inspection, rekeying, and photo report. One call, one invoice.`}
          />
        </div>
      </section>

      {/* 3. Problem / Solution comparison (reuses homepage component) */}
      <SolutionSection />

      {/* 4. What is included — 8 items */}
      <section className="bg-brand-gray">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
              What's <span className="text-brand-gold">Included</span> in Every Make-Ready
            </h2>
            <p className="mt-3 max-w-2xl text-brand-white/80">
              Eight things on every unit. Same checklist. Every time.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUDED.map((it) => (
                <article key={it.title} className="hover-card flex items-start gap-4 rounded-lg border border-brand-gray bg-brand-black p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base text-brand-white">{it.title}</h3>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Before / After slider */}
      <section className="bg-brand-black">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
              See the <span className="text-brand-gold">Transformation</span>
            </h2>
            <p className="mt-3 max-w-2xl text-brand-white/80">
              Drag the handle to compare. Same unit, 5 business days apart.
            </p>
            <div className="mt-10">
              <BeforeAfterSlider />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-brand-black">
        <div className="container py-20">
          <SectionReveal className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <Award className="h-4 w-4" /> Written Guarantee
              </span>
              <h2 className="mt-4 font-display text-3xl text-brand-white sm:text-5xl">
                The <span className="text-brand-gold">5-Day Guarantee</span>
              </h2>
              <p className="mt-6 text-brand-white/90">
                Every make-ready complete in 5 business days from start. In writing. Signed.
              </p>
              <p className="mt-4 text-brand-white/80">
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
                <div key={b.title} className="rounded-lg border border-brand-gold/40 bg-brand-gray/40 p-5">
                  <b.icon className="h-7 w-7 text-brand-gold" />
                  <h3 className="mt-3 font-display text-lg text-brand-white">{b.title}</h3>
                  <p className="mt-1 text-sm text-brand-white/70">{b.body}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <StatsBar />

      {/* 6. HowTo Process */}
      <section className="bg-brand-gray">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
              How It Works — <span className="text-brand-gold">3 Steps</span>
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.name} className="hover-card relative rounded-lg border border-brand-gray bg-brand-black p-6">
                  <div className="font-display text-6xl leading-none text-brand-gold">{i + 1}</div>
                  <h3 className="mt-4 font-display text-xl text-brand-white">{step.name}</h3>
                  <p className="mt-2 text-brand-white/80">{step.text}</p>
                </li>
              ))}
            </ol>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Lead Magnet */}
      <LeadMagnetSection />

      {/* 8. FAQ — 8 questions */}
      <FaqAccordion faqs={MAKE_READY_FAQS} emitSchema={false} />

      {/* Internal links — services + cities (SEO requirement: 3+ services + 2+ cities) */}
      <section className="bg-brand-gray">
        <div className="container py-16">
          <SectionReveal className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-brand-white">More from {SITE.brand}</h2>
              <ul className="mt-4 space-y-2">
                {INTERNAL_SERVICES.map((slug) => {
                  const s = SERVICES.find((x) => x.slug === slug)!;
                  return (
                    <li key={slug}>
                      <Link to={`/${slug}`} className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                        <ArrowRight className="h-4 w-4" /> {s.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                    <ArrowRight className="h-4 w-4" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-brand-white">Make-Ready in your city</h2>
              <ul className="mt-4 space-y-2">
                {INTERNAL_CITIES.map((slug) => {
                  const name = slug.replace("-fl", "").split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
                  return (
                    <li key={slug}>
                      <Link to={`/make-ready/${slug}`} className="inline-flex items-center gap-2 text-brand-gold hover:underline">
                        <ArrowRight className="h-4 w-4" /> Make-Ready {name}, FL
                      </Link>
                    </li>
                  );
                })}
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
