import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";
import AIOverviewBlock from "./AIOverviewBlock";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const TRUST = ["300+ Units", "50+ Communities", "18 Cities", "24/7", "5-Day Guarantee"];

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

type HeroProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export const HeroSection = ({
  videoSrc = "/images/hero-team-working.mp4",
  posterSrc,
}: HeroProps) => {
  const ref = useReveal<HTMLDivElement>();
  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;

  return (
    <section className="relative isolate overflow-hidden bg-brand-black pt-32 pb-20 lg:pt-40 lg:pb-24">
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* 60% black overlay per spec */}
      <div className="absolute inset-0 -z-10 bg-brand-black/60" />

      <div ref={ref} className="container reveal">
        <h1 className="font-display text-4xl leading-[1.05] text-brand-white sm:text-5xl lg:text-6xl">
          One Call Handles Your Entire Make-Ready —
          <span className="block text-brand-gold">No Vendor Chaos. One Invoice.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-white/90">
          Painting, cleaning, repairs, drywall, inspections. Our team. 5 business days. Guaranteed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={scrollToForm}
            className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Get a Free Quote
          </button>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 rounded-md border-2 border-brand-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-white hover:bg-brand-white hover:text-brand-black transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:opacity-90 transition-opacity"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-brand-white">
          {TRUST.map((t, i) => (
            <li key={t} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-brand-gold">|</span>}
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <AIOverviewBlock
          answer={`${SITE.brand} Property Solutions provides property maintenance and make-ready services across Central Florida. We complete every unit turn in 5 business days, guaranteed. One call, one team, one invoice — serving property managers with 30 to 500 units.`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
