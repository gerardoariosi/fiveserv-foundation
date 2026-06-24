import { Link } from "react-router-dom";
import { ArrowRight, Bath, Brush, Layers, Sparkles, Wrench, Home } from "lucide-react";

const PICKER = [
  { slug: "maintenance", label: "Property Maintenance", icon: Wrench },
  { slug: "handyman-orlando", label: "Handyman", icon: Home },
  { slug: "bathroom-remodel", label: "Bathroom Remodel", icon: Bath },
  { slug: "painting", label: "Painting", icon: Brush },
  { slug: "flooring", label: "Flooring", icon: Layers },
  { slug: "cleaning", label: "Cleaning", icon: Sparkles },
] as const;

/**
 * HeroServicePicker — cream card with pill service buttons, inspired by stansac.com.
 * Sits on the seam between the dark hero and the white section below via -mt-16.
 * Light cream surface keeps the page from feeling oversaturated with the black + gold.
 */
export const HeroServicePicker = () => {
  return (
    <div className="relative z-20 -mt-12 sm:-mt-20">
      <div className="container">
        <div
          className="mx-auto max-w-5xl rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: "#FAF8F3",
            border: "1px solid rgba(26,26,26,0.08)",
            borderRadius: 20,
            boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
          }}
        >
          <div className="flex flex-col gap-1 mb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "#1A1A1A", opacity: 0.55 }}
              >
                FiveServ stands by you
              </p>
              <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-brand-black leading-tight">
                Choose your service
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-brand-black hover:text-brand-gold transition-colors"
            >
              View all services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PICKER.map((p) => {
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.9)";
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(26,26,26,0.08)";
                    e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)";
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

          <Link
            to="/services"
            className="mt-5 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-black hover:text-brand-gold sm:hidden"
          >
            View all services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroServicePicker;
