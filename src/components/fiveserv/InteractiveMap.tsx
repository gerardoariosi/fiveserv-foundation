import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CITIES, COMING_SOON_CITIES } from "@/lib/site-config";

/**
 * InteractiveMap
 * SVG map of Central Florida with all 18 service cities + Tampa Bay (coming soon).
 * - Hover or focus a dot to see a tooltip with response time, services, and a link.
 * - Dots fade in staggered on first reveal and pulse continuously.
 * - Keyboard accessible (Tab through dots, tooltip on focus).
 */

type CityPoint = {
  slug: string;
  name: string;
  // Approximate coordinates within a 1000x600 viewBox of Central Florida
  x: number;
  y: number;
  responseMin: number;
  tier: 1 | 2 | 3;
};

// Approximate positions chosen to lay out the cities geographically west→east, north→south.
// (Not real lat/lon — tuned to read clearly inside a 1000x600 stylized map.)
const CITY_POINTS: CityPoint[] = [
  { slug: "orlando-fl", name: "Orlando", x: 470, y: 320, responseMin: 30, tier: 1 },
  { slug: "kissimmee-fl", name: "Kissimmee", x: 440, y: 380, responseMin: 35, tier: 1 },
  { slug: "sanford-fl", name: "Sanford", x: 470, y: 230, responseMin: 45, tier: 1 },
  { slug: "winter-park-fl", name: "Winter Park", x: 490, y: 305, responseMin: 20, tier: 1 },
  { slug: "lakeland-fl", name: "Lakeland", x: 280, y: 390, responseMin: 60, tier: 1 },
  { slug: "altamonte-springs-fl", name: "Altamonte Springs", x: 460, y: 280, responseMin: 25, tier: 2 },
  { slug: "apopka-fl", name: "Apopka", x: 420, y: 285, responseMin: 35, tier: 2 },
  { slug: "ocoee-fl", name: "Ocoee", x: 410, y: 320, responseMin: 30, tier: 2 },
  { slug: "winter-garden-fl", name: "Winter Garden", x: 380, y: 330, responseMin: 35, tier: 2 },
  { slug: "clermont-fl", name: "Clermont", x: 340, y: 340, responseMin: 45, tier: 2 },
  { slug: "st-cloud-fl", name: "St. Cloud", x: 480, y: 400, responseMin: 40, tier: 2 },
  { slug: "davenport-fl", name: "Davenport", x: 360, y: 400, responseMin: 50, tier: 2 },
  { slug: "deltona-fl", name: "Deltona", x: 530, y: 240, responseMin: 45, tier: 3 },
  { slug: "daytona-beach-fl", name: "Daytona Beach", x: 660, y: 200, responseMin: 70, tier: 3 },
  { slug: "palm-coast-fl", name: "Palm Coast", x: 660, y: 130, responseMin: 80, tier: 3 },
  { slug: "melbourne-fl", name: "Melbourne", x: 700, y: 410, responseMin: 75, tier: 3 },
  { slug: "palm-bay-fl", name: "Palm Bay", x: 710, y: 460, responseMin: 80, tier: 3 },
  { slug: "cocoa-fl", name: "Cocoa", x: 670, y: 340, responseMin: 70, tier: 3 },
];

const TAMPA_BAY = { slug: "tampa-bay-fl", name: "Tampa Bay", x: 130, y: 410 };

const SERVICES_LABEL = "Make-Ready · Maintenance · CapEx · Residential";

type InteractiveMapProps = {
  className?: string;
};

export const InteractiveMap = ({ className = "" }: InteractiveMapProps) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger staggered fade-in on first time the map enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        role="region"
        aria-label="Interactive map of FiveServ service areas in Central Florida"
        className="relative w-full overflow-hidden rounded-xl border border-brand-gold bg-brand-black"
        style={{ height: "min(500px, 70vw)", minHeight: 350 }}
      >
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* Stylized Central Florida landmass */}
          <defs>
            <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f1f1f" />
              <stop offset="100%" stopColor="#171717" />
            </linearGradient>
          </defs>

          {/* Land shape — abstract Central Florida with east coast bulge */}
          <path
            d="
              M 60 200
              C 80 160, 140 130, 220 130
              L 580 110
              C 640 100, 690 110, 720 140
              L 740 200
              L 760 280
              L 770 360
              L 760 440
              L 720 500
              L 620 510
              L 480 500
              L 320 490
              L 200 470
              L 110 430
              L 70 360
              L 55 290
              Z
            "
            fill="url(#land)"
            stroke="#FFD700"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />

          {/* Subtle grid for depth */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`gx-${i}`}
              x1={150 + i * 110}
              y1="120"
              x2={150 + i * 110}
              y2="500"
              stroke="#FFD700"
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line
              key={`gy-${i}`}
              x1="60"
              y1={180 + i * 90}
              x2="760"
              y2={180 + i * 90}
              stroke="#FFD700"
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          ))}

          {/* Tampa Bay — outlined, dashed, "Coming Soon" */}
          <g
            tabIndex={0}
            role="button"
            aria-label={`${TAMPA_BAY.name} — Coming soon`}
            onMouseEnter={() => setActiveSlug(TAMPA_BAY.slug)}
            onMouseLeave={() => setActiveSlug((s) => (s === TAMPA_BAY.slug ? null : s))}
            onFocus={() => setActiveSlug(TAMPA_BAY.slug)}
            onBlur={() => setActiveSlug((s) => (s === TAMPA_BAY.slug ? null : s))}
            style={{ cursor: "pointer", outline: "none" }}
          >
            <circle
              cx={TAMPA_BAY.x}
              cy={TAMPA_BAY.y}
              r="9"
              fill="transparent"
              stroke="#FFD700"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
            <text
              x={TAMPA_BAY.x}
              y={TAMPA_BAY.y + 28}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#FFD700"
            >
              Tampa Bay — Soon
            </text>
          </g>

          {/* Service city dots */}
          {CITY_POINTS.map((c, i) => {
            const isActive = activeSlug === c.slug;
            return (
              <a
                key={c.slug}
                href={`/maintenance-${c.slug}`}
                tabIndex={0}
                role="link"
                aria-label={`${c.name}, FL — within ${c.responseMin} minutes from Orlando base`}
                onMouseEnter={() => setActiveSlug(c.slug)}
                onMouseLeave={() => setActiveSlug((s) => (s === c.slug ? null : s))}
                onFocus={() => setActiveSlug(c.slug)}
                onBlur={() => setActiveSlug((s) => (s === c.slug ? null : s))}
                style={{
                  cursor: "pointer",
                  outline: "none",
                  opacity: revealed ? 1 : 0,
                  transition: `opacity 400ms ease ${i * 100}ms`,
                }}
              >
                {/* Pulse ring */}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="6"
                  fill="#FFD700"
                  opacity="0.5"
                  className="fs-map-pulse"
                />
                {/* Solid dot */}
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isActive ? 8 : 6}
                  fill="#FFD700"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  style={{ transition: "r 150ms ease" }}
                />
                {/* City label always visible (small) */}
                <text
                  x={c.x}
                  y={c.y - 12}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#ffffff"
                  opacity="0.85"
                  style={{ pointerEvents: "none" }}
                >
                  {c.name}
                </text>
              </a>
            );
          })}
        </svg>

        {/* Tooltip overlay (HTML, positioned over SVG using percentage coords) */}
        {activeSlug && activeSlug !== TAMPA_BAY.slug &&
          (() => {
            const c = CITY_POINTS.find((p) => p.slug === activeSlug);
            if (!c) return null;
            // Convert SVG coords (1000x600) to percent inside container
            const leftPct = (c.x / 1000) * 100;
            const topPct = (c.y / 600) * 100;
            const flipRight = leftPct > 70;
            return (
              <div
                role="tooltip"
                className="pointer-events-none absolute z-10 w-60 rounded-md border border-brand-gold bg-brand-gray p-3 shadow-xl"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: flipRight
                    ? "translate(-105%, -110%)"
                    : "translate(15px, -110%)",
                  animation: "fs-fade-in 150ms ease both",
                }}
              >
                <p className="text-sm font-bold text-brand-white">
                  {c.name}, FL
                </p>
                <p className="mt-1 text-xs font-bold text-brand-gold">
                  Within {c.responseMin} min from Orlando base
                </p>
                <p className="mt-2 text-xs text-brand-white/80">{SERVICES_LABEL}</p>
                <p className="mt-2 text-xs font-bold text-brand-gold underline">
                  Get a Quote in {c.name} →
                </p>
              </div>
            );
          })()}

        {activeSlug === TAMPA_BAY.slug && (
          <div
            role="tooltip"
            className="pointer-events-none absolute z-10 w-60 rounded-md border border-brand-gold bg-brand-gray p-3 shadow-xl"
            style={{
              left: `${(TAMPA_BAY.x / 1000) * 100}%`,
              top: `${(TAMPA_BAY.y / 600) * 100}%`,
              transform: "translate(15px, -110%)",
              animation: "fs-fade-in 150ms ease both",
            }}
          >
            <p className="text-sm font-bold text-brand-white">Tampa Bay, FL</p>
            <p className="mt-1 text-xs font-bold text-brand-gold">Coming Soon</p>
            <p className="mt-2 text-xs text-brand-white/80">
              Join the waitlist for Tampa Bay launch.
            </p>
          </div>
        )}

        {/* Inline keyframes for pulse + fade */}
        <style>{`
          @keyframes fs-pulse-ring {
            0% { transform: scale(1); opacity: 0.55; }
            70% { transform: scale(2.2); opacity: 0; }
            100% { transform: scale(2.2); opacity: 0; }
          }
          .fs-map-pulse {
            transform-box: fill-box;
            transform-origin: center;
            animation: fs-pulse-ring 2s ease-out infinite;
          }
          @keyframes fs-fade-in {
            from { opacity: 0; transform-origin: bottom left; }
            to { opacity: 1; }
          }
        `}</style>
      </div>

      {/* City pills below the map — clickable, one per city */}
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="All FiveServ service cities">
        {CITIES.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/maintenance-${c.slug}`}
              className="inline-flex items-center rounded-full bg-brand-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-black transition-opacity hover:opacity-90"
            >
              {c.name}
            </Link>
          </li>
        ))}
        {COMING_SOON_CITIES.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/${c.slug}`}
              className="inline-flex items-center rounded-full border border-dashed border-brand-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold hover:bg-brand-gold/10"
            >
              {c.name} — Coming Soon
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveMap;
