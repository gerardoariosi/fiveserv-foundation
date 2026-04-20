import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const KEY = "exit_intent_shown";
const SUPPRESSED_PATHS = ["/thank-you-b2b", "/thank-you-residential", "/contact"];

type Offer = {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const getOffer = (pathname: string): Offer | null => {
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";

  if (SUPPRESSED_PATHS.some((p) => path.startsWith(p))) return null;

  if (path === "/" || path === "/make-ready") {
    return {
      headline: "Before you go — grab your free checklist",
      body: "Our 40-point Make-Ready Checklist used by property managers across Central Florida.",
      ctaLabel: "Download Free Checklist →",
      ctaHref: "/make-ready",
    };
  }

  if (path === "/maintenance") {
    return {
      headline: "Before you go — get our Vendor Scorecard",
      body: "See exactly what to look for before you sign with any maintenance vendor.",
      ctaLabel: "Get Free Vendor Scorecard →",
      ctaHref: "/#lead-magnets",
    };
  }

  // City pages: /maintenance-[city]-fl
  if (/^\/maintenance-[a-z0-9-]+-fl$/.test(path)) {
    return {
      headline: "Get a free quote before you go",
      body: "Our team covers your area and responds within 2 business hours.",
      ctaLabel: "Get a Free Quote →",
      ctaHref: "/contact",
    };
  }

  const servicePages = [
    "/plumbing", "/electrical", "/hvac", "/drywall", "/painting",
    "/flooring", "/carpentry", "/cleaning", "/renovations", "/residential",
  ];
  if (servicePages.some((p) => path === p || path.startsWith(p + "/"))) {
    return {
      headline: "We offer free estimates — no commitment",
      body: "One call and our team handles everything. No surprises on the invoice.",
      ctaLabel: "Get a Free Estimate →",
      ctaHref: "/contact",
    };
  }

  return {
    headline: "One call handles everything",
    body: "Make-ready in 5 days. Guaranteed in writing. One invoice. No excuses.",
    ctaLabel: "Get a Free Quote →",
    ctaHref: "/contact",
  };
};

const isMobileViewport = () =>
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
  const [hoverCta, setHoverCta] = useState(false);
  const [hoverNoThanks, setHoverNoThanks] = useState(false);
  const [hoverClose, setHoverClose] = useState(false);
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
      setMobile(isMobileViewport());
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
      if (isMobileViewport()) trigger();
    };

    if (isMobileViewport()) {
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
    }, 180);
  };

  if (!offer || !open) return null;

  const padding = mobile ? "28px" : "48px";
  const headlineSize = mobile ? "22px" : "26px";

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
        backgroundColor: "rgba(0,0,0,0.90)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        opacity: closing ? 0 : 1,
        transition: closing ? "opacity 180ms ease-out" : "opacity 200ms ease-out",
      }}
    >
      <style>{`
        @keyframes exitPopupIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: mobile ? "90vw" : "480px",
          maxWidth: "480px",
          backgroundColor: "#1A1A1A",
          border: "1px solid #FFD700",
          borderRadius: "12px",
          padding,
          paddingTop: `calc(${padding} + 2px)`,
          color: "#FFFFFF",
          boxShadow: "none",
          overflow: "hidden",
          transform: closing ? "scale(0.92)" : "scale(1)",
          opacity: closing ? 0 : 1,
          transition: closing
            ? "transform 180ms ease-out, opacity 180ms ease-out"
            : undefined,
          animation: closing ? undefined : "exitPopupIn 250ms ease-out",
        }}
      >
        {/* Top gold accent line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            backgroundColor: "#FFD700",
          }}
        />

        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          onMouseEnter={() => setHoverClose(true)}
          onMouseLeave={() => setHoverClose(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            padding: 0,
            opacity: hoverClose ? 0.6 : 1,
            transition: "opacity 150ms ease-out",
            lineHeight: 0,
          }}
        >
          <X size={20} />
        </button>

        {/* Headline */}
        <h2
          id="exit-intent-headline"
          className="font-display"
          style={{
            color: "#FFFFFF",
            fontSize: headlineSize,
            lineHeight: 1.2,
            fontWeight: 700,
            margin: 0,
            paddingRight: "32px",
          }}
        >
          {offer.headline}
        </h2>

        {/* Body */}
        <p
          style={{
            marginTop: "12px",
            marginBottom: 0,
            color: "#FFFFFF",
            opacity: 0.8,
            fontFamily: "Arial, sans-serif",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          {offer.body}
        </p>

        {/* Divider */}
        <div
          aria-hidden="true"
          style={{
            height: "1px",
            backgroundColor: "#2D2D2D",
            margin: "20px 0",
          }}
        />

        {/* CTA button */}
        <Link
          to={offer.ctaHref}
          onClick={close}
          onMouseEnter={() => setHoverCta(true)}
          onMouseLeave={() => setHoverCta(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: hoverCta ? "#E6C200" : "#FFD700",
            color: "#1A1A1A",
            fontWeight: 700,
            height: "52px",
            width: "100%",
            borderRadius: "9999px",
            textDecoration: "none",
            fontFamily: "Arial, sans-serif",
            fontSize: "15px",
            transition: "background-color 150ms ease-out",
            boxShadow: "none",
          }}
        >
          {offer.ctaLabel}
        </Link>

        {/* No thanks */}
        <button
          type="button"
          onClick={close}
          onMouseEnter={() => setHoverNoThanks(true)}
          onMouseLeave={() => setHoverNoThanks(false)}
          style={{
            display: "block",
            margin: "16px auto 0",
            background: "transparent",
            border: "none",
            color: "#FFFFFF",
            opacity: 0.45,
            fontSize: "13px",
            fontFamily: "Arial, sans-serif",
            cursor: "pointer",
            padding: 0,
            textDecoration: hoverNoThanks ? "underline" : "none",
          }}
        >
          No thanks
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
