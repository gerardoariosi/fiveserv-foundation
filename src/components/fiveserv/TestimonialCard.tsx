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
    <article className="hover-card rounded-lg border border-brand-gray bg-brand-black p-8">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
        ))}
      </div>
      <blockquote className="mt-4 text-brand-white/90">“{quote}”</blockquote>
      <div className="mt-6 flex items-center gap-4">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold font-display text-brand-black">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-bold text-brand-white">{name}</div>
          <div className="text-sm text-brand-white/70">{title} · {company}</div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
