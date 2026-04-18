import { useEffect, useRef, useState } from "react";
import { Building2, Users, MapPin, Star, Clock, Activity } from "lucide-react";

/**
 * LiveStatsBar — animated social-proof counters.
 * - 5 stats animate from 0 to target on viewport entry (ease-out, ~2s)
 * - Bonus 6th "live" stat reads from VITE_UNITS_THIS_MONTH (Vite env, client-exposed)
 *   with a continuous pulsing dot to indicate live data.
 *
 * Note on env: this Vite project uses VITE_-prefixed env vars (not Next.js NEXT_PUBLIC_).
 * Set VITE_UNITS_THIS_MONTH in .env / .env.local. Defaults to 0.
 */

type Stat = {
  /** Final numeric value to count up to. Use null for non-numeric (e.g. 24/7). */
  value: number | null;
  /** Suffix shown after the count (e.g. "+"). */
  suffix?: string;
  /** For non-numeric stats (e.g. "24/7"), the literal display string. */
  display?: string;
  label: string;
  icon: typeof Building2;
};

const STATS: Stat[] = [
  { value: 300, suffix: "+", label: "Units Completed", icon: Building2 },
  { value: 50, suffix: "+", label: "Communities Served", icon: Users },
  { value: 18, suffix: "", label: "Cities Active", icon: MapPin },
  { value: 15, suffix: "+", label: "Years Combined Experience", icon: Star },
  { value: null, display: "24/7", label: "Emergency Response", icon: Clock },
];

// Read live "units this month" from Vite env. Default 0.
const UNITS_THIS_MONTH =
  Number((import.meta as unknown as { env?: Record<string, string> }).env?.VITE_UNITS_THIS_MONTH ?? 0) || 0;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const useCountUp = (target: number, durationMs = 2000, start = false) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs);
      setN(Math.round(target * easeOutCubic(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return n;
};

const StatCard = ({
  stat,
  index,
  start,
}: {
  stat: Stat;
  index: number;
  start: boolean;
}) => {
  const Icon = stat.icon;
  const counted = useCountUp(stat.value ?? 0, 2000, start && stat.value !== null);
  const display = stat.value === null ? stat.display ?? "" : `${counted}${stat.suffix ?? ""}`;

  return (
    <div
      className="text-center"
      style={{
        opacity: start ? 1 : 0,
        transform: start ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 500ms ease ${index * 150}ms, transform 500ms ease ${index * 150}ms`,
      }}
    >
      <Icon className="mx-auto h-8 w-8 text-brand-gold" aria-hidden="true" />
      <div
        className="mt-3 text-brand-gold"
        style={{
          fontFamily: "Montserrat, system-ui, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(36px, 6vw, 56px)",
          lineHeight: 1,
        }}
      >
        {display}
      </div>
      <div
        className="mt-3 text-brand-white"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: 13,
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
};

export const LiveStatsBar = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStart(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const liveCount = useCountUp(UNITS_THIS_MONTH, 2000, start);

  return (
    <section
      ref={sectionRef}
      className="bg-brand-black"
      style={{ borderTop: "2px solid #FFD700", borderBottom: "2px solid #FFD700" }}
      aria-label="FiveServ live company stats"
    >
      <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} start={start} />
          ))}
        </div>

        {/* 6th — Live monthly counter */}
        <div
          className="mt-10 flex flex-col items-center gap-2 border-t border-brand-gold/30 pt-8 sm:flex-row sm:justify-center sm:gap-4"
          style={{
            opacity: start ? 1 : 0,
            transition: "opacity 600ms ease 900ms",
          }}
        >
          <span
            className="relative inline-flex h-3 w-3 items-center justify-center"
            title="Updated monthly by the FiveServ team"
            aria-label="Live data — updated monthly by the FiveServ team"
          >
            <span className="fs-live-pulse absolute inline-flex h-3 w-3 rounded-full bg-brand-gold opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-gold" />
          </span>
          <Activity className="h-5 w-5 text-brand-gold" aria-hidden="true" />
          <p
            className="text-brand-white"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 13,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Units Completed This Month:{" "}
            <span
              className="ml-1 text-brand-gold"
              style={{ fontFamily: "Montserrat, system-ui, sans-serif", fontWeight: 900, fontSize: 20 }}
            >
              {liveCount}
            </span>
          </p>
        </div>

        <style>{`
          @keyframes fs-live-pulse {
            0% { transform: scale(1); opacity: 0.6; }
            70% { transform: scale(2.4); opacity: 0; }
            100% { transform: scale(2.4); opacity: 0; }
          }
          .fs-live-pulse { animation: fs-live-pulse 1.8s ease-out infinite; }
        `}</style>
      </div>
    </section>
  );
};

export default LiveStatsBar;
