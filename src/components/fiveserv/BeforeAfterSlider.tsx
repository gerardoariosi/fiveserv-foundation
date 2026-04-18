import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

/**
 * BeforeAfterSlider
 * Drag (mouse + touch) or use ← → keys to compare before/after photos.
 * Falls back to solid-color SVG placeholders when image src is missing or fails to load.
 */
export const BeforeAfterSlider = ({
  // TODO: Replace with real photo — before-unit.jpg
  beforeSrc = "/images/before-after/before-unit.svg",
  // TODO: Replace with real photo — after-unit.jpg
  afterSrc = "/images/before-after/after-unit.svg",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  caption = "Every unit delivered in 5 business days. Guaranteed in writing.",
  ctaLabel = "Get a Free Make-Ready Quote",
  ctaHref = "/contact",
  className = "",
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent
  const [dragging, setDragging] = useState(false);
  const [beforeOk, setBeforeOk] = useState(true);
  const [afterOk, setAfterOk] = useState(true);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  // Mouse
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, updateFromClientX]);

  // Touch
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: TouchEvent) => {
      if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
    };
    const onEnd = () => setDragging(false);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [dragging, updateFromClientX]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  // Solid-color placeholder as data URI (used when image fails to load)
  const placeholderDataUri = (bg: string, label: string) =>
    `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
        <rect width='1200' height='800' fill='${bg}'/>
        <text x='50%' y='50%' fill='#FFD700' font-family='Arial,sans-serif' font-size='48' font-weight='700' text-anchor='middle' dominant-baseline='middle'>${label}</text>
      </svg>`
    )}`;

  const beforeImg = beforeOk ? beforeSrc : placeholderDataUri("#2D2D2D", "Before Make-Ready");
  const afterImg = afterOk ? afterSrc : placeholderDataUri("#3D3D3D", "After FiveServ Make-Ready");

  return (
    <div className={className}>
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Before and after make-ready comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={handleKey}
        onMouseDown={(e) => {
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          setDragging(true);
          if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
        }}
        className="relative w-full select-none overflow-hidden rounded-xl border border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
        style={{
          height: "min(400px, 56vw)",
          minHeight: 280,
          cursor: dragging ? "grabbing" : "ew-resize",
          touchAction: "none",
        }}
      >
        {/* AFTER (full background) */}
        <img
          src={afterImg}
          alt="After FiveServ make-ready"
          onError={() => setAfterOk(false)}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        {/* BEFORE (clipped from left to position%) */}
        <div
          className="pointer-events-none absolute inset-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImg}
            alt="Before FiveServ make-ready"
            onError={() => setBeforeOk(false)}
            draggable={false}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth ?? "100%", maxWidth: "none" }}
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-brand-black/70 px-3 py-1 text-xs font-bold tracking-wider text-brand-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-black/70 px-3 py-1 text-xs font-bold tracking-wider text-brand-gold">
          {afterLabel}
        </span>

        {/* Drag line + handle */}
        <div
          className="pointer-events-none absolute top-0 h-full"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-[3px] bg-brand-gold" />
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-auto absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-gold text-brand-black shadow-lg ring-4 ring-brand-black/40"
            onMouseDown={(e) => {
              e.stopPropagation();
              setDragging(true);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setDragging(true);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-6 text-center">
        <span className="mx-auto block h-[2px] w-12 bg-brand-gold" />
        <p className="mt-3 text-sm text-brand-white" style={{ fontFamily: "Arial, sans-serif" }}>
          {caption}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-5 text-center">
        <Link
          to={ctaHref}
          className="inline-block rounded-md bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black hover:opacity-90 transition-opacity"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
