import { FileText, ClipboardCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-fiveserv";
import SectionHeading from "./SectionHeading";
import GhlFormEmbed from "./GhlFormEmbed";

type Variant = "both" | "checklist" | "scorecard";

type Props = {
  /** "both" → homepage (checklist + scorecard). "checklist" → make-ready. "scorecard" → maintenance. */
  variant?: Variant;
};

const CARDS = {
  checklist: {
    icon: FileText,
    title: "Make-Ready Checklist PDF",
    description: "The 47-item checklist we use on every unit turn. Get it free.",
    formVariant: "checklist" as const,
  },
  scorecard: {
    icon: ClipboardCheck,
    title: "Vendor Scorecard",
    description: "Score your current vendors in 10 minutes. Spot leaks fast.",
    formVariant: "scorecard" as const,
  },
};

const HEADING_COPY: Record<Variant, { eyebrow: string; subtext: string; title: React.ReactNode }> = {
  both: {
    eyebrow: "Free Tools",
    subtext: "No pitch. No catch. Just useful.",
    title: (
      <>
        Free tools for <span className="text-gray-900">property managers</span>.
      </>
    ),
  },
  checklist: {
    eyebrow: "Free Download",
    subtext: "The exact 47-item checklist we use on every unit turn.",
    title: (
      <>
        Get the <span className="text-gray-900">Make-Ready Checklist</span>.
      </>
    ),
  },
  scorecard: {
    eyebrow: "Free Tool",
    subtext: "Score your current vendors in 10 minutes. Spot leaks fast.",
    title: (
      <>
        Get the <span className="text-gray-900">Vendor Scorecard</span>.
      </>
    ),
  },
};

export const LeadMagnetSection = ({ variant = "both" }: Props) => {
  const ref = useReveal<HTMLDivElement>();
  const heading = HEADING_COPY[variant];
  const cards =
    variant === "both"
      ? [CARDS.checklist, CARDS.scorecard]
      : [CARDS[variant]];

  return (
    <section className="bg-gray-50">
      <div ref={ref} className="container reveal py-24 lg:py-32">
        <SectionHeading eyebrow={heading.eyebrow} subtext={heading.subtext}>
          {heading.title}
        </SectionHeading>

        <div
          className={`mt-16 grid gap-8 ${
            cards.length === 1 ? "max-w-2xl mx-auto" : "md:grid-cols-2"
          }`}
        >
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-card"
            >
              <c.icon className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-[1.75] text-gray-700">{c.description}</p>
              <div className="mt-6">
                <GhlFormEmbed variant={c.formVariant} className="w-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
