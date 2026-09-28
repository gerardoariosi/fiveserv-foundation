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
  "handyman cost Orlando", "handyman prices Orlando FL 2026", "how much does a handyman charge Orlando",
  "handyman hourly rate Orlando", "handyman rates Central Florida", "handyman minimum charge Orlando",
  "flat rate handyman Orlando", "handyman price list Orlando", "ceiling fan installation cost Orlando",
  "drywall repair cost Orlando", "TV mounting cost Orlando", "faucet replacement cost Orlando",
  "licensed handyman Orlando cost", "handyman for rental property Orlando cost", "cheap vs licensed handyman Florida",
  "handyman near me Orlando prices", "punch list cost Orlando",
];

// Illustrative Orlando market ranges, not FiveServ quotes or guaranteed prices.
const JOBS = [
  { job: "Outlet or switch replacement", range: "$150–$250" },
  { job: "GFCI outlet installation", range: "$150–$300" },
  { job: "Faucet replacement", range: "$150–$350" },
  { job: "Toilet repair", range: "$150–$300" },
  { job: "Ceiling fan installation", range: "$175–$400" },
  { job: "Light fixture swap", range: "$150–$300" },
  { job: "Drywall patch — small", range: "$150–$300" },
  { job: "Drywall patch — large / texture", range: "$300–$650" },
  { job: "Door alignment or hinge repair", range: "$150–$300" },
  { job: "TV mounting", range: "$150–$300" },
  { job: "Caulking or weatherstripping", range: "$150–$300" },
  { job: "Baseboard or trim repair", range: "$175–$400" },
  { job: "Punch list — half day", range: "$300–$650" },
  { job: "Punch list — full day", range: "$600–$1,200" },
];

const PRICE_FACTORS = [
  "Materials and replacement parts — supplied by you or sourced by the crew",
  "Access, ceiling height, and the condition behind the visible repair",
  "Number of items bundled into the same visit",
  "Urgency and after-hours scheduling",
  "Permits and licensed-trade work where required",
];

const STEPS = [
  { n: "1", title: "Send photos or call", desc: "Tell us every item on your list and where the property is." },
  { n: "2", title: "Written flat quote", desc: "Get a clear scope and written price within 24 hours." },
  { n: "3", title: "One coordinated visit", desc: "The crew handles multiple items together when the scope allows." },
  { n: "4", title: "Photos + one invoice", desc: "Review the completed work and receive one consolidated bill." },
];

const WHY_POINTS: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: "Licensed and insured in Florida" },
  { icon: Award, title: "15+ years combined experience" },
  { icon: Users, title: "Same crew start to finish" },
  { icon: Camera, title: "Photo documentation on every job" },
  { icon: Clock3, title: "24-hour quote turnaround" },
  { icon: MapPin, title: "18 cities across Central Florida" },
];

const FAQS = [
  { q: "How much does a handyman cost per hour in Orlando in 2026?", a: "General handyman tasks in Orlando typically run about $75–$100 per hour; more skilled work such as drywall texture, tile, or finish carpentry can run about $100–$150 per hour. These are market estimates, not FiveServ hourly rates. FiveServ provides a written flat price for the job before work begins." },
  { q: "Is it cheaper to pay a handyman hourly or a flat rate?", a: "Hourly pricing may work for an open-ended list, but delays and extra visits can change the total. A flat quote makes the agreed scope and price clear before the crew starts. Ask whether materials and any additional work are included." },
  { q: "Does a handyman in Orlando charge a minimum or trip fee?", a: "Many Orlando providers have a minimum service charge even for one small task. FiveServ's small single-item jobs start at $150; your written quote will show the full price and any materials before work begins. Bundling items into one visit often improves the value." },
  { q: "How much does it cost to install a ceiling fan in Orlando?", a: "A typical Orlando ceiling fan installation is roughly $175–$400, depending on ceiling height, existing wiring, and whether a fan-rated box is already in place. New wiring or electrical changes require an appropriately licensed contractor and a separate scope. FiveServ quotes the exact job in writing first." },
  { q: "How much does drywall repair cost in Orlando?", a: "A small drywall patch typically ranges from $150–$300; a larger patch or texture match is often $300–$650. Water damage, painting, and hidden repairs can change the scope. Send photos for a written FiveServ quote within 24 hours." },
  { q: "How much does TV mounting cost in Orlando?", a: "Basic TV mounting in Orlando generally ranges from $150–$300 depending on wall material, TV size, and bracket requirements. Concealed wiring or new outlets require a separate scope and may need a licensed electrician. FiveServ gives you a written price before work." },
  { q: "Can a handyman do electrical or plumbing work in Florida?", a: "Florida restricts regulated electrical, plumbing, HVAC, and structural work to appropriately licensed contractors; some minor repairs may fall within limited exemptions depending on the scope and local rules. A handyman should not perform regulated trade work without the required license or permit. FiveServ coordinates the appropriate licensed trade when needed and keeps the scope on one invoice." },
  { q: "How can I save money on handyman work?", a: "Bundle several small repairs into one visit so travel and setup time are shared. Send photos and a complete list up front, and note any materials you already have. FiveServ can quote the whole punch list as a written flat scope." },
  { q: "How much does a handyman punch list cost for a rental property?", a: "A half-day punch list in Orlando typically ranges from $300–$650, while a full day may run $600–$1,200 depending on the repairs, materials, and licensed trades involved. These are planning ranges, not fixed FiveServ prices. We quote each property in writing and provide completion photos and one invoice." },
  { q: "Why hire a licensed and insured handyman instead of the cheapest option?", a: "The cheapest bid may leave out insurance, materials, documentation, or licensed specialists for regulated work. FiveServ is licensed and insured and provides a written scope, photo documentation, and one invoice. Compare what is included, not just the starting price." },
];

const PLACEHOLDERS = [
  "Technician replacing a GFCI outlet in an Orlando kitchen",
  "Ceiling fan installation in a Kissimmee living room",
  "Drywall patch and texture match in a Winter Park home",
  "Faucet replacement in a Sanford rental property",
  "Door alignment and trim repair in an Apopka unit",
  "Completed rental punch list in an Orlando apartment",
];

const HandymanCostOrlandoPage = () => {
  const aiAnswer = "Handyman services in Orlando FL typically cost $75–$150 per hour in 2026, depending on the trade and skill required. Most FiveServ handyman jobs cost $150–$400 with a written flat price before work starts. FiveServ Property Solutions is a licensed and insured property maintenance company serving homeowners and property managers in Orlando and 18 cities across Central Florida. Free quote in 24 hours. Phone: (407) 881-4942.";

  return <>
    <Seo
      title="Handyman Cost Orlando FL 2026 | Real Prices From $150 | FiveServ"
      description="How much does a handyman cost in Orlando in 2026? Hourly vs flat-rate pricing, real job prices, and what's included. Licensed & insured. Free quote in 24 hours."
      path="/handyman-cost-orlando"
      keywords={KEYWORDS}
    />
    <SchemaOrg
      organization
      organizationPriceRange="$150-$400"
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Handyman Orlando", url: `${SITE.url}/handyman-orlando` },
        { name: "Handyman Cost Orlando", url: `${SITE.url}/handyman-cost-orlando` },
      ]}
    />
    <AIOverviewBlock hidden answer={aiAnswer} />

    <section className="relative bg-brand-black" id="handyman-quote" style={FS_PATTERN_DARK}>
      <div className="absolute inset-0 bg-hero-overlay/[0.72]" aria-hidden="true" />
      <div className="container relative py-12 sm:py-24 lg:py-32">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-brand-gold">2026 Orlando handyman pricing</p>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-brand-white sm:text-5xl">
            Handyman Cost Orlando FL (2026) — Real Prices, No Surprises.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-white/85 sm:mt-5 sm:text-lg">Hourly vs flat-rate, what common jobs actually cost, and how to avoid overpaying.</p>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-7">
            <Button asChild size="lg" className="font-bold uppercase"><Link to="/contact">Get a Free Quote</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-brand-white/50 bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-black">
              <a href={`tel:${SITE.phone}`}><Phone aria-hidden="true" /> Call {SITE.phone}</a>
            </Button>
          </div>
        </Reveal>
        <Reveal className="mt-7 max-w-2xl sm:mt-10">
          <div className="rounded-md border-2 border-brand-gold bg-brand-black/85 p-3 sm:p-6" style={FS_PATTERN_DARK}>
            <div className="grid grid-cols-3 gap-0 text-center">
              {[
                { k: "Most Jobs $150–$400", v: "Scope determines final price" },
                { k: "Written Price First", v: "Know the cost before work" },
                { k: "Licensed & Insured", v: "Florida property services" },
              ].map((s, i) => <div key={s.k} className={`px-1 sm:px-2 ${i ? "border-l border-brand-gold/60" : ""}`}>
                <p className="font-display text-sm font-bold leading-tight text-brand-gold sm:text-xl">{s.k}</p>
                <p className="mt-1 text-[10px] leading-tight text-brand-white/80 sm:text-xs">{s.v}</p>
              </div>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-border bg-card"><div className="container py-12">
      <p className="max-w-4xl text-base leading-relaxed text-card-foreground sm:text-lg">{aiAnswer}</p>
    </div></section>

    <section className="bg-surface-warm"><div className="container py-16 lg:py-20"><Reveal>
      <div className="mx-auto max-w-4xl border-l-4 border-brand-gold bg-card p-8 shadow-card lg:p-10" style={FS_PATTERN_LIGHT}>
        <p className="text-xs font-bold uppercase text-brand-black">Quick answer</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-brand-black">How much does a handyman cost in Orlando?</h2>
        <ul className="mt-6 space-y-3 text-base text-brand-black">
          {[
            "General tasks: about $75–$100 per hour on the Orlando market.",
            "Skilled tasks like tile, drywall texture, and finish carpentry: about $100–$150 per hour.",
            "A typical market project can run $180–$650 depending on the work.",
            "Most FiveServ jobs: $150–$400 flat, quoted in writing before work begins.",
          ].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" /><span>{item}</span></li>)}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">Market estimates are for planning only; your written quote depends on scope, materials, and any licensed-trade requirements.</p>
      </div>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Typical Handyman Prices in Orlando</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">Typical Orlando range, final price depends on scope. These are illustrative market ranges, not guaranteed FiveServ prices.</p>
      <div className="mx-auto mt-10 max-w-4xl overflow-x-auto border border-border">
        <table className="w-full min-w-[360px] border-collapse text-left text-sm sm:text-base">
          <thead className="bg-brand-black text-brand-white"><tr><th scope="col" className="px-5 py-4">Common job</th><th scope="col" className="px-5 py-4 text-right">Typical Orlando range</th></tr></thead>
          <tbody>{JOBS.map((row, i) => <tr key={row.job} className={i % 2 ? "bg-surface-warm" : "bg-card"}>
            <th scope="row" className="border-t border-border px-5 py-3 font-medium text-brand-black">{row.job}</th>
            <td className="border-t border-border px-5 py-3 text-right font-bold text-brand-black">{row.range}</td>
          </tr>)}</tbody>
        </table>
      </div>
      <p className="mx-auto mt-5 max-w-4xl text-sm text-muted-foreground">Small single-item FiveServ jobs start at $150. Work involving wiring, plumbing systems, permits, or other regulated trades is assessed and coordinated with the appropriate licensed professional.</p>
    </Reveal></div></section>

    <section className="bg-surface-soft"><div className="container py-20"><div className="grid gap-10 lg:grid-cols-2">
      <Reveal><h2 className="font-display text-3xl font-bold text-brand-black">Hourly vs Flat Rate</h2>
        <div className="mt-6 space-y-4">
          <div className="border-t-4 border-brand-gold bg-card p-6"><h3 className="text-lg font-bold">Hourly</h3><p className="mt-2 text-muted-foreground">Useful when the scope is uncertain, but setup time, return visits, and surprises can change the total. Ask about minimums and materials.</p></div>
          <div className="border-t-4 border-brand-gold bg-card p-6"><h3 className="text-lg font-bold">Written flat price</h3><p className="mt-2 text-muted-foreground">FiveServ scopes the repairs first and quotes a flat price before starting. Any newly discovered work gets its own approval.</p></div>
        </div>
      </Reveal>
      <Reveal><h2 className="font-display text-3xl font-bold text-brand-black">What Changes the Price?</h2>
        <ul className="mt-6 space-y-4">{PRICE_FACTORS.map((factor) => <li key={factor} className="flex gap-3 text-brand-black"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />{factor}</li>)}</ul>
      </Reveal>
    </div></div></section>

    <section className="bg-surface-warm"><div className="container py-20"><Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div><h2 className="font-display text-3xl font-bold text-brand-black">Handyman vs Licensed Contractor in Florida</h2>
          <p className="mt-5 text-brand-black">Minor repair work may fall under a limited exemption, depending on the task and local requirements. Regulated electrical, plumbing, HVAC, and structural work must be handled by appropriately licensed contractors; permits may also apply.</p>
          <p className="mt-4 text-brand-black">FiveServ reviews the scope, coordinates the right licensed trade when needed, and keeps the work under one clear invoice. <Link to="/handyman-orlando" className="font-bold underline">Explore handyman services</Link> or see our <Link to="/emergency-repair-orlando" className="font-bold underline">emergency repair options</Link>.</p>
        </div>
        <div className="flex aspect-[16/9] items-center justify-center border-2 border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}>
          <p className="max-w-sm text-sm font-semibold text-brand-black">Photo placeholder: technician replacing a GFCI outlet in an Orlando kitchen</p>
        </div>
      </div>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div><p className="text-sm font-bold uppercase text-brand-black">For landlords & property managers</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black">One Visit for the Whole Rental Punch List</h2>
          <p className="mt-5 text-muted-foreground">Turn repairs, door adjustments, wall patches, fixture swaps, and finishing touches can be scoped together. We document completed work with photos and send one invoice per property.</p>
          <p className="mt-4 text-brand-black">Learn about <Link to="/property-maintenance-rental-orlando" className="font-bold underline">rental property maintenance</Link> and <Link to="/make-ready" className="font-bold underline">make-ready unit turns</Link>.</p>
        </div>
        <div className="flex aspect-[16/9] items-center justify-center border-2 border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}>
          <p className="max-w-sm text-sm font-semibold text-brand-black">Photo placeholder: completed apartment turnover punch list with documented repairs in Orlando FL</p>
        </div>
      </div>
    </Reveal></div></section>

    <section className="bg-surface-soft"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">How It Works</h2>
      <div className="relative mt-16 grid gap-10 lg:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-brand-gold/40 lg:block" aria-hidden="true" />
        {STEPS.map((s) => <div key={s.n} className="relative text-center lg:text-left">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold bg-surface-soft font-display text-2xl font-bold text-brand-black lg:mx-0">{s.n}</div>
          <h3 className="mt-4 text-lg font-bold text-brand-black">{s.title}</h3><p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
        </div>)}
      </div>
    </Reveal></div></section>

    <section className="bg-brand-black"><div className="container py-20 text-center"><Reveal>
      <p className="text-sm text-brand-white">Most FiveServ handyman jobs</p>
      <p className="mt-4 font-display text-6xl font-bold leading-none text-brand-gold sm:text-7xl">$150–$400</p>
      <p className="mx-auto mt-4 max-w-xl text-sm text-brand-white/75">Written flat price before work starts. Larger punch lists and regulated trade work are scoped separately.</p>
      <Button asChild size="lg" className="mt-8 font-bold uppercase"><Link to="/contact">Get Your Free Quote</Link></Button>
    </Reveal></div></section>

    <section className="bg-surface-warm" style={FS_PATTERN_LIGHT}><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Why Property Managers and Homeowners Choose FiveServ</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_POINTS.map((p) => <div key={p.title} className="hover-card rounded-md border border-brand-gold/40 bg-card p-6">
          <p.icon className="h-9 w-9 text-brand-gold" aria-hidden="true" /><p className="mt-4 font-bold text-brand-black">{p.title}</p>
        </div>)}
      </div>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Handyman Work — Photos Coming Soon</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDERS.map((label) => <div key={label} className="flex aspect-[4/3] items-center justify-center border-2 border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}>
          <p className="text-sm font-semibold text-brand-black">Photo placeholder: {label}</p>
        </div>)}
      </div>
    </Reveal></div></section>

    <div className="bg-surface-warm" style={FS_PATTERN_LIGHT}>
      <FaqAccordion title="Handyman Cost Orlando — Frequently Asked Questions" eyebrow="FAQ" faqs={FAQS} emitSchema={false} />
    </div>

    <section className="bg-brand-gold"><div className="container py-20 text-center"><Reveal>
      <h2 className="font-display text-3xl font-bold text-brand-black sm:text-4xl">Get a Written Handyman Price in 24 Hours</h2>
      <Button asChild size="lg" variant="secondary" className="mt-8 bg-brand-black font-bold uppercase text-brand-white hover:bg-brand-gray"><Link to="/contact">Get a Written Quote</Link></Button>
      <p className="mt-5 font-display text-2xl font-bold text-brand-black"><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
      <p className="mt-3 text-sm text-brand-black">List every repair — we'll price it all in one visit.</p>
      <p className="mt-3 text-sm text-brand-black">Need more than handyman work? See <Link to="/painting-cost-orlando" className="font-bold underline">painting costs</Link> and <Link to="/flooring-cost-orlando" className="font-bold underline">flooring costs</Link>.</p>
    </Reveal></div></section>

    <section className="bg-card"><div className="container py-20"><Reveal>
      <h2 className="text-center font-display text-3xl font-bold text-brand-black sm:text-4xl">Serving Central Florida</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
        {CITIES.map((city) => <p key={city.slug} className="text-base"><span className="font-bold text-brand-black">Handyman Pricing</span> <span className="text-brand-black">in {city.name} {city.state}</span></p>)}
      </div>
    </Reveal></div></section>
  </>;
};

export default HandymanCostOrlandoPage;