import SchemaOrg from "@/lib/SchemaOrg";
import SectionHeading from "./SectionHeading";

export type QAItem = { q: string; a: string };

type Props = {
  items: QAItem[];
  eyebrow?: string;
  title?: string;
  emitSchema?: boolean;
};

/**
 * VisibleQA — visible (non-collapsed) Q&A block.
 * Each question is an H3 with a 2-sentence answer rendered in HTML.
 * Optionally emits FAQPage JSON-LD via SchemaOrg.
 */
export const VisibleQA = ({
  items,
  eyebrow = "Quick Answers",
  title = "Common Questions, Answered",
  emitSchema = true,
}: Props) => {
  return (
    <section className="bg-white">
      <div className="container py-20 lg:py-28">
        <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          {items.map((item, i) => (
            <article key={i} className="border-l-4 border-brand-gold pl-5">
              <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">{item.q}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-700">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
      {emitSchema && <SchemaOrg faqs={items} />}
    </section>
  );
};

export default VisibleQA;
