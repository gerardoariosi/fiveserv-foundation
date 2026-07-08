import { ReactNode } from "react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  subtext?: ReactNode;
  className?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

/**
 * SectionHeading — editorial heading with gold-line eyebrow + Fraunces display.
 * eyebrow renders as: [40px gold line] MONO UPPERCASE LABEL
 */
export const SectionHeading = ({
  eyebrow,
  children,
  subtext,
  className = "",
  align = "center",
  tone = "light",
}: Props) => {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const { ref, visible } = useScrollReveal();
  const titleColor = tone === "dark" ? "text-white" : "text-brand-black";
  const subtextColor = tone === "dark" ? "text-white/70" : "text-gray-600";
  const eyebrowColor = tone === "dark" ? "text-white/60" : "text-brand-black/60";

  return (
    <div
      ref={ref}
      className={`flex max-w-3xl flex-col ${alignCls} mb-8 ${className}`}
      style={revealStyle(visible)}
    >
      {eyebrow && (
        <div className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="block h-px w-10 bg-brand-gold" />
          <span className={`font-semibold text-[11px] font-medium uppercase tracking-[0.18em] ${eyebrowColor}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-display font-bold text-4xl lg:text-5xl leading-[1.1] tracking-tight ${titleColor}`}>
        {children}
      </h2>
      {subtext && (
        <p className={`mt-5 max-w-2xl text-lg leading-[1.7] ${subtextColor} ${align === "center" ? "mx-auto" : ""}`}>
          {subtext}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
