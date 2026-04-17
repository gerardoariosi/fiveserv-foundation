import { FIVE_PILLARS } from "@/lib/site-config";
import { useReveal } from "@/hooks/use-fiveserv";

export const FivePillars = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-brand-gold text-brand-black">
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl sm:text-4xl">Five Promises. One Family.</h2>
        <p className="mt-3 max-w-2xl text-brand-black/80">Five Venezuelan-American family members. One promise on every job.</p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {FIVE_PILLARS.map((p) => (
            <div key={p.number}>
              <div className="font-display text-7xl leading-none text-brand-black">{p.number}</div>
              <h3 className="mt-4 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-brand-black/80">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FivePillars;
