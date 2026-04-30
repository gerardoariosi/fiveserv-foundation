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
      <div className="container py-28 lg:py-32">
        <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-gray-100 px-1 transition-colors data-[state=open]:border-brand-gold"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-gray-900 [&>svg]:text-gray-900">
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
