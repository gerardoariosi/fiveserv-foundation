import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

/**
 * ContactCTA — final form section. Embeds GHL form when VITE_FORM_GHL is set,
 * else shows a fallback form (POST handler stub). Renders below the LeadMagnetSection.
 */
export const ContactCTA = () => {
  const ghlForm = import.meta.env.VITE_FORM_GHL;
  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;

  return (
    <section id="contact-form" className="bg-brand-black">
      <div className="container py-20">
        <h2 className="font-display text-3xl text-brand-white sm:text-4xl">
          Get a Free Quote — <span className="text-brand-gold">{SITE.brand} Property Solutions</span> Orlando, FL
        </h2>
        <p className="mt-3 max-w-2xl text-brand-white/80">
          Fill out the form and we will get back to you within 24 hours.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-lg border border-brand-gray bg-brand-gray/30 p-6">
            {ghlForm ? (
              <iframe
                src={ghlForm}
                title="FiveServ Contact Form"
                className="h-[640px] w-full rounded-md border-0"
              />
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // [FORM_GHL_EMBED] — replace with GHL embed via VITE_FORM_GHL
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-md bg-brand-black px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold" />
                  <input required type="email" placeholder="Work email" className="rounded-md bg-brand-black px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold" />
                  <input required type="tel" placeholder="Phone" className="rounded-md bg-brand-black px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold" />
                  <input placeholder="Company" className="rounded-md bg-brand-black px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold" />
                  <input type="number" placeholder="Units managed" className="rounded-md bg-brand-black px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold" />
                  <select className="rounded-md bg-brand-black px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold">
                    <option value="">Service needed</option>
                    <option>Make-Ready / Unit Turn</option>
                    <option>Maintenance &amp; Repairs</option>
                    <option>CapEx / Renovations</option>
                    <option>Residential</option>
                  </select>
                </div>
                <textarea rows={4} placeholder="Tell us about your property" className="w-full rounded-md bg-brand-black px-4 py-3 text-brand-white outline-none focus:ring-2 focus:ring-brand-gold" />
                <button type="submit" className="cta-gold cta-pill w-full">
                  Get my free quote
                </button>
                <p className="text-xs text-brand-white/60">[FORM_GHL_EMBED] — replace this fallback form by setting VITE_FORM_GHL.</p>
              </form>
            )}
          </div>

          <aside className="space-y-4 rounded-lg border-2 border-brand-gold bg-brand-black p-6">
            <h3 className="font-display text-xl text-brand-gold">Or call us directly</h3>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-brand-white hover:text-brand-gold">
              <Phone className="h-5 w-5 text-brand-gold" />
              <span className="font-bold">{SITE.phone}</span>
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-white hover:text-brand-gold">
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              <span className="font-bold">WhatsApp Us</span>
            </a>
            <p className="border-t border-brand-gray pt-4 text-sm text-brand-white/80">
              <span className="font-bold text-brand-gold">Available 24/7</span><br />
              Orlando, FL · Central Florida
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
