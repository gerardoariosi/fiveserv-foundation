import { ReactNode } from "react";

export type SectionWrapperProps = {
  children: ReactNode;
  tone?: "white" | "cream" | "black";
  className?: string;
  id?: string;
};

/**
 * SectionWrapper — consistent vertical rhythm + alternating tones.
 * tone="cream" uses #FAF8F3 for the Stan's-style breathing room.
 */
export const SectionWrapper = ({
  children,
  tone = "white",
  className = "",
  id,
}: SectionWrapperProps) => {
  const bg =
    tone === "cream"
      ? { background: "#FAF8F3" }
      : tone === "black"
        ? { background: "#1A1A1A" }
        : undefined;
  return (
    <section id={id} style={bg} className={`${tone === "white" ? "bg-white" : ""} ${className}`}>
      <div className="container py-20 sm:py-28">{children}</div>
    </section>
  );
};

export default SectionWrapper;
