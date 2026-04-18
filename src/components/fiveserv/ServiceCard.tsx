import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  /** Kept for API compatibility — Servpro-style cards use a gold icon circle, not a photo. */
  image?: string;
};

/**
 * ServiceCard — Servpro-style: white card, gold icon circle on top, lifts on hover.
 */
export const ServiceCard = ({ icon: Icon, title, description, href, cta }: ServiceCardProps) => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-xl">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 font-display text-xl font-black text-gray-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:underline"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
};

export default ServiceCard;
