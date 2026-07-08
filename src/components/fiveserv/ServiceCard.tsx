import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import CornerBrackets from "./patterns/CornerBrackets";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  image?: string;
  index?: number;
  badge?: string;
};

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  href,
  cta,
  index = 0,
  badge = "Licensed",
}: ServiceCardProps) => {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} style={revealStyle(visible, index)}>
      <Link to={href} className="block h-full">
        <article
          className="group relative flex h-full flex-col overflow-hidden bg-white p-8 transition-all duration-300 hover:-translate-y-1"
          style={{
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "10px",
            boxShadow: "var(--shadow-card)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "var(--shadow-card)";
          }}
        >
          <CornerBrackets />

          {/* Badge */}
          {badge && (
            <span className="absolute right-4 top-4 z-10 font-semibold text-[9px] font-medium uppercase tracking-[0.15em] text-brand-black/50">
              {badge}
            </span>
          )}

          <div className="relative inline-flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-7 w-7 text-brand-black" strokeWidth={1.5} />
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-brand-black">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-gray-600">
            {description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-black transition-colors group-hover:text-brand-gold">
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </article>
      </Link>
    </div>
  );
};

export default ServiceCard;
