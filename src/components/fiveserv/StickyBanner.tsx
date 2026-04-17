import { useEffect, useState } from "react";
import { X } from "lucide-react";

const KEY = "fiveserv-banner-dismissed";

export const StickyBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setVisible(sessionStorage.getItem(KEY) !== "1");
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-brand-gold text-brand-black">
      <div className="container flex items-center justify-between gap-4 py-2 text-xs sm:text-sm font-bold">
        <p className="flex-1 text-center">
          5-Day Make-Ready Guarantee · Central Florida · 24/7 · One Call · One Invoice
        </p>
        <button
          aria-label="Dismiss"
          onClick={() => {
            sessionStorage.setItem(KEY, "1");
            setVisible(false);
          }}
          className="shrink-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
