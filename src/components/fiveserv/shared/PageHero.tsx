import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site-config";

export type PageHeroCTA = {
  label: string;
  to?: string;
  href?: string;
  variant?: "gold" | "outline";
};

export type PageHeroProps = {
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  title: React.ReactNode;
  titleAccent?: string;
  subtitle?: React.ReactNode;
  primaryCTA?: PageHeroCTA;
  secondaryCTA?: PageHeroCTA;
  compact?: boolean;
};

const CTA = ({ cta }: { cta: PageHeroCTA }) => {
  const base =
    cta.variant === "outline"
      ? "inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-black transition-colors"
      : "inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black hover:bg-yellow-400 transition-colors shadow-[0_8px_24px_rgba(255,215,0,0.25)]";
  if (cta.to)
    return (
      <Link to={cta.to} className={base}>
        {cta.label} <ArrowRight className="h-4 w-4" />
      </Link>
    );
  return (
    <a href={cta.href} className={base}>
      {cta.variant === "outline" ? <Phone className="h-4 w-4" /> : null}
      {cta.label}
    </a>
  );
};

/**
 * PageHero — universal interior-page hero inspired by stansac.com.
 * Photo background + cream card overlay with eyebrow, H1, subtitle, dual CTAs.
 */
export const PageHero = ({
  image = "/images/orlando.webp",
  imageAlt = "FiveServ Property Solutions",
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryCTA,
  secondaryCTA = { label: `Call ${SITE.phone}`, href: `tel:${SITE.phone}`, variant: "outline" },
  compact = false,
}: PageHeroProps) => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-brand-black">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 55%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.8) 100%)",
          }}
        />
      </div>

      <div
        className={`relative z-10 container ${
          compact ? "pt-24 pb-16 sm:pt-28 sm:pb-20" : "pt-28 pb-24 sm:pt-32 sm:pb-32"
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(255,215,0,0.15)",
                color: "#FFD700",
                border: "1px solid rgba(255,215,0,0.5)",
              }}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            {title}
            {titleAccent && <span className="block text-brand-gold italic font-normal">{titleAccent}</span>}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {primaryCTA && <CTA cta={primaryCTA} />}
              {secondaryCTA && <CTA cta={secondaryCTA} />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
