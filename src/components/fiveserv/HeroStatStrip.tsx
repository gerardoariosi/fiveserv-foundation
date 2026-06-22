const STATS = [
  { value: "300+", label: "Units Completed" },
  { value: "50+", label: "Communities" },
  { value: "18", label: "Cities Served" },
  { value: "24/7", label: "Emergency Response" },
  { value: "5-Day", label: "Make-Ready Guarantee" },
];

export const HeroStatStrip = () => {
  return (
    <section
      aria-label="FiveServ Property Solutions key stats"
      className="bg-brand-black"
      style={{
        borderTop: "1px solid rgba(255,215,0,0.35)",
        borderBottom: "1px solid rgba(255,215,0,0.35)",
      }}
    >
      <div className="container py-6 sm:py-7">
        <ul className="grid grid-cols-2 gap-y-5 sm:grid-cols-5 sm:gap-y-0">
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className="flex flex-col items-center text-center sm:border-l sm:first:border-l-0"
              style={{ borderColor: "rgba(255,215,0,0.25)" }}
            >
              <span
                className="font-display text-2xl sm:text-3xl font-bold leading-none"
                style={{ color: "#FFD700" }}
              >
                {s.value}
              </span>
              <span className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-wider text-gray-300">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroStatStrip;
