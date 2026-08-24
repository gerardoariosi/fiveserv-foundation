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
  Home,
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
    title: "Square Footage & Room Count",
    desc: "Wall and ceiling area — not floor area — drives the labor line. Bigger continuous walls paint faster per foot than a hallway full of doors, closets, and cut-ins.",
  },
  {
    icon: Home,
    title: "Interior vs. Exterior Scope",
    desc: "Interior work is priced by rooms, ceilings, trim, and doors. Exterior adds pressure washing, siding or stucco condition, height access, and weather windows.",
  },
  {
    icon: Hammer,
    title: "Surface Prep & Repair",
    desc: "Sanding, patching nail holes, caulking, and drywall repair are the difference between a repaint that lasts and one that peels. Prep is quoted as its own line item.",
  },
  {
    icon: Droplets,
    title: "Paint Grade & Finish",
    desc: "Sherwin-Williams or equivalent contractor-grade acrylic latex costs more per gallon than builder-basic, but covers in fewer coats. Satin and semi-gloss hold up best in Florida humidity.",
  },
  {
    icon: Layers,
    title: "Number of Coats",
    desc: "A color change, a dark-over-light cover, or bare patched drywall needs primer plus two coats. A same-color refresh over sound paint can often go one coat.",
  },
  {
    icon: Building2,
    title: "Residential vs. Turnover Scope",
    desc: (
      <>
        A homeowner remodel is priced per job. Rental and multifamily{" "}
        <a href="/make-ready" className="underline font-semibold">make-ready turnovers</a> are priced per unit on a
        repeatable spec — one approved color and sheen across the portfolio lowers the cost per door.
      </>
    ),
  },
];

const WHY_POINTS: { icon: LucideIcon; title: string; href?: string }[] = [
  { icon: Phone, title: "One call — painting, prep, and touch-ups handled by the same team" },
  { icon: FileText, title: "One consolidated invoice for every trade", href: "/maintenance" },
  { icon: Building2, title: "Built for high-turnover rental and multifamily units", href: "/for-property-managers" },
  { icon: Award, title: "Licensed and insured in the State of Florida" },
  { icon: Clock, title: "Same crew start to finish — no rotating subs mid-job" },
  { icon: Layers, title: "Full painting service page with interior & exterior options", href: "/painting" },
];

const FAQS = [
  { q: "What determines interior painting cost in Orlando FL in 2026?", a: "Interior painting cost in Orlando depends on wall and ceiling square footage, how much prep and patching the surfaces need, the paint grade and sheen you choose, and whether the job needs primer plus two coats. As a 2026 market range, interior work in Central Florida generally lands around $2 to $6 per square foot depending on prep and paint grade — but we quote your exact scope free on-site and return the exact price the same day. Call (407) 881-4942." },
  { q: "What determines exterior painting cost in Orlando FL?", a: "Exterior painting cost is driven by the surface — stucco, block, siding, or wood — plus pressure washing, crack and stucco repair, height and access, and trim and soffit work. Exterior repaints in Central Florida generally run around $3.30 to $5.80 per square foot in 2026, though your number depends on condition. We inspect, then quote every part as a separate line item, free." },
  { q: "What is the cheapest way to paint a house in Orlando?", a: "The cheapest real path is a same-color refresh over sound walls: minimal prep, one coat, and no primer. Cutting prep instead is what makes a job expensive later, because peeling and flashing mean repainting sooner. For rentals, standardizing one color and sheen across every unit is the biggest long-term saving." },
  { q: "How much does painting cost per square foot in Orlando?", a: "In 2026, interior painting in Orlando generally falls around $2 to $6 per square foot and exterior around $3.30 to $5.80 per square foot, depending on prep, paint grade, and number of coats. These are market ranges, not a fixed guarantee — FiveServ quotes your project free on-site and gives you the exact price the same day." },
  { q: "What is the best paint for Florida humidity and mold resistance?", a: "A quality 100% acrylic latex with mold- and mildew-resistant additives performs best in Central Florida. Satin and semi-gloss finishes shed moisture and wipe clean, which is why we spec them for bathrooms, kitchens, laundry rooms, and rental hallways. Flat paint belongs on ceilings and low-traffic walls only." },
  { q: "How often should a rental unit be repainted between tenants?", a: "No Florida law requires repainting between tenants. In practice, most owners repaint every three to five years, or at move-out whenever walls are damaged, patched, heavily scuffed, or a dated color is slowing lease-up. Touch-ups between full repaints keep the cycle affordable." },
  { q: "Does FiveServ handle rental and multifamily painting in Orlando?", a: "Yes. FiveServ works primarily with property managers across Central Florida, painting rental units, multifamily buildings, common areas, and full make-ready turnovers. Multiple units can be scheduled on one work order and billed on one consolidated invoice." },
  { q: "Is FiveServ licensed and insured?", a: "Yes. FiveServ Property Solutions is licensed and insured in the State of Florida, and certificates of insurance are available for property managers and ownership groups on request before work starts." },
  { q: "Can I get a same-day painting quote in Orlando?", a: "Yes. Call (407) 881-4942 or submit the contact form and FiveServ returns a free line-item painting quote — often the same day, and within 24 hours for larger multi-unit scopes across the 18 Central Florida cities we serve." },
  { q: "Do you handle prep work or just paint?", a: "We handle the full scope: masking and protection, pressure washing on exteriors, sanding, caulking, patching nail holes, drywall repair, priming, then paint. Prep appears as its own line item on the quote so you can see exactly what is included." },
];

const KEYWORDS = [
  "painting cost Orlando",
  "interior painting cost Orlando FL",
  "exterior painting cost Orlando",
  "painting cost per square foot Orlando",
  "cheap painting company Orlando FL",
  "best painting company Orlando",
  "painting contractor Orlando FL",
  "rental property painting Orlando",
  "multifamily painting Orlando FL",
  "apartment turnover painting Orlando",
  "mold resistant paint Florida",
  "humidity resistant paint Orlando",
  "interior painters Orlando FL",
  "exterior house painting cost Orlando",
  "property management painting Orlando",
  "painting quote Orlando FL",
];

const CITIES = [
  "Orlando FL", "Kissimmee FL", "Winter Park FL", "Lakeland FL", "Sanford FL",
  "Altamonte Springs FL", "Apopka FL", "Ocoee FL", "Winter Garden FL", "Clermont FL",
  "St. Cloud FL", "Davenport FL", "Deltona FL", "Daytona Beach FL", "Palm Coast FL",
  "Melbourne FL", "Palm Bay FL", "Cocoa FL",
];

const PaintingCostOrlandoPage = () => {
  const aiAnswer =
    "Painting cost in Orlando FL depends on interior vs. exterior scope, square footage, how much surface prep and repair is needed, paint grade and finish, the number of coats, and whether the job is a residential remodel or a rental turnover. FiveServ Property Solutions gives Central Florida property managers a free line-item quote the same day. Call (407) 881-4942.";

  return (
    <>
      <Seo
        title="Painting Cost Orlando FL 2026 | Free Quote Same Day | FiveServ"
        description="What drives painting cost in Orlando FL in 2026 — interior vs exterior, prep, paint grade, and coats. FiveServ returns a free line-item painting quote the same day across Central Florida."
        path="/painting-cost-orlando"
        keywords={KEYWORDS}
      />
      <SchemaOrg
        organization
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Painting Cost Orlando", url: `${SITE.url}/painting-cost-orlando` },
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
          // Placeholder hero image — replace with /images/painting/placeholder-hero.jpg
          backgroundImage: `url("/images/painting/placeholder-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1A1A1A",
        }}
        id="painting-quote"
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
              Painting in Orlando FL (2026) — Get Your Exact Price, Same Day.
            </h1>
            <p
              className="mt-5 text-lg text-gray-200 max-w-2xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Interior and exterior repaints — what drives your price, how rental turnovers are quoted, and why we
              price prep, primer, and paint as separate line items.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                Get a Free Painting Quote
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
              Free line-item quote — prep, primer, paint, and trim listed separately.
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
                  { k: "24-Hr Quote", v: "Interior & exterior" },
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
                What determines painting cost in Orlando?
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#1A1A1A" }}>
                Every painting quote is different because the walls are different. Here are the five variables that
                move your final number — and why we quote each one as a separate line item.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Room & square footage", desc: "Wall and ceiling area, room count, and how many cut-ins, closets, and doors are in the scope." },
                  { title: "Interior vs. exterior", desc: "Exterior adds pressure washing, stucco or siding repair, height access, and weather windows." },
                  { title: "Surface prep & repair", desc: "Sanding, caulking, patching, and drywall repair are what make a repaint last." },
                  { title: "Paint grade & finish", desc: "Contractor-grade acrylic latex covers in fewer coats. Satin and semi-gloss handle Florida humidity." },
                  { title: "Number of coats", desc: "Color changes and bare patched drywall need primer plus two coats; a same-color refresh may need one." },
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
                  Tell us the rooms or the exterior and we return a free line-item quote — usually the same day.
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
              What Actually Drives Your Painting Cost
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
              Six variables explain why two painting quotes in Orlando can look completely different.
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

      {/* SECTION 5 — PAINT IN FLORIDA HUMIDITY + RESIDENTIAL VS TURNOVER */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <h2 className="font-display font-black text-3xl" style={{ color: "#1A1A1A" }}>
                Why the Right Paint Matters in Florida Humidity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Central Florida runs humid year-round, and paint that works fine in a dry climate blisters, flashes, or
                grows mildew here within a season or two. 100% acrylic latex with anti-microbial, mildew-resistant
                additives is the baseline spec we use — it stays flexible through heat cycles and resists the mold
                growth that shows up on shaded exterior walls and in poorly vented bathrooms.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                <li>• Acrylic latex with mold-resistant additives outperforms builder-basic paint in humidity</li>
                <li>• Satin and semi-gloss resist moisture and wipe clean — best for bathrooms and kitchens</li>
                <li>• Flat and matte belong on ceilings and low-traffic walls only</li>
                <li>• Allow more dry time between coats than the can states in humid conditions</li>
                <li>• Exterior stucco and block need clean, dry surfaces — pressure wash first, then cure</li>
              </ul>
              <div className="mt-8">
                <ImagePlaceholder
                  file="/images/painting/placeholder-humidity-resistant-paint-orlando.jpg"
                  label="Mold-resistant acrylic latex applied in an Orlando bathroom"
                  ratio="aspect-[16/9]"
                />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display font-black text-3xl" style={{ color: "#1A1A1A" }}>
                Residential Remodel vs. Rental Turnover Pricing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Homeowners and property managers do not buy painting the same way, and the pricing reflects it.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.5)" }}>
                  <h3 className="font-display font-black text-lg" style={{ color: "#1A1A1A" }}>Residential</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Priced per job. Colors are personal, accent walls and trim vary room to room, and premium finishes
                    or heavy prep on older drywall add labor beyond a straight repaint.
                  </p>
                </div>
                <div className="rounded-lg p-5" style={{ background: "#FFFFFF", border: "1px solid rgba(255,215,0,0.5)" }}>
                  <h3 className="font-display font-black text-lg" style={{ color: "#1A1A1A" }}>Rental / Multifamily</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Priced per unit on a repeatable spec. One approved color and sheen across the portfolio means bulk
                    material, faster crews, a lower cost per door, and matching paint on hand for touch-ups.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <ImagePlaceholder
                  file="/images/painting/placeholder-turnover-multifamily.jpg"
                  label="Multifamily turnover repaint, Central Florida"
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
              Free line-item painting quote in Orlando
            </p>
            <p
              className="mt-4 font-display font-black"
              style={{ color: "#FFD700", fontSize: "clamp(3rem, 9vw, 6.5rem)", lineHeight: 1 }}
            >
              24-Hr Quote
            </p>
            <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto">
              Send us the rooms or exterior elevations and photos. We return prep, primer, paint, and trim as separate
              line items — usually the same day, and always within 24 hours.
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
              Why Orlando Property Managers Buy Painting Through FiveServ
            </h2>
            <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
              One call, one crew, one invoice — instead of a painter, a drywall guy, and a handyman for the touch-ups.
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
              Painting Projects — Photos Coming Soon
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { file: "/images/painting/placeholder-interior-repaint-orlando-fl.jpg", label: "Interior repaint — Orlando FL" },
                { file: "/images/painting/placeholder-exterior-repaint-kissimmee-fl.jpg", label: "Exterior repaint — Kissimmee FL" },
                { file: "/images/painting/placeholder-accent-wall-winter-park-fl.jpg", label: "Accent wall — Winter Park FL" },
                { file: "/images/painting/placeholder-rental-touch-up-sanford-fl.jpg", label: "Rental unit touch-up — Sanford FL" },
                { file: "/images/painting/placeholder-cabinet-trim-apopka-fl.jpg", label: "Cabinet & trim painting — Apopka FL" },
                { file: "/images/painting/placeholder-multifamily-turnover-orlando-fl.jpg", label: "Multifamily turnover painting — Orlando FL" },
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
          title="Painting Cost Orlando FL — FAQs"
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
              Tell Us the Rooms or the Exterior — Get Your Price the Same Day.
            </h2>
            <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "#1A1A1A" }}>
              Send us the scope and photos. We quote prep, primer, paint, and trim as separate line items so you know
              exactly what is included before a single drop cloth comes out.
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
              Need <a href="/flooring-cost-orlando" className="underline font-semibold">flooring</a> or{" "}
              <a href="/drywall" className="underline font-semibold">drywall repair</a> too? Same team, same work
              order, one invoice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 11 — CITIES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-black text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Painting Services Across Central Florida
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
              {CITIES.map((c) => (
                <p key={c} className="text-base">
                  <span style={{ color: "#FFD700" }} className="font-bold">Painting</span>{" "}
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

export default PaintingCostOrlandoPage;
