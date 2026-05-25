import { Link } from "react-router-dom";
import {
  Phone,
  Users,
  Clock,
  ShieldAlert,
  Key,
  Wrench,
  Building2,
  Siren,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import SectionHeading from "@/components/fiveserv/SectionHeading";
import GhlFormEmbed from "@/components/fiveserv/GhlFormEmbed";
import BrandName from "@/components/fiveserv/BrandName";
import BrandsBar from "@/components/fiveserv/BrandsBar";

const PROBLEMS = [
  {
    icon: Users,
    title: "Too Many Vendors",
    body:
      "Painter, plumber, electrician, cleaner — each on their own schedule. Every work order means 3 calls and 3 invoices.",
  },
  {
    icon: Clock,
    title: "Too Many Delays",
    body:
      "Every day a unit sits vacant is revenue lost. Coordinating trades takes time you don't have.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Accountability",
    body:
      "When something goes wrong, everyone points fingers. You're left managing the chaos.",
  },
];

const STEPS = [
  "You call FiveServ once",
  "Our in-house team mobilizes",
  "Work is completed on schedule",
  "You receive one clean invoice",
];

const SERVICES_PM = [
  {
    icon: Key,
    title: "Make-Ready & Unit Turns",
    body:
      "Guaranteed in 5 business days. Our team handles painting, cleaning, repairs, and inspections.",
    href: "/make-ready",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    body:
      "General repairs, plumbing, electrical, HVAC, drywall — available 24/7 for emergencies.",
    href: "/maintenance",
  },
  {
    icon: Building2,
    title: "CapEx & Renovations",
    body:
      "Large-scale projects to increase property value and reduce long-term costs.",
    href: "/renovations",
  },
  {
    icon: Siren,
    title: "Emergency Response",
    body: "Available 24/7. We show up when others don't.",
    href: "/maintenance",
  },
];

const TRUST = [
  "5-Day Guarantee",
  "24/7 Available",
  "18 Cities",
  "One Invoice Always",
  "Licensed & Insured",
];

const ForPropertyManagersPage = () => {
  const path = "/for-property-managers";
  const title =
    "Property Maintenance for Property Managers — FiveServ Central Florida";
  const description =
    "FiveServ handles all maintenance for property management companies across Central Florida. Unit turns, repairs, renovations. One call, one invoice, 24/7.";

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "For Property Managers", url: `${SITE.url}${path}` },
        ]}
      />

      {/* HERO */}
      <section
        className="relative bg-brand-black pt-32 pb-24"
        style={{
          backgroundImage: 'url("/images/partners-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10">
        <div className="container">
          <p className="uppercase tracking-[0.12em] text-brand-gold text-base font-bold">
            — For Property Managers
          </p>
          <h1 className="mt-4 font-display font-black text-4xl text-white lg:text-6xl leading-[1.05] max-w-4xl">
            Stop Managing Vendors.{" "}
            <span className="text-brand-gold">Start Managing Properties.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
            One call to <BrandName variant="light" /> handles everything — unit
            turns, repairs, renovations. One invoice. No excuses. Available
            24/7.
          </p>

          <AIOverviewBlock
            hidden
            tone="dark"
            directAnswer="FiveServ Property Solutions is the single-vendor property maintenance partner for property management companies in Central Florida — handling make-ready unit turns, repairs, CapEx, and 24/7 emergency response under one contract and one invoice. Property managers with 30 to 500 units use FiveServ to eliminate vendor chaos, reduce vacancy days, and simplify maintenance operations across their entire portfolio."
            supportingFacts="2 active crews handling 5 to 10 simultaneous make-readies per week. 300+ units completed across 50+ communities. 18 cities served in Central Florida. 5-day make-ready for standard units, guaranteed in writing. 2-hour emergency response target. 15+ years combined experience. One invoice per job. Serving Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa, FL."
          />

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-brand-black transition-transform hover:scale-105"
            >
              Get a Free Quote →
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="The Reality"
            subtext="Coordinating property maintenance across multiple vendors burns hours, drives up vacancy days, and leaves no one accountable when things go wrong."
          >
            The 3 Problems Every Property Manager Faces
          </SectionHeading>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PROBLEMS.map((p) => (
              <article
                key={p.title}
                className="group relative flex h-full flex-col rounded-2xl border border-gray-100 border-t-2 border-t-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-t-brand-gold hover:border-gray-100"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10">
                  <p.icon className="h-7 w-7 text-brand-black" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold leading-tight text-brand-black">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="The FiveServ Way"
            subtext="One number to call. One project manager. One crew on-site. One invoice at the end. The way property maintenance should work."
          >
            One Call. Our Team. One Result. <span className="text-brand-gold">One Invoice.</span>
          </SectionHeading>

          <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step} className="relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-gold text-brand-black font-display text-2xl font-black shadow-md">
                  {i + 1}
                </div>
                <h3 className="mt-6 font-display text-lg font-bold leading-snug text-brand-black">
                  {step}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES FOR PMs */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="Built for Portfolios"
            subtext="Four service lines covering every maintenance need a property manager faces — from a leaky faucet at 2 AM to a full make-ready before lease-up."
          >
            Everything Your Portfolio Needs
          </SectionHeading>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES_PM.map((s) => (
              <Link key={s.title} to={s.href} className="block h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 border-t-2 border-t-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-t-brand-gold hover:border-gray-100">
                  <div className="inline-flex h-14 w-14 items-center justify-center">
                    <s.icon className="h-7 w-7 text-brand-black" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold leading-tight text-brand-black">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">
                    {s.body}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-black transition-colors group-hover:text-brand-gold">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITY */}
      <section className="bg-white">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="Built to Scale"
            subtext="Property managers with 30 to 500 units trust FiveServ because we have the capacity to handle volume without breaking down."
          >
            Real Capacity. Real Crews. Real Results.
          </SectionHeading>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "2+", label: "Active Crews", sub: "Ready to mobilize across 18 cities" },
              { stat: "5–10", label: "Units Per Week", sub: "Simultaneous make-readies handled" },
              { stat: "300+", label: "Units Completed", sub: "Across Central Florida portfolios" },
              { stat: "15+", label: "Years Experience", sub: "Combined trade experience in Florida" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center rounded-2xl bg-brand-black p-8 text-center">
                <p className="font-display text-5xl font-black text-brand-gold">{item.stat}</p>
                <p className="mt-3 text-base font-bold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-gray-400">{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Need more volume? We scale crews on demand for peak seasons and large portfolios.
          </p>
        </div>
      </section>

      {/* WHY FIVESERV */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="Why Choose Us"
            subtext="Five reasons property managers across Central Florida trust FiveServ with their entire maintenance operation."
          >
            Why Property Managers Choose <BrandName variant="dark" />
          </SectionHeading>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {TRUST.map((t) => (
              <div
                key={t}
                className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <CheckCircle2 className="h-8 w-8 text-brand-gold" strokeWidth={2} />
                <p className="mt-4 font-display text-base font-bold text-brand-black leading-tight">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OLD WAY VS FIVESERV */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-28">
          <SectionHeading
            eyebrow="The Honest Comparison"
            subtext="Most property managers are still running maintenance the old way. Here is what that looks like versus working with FiveServ."
          >
            The Old Way vs <BrandName variant="dark" />
          </SectionHeading>
          <div className="mt-16 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-black text-white">
                  <th className="p-5 text-left font-display font-bold text-base"></th>
                  <th className="p-5 text-left font-display font-bold text-base text-gray-400">The Old Way</th>
                  <th className="p-5 text-left font-display font-bold text-base text-brand-gold">FiveServ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ["Vendors per property", "4 to 8 different contractors", "1 — FiveServ handles everything"],
                  ["Invoices per job", "One per trade, per visit", "One clean invoice, always"],
                  ["Who coordinates the work", "You do — calls, follow-ups, scheduling", "We do — you just approve the quote"],
                  ["Make-ready timeline", "10 to 14 days on average", "5 business days for standard units"],
                  ["Emergency response", "Depends on which vendor picks up", "2-hour target, 24 hours a day, 7 days a week"],
                  ["Accountability when something goes wrong", "Everyone points fingers", "One call to us — we make it right"],
                  ["Reporting to property owners", "Multiple vendor summaries", "One report, one invoice, easy to forward"],
                  ["Scaling across a portfolio", "More units means more vendor chaos", "Same system works at 30 or 500 units"],
                  ["Written service guarantee", "Rarely", "Yes — always in writing"],
                  ["Licensed and insured", "Varies by vendor", "Yes — FiveServ Group LLC, fully licensed and insured in Florida"],
                ].map(([feature, oldWay, fiveserv]) => (
                  <tr key={feature} className="even:bg-gray-50/60 hover:bg-amber-50/30 transition-colors">
                    <td className="p-5 font-semibold text-brand-black align-top">{feature}</td>
                    <td className="p-5 text-gray-500 align-top">{oldWay}</td>
                    <td className="p-5 text-gray-900 font-medium align-top">
                      <span className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                        {fiveserv}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Ready to switch to a better system? Call us or fill out the form below.
          </p>
        </div>
      </section>

      <BrandsBar />

      {/* CTA + FORM */}
      <section className="bg-brand-black">
        <div className="container py-24 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-[0.12em] text-brand-gold text-sm font-bold mb-4">
              — Get Started
            </p>
            <h2 className="font-display font-black text-4xl text-white lg:text-5xl leading-[1.1]">
              Ready to Simplify Your{" "}
              <span className="text-brand-gold">Maintenance Operations?</span>
            </h2>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              Join property managers across Central Florida who trust{" "}
              <BrandName variant="light" />.
            </p>
          </div>

          <div className="mt-12">
            <GhlFormEmbed variant="b2b" className="mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ForPropertyManagersPage;
