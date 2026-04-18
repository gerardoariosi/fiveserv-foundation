import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

/**
 * SectionHeading — Aspect-style eyebrow + bold black H2 with gold accent spans.
 * Use inside light sections. Pass `<span className="text-brand-gold">…</span>` for accents.
 */
export const SectionHeading = ({ eyebrow, children, className = "", align = "left" }: Props) => {
  const alignCls = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${alignCls} ${className}`}>
      {eyebrow && (
        <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-brand-black font-display font-black text-3xl lg:text-4xl leading-tight">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeading;
