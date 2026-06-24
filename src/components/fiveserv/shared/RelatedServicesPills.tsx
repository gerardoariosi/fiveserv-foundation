import { Link } from "react-router-dom";
import { ArrowRight, Bath, Brush, Layers, Sparkles, Wrench, Home, ChefHat, Zap, Droplets, Wind } from "lucide-react";

const ALL = [
  { slug: "maintenance", label: "Property Maintenance", icon: Wrench },
  { slug: "handyman-orlando", label: "Handyman", icon: Home },
  { slug: "bathroom-remodel", label: "Bathroom Remodel", icon: Bath },
  { slug: "kitchen-remodel", label: "Kitchen Remodel", icon: ChefHat },
  { slug: "painting", label: "Painting", icon: Brush },
  { slug: "flooring", label: "Flooring", icon: Layers },
  { slug: "cleaning", label: "Cleaning", icon: Sparkles },
  { slug: "electrical", label: "Electrical", icon: Zap },
  { slug: "plumbing", label: "Plumbing", icon: Droplets },
  { slug: "hvac", label: "HVAC", icon: Wind },
] as const;

export type RelatedServicesPillsProps = {
  excludeSlug?: string;
  title?: string;
  eyebrow?: string;
  max?: number;
};

/**
 * RelatedServicesPills — cream section with pill cross-links to other services.
 * Auto-excludes the current page's service slug.
 */
export const RelatedServicesPills = ({
  excludeSlug,
  title = "Explore other services",
  eyebrow = "One team. Every service.",
  max = 6,
}: RelatedServicesPillsProps) => {
  const items = ALL.filter((s) => s.slug !== excludeSlug).slice(0, max);
  return (
    <section style={{ background: "#FAF8F3" }}>
      <div className="container py-20 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black/55">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-brand-black">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {items.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                to={`/${p.slug}`}
                className="group flex items-center gap-3 rounded-full bg-white pl-2 pr-4 py-2 text-sm font-semibold text-brand-black transition-all hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(26,26,26,0.08)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  minHeight: 56,
                }}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#FFF4C2" }}
                >
                  <Icon className="h-5 w-5 text-brand-black" strokeWidth={2} />
                </span>
                <span className="flex-1">{p.label}</span>
                <ArrowRight className="h-4 w-4 text-brand-black/40 transition-all group-hover:text-brand-gold group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesPills;
