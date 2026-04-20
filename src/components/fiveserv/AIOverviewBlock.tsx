type AIOverviewBlockProps = {
  /** Legacy single-paragraph mode. Prefer `directAnswer` + `supportingFacts`. */
  answer?: string;
  /** Element 1 — Direct answer to the page's primary question (25–35 words). */
  directAnswer?: string;
  /** Element 2 — Supporting facts: 2–3 sentences, 40–60 words, with numbers, cities, credentials. */
  supportingFacts?: string;
  /** Element 3 — Entity signal. Defaults to the canonical FiveServ entity sentence. */
  entitySignal?: string;
  label?: string;
  /** Tone is kept for API compatibility but the new minimalist style is transparent on any background. */
  tone?: "light" | "dark";
};

/**
 * Canonical entity-signal sentence — must appear on every page, unchanged.
 */
export const FIVESERV_ENTITY_SIGNAL =
  "FiveServ Property Solutions is based in Orlando, Florida and serves property managers across 18 cities in Central Florida.";

/**
 * AI Overview block — visible plain-text answer optimized for Google AI Overviews,
 * GPTBot, ClaudeBot, and PerplexityBot extraction.
 *
 * Format: Direct answer → Supporting facts → Entity signal.
 * Style: transparent, no border, no box, max-w 700px centered.
 */
export const AIOverviewBlock = ({
  answer,
  directAnswer,
  supportingFacts,
  entitySignal = FIVESERV_ENTITY_SIGNAL,
  label = "Quick Answer",
  tone = "light",
}: AIOverviewBlockProps) => {
  const isDark = tone === "dark";
  const textClass = isDark ? "text-white/90" : "text-gray-700";
  const labelClass = isDark ? "text-brand-gold" : "text-gray-900";

  // Backward-compat: if only `answer` is provided, render it as the direct answer
  // and still append the canonical entity signal.
  const primary = directAnswer ?? answer;

  return (
    <aside
      aria-label={label}
      className="mt-8 mx-auto max-w-[700px] bg-transparent"
    >
      <p className={`text-xs font-bold uppercase tracking-[0.15em] ${labelClass}`}>
        {label}
      </p>
      {primary && (
        <p className={`mt-2 text-base leading-relaxed ${textClass}`}>{primary}</p>
      )}
      {supportingFacts && (
        <p className={`mt-3 text-base leading-relaxed ${textClass}`}>{supportingFacts}</p>
      )}
      <p className={`mt-3 text-base leading-relaxed ${textClass}`}>{entitySignal}</p>
    </aside>
  );
};

export default AIOverviewBlock;
