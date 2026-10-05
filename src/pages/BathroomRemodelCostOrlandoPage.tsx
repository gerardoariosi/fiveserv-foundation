import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Award, Camera, CheckCircle2, Clock3, MapPin, Phone, ShieldCheck,
  Users, type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";
import { useReveal } from "@/hooks/use-fiveserv";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { CITIES, SITE } from "@/lib/site-config";
import { FS_PATTERN_DARK, FS_PATTERN_LIGHT } from "@/lib/fs-pattern";

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

const KEYWORDS = [
  "bathroom remodel cost Orlando", "bathroom renovation cost Orlando FL 2026",
  "shower remodel cost Orlando", "tub to shower conversion cost Orlando",
  "walk-in shower cost Orlando", "bathroom vanity replacement cost",
  "bathroom tile installation cost Orlando", "small bathroom remodel cost Orlando",
  "master bathroom remodel cost Orlando", "how long does a bathroom remodel take",
  "bathroom remodel permit Orlando", "bathroom remodel for rental property Orlando",
  "bathroom remodel contractor Orlando", "bathroom remodel near me",
  "bathroom remodel ROI Florida", "licensed bathroom contractor Orlando",
  "Orange County bathroom renovation cost",
];

const PROJECT_RANGES = [
  { project: "Cosmetic refresh", range: "$5,000–$12,000", scope: "Paint, hardware, lighting, and limited fixture updates" },
  { project: "Half-bath remodel", range: "$8,000–$18,000", scope: "Vanity, toilet, finishes, and minor plumbing work" },
  { project: "Standard full bathroom", range: "$12,000–$30,000", scope: "Typical finishes with the layout largely unchanged" },
  { project: "Tub-to-shower conversion", range: "$8,000–$18,000", scope: "Demolition, waterproofing, tile, drain, and fixtures" },
  { project: "Walk-in shower", range: "$12,000–$28,000", scope: "Custom waterproofing, tile, glass, and plumbing scope" },
  { project: "Master bathroom remodel", range: "$25,000–$60,000+", scope: "Larger footprint, custom finishes, and multiple fixtures" },
  { project: "Rental or unit bath turn", range: "$7,000–$18,000", scope: "Durable, turnover-focused finishes with controlled scope" },
];

const LINE_ITEMS = [
  { item: "Vanity and countertop", range: "$1,500–$6,000+" },
  { item: "Tile installation", range: "$8–$30+ per sq. ft." },
  { item: "Fixtures and accessories", range: "$800–$6,000+" },
  { item: "Plumbing changes", range: "$1,500–$8,000+" },
  { item: "Labor", range: "Often 40%–65% of the project" },
  { item: "Permits and inspections", range: "Varies by scope and jurisdiction" },
];

const PRICE_FACTORS = [
  "Bathroom size, layout, and whether plumbing locations stay in place",
  "Demolition needs and hidden water, mold, subfloor, or framing damage",
  "Tile size, pattern, waterproofing system, and custom shower details",
  "Vanity, countertop, glass, fixture, and finish selections",
  "Electrical, plumbing, structural, and permit requirements",
  "Access, scheduling, material lead times, and occupied-home protection",
];

const STEPS = [
  { n: "1", title: "Share the scope", desc: "Send photos or schedule a walkthrough so we can understand the bathroom and your priorities." },
  { n: "2", title: "Written quote in 24 hours", desc: "Receive a clear scope and project price based on the information available." },
  { n: "3", title: "Plan and build", desc: "Selections, licensed trades, demolition, waterproofing, tile, and fixtures are coordinated in sequence." },
  { n: "4", title: "Final walkthrough", desc: "Review the completed work, photo documentation, and one consolidated invoice." },
];

const WHY_POINTS: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: "Licensed and insured in Florida" },
  { icon: Award, title: "Clear written scope before work" },
  { icon: Users, title: "Coordinated crew from start to finish" },
  { icon: Camera, title: "Photo documentation on every job" },
  { icon: Clock3, title: "24-hour quote turnaround" },
  { icon: MapPin, title: "18 cities across Central Florida" },
];

const FAQS = [
  { q: "How much does a full bathroom remodel cost in Orlando in 2026?", a: "Illustrative Orlando market ranges for a standard full bathroom are often about $12,000–$30,000, while larger master bathrooms can reach $25,000–$60,000 or more. Layout changes, materials, waterproofing, hidden damage, and licensed-trade work affect the final amount. These are planning ranges, not guaranteed FiveServ prices; FiveServ provides a written quote for the actual scope." },
  { q: "How much does a shower remodel or tub-to-shower conversion cost?", a: "An Orlando tub-to-shower conversion often falls around $8,000–$18,000, while a custom walk-in shower may be roughly $12,000–$28,000. Glass, tile, plumbing changes, waterproofing, and hidden conditions can move the total. FiveServ confirms the scope and price in writing before work begins." },
  { q: "How long does a bathroom remodel take in Orlando?", a: "A focused refresh or conversion may take about one to two weeks once materials are available, while a full bathroom renovation can take several weeks. Permits, inspections, special-order materials, layout changes, and hidden repairs can extend the schedule. Your proposal should identify the expected sequence and timing for your specific project." },
  { q: "Do I need a permit for a bathroom remodel in Orlando or Orange County?", a: "A cosmetic update may not require a permit, but plumbing, electrical, structural, or layout changes commonly do. Requirements vary between the City of Orlando, Orange County, and nearby jurisdictions. FiveServ reviews the planned scope and coordinates required licensed work and permits when applicable." },
  { q: "What are the cheapest ways to save on a bathroom remodel?", a: "Keep plumbing fixtures in their current locations, choose readily available tile and fixtures, and avoid changing walls when possible. Prioritize waterproofing and essential repairs before decorative upgrades. A written scope also helps separate must-have work from optional selections before construction starts." },
  { q: "How much does bathroom vanity replacement cost?", a: "An illustrative installed vanity and countertop allowance in Orlando may range from about $1,500–$6,000 or more. Size, cabinet construction, countertop material, sink count, faucets, plumbing changes, and wall repairs all affect the total. The project quote should state which materials and installation tasks are included." },
  { q: "How much does bathroom tile installation cost per square foot in Orlando?", a: "Illustrative Orlando tile installation ranges are often about $8–$30 or more per square foot. Tile size, pattern, demolition, substrate repair, waterproofing, niches, curbs, and shower slopes can matter more than square footage alone. FiveServ prices the complete scope rather than promising a universal per-square-foot rate." },
  { q: "Is a bathroom remodel worth it, and what is the ROI in Florida?", a: "A well-planned bathroom remodel can improve daily use, reduce maintenance issues, and support a home's appeal, but no return is guaranteed. ROI depends on neighborhood, condition before renovation, finish level, and the local market when the property is sold. Durable, broadly appealing selections usually reduce the risk of over-improving." },
  { q: "How much does a rental property bathroom remodel cost in Orlando?", a: "A focused rental or unit-turn bathroom remodel may fall around $7,000–$18,000 when the layout stays in place and durable materials are used. Hidden damage, plumbing, permits, and turnover deadlines can change the scope. FiveServ provides property-specific pricing, completion photos, and one invoice." },
  { q: "How do I choose a licensed bathroom remodel contractor in Orlando?", a: "Confirm licensing and insurance, ask who performs regulated plumbing and electrical work, and require a written scope that identifies materials, exclusions, payment terms, permits, and change-order handling. Compare complete scopes instead of relying only on the lowest starting price. FiveServ provides a written quote and coordinates appropriately licensed trades for the approved work." },
];

const PLACEHOLDERS = [
  "tub-to-shower conversion with waterproofed tile walls in Orlando",
  "walk-in shower installation with glass enclosure in Winter Park",
  "rental property bathroom turn with durable finishes in Kissimmee",
  "double-vanity replacement in a Lake Nona master bathroom",
  "bathroom floor tile installation in a Sanford home",
  "completed full bathroom renovation in Central Florida",
];

const BathroomRemodelCostOrlandoPage = () => {
  const aiAnswer = "Bathroom remodel costs in Orlando in 2026 depend on room size, layout changes, waterproofing, materials, permits, and hidden conditions. FiveServ provides licensed and insured bathroom renovation services with a written, project-specific quote in 24 hours. FiveServ Property Solutions serves homeowners, landlords, and property managers across Orlando and 18 Central Florida cities. Phone: (407) 881-4942.";

  return <>
    <Seo
      title="Bathroom Remodel Cost Orlando FL 2026 | Real Prices | FiveServ"
      description="Explore bathroom remodel costs in Orlando for 2026, including showers, tile, vanities, and rental units. Licensed & insured. Free written quote in 24 hours."
      path="/bathroom-remodel-cost-orlando"
      keywords={KEYWORDS}
    />
    <SchemaOrg
      organization
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Bathroom Remodel", url: `${SITE.url}/bathroom-remodel` },
        { name: "Bathroom Remodel Cost Orlando", url: `${SITE.url}/bathroom-remodel-cost-orlando` },
      ]}
    />
    <AIOverviewBlock hidden answer={aiAnswer} />

    <section className="relative bg-brand-black" id="bathroom-cost-quote" style={FS_PATTERN_DARK}>
      <div className="absolute inset-0 bg-hero-overlay/[0.72]" aria-hidden="true" />
      <div className="container relative py-12 sm:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-brand-gold">2026 Orlando bathroom remodeling guide</p>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-brand-white sm:text-5xl">Bathroom Remodel Cost Orlando FL (2026) — Real Prices, No Surprises.</h1>
          <p className="mt-4 max-w-2xl text-base text-brand-white/85 sm:mt-5 sm:text-lg">Plan your shower, tile, vanity, or full renovation with clear market ranges and a written price based on your actual bathroom.</p>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-7">
            <Button asChild size="lg" className="font-bold uppercase"><Link to="/contact">Get a Free Quote</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-brand-white/50 bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-black"><a href={`tel:${SITE.phone}`}><Phone aria-hidden="true" /> Call {SITE.phone}</a></Button>
          </div>
        </Reveal>
        <Reveal className="mt-7 max-w-2xl sm:mt-10">
          <div className="rounded-md border-2 border-brand-gold bg-brand-black/85 p-3 sm:p-6" style={FS_PATTERN_DARK}>
            <div className="grid grid-cols-3 gap-0 text-center">
              {[
                { k: "Written Price First", v: "Based on your actual scope" },
                { k: "24-Hr Quote", v: "Clear line-item proposal" },
                { k: "Licensed & Insured", v: "Florida property services" },
              ].map((s, i) => <div key={s.k} className={`px-1 sm:px-2 ${i ? "border-l border-brand-gold/60" : ""}`}><p className="font-display text-sm font-bold leading-tight text-brand-gold sm:text-xl">{s.k}</p><p className="mt-1 text-[10px] leading-tight text-brand-white/80 sm:text-xs">{s.v}</p></div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-border bg-card"><div className="container py-12"><p className="max-w-4xl text-base leading-relaxed text-card-foreground sm:text-lg">{aiAnswer}</p></div></section>

    <section className="bg-surface-warm"><div className="container py-16 lg:py-20"><Reveal>
      <div className="mx-auto max-w-4xl border-l-4 border-brand-gold bg-card p-8 shadow-card lg:p-10" style={FS_PATTERN_LIGHT}>
        <p className="text-xs font-bold uppercase text-brand-black">Quick answer</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-brand-black">How much does a bathroom remodel cost in Orlando?</h2>
        <ul className="mt-6 space-y-3 text-base text-brand-black">
          {["Cosmetic refreshes may start around $5,000–$12,000 when plumbing and layout remain unchanged.", "A standard full bathroom remodel often plans around $12,000–$30,000.", "Custom walk-in showers and master bathrooms can cost more because of waterproofing, glass, tile, plumbing, and finish selections.", "FiveServ provides a written project-specific quote in 24 hours; market ranges are not guaranteed prices."].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" /><span>{item}</span></li>)}
        </ul>
      </div>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Bathroom Remodel Cost Breakdown</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">Illustrative Orlando market ranges, not guaranteed FiveServ prices. Your written quote depends on the approved scope, site conditions, and selections.</p>
      <div className="mx-auto mt-10 max-w-5xl overflow-x-auto border border-border">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm sm:text-base">
          <thead className="bg-brand-black text-brand-white"><tr><th className="px-5 py-4">Project type</th><th className="px-5 py-4">Typical scope</th><th className="px-5 py-4 text-right">Illustrative range</th></tr></thead>
          <tbody>{PROJECT_RANGES.map((row, i) => <tr key={row.project} className={i % 2 ? "bg-surface-warm" : "bg-card"}><th scope="row" className="border-t border-border px-5 py-3 font-medium text-brand-black">{row.project}</th><td className="border-t border-border px-5 py-3 text-muted-foreground">{row.scope}</td><td className="border-t border-border px-5 py-3 text-right font-bold text-brand-black">{row.range}</td></tr>)}</tbody>
        </table>
      </div>
      <h3 className="mt-14 text-center font-display text-2xl font-bold text-brand-black">Common Line-Item Planning Allowances</h3>
      <div className="mx-auto mt-7 max-w-3xl overflow-x-auto border border-border">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm sm:text-base">
          <thead className="bg-brand-black text-brand-white"><tr><th className="px-5 py-4">Line item</th><th className="px-5 py-4 text-right">Illustrative allowance</th></tr></thead>
          <tbody>{LINE_ITEMS.map((row, i) => <tr key={row.item} className={i % 2 ? "bg-surface-warm" : "bg-card"}><th scope="row" className="border-t border-border px-5 py-3 font-medium text-brand-black">{row.item}</th><td className="border-t border-border px-5 py-3 text-right font-bold text-brand-black">{row.range}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mx-auto mt-5 max-w-4xl text-sm text-muted-foreground">Allowances can overlap with the project ranges above and should not be added together as a universal estimate. Regulated work is coordinated with appropriately licensed professionals.</p>
    </Reveal></div></section>

    <section className="bg-surface-soft"><div className="container py-20"><Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div><h2 className="font-display text-3xl font-bold text-brand-black">What Changes the Price?</h2><ul className="mt-6 space-y-4">{PRICE_FACTORS.map((factor) => <li key={factor} className="flex gap-3 text-brand-black"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />{factor}</li>)}</ul><p className="mt-6 text-brand-black">Compare the scope with our <Link to="/bathroom-remodel" className="font-bold underline">bathroom remodeling services</Link>, <Link to="/kitchen-remodel" className="font-bold underline">kitchen remodeling</Link>, and <Link to="/flooring-cost-orlando" className="font-bold underline">flooring cost guide</Link>.</p></div>
        <div className="flex aspect-[16/9] items-center justify-center border-2 border-brand-gold bg-surface-warm p-6 text-center" style={FS_PATTERN_LIGHT}><p className="max-w-sm text-sm font-semibold text-brand-black">Photo placeholder: contractor reviewing tile, waterproofing, vanity, and fixture selections for an Orlando bathroom remodel</p></div>
      </div>
    </Reveal></div></section>

    <section className="bg-surface-warm"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Timeline and How It Works</h2>
      <div className="relative mt-16 grid gap-10 lg:grid-cols-4"><div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-brand-gold/40 lg:block" aria-hidden="true" />{STEPS.map((s) => <div key={s.n} className="relative text-center lg:text-left"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold bg-surface-warm font-display text-2xl font-bold text-brand-black lg:mx-0">{s.n}</div><h3 className="mt-4 text-lg font-bold text-brand-black">{s.title}</h3><p className="mt-2 text-sm text-muted-foreground">{s.desc}</p></div>)}</div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">Schedules vary with scope, permits, inspections, material availability, and conditions discovered after demolition. The written proposal identifies the expected sequence for your project.</p>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div><p className="text-sm font-bold uppercase text-brand-black">For landlords & property managers</p><h2 className="mt-3 font-display text-3xl font-bold text-brand-black">Durable Bathroom Updates for Rental Properties</h2><p className="mt-5 text-muted-foreground">FiveServ scopes unit bathrooms around durability, maintainability, turnover timing, and a controlled finish package. Property owners receive completion photos and one invoice for the approved work.</p><p className="mt-4 text-brand-black">Explore <Link to="/property-maintenance-rental-orlando" className="font-bold underline">rental property maintenance</Link>, <Link to="/make-ready" className="font-bold underline">make-ready services</Link>, or our <Link to="/handyman-cost-orlando" className="font-bold underline">handyman cost guide</Link>.</p></div>
        <div className="flex aspect-[16/9] items-center justify-center border-2 border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}><p className="max-w-sm text-sm font-semibold text-brand-black">Photo placeholder: durable rental bathroom renovation prepared for an Orlando unit turnover</p></div>
      </div>
    </Reveal></div></section>

    <section className="bg-surface-warm" style={FS_PATTERN_LIGHT}><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Why Property Managers and Homeowners Choose FiveServ</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{WHY_POINTS.map((p) => <div key={p.title} className="hover-card rounded-md border border-brand-gold/40 bg-card p-6"><p.icon className="h-9 w-9 text-brand-gold" aria-hidden="true" /><p className="mt-4 font-bold text-brand-black">{p.title}</p></div>)}</div>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Bathroom Remodel Projects — Photos Coming Soon</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{PLACEHOLDERS.map((label) => <div key={label} className="flex aspect-[4/3] items-center justify-center border-2 border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}><p className="text-sm font-semibold text-brand-black">Photo placeholder: {label}</p></div>)}</div>
    </Reveal></div></section>

    <div className="bg-surface-warm" style={FS_PATTERN_LIGHT}><FaqAccordion title="Bathroom Remodel Cost Orlando — Frequently Asked Questions" eyebrow="FAQ" faqs={FAQS} emitSchema={false} /></div>

    <section className="bg-brand-gold"><div className="container py-20 text-center"><Reveal>
      <h2 className="font-display text-3xl font-bold text-brand-black sm:text-4xl">Get a Written Bathroom Remodel Price in 24 Hours</h2>
      <Button asChild size="lg" variant="secondary" className="mt-8 bg-brand-black font-bold uppercase text-brand-white hover:bg-brand-gray"><Link to="/contact">Get a Written Quote</Link></Button>
      <p className="mt-5 font-display text-2xl font-bold text-brand-black"><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
      <p className="mt-3 text-sm text-brand-black">Share your bathroom, priorities, and finish selections — we'll scope the complete project.</p>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Serving Central Florida</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">{CITIES.map((city) => <p key={city.slug} className="text-base"><span className="font-bold text-brand-black">Bathroom Remodel Pricing</span> <span className="text-brand-black">in {city.name} {city.state}</span></p>)}</div>
    </Reveal></div></section>
  </>;
};

export default BathroomRemodelCostOrlandoPage;
