import { Link } from "react-router-dom";
import { FileText, ClipboardCheck, ClipboardList } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";
import SectionHeading from "./SectionHeading";

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
      <div ref={ref} className="container reveal py-16 lg:py-24">
        <SectionHeading eyebrow="Free Tools">
          Three free tools for <span className="text-brand-gold">property managers</span>.
        </SectionHeading>
        <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">No pitch. No catch. Just useful.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {OFFERS.map((o) => (
            <article
              key={o.title}
              className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-gold hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                <o.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-black">{o.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{o.description}</p>
              <Link
                to={o.href}
                className="cta-dark mt-6 inline-block rounded-md px-5 py-2.5 text-center text-sm font-bold uppercase tracking-wide"
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
