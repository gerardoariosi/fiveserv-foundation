import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  subtext?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

/**
 * SectionHeading — Servpro-style: gold eyebrow + bold gray-900 H2 (text-4xl/5xl) + optional gray subtext.
 * Defaults to centered. Pass `<span className="text-amber-700">…</span>` inside children for accents.
 */
export const SectionHeading = ({
  eyebrow,
  children,
  subtext,
  className = "",
  align = "center",
}: Props) => {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p className="text-amber-700 text-xs font-medium uppercase tracking-[0.12em] mb-3">
          — {eyebrow}
        </p>
      )}
      <h2 className="text-gray-900 font-display font-bold text-4xl lg:text-5xl leading-tight">
        {children}
      </h2>
      {subtext && (
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{subtext}</p>
      )}
    </div>
  );
};

export default SectionHeading;
