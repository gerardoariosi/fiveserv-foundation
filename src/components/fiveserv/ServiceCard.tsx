import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const ServiceCard = ({ icon: Icon, title, description, href, cta }: ServiceCardProps) => {
  return (
    <article className="hover-card group rounded-lg border border-brand-gray bg-brand-black p-8">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-2xl text-brand-white">{title}</h3>
      <p className="mt-3 text-brand-white/80">{description}</p>
      <Link
        to={href}
        className="mt-6 inline-flex items-center gap-2 font-bold text-brand-gold group-hover:underline"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
};

export default ServiceCard;
