import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "gold" | "dark" | "ghost-light" | "ghost-dark";
type Size = "md" | "lg";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
};

const VARIANT: Record<Variant, string> = {
  gold: "bg-brand-gold text-brand-black hover:bg-[hsl(51,100%,45%)]",
  dark: "bg-brand-black text-white hover:bg-black",
  "ghost-light": "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
  "ghost-dark": "border-2 border-white text-white hover:bg-white hover:text-brand-black",
};

const SIZE: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

/**
 * CTAButton — unified pill button with shimmer + arrow slide.
 * Renders Link (to), anchor (href) or button (onClick).
 */
export const CTAButton = ({
  children,
  to,
  href,
  onClick,
  variant = "gold",
  size = "md",
  showArrow = true,
  className = "",
  type = "button",
  target,
  rel,
}: Props) => {
  const cls = `group btn-shimmer inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 ${VARIANT[variant]} ${SIZE[size]} ${className}`;
  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} className={cls} target={target} rel={rel}>{inner}</a>;
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
};

export default CTAButton;
