import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import AIOverviewBlock from "@/components/fiveserv/AIOverviewBlock";
import BrandName from "@/components/fiveserv/BrandName";

const TESTIMONIALS = [
  {
    name: "Carlos M.",
    role: "Property Manager, Orlando FL",
    stars: 5,
    text: "Been managing properties in Orlando for 8 years and finding a reliable maintenance crew is always the hardest part. A friend in the industry recommended FiveServ and I gave them a shot with one unit. They knocked it out in 4 days — paint, cleaning, couple repairs. Now they handle all my turns. Game changer.",
  },
  {
    name: "Jennifer W.",
    role: "Investment Property Owner, Winter Park FL",
    stars: 5,
    text: "I have 3 rental homes in Winter Park and used to deal with a different contractor for every single thing. FiveServ came in, fixed a plumbing issue, repainted two rooms, and had the unit ready for my next tenant faster than I expected. One invoice for everything. I didn't even know that was possible.",
  },
  {
    name: "David R.",
    role: "Property Manager, Kissimmee FL",
    stars: 5,
    text: "I manage around 20 units scattered around Kissimmee and Osceola County. Had a tenant move out on short notice and needed the unit turned fast. Called FiveServ on a Monday, they started Tuesday, done by Friday. Tenant moved in the following Monday. That kind of turnaround is hard to find.",
  },
  {
    name: "Ana S.",
    role: "Residential Homeowner, Sanford FL",
    stars: 5,
    text: "Had a pipe burst on a Sunday evening. I honestly didn't expect anyone to pick up but FiveServ answered and had someone at my house within a couple hours. Fixed the leak, assessed the water damage, and followed up the next day to check on everything. Really appreciated the response.",
  },
  {
    name: "Marcus T.",
    role: "Director of Maintenance, Altamonte Springs FL",
    stars: 5,
    text: "We oversee maintenance for several multifamily properties and FiveServ has become our main vendor for unit turns and repairs. What sets them apart is they actually communicate. You don't have to chase them down. Work gets done, you get one invoice, no surprises. That's rare in this business.",
  },
];

const STAR_ROW = (
  <div className="flex items-center gap-1 text-brand-gold text-2xl" aria-label="5 stars">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>
);

const ReviewsPage = () => {
  const path = "/reviews";
  const title = "FiveServ Property Solutions Reviews — Property Maintenance Orlando Florida";
  const description =
    "Read reviews and testimonials from property managers and homeowners served by FiveServ Property Solutions across Central Florida.";

  const aggregateRatingLd = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Organization",
      name: "FiveServ Property Solutions",
    },
    ratingValue: "5",
    reviewCount: "5",
    bestRating: "5",
  };

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Reviews", url: `${SITE.url}${path}` },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingLd)}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-brand-black via-brand-black to-brand-black/70 pt-32 pb-24">
        <div className="container">
          <p className="uppercase tracking-[0.12em] text-brand-gold text-base font-bold">
            — What Clients Say
          </p>
          <h1 className="mt-4 font-display font-black text-4xl text-white lg:text-6xl leading-[1.05] max-w-4xl">
            FiveServ Reviews & Testimonials
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
            Real feedback from property managers and homeowners across Central Florida.
          </p>
        </div>
      </section>

      {/* SECTION 1 — Google Rating */}
      <section className="bg-white">
        <div className="container py-24 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-3xl text-brand-black lg:text-4xl">
              Rated 5 Stars on Google
            </h2>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              FiveServ Property Solutions is rated 5 stars on Google by property managers and homeowners across Central Florida. Our reviews reflect our commitment to fast, reliable, and professional property maintenance.
            </p>
            <div className="mt-6 flex justify-center">{STAR_ROW}</div>
            <a
              href="https://g.co/kgs/fiveserv"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-brand-black transition-transform hover:scale-105"
            >
              See Our Google Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Testimonials */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-1 text-brand-gold text-lg">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-gray-700">
                  “{t.text}”
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-display font-bold text-brand-black">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — AEO Block */}
      <section className="bg-white">
        <div className="container py-24 lg:py-28">
          <AIOverviewBlock
            directAnswer="FiveServ Property Solutions is rated 5 stars by property managers and homeowners across Central Florida for fast make-ready unit turns, reliable maintenance, and professional service with one invoice."
            supportingFacts="5-star rated on Google. 300+ units served. 18 cities across Central Florida. Make-ready units delivered in 5 business days. Available 24/7 for emergencies."
          />
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="bg-brand-black">
        <div className="container py-24 lg:py-28 text-center">
          <h2 className="font-display font-black text-4xl text-white lg:text-5xl leading-[1.1]">
            Ready to Experience{" "}
            <BrandName variant="light" />?
          </h2>
          <p className="mt-5 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Join property managers across Central Florida who trust FiveServ.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-brand-black transition-transform hover:scale-105"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
