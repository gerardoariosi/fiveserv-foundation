import { AlertTriangle, AlertOctagon, Clock4 } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";
import SectionHeading from "./SectionHeading";

const PAINS = [
  {
    icon: AlertOctagon,
    title: "Too Many Vendors. Zero Coordination.",
    description: "5 calls to schedule one unit turn. Painters. Cleaners. Plumbers. Electricians. Inspectors. You're the project manager.",
  },
  {
    icon: AlertTriangle,
    title: "Multiple Invoices. Impossible to Report.",
    description: "5 invoices per unit. Asset owners want one number. You spend hours reconciling.",
  },
  {
    icon: Clock4,
    title: "No Accountability. Everyone Blames Someone Else.",
    description: "Painter blames cleaner. Cleaner blames repairs. No single point of contact. The unit sits empty.",
  },
];

export const ProblemSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section style={{ backgroundColor: "#FAFAF8" }}>
      <div ref={ref} className="container reveal py-20 lg:py-20" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="text-center font-bold uppercase mb-3" style={{ color: "#FFD700", letterSpacing: "0.15em", fontSize: 11 }}>
          — The Problem
        </p>
        <SectionHeading
          subtext={
            <>
              The average make-ready takes <span className="font-bold text-gray-900">10+ days</span> when you coordinate vendors yourself.
            </>
          }
        >
          Managing a Make-Ready Shouldn't Require{" "}
          <span className="text-gray-900">5 Different Vendors.</span>
        </SectionHeading>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PAINS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="bg-white p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  borderLeft: "3px solid #FFD700",
                  borderRadius: "0 8px 8px 0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <Icon className="h-8 w-8" style={{ color: "#FFD700" }} strokeWidth={2.25} />
                <h3 className="mt-4 font-display text-xl font-bold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{p.description}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-lg font-bold text-gray-900">
          Sound familiar?{" "}
          <a href="#solution" className="text-brand-gold underline underline-offset-4 hover:opacity-80">
            There is a better way.
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
