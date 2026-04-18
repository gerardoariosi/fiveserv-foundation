type AIOverviewBlockProps = {
  answer: string; // 40-60 words, direct answer
  label?: string;
};

/**
 * AI Overview block — visible 40-60 word direct answer at the top of each page.
 * Designed to be scraped by AI search overviews (Google AI Overview, Perplexity, etc.).
 */
export const AIOverviewBlock = ({ answer, label = "Quick Answer" }: AIOverviewBlockProps) => {
  return (
    <aside
      aria-label={label}
      className="mt-8 rounded-lg border-l-4 border-brand-gold bg-white p-6 shadow-sm"
    >
      <p className="text-xs font-bold uppercase tracking-wide text-brand-gold">{label}</p>
      <p className="mt-2 text-gray-700">{answer}</p>
    </aside>
  );
};

export default AIOverviewBlock;
