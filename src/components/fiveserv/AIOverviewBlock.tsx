type AIOverviewBlockProps = {
  answer: string; // 40-60 words, direct answer
  label?: string;
  /** When the block sits on a dark hero, set tone="dark" so it stays readable. Defaults to "light". */
  tone?: "light" | "dark";
};

/**
 * AI Overview block — visible 40-60 word direct answer.
 * Designed to be scraped by AI search overviews.
 */
export const AIOverviewBlock = ({ answer, label = "Quick Answer", tone = "light" }: AIOverviewBlockProps) => {
  const isDark = tone === "dark";
  return (
    <aside
      aria-label={label}
      className={`mt-8 rounded-xl border-l-4 border-brand-gold p-6 shadow-sm ${
        isDark ? "bg-brand-white/5 backdrop-blur" : "bg-white"
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{label}</p>
      <p className={`mt-2 leading-relaxed ${isDark ? "text-brand-white/90" : "text-gray-700"}`}>{answer}</p>
    </aside>
  );
};

export default AIOverviewBlock;
