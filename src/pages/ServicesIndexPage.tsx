import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wrench,
  Hammer,
  Building2,
  Home,
  Droplets,
  Zap,
  Wind,
  Square,
  PaintBucket,
  Layers,
  Sparkles,
  Bath,
  ChefHat,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";

type Item = { title: string; href: string; description: string; Icon: LucideIcon };

const CORE: Item[] = [
  { title: "Property Maintenance & Repairs", href: "/maintenance", Icon: Wrench, description: "Work orders, emergency repairs, preventive maintenance. Available 24/7 across Central Florida." },
  { title: "Handyman Services", href: "/handyman-orlando", Icon: Hammer, description: "Plumbing fixtures, drywall, painting, flooring, carpentry. Most jobs $150–$400. Free quote in 24 hours." },
  { title: "CapEx & Renovations", href: "/renovations", Icon: Building2, description: "Large-scale projects that increase property value and allow owners to charge higher rents." },
  { title: "Residential Services", href: "/residential", Icon: Home, description: "The same professional crews that serve 500-unit communities — now at your home." },
  { title: "Make-Ready & Unit Turns", href: "/make-ready", Icon: Sparkles, description: "Full unit turnover guaranteed in 5 business days. Painting, cleaning, repairs. One invoice." },
];

const REMODELING: Item[] = [
  { title: "Bathroom Remodel", href: "/bathroom-remodel", Icon: Bath, description: "Full bathroom renovations — tile, vanity, shower, plumbing fixtures. Licensed and insured." },
  { title: "Kitchen Remodel", href: "/kitchen-remodel", Icon: ChefHat, description: "Cabinets, countertops, backsplash, appliances, lighting. Full kitchen transformations." },
];

const TRADES: Item[] = [
  { title: "Painting", href: "/painting", Icon: PaintBucket, description: "Interior and exterior painting. Prep, prime, paint. Clean lines, no mess, one invoice." },
  { title: "Flooring", href: "/flooring", Icon: Layers, description: "LVP, tile, laminate, carpet, epoxy. Installation and repair across Central Florida." },
  { title: "Plumbing", href: "/plumbing", Icon: Droplets, description: "Faucets, toilets, leaks, drains, water heaters. Licensed plumbers under our coordination." },
  { title: "Electrical", href: "/electrical", Icon: Zap, description: "Outlets, switches, ceiling fans, lighting. Licensed electricians, same-day response." },
  { title: "HVAC", href: "/hvac", Icon: Wind, description: "AC repair, filter replacement, duct cleaning, thermostat installation. Available 24/7." },
  { title: "Drywall", href: "/drywall", Icon: Square, description: "Patching, crack repair, water damage, texture matching, full installation." },
  { title: "Carpentry", href: "/carpentry", Icon: Hammer, description: "Baseboards, crown molding, doors, shelving, trim work, closet build-outs." },
  { title: "Cleaning", href: "/cleaning", Icon: Sparkles, description: "Move-out, move-in, deep clean, post-construction. Ready for inspection every time." },
];

const LightCard = ({ item }: { item: Item }) => {
  const { Icon } = item;
  return (
    <Link
      to={item.href}
      className="group flex flex-col rounded-r-lg bg-white border-l-[3px] border-[#FFD700] shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition-shadow p-6"
    >
      <Icon className="h-8 w-8 text-[#FFD700]" strokeWidth={1.75} />
      <h3 className="mt-4 font-display text-xl font-bold text-[#1A1A1A]">{item.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-600 flex-1">{item.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-bold text-[#B8860B] group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
};

const DarkCard = ({ item }: { item: Item }) => {
  const { Icon } = item;
  return (
    <Link
      to={item.href}
      className="group flex flex-col rounded-lg bg-white/5 border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:bg-white/[0.07] transition-all p-6"
    >
      <Icon className="h-8 w-8 text-[#FFD700]" strokeWidth={1.75} />
      <h3 className="mt-4 font-display text-xl font-bold text-white">{item.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-300 flex-1">{item.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-bold text-[#FFD700] group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
};

const SectionHeader = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <div className="mb-12 text-center">
    <div className="mx-auto h-[2px] w-12 bg-[#FFD700] mb-5" />
    <h2 className={`font-display text-3xl sm:text-4xl font-bold ${dark ? "text-white" : "text-[#1A1A1A]"}`}>
      {children}
    </h2>
  </div>
);

const ServicesIndexPage = () => (
  <>
    <Seo
      title="Services | FiveServ Property Solutions Orlando FL"
      description="Property maintenance, handyman, renovations, make-ready, and full trade services across Central Florida. One call. One invoice. Done."
      path="/services"
    />
    <SchemaOrg
      breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Services", url: `${SITE.url}/services` },
      ]}
    />

    {/* Intro */}
    <section className="bg-white border-b border-gray-100 pt-stack pb-16">
      <div className="container">
        <p className="uppercase tracking-[0.12em] text-brand-gold text-base font-bold">
          — <BrandName variant="dark" /> Property Solutions
        </p>
        <h1 className="mt-3 font-display text-4xl text-brand-black sm:text-5xl">Our Services</h1>
        <AIOverviewBlock
          hidden
          directAnswer="FiveServ Property Solutions offers property maintenance, handyman, make-ready, plumbing, electrical, HVAC, drywall, painting, carpentry, flooring, cleaning, and renovations across Central Florida. Licensed and insured. One call, one invoice, written work guarantee. Serving 18 cities including Orlando, Kissimmee, and Sanford."
        />
        <p className="mt-6 max-w-2xl text-gray-600">
          Fifteen services. Three categories. Built for property managers and homeowners across Central Florida.
        </p>
      </div>
    </section>

    {/* SECTION 1 — Core Services */}
    <section className="py-20" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="container">
        <SectionHeader>Core Services</SectionHeader>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CORE.map((i) => (
            <LightCard key={i.href} item={i} />
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 2 — Remodeling (dark) */}
    <section className="py-20" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="container">
        <SectionHeader dark>Remodeling</SectionHeader>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {REMODELING.map((i) => (
            <DarkCard key={i.href} item={i} />
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 3 — Trade Services */}
    <section className="py-20" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="container">
        <SectionHeader>Trade Services</SectionHeader>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRADES.map((i) => (
            <LightCard key={i.href} item={i} />
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 4 — CTA banner */}
    <section className="py-20" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="container text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
          One Call. One Team. Done.
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Available 24/7 across 18 cities in Central Florida.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#FFD700] text-[#1A1A1A] font-bold rounded-[4px] px-8 py-3 hover:brightness-95 transition-all"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:4078814942"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold rounded-[4px] px-8 py-3 hover:bg-white hover:text-[#1A1A1A] transition-all"
          >
            <Phone className="h-4 w-4" /> Call (407) 881-4942
          </a>
        </div>
      </div>
    </section>
  </>
);

export default ServicesIndexPage;
