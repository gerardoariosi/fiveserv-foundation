export type TrustStat = { value: string; label: string };

const DEFAULT_STATS: TrustStat[] = [
  { value: "1,200+", label: "Jobs Completed" },
  { value: "50+", label: "Property Managers" },
  { value: "18", label: "Cities Served" },
  { value: "24/7", label: "Emergency Response" },
];

/**
 * TrustStrip — cream strip with 4 stats. Sits between hero and content.
 * Inspired by stansac.com trust band.
 */
export const TrustStrip = ({ stats = DEFAULT_STATS }: { stats?: TrustStat[] }) => {
  return (
    <section style={{ background: "#FAF8F3" }} className="border-y border-black/5">
      <div className="container py-10 sm:py-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-brand-black">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-black/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
