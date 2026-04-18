import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SchemaOrg from "@/lib/SchemaOrg";

type Faq = { q: string; a: string };

type FaqAccordionProps = {
  title?: string;
  faqs: Faq[];
  /** Set false if FAQ JSON-LD is rendered elsewhere on the page */
  emitSchema?: boolean;
};

/**
 * Accordion of FAQs. ALL answers are rendered in HTML (open or closed)
 * so search engines can read them — Radix Accordion keeps content in DOM.
 * Emits FAQPage JSON-LD by default.
 */
export const FaqAccordion = ({ title = "Frequently Asked Questions", faqs, emitSchema = true }: FaqAccordionProps) => {
  return (
    <section className="section-light">
      <div className="container py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-brand-black">{title}</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-gray-200">
              <AccordionTrigger className="text-left text-brand-black hover:text-brand-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {emitSchema && <SchemaOrg faqs={faqs} />}
    </section>
  );
};

export default FaqAccordion;
