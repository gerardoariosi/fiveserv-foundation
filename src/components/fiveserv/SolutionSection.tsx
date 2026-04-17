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
    <section id="solution" className="bg-brand-black">
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl text-brand-white sm:text-5xl text-center">
          One Call. <span className="text-brand-gold">One Team.</span> One Invoice.
        </h2>

        <div className="mt-12 overflow-hidden rounded-lg border border-brand-gray">
          <div className="grid grid-cols-2">
            {/* Left header */}
            <div className="bg-brand-gray p-5 text-center">
              <h3 className="font-display text-lg text-brand-white/80">Without FiveServ</h3>
            </div>
            {/* Right header — gold border elevated */}
            <div className="bg-brand-black p-5 text-center border-l-4 border-brand-gold relative">
              <h3 className="font-display text-lg text-brand-gold">With FiveServ</h3>
            </div>

            {ROWS.map(([left, right], i) => (
              <div key={i} className="contents">
                <div className={`flex items-start gap-3 p-5 ${i % 2 === 0 ? "bg-brand-gray/30" : "bg-brand-gray/10"}`}>
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-brand-white/80">{left}</span>
                </div>
                <div className={`flex items-start gap-3 border-l-4 border-brand-gold p-5 ${i % 2 === 0 ? "bg-brand-black" : "bg-brand-gray/20"}`}>
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                  <span className="font-bold text-brand-white">{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-brand-white/80">Ready to simplify your make-ready?</p>
          <Link to="/contact" className="mt-4 inline-block cta-gold rounded-md px-6 py-3 font-bold uppercase tracking-wide">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
