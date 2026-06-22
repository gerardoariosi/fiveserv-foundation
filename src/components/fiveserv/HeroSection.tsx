import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, Key, Phone, ShieldCheck, Wrench } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const PICKER = [
  { slug: "maintenance", label: "Property Maintenance", icon: Wrench },
  { slug: "handyman-orlando", label: "Handyman", icon: Home },
  { slug: "renovations", label: "Renovations", icon: Building2 },
  { slug: "residential", label: "Residential", icon: Key },
] as const;

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

type HeroProps = {
  imageSrc?: string;
};

export const HeroSection = ({ imageSrc = "/images/orlando.webp" }: HeroProps) => {
  const ref = useReveal<HTMLDivElement>();
  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;
  const heroVisibleHeight = "88vh";

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-brand-black"
      style={{ minHeight: heroVisibleHeight }}
    >
      <img
        src={imageSrc}
        alt="Orlando, Florida skyline — FiveServ Property Solutions service area"
        width={1600}
        height={900}
        // @ts-expect-error fetchpriority is valid HTML
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 58%" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />

      <div
        className="relative z-10 flex items-center pb-12 pt-12 sm:pt-16 lg:pt-20"
        style={{ minHeight: heroVisibleHeight }}
      >
        <div ref={ref} className="container reveal">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: headline + CTAs */}
            <div className="lg:col-span-7">
              {/* Trust pill */}
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: "rgba(255,215,0,0.15)",
                  color: "#FFD700",
                  border: "1px solid rgba(255,215,0,0.5)",
                }}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Licensed & Insured · 18 Cities · 24/7
              </span>

              <h1 className="mt-5 text-3xl text-brand-white sm:text-4xl lg:text-6xl leading-tight">
                Property Maintenance Central Florida
                <span className="block text-brand-gold italic">One Call. Every Trade. Done.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
                Property maintenance, handyman services, bathroom remodels, painting, flooring, and cleaning across Central Florida. Property managers and homeowners — one team handles it all. No vendor chaos. No surprises on the invoice.
              </p>

              <h1 className="mt-5 text-3xl text-brand-white sm:text-4xl lg:text-6xl leading-tight">
                Property Maintenance Central Florida
                <span className="block text-brand-gold italic">One Call. One Team. Done.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
                Painting, plumbing, electrical, HVAC, drywall, flooring, make-ready, and renovations. Property managers and homeowners across Central Florida — one team handles it all. No vendor chaos. No surprises on the invoice.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="cta-gold btn-shimmer cta-pill w-full sm:w-auto justify-center"
                >
                  Get a free quote <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-white px-6 sm:px-8 py-3 text-sm font-semibold text-brand-white hover:bg-brand-white hover:text-brand-black transition-colors w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" /> Call now
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 sm:px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
            </div>

            {/* Right: service-picker card */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-5 sm:p-6 backdrop-blur-sm"
                style={{
                  background: "rgba(26,26,26,0.85)",
                  border: "1px solid rgba(255,215,0,0.35)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
                }}
              >
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
                  style={{ color: "#FFD700" }}
                >
                  Choose Your Service
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {PICKER.map((p) => {
                    const Icon = p.icon;
                    return (
                      <Link
                        key={p.slug}
                        to={`/${p.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-brand-white transition-all hover:-translate-y-0.5"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,215,0,0.2)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255,215,0,0.12)";
                          e.currentTarget.style.borderColor = "rgba(255,215,0,0.7)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                          e.currentTarget.style.borderColor = "rgba(255,215,0,0.2)";
                        }}
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon className="h-5 w-5 text-brand-gold" strokeWidth={2} />
                          {p.label}
                        </span>
                        <ArrowRight className="h-4 w-4 text-brand-gold transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to="/services"
                  className="mt-4 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold hover:underline"
                >
                  View all services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
