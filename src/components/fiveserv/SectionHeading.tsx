import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  subtext?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

/**
 * SectionHeading — Servpro-style: gold eyebrow + bold gray-900 H2 (text-4xl/5xl) + optional gray subtext.
 * Defaults to centered. Pass `<span className="text-gray-900">…</span>` inside children for accents.
 */
export const SectionHeading = ({
  eyebrow,
  children,
  subtext,
  className = "",
  align = "center",
}: Props) => {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`max-w-3xl ${alignCls} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {eyebrow && (
        <p className="text-gray-900 text-xs font-medium uppercase tracking-[0.12em] mb-3">
          — {eyebrow}
        </p>
      )}
      <h2 className="text-gray-900 text-4xl lg:text-5xl">
        {children}
      </h2>
      {subtext && (
        <p className="mt-4 text-lg leading-[1.75] text-gray-700">{subtext}</p>
      )}
    </div>
  );
};

export default SectionHeading;
