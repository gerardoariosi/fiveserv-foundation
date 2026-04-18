import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Seo from "@/lib/Seo";
import SchemaOrg from "@/lib/SchemaOrg";
import { SITE } from "@/lib/site-config";
import {
  GENERAL_FAQS,
  FAQ_CATEGORIES,
  type FaqCategory,
} from "@/lib/general-faqs";

type Filter = "all" | FaqCategory;

const FaqPage = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const title = `Property Maintenance FAQ | ${SITE.brand} Property Solutions Central Florida`;
  const description = `Property maintenance FAQ — everything property managers need to know. Make-ready, maintenance, CapEx, and getting started with ${SITE.brand} across Central Florida.`;

  const visible = useMemo(
    () => (filter === "all" ? GENERAL_FAQS : GENERAL_FAQS.filter((f) => f.category === filter)),
    [filter],
  );

  // Group for headings (always render the full content of the active filter)
  const grouped = useMemo(() => {
    return FAQ_CATEGORIES.map((cat) => ({
      ...cat,
      items: visible.filter((f) => f.category === cat.id),
    })).filter((g) => g.items.length > 0);
  }, [visible]);

  // Defaults: all items expanded so answers are visible without a click
  const defaultOpen = visible.map((_, i) => `faq-${i}`);

  return (
    <>
      <Seo title={title} description={description} path="/faq" />
      {/* Always emit FAQPage schema with ALL 30 questions, regardless of filter */}
      <SchemaOrg
        faqs={GENERAL_FAQS.map((f) => ({ q: f.q, a: f.a }))}
        breadcrumbs={[
          { name: "Home", url: SITE.url },
          { name: "FAQ", url: `${SITE.url}/faq` },
        ]}
      />

      {/* 1. Hero */}
      <section className="bg-brand-black pt-32 pb-12">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-gold">
            — {SITE.brand} Property Solutions
          </p>
          <h1 className="mt-3 max-w-4xl font-display font-black text-4xl text-white sm:text-5xl lg:text-6xl">
            Property Maintenance FAQ —{" "}
            <span className="block text-brand-gold">
              Everything Property Managers Need to Know
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-700">
            30 answers across make-ready, maintenance, CapEx, and getting started.
            All answers visible — no clicks required.
          </p>
        </div>
      </section>

      {/* 2. Filter buttons */}
      <section className="sticky top-16 z-30 bg-brand-black/95 backdrop-blur border-y border-brand-gray">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter FAQs by category">
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
              All ({GENERAL_FAQS.length})
            </FilterButton>
            {FAQ_CATEGORIES.map((cat) => {
              const count = GENERAL_FAQS.filter((f) => f.category === cat.id).length;
              return (
                <FilterButton
                  key={cat.id}
                  active={filter === cat.id}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.label} ({count})
                </FilterButton>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FAQ groups */}
      <section className="bg-gray-50">
        <div className="container py-16 space-y-12">
          {grouped.map((group) => (
            <div key={group.id}>
              <h2 className="font-display font-semibold text-2xl text-gray-900 sm:text-3xl">
                <span className="text-gray-900">{group.label}</span>{" "}
                <span className="text-gray-500 text-lg">({group.items.length})</span>
              </h2>
              <Accordion
                type="multiple"
                defaultValue={defaultOpen}
                className="mt-6"
              >
                {group.items.map((f, i) => (
                  <AccordionItem
                    key={`${group.id}-${i}`}
                    value={`faq-${group.id}-${i}`}
                    className="border-brand-gray"
                  >
                    <AccordionTrigger className="text-left text-gray-900 hover:text-amber-700">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Belt-and-suspenders: always render every Q&A in plain HTML so crawlers
             see all 30 even if Accordion content rendering is skipped. */}
          <div className="sr-only" aria-hidden="true">
            {GENERAL_FAQS.map((f, i) => (
              <div key={`crawl-${i}`}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Final */}
      <section className="bg-brand-gold">
        <div className="container py-16 text-center">
          <h2 className="font-display font-bold text-3xl text-gray-900 sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-3 text-lg text-gray-900/80">
            Get a free quote in 24 hours — or call us right now.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-amber-700 hover:bg-brand-black/90"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-gray-900 hover:bg-brand-black hover:text-amber-700"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const FilterButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={`rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
      active
        ? "bg-brand-gold text-gray-900"
        : "border border-gray-100 bg-white shadow-sm text-gray-900 hover:border-brand-gold hover:text-amber-700"
    }`}
  >
    {children}
  </button>
);

export default FaqPage;
