import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import GhlFormEmbed from "./GhlFormEmbed";
import BrandName from "@/components/fiveserv/BrandName";


const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

type Props = {
  /** "b2b" → property managers form. "b2c" → residential form. Default: b2b. */
  variant?: "b2b" | "b2c";
};

/**
 * ContactCTA — final form section. Embeds the appropriate GHL form
 * (B2B for property managers, B2C for residential).
 */
export const ContactCTA = ({ variant = "b2b" }: Props) => {
  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;

  return (
    <section id="contact-form" className="bg-brand-black">
      <div className="container py-20">
        <h2 className="font-display text-3xl text-brand-white sm:text-4xl text-center">
          Get a Free Quote — <BrandName /> Property Solutions Orlando, FL
        </h2>
        <p className="mt-3 text-brand-white/80 text-center">
          Fill out the form and we will get back to you within 24 hours.
        </p>

        {/* Contact info row — above the form */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-white transition-colors font-bold"
          >
            <Phone className="h-5 w-5" />
            <span>{SITE.phone}</span>
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp Us</span>
          </a>
          <span className="text-sm text-brand-white/70">
            Available 24/7 · Orlando, FL · Central Florida
          </span>
        </div>


        {/* Form below — centered */}
        <div className="mt-6 max-w-2xl mx-auto rounded-lg border border-brand-gray bg-white p-6">
          <GhlFormEmbed variant={variant} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
