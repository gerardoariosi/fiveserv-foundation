import { Phone } from "lucide-react";
import Seo from "@/lib/Seo";
import { Helmet } from "react-helmet-async";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import ContactCTA from "@/components/fiveserv/ContactCTA";

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

      <section className="bg-brand-black pt-32 pb-24">
        <div className="container max-w-3xl text-center">
          {/* Logo monogram */}
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-md border-2 border-brand-gold bg-white shadow-md">
            <span className="font-display text-3xl text-brand-gold">FS</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Coming Soon
          </p>
          <h1 className="mt-4 font-display text-4xl text-brand-black sm:text-5xl lg:text-6xl">
            {SITE.brand} is Coming to{" "}
            <span className="text-brand-gold">Tampa Bay, Florida</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            We're expanding to Tampa Bay. Be the first to know when we launch — get priority scheduling for
            make-ready and property maintenance services.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#contact-form" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
              Join the Waitlist
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-brand-white hover:text-brand-black transition-colors"
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
