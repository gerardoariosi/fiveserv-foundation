type Props = {
  variant?: "light" | "dark";
  /** kept for API compatibility, unused in the artisan variant */
  size?: number;
  className?: string;
};

/**
 * BlueprintGrid — retuned as artisan plaster + hand-drawn gold thread.
 * variant="dark"  → warm grain on dark surfaces, gold thread accent
 * variant="light" → subtle plaster grain on cream surfaces, gold thread accent
 * Absolute-positioned, pointer-events-none.
 */
export const BlueprintGrid = ({ variant = "light", className = "" }: Props) => {
  const isDark = variant === "dark";
  const id = `plaster-${variant}`;
  const grainOpacity = isDark ? 0.08 : 0.05;
  const threadOpacity = isDark ? 0.18 : 0.14;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* Plaster grain */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ mixBlendMode: isDark ? "screen" : "multiply" }}
      >
        <defs>
          <filter id={id}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter={`url(#${id})`} opacity={grainOpacity} />
      </svg>

      {/* Hand-drawn gold thread */}
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ opacity: threadOpacity, transform: "scale(1.1)" }}
      >
        <path
          d="M-50,850 C150,800 300,950 500,850 C700,750 850,900 1050,850"
          stroke="#FFD700"
          strokeWidth="0.6"
          fill="none"
          style={{ filter: "blur(0.5px)" }}
        />
        <path
          d="M-20,852 C180,802 330,952 530,852 C730,752 880,902 1080,852"
          stroke={isDark ? "#FAF9F6" : "#6B6B6B"}
          strokeWidth="0.2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BlueprintGrid;
