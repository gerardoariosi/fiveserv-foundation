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
    <section className="bg-gray-50">
      <div ref={ref} className="container reveal py-24 lg:py-32">
        <SectionHeading
          eyebrow="Free Tools"
          subtext="No pitch. No catch. Just useful."
        >
          Three free tools for <span className="text-gray-900">property managers</span>.
        </SectionHeading>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {OFFERS.map((o) => (
            <article
              key={o.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold hover:shadow-xl"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-700/10 text-gray-900">
                <o.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-gray-900">{o.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{o.description}</p>
              <Link
                to={o.href}
                className="mt-6 inline-block rounded-lg bg-brand-black px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-gray-800"
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
