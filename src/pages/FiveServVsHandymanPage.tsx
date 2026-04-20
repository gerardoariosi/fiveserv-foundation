import { Link } from "react-router-dom";
import { Check, X, ShieldCheck, Clock, ArrowRight, Phone } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import TestimonialCard from "@/components/fiveserv/TestimonialCard";
import BrandName from "@/components/fiveserv/BrandName";

const ROWS: { feature: string; handyman: string; fiveserv: string }[] = [
  { feature: "Licensed & Insured", handyman: "Often not licensed", fiveserv: "Fully licensed and insured in Florida" },
  { feature: "Make-Ready Guarantee", handyman: "No guarantee", fiveserv: "5 business days in writing" },
  { feature: "Services Covered", handyman: "Basic repairs only", fiveserv: "Make-ready, plumbing, electrical, HVAC, renovations" },
  { feature: "Number of Invoices", handyman: "One per visit", fiveserv: "One invoice per job" },
  { feature: "Emergency Response", handyman: "Usually not available", fiveserv: "24/7 across Central Florida" },
  { feature: "Portfolio Management", handyman: "One property at a time", fiveserv: "Entire portfolio under one contract" },
  { feature: "Accountability", handyman: "No single point of contact", fiveserv: "One call — we own the result" },
  { feature: "Multifamily Experience", handyman: "Residential focused", fiveserv: "Built specifically for property managers" },
];

const FAQS = [
  {
    q: "Is FiveServ a handyman service?",
    a: "No. FiveServ is a full-service licensed property maintenance company. We handle make-ready, plumbing, electrical, HVAC, renovations, and more — all under one contract with one invoice.",
  },
  {
    q: "Can a handyman do make-ready in Orlando?",
    a: "A handyman can do basic repairs but cannot legally perform plumbing, electrical, or HVAC work in Florida without a license. FiveServ uses licensed contractors for all specialized work under our coordination.",
  },
  {
    q: "How much does FiveServ cost vs a handyman?",
    a: "FiveServ provides free estimates before any work. While handymen charge per visit, FiveServ covers the entire make-ready under one invoice — saving time and coordination costs.",
  },
  {
    q: "Does FiveServ offer a guarantee?",
    a: "Yes. Every make-ready is guaranteed in writing in 5 business days. No handyman offers that.",
  },
  {
    q: "Can FiveServ handle my entire portfolio?",
    a: "Yes. FiveServ specializes in ongoing partnerships with property management companies managing 30 to 500 units across Central Florida.",
  },
  {
    q: "What areas does FiveServ serve?",
    a: "18 cities across Central Florida including Orlando, Kissimmee, Sanford, Winter Park, and Lakeland. Tampa Bay coming soon.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We tried two handymen before FiveServ. Now every turn is on time, one invoice, no chasing. Game changer for our portfolio.",
    name: "[TESTIMONIAL_1]",
    title: "Regional Property Manager",
    company: "Multifamily Group, Orlando",
  },
  {
    quote:
      "5 days. Every time. Painted, cleaned, repaired, photo report — done. We don't even check anymore, we just hand over the keys.",
    name: "[TESTIMONIAL_2]",
    title: "Asset Manager",
    company: "Central FL Communities",
  },
  {
    quote:
      "The difference is accountability. With handymen, no one owned the result. With FiveServ, one call and the whole unit is handled.",
    name: "[TESTIMONIAL_3]",
    title: "Director of Operations",
    company: "Orlando PM Co.",
  },
];

const PATH = "/fiveserv-vs-handyman-orlando";
const URL = `${SITE.url}${PATH}/`;

const FiveServVsHandymanPage = () => {
  return (
    <>
      <Seo
        title="FiveServ vs Handyman Orlando FL | Property Maintenance Comparison"
        description="Comparing FiveServ Property Solutions vs handyman services for multifamily properties in Orlando. One invoice, 5-day guarantee, licensed and insured. See the difference."
        path={`${PATH}/`}
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "FiveServ vs Handyman Orlando", url: URL },
        ]}
        faqs={FAQS}
      />

      {/* HERO */}
      <section className="bg-brand-black">
        <div className="container py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <ShieldCheck className="h-3.5 w-3.5" /> Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                <Clock className="h-3.5 w-3.5" /> 5-Day Guarantee
              </span>
            </div>
            <h1 className="mt-5 font-display font-bold text-4xl text-white sm:text-5xl lg:text-6xl leading-[1.05]">
              <BrandName variant="light" /> vs Handyman Services in Orlando — Which is Right for Your Properties?
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Not all maintenance is equal. See why property managers in Orlando choose <BrandName variant="light" />.
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
              answer="FiveServ Property Solutions is a licensed, insured property maintenance company serving multifamily properties in Orlando FL. Unlike handyman services, FiveServ handles make-ready, plumbing, electrical, HVAC, and renovations under one contract with one invoice. 5-day make-ready guarantee. Available 24/7."
            />
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-white">
        <div className="container py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl text-center">
              Side-by-Side Comparison
            </h2>
            <p className="mt-3 text-center text-gray-600">
              Every row that matters when you choose who maintains your portfolio.
            </p>

            <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.1fr]">
                {/* Header row */}
                <div className="hidden md:block bg-white px-5 py-4 border-b border-gray-200" />
                <div className="bg-gray-100 px-5 py-4 border-b border-gray-200">
                  <p className="font-display font-bold text-gray-900">Handyman Service</p>
                </div>
                <div className="relative bg-brand-black px-5 py-4 border-b-2 border-brand-gold">
                  <p className="font-display font-bold text-white">
                    <BrandName variant="light" /> Property Solutions
                  </p>
                  <span className="absolute -top-3 right-4 rounded-full bg-brand-gold px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-black shadow">
                    Recommended
                  </span>
                </div>

                {/* Body rows */}
                {ROWS.map((row, i) => (
                  <div key={row.feature} className={`contents`}>
                    <div className={`px-5 py-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <p className="font-semibold text-gray-900">{row.feature}</p>
                    </div>
                    <div className={`px-5 py-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <p className="flex items-start gap-2 text-gray-600">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                        <span>{row.handyman}</span>
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

      {/* WHO IS EACH FOR */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="font-display font-bold text-2xl text-gray-900">When a handyman makes sense</h3>
              <ul className="mt-5 space-y-3 text-gray-700">
                {[
                  "Single small repair under $200",
                  "Non-urgent cosmetic fix",
                  "Owner-occupied home",
                  "One-time odd job",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand-gold bg-white p-8 shadow-card">
              <h3 className="font-display font-bold text-2xl text-gray-900">
                When <BrandName variant="dark" /> is the right choice
              </h3>
              <ul className="mt-5 space-y-3 text-gray-700">
                {[
                  "Make-ready and unit turns",
                  "Multiple repairs across a portfolio",
                  "Licensed work: plumbing, electrical, HVAC",
                  "You need accountability and one invoice",
                  "You manage 30 to 500 units",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white">
        <div className="container py-20">
          <div className="text-center">
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              What Property Managers Say
            </h2>
            <p className="mt-3 text-gray-600">Real feedback from teams across Central Florida.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

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
            <Link to="/maintenance-orlando-fl" className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:border-brand-gold transition-colors">
              Maintenance in Orlando
            </Link>
            <Link to="/make-ready-vs-diy-property-management" className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:border-brand-gold transition-colors">
              In-House vs FiveServ
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
            Stop juggling vendors. One call handles everything.
          </h2>
        </div>
      </section>
      <ContactCTA variant="b2b" />
    </>
  );
};

export default FiveServVsHandymanPage;
