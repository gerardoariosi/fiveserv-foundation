import Seo from "@/lib/Seo";
import { Helmet } from "react-helmet-async";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import Logo from "@/components/fiveserv/Logo";
import GhlFormEmbed from "@/components/fiveserv/GhlFormEmbed";
import tampaBayImg from "@/assets/cities/tampa-bay.jpg";

const TampaBayPage = () => {
  const path = "/tampa-bay-fl/";
  const title = "Make-Ready Services Tampa Bay FL — Coming Soon | FiveServ";
  const description =
    "FiveServ Property Solutions is expanding to Tampa Bay. Join the waitlist for make-ready and property maintenance services.";

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
  };

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <Helmet>
        <link rel="canonical" href={`${SITE.url}${path}`} />
        <script type="application/ld+json">{JSON.stringify(tampaSchema)}</script>
      </Helmet>
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Tampa Bay", url: `${SITE.url}${path}` },
        ]}
      />

      <section className="relative min-h-screen px-6 pt-32 pb-24">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={tampaBayImg}
            alt="Tampa Bay, Florida skyline"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Logo variant="light" imgClassName="h-20 w-auto object-contain" showTagline />
          </div>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
            Coming Soon
          </p>
          <h1 className="mt-4 font-display font-black text-4xl text-white sm:text-5xl">
            FiveServ is Coming to <span className="text-brand-gold">Tampa Bay, Florida</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We are expanding to Tampa Bay. Be the first to know when we launch.
          </p>

          {/* GHL B2B form */}
          <div className="mt-12 rounded-lg bg-white p-4 text-left shadow-xl sm:p-6">
            <GhlFormEmbed variant="b2b" className="w-full" />
          </div>

          <p className="mt-12 text-sm text-gray-300">
            We'll contact you before we launch in the Tampa Bay area.
          </p>
        </div>
      </section>
    </>
  );
};

export default TampaBayPage;
