/**
 * BrandName — renders "FiveServ" with a gold "F" and the rest in the
 * surrounding text color. Use `variant="light"` on dark backgrounds
 * (white "iveServ"), `variant="dark"` on light backgrounds (gray-900).
 *
 * IMPORTANT: only use this in visible JSX. Never use it inside
 * meta titles, descriptions, JSON-LD, alt text, aria-labels, etc.
 * For those, keep the plain string from `SITE.brand`.
 */

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export const BrandName = ({ variant = "light", className }: Props) => (
  <span className={className}>
    <span className="text-brand-gold font-bold">F</span>
    <span className={variant === "light" ? "text-white" : "text-gray-900"}>iveServ</span>
  </span>
);

export default BrandName;
