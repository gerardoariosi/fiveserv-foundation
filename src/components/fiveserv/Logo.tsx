import { useState } from "react";

/**
 * Logo — FS image with automatic wordmark fallback.
 * Tries the PNG first; if it fails to load, renders inline branded wordmark.
 *
 * variant="dark"  → for use on light/white backgrounds (iveServ in #1A1A1A)
 * variant="light" → for use on dark backgrounds (iveServ in #FFFFFF)
 */
type Props = {
  variant?: "light" | "dark";
  className?: string;
  imgClassName?: string;
  showTagline?: boolean;
};

export const Logo = ({
  variant = "light",
  className = "",
  imgClassName = "h-10 w-auto object-contain",
  showTagline = false,
}: Props) => {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src="/images/logo%20FS%20.png"
        alt="FiveServ"
        className={`${imgClassName} ${className}`}
        onError={() => setFailed(true)}
      />
    );
  }

  // Inline wordmark fallback
  const iveServColor = variant === "light" ? "text-white" : "text-brand-black";
  const taglineColor = variant === "light" ? "text-gray-300" : "text-gray-700";

  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="font-display font-black text-2xl tracking-tight">
        <span className="text-brand-gold">F</span>
        <span className={iveServColor}>iveServ</span>
      </span>
      {showTagline && (
        <span className={`mt-1 text-[10px] font-bold uppercase tracking-[0.2em] ${taglineColor}`}>
          Property Solutions
        </span>
      )}
    </span>
  );
};

export default Logo;
