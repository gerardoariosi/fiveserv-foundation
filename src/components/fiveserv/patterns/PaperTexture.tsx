type Props = {
  opacity?: number;
  tint?: string;
  className?: string;
};

/**
 * PaperTexture — SVG fractal noise for warm tactile background.
 * Absolute-positioned overlay, pointer-events-none.
 */
export const PaperTexture = ({
  opacity = 0.03,
  tint = "#FAF7F0",
  className = "",
}: Props) => {
  const id = "paper-noise";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{ backgroundColor: tint }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
        <rect width="100%" height="100%" filter={`url(#${id})`} opacity={opacity} />
      </svg>
    </div>
  );
};

export default PaperTexture;
