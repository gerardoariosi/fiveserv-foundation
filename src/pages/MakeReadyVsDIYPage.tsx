import { Link } from "react-router-dom";
import { Check, X, Clock, Building2, AlertTriangle, ArrowRight, Phone } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import VacancyCalculator from "@/components/fiveserv/VacancyCalculator";
import BrandName from "@/components/fiveserv/BrandName";

const COSTS = [
  {
    icon: Clock,
    title: "10+ Hours Per Unit Turn",
    body: "Calling vendors, scheduling trades, chasing follow-ups, managing handoffs — all on your plate.",
    label: "Time Cost",
  },
  {
    icon: Building2,
    title: "14+ Days Average Vacancy",
    body: "Every extra day a unit sits empty costs you real rent money. Industry average without a dedicated team: 14 days.",
    label: "Vacancy Cost",
  },
  {
    icon: AlertTriangle,
    title: "Zero Accountability",
    body: "When something goes wrong with 3 different vendors, everyone points fingers. You own the problem alone.",
    label: "Risk Cost",
  },
];

const ROWS: { feature: string; diy: string; fiveserv: string }[] = [
  { feature: "Turnaround Time", diy: "14+ days average", fiveserv: "5 business days guaranteed" },
  { feature: "Vendors to Coordinate", diy: "4 to 6 different vendors", fiveserv: "One call — we handle everything" },
  { feature: "Invoices Per Unit", diy: "4 to 6 invoices", fiveserv: "One clean invoice" },
  { feature: "Your Time Spent", diy: "8 to 12 hours per unit", fiveserv: "Zero — we own the process" },
  { feature: "Quality Consistency", diy: "Varies by vendor", fiveserv: "Same standard every unit" },
  { feature: "Photo Documentation", diy: "Usually none", fiveserv: "Full before and after report" },
  { feature: "Emergency Coverage", diy: "You find someone", fiveserv: "24/7 across Central Florida" },
  { feature: "Guarantee", diy: "None", fiveserv: "5 days in writing — or we make it right" },
];

const FAQS = [
  {
    q: "Is it cheaper to do make-ready in-house?",
    a: "When you factor in coordination time, extra vacancy days, and multiple invoices, in-house make-ready typically costs more than outsourcing to FiveServ. We provide a free estimate to compare directly.",
  },
  {
    q: "How does FiveServ complete make-ready in 5 days?",
    a: "Our in-house team handles painting, cleaning, repairs, and inspections directly. Licensed contractors for plumbing, electrical, and HVAC work under our coordination — no scheduling gaps, no handoff delays.",
  },
  {
    q: "What if my current vendors are cheaper?",
    a: "Price per trade may be similar — but add coordination time, vacancy days lost, and multiple invoices. FiveServ delivers the full make-ready faster and under one invoice.",
  },
  {
    q: "Do you work with existing property management software?",
    a: "Yes. We work alongside any PM software. You submit the work order your way — we handle the rest.",
  },
  {
    q: "What is included in a FiveServ make-ready?",
    a: "Painting, deep cleaning, repairs, drywall, inspection, rekeying, and photo report — all in 5 business days under one invoice.",
  },
  {
    q: "How do I get started?",
    a: "Call us or fill the form at fiveserv.net. We respond within 24 hours and schedule a free assessment.",
  },
];

const PATH = "/make-ready-vs-diy-property-management";
const URL = `${SITE.url}${PATH}/`;

const MakeReadyVsDIYPage = () => {
  return (
    <>
      <Seo
        title="Make-Ready DIY vs FiveServ | Which Saves More? | Orlando FL"
        description="Should you handle make-ready in-house or hire FiveServ? See the real cost, time, and risk comparison for property managers in Central Florida."
        path={`${PATH}/`}
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Make-Ready In-House vs FiveServ", url: URL },
        ]}
        faqs={FAQS}
      />

      {/* HERO */}
      <section className="bg-brand-black">
        <div className="container py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                Free Assessment
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <Clock className="h-3.5 w-3.5" /> 5-Day Guarantee
              </span>
            </div>
            <h1 className="mt-5 font-display font-bold text-4xl text-white sm:text-5xl lg:text-6xl leading-[1.05]">
              Make-Ready In-House vs Hiring <BrandName variant="light" /> — The Real Cost Comparison
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Is your in-house make-ready actually saving you money? The numbers say no.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="cta-gold cta-pill inline-flex items-center gap-2">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>

            <AIOverviewBlock
              tone="dark"
              answer="Property managers in Central Florida who outsource make-ready to FiveServ reduce vacancy days from 14+ to 5 business days guaranteed. Compared to coordinating in-house vendors, FiveServ delivers faster turnaround, one invoice, and zero coordination overhead. Serving Orlando, Kissimmee, Sanford, and 17 more cities."
            />
          </div>
        </div>
      </section>

      {/* THE REAL COST */}
      <section className="bg-white">
        <div className="container py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl text-center">
              What In-House Make-Ready Actually Costs You
            </h2>
            <p className="mt-3 text-center text-gray-600">
              Three hidden costs every property manager underestimates.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {COSTS.map((c) => (
                <article key={c.title} className="rounded-xl border-2 border-brand-gold bg-white p-7 shadow-card">
                  <span className="inline-flex items-center justify-center rounded-md bg-brand-gold/15 p-2.5">
                    <c.icon className="h-6 w-6 text-brand-gold" />
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">{c.label}</p>
                  <h3 className="mt-1 font-display font-bold text-xl text-gray-900">{c.title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl text-center">
              Side-by-Side Comparison
            </h2>
            <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 shadow-card bg-white">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.1fr]">
                <div className="hidden md:block bg-white px-5 py-4 border-b border-gray-200" />
                <div className="bg-gray-100 px-5 py-4 border-b border-gray-200">
                  <p className="font-display font-bold text-gray-900">In-House / DIY Make-Ready</p>
                </div>
                <div className="relative bg-brand-black px-5 py-4 border-b-2 border-brand-gold">
                  <p className="font-display font-bold text-white">
                    <BrandName variant="light" /> Make-Ready
                  </p>
                  <span className="absolute -top-3 right-4 rounded-full bg-brand-gold px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-black shadow">
                    Faster & Cheaper
                  </span>
                </div>

                {ROWS.map((row, i) => (
                  <div key={row.feature} className="contents">
                    <div className={`px-5 py-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <p className="font-semibold text-gray-900">{row.feature}</p>
                    </div>
                    <div className={`px-5 py-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <p className="flex items-start gap-2 text-gray-600">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                        <span>{row.diy}</span>
                      </p>
                    </div>
                    <div className="px-5 py-4 border-t border-brand-gold/30 bg-brand-black/[0.02]">
                      <p className="flex items-start gap-2 text-gray-900">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                        <span className="font-medium">{row.fiveserv}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <VacancyCalculator />

      {/* INTERNAL LINKS */}
      <section className="bg-gray-50">
        <div className="container py-14 text-center">
          <p className="text-sm uppercase tracking-widest font-bold text-gray-700">Related</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link to="/make-ready" className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:border-brand-gold transition-colors">
              Make-Ready
            </Link>
            <Link to="/maintenance" className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:border-brand-gold transition-colors">
              Maintenance
            </Link>
            <Link to="/fiveserv-vs-handyman-orlando" className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:border-brand-gold transition-colors">
              FiveServ vs Handyman
            </Link>
            <Link to="/maintenance-orlando-fl" className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:border-brand-gold transition-colors">
              Maintenance in Orlando
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 space-y-4">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-lg border border-gray-200 bg-white p-5 open:border-brand-gold transition-colors">
                  <summary className="cursor-pointer list-none font-semibold text-gray-900 flex justify-between items-center">
                    {f.q}
                    <span className="ml-4 text-brand-gold transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-black">
        <div className="container py-12 text-center">
          <h2 className="font-display font-bold text-3xl text-white sm:text-4xl">
            5 days. One call. One invoice. No excuses.
          </h2>
        </div>
      </section>
      <ContactCTA variant="b2b" />
    </>
  );
};

export default MakeReadyVsDIYPage;
