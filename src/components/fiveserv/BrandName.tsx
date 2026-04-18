/**
 * BrandName — renders "FiveServ" with a gold "F" and the rest INHERITING
 * the surrounding text color (currentColor). This guarantees "iveServ"
 * always matches whatever text wraps it — white on dark backgrounds,
 * dark on light backgrounds, gray inside muted paragraphs, etc.
 *
 * The `variant` prop is kept for backwards compatibility but is no longer
 * needed — color is inherited automatically.
 *
 * IMPORTANT: only use this in visible JSX. Never use it inside
 * meta titles, descriptions, JSON-LD, alt text, aria-labels, etc.
 * For those, keep the plain string from `SITE.brand`.
 */

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export const BrandName = ({ className }: Props) => (
  <span className={className} style={{ whiteSpace: "nowrap" }}>
    <span className="text-brand-gold font-bold">F</span>
    <span style={{ color: "currentColor" }}>iveServ</span>
  </span>
);

export default BrandName;
