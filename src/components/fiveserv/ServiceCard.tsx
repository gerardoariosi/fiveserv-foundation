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
    <article className="hover-card group rounded-lg border border-brand-gold/20 bg-white p-8 hover:border-brand-gold hover:shadow-md">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-2xl text-brand-black">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
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
