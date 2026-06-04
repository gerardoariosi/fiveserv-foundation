import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";

import BrandName from "@/components/fiveserv/BrandName";

import type { ReactNode } from "react";

const ROWS: [string, ReactNode][] = [
  ["5+ vendors to coordinate", <>1 call to <BrandName variant="dark" /></>],
  ["10+ days average turnaround", "5 business days guaranteed"],
  ["Multiple invoices per unit", "One clean invoice"],
  ["You chase every vendor", "We handle everything"],
  ["No accountability", "We own the result"],
];

export const SolutionSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="solution"
      style={{
        backgroundColor: "#1A1A1A",
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2728%27 height=%2728%27 viewBox=%270 0 28 28%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27rgba(255,215,0,0.18)%27%3E%3Cpath d=%27M7 3 Q7.6 6.4 10 7 Q7.6 7.6 7 11 Q6.4 7.6 4 7 Q6.4 6.4 7 3 Z%27/%3E%3Cpath d=%27M21 17 Q21.6 20.4 24 21 Q21.6 21.6 21 25 Q20.4 21.6 18 21 Q20.4 20.4 21 17 Z%27/%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: "28px 28px",
      }}
    >
      <div ref={ref} className="container reveal" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="text-center font-bold uppercase mb-3" style={{ color: "#FFD700", letterSpacing: "0.15em", fontSize: 11 }}>
          — The Solution
        </p>
        <h2 className="text-center font-display font-bold text-white" style={{ fontSize: "clamp(2rem,4vw,2.625rem)" }}>
          One Call. <span className="text-brand-gold">One Team.</span> One Invoice.
        </h2>
        <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
          One trusted partner that owns the entire turn — start to finish.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Without */}
          <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h3 className="font-display text-lg font-bold text-gray-400">Without <BrandName variant="light" /></h3>
            <ul className="mt-5 space-y-3">
              {ROWS.map(([left]) => (
                <li key={left} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
                  <span className="text-gray-300">{left}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With — elevated */}
          <div
            className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,215,0,0.06)",
              border: "1px solid rgba(255,215,0,0.5)",
              boxShadow: "0 8px 30px rgba(255,215,0,0.08)",
            }}
          >
            <h3 className="font-display text-lg font-bold text-brand-gold">With <BrandName variant="light" /></h3>
            <ul className="mt-5 space-y-3">
              {ROWS.map(([_left, right], i) => (
                <li key={`r-${i}`} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                  <span className="font-bold text-white">{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300">Ready to simplify your make-ready?</p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-lg px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
            style={{ backgroundColor: "#FFD700", color: "#1A1A1A" }}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
