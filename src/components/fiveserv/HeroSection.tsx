import { Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import CTAButton from "./shared/CTAButton";
import orlandoSkylineAsset from "@/assets/orlando-hero-hd.jpg.asset.json";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

type HeroProps = { imageSrc?: string };

export const HeroSection = ({ imageSrc = orlandoSkylineAsset.url }: HeroProps) => {
  const { ref, visible } = useScrollReveal(0.01);
  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;

  return (
    <section className="relative isolate w-full overflow-hidden bg-brand-black">
      {/* Image + dark overlay */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt="Orlando, Florida skyline — FiveServ Property Solutions service area"
          width={1600}
          height={900}
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 58%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.8) 100%)" }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col">
        <div
          className="flex items-center pt-14 pb-28 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40"
          style={{ minHeight: "72vh" }}
        >
          <div ref={ref} className="container" style={revealStyle(visible)}>
            <div className="max-w-3xl">
              {/* Trust pill — friendly rounded */}
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(255,215,0,0.15)",
                  color: "#FFD700",
                  border: "1px solid rgba(255,215,0,0.35)",
                }}
              >
                <ShieldCheck className="h-4 w-4" />
                Licensed · Insured · 18 Cities · 24/7
              </span>

              <h1 className="mt-6 font-display font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
                Property Maintenance
                <br />
                Central Florida.
                <span className="block text-brand-gold italic font-normal">
                  One call. One team. Done.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-[1.7]">
                Property maintenance, handyman, bathroom remodels, painting, flooring, and cleaning across Central Florida. Property managers and homeowners — one team handles it all. No vendor chaos. No surprises on the invoice.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <CTAButton variant="gold" size="lg" onClick={scrollToForm} className="w-full sm:w-auto">
                  Get a free quote
                </CTAButton>
                <CTAButton
                  variant="ghost-dark"
                  size="lg"
                  href={`tel:${SITE.phone}`}
                  showArrow={false}
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" /> Call now
                </CTAButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
