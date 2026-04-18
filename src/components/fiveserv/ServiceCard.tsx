import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  /** Kept for API compatibility — Servpro-style cards use a thin gold line icon, not a photo. */
  image?: string;
};

/**
 * ServiceCard — Servpro-style: white card, thin border, soft shadow, line icon in brand-gold.
 */
export const ServiceCard = ({ icon: Icon, title, description, href, cta }: ServiceCardProps) => {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
      <Icon className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />
      <h3 className="mt-5 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-[1.75] text-gray-700">{description}</p>
      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand-gold hover:underline"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
};

export default ServiceCard;
