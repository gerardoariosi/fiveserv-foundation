import { Star } from "lucide-react";
import CornerBrackets from "./patterns/CornerBrackets";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo?: string;
};

export const TestimonialCard = ({ quote, name, title, company, photo }: TestimonialCardProps) => {
  return (
    <article
      className="group relative flex h-full flex-col bg-white p-8 transition-shadow duration-300"
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "10px",
        boxShadow: "var(--shadow-card)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
    >
      <CornerBrackets />

      {/* Oversized Fraunces quote mark */}
      <div
        aria-hidden="true"
        className="font-display leading-none text-brand-gold"
        style={{ fontSize: "4rem", marginBottom: "-1rem" }}
      >
        “
      </div>

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 font-display text-lg leading-[1.6] text-brand-black">
        {quote}
      </blockquote>

      <div
        className="mt-6 flex items-center gap-4 border-t pt-5"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        {photo ? (
          <img
            src={photo}
            alt={`${name} — ${title} at ${company} — FiveServ Property Solutions client testimonial`}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold font-display font-bold text-brand-black">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-brand-black">{name}</div>
          <div className="font-semibold text-[11px] uppercase tracking-wider text-brand-black/55">
            {title} · {company}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
