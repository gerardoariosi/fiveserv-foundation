import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, Key, Wrench } from "lucide-react";

const PICKER = [
  { slug: "maintenance", label: "Property Maintenance", icon: Wrench },
  { slug: "handyman-orlando", label: "Handyman", icon: Home },
  { slug: "renovations", label: "Renovations", icon: Building2 },
  { slug: "residential", label: "Residential", icon: Key },
] as const;

/**
 * Floating service-picker card. Sits on the seam between the hero stat strip
 * (dark) and the white section below — half on dark, half on light — via
 * negative top margin on this wrapper.
 */
export const HeroServicePicker = () => {
  return (
    <div className="relative z-20 -mt-12 sm:-mt-16">
      <div className="container">
        <div
          className="mx-auto max-w-4xl rounded-xl p-6 sm:p-8"
          style={{
            background: "rgba(26,26,26,0.97)",
            border: "1px solid rgba(255,215,0,0.3)",
            borderRadius: 12,
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
          }}
        >
          <p
            className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4 text-center sm:text-left"
            style={{ color: "#FFD700" }}
          >
            Choose Your Service
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            className="mt-5 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold hover:underline"
          >
            View all services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroServicePicker;
