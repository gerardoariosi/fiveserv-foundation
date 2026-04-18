import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo?: string;
};

export const TestimonialCard = ({ quote, name, title, company, photo }: TestimonialCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold hover:shadow-xl">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 italic leading-relaxed text-gray-700">"{quote}"</blockquote>
      <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-4">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold font-display font-black text-brand-black">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{title} · {company}</div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
