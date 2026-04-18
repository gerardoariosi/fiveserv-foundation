import { useReveal } from "@/hooks/use-fiveserv";
import BrandName from "@/components/fiveserv/BrandName";

const PILLARS = [
  { number: "5", unit: "DAYS", description: "Every make-ready in 5 business days. Guaranteed in writing." },
  { number: "5", unit: "PEOPLE", description: "Five family members with our name on every job." },
  { number: "5", unit: "STARS", description: "Every property better than when we arrived." },
  { number: "1", unit: "CALL", description: "One number. Our team. Everything handled." },
  { number: "0", unit: "EXCUSES", description: "We show up. We finish. We deliver." },
];

export const FivePillars = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-brand-gold text-brand-black">
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl text-brand-black sm:text-4xl">The <BrandName variant="dark" /> Promise</h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <div key={p.unit}>
              <div className="font-display text-7xl leading-none text-brand-black">
                {p.number}
              </div>
              <div className="mt-1 font-display text-xl tracking-wider text-brand-black">{p.unit}</div>
              <p className="mt-3 text-sm font-bold text-brand-black/80">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FivePillars;
