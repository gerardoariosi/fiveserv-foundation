type Props = {
  color?: string;
  size?: number;
  stroke?: number;
  className?: string;
  /** When true, brackets fade in only on group-hover of the parent. */
  showOnHover?: boolean;
};

/**
 * CornerBrackets — four ⌐ ¬ ⌎ ⌏ style corner marks.
 * Place inside a `relative` (or `group`) parent.
 */
export const CornerBrackets = ({
  color = "#FFD700",
  size = 16,
  stroke = 2,
  className = "",
  showOnHover = true,
}: Props) => {
  const base =
    "pointer-events-none absolute transition-opacity duration-300";
  const vis = showOnHover ? "opacity-0 group-hover:opacity-100" : "opacity-100";
  const s = `${size}px`;
  const w = `${stroke}px`;
  const c = color;
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
      {/* top-left */}
      <span
        className={`${base} ${vis} left-0 top-0`}
        style={{ width: s, height: s, borderLeft: `${w} solid ${c}`, borderTop: `${w} solid ${c}` }}
      />
      {/* top-right */}
      <span
        className={`${base} ${vis} right-0 top-0`}
        style={{ width: s, height: s, borderRight: `${w} solid ${c}`, borderTop: `${w} solid ${c}` }}
      />
      {/* bottom-left */}
      <span
        className={`${base} ${vis} bottom-0 left-0`}
        style={{ width: s, height: s, borderLeft: `${w} solid ${c}`, borderBottom: `${w} solid ${c}` }}
      />
      {/* bottom-right */}
      <span
        className={`${base} ${vis} bottom-0 right-0`}
        style={{ width: s, height: s, borderRight: `${w} solid ${c}`, borderBottom: `${w} solid ${c}` }}
      />
    </div>
  );
};

export default CornerBrackets;
