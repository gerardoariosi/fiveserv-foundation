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
} from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import ServiceCard from "@/components/fiveserv/ServiceCard";

const ICONS: Record<string, typeof Wrench> = {
  "make-ready": Hammer,
  maintenance: Wrench,
  renovations: Building2,
  residential: Home,
};

const ServicesIndexPage = () => (
  <>
    <Seo
      title="Services | FiveServ Property Solutions Orlando FL"
      description="Make-Ready, Maintenance, CapEx Renovations, and Residential services across Central Florida. One call. One invoice. Done."
      path="/services"
    />
    <SchemaOrg
      breadcrumbs={[
        { name: "Home", url: SITE.url },
        { name: "Services", url: `${SITE.url}/services` },
      ]}
    />
    <section className="bg-brand-black pt-stack pb-16">
      <div className="container">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">— <BrandName variant="light" /> Property Solutions</p>
        <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">Our Services</h1>
        <AIOverviewBlock
          hidden
          directAnswer="FiveServ Property Solutions offers make-ready, plumbing, electrical, HVAC, drywall, painting, carpentry, flooring, cleaning, and renovations across Central Florida. Licensed and insured. One call, one invoice, 5-day guarantee. Serving 18 cities including Orlando, Kissimmee, and Sanford."
        />
        <p className="mt-6 max-w-2xl text-gray-300">
          Four service lines. One family. Built for property managers and homeowners across Central Florida.
        </p>
      </div>
    </section>
    <section className="bg-white pb-24">
      <div className="container grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.slug] ?? Wrench;
          return (
            <ServiceCard
              key={s.slug}
              icon={Icon}
              title={s.name}
              description={s.description}
              href={`/${s.slug}`}
              cta={s.cta}
            />
          );
        })}
      </div>
    </section>
    <section className="bg-gray-50 pb-24">
      <div className="container">
        <div className="pt-16 pb-12">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-gold">Our Specialties</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={Droplets} title="Plumbing" description="Leaks, fixtures, water heaters. Emergency response 24/7." href="/plumbing" cta="Learn More" />
          <ServiceCard icon={Zap} title="Electrical" description="Panels, outlets, lighting, and code compliance." href="/electrical" cta="Learn More" />
          <ServiceCard icon={Wind} title="HVAC" description="AC repair, maintenance, and filter programs." href="/hvac" cta="Learn More" />
          <ServiceCard icon={Square} title="Drywall" description="Patches, full replacements, texture matching." href="/drywall" cta="Learn More" />
          <ServiceCard icon={PaintBucket} title="Painting" description="Interior units, common areas, same-day quotes." href="/painting" cta="Learn More" />
          <ServiceCard icon={Layers} title="Flooring" description="LVP, tile, carpet removal and installation." href="/flooring" cta="Learn More" />
          <ServiceCard icon={Hammer} title="Carpentry" description="Doors, trim, cabinets, custom repairs." href="/carpentry" cta="Learn More" />
          <ServiceCard icon={Sparkles} title="Cleaning" description="Move-out clean, deep clean, inspection-ready." href="/cleaning" cta="Learn More" />
        </div>
      </div>
    </section>
  </>
);

export default ServicesIndexPage;
