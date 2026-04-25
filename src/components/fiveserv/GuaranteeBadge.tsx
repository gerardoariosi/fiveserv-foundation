type Size = "sm" | "md" | "lg";

type Props = {
  size?: Size;
  className?: string;
};

const SIZE_PX: Record<Size, number> = {
  sm: 80,
  md: 120,
  lg: 160,
};

/**
 * GuaranteeBadge — circular dark badge with gold border advertising the
 * 5-Day Make-Ready Guarantee. Pure presentation, no logic.
 */
export const GuaranteeBadge = ({ size = "md", className = "" }: Props) => {
  const px = SIZE_PX[size];
  // Scale typography proportionally to the chosen size.
  const line1 = Math.round(px * 0.2);
  const line2 = Math.round(px * 0.1);
  const accent = Math.round(px * 0.07);

  return (
    <div
      role="img"
      aria-label="5-Day Make-Ready Guarantee"
      className={`inline-flex flex-col items-center justify-center rounded-full text-center select-none ${className}`}
      style={{
        width: px,
        height: px,
        backgroundColor: "#1A1A1A",
        border: "3px solid #FFD700",
        boxShadow:
          "0 0 0 1px rgba(255,215,0,0.15), 0 0 24px rgba(255,215,0,0.35), 0 8px 24px rgba(0,0,0,0.35)",
        padding: Math.round(px * 0.08),
        lineHeight: 1.05,
      }}
    >
      <span
        style={{
          color: "#FFD700",
          fontWeight: 800,
          fontSize: line1,
          letterSpacing: "0.02em",
        }}
      >
        5-DAY
      </span>
      <span
        style={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: line2,
          letterSpacing: "0.08em",
          marginTop: Math.round(px * 0.03),
        }}
      >
        MAKE-READY
      </span>
      <span
        style={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: line2,
          letterSpacing: "0.08em",
        }}
      >
        GUARANTEE
      </span>
      <span
        aria-hidden="true"
        style={{
          marginTop: Math.round(px * 0.04),
          width: accent,
          height: accent,
          backgroundColor: "#FFD700",
          transform: "rotate(45deg)",
          boxShadow: "0 0 8px rgba(255,215,0,0.6)",
        }}
      />
    </div>
  );
};

export default GuaranteeBadge;
