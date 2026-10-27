import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import { FS_PATTERN_DARK, FS_PATTERN_LIGHT } from "@/lib/fs-pattern";


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
  { q: "How much does flooring installation cost per square foot in Orlando FL in 2026?", a: "Flooring installation in Orlando starts from $3.99 per square foot for LVP. Installed pricing typically runs $4.50 to $12 per square foot for LVP, around $5.50 to $6 per square foot for laminate, and varies for tile depending on material (tile material starts at about $0.60 per square foot). Final cost depends on square footage, material selected, and subfloor condition. FiveServ delivers a free on-site quote within 24 hours." },
  { q: "What is the best flooring for a rental property in Central Florida?", a: "Luxury vinyl plank (LVP) is the most-recommended flooring for rental properties in Central Florida. It is waterproof, scratch-resistant, and stands up to Florida humidity and heavy tenant turnover. LVP is faster to install than tile and holds its look longer than carpet, which is why property managers pick it for unit turns." },
  { q: "How long does flooring installation take?", a: "Most flooring installations are completed in 3 to 5 days. A single apartment turn is typically done in 1 to 2 days, and a full home in 3 to 5 days depending on square footage and material. FiveServ sequences subfloor prep, install, and baseboards so no time is lost between trades." },
  { q: "What is the difference between LVP and laminate flooring?", a: "LVP is 100% waterproof and made of PVC, so it is the safer choice for kitchens, bathrooms, and rental properties in Florida. Laminate is made of compressed wood with a printed top layer — it looks similar but swells if exposed to standing water. LVP typically runs $4.50 to $12 per square foot installed, laminate around $5.50 to $6 per square foot installed." },
  { q: "Can you install flooring in occupied apartments during a unit turn?", a: "FiveServ installs flooring during unit turns and make-readys when the unit is vacant between tenants. For occupied units we schedule around the resident and typically complete room-by-room. Either way, the crew coordinates with the property manager to minimize vacancy days and disruption." },
  { q: "Is LVP or tile better for Florida humidity?", a: "Both handle Florida humidity well. Tile is the most durable choice for wet areas like bathrooms and entryways, and it lasts decades. LVP is more affordable, faster to install, and softer underfoot — better for full-unit installs and rentals. FiveServ installs both and can help you pick the right one for each space." },
  { q: "Do I need to buy my own flooring materials?", a: "You can supply your own material or let FiveServ handle procurement. Clients typically select the material and color, and FiveServ provides all labor, subfloor prep, underlayment, adhesive, transitions, and baseboards. If you prefer not to shop, we source the material and charge it at invoice." },
  { q: "Can I get a same-day flooring quote in Orlando?", a: "FiveServ provides a free on-site quote within 24 hours. A same-day quote may be possible depending on scheduling and whether we have the measurements, material choice, and subfloor details. Contact us to confirm availability; same-day pricing is not guaranteed." },
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
  "flooring cost Orlando 2026",
  "LVP installation cost per square foot Orlando",
  "waterproof flooring Florida humidity",
  "flooring contractor Winter Park",
  "flooring Kissimmee FL",
  "best flooring for Florida rental property",
  "tile vs LVP Florida",
  "subfloor prep Florida slab",
];

const COST_VARIABLES = [
  { title: "Size & layout", desc: "Square footage, closets, doorways, and transitions determine the amount of material and installation work." },
  { title: "Material", desc: "LVP, laminate, tile, carpet, and engineered hardwood have different material and installation requirements." },
  { title: "Old flooring removal", desc: "Removing existing flooring and disposing of debris changes the scope of labor." },
  { title: "Subfloor prep", desc: "Florida slabs may need moisture testing, patching, leveling, or a moisture barrier before installation." },
  { title: "Residential vs. turnover", desc: "Furniture, resident access, and repeatable rental specifications affect scheduling and the scope of work." },
];

const COMPARISON = [
  { material: "Luxury Vinyl Plank (LVP)", price: "$4.50–$12/sq ft installed", use: "Full-unit rentals, kitchens, and everyday living spaces.", humidity: "Waterproof planks suit Florida humidity; slab moisture still needs assessment.", time: "Typically faster than tile. Single apartment: 1–2 days; full home: 3–5 days, depending on scope." },
  { material: "Laminate", price: "Around $5.50–$6/sq ft installed", use: "Dry living areas where a wood-look finish is preferred.", humidity: "Compressed wood can swell with standing water; avoid wet areas and address slab moisture.", time: "Plan within the existing 3–5 day project window; size and prep determine the schedule." },
  { material: "Tile", price: "Material starts around $0.60/sq ft; installation quoted separately", use: "Bathrooms, kitchens, and entryways.", humidity: "Handles humidity well and is durable in wet areas; correct substrate prep remains essential.", time: "Generally slower than LVP. Confirm the schedule for prep, setting, and grout; project scope may extend the 3–5 day window." },
  { material: "Carpet", price: "Project-specific quote", use: "Bedrooms and rental turns where a soft finish is desired.", humidity: "Not waterproof; moisture and spills need prompt drying to protect carpet and pad.", time: "Apartment turns typically take 1–2 days; removal, prep, and access can change timing." },
  { material: "Engineered Hardwood", price: "Project-specific quote", use: "Dry residential living areas and amenity spaces.", humidity: "Wood can swell when wet; moisture control and manufacturer requirements matter.", time: "Confirm material acclimation and slab prep before booking; installation is scoped against the 3–5 day project window." },
];

const PLACEHOLDERS = [
  "Photo placeholder: waterproof LVP throughout an Orlando rental living room, with clean transitions and reinstalled baseboards.",
  "Photo placeholder: tile flooring in a Central Florida bathroom, showing straight grout lines and finished trim.",
  "Photo placeholder: carpet replacement in a vacant apartment bedroom, with new pad and a neatly finished doorway.",
  "Photo placeholder: laminate in a dry residential living area, showing plank alignment and doorway transitions.",
  "Photo placeholder: engineered hardwood in an amenity space, with finished perimeter trim.",
  "Photo placeholder: Florida concrete slab preparation before flooring installation, showing patched and leveled areas.",
];

const heading = "font-display font-black text-3xl sm:text-4xl text-brand-black";
const textLink = "font-semibold underline underline-offset-4 hover:text-brand-gray-muted";

const QuoteButton = ({ dark = false }: { dark?: boolean }) => (
  <Button asChild size="lg" className={`h-auto whitespace-normal py-3.5 font-bold ${dark ? "bg-brand-black text-brand-white hover:bg-brand-gray" : "bg-brand-gold text-brand-black hover:bg-brand-gold-hover"}`}>
    <Link to="/contact">Get Your Free Quote</Link>
  </Button>
);

const FlooringPage = () => {
  const aiAnswer = `FiveServ Property Solutions installs and repairs LVP, tile, laminate and carpet flooring in Orlando FL and across 18 cities in Central Florida. Flooring installation starts from $3.99 per square foot for LVP, with final pricing based on size, material, removal, subfloor prep, and residential or turnover scope. Free on-site quote within 24 hours. Phone: ${SITE.phone}.`;
  const flooringService = SERVICES.find((service) => service.slug === "flooring");

  return (
    <>
      <Seo
        title="Flooring Installation Orlando FL 2026 | LVP, Tile & Carpet From $3.99/sq ft | FiveServ"
        description="Flooring installation in Orlando and Central Florida. LVP, tile, laminate, carpet. From $3.99/sq ft. Licensed, insured. Free quote within 24 hours."
        path="/flooring"
        keywords={KEYWORDS}
      />
      <SchemaOrg organization service={flooringService} faqs={FAQS} breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Flooring", url: `${SITE.url}/flooring` },
      ]} />
      <AIOverviewBlock hidden answer={aiAnswer} />

      <section className="relative isolate overflow-hidden bg-brand-black text-brand-white">
        <div className="absolute inset-0 -z-10" style={FS_PATTERN_DARK} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-black/40 to-brand-black" aria-hidden="true" />
        <div className="container py-16 lg:py-20">
          <Reveal className="max-w-3xl">
            <h1 className="font-display font-black text-4xl sm:text-5xl leading-tight">Flooring Installation Orlando FL — From $3.99/sq ft.</h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-white/80">LVP, tile, laminate and carpet for homes, apartment turns, and commercial properties across Central Florida. Licensed, insured, one invoice.</p>
            <div className="mt-7"><QuoteButton /></div>
            <p className="mt-3 text-xs text-brand-white/70">Starting price varies by material, square footage, and prep. Most projects take 3–5 days, depending on scope.</p>
          </Reveal>
          <Reveal className="mt-9 max-w-3xl">
            <div className="grid gap-4 border-y border-brand-gold/60 py-5 text-center sm:grid-cols-3">
              {[
                { k: "From $3.99/sq ft", v: "Scope-dependent starting price" },
                { k: "3–5 Days", v: "Typical project window" },
                { k: "24-Hour Quote", v: "Free on-site assessment" },
              ].map((stat) => <div key={stat.k}><p className="font-display font-black text-xl text-brand-gold">{stat.k}</p><p className="mt-1 text-xs text-brand-white/80">{stat.v}</p></div>)}
            </div>
          </Reveal>
          <Reveal className="mt-8 max-w-3xl">
            <div className="flex min-h-32 items-center justify-center border border-dashed border-brand-gold/60 p-6 text-center text-sm text-brand-white/75">Photo placeholder: finished waterproof LVP in an Orlando home, showing the full floor, doorway transitions, and clean baseboards.</div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="container py-12"><p className="max-w-4xl text-base sm:text-lg leading-relaxed text-brand-gray">{aiAnswer}</p></div>
      </section>

      <section className="bg-surface-warm" style={FS_PATTERN_LIGHT}>
        <div className="container py-16 lg:py-20">
          <Reveal className="mx-auto max-w-4xl border-y-2 border-brand-gold py-8">
            <p className="text-xs font-bold uppercase text-brand-gray-muted">Quick Answer</p>
            <h2 className={`${heading} mt-2`}>How much does flooring installation cost in Orlando?</h2>
            <p className="mt-4 leading-relaxed text-brand-gray">LVP installation starts from $3.99 per square foot. Existing installed ranges are $4.50–$12 per square foot for LVP and around $5.50–$6 for laminate. These are planning figures, not guaranteed FiveServ prices; the written quote confirms your scope.</p>
            <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {COST_VARIABLES.map((factor) => <div key={factor.title}><dt className="font-bold text-brand-black">{factor.title}</dt><dd className="mt-1 text-sm leading-relaxed text-brand-gray">{factor.desc}</dd></div>)}
            </dl>
            <p className="mt-7 text-brand-black">See the <Link className={textLink} to="/flooring-cost-orlando">detailed flooring cost and line-item breakdown</Link>.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-card">
        <div className="container py-20">
          <Reveal>
            <h2 className={`${heading} text-center`}>What Type of Flooring Do You Need?</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FLOORING_TYPES.map((type) => <article key={type.title} className="rounded-md border-t-4 border-brand-gold bg-surface-warm p-6" style={FS_PATTERN_LIGHT}><type.icon className="h-10 w-10 text-brand-gold" /><h3 className="mt-4 font-display font-black text-xl text-brand-black">{type.title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-gray">{type.desc}</p></article>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="container py-20">
          <Reveal>
            <h2 className={heading}>Flooring Breakdown: LVP vs. Laminate vs. Tile vs. Carpet vs. Engineered Hardwood</h2>
            <p className="mt-4 max-w-3xl text-brand-gray">Compare best use, moisture behavior, and scheduling. Times reuse the existing apartment and full-home project windows, not material-specific guarantees. All floors require a suitable, dry subfloor.</p>
            <div className="mt-8 overflow-x-auto" tabIndex={0} role="region" aria-label="Flooring material comparison">
              <table className="w-full min-w-[850px] border-collapse text-left text-sm">
                <caption className="sr-only">Flooring material, existing price guidance, best use case, Florida humidity behavior, and installation timing</caption>
                <thead className="bg-brand-black text-brand-white"><tr>{["Flooring", "Existing price guidance", "Best use case", "Florida humidity", "Installation time"].map((title) => <th key={title} scope="col" className="p-4 font-bold">{title}</th>)}</tr></thead>
                <tbody>{COMPARISON.map((row) => <tr key={row.material} className="border-b border-border"><th scope="row" className="p-4 align-top font-bold text-brand-black">{row.material}</th>{[row.price, row.use, row.humidity, row.time].map((cell) => <td key={cell} className="p-4 align-top leading-relaxed text-brand-gray">{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-brand-gray-muted">Tile’s material-only starting figure is not an installed price. Carpet and engineered hardwood require a project-specific quote.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-warm">
        <div className="container py-20">
          <Reveal>
            <h2 className={`${heading} text-center`}>What FiveServ Handles vs. What You Select</h2>
            <div className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-2">
              <div><h3 className="font-display font-black text-2xl text-brand-black border-b-2 border-brand-gold pb-3">FiveServ Provides</h3><ul className="mt-6 space-y-3">{PROVIDES.map((item) => <li key={item} className="flex items-start gap-3 text-brand-gray"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" /><span>{item}</span></li>)}</ul></div>
              <div><h3 className="font-display font-black text-2xl text-brand-black border-b-2 border-brand-gold pb-3">Client Selects and Purchases</h3><ul className="mt-6 space-y-3">{CLIENT_SELECTS.map((item) => <li key={item} className="flex items-start gap-3 text-brand-gray"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" /><span>{item}</span></li>)}</ul></div>
            </div>
            <p className="mt-10 text-center italic text-brand-gray-muted">Don't want to shop for material? We handle procurement and charge at invoice.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-card">
        <div className="container py-20">
          <Reveal><h2 className={`${heading} text-center`}>How It Works</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{STEPS.map((step) => <div key={step.n}><div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold font-display font-black text-2xl text-brand-black">{step.n}</div><h3 className="mt-4 font-display font-black text-xl text-brand-black">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">{step.desc}</p></div>)}</div></Reveal>
          <p className="mt-10 text-brand-gray">Planning a rental turn? Coordinate flooring with <Link to="/make-ready" className={textLink}>make-ready services</Link>. Updating wet areas too? Explore <Link to="/bathroom-remodel" className={textLink}>bathroom remodeling</Link>.</p>
        </div>
      </section>

      <section className="bg-brand-black text-center text-brand-white" style={FS_PATTERN_DARK}>
        <div className="container py-20"><Reveal><p>Flooring installation starting from</p><p className="mt-4 font-display font-black text-5xl sm:text-7xl text-brand-gold">$3.99/sq ft</p><p className="mx-auto mt-4 max-w-xl text-sm text-brand-white/75">Final pricing depends on material, size, removal, and subfloor condition. Your written quote confirms what is included.</p><div className="mt-8"><QuoteButton /></div></Reveal></div>
      </section>

      <section className="bg-surface-warm">
        <div className="container py-20"><Reveal><h2 className={`${heading} text-center`}>Our Work</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{PLACEHOLDERS.map((text) => <div key={text} className="flex aspect-[4/3] items-center justify-center rounded-md border-2 border-dashed border-brand-gold bg-surface-soft p-6 text-center text-sm leading-relaxed text-brand-gray">{text}</div>)}</div></Reveal></div>
      </section>

      <section className="bg-surface-warm" style={FS_PATTERN_LIGHT}>
        <div className="container py-20"><Reveal><h2 className={`${heading} text-center`}>Why Property Managers and Homeowners Choose FiveServ</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{WHY_POINTS.map((point) => <article key={point.title} className="rounded-md border border-brand-gold/40 bg-card p-6"><point.icon className="h-9 w-9 text-brand-gold" /><h3 className="mt-4 font-display font-black text-xl text-brand-black">{point.title}</h3></article>)}</div></Reveal></div>
      </section>

      <div className="bg-surface-warm" style={FS_PATTERN_LIGHT}><FaqAccordion title="Flooring Installation — Frequently Asked Questions" eyebrow="FAQ" faqs={FAQS} emitSchema={false} /></div>

      <section className="bg-brand-gold text-brand-black">
        <div className="container py-20 text-center"><Reveal><h2 className={heading}>Ready to Install New Flooring?</h2><div className="mt-8"><QuoteButton dark /></div><p className="mt-5 font-display font-black text-2xl"><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></p><p className="mt-3 text-sm">Also need painting or a bathroom remodel? Same team. One invoice.</p></Reveal></div>
      </section>

      <section className="bg-card">
        <div className="container py-20"><Reveal><h2 className={`${heading} text-center`}>Serving Central Florida</h2><div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">{CITIES.map((city) => <p key={city} className="text-base text-brand-gray"><span className="font-bold text-brand-black">Flooring Installation</span> in {city}</p>)}</div></Reveal></div>
      </section>
    </>
  );
};

export default FlooringPage;
