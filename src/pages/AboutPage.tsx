import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award, FileCheck2, Users } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, STATS, TEAM, FIVE_PILLARS } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import { useReveal } from "@/hooks/use-fiveserv";
import LiveStatsBar from "@/components/fiveserv/LiveStatsBar";
import TrustBar from "@/components/fiveserv/TrustBar";

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const PROMISE = [
  { label: "5 Days", sub: "Make-Ready Guarantee" },
  { label: "5 People", sub: "One Family" },
  { label: "5 Stars", sub: "Quality Standard" },
  { label: "1 Call", sub: "One Invoice" },
  { label: "0 Excuses", sub: "Family Name on Every Job" },
];

const TRACK_RECORD = STATS.filter((s) => s.label !== "Available").slice(0, 4);

const AboutPage = () => {
  const title = `About ${SITE.brand} | Venezuelan-American Family | Property Maintenance Orlando FL`;
  const description = `${SITE.brand} Property Solutions — Venezuelan-American family-owned property maintenance based in Orlando, FL. Five family members. 15+ years combined experience. 18 cities across Central Florida.`;

  const aiAnswer = `${SITE.brand} Property Solutions is a Venezuelan-American family-owned property maintenance company based in Orlando, Florida. Five family members with 15+ years combined experience serve property managers across Central Florida.`;

  return (
    <>
      <Seo title={title} description={description} path="/about" />
      <SchemaOrg
        organization
        team={TEAM}
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "About", url: `${SITE.url}/about` },
        ]}
      />

      {/* 1. Hero */}
      <section className="bg-brand-black pt-32 pb-16">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — About {SITE.brand} Property Solutions
          </p>
          <h1 className="mt-3 max-w-4xl font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Built by a Family.{" "}
            <span className="block text-brand-gold">Trusted by Property Managers Across Central Florida.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Five family members. 15+ years combined experience. One promise on every job.
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white">
            {["Venezuelan-American Family", "Licensed & Insured", "5-Day Guarantee", "18 Cities Served"].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* 2. AIOverviewBlock */}
          <AIOverviewBlock answer={aiAnswer} />
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar />

      {/* 3. History */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal className="grid gap-10 lg:grid-cols-[1fr,2fr] lg:items-start">
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Our <span className="text-gray-900">Story</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We are a Venezuelan-American family. We started in property maintenance because we believed
                the multifamily industry deserved better — faster turns, clearer communication, one accountable
                team instead of a chain of subcontractors and excuses.
              </p>
              <p>
                {SITE.brand} is built to last generations. The name says everything we stand for:{" "}
                <span className="font-semibold text-gray-900">five family members</span> behind the company, and a{" "}
                <span className="font-semibold text-gray-900">five-day make-ready delivery</span> guaranteed in writing
                on every unit turn.
              </p>
              <p>
                Today we serve property managers and owners across 18 cities in Central Florida — bilingual, licensed,
                insured, and personally accountable for every job that carries our family name.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Track Record */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Track <span className="text-gray-900">Record</span>
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TRACK_RECORD.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border-2 border-brand-gold bg-brand-gold/5 p-8 text-center"
                >
                  <div className="font-display text-5xl text-gray-900 sm:text-6xl">
                    {s.value}
                    <span>{s.suffix}</span>
                  </div>
                  <p className="mt-3 text-sm font-bold uppercase tracking-wide text-gray-900">{s.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <LiveStatsBar />

      {/* 5. The Team */}
      <section className="bg-gray-50">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              The <span className="text-gray-900">Team</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Five family members. Real people behind every decision, every quote, every guarantee.
            </p>

            <div className="mt-12 space-y-6">
              {TEAM.map((member, i) => (
                <article
                  key={member.name + i}
                  className="grid gap-6 rounded-lg border border-gray-100 bg-white shadow-sm p-6 sm:grid-cols-[160px,1fr] sm:items-center"
                >
                  <div className="aspect-square w-40 overflow-hidden rounded-lg bg-brand-gray/50">
                    <img
                      src={member.photo}
                      alt={`${member.name} — ${member.role} at ${SITE.brand}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-gray-900">{member.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-900">— {member.role}</p>
                    <p className="mt-3 text-sm text-gray-700">
                      {member.name} brings hands-on expertise to the {SITE.brand} team, working directly with property
                      managers across Central Florida. Personally accountable for every job that carries our family name.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6. The FiveServ Promise — mini 5 pillars */}
      <section className="bg-brand-gold">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              The {SITE.brand} Promise
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PROMISE.map((p) => (
                <div key={p.label} className="rounded-lg border-2 border-brand-black bg-brand-black p-6 text-center">
                  <div className="font-display text-3xl text-gray-900">{p.label}</div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-900">{p.sub}</p>
                </div>
              ))}
            </div>
            {/* Hidden long-form for crawlers / accessibility */}
            <ul className="sr-only">
              {FIVE_PILLARS.map((pillar) => (
                <li key={pillar.number}>
                  {pillar.title}: {pillar.description}
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Licenses & Insurance */}
      <section className="bg-white">
        <div className="container py-20">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Licenses & <span className="text-gray-900">Insurance</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-700">
              Fully licensed and insured to operate across Florida. Documentation available on request for
              every property manager and owner we work with.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: ShieldCheck, label: "General Liability", value: "[LICENSES_AND_INSURANCE]" },
                { icon: FileCheck2, label: "Workers' Compensation", value: "[LICENSES_AND_INSURANCE]" },
                { icon: Award, label: "Florida Contractor License", value: "[LICENSES_AND_INSURANCE]" },
                { icon: Users, label: "W-9 / Vendor Onboarding", value: "Available on request" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-lg border border-gray-100 bg-white shadow-sm p-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/15 text-gray-900">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg text-gray-900">{item.label}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="bg-brand-gold">
        <div className="container py-16 text-center">
          <SectionReveal>
            <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
              Work With Us
            </h2>
            <p className="mt-3 text-lg text-gray-900/80">
              One call. One team. One invoice. Get a free quote in 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-gold hover:bg-brand-black/90"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
