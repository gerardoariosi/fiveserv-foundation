import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Package,
  Layers,
  Grid3x3,
  Droplets,
  Zap,
  Lightbulb,
  LayoutGrid,
  Sparkles,
  CheckCircle2,
  XCircle,
  Phone,
  Clock,
  Shield,
  TrendingUp,
  FileText,
  type LucideIcon,
} from "lucide-react";
import Seo from "@/lib/Seo";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { useReveal } from "@/hooks/use-fiveserv";

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

const PAGE_URL = "https://fiveserv.net/kitchen-remodel";

type Service = { icon: LucideIcon; title: string; desc: string; img: string };
const SERVICES: Service[] = [
  {
    icon: Package,
    title: "Cabinet Installation & Replacement",
    desc: "Stock, semi-custom, and custom cabinets. Soft-close hardware. Marine-grade plywood recommended for Florida's high humidity.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Layers,
    title: "Countertop Installation",
    desc: "Quartz, granite, laminate, butcher block. Humidity-resistant materials for Central Florida homes. Quartz is the #1 choice in Orlando in 2026.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Grid3x3,
    title: "Backsplash Installation",
    desc: "Tile, subway, mosaic, slab backsplash. Design guidance included. Full grout and sealing — done right.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Droplets,
    title: "Sink & Faucet Replacement",
    desc: "Undermount, drop-in, farmhouse. Licensed plumbers handle every fixture under FiveServ coordination.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "Appliance Installation",
    desc: "Dishwasher, range, microwave, hood, refrigerator. All brands. Licensed electrical and plumbing included.",
    img: "https://images.unsplash.com/photo-1556909114-4f5f9b62a7d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Lightbulb,
    title: "Kitchen Lighting",
    desc: "Recessed lighting, under-cabinet LED, pendant lights, dimmer switches. Licensed electrical on every job.",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: LayoutGrid,
    title: "Kitchen Flooring",
    desc: "Tile, LVP, hardwood, transitions. Waterproof options recommended for Florida kitchens.",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Full Kitchen Transformation",
    desc: "Complete gut remodel. Cabinets, counters, backsplash, flooring, appliances, lighting. One crew. One invoice.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const TIERS = [
  {
    label: "ESSENTIAL REFRESH",
    price: "From $5,000",
    img: "https://images.unsplash.com/photo-1556909195-4e5d1d1adbb1?auto=format&fit=crop&w=900&q=80",
    details: [
      "Stock cabinets",
      "Quartz or laminate counters",
      "Basic appliances",
      "Timeline: 5–7 days guaranteed",
    ],
    tag: "Best for budget updates and rental properties",
  },
  {
    label: "SMART INVESTMENT",
    price: "From $15,000",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fe6ba79?auto=format&fit=crop&w=900&q=80",
    details: [
      "Semi-custom cabinets",
      "Quartz or granite counters",
      "Mid-range appliances",
      "Backsplash included",
      "Timeline: 7–14 days guaranteed",
    ],
    tag: "Best for growing families and long-term homeowners",
  },
  {
    label: "PREMIUM KITCHEN",
    price: "Custom Quote",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    details: [
      "Custom cabinetry",
      "Luxury finishes",
      "Smart kitchen integration",
      "Premium appliances",
      "Timeline: Guaranteed in writing",
    ],
    tag: "Best for high-end homes and serious cooks",
  },
];

const STATS = [
  { n: "113%", label: "Average ROI on Kitchen Refresh", sub: "Highest return interior home project in the USA — 2025 Cost vs. Value Report" },
  { n: "38%", label: "Orlando Home Value Increase Since 2020", sub: "Kitchen upgrades compound that equity directly" },
  { n: "10/10", label: "Joy Score — NAR 2025 Report", sub: "Two-thirds of homeowners want to spend more time at home after a kitchen remodel" },
  { n: "#1", label: "Kitchen is the Top Deal Closer", sub: "For home buyers in Central Florida's competitive real estate market" },
];

const STEPS = [
  { n: "1", title: "Free On-Site Quote", desc: "We come to your home, measure every detail, understand your vision, and give you a complete written quote. No surprises. No obligation. Free in 24 to 48 hours." },
  { n: "2", title: "You Approve. We Start.", desc: "Nothing begins without your written approval. We pull all permits required in Orange and Seminole County. Your timeline is locked in writing before demo starts." },
  { n: "3", title: "Full Transformation. One Invoice.", desc: "Our licensed crew executes every trade start to finish. No subcontractors you have never met. One clean invoice when your kitchen is complete." },
];

const RENTAL_CARDS = [
  { icon: Clock, title: "5–7 Day Turnaround", desc: "Minimize vacancy days with a fast, complete kitchen refresh between tenants. Timeline guaranteed in writing." },
  { icon: Shield, title: "Built for High-Traffic Use", desc: "Moisture-resistant quartz counters, durable LVP flooring, soft-close cabinets that withstand years of rental use in Florida's climate." },
  { icon: TrendingUp, title: "Charge Higher Rents", desc: "An updated kitchen commands $150 to $300 more per month in rent across Central Florida — ROI in under 12 months." },
  { icon: FileText, title: "One Invoice Per Property", desc: "No juggling contractors. No multiple bills. One call covers cabinets, counters, appliances, flooring, and lighting." },
];

const COMPARE_LEFT = [
  "Multiple subcontractors you have never met",
  "Delays between trades",
  "Surprise costs discovered mid-project",
  "Hard to reach after deposit is paid",
  "You handle permits yourself",
  "Multiple invoices from multiple vendors",
  "No documentation, no photos",
];

const COMPARE_RIGHT = [
  "One licensed crew, start to finish",
  "All trades sequenced under our coordination",
  "Written quote, locked price, zero surprises",
  "Real person answers 24/7",
  "We pull all permits — Orange & Seminole County",
  "One clean invoice when complete",
  "Photo documentation on every job",
];

const TESTIMONIALS = [
  { name: "Ana S.", city: "Orlando", quote: "Our kitchen was outdated for years. FiveServ delivered a full transformation in 12 days — cabinets, quartz counters, backsplash, appliances. On time, on budget, one invoice." },
  { name: "Jennifer W.", city: "Winter Park", quote: "They pulled every permit, coordinated every trade, and kept me updated with photos daily. The finish quality is incredible. Worth every penny." },
  { name: "Robert A.", city: "Kissimmee", quote: "I own three rentals. FiveServ refreshed the kitchen in unit 2 in 6 days between tenants. I raised the rent $200 and it leased in a week." },
  { name: "Tony B.", city: "Lake Nona", quote: "Premium custom kitchen — smart appliances, luxury finishes, the works. They handled everything. Best contractor experience I've had in Central Florida." },
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

const FAQS = [
  { q: "How much does a kitchen remodel cost in Orlando FL?", a: "Kitchen remodel costs in Orlando range based on scope. Minor refreshes — new countertops, backsplash, and hardware — start from $5,000 with 5 to 7 day timelines. Mid-range remodels with semi-custom cabinets, quartz counters, and new appliances start from $15,000 with 7 to 14 day timelines. Premium custom kitchens are quoted on-site. Free quote in 24 to 48 hours — no commitment required." },
  { q: "How long does a kitchen remodel take in Orlando?", a: "Minor updates take 5 to 7 days. Mid-range remodels take 7 to 14 days. Full custom transformations take 2 to 4 weeks. Every FiveServ timeline is guaranteed in writing before work begins." },
  { q: "Do I need a permit for a kitchen remodel in Orlando?", a: "Yes. Most kitchen remodels in Orlando involving electrical, plumbing, or structural work require permits in Orange and Seminole County. FiveServ handles all permit applications and inspections for you — included in your project." },
  { q: "What is the ROI of a kitchen remodel in Orlando?", a: "Minor kitchen refreshes nationally returned 113 percent in home equity — the highest ROI interior project in the USA according to the 2025 Cost vs. Value Report. Orlando tracks close to the national average with home values up 38 percent since 2020." },
  { q: "What is the best countertop material for Orlando kitchens?", a: "Quartz is the top choice for Orlando homeowners in 2026 — it is non-porous, humidity resistant, heat tolerant, and low maintenance. Granite is a classic alternative. FiveServ recommends quartz for Central Florida's climate." },
  { q: "Is FiveServ licensed for kitchen remodeling in Florida?", a: "Yes. FiveServ is fully licensed and insured in Florida. Electrical and plumbing work is performed by licensed contractors under our direct coordination. All work is permitted and inspected." },
  { q: "Can you remodel a kitchen in a rental property in Orlando?", a: "Yes. We work with property managers and landlords across Central Florida for single-unit and multi-unit kitchen updates. Fast 5 to 7 day turnaround, durable materials for high-traffic use, one invoice per property." },
  { q: "What cabinets are best for Florida's humidity?", a: "Marine-grade plywood box construction is the top recommendation for Florida kitchens. It resists moisture, swelling, and rot that affect cheaper particleboard cabinets in Central Florida's year-round humidity." },
  { q: "How do I get started with a kitchen remodel in Orlando?", a: "Call or text (407) 881-4942 or fill out our contact form at fiveserv.net/contact. A real person answers 24/7. We schedule your free on-site quote within 24 to 48 hours. No commitment required." },
  { q: "What cities do you serve for kitchen remodeling in Central Florida?", a: "All 18 cities — Orlando, Kissimmee, Sanford, Winter Park, Lakeland, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay, Cocoa. Tampa Bay coming soon." },
];

const KEYWORDS = [
  "kitchen remodel Orlando FL", "kitchen renovation Orlando FL", "kitchen remodeling contractor Orlando",
  "kitchen remodel near me Orlando", "licensed kitchen remodel Orlando", "kitchen remodel cost Orlando",
  "affordable kitchen remodel Orlando FL", "cabinet installation Orlando", "quartz countertop installation Orlando FL",
  "kitchen backsplash installation Orlando", "kitchen appliance installation Orlando", "kitchen flooring Orlando FL",
  "custom kitchen Orlando", "best kitchen remodeling contractors Central Florida", "kitchen remodel Winter Park FL",
  "kitchen remodel Kissimmee FL", "kitchen renovation Lake Nona Orlando", "kitchen remodel for rental property Orlando",
  "licensed and insured kitchen remodel Florida", "one invoice kitchen remodel Central Florida",
  "kitchen remodel warranty Orlando", "how long does kitchen remodel take Orlando", "kitchen remodel ROI Orlando homeowner",
].join(", ");

const HERO_IMG = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80";
const QUICK_ANSWER_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const ROI_IMG = "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80";
const CREW_IMG = "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80";
const RENTAL_IMG = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80";
const CTA_IMG = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80";

const KitchenRemodelPage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "FiveServ Property Solutions",
    description:
      "Licensed and insured kitchen remodeling contractor in Orlando FL serving homeowners and property managers across 18 cities in Central Florida.",
    url: PAGE_URL,
    telephone: "+14078814942",
    priceRange: "$$",
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
      { "@type": "ListItem", position: 3, name: "Kitchen Remodel Orlando FL", item: PAGE_URL },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Kitchen Remodeling",
    provider: { "@type": "LocalBusiness", name: "FiveServ Property Solutions", telephone: "+14078814942", url: PAGE_URL },
    areaServed: { "@type": "Place", name: "Central Florida" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kitchen Remodeling Services",
      itemListElement: [
        "Cabinet Installation",
        "Countertop Installation",
        "Backsplash Installation",
        "Sink and Faucet Replacement",
        "Appliance Installation",
        "Kitchen Lighting",
        "Kitchen Flooring",
        "Full Kitchen Transformation",
      ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
    },
  };

  const aiAnswer =
    "FiveServ Property Solutions provides licensed and insured kitchen remodeling services in Orlando FL and across 18 cities in Central Florida. Kitchen remodel services include cabinet installation, quartz and granite countertop installation, backsplash tile installation, sink and faucet replacement, appliance installation, kitchen lighting, and flooring. Minor refreshes from $5,000. Mid-range from $15,000. Free quote in 24-48 hours. Phone: (407) 881-4942.";

  return (
    <>
      <Seo
        title="Kitchen Remodel Orlando FL | Licensed Contractors | One Team. One Invoice. | FiveServ"
        description="FiveServ transforms kitchens across Central Florida — cabinets, countertops, backsplash, flooring, appliances, lighting. Licensed and insured. 5 to 28 day timelines. Serving 18 cities. Free quote in 24 hours."
        path="/kitchen-remodel"
      />
      <Helmet>
        <meta name="keywords" content={KEYWORDS} />
        <link rel="canonical" href={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hidden AI Overview block — crawler-only entity answer */}
      <AIOverviewBlock hidden answer={aiAnswer} />

      <style>{`
        .kr-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .kr-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -10px rgba(255,215,0,0.35); }
      `}</style>

      {/* SECTION 1 — HERO */}
      <section className="relative w-full" style={{ background: "#1A1A1A", ...DIAMOND_PATTERN }}>
        <div className="relative z-10 container pt-16 pb-20 lg:pt-24 lg:pb-24">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#FFD700" }}>
              — Kitchen Remodel Orlando, FL
            </p>
            <h1
              className="mt-4 font-display font-bold leading-[1.1] text-white"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.25rem)" }}
            >
              Kitchen Remodel Orlando FL | Licensed Contractors.
              <br className="hidden sm:block" /> One Team. One Invoice.
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-3xl" style={{ fontFamily: "Arial, sans-serif" }}>
              Cabinets, countertops, backsplash, flooring, appliances, and lighting — one licensed crew transforms your
              kitchen in 5 to 28 days. Serving 18 cities in Central Florida. Free quote in 24 to 48 hours.
            </p>
          </Reveal>

          {/* Full-width hero image */}
          <Reveal className="mt-10">
            <div
              className="w-full rounded-lg overflow-hidden border-2"
              style={{ borderColor: "#FFD700", aspectRatio: "16 / 9" }}
            >
              <img src={HERO_IMG} alt="Beautiful modern kitchen remodel in Orlando FL" className="w-full h-full object-cover" loading="eager" />
            </div>
          </Reveal>

          <Reveal>
            {/* Trust badges */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-gray-200 max-w-4xl">
              {[
                "Licensed & Insured in Florida",
                "Permitted Work — We Handle It",
                "18 Cities in Central Florida",
                "5-Day to 4-Week Timelines",
                "Free Quote in 24–48 Hours",
                "One Invoice — No Surprises",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#FFD700" }} /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
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

      {/* SECTION 2 — QUICK ANSWER */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              How Long Does a Kitchen Remodel Take in Orlando?
            </h2>
          </Reveal>
          <Reveal className="mt-10">
            <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
              <img src={QUICK_ANSWER_IMG} alt="Finished kitchen remodel in Central Florida" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
              Most kitchen remodels in Orlando take 5 to 28 days depending on scope. Minor updates — new countertops,
              backsplash, and hardware — can be completed in 5 to 7 days. A full kitchen transformation with custom
              cabinets, new flooring, and appliances typically takes 2 to 4 weeks. At FiveServ, every project timeline
              is guaranteed in writing before we start. Free on-site quote in 24 to 48 hours. No commitment required.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                style={{ background: "#FFD700", color: "#1A1A1A" }}
              >
                Get My Free Kitchen Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DO */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Everything Your Kitchen Needs. One Team.
            </h2>
            <p className="mt-4 text-gray-600">
              From cabinet replacement to full transformation — one licensed crew handles every trade.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="kr-card rounded-lg bg-white overflow-hidden"
                style={{ borderLeft: "3px solid #FFD700" }}
              >
                <div className="w-full overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <s.icon className="h-9 w-9" style={{ color: "#FFD700" }} />
                  <h3 className="mt-4 font-display font-bold text-lg" style={{ color: "#1A1A1A" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INVESTMENT TIERS */}
      <section style={{ background: "#1A1A1A", ...DIAMOND_PATTERN }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Find the Right Kitchen for Your Budget
            </h2>
            <p className="mt-4 text-gray-300">
              Every project quoted on-site. Written approval required before we start anything.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TIERS.map((t) => (
              <article
                key={t.label}
                className="kr-card rounded-lg overflow-hidden flex flex-col"
                style={{ background: "rgba(0,0,0,0.4)", border: "2px solid rgba(255,215,0,0.5)" }}
              >
                <div className="w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                  <img src={t.img} alt={t.label} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#FFD700" }}>
                    {t.label}
                  </p>
                  <p className="mt-3 font-display font-bold" style={{ color: "#FFD700", fontSize: "clamp(2rem, 3.4vw, 2.5rem)" }}>
                    {t.price}
                  </p>
                  <ul className="mt-5 space-y-2 text-white text-sm text-left">
                    {t.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#FFD700" }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 pt-4 border-t border-white/10 text-xs italic text-gray-300">{t.tag}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center italic text-gray-400 max-w-3xl mx-auto text-sm">
            All timelines are guaranteed in writing before work begins. All prices are quoted on-site — free, no
            commitment required. We never start work without your written approval.
          </p>
        </div>
      </section>

      {/* SECTION 5 — ROI */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Your Kitchen Investment Returns More Than You Spend
            </h2>
            <p className="mt-4 text-gray-600">
              In Orlando's real estate market, a well-executed kitchen remodel builds real equity.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16 / 7" }}>
              <img src={ROI_IMG} alt="Before and after kitchen transformation Orlando FL" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="kr-card rounded-lg bg-white p-6"
                style={{ borderLeft: "3px solid #FFD700", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <p className="font-display font-bold" style={{ color: "#FFD700", fontSize: "clamp(2rem, 3.4vw, 2.75rem)", lineHeight: 1 }}>
                  {s.n}
                </p>
                <p className="mt-3 font-bold text-[#1A1A1A]">{s.label}</p>
                <p className="mt-2 text-sm text-gray-600">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
              style={{ background: "#FFD700", color: "#1A1A1A" }}
            >
              Start My Kitchen Remodel
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — HOW IT WORKS */}
      <section style={{ background: "#1A1A1A", ...DIAMOND_PATTERN }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Simple. Transparent. Done Right.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
            <Reveal>
              <div className="w-full rounded-lg overflow-hidden border-2" style={{ borderColor: "#FFD700", aspectRatio: "4 / 3" }}>
                <img src={CREW_IMG} alt="FiveServ crew working on kitchen installation" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div className="space-y-8">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-5">
                  <p className="font-display font-bold shrink-0" style={{ color: "#FFD700", fontSize: "3rem", lineHeight: 1 }}>
                    {s.n}
                  </p>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">{s.title}</h3>
                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — RENTAL PROPERTIES */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <Reveal>
              <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
                Affordable Kitchen Updates for Rental Properties in Orlando
              </h2>
              <p className="mt-4 text-gray-600">
                Property managers and landlords — fast turnaround, durable materials, one invoice per unit.
              </p>
              <div className="mt-6 w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <img src={RENTAL_IMG} alt="Renovated rental kitchen Orlando" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {RENTAL_CARDS.map((c) => (
                <article
                  key={c.title}
                  className="kr-card rounded-lg bg-white p-6"
                  style={{ borderLeft: "3px solid #FFD700" }}
                >
                  <c.icon className="h-8 w-8" style={{ color: "#FFD700" }} />
                  <h3 className="mt-4 font-display font-bold text-lg" style={{ color: "#1A1A1A" }}>{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                </article>
              ))}
              <div className="sm:col-span-2 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]"
                  style={{ background: "#FFD700", color: "#1A1A1A" }}
                >
                  Get Portfolio Pricing for Property Managers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHY FIVESERV */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Why Orlando Homeowners Choose FiveServ
            </h2>
            <p className="mt-4 text-gray-600">One team. One invoice. No surprises.</p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="rounded-lg p-8" style={{ background: "#F3F4F6" }}>
              <h3 className="font-display font-bold text-xl text-gray-700">Other Contractors</h3>
              <ul className="mt-6 space-y-3">
                {COMPARE_LEFT.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-gray-700">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg p-8" style={{ background: "#1A1A1A", ...DIAMOND_PATTERN }}>
              <h3 className="font-display font-bold text-xl" style={{ color: "#FFD700" }}>FiveServ</h3>
              <ul className="mt-6 space-y-3">
                {COMPARE_RIGHT.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#FFD700" }} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-600">
            Licensed in Florida · Insured · Permitted · 18 Cities · 24/7 · 5-Star Rated
          </p>
        </div>
      </section>

      {/* SECTION 9 — TESTIMONIALS */}
      <section style={{ background: "#1A1A1A", ...DIAMOND_PATTERN }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              What Orlando Homeowners Say About FiveServ
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="kr-card rounded-lg p-6"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,215,0,0.3)" }}
              >
                <p className="text-sm leading-relaxed text-white">"{t.quote}"</p>
                <p className="mt-5 font-bold" style={{ color: "#FFD700" }}>{t.name}</p>
                <p className="text-xs text-gray-400">{t.city}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — SERVICE CITIES */}
      <section style={{ background: "#FAFAF8" }}>
        <div className="container py-20 lg:py-[80px]">
          <Reveal className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Kitchen Remodeling Across 18 Cities in Central Florida
            </h2>
            <p className="mt-4 text-gray-600">
              Same licensed crew. Same standards. Every city in Central Florida.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to={`/maintenance-${c.slug}`}
                className="kr-card rounded-md bg-white p-4 text-center text-sm font-semibold text-[#1A1A1A] hover:text-brand-gold"
                style={{ border: "1px solid #E5E7EB" }}
              >
                {c.name}
              </Link>
            ))}
            <div
              className="rounded-md p-4 text-center text-sm font-semibold col-span-2 sm:col-span-3 lg:col-span-6"
              style={{ background: "#1A1A1A", color: "#FFD700", border: "1px dashed #FFD700" }}
            >
              Tampa Bay — Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <FaqAccordion
        title="Common Questions About Kitchen Remodeling in Orlando FL"
        eyebrow="FAQ"
        faqs={FAQS}
        emitSchema={false}
      />

      {/* SECTION 12 — FINAL CTA */}
      <section className="relative overflow-hidden" style={{ background: "#FFD700" }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${CTA_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container py-20 lg:py-[80px] text-center">
          <Reveal className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "#1A1A1A" }}>
              Ready to Transform Your Kitchen in Orlando?
            </h2>
            <p className="mt-4 text-[#1A1A1A]" style={{ fontFamily: "Arial, sans-serif" }}>
              Licensed. Insured. Permitted. One team. One invoice.
              <br />
              Free quote in 24 to 48 hours. No contracts.
            </p>
            <a
              href="tel:4078814942"
              className="mt-6 inline-block font-display font-bold text-[#1A1A1A]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              (407) 881-4942
            </a>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
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

export default KitchenRemodelPage;
