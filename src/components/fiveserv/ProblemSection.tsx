import { XCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";
import SectionHeading from "./SectionHeading";

const PAINS = [
  {
    title: "Too Many Vendors. Zero Coordination.",
    description: "5 calls to schedule one unit turn. Painters. Cleaners. Plumbers. Electricians. Inspectors. You're the project manager.",
  },
  {
    title: "Multiple Invoices. Impossible to Report.",
    description: "5 invoices per unit. Asset owners want one number. You spend hours reconciling.",
  },
  {
    title: "No Accountability. Everyone Blames Someone Else.",
    description: "Painter blames cleaner. Cleaner blames repairs. No single point of contact. The unit sits empty.",
  },
];

export const ProblemSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-gray-50">
      <div ref={ref} className="container reveal py-24 lg:py-32">
        <SectionHeading
          eyebrow="The Problem"
          subtext={
            <>
              The average make-ready takes <span className="font-bold text-gray-900">10+ days</span> when you coordinate vendors yourself.
            </>
          }
        >
          Managing a Make-Ready Shouldn't Require{" "}
          <span className="text-brand-gold">5 Different Vendors.</span>
        </SectionHeading>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PAINS.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border-l-4 border-red-500 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <XCircle className="h-8 w-8 text-red-500" />
              <h3 className="mt-4 font-display text-xl font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-bold text-gray-900">
          Sound familiar?{" "}
          <a href="#solution" className="text-brand-gold underline underline-offset-4 hover:text-brand-gold-hover">
            There is a better way.
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
