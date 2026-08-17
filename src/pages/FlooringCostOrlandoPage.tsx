import { ReactNode } from "react";
import {
  Ruler,
  Hammer,
  Layers,
  Droplets,
  Wrench,
  Building2,
  FileText,
  Clock,
  Phone,
  Award,
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
    icon: Ruler,
    title: "Unit Size & Square Footage",
    desc: "Larger jobs lower the per-square-foot rate. A 700 sq ft one-bedroom carries more setup cost per foot than a 1,400 sq ft two-bedroom on the same crew day.",
  },
  {
    icon: Hammer,
    title: "Old Flooring Removal",
    desc: "Tear-out and haul-away varies by what's coming up — carpet and pad is quick, glued tile or thinset takes more labor.",
  },
  {
    icon: Layers,
    title: "Subfloor Prep & Leveling",
    desc: "Self-leveling compound, patching, and moisture barriers add cost but prevent callbacks. Skipping prep is the #1 reason floors fail early in Florida slabs.",
  },
  {
    icon: Droplets,
    title: "Material Type & Grade",
    desc: "Wear layer thickness on LVP, plank width, and tile format move the number more than anything else on the invoice.",
  },
  {
    icon: Wrench,
    title: "Labor, Trim & Transitions",
    desc: "Baseboard removal and reinstall, quarter round, thresholds, and stair nosings are line items — we quote them up front instead of adding them later.",
  },
  {
    icon: Building2,
    title: "Residential vs. Turnover Scope",
    desc: (
      <>
        A single homeowner remodel is priced per job. Rental and multifamily{" "}
        <a href="/make-ready" className="underline font-semibold">make-ready turnovers</a> are priced per unit on a
        repeatable spec, which lowers cost per door.
      </>
    ),
  },
];

const WHY_POINTS: { icon: LucideIcon; title: string; href?: string }[] = [
  { icon: Phone, title: "One call — no juggling flooring, prep, and haul-away vendors" },
  { icon: FileText, title: "One consolidated invoice for every trade", href: "/maintenance" },
  { icon: Building2, title: "Built for high-turnover rental and multifamily units", href: "/for-property-managers" },
  { icon: Clock, title: "5-day make-ready guarantee when scope qualifies", href: "/make-ready" },
  { icon: Award, title: "Licensed and insured in the State of Florida" },
  { icon: Layers, title: "Full flooring service page with material options", href: "/flooring" },
];

const FAQS = [
  { q: "How much does it cost to install flooring in Orlando in 2026?", a: "Flooring cost in Orlando depends on the size of the area, the material you choose, whether old flooring needs removal, and how much subfloor prep is needed. Call (407) 881-4942 or request a free quote and we'll give you the exact number the same day." },
  { q: "What is the cheapest flooring option in Orlando?", a: "The most budget-friendly options are usually entry-level vinyl plank and basic ceramic tile, but the real savings come from matching the material to the job. For rental turnovers, waterproof LVP is often the better long-term value because it installs faster and repairs are plank-by-plank." },
  { q: "What affects vinyl plank flooring cost in Orlando?", a: "Vinyl plank cost depends on wear-layer thickness, plank width, whether old flooring needs removal, and whether the subfloor needs leveling. We quote every job per line item so you see exactly what each part of the scope costs. Call (407) 881-4942 for a free same-day quote." },
  { q: "What affects hardwood flooring installation in Orlando?", a: "Hardwood pricing depends on species, plank width, engineered vs. solid, and the condition of the subfloor. Engineered hardwood is usually the better choice in Central Florida because it handles humidity swings on concrete slabs. Request a free quote for your exact scope." },
  { q: "Is tile or vinyl better for Florida humidity?", a: "Both handle Florida humidity well, but waterproof vinyl plank (LVP) is the more practical choice for most units — it is fully water-resistant, warmer and quieter underfoot, faster to install, and cheaper to repair. Tile still wins in bathrooms, laundry rooms, and entries where standing water is common." },
  { q: "How long does flooring installation take in a typical unit?", a: "A typical 900 to 1,200 square foot unit takes one to three working days for LVP or laminate, and three to five days for tile once setting and grout cure time are included. Old floor removal and subfloor leveling can add a day depending on slab condition." },
  { q: "Does FiveServ handle flooring for rental and multifamily properties?", a: "Yes. FiveServ works primarily with property managers across Central Florida, installing flooring in rental units, multifamily buildings, and full make-ready turnovers. Multiple units can be scheduled on one work order with one consolidated invoice." },
  { q: "What flooring is best for high-turnover rental units?", a: "Waterproof vinyl plank with a 12 mil or thicker wear layer is the best flooring for high-turnover rentals in Orlando. It resists moisture and scratches, survives repeated move-ins, and damaged planks can be swapped individually instead of re-flooring the whole room between tenants." },
  { q: "Do you charge extra to remove the old flooring?", a: "Old floor removal and disposal is quoted as its own line item. The cost depends on the existing material — carpet and pad are simpler, while glued-down tile, thinset, and adhesive residue require grinding. We inspect and quote removal up front so there are no surprises." },
  { q: "Can I get a same-day flooring quote in Orlando?", a: "Yes. Call (407) 881-4942 or submit the contact form and FiveServ returns a free line-item flooring quote — often same day, and within 24 hours for larger multi-unit scopes across the 18 Central Florida cities we serve." },
];

const KEYWORDS = [
  "flooring cost Orlando",
  "flooring installation cost Orlando FL",
  "flooring installation quote Orlando",
  "vinyl plank flooring cost Orlando",
  "hardwood flooring cost Orlando",
  "laminate flooring cost Orlando",
  "tile flooring cost Orlando",
  "epoxy flooring cost Orlando",
  "cheap flooring Orlando FL",
  "best flooring company Orlando",
  "flooring contractor Orlando FL",
  "rental property flooring Orlando",
  "multifamily flooring Orlando",
  "property management flooring Orlando",
  "flooring replacement cost Orlando",
  "LVP flooring cost Orlando",
  "flooring for Florida humidity",
];

const CITIES = [
  "Orlando FL", "Kissimmee FL", "Winter Park FL", "Lakeland FL", "Sanford FL",
  "Altamonte Springs FL", "Apopka FL", "Ocoee FL", "Winter Garden FL", "Clermont FL",
  "St. Cloud FL", "Davenport FL", "Deltona FL", "Daytona Beach FL", "Palm Coast FL",
  "Melbourne FL", "Palm Bay FL", "Cocoa FL",
];

const FlooringCostOrlandoPage = () => {
  const aiAnswer =
    "Flooring cost in Orlando FL depends on unit size, material choice, old-floor removal, subfloor prep, and whether the job is a residential remodel or a rental turnover. FiveServ Property Solutions gives Orlando property managers a free line-item quote the same day, with material, labor, removal, and prep priced separately.";

  return (
    <>
      <Seo
        title="Flooring Cost Orlando FL 2026 | Free Quote Per Job | FiveServ"
        description="See what drives flooring cost in Orlando FL in 2026 and get a free line-item quote the same day. FiveServ installs LVP, laminate, hardwood, tile and epoxy across Central Florida."
        path="/flooring-cost-orlando"
        keywords={KEYWORDS}
      />
      <SchemaOrg
        organization
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Flooring Cost Orlando", url: `${SITE.url}/flooring-cost-orlando` },
        ]}
        faqs={FAQS}
      />

      <style>{`
        .fco-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .fco-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      <AIOverviewBlock hidden answer={aiAnswer} />

      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: 560,
          // Placeholder hero image — replace with /images/flooring/placeholder-hero.jpg
          backgroundImage: `url("/images/flooring/placeholder-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1A1A1A",
        }}
        id="flooring-quote"
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
              <Award className="h-3.5 w-3.5" /> 2026 Central Florida · Licensed · Insured
            </div>
            <h1
              className="mt-5 font-display font-black leading-[1.1]"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2rem, 4.4vw, 3.25rem)",
                textShadow: "0 2px 16px rgba(0,0,0,0.55)",
              }}
            >
              Flooring Installed in Orlando FL (2026) — Get Your Exact Price, Same Day.
            </h1>
            <p
              className="mt-5 text-lg text-gray-200 max-w-2xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Vinyl plank, laminate, hardwood, tile, and epoxy — what drives your price, how rental turnovers are
              quoted, and why we price every job as a free line-item quote.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                Get a Free Flooring Quote
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
              Free line-item quote — material, labor, removal, and prep listed separately.
            </p>
          </Reveal>

          <Reveal className="mt-10 max-w-2xl">
            <div
              className="rounded-lg p-6"
              style={{ background: "rgba(26,26,26,0.85)", border: "2px solid #FFD700", ...FS_PATTERN_DARK }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 text-center">
                {[
                  { k: "Same Day", v: "Free line-item quote" },
                  { k: "24-Hr Quote", v: "Free line-item pricing" },
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
                What determines flooring cost in Orlando?
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#1A1A1A" }}>
                Every flooring quote is different because the job is different. Here are the five variables that move
                your final number — and why we quote each one as a separate line item.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Unit size & layout", desc: "Larger areas lower the per-foot setup cost. Hallways, closets, and stairs add cuts and transitions." },
                  { title: "Material type & grade", desc: "Wear layer, plank width, tile format, and species all change the material line item." },
                  { title: "Old flooring removal", desc: "Carpet is quick. Glued tile or thinset takes more labor and disposal." },
                  { title: "Subfloor prep", desc: "Leveling, patching, and moisture barriers prevent callbacks on Florida slabs." },
                  { title: "Residential vs. turnover", desc: "Single remodels are priced per job. Repeatable rental specs lower cost per door." },
                ].map((v) => (
                  <div key={v.title} className="rounded-lg p-4" style={{ background: "#FFFBF0", border: "1px solid rgba(255,215,0,0.4)" }}>
                    <h3 className="font-bold" style={{ color: "#1A1A1A" }}>{v.title}</h3>
                    <p className="mt-1 text-sm text-gray-700">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg p-6 text-center" style={{ background: "#1A1A1A", ...FS_PATTERN_DARK }}>
                <p className="font-display font-black text-xl" style={{ color: "#FFD700" }}>
                  Get Your Exact Price
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  Tell us the size and flooring type. We return a free line-item quote — usually the same day.
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

      {/* SECTION 4 — COST FACTORS */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              What Actually Drives Your Flooring Cost
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
              Six variables explain almost every dollar of difference between two flooring quotes in Orlando.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FACTORS.map((t) => (
                <article
                  key={t.title}
                  className="fco-card rounded-lg p-6"
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

      {/* SECTION 5 — LVP IN FLORIDA + RESIDENTIAL VS TURNOVER */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <h2 className="font-display font-black text-3xl" style={{ color: "#1A1A1A" }}>
                Why Vinyl Plank (LVP) Wins in Florida Humidity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Central Florida runs humid year-round and most units sit on concrete slab. That combination punishes
                solid hardwood and standard laminate — cupping, swelling, and edge peeling show up within a couple of
                summers. Waterproof vinyl plank is dimensionally stable, unaffected by moisture from below or a tenant's
                overflowing washer, and it installs floating over a level slab with no cure time.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                <li>• 100% waterproof core — no swelling at the seams</li>
                <li>• 12 mil+ wear layer survives repeated move-ins and move-outs</li>
                <li>• Damaged planks swap individually instead of re-flooring a room</li>
                <li>• Installs in 1–3 days per unit, so vacancy days stop stacking</li>
                <li>• Lowest installed cost of any durable hard-surface option</li>
              </ul>
              <div className="mt-8">
                <ImagePlaceholder
                  file="/images/flooring/placeholder-lvp-orlando-rental.jpg"
                  label="Waterproof LVP installed in an Orlando rental unit"
                  ratio="aspect-[16/9]"
                />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display font-black text-3xl" style={{ color: "#1A1A1A" }}>
                Residential Remodel vs. Rental Turnover Pricing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Homeowners and property managers do not buy flooring the same way, and the pricing reflects it.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.5)" }}>
                  <h3 className="font-display font-black text-lg" style={{ color: "#1A1A1A" }}>Residential</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Priced per job. Material selection is personal, scope varies room to room, and premium options like
                    hardwood or large-format tile require more labor and material than entry-level LVP.
                  </p>
                </div>
                <div className="rounded-lg p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.5)" }}>
                  <h3 className="font-display font-black text-lg" style={{ color: "#1A1A1A" }}>Rental / Multifamily</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Priced per unit on a repeatable spec. One approved LVP across the portfolio means bulk material,
                    faster crews, and a lower cost per door — plus matching planks on hand for future repairs.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <ImagePlaceholder
                  file="/images/flooring/placeholder-turnover-multifamily.jpg"
                  label="Multifamily turnover flooring install, Central Florida"
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
              Free line-item flooring quote in Orlando
            </p>
            <p
              className="mt-4 font-display font-black"
              style={{ color: "#FFD700", fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 1 }}
            >
              24-Hr Quote
            </p>
            <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto">
              Send us the unit size, material, and photos. We return material, labor, removal, and prep as separate
              line items — usually within 24 hours.
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
              Why Orlando Property Managers Buy Flooring Through FiveServ
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
              One call, one crew, one invoice — instead of a flooring vendor, a haul-away guy, and a handyman for the
              baseboards.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="fco-card rounded-lg p-6"
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
              Flooring Projects — Photos Coming Soon
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { file: "/images/flooring/placeholder-lvp-install-orlando-fl.jpg", label: "LVP install — Orlando FL" },
                { file: "/images/flooring/placeholder-tile-bathroom-kissimmee-fl.jpg", label: "Tile floor — Kissimmee FL" },
                { file: "/images/flooring/placeholder-hardwood-winter-park-fl.jpg", label: "Hardwood — Winter Park FL" },
                { file: "/images/flooring/placeholder-laminate-sanford-fl.jpg", label: "Laminate — Sanford FL" },
                { file: "/images/flooring/placeholder-epoxy-garage-apopka-fl.jpg", label: "Epoxy garage — Apopka FL" },
                { file: "/images/flooring/placeholder-subfloor-prep-orlando-fl.jpg", label: "Subfloor prep & leveling" },
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
          title="Flooring Cost Orlando FL — FAQs"
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
              Tell Us the Size & Flooring Type — Get Your Price the Same Day.
            </h2>
            <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "#1A1A1A" }}>
              Send us the size, material, and photos. We quote material, labor, removal, and prep as separate line items
              so you know exactly what is included.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide"
              style={{ background: "#1A1A1A", color: "#FFD700" }}
            >
              Get Your Exact Price
            </a>
            <p className="mt-5 font-display font-black text-2xl" style={{ color: "#1A1A1A" }}>
              <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
            </p>
            <p className="mt-3 text-sm" style={{ color: "#1A1A1A" }}>
              One call, one crew, one invoice — flooring, prep, and haul-away included.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11 — CITIES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Flooring Installation Across Central Florida
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
              {CITIES.map((c) => (
                <p key={c} className="text-base">
                  <span style={{ color: "#FFD700" }} className="font-bold">Flooring</span>{" "}
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

export default FlooringCostOrlandoPage;
