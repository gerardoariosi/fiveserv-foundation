import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  image?: string;
};

/**
 * ServiceCard — premium look: white card, gold border on hover, dark icon badge with gold ring.
 */
export const ServiceCard = ({ icon: Icon, title, description, href, cta }: ServiceCardProps) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-[0_12px_36px_rgba(255,215,0,0.18)]">
      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-black shadow-md ring-2 ring-brand-gold/40 transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-7 w-7 text-brand-gold" strokeWidth={1.75} />
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
  );
};

export default ServiceCard;
