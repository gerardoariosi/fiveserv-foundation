import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, DollarSign, Star, X } from "lucide-react";
import { SITE } from "@/lib/site-config";

const KEY = "fiveserv-banner-dismissed";
const EVT = "fiveserv:banner-toggle";
const HEIGHT_DESKTOP = "40px";
const HEIGHT_MOBILE = "36px";

/**
 * StickyBanner — Stan's-style 3-segment announcement bar.
 * Brand black + gold accents. Three equally-split segments separated by gold dividers,
 * each clickable with a chevron. Mobile shows only the first segment + 24/7.
 */
export const StickyBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isVisible = sessionStorage.getItem(KEY) !== "1";
    setVisible(isVisible);
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    document.documentElement.style.setProperty(
      "--banner-h",
      isVisible ? (isMobile ? HEIGHT_MOBILE : HEIGHT_DESKTOP) : "0px",
    );

    const updateHeight = () => {
      const m = window.matchMedia("(max-width: 640px)").matches;
      const v = sessionStorage.getItem(KEY) !== "1";
      document.documentElement.style.setProperty(
        "--banner-h",
        v ? (m ? HEIGHT_MOBILE : HEIGHT_DESKTOP) : "0px",
      );
    };
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 bg-brand-black text-brand-white"
      style={{
        borderBottom: "1px solid rgba(255,215,0,0.35)",
        boxShadow: "0 1px 0 rgba(0,0,0,0.2)",
      }}
    >
      <div className="container flex h-9 sm:h-10 items-center">
        <div className="flex flex-1 items-stretch text-[11px] sm:text-[12px] font-semibold tracking-wide">
          {/* Segment 1 — Reviews */}
          <Link
            to="/reviews"
            className="group flex flex-1 items-center justify-center gap-2 px-2 hover:text-brand-gold transition-colors"
            aria-label="Read our reviews from 50+ property managers"
          >
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-brand-gold text-brand-gold" />
              ))}
            </span>
            <span className="whitespace-nowrap">
              <span className="hidden sm:inline">Trusted by 50+ Property Managers</span>
              <span className="sm:hidden">50+ PMs Trust Us</span>
            </span>
            <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Divider */}
          <span aria-hidden className="hidden sm:block w-px bg-brand-gold/30 my-1.5" />

          {/* Segment 2 — Free quote */}
          <Link
            to="/contact"
            className="group hidden sm:flex flex-1 items-center justify-center gap-2 px-2 hover:text-brand-gold transition-colors"
            aria-label="Get a free quote — same day response"
          >
            <DollarSign className="h-3.5 w-3.5 text-brand-gold shrink-0" strokeWidth={2.5} />
            <span className="whitespace-nowrap">Free Quote — Same Day Response</span>
            <ChevronRight className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Divider */}
          <span aria-hidden className="block w-px bg-brand-gold/30 my-1.5" />

          {/* Segment 3 — 24/7 */}
          <a
            href={`tel:${SITE.phone}`}
            className="group flex flex-1 items-center justify-center gap-2 px-2 hover:text-brand-gold transition-colors"
            aria-label="Call us — 24/7 emergency service"
          >
            <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-gold shrink-0" strokeWidth={2.5} />
            <span className="whitespace-nowrap">24/7 Emergency Service</span>
          </a>
        </div>

        <button
          aria-label="Dismiss banner"
          onClick={() => {
            sessionStorage.setItem(KEY, "1");
            document.documentElement.style.setProperty("--banner-h", "0px");
            window.dispatchEvent(new CustomEvent(EVT));
            setVisible(false);
          }}
          className="shrink-0 inline-flex h-9 w-8 items-center justify-center text-brand-white/60 hover:text-brand-gold transition-colors -mr-2"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
