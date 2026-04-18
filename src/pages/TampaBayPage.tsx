import { Phone } from "lucide-react";
import Seo from "@/lib/Seo";
import { Helmet } from "react-helmet-async";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import ContactCTA from "@/components/fiveserv/ContactCTA";
import BrandName from "@/components/fiveserv/BrandName";

const TampaBayPage = () => {
  const path = "/tampa-bay-fl";
  const title = "Make-Ready Services Tampa Bay FL — Coming Soon | FiveServ";
  const description =
    "FiveServ Property Solutions is expanding to Tampa Bay. Join the waitlist for make-ready and property maintenance services.";

  // Bespoke LocalBusiness placeholder for Tampa Bay (not in main CITIES list yet)
  const tampaSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE.brand} — Tampa Bay, FL (Coming Soon)`,
    url: `${SITE.url}${path}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33601",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "Tampa Bay, FL" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "zipCode", value: "33601" },
      { "@type": "PropertyValue", name: "zipCode", value: "33606" },
    ],
  };

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(tampaSchema)}</script>
      </Helmet>
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Tampa Bay", url: `${SITE.url}${path}` },
        ]}
      />

      <section className="relative isolate overflow-hidden bg-brand-black pt-32 pb-24">
        <img
          src="/images/cities/tampa-bay.jpg"
          alt="Tampa Bay, FL skyline"
          loading="eager"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 -z-10 bg-brand-black/60" aria-hidden />
        <div className="container relative max-w-3xl text-center">
          {/* Logo */}
          <img
            src="/images/logo FS .png"
            alt="FiveServ"
            className="mx-auto h-20 w-auto object-contain"
          />

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Coming Soon
          </p>
          <h1 className="mt-4 font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            <BrandName variant="light" /> is Coming to{" "}
            <span className="text-brand-gold">Tampa Bay, Florida</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            We're expanding to Tampa Bay. Be the first to know when we launch — get priority scheduling for
            make-ready and property maintenance services.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Join the Waitlist
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <p className="mt-12 text-sm text-gray-500">
            We'll contact you before we launch in the Tampa Bay area — including ZIP codes 33601 and 33606.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default TampaBayPage;
