import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
  /** Optional photo on top (4/3 aspect). Falls back to gold icon tile if missing or fails to load. */
  image?: string;
};

export const ServiceCard = ({ icon: Icon, title, description, href, cta, image }: ServiceCardProps) => {
  const [imgOk, setImgOk] = useState<boolean>(!!image);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:border-brand-gold hover:shadow-lg">
      {/* Photo / icon tile — 4/3 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-light">
        {image && imgOk ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-gold/15 to-brand-gold/5">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-gold text-brand-black shadow-md">
              <Icon className="h-10 w-10" />
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-black text-brand-black">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
        <Link
          to={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:underline"
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default ServiceCard;
