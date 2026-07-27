import { ReactNode } from "react";
import {
  CheckCircle2,
  Layers,
  Grid3x3,
  Sparkles,
  TreePine,
  ShieldCheck,
  Award,
  Users,
  Camera,
  Clock,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { useReveal } from "@/hooks/use-fiveserv";
import { SITE, SERVICES } from "@/lib/site-config";

const DOT_GRID_CARD = {
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg width=%2728%27 height=%2728%27 viewBox=%270 0 28 28%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27rgba(255,215,0,0.18)%27%3E%3Cpath d=%27M7 3 Q7.6 6.4 10 7 Q7.6 7.6 7 11 Q6.4 7.6 4 7 Q6.4 6.4 7 3 Z%27/%3E%3Cpath d=%27M21 17 Q21.6 20.4 24 21 Q21.6 21.6 21 25 Q20.4 21.6 18 21 Q20.4 20.4 21 17 Z%27/%3E%3C/g%3E%3C/svg%3E")',
  backgroundSize: "48px 48px",
};

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

type FlooringType = { icon: LucideIcon; title: string; desc: string };
const FLOORING_TYPES: FlooringType[] = [
  { icon: Layers, title: "Luxury Vinyl Plank (LVP)", desc: "Waterproof, scratch-resistant, and the most-requested apartment finish across Central Florida." },
  { icon: Grid3x3, title: "Tile Installation", desc: "Bathroom, kitchen, entry. Straight lines, clean grout, finished trim — no shortcuts." },
  { icon: Sparkles, title: "Carpet Replacement", desc: "Pad, stretch and finish. Fast turnaround for apartment turns and full homes." },
  { icon: TreePine, title: "Laminate & Engineered Hardwood", desc: "Click-lock laminate and engineered wood for residential and amenity spaces." },
];

const PROVIDES = [
  "All labor",
  "Subfloor prep and leveling",
  "Underlayment and moisture barrier",
  "Adhesive and thinset",
  "Transition strips",
  "Baseboard reinstall",
  "Job site cleanup on completion",
];

const CLIENT_SELECTS = [
  "Flooring material and color",
  "Room(s) or unit(s) to prioritize",
  "Timeline preference if phased",
];

const STEPS = [
  { n: "1", title: "Free On-Site Measure", desc: "We measure in person and show material samples. Quote in 24 hours." },
  { n: "2", title: "You Select Material", desc: "LVP, tile, laminate, carpet. We guide you on what works for your property." },
  { n: "3", title: "Full Crew Installs", desc: "Subfloor prep, install, transitions, baseboards. One team, start to finish." },
  { n: "4", title: "Done in 3-5 Days", desc: "Job site cleaned, photo documentation delivered on completion." },
];

const WHY_POINTS = [
  { icon: ShieldCheck, title: "Licensed and insured in Florida" },
  { icon: Award, title: "15+ years combined experience" },
  { icon: Users, title: "Same crew start to finish" },
  { icon: Camera, title: "Photo documentation on every job" },
  { icon: Clock, title: "24-hour quote turnaround" },
  { icon: MapPin, title: "18 cities across Central Florida" },
];

const FAQS = [
  { q: "How much does flooring installation cost in Orlando FL?", a: "Flooring installation in Orlando starts from $3.99 per square foot for LVP. Installed pricing typically runs $4.50 to $12 per square foot for LVP, around $5.50 to $6 per square foot for laminate, and varies for tile depending on material (tile material starts at about $0.60 per square foot). Final cost depends on square footage, material selected, and subfloor condition. FiveServ delivers a free on-site quote within 24 hours." },
  { q: "What is the best flooring for a rental property in Central Florida?", a: "Luxury vinyl plank (LVP) is the most-recommended flooring for rental properties in Central Florida. It is waterproof, scratch-resistant, and stands up to Florida humidity and heavy tenant turnover. LVP is faster to install than tile and holds its look longer than carpet, which is why property managers pick it for unit turns." },
  { q: "How long does flooring installation take?", a: "Most flooring installations are completed in 3 to 5 days. A single apartment turn is typically done in 1 to 2 days, and a full home in 3 to 5 days depending on square footage and material. FiveServ sequences subfloor prep, install, and baseboards so no time is lost between trades." },
  { q: "What is the difference between LVP and laminate flooring?", a: "LVP is 100% waterproof and made of PVC, so it is the safer choice for kitchens, bathrooms, and rental properties in Florida. Laminate is made of compressed wood with a printed top layer — it looks similar but swells if exposed to standing water. LVP typically runs $4.50 to $12 per square foot installed, laminate around $5.50 to $6 per square foot installed." },
  { q: "Can you install flooring in occupied apartments during a unit turn?", a: "FiveServ installs flooring during unit turns and make-readys when the unit is vacant between tenants. For occupied units we schedule around the resident and typically complete room-by-room. Either way, the crew coordinates with the property manager to minimize vacancy days and disruption." },
  { q: "Is vinyl or tile better for Florida humidity?", a: "Both handle Florida humidity well. Tile is the most durable choice for wet areas like bathrooms and entryways, and it lasts decades. LVP is more affordable, faster to install, and softer underfoot — better for full-unit installs and rentals. FiveServ installs both and can help you pick the right one for each space." },
  { q: "Do I need to buy my own flooring materials?", a: "You can supply your own material or let FiveServ handle procurement. Clients typically select the material and color, and FiveServ provides all labor, subfloor prep, underlayment, adhesive, transitions, and baseboards. If you prefer not to shop, we source the material and charge it at invoice." },
  { q: "How do I find a reliable flooring contractor in Orlando?", a: "Look for a contractor licensed and insured in Florida who provides a written quote before starting and delivers photo documentation on completion. FiveServ is fully licensed and insured, quotes within 24 hours, and installs flooring across 18 cities in Central Florida with verified reviews from property managers and homeowners." },
  { q: "Do you handle flooring for rental properties and property managers in Central Florida?", a: "Yes. Property managers use FiveServ for LVP and carpet on apartment turns, unit turnovers, and full-community re-flooring across Central Florida. We work within the property schedule, minimize vacancy days, and deliver photo documentation for every job. One call handles the quote, the install, and the invoice." },
  { q: "Can water-damaged flooring be repaired, or does it need full replacement?", a: "It depends on the material and the extent of damage. LVP planks and tiles can often be replaced in the affected area only. Laminate and engineered wood usually need full replacement in that room because they swell when wet. FiveServ inspects the subfloor first — if there is hidden moisture damage, we address it before installing new flooring." },
];

const CITIES = [
  "Orlando FL",
  "Kissimmee FL",
  "Winter Park FL",
  "Lakeland FL",
  "Sanford FL",
  "Altamonte Springs FL",
  "Apopka FL",
  "Ocoee FL",
  "Winter Garden FL",
  "Clermont FL",
  "St. Cloud FL",
  "Davenport FL",
  "Deltona FL",
  "Daytona Beach FL",
  "Palm Coast FL",
  "Melbourne FL",
  "Palm Bay FL",
  "Cocoa FL",
];

const KEYWORDS = [
  "flooring installation Orlando FL",
  "flooring company Orlando",
  "LVP flooring cost per square foot",
  "luxury vinyl plank installation Orlando",
  "laminate flooring cost Orlando",
  "tile flooring installation Orlando",
  "hardwood flooring cost Orlando FL",
  "best flooring for rental property Florida",
  "durable flooring rental properties",
  "flooring for property managers Orlando",
  "flooring installer near me Orlando",
  "LVP vs laminate flooring rental",
  "licensed insured flooring contractor Orlando",
  "water damage flooring repair Orlando",
  "flooring replacement apartments Orlando",
  "unit turn flooring Orlando",
  "make ready flooring Orlando",
  "Central Florida flooring contractor",
];

const scrollToQuote = () => {
  document.getElementById("flooring-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FlooringPage = () => {
  const aiAnswer =
    "FiveServ Property Solutions installs and repairs LVP, tile, laminate and carpet flooring in Orlando FL and across 18 cities in Central Florida. Flooring installation starts from $3.99 per square foot for LVP. Property managers use FiveServ for apartment turns and unit turnovers; homeowners for full home flooring replacement. Free on-site quote and material samples within 24 hours. Phone: (407) 881-4942.";

  return (
    <>
      <Seo
        title="Flooring Installation Orlando FL 2026 | LVP, Tile & Carpet From $3.99/sq ft | FiveServ"
        description="Flooring installation in Orlando and Central Florida. LVP, tile, laminate, carpet. From $3.99/sq ft. Licensed, insured, one invoice. Free quote in 24 hours."
        path="/flooring"
        keywords={KEYWORDS}
      />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Flooring", url: `${SITE.url}/flooring` },
        ]}
        organization
        service={SERVICES.find((s) => s.slug === "maintenance")!}
        faqs={FAQS}
      />

      <style>{`
        .fl-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .fl-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      {/* Hidden AI Overview block */}
      <AIOverviewBlock hidden answer={aiAnswer} />

      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full"
        style={{
          minHeight: 560,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="flooring-quote"
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
        <div className="relative z-10 container py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <h1
              className="font-display font-bold leading-[1.1]"
              style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4.4vw, 3.25rem)", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              Flooring Installation Orlando FL — From $3.99/sq ft. Installed Clean, On Schedule.
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
              LVP, tile, laminate and carpet for homes, apartment turns, and commercial properties across Central Florida. Licensed, insured, one invoice.
            </p>
            <button
              type="button"
              onClick={scrollToQuote}
              className="mt-7 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
              style={{ background: "#FFD700", color: "#1A1A1A" }}
            >
              Get Free Quote
            </button>
            <p className="mt-3 text-xs text-gray-400 max-w-md">
              Starting price varies by material and square footage. Timeline 3-5 days depending on project.
            </p>
          </Reveal>

          <Reveal className="mt-10 max-w-2xl">
            <div
              className="rounded-lg p-6"
              style={{
                background: "rgba(26,26,26,0.85)",
                border: "2px solid #FFD700",
                ...DOT_GRID_CARD,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 text-center">
                {[
                  { k: "From $3.99/sq ft", v: "Transparent pricing" },
                  { k: "3-5 Day Turnaround", v: "Fast turnaround" },
                  { k: "Licensed & Insured", v: "Florida certified" },
                ].map((s, i) => (
                  <div
                    key={s.k}
                    className={`px-2 ${i > 0 ? "sm:border-l sm:border-[#FFD700]/60" : ""}`}
                  >
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

      {/* SECTION 2 — TYPES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              What Type of Flooring Do You Need?
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FLOORING_TYPES.map((t) => (
                <article
                  key={t.title}
                  className="fl-card rounded-lg p-6"
                  style={{
                    background: "#FFFBF0",
                    borderTop: "3px solid #FFD700",
                    ...DOT_GRID_CARD,
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
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — WHAT'S INCLUDED */}
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
                  Client Selects and Purchases
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
              Don't want to shop for material? We handle procurement and charge at invoice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              How It Works
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

      {/* SECTION 5 — PRICING */}
      <section style={{ background: "#1A1A1A" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <p className="text-sm" style={{ color: "#FFFFFF" }}>Flooring installation starting from</p>
            <p
              className="mt-4 font-display font-bold"
              style={{ color: "#FFD700", fontSize: "clamp(4rem, 10vw, 7rem)", lineHeight: 1 }}
            >
              $3.99/sq ft
            </p>
            <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto">
              Price depends on material (LVP, tile, laminate, carpet), square footage, and subfloor condition.
            </p>
            <button
              type="button"
              onClick={scrollToQuote}
              className="mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
              style={{ background: "#FFD700", color: "#1A1A1A" }}
            >
              Get Your Free Quote
            </button>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — OUR WORK */}
      <section style={{ background: "#FFFBF0" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Our Work
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

      {/* SECTION 7 — WHY FIVESERV */}
      <section style={{ background: "#FFFBF0", ...DOT_GRID_CARD }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Why Property Managers and Homeowners Choose FiveServ
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="fl-card rounded-lg p-6"
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

      {/* SECTION 8 — FAQs */}
      <div style={{ background: "#FFFBF0", ...DOT_GRID_CARD }}>
        <FaqAccordion
          title="Flooring Installation — Frequently Asked Questions"
          eyebrow="FAQ"
          faqs={FAQS}
          emitSchema={false}
        />
      </div>

      {/* SECTION 9 — FINAL CTA */}
      <section style={{ background: "#FFD700" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Ready to Install New Flooring?
            </h2>
            <button
              type="button"
              onClick={scrollToQuote}
              className="mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide"
              style={{ background: "#1A1A1A", color: "#FFFFFF" }}
            >
              Get Your Free Quote
            </button>
            <p className="mt-5 font-display font-bold text-2xl" style={{ color: "#1A1A1A" }}>
              <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            </p>
            <p className="mt-3 text-sm" style={{ color: "#1A1A1A" }}>
              Also need painting or a bathroom remodel? Same team. One invoice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 10 — CITIES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Serving Central Florida
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
              {CITIES.map((c) => (
                <p key={c} className="text-base">
                  <span style={{ color: "#FFD700" }} className="font-bold">Flooring Installation</span>{" "}
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

export default FlooringPage;
