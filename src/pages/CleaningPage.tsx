import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sparkles, Hammer, Building2, CheckCircle2, Phone, FileText, Clock, ShieldCheck, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, CITIES } from "@/lib/site-config";
import { FS_PATTERN_DARK, FS_PATTERN_LIGHT } from "@/lib/fs-pattern";
import { useReveal } from "@/hooks/use-fiveserv";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import FaqAccordion from "@/components/fiveserv/FaqAccordion";

const Reveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
};

const KEYWORDS = [
  "cleaning Orlando FL 2026", "move-out cleaning Orlando FL", "apartment turnover cleaning Orlando",
  "deep cleaning service Orlando", "post-construction cleaning Orlando", "make ready cleaning Orlando",
  "rental property cleaning Orlando", "vacation rental cleaning Orlando", "cleaning cost Orlando",
  "move-out cleaning cost Orlando", "deep cleaning quote Orlando", "multifamily cleaning Central Florida",
  "property manager cleaning Orlando", "common area cleaning Orlando", "recurring cleaning Orlando FL",
  "same-day cleaning quote Orlando", "cleaning service Winter Park", "move-out cleaning Kissimmee",
  "licensed insured cleaning company Florida", "post-renovation cleaning Orlando", "rental turnover cleaning Central Florida",
  "move out cleaning Orlando", "airbnb turnover cleaning Orlando", "vacation rental cleaning Kissimmee",
  "apartment turnover cleaning cost Orlando", "post construction cleaning Orlando FL", "deep cleaning cost per square foot Orlando",
];

const CLEANING_TYPES = [
  {
    icon: Sparkles, title: "Move-Out / Make-Ready", href: "/make-ready", link: "Coordinate a complete make-ready",
    desc: "An empty-unit reset for apartments and rental homes, coordinated with repairs and final inspection.",
    checklist: ["Kitchen surfaces and cabinets", "Appliances inside and out as scoped", "Bathrooms, fixtures and mirrors", "Baseboards, sills and accessible vents", "Vacuuming, mopping and completion photos"],
  },
  {
    icon: Hammer, title: "Post-Construction", href: "/painting", link: "Coordinate painting and final cleaning",
    desc: "Final-detail cleaning after renovation or painting, once trades have finished and the site is safe to clean.",
    checklist: ["Accessible construction dust and surface residue", "Cabinet fronts, counters and fixtures", "Window sills and accessible interior glass", "Floor cleaning suited to the new finish", "Debris removal scope confirmed in the quote"],
  },
  {
    icon: Sparkles, title: "Deep Clean", href: "/flooring", link: "Plan flooring and a whole-property reset",
    desc: "A detailed clean for homes, rental units and vacation rentals that need more than a routine visit.",
    checklist: ["Kitchen and bathroom detail", "Accessible baseboards and trim", "Doors, handles and high-touch surfaces", "Floor vacuuming and mopping", "Appliance interiors and extras confirmed upfront"],
  },
  {
    icon: Building2, title: "Recurring Common Areas", href: "/maintenance", link: "Combine cleaning with property maintenance",
    desc: "A repeatable cleaning plan for multifamily common areas, leasing offices and clubhouses.",
    checklist: ["Entries and accessible shared spaces", "Common-area restrooms", "High-touch surfaces", "Floors and agreed waste collection", "Scheduled checklist and photo report"],
  },
];

const WHY_POINTS = [
  { icon: Phone, title: "One call", desc: "Cleaning, painting, flooring and repairs coordinated through FiveServ." },
  { icon: FileText, title: "One invoice", desc: "An agreed scope and consolidated invoice for the work you approve." },
  { icon: Clock, title: "5-day make-ready guarantee", desc: "Available when the complete make-ready scope qualifies; eligibility and terms are confirmed in writing.", href: "/make-ready" },
  { icon: ShieldCheck, title: "Licensed & insured in Florida", desc: "A professional property-solutions team for homeowners and property managers." },
  { icon: Camera, title: "Photo report on every job", desc: "Completion photos help you review the finish and keep property records." },
  { icon: MapPin, title: "18 Central Florida cities", desc: "One team for rentals, homes and multifamily properties across the service area." },
];

const FAQS = [
  { q: "How much does move-out or deep cleaning cost in Orlando FL in 2026, and how much per square foot?", a: "Cleaning cost depends on unit size, condition, the type of cleaning, construction dust or residue, and the urgency of your turnover. There is no universal per-square-foot rate: square footage helps estimate time, but appliance detail, buildup and the agreed checklist also affect the quote. FiveServ provides a free line-item quote for your property rather than a fixed price that may not match the work. Send the address, unit size, photos and target date to confirm the scope." },
  { q: "How long does a move-out or deep clean take?", a: "Timing depends on the size and condition of the property, access, appliance detail and whether other trades are still working. We confirm a cleaning window after reviewing the scope. For a complete make-ready, the 5-day guarantee applies only when the scope qualifies and the written terms are agreed." },
  { q: "What is included in a move-out clean?", a: "The agreed checklist can include kitchen and bathroom detail, cabinets, appliance interiors and exteriors, baseboards, accessible vents, window sills, fixtures, vacuuming and mopping. Your written quote identifies included tasks and optional extras, and a photo report is provided on completion." },
  { q: "Do you offer post-construction cleaning in Orlando?", a: "Yes. FiveServ cleans accessible construction dust, surface residue, fixtures and floors after renovation work is complete. The quote confirms debris removal, delicate surfaces and any specialist requirements. Hazardous materials, mold remediation and unsafe areas are not treated as routine cleaning." },
  { q: "Will a move-out cleaning help me get my tenant deposit back?", a: "A thorough clean and completion photos can document the condition you leave behind, but no cleaning company can guarantee a deposit refund. Your lease, the move-in condition, damage and the landlord's assessment determine the outcome. Share any landlord checklist before we quote." },
  { q: "Can I book recurring cleaning for common areas?", a: "Yes. We can establish an agreed schedule and checklist for leasing offices, clubhouses, entries and accessible multifamily common areas. Frequency, access, supplies and reporting are confirmed in the line-item quote." },
  { q: "Can I get a same-day cleaning quote or same-day service?", a: "Request a free same-day quote by sending the unit size, photos, cleaning needs and target date. An inspection or additional details may be needed before pricing is finalized. Same-day cleaning itself depends on crew availability, access and scope; confirm the appointment before planning a turnover." },
  { q: "Do you clean apartments and multifamily properties for property managers?", a: "Yes. FiveServ coordinates apartment turnover cleaning, make-ready work and common-area cleaning for landlords and multifamily property managers. We agree on unit checklists, access and deadlines, then deliver completion photos and a consolidated invoice for approved work." },
  { q: "Do you offer Airbnb and vacation-rental turnover cleaning in Orlando and Kissimmee?", a: "Yes. We can quote deep cleans and Airbnb or vacation-rental turnover cleaning in Orlando, Kissimmee and across Central Florida. Share guest departure and arrival times, access instructions and your checklist. Laundry, linen changes, restocking and same-day scheduling must be agreed as part of the scope rather than assumed included." },
  { q: "Which Central Florida cities do you serve for cleaning?", a: "FiveServ serves Orlando, Kissimmee, Winter Park, Lakeland, Sanford, Altamonte Springs, Apopka, Ocoee, Winter Garden, Clermont, St. Cloud, Davenport, Deltona, Daytona Beach, Palm Coast, Melbourne, Palm Bay and Cocoa. Contact us with the property address to confirm scheduling and the cleaning scope." },
];

const PLACEHOLDERS = [
  "Photo placeholder: Move-out kitchen clean in an Orlando apartment — cabinets, appliances and counters detailed.",
  "Photo placeholder: Make-ready bathroom in Kissimmee — clean fixtures, mirrors and floor before inspection.",
  "Photo placeholder: Post-construction clean in Winter Park — accessible dust removed after renovation.",
  "Photo placeholder: Deep-cleaned rental living area in Sanford — baseboards, sills and floors finished.",
  "Photo placeholder: Multifamily clubhouse in Central Florida — recurring common-area cleaning.",
  "Photo placeholder: Vacation rental turnover in Davenport — final cleaning checklist and photo report.",
];

const ImagePlaceholder = ({ label }: { label: string }) => (
  <figure className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-md border-[3px] border-brand-gold bg-surface-soft p-6 text-center" style={FS_PATTERN_LIGHT}>
    <div aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-gold font-display text-xl font-bold text-brand-black">FS</div>
    <figcaption className="text-sm leading-relaxed text-brand-gray">{label}</figcaption>
  </figure>
);

const heading = "font-display font-bold text-3xl sm:text-4xl leading-tight text-brand-black";
const QuoteButton = ({ dark = false }: { dark?: boolean }) => (
  <Button asChild size="lg" className={`h-auto min-h-12 max-w-full whitespace-normal py-3 text-center font-bold ${dark ? "bg-brand-black text-brand-white hover:bg-brand-gray" : "bg-brand-gold text-brand-black hover:bg-brand-gold-hover"}`}>
    <Link to="/contact">Get a Free Cleaning Quote</Link>
  </Button>
);

const CleaningPage = () => {
  const path = "/cleaning";
  const aiAnswer = "FiveServ Property Solutions provides move-out, make-ready, deep and post-construction cleaning in Orlando FL and across 18 Central Florida cities in 2026. Cleaning cost depends on unit size, condition, cleaning type, construction residue and turnover urgency; request a free line-item quote. Every job includes a completion photo report, with cleaning and other approved property services coordinated through one call and one invoice.";
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", "@id": `${SITE.url}${path}#service`,
    name: "Cleaning Services Orlando FL", serviceType: "Move-out, make-ready, deep and post-construction cleaning",
    url: `${SITE.url}${path}`, description: aiAnswer,
    provider: { "@type": "LocalBusiness", "@id": `${SITE.url}/#organization`, name: SITE.name },
    areaServed: CITIES.map((city) => ({ "@type": "City", name: `${city.name} ${city.state}` })),
  };

  return (
    <div className="cleaning-page">
      <Seo
        title="Cleaning Services Orlando FL 2026 | Move-Out, Deep & Post-Construction | FiveServ"
        description="Move-out, deep and post-construction cleaning in Orlando FL. Free line-item quote, completion photos and make-ready coordination across 18 cities."
        path={path} keywords={KEYWORDS}
      />
      <SchemaOrg
        organization
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
          { name: "Cleaning", url: `${SITE.url}${path}` },
        ]}
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(serviceSchema)}</script></Helmet>
      <AIOverviewBlock hidden answer={aiAnswer} />

      <section className="relative w-full bg-brand-black text-brand-white" style={FS_PATTERN_DARK}>
        <div className="container py-20 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-bold text-brand-gold">Orlando FL · 2026 · Licensed & Insured</p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">Cleaning Services Orlando FL (2026) — Move-Out, Make-Ready & Deep Clean.</h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-white/80">Apartment turns, rental homes and post-construction finishes. One agreed checklist. A photo report on every job.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <QuoteButton />
              <Button asChild variant="outline" size="lg" className="h-auto min-h-12 whitespace-normal border-brand-white/40 bg-transparent py-3 text-brand-white hover:bg-brand-white/10 hover:text-brand-white"><a href={`tel:${SITE.phone}`}><Phone />Call {SITE.phone}</a></Button>
            </div>
          </Reveal>
          <Reveal className="mt-10 max-w-3xl">
            <div className="grid gap-5 rounded-md border-2 border-brand-gold bg-brand-black/80 p-6 text-center shadow-gold sm:grid-cols-3" style={FS_PATTERN_DARK}>
              {[{ title: "Same-day quote", detail: "Free line-item scope" }, { title: "Photo report on every job", detail: "Completion documented" }, { title: "18 Cities", detail: "Central Florida" }].map((stat, index) => <div key={stat.title} className={index > 0 ? "sm:border-l sm:border-brand-gold/60 sm:pl-5" : ""}><p className="font-display text-xl font-bold text-brand-gold">{stat.title}</p><p className="mt-1 text-xs text-brand-white/75">{stat.detail}</p></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-card"><div className="container py-12"><p className="max-w-4xl text-base leading-relaxed text-brand-gray sm:text-lg">{aiAnswer}</p></div></section>

      <section className="bg-surface-warm" style={FS_PATTERN_LIGHT}>
        <div className="container py-16 lg:py-20"><Reveal className="mx-auto max-w-4xl border-l-4 border-brand-gold pl-6 sm:pl-8">
          <p className="text-sm font-bold text-brand-black">Quick Answer</p>
          <h2 className={`mt-3 ${heading}`}>How much does move-out or deep cleaning cost in Orlando?</h2>
          <p className="mt-5 leading-relaxed text-brand-gray">There is no single price for every property. A larger unit needs more cleaning time, heavy buildup changes the checklist, and a post-construction clean involves different dust and residue than a regular deep clean. An urgent turnover also depends on crew availability and access.</p>
          <ul className="mt-6 grid gap-3 text-brand-gray sm:grid-cols-2">{["Unit size, rooms and layout", "Condition, buildup and appliance detail", "Move-out, deep or recurring cleaning scope", "Post-construction dust and surface residue", "Urgency, turnover deadline and access"].map((factor) => <li key={factor} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-black" />{factor}</li>)}</ul>
          <p className="mt-6 font-semibold text-brand-black">Your free written quote lists cleaning tasks, optional extras and any separately approved property work before we begin.</p>
          <div className="mt-7"><QuoteButton /></div>
        </Reveal></div>
      </section>

      <section className="bg-card"><div className="container py-20"><Reveal>
        <h2 className={`${heading} text-center`}>What Type of Cleaning Does Your Property Need?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-gray-muted">Every checklist is confirmed in your quote. Pair the final clean with the trades your property actually needs.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">{CLEANING_TYPES.map((type) => <article key={type.title} className="br-card rounded-md border-t-[3px] border-brand-gold bg-surface-warm p-6" style={FS_PATTERN_LIGHT}>
          <type.icon className="h-9 w-9 text-brand-black" /><h3 className="mt-4 font-display text-2xl font-bold text-brand-black">{type.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-gray">{type.desc}</p>
          <ul className="mt-5 space-y-3">{type.checklist.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-brand-gray"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-black" /><span>{item}</span></li>)}</ul>
          <Link to={type.href} className="mt-6 inline-block font-semibold text-brand-black underline underline-offset-4">{type.link}</Link>
        </article>)}</div>
      </Reveal></div></section>

      <section className="bg-surface-warm"><div className="container py-20"><Reveal>
        <h2 className={`${heading} text-center`}>What FiveServ Handles vs. What You Select/Provide</h2>
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-2">
          <div><h3 className="font-display text-2xl font-bold text-brand-black">FiveServ Provides</h3>
            <ul className="mt-6 space-y-4">{["Cleaning crew", "Cleaning supplies suited to the agreed surfaces", "Equipment for the approved cleaning scope", "Completion photo report on every job"].map((item) => <li key={item} className="flex items-start gap-3 text-brand-gray"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-black" /><span>{item}</span></li>)}</ul>
          </div>
          <div><h3 className="font-display text-2xl font-bold text-brand-black">Client Selects/Provides</h3>
            <ul className="mt-6 space-y-4">{["Property access and entry instructions", "Cleaning scope and priorities", "Target date and turnover window", "Landlord or vacation-rental checklist, if applicable"].map((item) => <li key={item} className="flex items-start gap-3 text-brand-gray"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-brand-gray-muted" /><span>{item}</span></li>)}</ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-brand-gray-muted">Your written quote confirms the checklist, optional extras and any special surface or equipment requirements before work begins.</p>
      </Reveal></div></section>

      <section className="bg-surface-soft"><div className="container py-20"><Reveal>
        <h2 className={`${heading} text-center`}>How It Works</h2>
        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-brand-gold/40 lg:block" />{[
          { title: "Share the Property", desc: "Send the unit size, current photos, access details and target date." },
          { title: "Approve the Free Quote", desc: "Review the line-item checklist, extras and scheduling before work starts." },
          { title: "We Coordinate the Clean", desc: "Cleaning follows approved repairs and finishes so the sequence makes sense." },
          { title: "Review the Photo Report", desc: "Receive completion photos for sign-off and your property records." },
        ].map((step, index) => <div key={step.title} className="relative text-center lg:text-left"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold bg-surface-soft font-display text-2xl font-bold text-brand-black lg:mx-0">{index + 1}</div><h3 className="mt-4 font-display text-xl font-bold text-brand-black">{step.title}</h3><p className="mt-2 text-sm text-brand-gray-muted">{step.desc}</p></div>)}</div>
      </Reveal></div></section>

      <section className="bg-brand-black text-brand-white" style={FS_PATTERN_DARK}><div className="container py-20 text-center"><Reveal>
        <h2 className="font-display text-3xl font-bold leading-tight text-brand-gold sm:text-4xl">Free line-item quote — same-day response</h2>
        <p className="mx-auto mt-5 max-w-2xl text-brand-white/80">Send the unit size, current photos, cleaning needs and target date. Your quote confirms the scope and optional extras; an inspection or more details may be needed before pricing is finalized.</p>
        <div className="mt-8"><QuoteButton /></div>
      </Reveal></div></section>

      <section className="bg-surface-warm"><div className="container py-20"><Reveal>
        <h2 className={`${heading} text-center`}>Our Work</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{PLACEHOLDERS.map((label) => <ImagePlaceholder key={label} label={label} />)}</div>
      </Reveal></div></section>

      <section className="bg-surface-warm" style={FS_PATTERN_LIGHT}><div className="container py-20"><Reveal>
        <h2 className={`${heading} text-center`}>Why Property Managers and Homeowners Choose FiveServ</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{WHY_POINTS.map((point) => <article key={point.title} className="br-card rounded-md border border-brand-gold/40 border-t-[3px] border-t-brand-gold bg-card p-6" style={FS_PATTERN_LIGHT}><point.icon className="h-9 w-9 text-brand-black" /><h3 className="mt-4 font-display text-xl font-bold text-brand-black">{point.title}</h3><p className="mt-3 text-sm text-brand-gray-muted">{point.desc}</p>{point.href && <Link to={point.href} className="mt-4 inline-block text-sm font-semibold text-brand-black underline">See make-ready details</Link>}</article>)}</div>
      </Reveal></div></section>

      <FaqAccordion title="Cleaning Services — Frequently Asked Questions" faqs={FAQS} emitSchema />

      <section className="bg-brand-gold text-brand-black"><div className="container py-20 text-center"><Reveal>
        <h2 className={heading}>Ready for a Clean, Inspection-Ready Property?</h2>
        <p className="mx-auto mt-4 max-w-2xl">Tell us what needs cleaning and when. Get a free line-item quote for your property.</p>
        <div className="mt-8"><QuoteButton dark /></div>
        <p className="mt-5 font-display text-2xl font-bold"><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
        <p className="mt-3 text-sm">Cleaning, painting, flooring and repairs. One call. One invoice.</p>
      </Reveal></div></section>

      <section className="bg-card"><div className="container py-20"><Reveal>
        <h2 className={`${heading} text-center`}>Serving Central Florida</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">{CITIES.map((city) => <p key={city.slug} className="text-base text-brand-gray"><span className="font-bold text-brand-black">Cleaning Services</span> in {city.name} {city.state}</p>)}</div>
      </Reveal></div></section>
    </div>
  );
};

export default CleaningPage;
