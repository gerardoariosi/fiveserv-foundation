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
  /**
   * light  → for dark backgrounds  (gold "F" + white "iveServ")
   * dark   → for light/white backgrounds (gold "F" + gray-900 "iveServ")
   * onGold → for gold backgrounds (black "F" + black "iveServ")
   */
  variant?: "light" | "dark" | "onGold";
  className?: string;
};

export const BrandName = ({ variant = "light", className }: Props) => {
  const fColor = variant === "onGold" ? "text-brand-black" : "text-brand-gold";
  const restColor =
    variant === "light"
      ? "text-brand-white"
      : variant === "onGold"
        ? "text-brand-black"
        : "text-gray-900";

  return (
    <span className={className} style={{ whiteSpace: "nowrap" }}>
      <span className={`font-bold ${fColor}`}>F</span>
      <span className={restColor}>iveServ</span>
    </span>
  );
};

export default BrandName;
