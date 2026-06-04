import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SchemaOrg from "@/lib/SchemaOrg";
import SectionHeading from "./SectionHeading";

type Faq = { q: string; a: string };

type FaqAccordionProps = {
  title?: string;
  eyebrow?: string;
  faqs: Faq[];
  emitSchema?: boolean;
};

export const FaqAccordion = ({
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  faqs,
  emitSchema = true,
}: FaqAccordionProps) => {
  return (
    <section className="bg-white">
      <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-[#E5E7EB] px-1 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-gray-900 [&>svg]:text-brand-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pt-3 text-base leading-relaxed text-gray-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {emitSchema && <SchemaOrg faqs={faqs} />}
    </section>
  );
};

export default FaqAccordion;
