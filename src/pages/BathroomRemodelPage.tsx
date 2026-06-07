import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Sparkles,
  Droplets,
  ShowerHead,
  Wrench,
  Bath,
  ShieldCheck,
  Award,
  Users,
  Camera,
  Clock,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { useReveal } from "@/hooks/use-fiveserv";
import { SITE } from "@/lib/site-config";

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

type RemodelType = { icon: LucideIcon; title: string; desc: string };
const REMODEL_TYPES: RemodelType[] = [
  { icon: Sparkles, title: "Tile Refresh", desc: "Keep your tub. Replace wall tile, floor tile, and accessories. Fast and affordable update." },
  { icon: ShowerHead, title: "Tub to Shower Conversion", desc: "Remove the tub, install a custom shower in the same space with new tile and fixtures." },
  { icon: Droplets, title: "Walk-in Shower Installation", desc: "Build a walk-in shower with open entry, custom tile, liner, drain, and glass door." },
  { icon: Wrench, title: "Full Bathroom Renovation", desc: "Complete gut and rebuild. New tile, plumbing, vanity, and fixtures. Everything." },
  { icon: Bath, title: "Bathtub Refinishing", desc: "Restore your existing tub professionally. New look without replacement cost." },
];

const PROVIDES = [
  "All labor",
  "Durock and cement board",
  "Thinset mortar and adhesive",
  "Waterproof membrane and liner",
  "Drain installation",
  "Plumbing connections",
  "And everything needed to complete the job",
];

const CLIENT_SELECTS = [
  "Wall and floor tiles",
  "Vanity and mirror",
  "Toilet if replacing",
  "Fixtures and accessories",
  "Glass door or shower curtain",
];

const STEPS = [
  { n: "1", title: "Free Quote", desc: "We assess in person or by photos. Quote delivered in 24 hours." },
  { n: "2", title: "You Select Materials", desc: "Tiles, vanity, fixtures. We guide you on what works." },
  { n: "3", title: "Full Crew", desc: "Our team handles every trade — tile, plumbing, fixtures — start to finish." },
  { n: "4", title: "Done in 3-7 Days", desc: "Photo documentation delivered on completion." },
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
  { q: "How much does a bathroom remodel cost in Orlando Florida?", a: "Bathroom remodels in Orlando start from $4,000. The final price depends on bathroom size, type of remodel, and materials selected. A tile refresh runs less than a full gut renovation. FiveServ provides a free on-site quote within 24 hours — clear and line-item before any work begins." },
  { q: "How long does a bathroom remodel take in Central Florida?", a: "Most bathroom remodels are completed in 3 to 7 days depending on scope. A tile refresh or tub-to-shower conversion typically runs 3 to 5 days. A full bathroom renovation can take up to 7 days. FiveServ coordinates the crew so every trade is sequenced correctly and no time is lost." },
  { q: "Do I need to buy my own tiles for a bathroom remodel?", a: "Yes. Clients select and purchase wall tiles, floor tiles, vanity, fixtures, and accessories. FiveServ provides all installation materials — cement board, thinset, grout, waterproof membrane, drain, and everything needed to complete the job. If you prefer not to shop, FiveServ handles procurement and charges at invoice." },
  { q: "What is included in a bathroom remodel?", a: "FiveServ provides all labor, cement board, mortar, adhesive, grout, caulk, waterproof membrane, drain installation, and plumbing connections. Clients select tiles, vanity, toilet if replacing, fixtures, and accessories. You bring the vision and materials — we handle the rest." },
  { q: "What is the difference between a tub to shower conversion and a walk-in shower installation?", a: "A tub to shower conversion removes the existing bathtub and installs a shower in the same space with new tile and fixtures. A walk-in shower installation builds a new shower with an open entry, custom tile, liner, drain, and glass door. Both are available across Central Florida." },
  { q: "Can you remodel a bathroom without replacing the tub?", a: "Yes. FiveServ offers tile refresh services where the tub stays and only wall tile, floor tile, and accessories are updated. We also offer bathtub refinishing to restore the look of an existing tub at a lower cost than full replacement." },
  { q: "How do I find a reliable bathroom remodel contractor in Orlando?", a: "Look for a contractor licensed and insured in Florida who provides a written quote before starting and has verified project photos and reviews. FiveServ is fully licensed and insured, quotes within 24 hours, and delivers before-and-after photo documentation on every job across 18 cities in Central Florida." },
  { q: "Do you handle bathroom remodeling for rental properties in Central Florida?", a: "Yes. Property managers and landlords use FiveServ for bathroom remodels in rental units across Central Florida. We work within the property schedule, minimize vacancy days, and deliver photo documentation for your records. One call handles the quote, the work, and the invoice." },
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

const scrollToQuote = () => {
  document.getElementById("bathroom-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const BathroomRemodelPage = () => {
  return (
    <>
      <Seo
        title="Bathroom Remodel Orlando FL | From $4,000 | FiveServ"
        description="Professional bathroom remodeling in Orlando and Central Florida. Tile, shower, tub to shower conversion, full renovation. Starting from $4,000. Free quote in 24 hours."
        path="/bathroom-remodel"
      />

      <style>{`
        .br-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .br-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full"
        style={{
          minHeight: 560,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="bathroom-quote"
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
        <div className="relative z-10 container py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <h1
              className="font-display font-bold leading-[1.1]"
              style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
            >
              Bathroom Remodel Orlando FL — From $4,000. Done in 3-7 Days.
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl">
              Professional bathroom remodeling across Central Florida. Fast. Affordable. Licensed.
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
              Starting price varies by bathroom size and scope. Timeline 3-7 days depending on project.
            </p>
          </Reveal>

          {/* Floating stats card with diamond pattern */}
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
                  { k: "From $4,000", v: "Transparent pricing" },
                  { k: "Done in 3-7 Days", v: "Fast turnaround" },
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

      {/* SECTION 2 — TYPES OF REMODEL */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              What Type of Bathroom Remodel Do You Need?
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REMODEL_TYPES.map((t) => (
                <article
                  key={t.title}
                  className="br-card rounded-lg p-6"
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
              Don't want to shop for materials? We handle procurement and charge at invoice.
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
              {/* Connecting line — desktop only */}
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
            <p className="text-sm" style={{ color: "#FFFFFF" }}>Bathroom remodels starting from</p>
            <p
              className="mt-4 font-display font-bold"
              style={{ color: "#FFD700", fontSize: "clamp(4rem, 10vw, 7rem)", lineHeight: 1 }}
            >
              $4,000
            </p>
            <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto">
              Price depends on bathroom size, materials selected, and scope of work.
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
                  className="br-card rounded-lg p-6"
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
          title="Bathroom Remodel — Frequently Asked Questions"
          eyebrow="FAQ"
          faqs={FAQS}
          emitSchema
        />
      </div>

      {/* SECTION 9 — FINAL CTA */}
      <section style={{ background: "#FFD700" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Ready to Transform Your Bathroom?
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
              Also need flooring or painting? Same team. One invoice.
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
                  <span style={{ color: "#FFD700" }} className="font-bold">Bathroom Remodel</span>{" "}
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

export default BathroomRemodelPage;
