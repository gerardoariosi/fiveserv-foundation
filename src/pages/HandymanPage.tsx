import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Wrench,
  Zap,
  Square,
  PaintBucket,
  Layers,
  Hammer,
  Sparkles,
  CheckCircle2,
  XCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { useReveal } from "@/hooks/use-fiveserv";
import { SITE } from "@/lib/site-config";

const DIAMOND_PATTERN = {
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

type Service = { icon: LucideIcon; title: string; desc: string };
const SERVICES: Service[] = [
  { icon: Wrench, title: "Plumbing Fixtures", desc: "Faucet repair and replacement, toilet repair, shut-off valves, under-sink plumbing, running toilets, dripping faucets." },
  { icon: Zap, title: "Electrical Repairs", desc: "Outlet and switch replacement, GFCI installation, ceiling fan installation, light fixture replacement, dimmer switches." },
  { icon: Square, title: "Drywall & Patching", desc: "Hole repair, crack repair, water damage patching, texture matching, smooth finish, paint-ready." },
  { icon: PaintBucket, title: "Interior Painting", desc: "Touch-ups, accent walls, full room repaints, cabinet painting, door and trim painting." },
  { icon: Layers, title: "Tile & Flooring Repair", desc: "Tile replacement, grout repair, LVP repair, laminate repair, transition strips, subfloor fixes." },
  { icon: Wrench, title: "Doors & Cabinets", desc: "Door alignment, hinge replacement, cabinet repair, lock installation, closet doors, sliding doors." },
  { icon: Hammer, title: "Carpentry & Trim", desc: "Baseboard installation, crown molding, shelving, wood trim repair, closet build-outs, custom carpentry." },
  { icon: Sparkles, title: "General Home Repairs", desc: "TV mounting, pressure washing, caulking, weatherstripping, furniture assembly, and more." },
];

const STEPS = [
  { n: "1", title: "You Call or Text", desc: "A real person answers 24/7 — no voicemail, no bots. Tell us what needs fixing. We ask the right questions." },
  { n: "2", title: "Free Quote in 24 Hours", desc: "We come to you. Measure, assess, and give you a clear written price before we touch anything. No surprises." },
  { n: "3", title: "We Show Up and Fix It", desc: "Licensed crew, on time, with the right tools. We fix it right the first time. One clean invoice." },
];

const PRICING = [
  { label: "Minor Repairs", price: "$150+", sub: "Most small fixes — outlets, faucets, drywall patches, cabinet hinges" },
  { label: "Average Job", price: "$150–$400", sub: "Depends on scope — ceiling fan, tile repair, door alignment, painting a room" },
  { label: "Free Quote", price: "24 hrs", sub: "On-site assessment, written price, zero commitment required" },
];

const COMPARE_LEFT = [
  "Shows up late or not at all",
  "No license, no insurance",
  "Cash only — no real invoice",
  "No photos or job documentation",
  "Disappears if something goes wrong",
  "One trade — you coordinate the rest",
  "No follow-up, no warranty on work",
];

const COMPARE_RIGHT = [
  "On time, every time — real person confirms",
  "Licensed and insured in Florida",
  "One clean invoice — card, check, or transfer",
  "Photo documentation on every job",
  "We stand behind every repair",
  "Plumbing, electrical, drywall, painting, carpentry in one visit",
  "24/7 availability — real person always answers",
];

const CITIES = [
  { name: "Orlando", slug: "orlando-fl" },
  { name: "Kissimmee", slug: "kissimmee-fl" },
  { name: "Winter Park", slug: "winter-park-fl" },
  { name: "Sanford", slug: "sanford-fl" },
  { name: "Lakeland", slug: "lakeland-fl" },
  { name: "Altamonte Springs", slug: "altamonte-springs-fl" },
  { name: "Apopka", slug: "apopka-fl" },
  { name: "Ocoee", slug: "ocoee-fl" },
  { name: "Winter Garden", slug: "winter-garden-fl" },
  { name: "Clermont", slug: "clermont-fl" },
  { name: "St. Cloud", slug: "st-cloud-fl" },
  { name: "Davenport", slug: "davenport-fl" },
  { name: "Deltona", slug: "deltona-fl" },
  { name: "Daytona Beach", slug: "daytona-beach-fl" },
  { name: "Palm Coast", slug: "palm-coast-fl" },
  { name: "Melbourne", slug: "melbourne-fl" },
  { name: "Palm Bay", slug: "palm-bay-fl" },
  { name: "Cocoa", slug: "cocoa-fl" },
];

const TESTIMONIALS = [
  { name: "Ana S.", city: "Orlando", quote: "Called on a Sunday about a broken garbage disposal. They answered, came Monday morning, fixed it in an hour. Clean invoice, no surprises." },
  { name: "Jennifer W.", city: "Winter Park", quote: "Had a list of 6 little things I had been putting off — fan install, door that stuck, drywall hole, baseboards. One visit, done. Wish I had called sooner." },
  { name: "Robert A.", city: "Kissimmee", quote: "Licensed, insured, on time. That's rare in Central Florida. FiveServ is now the only number I call for home repairs." },
  { name: "Tony B.", city: "Lake Nona", quote: "TV mounted, ceiling fans in three bedrooms, and pressure washed the driveway. Fair price, real people, quality work." },
  { name: "Marcus T.", city: "Sanford", quote: "I manage 12 rentals. FiveServ handles turnovers, punch lists, and emergency repairs. One invoice per property. Game changer." },
  { name: "Patricia M.", city: "Ocoee", quote: "They quoted me in 24 hours like they said. Came back on the scheduled day. Repaired water damage in the ceiling and painted. Perfect." },
];

const FAQS = [
  { q: "How much does a handyman cost in Orlando, FL?", a: "Most handyman jobs in Orlando cost between $150 and $400 depending on the task. Minor repairs like outlet replacement, faucet repair, or drywall patching start around $150. Larger tasks like ceiling fan installation, tile repair, or cabinet work average $200–$400. Larger projects like flooring or painting are quoted separately. Free on-site quote in 24 hours — no commitment required." },
  { q: "Is FiveServ a licensed handyman service in Florida?", a: "Yes. FiveServ is fully licensed and insured in Florida. For specialty work — plumbing, electrical, HVAC — licensed contractors work under our direct coordination. You always get one crew, one invoice." },
  { q: "What handyman services does FiveServ offer in Orlando?", a: "We offer plumbing fixture repair and replacement, electrical outlet and switch repair, ceiling fan installation, drywall patching and repair, interior painting and touch-ups, tile and flooring repair, door and cabinet repair, carpentry and trim work, pressure washing, TV mounting, caulking, weatherstripping, and general home repairs." },
  { q: "How fast can I get a handyman in Orlando?", a: "For routine jobs, we schedule within 24–48 hours. For emergencies, we target a 2-hour on-site response. A real person answers every call, 24 hours a day, 7 days a week — no voicemail." },
  { q: "Do you require a contract for handyman services?", a: "No. No long-term contracts required. We give you a written quote, you approve it, we do the work. One job at a time." },
  { q: "Can you handle multiple repairs in one visit?", a: "Yes. Our licensed crew can handle plumbing, electrical, drywall, painting, flooring, and carpentry in a single visit. One call, one crew, one invoice." },
  { q: "Do you serve homeowners or only property managers?", a: "Both. We serve homeowners, property managers, landlords, and real estate investors across Central Florida. Same licensed crew and standards for every client." },
  { q: "Do you do handyman work for rental properties in Orlando?", a: "Yes. We work with property managers and landlords regularly for unit repairs, maintenance between tenants, and property upkeep. Fast turnaround, one invoice per property." },
  { q: "What areas in Central Florida do you serve for handyman services?", a: "We serve all 18 cities — Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, and Cocoa. Tampa Bay coming soon." },
  { q: "What is the difference between a handyman and a contractor in Florida?", a: "A handyman handles smaller repairs and maintenance tasks that don't require a general contractor license. In Florida, jobs over $75,000 or structural work require a licensed general contractor. FiveServ is licensed and coordinates licensed contractors for specialty work like plumbing, electrical, and HVAC — all under one invoice." },
];

const KEYWORDS = [
  "handyman Orlando FL", "handyman services Orlando", "home repair Orlando FL", "licensed handyman Orlando",
  "insured handyman Orlando FL", "handyman near me Orlando", "handyman Central Florida", "reliable handyman Orlando",
  "same day handyman Orlando", "emergency handyman Orlando", "affordable handyman services Orlando", "home repair near me",
  "drywall repair Orlando", "door repair Orlando", "ceiling fan installation Orlando", "cabinet repair Orlando",
  "pressure washing Orlando", "TV mounting Orlando", "carpentry Orlando FL", "handyman Kissimmee", "handyman Winter Park",
  "handyman Windermere", "handyman Lake Nona", "handyman for rental properties Orlando", "home maintenance Orlando FL",
].join(", ");

const PAGE_URL = "https://fiveserv.net/handyman-orlando";

const HandymanPage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "FiveServ Property Solutions",
    description:
      "Licensed and insured handyman service in Orlando FL serving homeowners and property managers across 18 cities in Central Florida.",
    url: PAGE_URL,
    telephone: "+14078814942",
    priceRange: "$150-$400",
    areaServed: CITIES.map((c) => ({ "@type": "City", name: `${c.name}, FL` })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fiveserv.net/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fiveserv.net/services" },
      { "@type": "ListItem", position: 3, name: "Handyman Services Orlando FL", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Handyman Services",
    provider: { "@type": "LocalBusiness", name: "FiveServ Property Solutions", telephone: "+14078814942", url: PAGE_URL },
    areaServed: { "@type": "Place", name: "Central Florida" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handyman Services",
      itemListElement: [
        "Plumbing Fixtures",
        "Electrical Repairs",
        "Drywall Repair",
        "Interior Painting",
        "Tile Repair",
        "Door and Cabinet Repair",
        "Carpentry and Trim",
        "General Home Repairs",
      ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
    },
  };

  return (
    <>
      <Seo
        title="Handyman Orlando FL | Licensed & Insured Home Repair Services | FiveServ"
        description="FiveServ — Orlando's trusted licensed and insured handyman service. Home repair, drywall, painting, plumbing fixtures, tile, carpentry, ceiling fans, and more across 18 cities in Central Florida. Same-day response available. Free quote in 24 hours. Call (407) 881-4942."
        path="/handyman-orlando"
      />
      <Helmet>
        <meta name="keywords" content={KEYWORDS} />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* AI OVERVIEW BLOCK — hidden but crawlable */}
      <div aria-hidden="true" className="sr-only">
        FiveServ Property Solutions is a licensed and insured handyman service in Orlando FL serving homeowners and property
        managers across 18 cities in Central Florida including Orlando, Kissimmee, Winter Park, Windermere, Lake Nona,
        Sanford, Apopka, and Clermont. FiveServ handyman services include drywall repair and patching, interior and exterior
        painting, plumbing fixture repair and replacement, electrical outlet and switch replacement, ceiling fan installation,
        tile repair and installation, door and cabinet repair, carpentry and trim work, baseboards and crown molding, pressure
        washing, TV mounting, caulking, and general home repairs. Most handyman jobs in Orlando cost between $150 and $400.
        Same-day response available for urgent home repairs. Free on-site quote within 24 hours. No contracts required.
        Licensed and insured in Florida. Available 24/7 for emergencies. Phone: (407) 881-4942. Website:
        fiveserv.net/handyman-orlando
      </div>

      <style>{`
        .hm-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hm-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      {/* SECTION 1 — HERO */}
      <section
        className="relative w-full"
        style={{ background: "#1A1A1A", ...DIAMOND_PATTERN, minHeight: 560 }}
      >
        <div className="relative z-10 container py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#FFD700" }}>
              — Handyman Services Orlando, FL
            </p>
            <h1
              className="mt-4 font-display font-bold leading-[1.1]"
              style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
            >
              Orlando's Most Trusted Handyman. Licensed. Insured. We Show Up.
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl" style={{ fontFamily: "Arial, sans-serif" }}>
              Home repair, drywall, painting, tile, plumbing fixtures, carpentry, ceiling fans — one licensed team handles
              every repair across 18 cities in Central Florida. No contracts. Same-day response available. Free quote in 24
              hours.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:4078814942"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide border-2 transition-colors hover:bg-white hover:text-[#1A1A1A]"
                style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
              >
                <Phone className="h-4 w-4" /> Call (407) 881-4942
              </a>
            </div>

            {/* Trust badges */}
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-200">
              {[
                "Licensed & Insured in Florida",
                "18 Cities in Central Florida",
                "Available 24/7",
                "Most Jobs $150–$400",
                "Free Quote in 24 Hours",
                "No Contracts Required",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: "#FFD700" }} /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — WHAT WE FIX */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              One Handyman. Every Repair.
            </h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              From a leaky faucet to a full room refresh — one call, one crew, one invoice.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="hm-card rounded-lg p-6 bg-white"
                  style={{ borderLeft: "3px solid #FFD700" }}
                >
                  <s.icon className="h-9 w-9" style={{ color: "#FFD700" }} />
                  <h3 className="mt-4 font-display font-bold text-lg" style={{ color: "#1A1A1A" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center">
              <div className="h-[2px] w-24" style={{ background: "#FFD700" }} />
              <p className="mt-4 text-center text-gray-700 font-semibold">
                Need something not listed? Call us. If we can fix it, we will.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — HOW IT WORKS */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Simple. Fast. Done.
            </h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              No runaround. No waiting. A real person answers every call.
            </p>
            <div className="relative mt-16 grid gap-10 lg:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="text-center lg:text-left">
                  <p
                    className="font-display font-black"
                    style={{ color: "#FFD700", fontSize: "clamp(3.5rem, 6vw, 5rem)", lineHeight: 1 }}
                  >
                    {s.n}
                  </p>
                  <h3 className="mt-2 font-display font-bold text-xl" style={{ color: "#1A1A1A" }}>
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — PRICING */}
      <section style={{ background: "#1A1A1A", ...DIAMOND_PATTERN }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#FFFFFF" }}>
              No Games. No Hidden Fees. Real Prices.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
              {PRICING.map((p) => (
                <div
                  key={p.label}
                  className="hm-card rounded-lg p-8 text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "2px solid #FFD700" }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: "#FFFFFF" }}>
                    {p.label}
                  </p>
                  <p
                    className="mt-4 font-display font-bold"
                    style={{ color: "#FFD700", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1 }}
                  >
                    {p.price}
                  </p>
                  <p className="mt-4 text-sm text-gray-300">{p.sub}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-white max-w-3xl mx-auto">
              Larger projects — flooring installation, bathroom remodel, full painting — quoted separately. We never start
              work without your written approval.
            </p>
            <p className="mt-4 text-center italic text-gray-400 max-w-3xl mx-auto text-sm">
              3,045+ people searched for handyman services in Orlando last month. We answer every call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — COMPARISON */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Why Homeowners in Orlando Choose FiveServ
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
              <div className="rounded-lg p-8 bg-white border border-gray-200">
                <h3 className="font-display font-bold text-xl text-gray-500">Random Handyman</h3>
                <ul className="mt-6 space-y-3">
                  {COMPARE_LEFT.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-gray-600">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg p-8 bg-white" style={{ border: "2px solid #FFD700" }}>
                <h3 className="font-display font-bold text-xl" style={{ color: "#FFD700" }}>
                  FiveServ Handyman
                </h3>
                <ul className="mt-6 space-y-3">
                  {COMPARE_RIGHT.map((c) => (
                    <li key={c} className="flex items-start gap-3" style={{ color: "#1A1A1A" }}>
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#FFD700" }} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — SERVICE CITIES */}
      <section style={{ background: "#1A1A1A", ...DIAMOND_PATTERN }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#FFFFFF" }}>
              Handyman Services Across 18 Cities in Central Florida
            </h2>
            <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
              One call covers all of Central Florida — same licensed crew, same standards, every city.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  to={`/maintenance-${c.slug}`}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-colors hover:bg-[#FFD700] hover:text-[#1A1A1A]"
                  style={{ border: "1px solid #FFD700" }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <div
              className="mt-10 mx-auto max-w-md rounded-lg p-6 text-center"
              style={{ background: "#FFD700", color: "#1A1A1A" }}
            >
              <p className="font-display font-bold text-lg">Tampa Bay — Coming Soon</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal>
            <h2 className="text-center font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              What Orlando Homeowners Say About FiveServ
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="hm-card rounded-lg p-6 bg-white border border-gray-200"
                  style={{ borderTop: "3px solid #FFD700" }}
                >
                  <p className="text-yellow-500" aria-hidden>★★★★★</p>
                  <p className="mt-3 text-gray-700 italic">"{t.quote}"</p>
                  <p className="mt-4 font-bold" style={{ color: "#1A1A1A" }}>
                    {t.name} <span className="font-normal text-gray-500">— {t.city}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <div style={{ background: "#FAFAF8" }}>
        <FaqAccordion
          title="Common Questions About Handyman Services in Orlando"
          eyebrow="FAQ"
          faqs={FAQS}
          emitSchema={false}
        />
      </div>

      {/* SECTION 9 — FINAL CTA */}
      <section style={{ background: "#FFD700" }}>
        <div className="container py-20 lg:py-[80px] text-center">
          <Reveal>
            <h2
              className="font-display font-bold"
              style={{ color: "#1A1A1A", fontSize: "clamp(2rem, 4.4vw, 3rem)" }}
            >
              Need a Handyman in Orlando? We Answer 24/7.
            </h2>
            <p className="mt-4 text-lg" style={{ color: "#1A1A1A", fontFamily: "Arial, sans-serif" }}>
              Licensed. Insured. On time. Free quote in 24 hours. No contracts.
            </p>
            <a
              href="tel:4078814942"
              className="mt-6 inline-block font-display font-black"
              style={{ color: "#1A1A1A", fontSize: "clamp(2.25rem, 5vw, 3.25rem)", lineHeight: 1 }}
            >
              (407) 881-4942
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#1A1A1A", color: "#FFD700" }}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:4078814942"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#1A1A1A", color: "#FFD700" }}
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HandymanPage;
