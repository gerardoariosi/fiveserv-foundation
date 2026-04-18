import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";

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
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl text-brand-black sm:text-5xl text-center">
          One Call. <span className="text-brand-gold">One Team.</span> One Invoice.
        </h2>

        <div className="mt-12 overflow-hidden rounded-lg border border-brand-gold/20">
          <div className="grid grid-cols-2">
            {/* Left header */}
            <div className="bg-brand-light p-5 text-center">
              <h3 className="font-display text-lg text-gray-500">Without FiveServ</h3>
            </div>
            {/* Right header — gold border elevated */}
            <div className="bg-white p-5 text-center border-l-4 border-brand-gold relative">
              <h3 className="font-display text-lg text-brand-gold">With FiveServ</h3>
            </div>

            {ROWS.map(([left, right], i) => (
              <div key={i} className="contents">
                <div className={`flex items-start gap-3 p-5 ${i % 2 === 0 ? "bg-brand-light" : "bg-white"}`}>
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-gray-500">{left}</span>
                </div>
                <div className={`flex items-start gap-3 border-l-4 border-brand-gold p-5 ${i % 2 === 0 ? "bg-white" : "bg-brand-light"}`}>
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                  <span className="font-bold text-brand-black">{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700">Ready to simplify your make-ready?</p>
          <Link to="/contact" className="mt-4 inline-block cta-gold rounded-md px-6 py-3 font-bold uppercase tracking-wide">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
