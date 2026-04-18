import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Hammer, Building2, Home } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE, SERVICES } from "@/lib/site-config";

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
    <section className="bg-brand-black pt-32 pb-16">
      <div className="container">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">{SITE.brand} Property Solutions</p>
        <h1 className="mt-3 font-display text-4xl text-brand-black sm:text-5xl">Our Services</h1>
        <p className="mt-6 max-w-2xl text-gray-700">
          Four service lines. One family. Built for property managers and homeowners across Central Florida.
        </p>
      </div>
    </section>
    <section className="bg-white pb-24">
      <div className="container grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.slug] ?? Wrench;
          return (
            <article key={s.slug} className="hover-card group rounded-lg border border-gray-100 bg-white shadow-sm p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-2xl text-brand-black">{s.name}</h2>
              <p className="mt-3 text-gray-700">{s.description}</p>
              <Link
                to={`/${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-bold text-brand-gold group-hover:underline"
              >
                {s.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  </>
);

export default ServicesIndexPage;
