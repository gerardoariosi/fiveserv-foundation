import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";

export type PageCTAProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

/**
 * PageCTA — unified gold-accented bottom CTA for every interior page.
 */
export const PageCTA = ({
  eyebrow = "Ready when you are",
  title = "One call. One team. One invoice.",
  subtitle = "Get a free quote in minutes. Licensed, insured, and on-call 24/7 across 18 cities.",
}: PageCTAProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-black">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(255,215,0,0.3) 0%, transparent 55%)",
        }}
      />
      <div className="relative container py-20 sm:py-28 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-yellow-400 transition-colors"
          >
            Get a free quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-brand-black transition-colors"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PageCTA;
