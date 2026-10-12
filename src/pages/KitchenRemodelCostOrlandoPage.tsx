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
  "kitchen remodel cost Orlando", "kitchen renovation cost Orlando FL 2026",
  "cabinet replacement cost Orlando", "countertop installation cost Orlando",
  "kitchen flooring cost", "small kitchen remodel cost Orlando",
  "full kitchen remodel Orlando", "kitchen remodel permit Orange County",
  "kitchen remodel contractor Orlando", "kitchen remodel ROI Florida",
  "rental property kitchen remodel Orlando", "kitchen backsplash cost",
  "kitchen cabinet refacing vs replacing", "how long does a kitchen remodel take",
  "licensed kitchen contractor Orlando", "kitchen remodel near me",
  "kitchen appliance installation cost Orlando", "custom kitchen cost Central Florida",
];

const PROJECT_RANGES = [
  { project: "Cosmetic refresh", range: "$5,000–$15,000", scope: "Paint, hardware, backsplash, and limited fixture updates" },
  { project: "Minor kitchen remodel", range: "$15,000–$30,000", scope: "Selected cabinet, countertop, and appliance updates; existing layout" },
  { project: "Mid-range full kitchen", range: "$30,000–$65,000", scope: "Cabinets, countertops, appliances, flooring, and coordinated trades" },
  { project: "High-end or custom kitchen", range: "$65,000–$120,000+", scope: "Custom cabinetry, premium finishes, and possible layout changes" },
  { project: "Rental unit kitchen", range: "$8,000–$25,000", scope: "Durable, turnover-focused updates with controlled scope" },
];

const LINE_ITEMS = [
  { item: "Cabinets — installed", range: "$5,000–$25,000+" },
  { item: "Countertops — installed", range: "$2,000–$8,000+" },
  { item: "Appliances", range: "$2,000–$12,000+" },
  { item: "Flooring — installed", range: "$1,500–$6,000+" },
  { item: "Backsplash — installed", range: "$800–$3,500+" },
  { item: "Plumbing and electrical changes", range: "$2,000–$10,000+" },
  { item: "Labor", range: "Often 25%–40% of the project" },
  { item: "Permits and inspections", range: "Varies by scope and jurisdiction" },
];

const PRICE_FACTORS = [
  "Kitchen size, cabinet quantity, and whether the layout stays in place",
  "Cabinet construction, custom storage, and refacing versus replacement",
  "Countertop material, slab size, edge details, and backsplash selections",
  "Appliance specifications, ventilation, and flooring or subfloor condition",
  "Plumbing, electrical, structural changes, and required permits",
  "Demolition, hidden damage, site access, and material lead times",
];

const STEPS = [
  { n: "1", title: "Share the scope", desc: "Send photos or schedule a walkthrough to review the kitchen, layout, and priorities." },
  { n: "2", title: "Written quote in 24 hours", desc: "Receive a written scope and project price based on the information available." },
  { n: "3", title: "Plan and build", desc: "Selections, licensed trades, demolition, cabinets, countertop templating, and installation are coordinated in sequence." },
  { n: "4", title: "Final walkthrough", desc: "Review the approved work, completion photos, and one consolidated invoice." },
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
  { q: "How much does a kitchen remodel cost in Orlando in 2026?", a: "Illustrative Orlando planning ranges are about $5,000–$15,000 for a cosmetic refresh, $15,000–$30,000 for a minor remodel, and $30,000–$65,000 for a mid-range full kitchen. High-end or custom projects may reach $65,000–$120,000 or more. These are illustrative market ranges, not guaranteed FiveServ prices. Size, selections, layout, and site conditions determine your written project-specific quote." },
  { q: "How much do kitchen cabinets cost, and should I reface or replace them?", a: "An illustrative installed cabinet allowance may be $5,000–$25,000 or more, depending on cabinet quantity, construction, and custom details. Refacing may suit sound cabinet boxes when the layout works; replacement is more appropriate for damaged boxes, changed layouts, or new storage needs. Compare complete scopes including doors, drawers, hardware, installation, and repairs rather than treating refacing as automatically cheaper." },
  { q: "How much does countertop installation cost in Orlando?", a: "An illustrative installed countertop allowance is about $2,000–$8,000 or more. Material, slab size, seams, edges, sink cutouts, demolition, and access affect the total. Confirm whether templating, fabrication, installation, and sink or plumbing work are included in your written proposal." },
  { q: "How long does a kitchen remodel take in Orlando?", a: "A focused cosmetic refresh may take about one to two weeks after materials arrive. A full kitchen remodel may take roughly four to eight weeks or longer, depending on scope. Cabinet lead times, countertop templating, permits, inspections, and hidden repairs can extend the schedule. Planning and procurement may add time before construction begins; your proposal should identify the expected sequence." },
  { q: "Do I need a kitchen remodel permit in Orlando or Orange County?", a: "Cosmetic work may not require a permit, but plumbing, electrical, structural, or layout changes commonly do. Requirements depend on the scope and whether the property is in the City of Orlando, Orange County, or another jurisdiction. FiveServ reviews the planned work and coordinates required permits and appropriately licensed trades when applicable." },
  { q: "How can I save money on a kitchen remodel?", a: "Keep the existing layout and utility locations where practical, use readily available cabinets and appliances, and compare standard countertop and backsplash options. Reuse sound components only when they suit the approved scope. Prioritize essential repairs and safe electrical or plumbing work; separate optional upgrades before construction to reduce change orders." },
  { q: "Is a kitchen remodel worth it, and what is the ROI in Florida?", a: "A kitchen remodel can improve daily use, maintenance, and buyer appeal, but no return is guaranteed. ROI depends on the local market, property condition, neighborhood, finish level, and eventual sale price. Avoid assuming a fixed recovery percentage or rent increase; compare your budget with local comparable properties and your ownership goals." },
  { q: "How much does a rental property kitchen remodel cost in Orlando?", a: "A controlled rental kitchen update may plan around $8,000–$25,000 when durable selections are used and the layout stays in place. Full replacement, hidden damage, utility changes, permits, and turnover deadlines can change that amount. This is an illustrative market range, not a guaranteed FiveServ price. FiveServ provides a property-specific written scope, completion photos, and one invoice." },
  { q: "How do I choose a licensed kitchen remodel contractor in Orlando?", a: "Verify the applicable Florida licenses and insurance, ask who performs regulated plumbing and electrical work, and require a written scope. The proposal should identify materials, exclusions, permits, payment terms, schedule assumptions, and change-order handling. Compare complete scopes, not only starting prices. FiveServ coordinates appropriately licensed trades for the approved work." },
  { q: "Can I live at home without a kitchen during the remodel?", a: "Many homeowners stay home, but cooking, sink access, and appliance use may be interrupted. Plan a temporary food-preparation area outside the work zone, budget for meals, and discuss dust protection, daily access, and utility shutoffs before work starts. Do not use improvised cooking or electrical setups that create hazards. Extensive demolition or utility work may make temporary relocation more practical." },
];

const PLACEHOLDERS = [
  "cabinet replacement with durable storage in an Orlando kitchen",
  "quartz countertop installation in a Winter Park kitchen",
  "rental unit kitchen refresh with easy-care finishes in Kissimmee",
  "custom kitchen cabinets and island in a Lake Nona home",
  "kitchen flooring and backsplash installation in Sanford",
  "completed full kitchen renovation in Central Florida",
];

const KitchenRemodelCostOrlandoPage = () => {
  const aiAnswer = "Kitchen remodel costs in Orlando in 2026 vary with cabinet quantity, countertops, appliances, layout changes, licensed-trade work, and permits. Illustrative market ranges are not guaranteed FiveServ prices. FiveServ provides a written, project-specific quote in 24 hours and serves homeowners, landlords, and property managers across Orlando and 18 Central Florida cities. Phone: (407) 881-4942.";

  return <>
    <Seo
      title="Kitchen Remodel Cost Orlando FL 2026 | Real Prices | FiveServ"
      description="Explore 2026 Orlando kitchen remodel costs for cabinets, countertops, flooring, and rentals. Licensed & insured. Free written quote in 24 hours."
      path="/kitchen-remodel-cost-orlando"
      keywords={KEYWORDS}
    />
    <SchemaOrg
      organization
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Kitchen Remodel", url: `${SITE.url}/kitchen-remodel` },
        { name: "Kitchen Remodel Cost Orlando", url: `${SITE.url}/kitchen-remodel-cost-orlando` },
      ]}
    />
    <AIOverviewBlock hidden answer={aiAnswer} />

    <section className="relative bg-brand-black" id="kitchen-cost-quote" style={FS_PATTERN_DARK}>
      <div className="absolute inset-0 bg-hero-overlay/[0.72]" aria-hidden="true" />
      <div className="container relative py-12 sm:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-brand-gold">2026 Orlando kitchen remodeling guide</p>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-brand-white sm:text-5xl">Kitchen Remodel Cost Orlando FL (2026) — Real Prices, No Surprises.</h1>
          <p className="mt-4 max-w-2xl text-base text-brand-white/85 sm:mt-5 sm:text-lg">Plan your cabinets, countertops, appliances, or full renovation with illustrative market ranges and a written price based on your actual kitchen.</p>
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
        <h2 className="mt-2 font-display text-3xl font-bold text-brand-black">How much does a kitchen remodel cost in Orlando?</h2>
        <ul className="mt-6 space-y-3 text-base text-brand-black">
          {["Cosmetic kitchen refreshes may plan around $5,000–$15,000 with limited changes.", "A mid-range full kitchen remodel may plan around $30,000–$65,000.", "Cabinets, countertops, appliances, and layout or utility changes are major budget drivers.", "FiveServ provides a written project-specific quote in 24 hours; illustrative market ranges are not guaranteed FiveServ prices."].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" /><span>{item}</span></li>)}
        </ul>
      </div>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Kitchen Remodel Cost Breakdown</h2>
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
        <div><h2 className="font-display text-3xl font-bold text-brand-black">What Changes the Price?</h2><ul className="mt-6 space-y-4">{PRICE_FACTORS.map((factor) => <li key={factor} className="flex gap-3 text-brand-black"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />{factor}</li>)}</ul><p className="mt-6 text-brand-black">Compare the scope with our <Link to="/kitchen-remodel" className="font-bold underline">kitchen remodeling services</Link>, <Link to="/bathroom-remodel-cost-orlando" className="font-bold underline">bathroom remodel costs</Link>, and <Link to="/flooring-cost-orlando" className="font-bold underline">flooring cost guide</Link>.</p></div>
        <div className="flex aspect-[16/9] items-center justify-center border-2 border-brand-gold bg-surface-warm p-6 text-center" style={FS_PATTERN_LIGHT}><p className="max-w-sm text-sm font-semibold text-brand-black">Photo placeholder: contractor reviewing cabinets, countertops, appliance specifications, and layout for an Orlando kitchen remodel</p></div>
      </div>
    </Reveal></div></section>

    <section className="bg-surface-warm"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Timeline and How It Works</h2>
      <div className="relative mt-16 grid gap-10 lg:grid-cols-4"><div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-brand-gold/40 lg:block" aria-hidden="true" />{STEPS.map((s) => <div key={s.n} className="relative text-center lg:text-left"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold bg-surface-warm font-display text-2xl font-bold text-brand-black lg:mx-0">{s.n}</div><h3 className="mt-4 text-lg font-bold text-brand-black">{s.title}</h3><p className="mt-2 text-sm text-muted-foreground">{s.desc}</p></div>)}</div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">Schedules vary with scope, permits, inspections, material availability, and conditions discovered after demolition. The written proposal identifies the expected sequence for your project.</p>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div><p className="text-sm font-bold uppercase text-brand-black">For landlords & property managers</p><h2 className="mt-3 font-display text-3xl font-bold text-brand-black">Durable Kitchen Updates for Rental Properties</h2><p className="mt-5 text-muted-foreground">FiveServ scopes unit kitchens around durability, maintainability, turnover timing, and a controlled finish package. Property owners receive completion photos and one invoice for the approved work.</p><p className="mt-4 text-brand-black">Explore <Link to="/property-maintenance-rental-orlando" className="font-bold underline">rental property maintenance</Link>, <Link to="/make-ready" className="font-bold underline">make-ready services</Link>, or our <Link to="/handyman-cost-orlando" className="font-bold underline">handyman cost guide</Link>.</p></div>
        <div className="flex aspect-[16/9] items-center justify-center border-2 border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}><p className="max-w-sm text-sm font-semibold text-brand-black">Photo placeholder: durable rental kitchen renovation prepared for an Orlando unit turnover</p></div>
      </div>
    </Reveal></div></section>

    <section className="bg-surface-warm" style={FS_PATTERN_LIGHT}><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Why Property Managers and Homeowners Choose FiveServ</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{WHY_POINTS.map((p) => <div key={p.title} className="hover-card rounded-md border border-brand-gold/40 bg-card p-6"><p.icon className="h-9 w-9 text-brand-gold" aria-hidden="true" /><p className="mt-4 font-bold text-brand-black">{p.title}</p></div>)}</div>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Kitchen Remodel Projects — Photos Coming Soon</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{PLACEHOLDERS.map((label) => <div key={label} className="flex aspect-[4/3] items-center justify-center border-2 border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}><p className="text-sm font-semibold text-brand-black">Photo placeholder: {label}</p></div>)}</div>
    </Reveal></div></section>

    <div className="bg-surface-warm" style={FS_PATTERN_LIGHT}><FaqAccordion title="Kitchen Remodel Cost Orlando — Frequently Asked Questions" eyebrow="FAQ" faqs={FAQS} emitSchema={false} /></div>

    <section className="bg-brand-gold"><div className="container py-20 text-center"><Reveal>
      <h2 className="font-display text-3xl font-bold text-brand-black sm:text-4xl">Get a Written Kitchen Remodel Price in 24 Hours</h2>
      <Button asChild size="lg" variant="secondary" className="mt-8 bg-brand-black font-bold uppercase text-brand-white hover:bg-brand-gray"><Link to="/contact">Get a Written Quote</Link></Button>
      <p className="mt-5 font-display text-2xl font-bold text-brand-black"><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
      <p className="mt-3 text-sm text-brand-black">Share your kitchen, priorities, and finish selections — we'll scope the complete project.</p>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Serving Central Florida</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">{CITIES.map((city) => <p key={city.slug} className="text-base"><span className="font-bold text-brand-black">Kitchen Remodel Pricing</span> <span className="text-brand-black">in {city.name} {city.state}</span></p>)}</div>
    </Reveal></div></section>
  </>;
};

export default KitchenRemodelCostOrlandoPage;
