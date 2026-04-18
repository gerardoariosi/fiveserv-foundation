import { Link } from "react-router-dom";
import { FileText, ClipboardCheck, ClipboardList } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";

const OFFERS = [
  {
    icon: FileText,
    title: "Make-Ready Checklist PDF",
    description: "The 47-item checklist we use on every unit turn.",
    cta: "Download Free",
    href: "/contact?offer=checklist",
  },
  {
    icon: ClipboardCheck,
    title: "Vendor Scorecard",
    description: "Score your current vendors in 10 minutes. Spot leaks fast.",
    cta: "Get the Scorecard",
    href: "/contact?offer=scorecard",
  },
  {
    icon: ClipboardList,
    title: "Free Property Assessment",
    description: "30-minute on-site walkthrough. No obligation.",
    cta: "Book Assessment",
    href: "/contact?offer=assessment",
  },
];

export const LeadMagnetSection = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section-light-gray">
      <div ref={ref} className="container reveal py-20">
        <h2 className="font-display text-3xl text-brand-black sm:text-4xl">
          Three free tools for <span className="text-brand-gold">property managers</span>.
        </h2>
        <p className="mt-3 max-w-2xl text-gray-700">No pitch. No catch. Just useful.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {OFFERS.map((o) => (
            <article key={o.title} className="hover-card rounded-lg border border-brand-gold/20 bg-white p-8 hover:border-brand-gold hover:shadow-md">
              <o.icon className="h-10 w-10 text-brand-gold" />
              <h3 className="mt-6 font-display text-xl text-brand-black">{o.title}</h3>
              <p className="mt-2 text-gray-600">{o.description}</p>
              <Link
                to={o.href}
                className="mt-6 inline-block cta-gold rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wide"
              >
                {o.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
