import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";

const PILLARS = [
  { number: "5–7", unit: "DAYS", description: "We complete most make-readys in 5–7 business days. Guaranteed in writing." },
  { number: "5", unit: "PEOPLE", description: "A family with our name on every job." },
  { number: "5", unit: "STARS", description: "Every property better than when we arrived." },
  { number: "1", unit: "CALL", description: "One number. Our team. Everything handled." },
  { number: "0", unit: "EXCUSES", description: "We show up. We finish. We deliver." },
];

export const FivePillars = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section style={{ backgroundColor: "#FAFAF8" }}>
      <div ref={ref} className="container reveal" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="text-center font-bold uppercase mb-3" style={{ color: "#FFD700", letterSpacing: "0.15em", fontSize: 11 }}>
          — The Promise
        </p>
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-brand-black">
          The <span className="text-brand-gold">F</span>iveServ Promise
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p) => (
            <div
              key={p.unit}
              className="bg-white p-6 pb-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                borderRadius: 8,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div className="font-display text-7xl leading-none font-black" style={{ color: "#FFD700" }}>
                {p.number}
              </div>
              <div className="mt-1 font-display text-base font-bold tracking-[0.15em] text-brand-black">{p.unit}</div>
              <p className="mt-3 text-sm text-gray-500">{p.description}</p>
              <span
                className="absolute left-0 bottom-0 h-[2px] w-full"
                style={{ backgroundColor: "#FFD700" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all"
            style={{ backgroundColor: "#FFD700", color: "#1A1A1A" }}
          >
            Get Your Written Work Guarantee <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FivePillars;
