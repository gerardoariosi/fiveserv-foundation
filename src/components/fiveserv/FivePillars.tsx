import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";

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
    <section className="bg-white border-y border-brand-gold/25">
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl text-brand-black sm:text-4xl">The <span className="text-brand-black font-bold">F</span><span className="text-brand-black">iveServ</span> Promise</h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <div key={p.unit}>
              <div className="font-display text-7xl leading-none text-brand-gold">
                {p.number}
              </div>
              <div className="mt-1 font-display text-xl tracking-wider text-brand-black">{p.unit}</div>
              <p className="mt-3 text-sm font-bold text-gray-500">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-black px-8 py-3 text-sm font-semibold text-brand-gold hover:bg-gray-900 transition-colors">
            Get Your 5-Day Make-Ready <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FivePillars;
