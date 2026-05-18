import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  subtext?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

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
      className={`max-w-3xl mb-6 ${alignCls} ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {eyebrow && (
        <p className="text-gray-900 text-[13px] font-black uppercase tracking-[0.15em] mb-4">
          — {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-gray-900 text-4xl lg:text-5xl leading-[1.1]">
        {children}
      </h2>
      {subtext && (
        <p className={`mt-5 text-lg leading-[1.75] text-gray-600 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>{subtext}</p>
      )}
    </div>
  );
};

export default SectionHeading;
