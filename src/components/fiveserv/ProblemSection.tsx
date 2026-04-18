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
    <section className="section-light-gray">
      <div ref={ref} className="container reveal py-16 lg:py-24">
        <SectionHeading eyebrow="The Problem">
          Managing a Make-Ready Shouldn't Require{" "}
          <span className="text-brand-gold">5 Different Vendors.</span>
        </SectionHeading>

        <p className="mt-6 max-w-3xl text-xl font-bold text-brand-black sm:text-2xl">
          The average make-ready takes <span className="text-brand-gold">10+ days</span> when you coordinate vendors yourself.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PAINS.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border-l-4 border-brand-gold bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <XCircle className="h-9 w-9 text-red-500" />
              <h3 className="mt-4 font-display text-xl font-bold text-brand-black">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-bold text-brand-black">
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
