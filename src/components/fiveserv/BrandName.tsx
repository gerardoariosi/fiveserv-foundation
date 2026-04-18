/**
 * BrandName — renders "FiveServ" with a gold "F" and the rest in either
 * white (variant="light", for dark backgrounds) or gray-900
 * (variant="dark", for white/light backgrounds).
 *
 * IMPORTANT: only use this in visible JSX. Never use it inside
 * meta titles, descriptions, JSON-LD, alt text, aria-labels, sitemap,
 * robots.txt or llms.txt. For those, keep the plain string from `SITE.brand`.
 */

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export const BrandName = ({ variant = "light", className }: Props) => (
  <span className={className} style={{ whiteSpace: "nowrap" }}>
    <span className="text-brand-gold font-bold text-[brand-gold-hover]">F</span>
    <span className={variant === "light" ? "text-white" : "text-gray-900"}>iveServ</span>
  </span>
);

export default BrandName;
