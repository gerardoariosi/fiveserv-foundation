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
    <section id="solution" className="bg-white">
      <div ref={ref} className="container reveal py-24 lg:py-32">
        <SectionHeading
          eyebrow="The Solution"
          subtext="One trusted partner that owns the entire turn — start to finish."
        >
          One Call. <span className="text-amber-700">One Team.</span> One Invoice.
        </SectionHeading>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Without */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-display text-lg font-bold text-gray-500">Without FiveServ</h3>
            <ul className="mt-5 space-y-3">
              {ROWS.map(([left]) => (
                <li key={left} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                  <span className="text-gray-900">{left}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With — elevated */}
          <div className="rounded-xl border-2 border-brand-gold bg-white p-6 shadow-lg">
            <h3 className="font-display text-lg font-bold text-amber-700">With FiveServ</h3>
            <ul className="mt-5 space-y-3">
              {ROWS.map(([, right]) => (
                <li key={right} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <span className="font-bold text-gray-900">{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">Ready to simplify your make-ready?</p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-lg bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-gray-800"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
