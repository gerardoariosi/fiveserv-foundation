import { ReactNode } from "react";
import BlueprintGrid from "../patterns/BlueprintGrid";
import PaperTexture from "../patterns/PaperTexture";

type Bg = "white" | "dark" | "cream" | "blueprint";
type Pattern = "blueprint-light" | "blueprint-dark" | "paper" | "none";
type Padding = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  bg?: Bg;
  pattern?: Pattern;
  padding?: Padding;
  className?: string;
  id?: string;
};

const BG_STYLES: Record<Bg, { background: string; color?: string }> = {
  white: { background: "#FFFFFF", color: "#1A1A1A" },
  dark: { background: "#1A1A1A", color: "#FFFFFF" },
  cream: { background: "#FAF7F0", color: "#1A1A1A" },
  blueprint: { background: "#FFFFFF", color: "#1A1A1A" },
};

const PADDING: Record<Padding, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

/**
 * SectionShell — consistent section wrapper with brand backgrounds
 * and optional pattern overlays (blueprint grid or paper texture).
 */
export const SectionShell = ({
  children,
  bg = "white",
  pattern = "none",
  padding = "lg",
  className = "",
  id,
}: Props) => {
  const bgStyle = BG_STYLES[bg];
  const autoPattern: Pattern =
    pattern === "none" && bg === "blueprint" ? "blueprint-light" : pattern;

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={bgStyle}
    >
      {autoPattern === "blueprint-light" && <BlueprintGrid variant="light" />}
      {autoPattern === "blueprint-dark" && <BlueprintGrid variant="dark" />}
      {autoPattern === "paper" && <PaperTexture />}
      <div className={`container relative z-10 ${PADDING[padding]}`}>{children}</div>
    </section>
  );
};

export default SectionShell;
