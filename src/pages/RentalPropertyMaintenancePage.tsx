import { ReactNode } from "react";
import {
  Ruler,
  Hammer,
  Clock,
  ShieldCheck,
  Wrench,
  Building2,
  FileText,
  Phone,
  Award,
  Home,
  BadgePercent,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { useReveal } from "@/hooks/use-fiveserv";
import { SITE } from "@/lib/site-config";
import { FS_PATTERN_DARK, FS_PATTERN_LIGHT } from "@/lib/fs-pattern";

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

/** Image placeholder — swap for a real photo at the suggested path when available. */
const ImagePlaceholder = ({
  file,
  label,
  ratio = "aspect-[4/3]",
}: {
  file: string;
  label: string;
  ratio?: string;
}) => (
  <figure
    className={`${ratio} flex flex-col items-center justify-center gap-3 p-6 text-center`}
    style={{ borderRadius: 16, border: "3px solid #FFD700", background: "#FAFAF8", ...FS_PATTERN_LIGHT }}
  >
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full font-display font-black text-xl"
      style={{ background: "#FFD700", color: "#1A1A1A" }}
    >
      FS
    </div>
    <figcaption className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
      {label}
    </figcaption>
    <code className="text-[11px] text-gray-500 break-all">{file}</code>
  </figure>
);

const FACTORS: { icon: LucideIcon; title: string; desc: ReactNode }[] = [
  {
    icon: Phone,
    title: "Tenant Maintenance Requests, Handled Fast",
    desc: "Tenants call you, you call us once. Plumbing leaks, AC issues, drywall, doors, locks — tenant maintenance requests get scheduled and completed without you chasing three different vendors.",
  },
  {
    icon: BadgePercent,
    title: "No 8–12% Property Management Fee",
    desc: "A full-service property manager charges roughly 8–12% of monthly rent plus leasing fees. Self-managing landlords keep that margin and pay only for the work actually performed — quoted per job.",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Repairs",
    desc: "Burst pipes, AC failures in August, and water heater leaks can't wait until Monday. FiveServ answers emergency repair calls for rental property owners around the clock across Central Florida.",
  },
  {
    icon: ShieldCheck,
    title: "Florida Habitability-Compliant Turnaround",
    desc: "Florida landlords are responsible for keeping rentals habitable — working plumbing, safe structure, functional AC in most leases. Fast, documented repair response is the simplest way to avoid habitability disputes.",
  },
  {
    icon: Award,
    title: "Vetted, Licensed & Insured Contractor",
    desc: "Every repair is done by a licensed and insured Florida contractor — no unverified handymen from classifieds, no liability exposure if someone gets hurt on your property.",
  },
  {
    icon: FileText,
    title: "One Vendor, One Invoice",
    desc: (
      <>
        Instead of a plumber, an AC tech, a painter, and a drywall guy, you get one work order and one consolidated
        invoice. Pair repairs with{" "}
        <a href="/make-ready" className="underline font-semibold">make-ready turnovers</a> between tenants and the
        whole cycle runs through one call.
      </>
    ),
  },
];

const WHY_POINTS: { icon: LucideIcon; title: string; href?: string }[] = [
  { icon: Phone, title: "One call handles the repair — you stay the landlord, we do the work" },
  { icon: Clock, title: "24/7 emergency response for active leaks, AC failures, and lockouts" },
  { icon: BadgePercent, title: "Keep self-managing — no 8–12% monthly PM fee, no leasing fee", href: "/make-ready-vs-diy-property-management" },
  { icon: Award, title: "Licensed and insured in the State of Florida — COI available on request" },
  { icon: FileText, title: "One consolidated invoice for every trade", href: "/maintenance" },
  { icon: Building2, title: "Scales with you — from one rental to a full portfolio", href: "/for-property-managers" },
];

const FAQS = [
  { q: "What does rental property maintenance cost in Orlando in 2026?", a: "Rental property maintenance cost in Orlando depends on the repair — a faucet replacement, a drywall patch, an AC maintenance visit, and a full make-ready turnover are all different scopes. FiveServ quotes every job as a free line-item estimate so you approve the price before work starts. Call (407) 881-4942." },
  { q: "Who pays for repairs on a rental property in Florida?", a: "In Florida, the landlord is responsible for maintaining the property in a habitable condition — plumbing, structure, and in most leases air conditioning. Tenants pay only for damage they cause beyond normal wear and tear. Fast landlord-side repairs are the norm and the safest legal posture." },
  { q: "Do I need a property manager to handle maintenance, or can I hire a maintenance company?", a: "You can hire a maintenance company directly. A full-service property manager typically charges 8–12% of monthly rent plus 50–100% of a month's rent as a leasing fee. If you're comfortable handling leasing and rent collection yourself, a maintenance vendor like FiveServ covers the physical work for a per-job price." },
  { q: "How do I find a vetted, licensed contractor for rental repairs in Orlando?", a: "Verify an active Florida license, ask for a certificate of insurance, and get a written line-item quote before work starts. FiveServ Property Solutions is licensed and insured in Florida and provides COIs and written quotes for every rental repair job." },
  { q: "Do you offer 24/7 emergency repairs for rental property owners?", a: "Yes. FiveServ responds to emergencies around the clock across Central Florida — active plumbing leaks, water heater failures, AC outages, and security issues like broken doors or locks. Call (407) 881-4942 any time." },
  { q: "How fast should a landlord respond to a maintenance request in Florida?", a: "Florida law requires landlords to maintain habitability, and unreasonable delays on essential repairs can expose you to rent-withholding claims and disputes. Emergencies should be addressed same-day; routine requests within a few days. FiveServ schedules tenant maintenance requests fast and documents completion." },
  { q: "Can FiveServ handle maintenance between tenants and turnovers?", a: "Yes. Between tenants we handle the full make-ready scope — paint touch-ups, drywall repair, flooring fixes, plumbing and fixture swaps, cleaning, and locks — so the unit is rent-ready fast and vacancy days stay low." },
  { q: "Is FiveServ a property management company?", a: "No. FiveServ is a maintenance and repair company, not a property management company. We don't collect rent, screen tenants, or sign leases — we do the physical work so self-managing landlords and small portfolio owners don't have to." },
  { q: "Is FiveServ licensed and insured?", a: "Yes. FiveServ Property Solutions is licensed and insured in the State of Florida, and certificates of insurance are available for landlords and ownership groups on request before work starts." },
  { q: "Which areas around Orlando do you serve for rental property maintenance?", a: "FiveServ serves rental property owners across 18 Central Florida cities — Orlando, Kissimmee, Winter Park, Sanford, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa." },
];

const KEYWORDS = [
  "rental property maintenance Orlando",
  "rental property maintenance cost Orlando",
  "landlord maintenance company Orlando",
  "who pays for repairs on a rental property Florida",
  "DIY landlord vs property manager maintenance",
  "licensed contractor rental repairs Orlando",
  "24/7 emergency repairs rental property Orlando",
  "tenant maintenance requests Orlando",
  "rental repair company Orlando FL",
  "self-managing landlord maintenance Orlando",
  "rental property handyman Orlando FL",
  "make ready turnover Orlando",
  "Florida habitability repairs landlord",
  "maintenance vendor for landlords Orlando",
  "property maintenance for rental homes Orlando",
  "rental property maintenance quote Orlando FL",
];

const CITIES = [
  "Orlando FL", "Kissimmee FL", "Winter Park FL", "Lakeland FL", "Sanford FL",
  "Altamonte Springs FL", "Apopka FL", "Ocoee FL", "Winter Garden FL", "Clermont FL",
  "St. Cloud FL", "Davenport FL", "Deltona FL", "Daytona Beach FL", "Palm Coast FL",
  "Melbourne FL", "Palm Bay FL", "Cocoa FL",
];

const RentalPropertyMaintenancePage = () => {
  const aiAnswer =
    "Rental property maintenance in Orlando FL for self-managing landlords: one call handles tenant repair requests, 24/7 emergencies, and turnovers — without paying a full 8–12% property management fee. FiveServ is licensed and insured in Florida, quotes every job free as a line-item estimate, and serves 18 Central Florida cities. Call (407) 881-4942.";

  return (
    <>
      <Seo
        title="Rental Property Maintenance Orlando FL 2026 | For Landlords | FiveServ"
        description="Rental property maintenance in Orlando FL for self-managing landlords — tenant repairs, 24/7 emergencies, and turnovers without the 8–12% property management fee. Free quote same day."
        path="/property-maintenance-rental-orlando"
        keywords={KEYWORDS}
      />
      <SchemaOrg
        organization
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Rental Property Maintenance Orlando", url: `${SITE.url}/property-maintenance-rental-orlando` },
        ]}
        faqs={FAQS}
      />

      <style>{`
        .pco-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .pco-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      <AIOverviewBlock hidden answer={aiAnswer} />

      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: 560,
          // Placeholder hero image — replace with /images/rental-maintenance/placeholder-hero.jpg
          backgroundImage: `url("/images/rental-maintenance/placeholder-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1A1A1A",
        }}
        id="rental-maintenance-quote"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(15,15,15,0.88) 0%, rgba(15,15,15,0.68) 45%, rgba(15,15,15,0.42) 75%, rgba(15,15,15,0.25) 100%)",
          }}
        />
        <div className="relative z-10 container py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              style={{ background: "rgba(255,215,0,0.12)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.4)" }}
            >
              <Award className="h-3.5 w-3.5" /> For Self-Managing Landlords · Licensed · Insured
            </div>
            <h1
              className="mt-5 font-display font-black leading-[1.1]"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2rem, 4.4vw, 3.25rem)",
                textShadow: "0 2px 16px rgba(0,0,0,0.55)",
              }}
            >
              Rental Property Maintenance in Orlando FL — Without the Property Manager's Fee.
            </h1>
            <p
              className="mt-5 text-lg text-gray-200 max-w-2xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Keep self-managing your rental. One call handles tenant maintenance requests, 24/7 emergencies, and
              turnovers — licensed, insured, and quoted per job, no 8–12% monthly fee.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                Get a Free Maintenance Quote
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide"
                style={{ background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)" }}
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-400 max-w-md">
              Free line-item quote per job — you approve the price before work starts.
            </p>
          </Reveal>

          <Reveal className="mt-10 max-w-2xl">
            <div
              className="rounded-lg p-6"
              style={{ background: "rgba(26,26,26,0.85)", border: "2px solid #FFD700", ...FS_PATTERN_DARK }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 text-center">
                {[
                  { k: "0% PM Fee", v: "Pay per job, not per month" },
                  { k: "24/7", v: "Emergency repair response" },
                  { k: "18 Cities", v: "Central Florida" },
                ].map((s, i) => (
                  <div key={s.k} className={`px-2 ${i > 0 ? "sm:border-l sm:border-[#FFD700]/60" : ""}`}>
                    <p className="font-display font-black text-xl" style={{ color: "#FFD700" }}>{s.k}</p>
                    <p className="mt-1 text-xs text-gray-300">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visible entity paragraph */}
      <section className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700">{aiAnswer}</p>
        </div>
      </section>

      {/* SECTION 3 — QUICK ANSWER (AEO) */}
      <section style={{ background: "#FFFBF0" }}>
        <div className="container py-16 lg:py-20">
          <Reveal>
            <div
              className="mx-auto max-w-4xl rounded-lg p-8 lg:p-10"
              style={{ background: "#FFFFFF", border: "2px solid #FFD700", ...FS_PATTERN_LIGHT }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#FFD700" }}>
                Quick Answer
              </p>
              <h2 className="mt-2 font-display font-black text-2xl sm:text-3xl" style={{ color: "#1A1A1A" }}>
                How do Orlando landlords handle maintenance without a property manager?
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#1A1A1A" }}>
                You keep collecting the rent and managing the lease — we handle the physical work. Here's what a
                maintenance vendor covers for a self-managing landlord, and what you never pay for.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Tenant repair requests", desc: "Plumbing, AC, drywall, doors, locks, appliances — scheduled and completed fast, with documentation." },
                  { title: "24/7 emergencies", desc: "Active leaks, AC failures, and water heater issues answered around the clock across Central Florida." },
                  { title: "Turnovers between tenants", desc: "Full make-ready scope — paint, flooring, fixtures, cleaning, locks — so vacancy days stay low." },
                  { title: "No monthly PM fee", desc: "Skip the 8–12% management fee and leasing fees. You pay per job, quoted free before work starts." },
                  { title: "Licensed & insured", desc: "Every repair by a vetted Florida contractor — no classifieds handymen, no liability exposure." },
                ].map((v) => (
                  <div key={v.title} className="rounded-lg p-4" style={{ background: "#FFFBF0", border: "1px solid rgba(255,215,0,0.4)" }}>
                    <h3 className="font-bold" style={{ color: "#1A1A1A" }}>{v.title}</h3>
                    <p className="mt-1 text-sm text-gray-700">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg p-6 text-center" style={{ background: "#1A1A1A", ...FS_PATTERN_DARK }}>
                <p className="font-display font-black text-xl" style={{ color: "#FFD700" }}>
                  One Call. One Vendor. One Invoice.
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  Tell us the repair and we return a free line-item quote — usually the same day.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
                  style={{ background: "#FFD700", color: "#1A1A1A" }}
                >
                  Request a Free Quote
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — BREAKDOWN */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              What a Maintenance Vendor Actually Covers for Landlords
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
              Six ways FiveServ replaces the maintenance half of a property manager — without the monthly fee.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FACTORS.map((t) => (
                <article
                  key={t.title}
                  className="pco-card rounded-lg p-6"
                  style={{ background: "#FFFBF0", borderTop: "3px solid #FFD700", ...FS_PATTERN_LIGHT }}
                >
                  <t.icon className="h-10 w-10" style={{ color: "#FFD700" }} />
                  <h3 className="mt-4 font-display font-black text-xl" style={{ color: "#1A1A1A" }}>
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "#1A1A1A" }}>{t.desc}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — DIY LANDLORD VS PROPERTY MANAGER + FLORIDA HABITABILITY */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <h2 className="font-display font-black text-3xl" style={{ color: "#1A1A1A" }}>
                DIY Landlord + Maintenance Vendor vs. Full-Service Property Manager
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                A full-service property manager typically charges around 8–12% of collected rent every month, plus a
                leasing fee of 50–100% of a month's rent every time the unit turns. On a $1,800/month Orlando rental,
                that's roughly $150–$215 every month — over $1,800 a year — whether anything breaks or not.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                The alternative: keep managing the lease and rent collection yourself, and contract the physical work
                to a licensed maintenance vendor. You pay only when there's actual work to do, quoted per job, approved
                by you before anyone picks up a tool.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.5)" }}>
                  <h3 className="font-display font-black text-lg" style={{ color: "#1A1A1A" }}>Full-Service PM</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    ~8–12% of rent monthly + leasing fees, every month, occupied or not. Maintenance often marked up
                    on top of the management fee.
                  </p>
                </div>
                <div className="rounded-lg p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.5)" }}>
                  <h3 className="font-display font-black text-lg" style={{ color: "#1A1A1A" }}>Self-Manage + FiveServ</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    0% monthly fee. Pay per repair, per turnover — quoted free, line by line. You keep full control
                    and the margin.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <ImagePlaceholder
                  file="/images/rental-maintenance/placeholder-landlord-vs-pm-orlando.jpg"
                  label="Self-managing landlord reviewing a line-item repair quote, Orlando FL"
                  ratio="aspect-[16/9]"
                />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display font-black text-3xl" style={{ color: "#1A1A1A" }}>
                Florida Habitability: Why Fast Repairs Protect You
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Florida law makes the landlord responsible for keeping a rental habitable — working plumbing, a safe
                structure, and in most leases functioning air conditioning. When essential repairs drag, tenants gain
                leverage: rent-withholding claims, code complaints, and disputes that cost far more than the repair
                itself.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                <li>• Emergencies (active leaks, no AC, no water) — address same-day</li>
                <li>• Essential systems (plumbing, electrical, locks) — within days, not weeks</li>
                <li>• Document every completed repair — your record ends most disputes</li>
                <li>• Tenants pay only for damage beyond normal wear and tear</li>
                <li>• A documented vendor relationship is your best habitability defense</li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                General information, not legal advice. For a specific dispute, consult a Florida attorney.
              </p>
              <div className="mt-8">
                <ImagePlaceholder
                  file="/images/rental-maintenance/placeholder-emergency-repair-orlando-fl.jpg"
                  label="Emergency plumbing repair in an Orlando rental unit"
                  ratio="aspect-[16/9]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BIG STAT */}
      <section style={{ background: "#1A1A1A" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <p className="text-sm" style={{ color: "#FFFFFF" }}>
              Free line-item maintenance quote in Orlando
            </p>
            <p
              className="mt-4 font-display font-black"
              style={{ color: "#FFD700", fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 1 }}
            >
              24-Hr Quote
            </p>
            <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto">
              Send us the repair list and photos. We return a free line-item quote — usually the same day, and always
              within 24 hours. Emergencies answered 24/7.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
              style={{ background: "#FFD700", color: "#1A1A1A" }}
            >
              Get a Free Quote
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — WHY FIVESERV */}
      <section style={{ background: "#FFFBF0", ...FS_PATTERN_LIGHT }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Why Orlando Landlords Call FiveServ First
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
              One call, one vetted crew, one invoice — instead of chasing a plumber, a handyman, and an AC tech every
              time a tenant texts you.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="pco-card rounded-lg p-6"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.4)" }}
                >
                  <p.icon className="h-9 w-9" style={{ color: "#FFD700" }} />
                  <p className="mt-4 font-bold" style={{ color: "#1A1A1A" }}>
                    {p.href ? <a href={p.href} className="underline">{p.title}</a> : p.title}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — WORK PLACEHOLDERS */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Rental Repairs We Handle — Photos Coming Soon
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { file: "/images/rental-maintenance/placeholder-plumbing-repair-orlando-fl.jpg", label: "Rental plumbing repair — Orlando FL" },
                { file: "/images/rental-maintenance/placeholder-ac-maintenance-kissimmee-fl.jpg", label: "Rental AC maintenance — Kissimmee FL" },
                { file: "/images/rental-maintenance/placeholder-drywall-repair-winter-park-fl.jpg", label: "Drywall repair between tenants — Winter Park FL" },
                { file: "/images/rental-maintenance/placeholder-turnover-make-ready-sanford-fl.jpg", label: "Make-ready turnover — Sanford FL" },
                { file: "/images/rental-maintenance/placeholder-lock-door-repair-apopka-fl.jpg", label: "Lock & door repair — Apopka FL" },
                { file: "/images/rental-maintenance/placeholder-flooring-repair-orlando-fl.jpg", label: "Rental flooring repair — Orlando FL" },
              ].map((p) => (
                <ImagePlaceholder key={p.file} file={p.file} label={p.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — FAQs */}
      <div style={{ background: "#FFFBF0", ...FS_PATTERN_LIGHT }}>
        <FaqAccordion
          title="Rental Property Maintenance Orlando FL — FAQs"
          eyebrow="FAQ"
          faqs={FAQS}
          emitSchema={false}
        />
      </div>

      {/* SECTION 10 — FINAL CTA */}
      <section style={{ background: "#FFD700" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <h2 className="font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Keep Managing Your Rental. We'll Handle the Repairs.
            </h2>
            <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "#1A1A1A" }}>
              Send us the repair list or the tenant request. We quote every job free, line by line, and you approve
              the price before work starts — no monthly fee, no leasing fee, no vendor chaos.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide"
              style={{ background: "#1A1A1A", color: "#FFD700" }}
            >
              Get a Free Maintenance Quote
            </a>
            <p className="mt-5 font-display font-black text-2xl" style={{ color: "#1A1A1A" }}>
              <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            </p>
            <p className="mt-3 text-sm" style={{ color: "#1A1A1A" }}>
              Between tenants? See our <a href="/make-ready" className="underline font-semibold">make-ready turnovers</a> and{" "}
              <a href="/maintenance" className="underline font-semibold">property maintenance</a> — same team, one
              invoice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11 — CITIES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Rental Property Maintenance Across Central Florida
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
              {CITIES.map((c) => (
                <p key={c} className="text-base">
                  <span style={{ color: "#FFD700" }} className="font-bold">Rental Maintenance</span>{" "}
                  <span style={{ color: "#1A1A1A" }}>in {c}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default RentalPropertyMaintenancePage;
