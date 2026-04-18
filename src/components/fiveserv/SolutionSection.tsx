import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";
import SectionHeading from "./SectionHeading";

const ROWS: [string, string][] = [
  ["5+ vendors to coordinate", "1 call to FiveServ"],
  ["10+ days average turnaround", "5 business days guaranteed"],
  ["Multiple invoices per unit", "One clean invoice"],
  ["You chase every vendor", "We handle everything"],
  ["No accountability", "We own the result"],
];

export const SolutionSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="solution" className="section-light">
      <div ref={ref} className="container reveal py-16 lg:py-24">
        <SectionHeading eyebrow="The Solution" align="center" className="mx-auto max-w-3xl">
          One Call. <span className="text-brand-gold">One Team.</span> One Invoice.
        </SectionHeading>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Without */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-display text-lg font-bold text-gray-500">Without FiveServ</h3>
            <ul className="mt-5 space-y-3">
              {ROWS.map(([left]) => (
                <li key={left} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                  <span className="text-gray-600">{left}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With — elevated */}
          <div className="rounded-xl border-2 border-brand-gold bg-white p-6 shadow-md">
            <h3 className="font-display text-lg font-bold text-brand-gold">With FiveServ</h3>
            <ul className="mt-5 space-y-3">
              {ROWS.map(([, right]) => (
                <li key={right} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                  <span className="font-bold text-brand-black">{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700">Ready to simplify your make-ready?</p>
          <Link
            to="/contact"
            className="cta-dark mt-4 inline-block rounded-md px-6 py-3 font-bold uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
