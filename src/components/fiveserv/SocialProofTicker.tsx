/**
 * SocialProofTicker — daily-randomized "X property managers requested a quote today".
 * Number is deterministic per UTC day (no API), range 2–7.
 */
const getDailyCount = () => {
  const seed = Math.floor(Date.now() / 86400000);
  // Simple deterministic hash → 2..7
  const x = Math.sin(seed) * 10000;
  const frac = x - Math.floor(x);
  return 2 + Math.floor(frac * 6); // 2..7
};

export const SocialProofTicker = () => {
  const count = getDailyCount();

  return (
    <div
      style={{
        backgroundColor: "#1A1A1A",
        fontFamily: "Arial, sans-serif",
        fontSize: "13px",
      }}
      className="w-full text-white py-2 px-3 flex items-center justify-center gap-2"
    >
      <span
        aria-hidden="true"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "9999px",
          backgroundColor: "#FFD700",
          display: "inline-block",
          animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        }}
      />
      <span>
        <span style={{ color: "#FFD700", fontWeight: 700 }}>{count}</span>{" "}
        property managers requested a quote today
      </span>
    </div>
  );
};

export default SocialProofTicker;
