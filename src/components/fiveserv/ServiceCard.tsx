import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  image?: string;
  index?: number;
};

export const ServiceCard = ({ icon: Icon, title, description, href, cta, index = 0 }: ServiceCardProps) => {
  const { ref, visible } = useScrollReveal();
  const delay = index * 80;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-gold/40">
        <div className="relative inline-flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-7 w-7 text-brand-black" strokeWidth={1.75} />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-brand-black">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700">{description}</p>
        <Link
          to={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-black transition-colors hover:text-brand-gold"
        >
          {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </article>
    </div>
  );
};

export default ServiceCard;
