import { useCounter } from "@/hooks/use-fiveserv";

type Props = {
  value: number | string;
  suffix?: string;
  label: string;
  tone?: "light" | "dark";
  animate?: boolean;
};

/**
 * StatBlock — massive Fraunces number over mono uppercase label.
 * When value is numeric and animate, counts up on scroll.
 */
export const StatBlock = ({
  value,
  suffix = "",
  label,
  tone = "light",
  animate = true,
}: Props) => {
  const numeric = typeof value === "number";
  const dark = tone === "dark";
  const counter = useCounter(numeric && animate ? (value as number) : 0, 1600);

  const displayed = numeric && animate ? counter.value : value;

  return (
    <div className="text-center">
      <div
        className="font-display font-bold leading-none tracking-tight"
        style={{
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          color: dark ? "#FFD700" : "#1A1A1A",
        }}
      >
        <span ref={numeric && animate ? counter.ref : undefined}>{displayed}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div
        className="mt-3 font-semibold text-[10px] font-medium uppercase tracking-[0.22em]"
        style={{ color: dark ? "rgba(255,255,255,0.6)" : "rgba(26,26,26,0.55)" }}
      >
        {label}
      </div>
    </div>
  );
};

export default StatBlock;
