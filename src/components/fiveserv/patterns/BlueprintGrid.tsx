type Props = {
  variant?: "light" | "dark";
  size?: number;
  className?: string;
};

/**
 * BlueprintGrid — fine technical grid overlay.
 * variant="light" → dark lines on light backgrounds
 * variant="dark"  → gold lines on dark backgrounds
 * Absolute-positioned, pointer-events-none.
 */
export const BlueprintGrid = ({ variant = "light", size = 24, className = "" }: Props) => {
  const stroke = variant === "dark" ? "rgba(255,215,0,0.05)" : "rgba(44,62,80,0.06)";
  const id = `blueprint-grid-${variant}-${size}`;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke={stroke}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
};

export default BlueprintGrid;
