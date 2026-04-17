import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Clock } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";

type HeroProps = {
  videoSrc?: string;
  posterSrc?: string;
  headline?: string;
  subtitle?: string;
};

export const HeroSection = ({
  videoSrc,
  posterSrc,
  headline = "Make-Ready in 5 Days, Guaranteed.",
  subtitle = "For property managers who are done waiting on vendors. One call. We handle the rest.",
}: HeroProps) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative isolate overflow-hidden bg-brand-black pt-32 pb-20 lg:pt-40 lg:pb-28">
      {videoSrc && (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-black/60 via-brand-black/80 to-brand-black" />

      <div ref={ref} className="container reveal">
        <h1 className="font-display text-4xl leading-tight text-brand-white sm:text-5xl lg:text-6xl">
          {headline.split(",")[0]},
          <span className="block text-brand-gold">{headline.split(",").slice(1).join(",").trim()}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-white/90">{subtitle}</p>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-brand-white/80">
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-gold" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-gold" /> Available 24/7</span>
          <span className="flex items-center gap-2 font-bold"><span className="text-brand-gold">300+</span> Units Completed</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="cta-gold rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide">
            Get a Free Quote
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 rounded-md border-2 border-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
          <Link to="/make-ready" className="rounded-md bg-brand-gray px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-white hover:bg-brand-gray/80 transition-colors">
            See the 5-Day Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
