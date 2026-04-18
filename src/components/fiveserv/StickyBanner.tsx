import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const KEY = "fiveserv-banner-dismissed";
const EVT = "fiveserv:banner-toggle";

export const StickyBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isVisible = sessionStorage.getItem(KEY) !== "1";
    setVisible(isVisible);
    document.documentElement.style.setProperty("--banner-h", isVisible ? "32px" : "0px");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-8 bg-brand-gold text-brand-black">
      <div className="container flex h-full items-center justify-between gap-4 text-xs font-bold">
        <Link to="/contact" className="flex-1 truncate text-center hover:underline">
          5-Day Make-Ready Guarantee — Central Florida 24/7 — One Call. One Invoice.
        </Link>
        <button
          aria-label="Dismiss banner"
          onClick={() => {
            sessionStorage.setItem(KEY, "1");
            document.documentElement.style.setProperty("--banner-h", "0px");
            window.dispatchEvent(new CustomEvent(EVT));
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
