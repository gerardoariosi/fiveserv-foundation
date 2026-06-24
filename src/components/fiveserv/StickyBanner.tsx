import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Star, X } from "lucide-react";

const KEY = "fiveserv-banner-dismissed";
const EVT = "fiveserv:banner-toggle";
const HEIGHT = "36px";

export const StickyBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isVisible = sessionStorage.getItem(KEY) !== "1";
    setVisible(isVisible);
    document.documentElement.style.setProperty("--banner-h", isVisible ? HEIGHT : "0px");
  }, []);

  if (!visible) return null;

  const items = [
    { icon: Star, text: "50+ Property Managers Trust Us", short: "50+ PMs Trust Us" },
    { icon: DollarSign, text: "Free Quote — Same Day Response", short: "Same-Day Quote" },
    { icon: Clock, text: "24/7 Emergency Service", short: "24/7 Emergency" },
  ];

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 bg-brand-black text-brand-white"
      style={{ height: HEIGHT, borderBottom: "1px solid rgba(255,215,0,0.25)" }}
    >
      <div className="container flex h-full items-center gap-2">
        <Link
          to="/contact"
          aria-label="Free quote — trusted by 50+ property managers, 24/7 emergency service"
          className="flex flex-1 items-center justify-center gap-2 sm:gap-6 text-[11px] font-semibold uppercase tracking-wide overflow-hidden whitespace-nowrap"
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <span
                key={it.text}
                className={`items-center gap-1.5 whitespace-nowrap ${i === 0 ? "flex" : "hidden sm:flex"}`}
              >
                {i > 0 && (
                  <span aria-hidden className="h-3 w-px bg-brand-gold/40 hidden sm:inline-block mr-3" />
                )}
                <Icon className="h-3.5 w-3.5 text-brand-gold shrink-0" strokeWidth={2.5} />
                <span className="hidden sm:inline">{it.text}</span>
                <span className="sm:hidden">{it.short}</span>
              </span>
            );
          })}
          {/* Mobile-only condensed dual highlight */}
          <span className="flex items-center gap-1.5 sm:hidden whitespace-nowrap">
            <span aria-hidden className="h-3 w-px bg-brand-gold/40" />
            <Clock className="h-3.5 w-3.5 text-brand-gold shrink-0" strokeWidth={2.5} />
            <span>24/7</span>
          </span>
        </Link>
        <button
          aria-label="Dismiss banner"
          onClick={() => {
            sessionStorage.setItem(KEY, "1");
            document.documentElement.style.setProperty("--banner-h", "0px");
            window.dispatchEvent(new CustomEvent(EVT));
            setVisible(false);
          }}
          className="shrink-0 inline-flex h-9 w-9 items-center justify-center text-brand-white/70 hover:text-brand-gold transition-colors -mr-2"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
