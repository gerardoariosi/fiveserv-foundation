import { ReactNode } from "react";
import {
  CheckCircle2,
  PaintBucket,
  Home,
  Layers,
  ChefHat,
  DoorOpen,
  Brush,
  Building2,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Camera,
  Clock,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
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

type PaintType = { icon: LucideIcon; title: string; desc: string };
const PAINT_TYPES: PaintType[] = [
  { icon: PaintBucket, title: "Interior Painting", desc: "Walls, ceilings, full room repaints. Clean prep, clean lines, clean finish." },
  { icon: Home, title: "Exterior Painting", desc: "Facades, trim, doors, shutters. Pressure washed and prepped before every coat." },
  { icon: Layers, title: "Accent Walls", desc: "Feature walls, color blocking, texture. One room transformed without a full repaint." },
  
  { icon: DoorOpen, title: "Door & Trim Painting", desc: "Baseboards, crown molding, doors, window frames. Details that make the difference." },
  { icon: Brush, title: "Touch-Up Painting", desc: "Scuffs, patches, unit refresh between tenants. Fast and professional." },
  { icon: Building2, title: "Rental Property Painting", desc: "Multi-unit properties, fast turnaround, durable finishes. One invoice per property." },
  { icon: Sparkles, title: "Full Property Repaint", desc: "Complete interior or exterior transformation. One crew, one timeline, one invoice." },
];

const PROVIDES = [
  "Full surface prep and cleaning",
  "Sanding and hole patching",
  "Primer coat on all surfaces",
  "Premium paint — Sherwin-Williams or equivalent",
  "Drop cloths and masking tape",
  "Clean lines on all edges and trim",
  "Final walkthrough and touch-ups",
  "Full cleanup after job",
];

const CLIENT_SELECTS = [
  "Paint color and sheen (we guide you)",
  "Any specialty finishes or textures",
  "Cabinet hardware if updating",
];

const STEPS = [
  { n: "1", title: "Free Quote in 24hrs", desc: "On-site visit, every surface measured, written price before we touch anything." },
  { n: "2", title: "You Choose the Color", desc: "We guide you on sheen and finish. You approve the plan in writing." },
  { n: "3", title: "Prep. Prime. Paint.", desc: "Full surface prep, premium primer, clean edges. Our crew handles every detail." },
  { n: "4", title: "Clean Finish", desc: "Final walkthrough with you. Cleanup done. One invoice." },
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
  { q: "How much does interior painting cost in Orlando FL?", a: "Single rooms from $250. Full home interiors $1,500-$4,000 depending on size. All quoted on-site, free, in 24 hours." },
  { q: "How much does exterior painting cost in Orlando?", a: "Exterior painting is quoted on-site based on square footage, surfaces, and condition. Free quote in 24 hours." },
  { q: "Is FiveServ a licensed painting company in Florida?", a: "Yes. Fully licensed and insured in Florida. Our own crew handles every job — no subcontractors." },
  { q: "How long does interior painting take in Orlando?", a: "Single room 1 day. Full home 2-5 days depending on size. Timeline confirmed before we start." },
  { q: "Do you paint rental properties and apartments in Orlando?", a: "Yes. Unit refreshes, full repaints between tenants, multi-unit projects. Fast turnaround, one invoice per property." },
  { q: "Do you handle prep work or just paint?", a: "We handle everything — surface repair, sanding, priming, painting, cleanup. Full service, one team." },
  { q: "Can you paint kitchen cabinets in Orlando?", a: "Yes. Kitchen and bathroom cabinets, spray finish, clean lines. Quoted separately from wall painting." },
  { q: "What paint brands do you use?", a: "Sherwin-Williams or equivalent premium brands. We recommend the right sheen and finish for each surface and room." },
  { q: "Do you do touch-up painting for rental units?", a: "Yes. Touch-up painting between tenants is one of our most requested services. Fast, affordable, matches existing color where possible." },
  { q: "What cities do you serve for painting in Central Florida?", a: "All 18 cities — Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, Cocoa." },
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
  document.getElementById("painting-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const PaintingPage = () => {
  const aiAnswer =
    "FiveServ Property Solutions is a licensed and insured painting company in Orlando FL serving homeowners and property managers across 18 cities in Central Florida. Painting services include interior painting, exterior painting, accent walls, cabinet painting, door and trim painting, full room repaints, touch-up painting, and commercial and rental property painting. Clean lines, full prep included, one invoice. Free on-site quote within 24 hours. Phone: (407) 881-4942.";

  return (
    <>
      <Seo
        title="Painting Company Orlando FL | Interior & Exterior Painters | FiveServ"
        description="FiveServ is Orlando's licensed and insured painting company. Interior and exterior painting for homeowners and property managers across 18 cities in Central Florida. Clean lines. No mess. Free quote in 24 hours."
        path="/painting"
      />

      <style>{`
        .br-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .br-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      {/* Hidden AI Overview block */}
      <AIOverviewBlock hidden answer={aiAnswer} />

      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full"
        style={{
          minHeight: 560,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="painting-quote"
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
        <div className="relative z-10 container py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <h1
              className="font-display font-bold leading-[1.1]"
              style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
            >
              Painting Company Orlando FL — Clean Lines. No Mess. Done Right.
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl">
              Interior and exterior painting for homeowners and property managers. Licensed, insured, full prep included. Serving 18 cities in Central Florida.
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
              Starting price varies by square footage, surfaces, and scope.
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
                  { k: "From $250", v: "Single room" },
                  { k: "24hr Quote", v: "Free on-site" },
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

      {/* Visible entity paragraph — users AND crawlers */}
      <section className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-gray-700">
            {aiAnswer}
          </p>
        </div>
      </section>

      {/* SECTION 2 — PAINT TYPES */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              What Type of Painting Do You Need?
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PAINT_TYPES.map((t) => (
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
                  Client Selects
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
              Not sure which color or sheen to choose? We guide you through every decision.
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
            <p className="text-sm" style={{ color: "#FFFFFF" }}>Painting starting from</p>
            <p
              className="mt-4 font-display font-bold"
              style={{ color: "#FFD700", fontSize: "clamp(4rem, 10vw, 7rem)", lineHeight: 1 }}
            >
              $250
            </p>
            <p className="mt-4 text-sm text-gray-400 max-w-xl mx-auto">
              Single room. Price depends on square footage, surfaces, and scope of work.
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
              Why Homeowners and Property Managers Choose FiveServ
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
          title="Painting Services — Frequently Asked Questions"
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
              Ready to Refresh Your Space?
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
              Also need flooring or drywall? Same team. One invoice.
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
                  <span style={{ color: "#FFD700" }} className="font-bold">Painting Services</span>{" "}
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

export default PaintingPage;
