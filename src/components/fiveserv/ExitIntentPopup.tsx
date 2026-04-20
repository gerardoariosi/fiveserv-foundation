import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const KEY = "exit_intent_shown";
const SUPPRESSED_PATHS = ["/thank-you-b2b", "/thank-you-residential", "/contact"];

type Offer = {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
};

const titleCase = (slug: string) =>
  slug
    .replace(/-/g, " ")
    .replace(/\bfl\b/i, "")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const getOffer = (pathname: string): Offer | null => {
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";

  if (SUPPRESSED_PATHS.some((p) => path.startsWith(p))) return null;

  if (path === "/" || path === "/make-ready") {
    return {
      headline: "Before you go — grab your free checklist",
      subtext:
        "Our 40-point Make-Ready Checklist used by property managers across Central Florida.",
      ctaLabel: "Download Free Checklist →",
      ctaHref: "/make-ready#form",
    };
  }

  if (path === "/maintenance") {
    return {
      headline: "Before you go — get our Vendor Scorecard",
      subtext:
        "See exactly what to look for in a maintenance vendor before you sign anything.",
      ctaLabel: "Get Free Vendor Scorecard →",
      ctaHref: "/#form",
    };
  }

  // City pages: /maintenance-[city]-fl
  const cityMatch = path.match(/^\/maintenance-([a-z0-9-]+)-fl$/);
  if (cityMatch) {
    const city = titleCase(cityMatch[1]);
    return {
      headline: `Before you go — get a free quote for ${city}`,
      subtext: `Our team covers ${city} and responds within 2 business hours.`,
      ctaLabel: "Get a Free Quote →",
      ctaHref: "/contact",
    };
  }

  const servicePages = [
    "/plumbing",
    "/electrical",
    "/hvac",
    "/drywall",
    "/painting",
    "/flooring",
    "/carpentry",
    "/cleaning",
    "/renovations",
    "/residential",
  ];
  if (servicePages.some((p) => path === p || path.startsWith(p + "/"))) {
    return {
      headline: "Before you go — we offer free estimates",
      subtext:
        "No commitment. No surprises. One call and our team handles everything.",
      ctaLabel: "Get a Free Estimate →",
      ctaHref: "/contact",
    };
  }

  return {
    headline: "Before you go — one call handles everything",
    subtext:
      "Make-ready in 5 days. Guaranteed in writing. One invoice. No excuses.",
    ctaLabel: "Get a Free Quote →",
    ctaHref: "/contact",
  };
};

const isMobile = () =>
  typeof window !== "undefined" &&
  (window.matchMedia?.("(max-width: 768px)").matches ?? window.innerWidth < 768);

/**
 * ExitIntentPopup — page-aware exit-intent offer.
 * Desktop: cursor leaves through top. Mobile: 45s inactivity or back-button.
 * Shows once per session.
 */
export const ExitIntentPopup = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mobile, setMobile] = useState(false);
  const offer = getOffer(pathname);

  useEffect(() => {
    if (!offer) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY) === "1") return;

    let inactivityTimer: number | undefined;
    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      if (sessionStorage.getItem(KEY) === "1") return;
      triggered = true;
      sessionStorage.setItem(KEY, "1");
      setOpen(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 10 && !e.relatedTarget) trigger();
    };

    const resetInactivity = () => {
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
      inactivityTimer = window.setTimeout(trigger, 45000);
    };

    const onPopState = () => {
      if (isMobile()) trigger();
    };

    if (isMobile()) {
      // Push a state we can pop back to, so back-button triggers popup once.
      window.history.pushState({ exitGuard: true }, "");
      window.addEventListener("popstate", onPopState);
      ["touchstart", "scroll", "click", "keydown"].forEach((evt) =>
        window.addEventListener(evt, resetInactivity, { passive: true }),
      );
      resetInactivity();
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("popstate", onPopState);
      ["touchstart", "scroll", "click", "keydown"].forEach((evt) =>
        window.removeEventListener(evt, resetInactivity),
      );
      if (inactivityTimer) window.clearTimeout(inactivityTimer);
    };
  }, [pathname, offer]);

  const close = () => {
    sessionStorage.setItem(KEY, "1");
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 200);
  };

  if (!offer || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-headline"
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        opacity: closing ? 0 : 1,
        transition: "opacity 200ms ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "#1A1A1A",
          border: "2px solid #FFD700",
          borderRadius: "12px",
          padding: "32px 28px",
          color: "#FFFFFF",
          transform: closing ? "scale(0.8)" : "scale(1)",
          opacity: closing ? 0 : 1,
          transition: closing
            ? "transform 200ms ease, opacity 200ms ease"
            : "transform 300ms ease, opacity 300ms ease",
          animation: closing ? undefined : "exitPopupIn 300ms ease",
        }}
      >
        <style>{`
          @keyframes exitPopupIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>

        <button
          type="button"
          aria-label="Close"
          onClick={close}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "transparent",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <X size={20} />
        </button>

        <h2
          id="exit-intent-headline"
          className="font-display"
          style={{
            color: "#FFFFFF",
            fontSize: "24px",
            lineHeight: 1.2,
            fontWeight: 900,
            margin: 0,
            paddingRight: "24px",
          }}
        >
          {offer.headline}
        </h2>

        <p
          style={{
            marginTop: "12px",
            color: "#FFFFFF",
            opacity: 0.85,
            fontFamily: "Arial, sans-serif",
            fontSize: "15px",
            lineHeight: 1.5,
          }}
        >
          {offer.subtext}
        </p>

        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
          <Link
            to={offer.ctaHref}
            onClick={close}
            style={{
              display: "inline-block",
              backgroundColor: "#FFD700",
              color: "#1A1A1A",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "9999px",
              textDecoration: "none",
              fontFamily: "Arial, sans-serif",
              fontSize: "15px",
              textAlign: "center",
              width: "100%",
              maxWidth: "320px",
            }}
          >
            {offer.ctaLabel}
          </Link>

          <button
            type="button"
            onClick={close}
            style={{
              background: "transparent",
              border: "none",
              color: "#FFFFFF",
              opacity: 0.6,
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "Arial, sans-serif",
            }}
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
