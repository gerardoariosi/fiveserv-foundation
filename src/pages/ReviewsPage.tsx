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
    role: "Property Manager",
    location: "Orlando, FL",
    service: "Make-Ready / Unit Turn",
    stars: 5,
    date: "March 2025",
    text: "Finding a reliable maintenance crew in Orlando is always the hardest part. A colleague recommended FiveServ and I gave them a shot. They knocked out the unit in 4 days — paint, cleaning, repairs, full inspection. Now they handle all my turns. Complete game changer.",
  },
  {
    name: "David R.",
    role: "Property Manager",
    location: "Kissimmee, FL",
    service: "Unit Turn",
    stars: 5,
    date: "January 2025",
    text: "Had a tenant move out on short notice and needed the unit turned fast. Called FiveServ Monday morning, they started Tuesday, done by Friday afternoon. New tenant moved in the following Monday. That turnaround is almost impossible to find.",
  },
  {
    name: "Patricia M.",
    role: "Director of Maintenance",
    location: "Sanford, FL",
    service: "Ongoing Maintenance",
    stars: 5,
    date: "February 2025",
    text: "What I appreciate most is the communication. They update you without you having to chase them down. For anyone managing multiple properties that is huge. Work quality is solid. One invoice for everything.",
  },
  {
    name: "Ana S.",
    role: "Property Owner",
    location: "Sanford, FL",
    service: "Emergency Plumbing",
    stars: 5,
    date: "April 2025",
    text: "Had a pipe burst on a Sunday evening. FiveServ answered immediately and had someone at my house within 2 hours. Fixed the leak, documented everything with photos, and followed up the next morning. That level of response on a weekend is rare.",
  },
  {
    name: "Marcus T.",
    role: "Director of Maintenance",
    location: "Altamonte Springs, FL",
    service: "Unit Turns & Repairs",
    stars: 5,
    date: "March 2025",
    text: "Work gets done on schedule, one clean invoice, no surprises. You do not have to chase them. That consistency is extremely rare in this industry.",
  },
  {
    name: "Jennifer W.",
    role: "Property Owner",
    location: "Winter Park, FL",
    service: "Plumbing, Painting & Drywall",
    stars: 5,
    date: "February 2025",
    text: "Used to deal with a different contractor for every issue. FiveServ handled plumbing, painting, drywall — had the unit ready in less than a week. One invoice for everything. I did not know that was possible.",
  },
  {
    name: "Robert A.",
    role: "Property Manager",
    location: "Lake Nona, FL",
    service: "Make-Ready",
    stars: 5,
    date: "March 2025",
    text: "They showed up on time, did the work, and sent one clean invoice. No back and forth, no chasing people down. That is all I ask and they delivered every single time.",
  },
  {
    name: "Melissa C.",
    role: "Property Manager",
    location: "Winter Garden, FL",
    service: "Make-Ready / Written Guarantee",
    stars: 5,
    date: "April 2025",
    text: "I was skeptical about the quick turnaround guarantee but they pulled it off. Unit was painted, cleaned, and inspected in 4 business days. Owner was happy, tenant moved in on time. Will use them again.",
  },
  {
    name: "Tony B.",
    role: "Portfolio Owner",
    location: "Apopka, FL",
    service: "Emergency HVAC",
    stars: 5,
    date: "January 2025",
    text: "Emergency call on a Friday night — AC unit down, tenant with kids in the unit. FiveServ had someone there within the hour. Problem solved same night. That kind of reliability is everything.",
  },
  {
    name: "Sandra L.",
    role: "Property Manager",
    location: "Clermont, FL",
    service: "Make-Ready",
    stars: 5,
    date: "February 2025",
    text: "I have worked with a lot of vendors over the years. FiveServ is the only one that consistently delivers on what they promise. Unit turned in 5 business days, photos sent at completion, one invoice. Simple and professional.",
  },
  {
    name: "Miguel R.",
    role: "Asset Manager",
    location: "Ocoee, FL",
    service: "CapEx Renovation",
    stars: 5,
    date: "March 2025",
    text: "We hired FiveServ for a full unit renovation — flooring, paint, kitchen fixtures, bathroom refresh. They coordinated everything and kept us updated daily. Came in on budget and on time. Highly recommend for any CapEx project.",
  },
  {
    name: "Laura P.",
    role: "Property Manager",
    location: "St. Cloud, FL",
    service: "Drywall & Painting",
    stars: 5,
    date: "April 2025",
    text: "Called them for drywall damage and painting after a tenant move-out. Quick response, clean work, reasonable price. The unit looked brand new. Booked them again the following month for another property.",
  },
  {
    name: "Kevin D.",
    role: "Residential Homeowner",
    location: "Winter Park, FL",
    service: "General Repairs",
    stars: 5,
    date: "January 2025",
    text: "Used FiveServ for general repairs around the house — doors, fixtures, a leaky sink. They sent one technician who handled everything in a single visit. Efficient, clean, professional. Exactly what you want.",
  },
  {
    name: "Carla V.",
    role: "Property Manager",
    location: "Davenport, FL",
    service: "Unit Turn",
    stars: 5,
    date: "February 2025",
    text: "The speed is real. I tested them with a tight unit turn and they delivered. Paint, cleaning, minor repairs — done in under 5 business days. The owner was impressed. Now they are my go-to for all turns in that portfolio.",
  },
  {
    name: "James O.",
    role: "Property Owner",
    location: "Kissimmee, FL",
    service: "Emergency Electrical",
    stars: 5,
    date: "March 2025",
    text: "Had an electrical issue that needed same-day attention. FiveServ coordinated a licensed electrician and had the problem resolved by end of day. One call, one invoice. No running around finding contractors.",
  },
  {
    name: "Diana M.",
    role: "Portfolio Manager",
    location: "Orlando, FL",
    service: "Ongoing Maintenance Contract",
    stars: 5,
    date: "April 2025",
    text: "We brought FiveServ in as our maintenance vendor across our entire Orlando portfolio. Six months in and they have not missed a single deadline. Communication is professional, work is consistent, invoicing is clean. Exactly what we needed.",
  },
  {
    name: "Frank T.",
    role: "Property Manager",
    location: "Sanford, FL",
    service: "Make-Ready",
    stars: 5,
    date: "January 2025",
    text: "Straightforward process — they assess, quote within 24 hours, schedule fast, and deliver. No surprises on the invoice. I have referred them to two other property managers in my network already.",
  },
];

const STAR_ROW = (
  <div className="flex items-center gap-1 text-brand-gold text-2xl" aria-label="5 stars">
    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
  </div>
);

const reviewsSchemaList = TESTIMONIALS.map((t) => ({
  "@type": "Review",
  author: { "@type": "Person", name: t.name },
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  datePublished: t.date,
  reviewBody: t.text,
  name: t.service,
}));

const ReviewsPage = () => {
  const path = "/reviews";
  const title = "FiveServ Property Solutions Reviews — Property Maintenance Orlando Florida";
  const description =
    "Read verified reviews and testimonials from property managers and homeowners served by FiveServ Property Solutions across Central Florida. Rated 5 stars.";

  const aggregateRatingLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FiveServ Property Solutions",
    url: "https://fiveserv.net",
    telephone: "(407) 881-4942",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(TESTIMONIALS.length),
      bestRating: "5",
    },
    review: reviewsSchemaList,
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
            Verified feedback from property managers and homeowners across Central Florida.
          </p>
        </div>
      </section>

      {/* GOOGLE RATING */}
      <section className="bg-white">
        <div className="container py-24 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-3xl text-brand-black lg:text-4xl">
              Rated 5 Stars on Google
            </h2>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              FiveServ Property Solutions is rated 5 stars by property managers and homeowners across Central Florida. Fast make-readies, reliable repairs, and one clean invoice every time.
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

      {/* AEO BLOCK */}
      <section className="bg-white">
        <div className="container pb-12">
          <AIOverviewBlock
            directAnswer="FiveServ Property Solutions is rated 5 stars by property managers and homeowners across Central Florida for fast make-ready unit turns, reliable maintenance, and professional service with one invoice."
            supportingFacts="5-star rated on Google. 18 cities across Central Florida. Written work guarantee on every job. Most make-readys delivered in 5–7 business days. Available 24/7 for emergencies. One clean line-item invoice per project."
          />
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="bg-gray-50">
        <div className="container py-24 lg:py-28">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-brand-gold text-lg" aria-label={`${t.stars} stars`}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{t.date}</span>
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-brand-gold">
                  {t.service}
                </p>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-gray-700">
                  “{t.text}”
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-display font-bold text-brand-black">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role} — {t.location}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-10 italic">
            Testimonials collected directly from clients via email and phone. Names used with permission.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black">
        <div className="container py-24 lg:py-28 text-center">
          <h2 className="font-display font-black text-4xl text-white lg:text-5xl leading-[1.1]">
            Ready to Experience <BrandName variant="light" />?
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
