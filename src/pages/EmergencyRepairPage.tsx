import { ReactNode } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Droplets,
  Wind,
  Zap,
  CloudRain,
  KeyRound,
  Wrench,
  ShieldCheck,
  Award,
  Users,
  Camera,
  Clock,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { useReveal } from "@/hooks/use-fiveserv";
import { SITE, SERVICES } from "@/lib/site-config";
import { FS_PATTERN_DARK, FS_PATTERN_LIGHT } from "@/lib/fs-pattern";


const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

type EmergencyType = { icon: LucideIcon; title: string; desc: string };
const EMERGENCY_TYPES: EmergencyType[] = [
  { icon: Droplets, title: "Burst Pipe & Water Leak", desc: "Emergency plumbing repair Orlando FL — shutoff, leak isolation, temporary patch, and permanent line repair. Available 24/7 for homes and rentals." },
  { icon: Wind, title: "No AC / HVAC Failure", desc: "Same day emergency repair Orlando FL for AC outages. Diagnose the failure, replace capacitors, contactors, or blower parts to restore cooling fast." },
  { icon: Zap, title: "Electrical Outage & Panel Issues", desc: "Emergency electrical repair Orlando — tripping breakers, dead outlets, panel faults, and partial power loss. Licensed electricians on call." },
  { icon: CloudRain, title: "Storm & Water Damage", desc: "Water damage emergency repair Orlando FL — extraction, drying, drywall cutout, and containment after storms, leaks, or overflows." },
  { icon: KeyRound, title: "Lockout (Door/Window)", desc: "Locked out of a rental or home? We coordinate emergency rekey and hardware replacement so tenants and owners regain access quickly." },
  { icon: Wrench, title: "Multi-Trade Emergency", desc: "Multiple failures at once — plumbing plus electrical plus drywall — handled by one crew, one dispatch, one invoice. Ideal for property managers." },
];

const PROVIDES = [
  "24/7 dispatch and phone triage",
  "2-hour on-site response target",
  "All emergency labor",
  "Standard repair materials (pipe, fittings, breakers, drywall patch)",
  "Water extraction and containment gear",
  "Diagnostic report with photos",
  "Coordination between trades if needed",
];

const CLIENT_SELECTS = [
  "Permanent replacement fixtures (faucets, water heaters)",
  "Upgrades beyond the emergency repair",
  "Insurance claim decisions",
  "Preferred restoration finishes",
];

const STEPS = [
  { n: "1", title: "Call 24/7", desc: "Dial (407) 881-4942 any hour. Phone triage confirms scope and dispatches the right trade." },
  { n: "2", title: "Dispatch in 2 Hours", desc: "Licensed crew rolls with truck stocked for common emergency repairs across Central Florida." },
  { n: "3", title: "Diagnose & Repair", desc: "On-site diagnosis, containment, and repair. Multi-trade emergencies handled by one team." },
  { n: "4", title: "Photo Report", desc: "Before, during, and after photos delivered. Line-item invoice sent for records or insurance." },
];

const WHY_POINTS = [
  { icon: Clock, title: "2-hour emergency response target" },
  { icon: ShieldCheck, title: "Licensed and insured in Florida" },
  { icon: Users, title: "Multi-trade crew — one call handles it all" },
  { icon: Camera, title: "Photo documentation on every job" },
  { icon: Award, title: "15+ years combined experience" },
  { icon: MapPin, title: "18 cities across Central Florida" },
];

const KEYWORDS = [
  "emergency repair Orlando", "emergency repair cost Orlando", "24/7 emergency plumber Orlando",
  "emergency AC repair Orlando", "burst pipe repair Orlando cost", "after hours handyman Orlando",
  "emergency water damage repair Orlando", "weekend emergency repair Orlando",
  "emergency electrician Orlando", "property manager emergency maintenance Orlando",
  "same day emergency repair Orlando FL", "emergency repair near me Orlando",
  "water heater emergency repair cost Orlando", "main sewer clog emergency cost Orlando",
  "emergency toilet repair Orlando", "after hours plumber cost Orlando",
  "emergency HVAC repair Orlando FL", "24 hour emergency repair Central Florida",
];

const COST_RANGES = [
  { item: "Dispatch + first hour", range: "from ~$185", notes: "Applies to most single-trade emergency calls" },
  { item: "Burst pipe repair", range: "$225–$3,000", notes: "Location, access, and pipe material drive the range" },
  { item: "Water heater emergency", range: "$240–$1,940", notes: "Repair vs. replacement quoted separately" },
  { item: "Main sewer clog", range: "$245–$1,175", notes: "Severity and cleanout access affect the total" },
  { item: "Toilet emergency", range: "$150–$900", notes: "Simple clearing to full replacement" },
  { item: "No-AC diagnostic + common parts", range: "$150–$650", notes: "Capacitor, contactor, and similar common parts" },
  { item: "Electrical panel / breaker emergency", range: "$150–$1,200", notes: "Depends on fault location and parts required" },
];

const TIME_MULTIPLIERS = [
  { window: "Business hours", multiplier: "1x", notes: "Standard emergency rate" },
  { window: "Evening", multiplier: "~1.5x", notes: "After standard business hours" },
  { window: "Weekend", multiplier: "up to ~2x", notes: "Saturday and Sunday dispatch" },
  { window: "Holiday", multiplier: "up to ~3x", notes: "Major holidays" },
];

const PRICE_VARIATIONS = [
  "Trade involved — plumbing, AC, and electrical each carry different rates",
  "Parts and materials required to complete the repair",
  "Access — crawl spaces, attics, and buried lines take longer",
  "Time of day — evening, weekend, and holiday multipliers apply",
  "Severity — containment-only vs. full repair on the first visit",
];

const FAQS = [
  { q: "How fast does FiveServ respond to a home repair emergency in Orlando?", a: "FiveServ targets a 2-hour on-site response for emergency repair calls in Orlando FL and Central Florida. When you call (407) 881-4942, our 24/7 dispatch triages the issue and sends the closest licensed crew. Response time varies with traffic, weather, and city distance." },
  { q: "How much does emergency repair cost in Orlando FL?", a: "Emergency repair cost in Orlando FL depends on the trade, parts needed, and time of day. Most single-trade emergency calls start around $185 for the dispatch and first hour, plus materials. A written line-item quote is provided on-site before major work begins." },
  { q: "What counts as an emergency repair?", a: "An emergency repair is any failure that causes property damage, safety risk, or makes a unit unlivable — burst pipes, no AC in summer, electrical outages, storm and water damage, sewer backups, or lockouts. If unsure, call our 24/7 line and we'll help you decide." },
  { q: "Do you offer 24/7 emergency repair for rental properties and multifamily communities?", a: "Yes. FiveServ is an emergency maintenance company Orlando property managers rely on 24/7/365 for rental properties, multifamily communities, and portfolios. We coordinate tenant access, document everything, and send one consolidated invoice to the owner or PM." },
  { q: "Is there an extra charge for after-hours or weekend emergency calls?", a: "After-hours and weekend emergency repair Orlando FL calls carry a modest surcharge above standard business-hours rates. The exact rate is quoted before dispatch, so there are no surprises. Property managers on service agreements often receive reduced after-hours pricing." },
  { q: "What if my emergency involves multiple trades at once?", a: "Multi-trade emergencies are FiveServ's specialty. One dispatch covers plumbing, electrical, drywall, and cleanup with the same crew — no juggling three vendors at 2 AM. You get one point of contact and one invoice for the entire emergency." },
  { q: "How much does an emergency plumber cost in Orlando after hours?", a: "An after-hours emergency plumber in Orlando typically starts around $185 for dispatch and the first hour, with evening rates around 1.5x, weekends up to 2x, and holidays up to 3x standard rates. A burst pipe repair can range from $225 to $3,000 depending on location, access, and pipe material. FiveServ quotes the exact rate before dispatch so there are no surprises." },
  { q: "Does homeowners insurance cover emergency repairs?", a: "Many homeowners policies cover sudden and accidental damage, such as a burst pipe, but typically not wear-and-tear or maintenance issues. Coverage varies by policy, so contact your insurer promptly and document everything. FiveServ provides a photo report and line-item invoice that you can submit with your claim, but claim decisions are made by your insurance company." },
  { q: "Burst pipe: what do I do before you arrive?", a: "Shut off the main water valve immediately, then turn off electricity to any area with standing water. Move furniture and valuables away from the leak and, if safe, place towels or buckets to slow the spread. Do not attempt permanent repairs yourself — call (407) 881-4942 and our crew will handle isolation, repair, and documentation on arrival." },
  { q: "Is FiveServ licensed and insured for emergency repair work in Florida?", a: "Yes. FiveServ is a licensed emergency repair contractor Orlando FL, fully insured with general liability coverage in the State of Florida. Documentation is available on request for property managers, HOAs, and insurance claim files." },
];

const CITIES = [
  "Orlando FL", "Kissimmee FL", "Winter Park FL", "Lakeland FL", "Sanford FL",
  "Altamonte Springs FL", "Apopka FL", "Ocoee FL", "Winter Garden FL", "Clermont FL",
  "St. Cloud FL", "Davenport FL", "Deltona FL", "Daytona Beach FL", "Palm Coast FL",
  "Melbourne FL", "Palm Bay FL", "Cocoa FL",
];

const EmergencyRepairPage = () => {
  const aiAnswer =
    "FiveServ Property Solutions provides licensed and insured 24/7 emergency repair services in Orlando FL and across 18 cities in Central Florida. Emergency repair services include burst pipe and water leak response, no-AC/HVAC failure repair, electrical outages, storm and water damage mitigation, lockouts, and general emergency maintenance. 2-hour on-site response target. Illustrative 2026 emergency repair costs in Orlando start around $185 for dispatch and the first hour, with burst pipe repairs often ranging $225–$3,000; evening, weekend, and holiday multipliers may apply. These are estimates, not guaranteed prices — a written line-item quote is provided before major work. Phone: (407) 881-4942.";

  const maintenanceService = SERVICES.find((s) => s.slug === "maintenance")!;

  return (
    <>
      <Seo
        title="Emergency Repair Cost Orlando FL 2026 | 24/7 Response | FiveServ"
        description="Emergency repair cost Orlando FL 2026 — 2-hour on-site response for burst pipes, no AC, electrical outages, and water damage. See typical cost ranges. Call (407) 881-4942."
        path="/emergency-repair-orlando"
        keywords={KEYWORDS}
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Emergency Repair", url: `${SITE.url}/emergency-repair-orlando` },
        ]}
        service={maintenanceService}
        faqs={FAQS}
      />

      <style>{`
        .er-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .er-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      <AIOverviewBlock hidden answer={aiAnswer} />

      {/* SECTION 1 — HERO (no photo — dark gradient + dot grid + big icon) */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: 560,
          backgroundColor: "#1A1A1A",
          ...FS_PATTERN_DARK,
        }}
        id="emergency-quote"
      >
        <AlertTriangle
          className="pointer-events-none absolute -right-10 -bottom-16 opacity-[0.06]"
          style={{ color: "#FFD700", width: 520, height: 520 }}
          aria-hidden
        />
        <div className="relative z-10 container py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              style={{ background: "rgba(255,215,0,0.12)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.4)" }}>
              <AlertTriangle className="h-3.5 w-3.5" /> 24/7 · 365 Days · 2-Hour Response
            </div>
            <h1
              className="mt-5 font-display font-bold leading-[1.1]"
              style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
            >
              Emergency Repair Orlando FL — 24/7 Response, 2-Hour Dispatch.
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl">
              Emergency home repair Orlando homeowners and property managers trust. Burst pipes, no AC, electrical outages, water damage — one call, one licensed crew, done.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide"
                style={{ background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)" }}
              >
                Request Dispatch
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-400 max-w-md">
              Licensed emergency repair contractor Orlando FL. Response time varies with weather and distance.
            </p>
          </Reveal>

          <Reveal className="mt-10 max-w-2xl">
            <div
              className="rounded-lg p-6"
              style={{
                background: "rgba(26,26,26,0.85)",
                border: "2px solid #FFD700",
                ...FS_PATTERN_DARK,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 text-center">
                {[
                  { k: "2 Hours", v: "Response target" },
                  { k: "24 / 7 / 365", v: "Always available" },
                  { k: "18 Cities", v: "Central Florida" },
                ].map((s, i) => (
                  <div key={s.k} className={`px-2 ${i > 0 ? "sm:border-l sm:border-[#FFD700]/60" : ""}`}>
                    <p className="font-display font-bold text-xl" style={{ color: "#FFD700" }}>{s.k}</p>
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
          <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700">
            {aiAnswer}
          </p>
        </div>
      </section>

      {/* SECTION 2 — QUICK ANSWER (AEO box) */}
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
              <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl" style={{ color: "#1A1A1A" }}>
                What is an emergency repair, and how fast can FiveServ respond?
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#1A1A1A" }}>
                An emergency repair is any failure that risks property damage, safety, or livability — burst pipes, no AC in summer heat, electrical outages, storm damage, or lockouts. FiveServ dispatches licensed crews <strong>24/7/365</strong> across <strong>18 cities in Central Florida</strong> with a <strong>2-hour on-site response target</strong>. Call <a href={`tel:${SITE.phone}`} className="underline" style={{ color: "#1A1A1A" }}>{SITE.phone}</a> for immediate dispatch.
              </p>
              <h3 className="mt-8 font-display font-bold text-xl sm:text-2xl" style={{ color: "#1A1A1A" }}>
                How much does emergency repair cost in Orlando?
              </h3>
              <p className="mt-3 text-base leading-relaxed" style={{ color: "#1A1A1A" }}>
                Most single-trade emergency calls in Orlando start around <strong>$185 for dispatch and the first hour</strong>. A burst pipe repair often runs <strong>$225–$3,000</strong>, and evening, weekend, or holiday timing can multiply the rate. These are estimates, not guaranteed prices — FiveServ provides a <strong>written line-item quote before major work begins</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2.5 — EMERGENCY REPAIR COST BREAKDOWN */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Emergency Repair Cost in Orlando FL (2026)
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-3xl mx-auto">
              Illustrative 2026 Orlando market ranges — estimates, not guaranteed FiveServ prices. Drywall, flooring, and mold cleanup after an emergency are quoted separately. A written line-item quote is provided before major work begins.
            </p>
            <div className="mx-auto mt-10 max-w-5xl overflow-x-auto border border-gray-200">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm sm:text-base">
                <thead style={{ background: "#1A1A1A", color: "#FFFFFF" }}>
                  <tr><th className="px-5 py-4">Emergency type</th><th className="px-5 py-4">What drives the range</th><th className="px-5 py-4 text-right">Typical 2026 range</th></tr>
                </thead>
                <tbody>
                  {COST_RANGES.map((row, i) => (
                    <tr key={row.item} style={{ background: i % 2 ? "#FFFBF0" : "#FFFFFF" }}>
                      <th scope="row" className="border-t border-gray-200 px-5 py-3 font-medium" style={{ color: "#1A1A1A" }}>{row.item}</th>
                      <td className="border-t border-gray-200 px-5 py-3 text-gray-600">{row.notes}</td>
                      <td className="border-t border-gray-200 px-5 py-3 text-right font-bold" style={{ color: "#1A1A1A" }}>{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-14 text-center font-display font-bold text-2xl" style={{ color: "#1A1A1A" }}>
              Time-of-Day Multiplier
            </h3>
            <div className="mx-auto mt-7 max-w-3xl overflow-x-auto border border-gray-200">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm sm:text-base">
                <thead style={{ background: "#1A1A1A", color: "#FFFFFF" }}>
                  <tr><th className="px-5 py-4">Time window</th><th className="px-5 py-4">Notes</th><th className="px-5 py-4 text-right">Rate multiplier</th></tr>
                </thead>
                <tbody>
                  {TIME_MULTIPLIERS.map((row, i) => (
                    <tr key={row.window} style={{ background: i % 2 ? "#FFFBF0" : "#FFFFFF" }}>
                      <th scope="row" className="border-t border-gray-200 px-5 py-3 font-medium" style={{ color: "#1A1A1A" }}>{row.window}</th>
                      <td className="border-t border-gray-200 px-5 py-3 text-gray-600">{row.notes}</td>
                      <td className="border-t border-gray-200 px-5 py-3 text-right font-bold" style={{ color: "#1A1A1A" }}>{row.multiplier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-14 text-center font-display font-bold text-2xl" style={{ color: "#1A1A1A" }}>
              Why Prices Vary
            </h3>
            <ul className="mx-auto mt-6 max-w-2xl space-y-3">
              {PRICE_VARIATIONS.map((v) => (
                <li key={v} className="flex items-start gap-3" style={{ color: "#1A1A1A" }}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#FFD700" }} />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center text-sm text-gray-600 max-w-3xl mx-auto">
              Planning a larger project instead? See our <a href="/bathroom-remodel-cost-orlando" className="font-bold underline" style={{ color: "#1A1A1A" }}>bathroom remodel cost guide</a>, <a href="/kitchen-remodel-cost-orlando" className="font-bold underline" style={{ color: "#1A1A1A" }}>kitchen remodel cost guide</a>, <a href="/handyman-cost-orlando" className="font-bold underline" style={{ color: "#1A1A1A" }}>handyman cost guide</a>, or <a href="/property-maintenance-rental-orlando" className="font-bold underline" style={{ color: "#1A1A1A" }}>rental property maintenance</a> page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — EMERGENCY TYPES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Emergency Repairs We Handle
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
              Same day emergency repair Orlando FL — single trade or multi-trade, residential or rental.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {EMERGENCY_TYPES.map((t) => (
                <article
                  key={t.title}
                  className="er-card rounded-lg p-6"
                  style={{
                    background: "#FFFBF0",
                    borderTop: "3px solid #FFD700",
                    ...FS_PATTERN_LIGHT,
                  }}
                >
                  <t.icon className="h-10 w-10" style={{ color: "#FFD700" }} />
                  <h3 className="mt-4 font-display font-bold text-xl" style={{ color: "#1A1A1A" }}>
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "#1A1A1A" }}>{t.desc}</p>
                </article>
              ))}
            </div>
            <div
              className="mx-auto mt-10 max-w-3xl rounded-md p-4 text-sm"
              style={{ background: "#FFF5F5", border: "1px solid #EF4444", color: "#7F1D1D" }}
              role="note"
            >
              <strong>Safety note:</strong> If you smell gas, evacuate immediately and call 911 or your gas utility <em>before</em> calling FiveServ. We handle the repair once the area is safe.
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — WHAT'S INCLUDED */}
      <section style={{ background: "#FFFBF0" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              What FiveServ Handles vs. What You Select
            </h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
              <div>
                <h3 className="font-display font-bold text-2xl" style={{ color: "#FFD700" }}>
                  FiveServ Provides
                </h3>
                <ul className="mt-6 space-y-3">
                  {PROVIDES.map((p) => (
                    <li key={p} className="flex items-start gap-3" style={{ color: "#1A1A1A" }}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#FFD700" }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl" style={{ color: "#1A1A1A" }}>
                  Client Decides After the Emergency
                </h3>
                <ul className="mt-6 space-y-3">
                  {CLIENT_SELECTS.map((c) => (
                    <li key={c} className="flex items-start gap-3" style={{ color: "#1A1A1A" }}>
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 text-center italic text-gray-600">
              Our job is to stop the bleeding first. Upgrades and permanent replacements are quoted separately after the emergency is contained.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              How Emergency Dispatch Works
            </h2>
            <div className="relative mt-16 grid gap-10 lg:grid-cols-4">
              <div
                className="hidden lg:block absolute left-[12%] right-[12%] top-[28px] h-px"
                style={{ background: "#FFD700", opacity: 0.3 }}
                aria-hidden
              />
              {STEPS.map((s) => (
                <div key={s.n} className="relative text-center lg:text-left">
                  <div
                    className="mx-auto lg:mx-0 flex h-14 w-14 items-center justify-center rounded-full font-display font-bold text-2xl"
                    style={{ background: "#FAFAF8", color: "#FFD700", border: "2px solid #FFD700" }}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg" style={{ color: "#1A1A1A" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — RESPONSE STAT */}
      <section style={{ background: "#1A1A1A" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <p className="text-sm" style={{ color: "#FFFFFF" }}>On-site emergency response target</p>
            <p
              className="mt-4 font-display font-bold"
              style={{ color: "#FFD700", fontSize: "clamp(4rem, 10vw, 7rem)", lineHeight: 1 }}
            >
              2 Hours
            </p>
            <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto">
              Weekend emergency repair Orlando FL, weeknights, holidays — same target. Response time varies with weather and city distance.
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
              style={{ background: "#FFD700", color: "#1A1A1A" }}
            >
              <Phone className="h-4 w-4" /> Dispatch Now
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — OUR WORK (placeholders, no photos) */}
      <section style={{ background: "#FFFBF0" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Recent Emergency Calls
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/5] flex items-center justify-center"
                  style={{
                    borderRadius: 20,
                    border: "3px solid #FFD700",
                    background: "#FAFAF8",
                    transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                  }}
                >
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full font-display font-black text-3xl"
                    style={{ background: "#FFD700", color: "#1A1A1A" }}
                  >
                    FS
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — WHY FIVESERV */}
      <section style={{ background: "#FFFBF0", ...FS_PATTERN_LIGHT }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Why Property Managers and Homeowners Choose FiveServ for Emergencies
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="er-card rounded-lg p-6"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.4)" }}
                >
                  <p.icon className="h-9 w-9" style={{ color: "#FFD700" }} />
                  <p className="mt-4 font-bold" style={{ color: "#1A1A1A" }}>{p.title}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — FAQs */}
      <div style={{ background: "#FFFBF0", ...FS_PATTERN_LIGHT }}>
        <FaqAccordion
          title="Emergency Repair — Frequently Asked Questions"
          eyebrow="FAQ"
          faqs={FAQS}
          emitSchema={false}
        />
      </div>

      {/* SECTION 10 — FINAL CTA */}
      <section style={{ background: "#FFD700" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Need Help Right Now?
            </h2>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide"
              style={{ background: "#1A1A1A", color: "#FFFFFF" }}
            >
              <Phone className="h-4 w-4" /> Call Emergency Dispatch
            </a>
            <p className="mt-5 font-display font-bold text-2xl" style={{ color: "#1A1A1A" }}>
              <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            </p>
            <p className="mt-3 text-sm" style={{ color: "#1A1A1A" }}>
              24/7 · 365 days · 18 cities across Central Florida. One call, one crew, one invoice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11 — CITIES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Emergency Repair Service Across Central Florida
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
              {CITIES.map((c) => (
                <p key={c} className="text-base">
                  <span style={{ color: "#FFD700" }} className="font-bold">Emergency Repair</span>{" "}
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

export default EmergencyRepairPage;
