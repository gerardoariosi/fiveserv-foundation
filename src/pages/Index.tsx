import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";

/**
 * Index — homepage placeholder ONLY.
 * Foundation phase: pages are intentionally not built yet.
 * Wire components (HeroSection, FivePillars, StatsBar, ServiceCard grid,
 * CityGrid, TestimonialCard, FaqAccordion, LeadMagnetSection) here later.
 */
const Index = () => {
  return (
    <>
      <Seo
        title={`${SITE.brand} Property Solutions — Make-Ready in 5 Days. Central Florida.`}
        description={`${SITE.brand} Property Solutions. Family-owned property maintenance. Make-ready in 5 days, guaranteed. One call. Done. Serving Orlando, FL and 17 cities.`}
        path="/"
      />
      <SchemaOrg organization breadcrumbs={[{ name: "Home", url: SITE.url }]} aggregateRating />
      <section className="bg-brand-black pt-32 pb-24">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            {SITE.brand} Property Solutions — Foundation Ready
          </p>
          <h1 className="mt-3 font-display text-4xl text-brand-white sm:text-6xl">
            Make-Ready in 5 Days, <span className="text-brand-gold">Guaranteed.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-white/80">
            Foundation built. Components ready. Routes wired. Pages intentionally not yet built —
            ready for content in the next step.
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
