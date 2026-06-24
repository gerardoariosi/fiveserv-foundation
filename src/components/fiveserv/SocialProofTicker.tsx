import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * SocialProofTicker — daily-randomized "X property managers requested a quote today".
 * Number is deterministic per UTC day (no API), range 2–7.
 */
const getDailyCount = () => {
  const seed = Math.floor(Date.now() / 86400000);
  const x = Math.sin(seed) * 10000;
  const frac = x - Math.floor(x);
  return 2 + Math.floor(frac * 6); // 2..7
};

export const SocialProofTicker = () => {
  const count = getDailyCount();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        top: "calc(var(--banner-h, 32px) + var(--header-h, 80px))",
        fontFamily: "Arial, sans-serif",
        fontSize: "13px",
      }}
      className={`fixed inset-x-0 z-30 h-10 transition-all duration-300 hidden md:flex items-center justify-center gap-2 px-3 text-white ${
        isHome && !scrolled ? "bg-transparent" : "bg-brand-black"
      }`}
    >
      <span
        aria-hidden="true"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "9999px",
          backgroundColor: "#FFD700",
          display: "inline-block",
          animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        }}
      />
      <span className="text-xs sm:text-sm">
        <span style={{ color: "#FFD700", fontWeight: 700 }}>{count}</span>{" "}
        property managers requested a quote today
      </span>
    </div>
  );
};

export default SocialProofTicker;
