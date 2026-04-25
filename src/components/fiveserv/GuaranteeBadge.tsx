type Size = "sm" | "md" | "lg";

type Props = {
  size?: Size;
  className?: string;
};

const sizeMap: Record<Size, number> = {
  sm: 80,
  md: 120,
  lg: 160,
};

/**
 * GuaranteeBadge — premium gold medal seal style badge for the
 * 5-Day Make-Ready Guarantee. Pure inline SVG.
 */
export const GuaranteeBadge = ({ size = "md", className = "" }: Props) => {
  const s = sizeMap[size] ?? 120;
  const cx = s / 2;
  const cy = s / 2;
  const r = s / 2 - 3;
  const innerR = r - s * 0.07;

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="5-Day Make-Ready Guarantee"
      className={className}
    >
      {/* Outer gold ring */}
      <circle cx={cx} cy={cy} r={r} fill="#1A1A1A" stroke="#FFD700" strokeWidth={s * 0.04} />
      {/* Inner gold ring */}
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="#FFD700" strokeWidth={s * 0.015} strokeOpacity="0.5" />
      {/* Stars top */}
      {[-1, 0, 1].map((i) => (
        <text
          key={`top-${i}`}
          x={cx + i * s * 0.13}
          y={cy - s * 0.24}
          textAnchor="middle"
          fontSize={s * 0.09}
          fill="#FFD700"
        >★</text>
      ))}
      {/* 5-DAY large center */}
      <text
        x={cx}
        y={cy - s * 0.04}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="900"
        fontSize={s * 0.22}
        fill="#FFD700"
        letterSpacing="-1"
      >5-DAY</text>
      {/* MAKE-READY */}
      <text
        x={cx}
        y={cy + s * 0.13}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize={s * 0.1}
        fill="#FFFFFF"
        letterSpacing="1"
      >MAKE-READY</text>
      {/* GUARANTEE */}
      <text
        x={cx}
        y={cy + s * 0.25}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize={s * 0.09}
        fill="#FFD700"
        letterSpacing="2"
      >GUARANTEE</text>
      {/* Stars bottom */}
      {[-1, 0, 1].map((i) => (
        <text
          key={`bot-${i}`}
          x={cx + i * s * 0.13}
          y={cy + s * 0.38}
          textAnchor="middle"
          fontSize={s * 0.09}
          fill="#FFD700"
        >★</text>
      ))}
    </svg>
  );
};

export default GuaranteeBadge;
