import BlueprintGrid from "../patterns/BlueprintGrid";

export type TrustStat = { value: string; label: string };

const DEFAULT_STATS: TrustStat[] = [
  { value: "1,200+", label: "Jobs Completed" },
  { value: "50+", label: "Property Managers" },
  { value: "18", label: "Cities Served" },
  { value: "24/7", label: "Emergency Response" },
];

/**
 * TrustStrip — dark band with 4 Fraunces stats + blueprint gold grid overlay.
 */
export const TrustStrip = ({
  stats = DEFAULT_STATS,
  tone = "dark",
}: {
  stats?: TrustStat[];
  tone?: "dark" | "cream";
}) => {
  const dark = tone === "dark";
  return (
    <section
      className="relative overflow-hidden border-y"
      style={{
        background: dark ? "#1A1A1A" : "#FAF7F0",
        borderColor: dark ? "rgba(255,215,0,0.15)" : "rgba(0,0,0,0.06)",
      }}
    >
      {dark && <BlueprintGrid variant="dark" />}
      <div className="container relative z-10 py-12 sm:py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i > 0 ? "sm:border-l" : ""}`}
              style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
            >
              <div
                className="font-display text-4xl font-bold sm:text-5xl"
                style={{ color: dark ? "#FFD700" : "#1A1A1A" }}
              >
                {s.value}
              </div>
              <div
                className="mt-2 font-semibold text-[10px] font-medium uppercase tracking-[0.2em]"
                style={{ color: dark ? "rgba(255,255,255,0.6)" : "rgba(26,26,26,0.55)" }}
              >
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
