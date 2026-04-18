import { XCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";

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
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl text-brand-black sm:text-4xl">
          Managing a Make-Ready Shouldn't Require <span className="text-brand-gold">5 Different Vendors.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-2xl font-bold text-brand-black">
          The average make-ready takes <span className="text-brand-gold">10+ days</span> when you coordinate vendors yourself.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PAINS.map((p) => (
            <article key={p.title} className="hover-card rounded-lg border border-brand-gold/20 bg-white p-6 hover:border-brand-gold hover:shadow-md">
              <XCircle className="h-10 w-10 text-destructive" />
              <h3 className="mt-4 font-display text-xl text-brand-black">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>
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
