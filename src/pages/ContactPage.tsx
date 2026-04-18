import { Phone } from "lucide-react";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import TrustBar from "@/components/fiveserv/TrustBar";
import GhlFormEmbed from "@/components/fiveserv/GhlFormEmbed";
import BrandName from "@/components/fiveserv/BrandName";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

/**
 * Contact page (/contact) — minimal high-conversion layout.
 * Single H1, GHL form (or fallback) as the page focal point, phone + WhatsApp below.
 * Zero secondary nav distractions inside the content area.
 */
const ContactPage = () => {
  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;

  const title = `Contact ${SITE.brand} | Get a Free Quote | Central Florida`;
  const description = `Contact ${SITE.brand} Property Solutions. One call. We handle the rest. Fill out the form — we respond within 24 hours. Available 24/7 across Central Florida.`;

  // ContactPage JSON-LD
  const contactPageLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE.brand} Property Solutions`,
    url: `${SITE.url}/contact`,
    description,
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.baseCity,
        addressRegion: SITE.baseState,
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <Seo title={title} description={description} path="/contact" />
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "Contact", url: `${SITE.url}/contact` },
        ]}
      />
      {/* ContactPage schema */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />

      <section className="bg-white min-h-[calc(100vh-4rem)]">
        <div className="container max-w-3xl py-20 pt-32 sm:py-28 sm:pt-40">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
              — <BrandName variant="dark" /> Property Solutions
            </p>
            <h1 className="mt-4 font-display text-4xl text-gray-900 sm:text-5xl lg:text-6xl">
              Get a Free Quote
            </h1>
            <p className="mt-5 text-lg text-gray-700">
              Fill out the form and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="mt-10">
            <TrustBar />
          </div>

          <div className="mt-12 rounded-lg border border-gray-100 bg-white shadow-sm p-6 sm:p-8">
            <GhlFormEmbed variant="b2b" className="w-full" />
          </div>

          {/* Below-form direct contact */}
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-lg font-bold text-brand-gold hover:underline"
              >
                <Phone className="h-5 w-5" /> {SITE.phone}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-brand-gold"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">
              Available 24/7
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
