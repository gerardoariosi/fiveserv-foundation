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
    <section className="section-light">
      <div className="container py-16 lg:py-24">
        <SectionHeading eyebrow={eyebrow}>{title}</SectionHeading>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-gray-100 bg-white px-5 transition-colors data-[state=open]:border-brand-gold data-[state=open]:bg-brand-gold/5"
            >
              <AccordionTrigger className="text-left text-brand-black font-semibold hover:text-brand-gold [&>svg]:text-brand-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {emitSchema && <SchemaOrg faqs={faqs} />}
    </section>
  );
};

export default FaqAccordion;
