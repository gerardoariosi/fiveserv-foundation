type Props = {
  opacity?: number;
  tint?: string;
  className?: string;
  /** show the hand-drawn gold thread accent */
  thread?: boolean;
};

/**
 * PaperTexture — artisan plaster + optional hand-drawn gold thread.
 * Warm, tactile, editorial. Absolute-positioned overlay, pointer-events-none.
 */
export const PaperTexture = ({
  opacity = 0.04,
  tint = "transparent",
  className = "",
  thread = true,
}: Props) => {
  const id = "plaster-noise";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{ backgroundColor: tint }}
    >
      {/* Plaster / felt grain */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ mixBlendMode: "multiply" }}
      >
        <defs>
          <filter id={id}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter={`url(#${id})`} opacity={opacity} />
      </svg>

      {/* Hand-drawn gold thread — the human gesture */}
      {thread && (
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          style={{ opacity: 0.14, transform: "scale(1.1)" }}
        >
          <path
            d="M-50,850 C150,800 300,950 500,850 C700,750 850,900 1050,850"
            stroke="#FFD700"
            strokeWidth="0.5"
            fill="none"
            style={{ filter: "blur(0.5px)" }}
          />
          <path
            d="M-20,852 C180,802 330,952 530,852 C730,752 880,902 1080,852"
            stroke="#6B6B6B"
            strokeWidth="0.2"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
};

export default PaperTexture;
