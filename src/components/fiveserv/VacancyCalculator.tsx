import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Smoothly tween a number value (used for load-in + slider updates). */
const useTween = (target: number, duration = 250) => {
  const [value, setValue] = useState(0);
  const fromRef = useRef(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    fromRef.current = value;
    startRef.current = null;
    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = fromRef.current + (target - fromRef.current) * eased;
      setValue(next);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return value;
};

type SliderProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
  note?: string;
};

const GoldSlider = ({ label, min, max, step, value, onChange, prefix, suffix, note }: SliderProps) => (
  <div>
    <div className="flex items-baseline justify-between gap-3">
      <label
        style={{ color: "#FFFFFF", fontFamily: "Arial, sans-serif", fontSize: "14px" }}
      >
        {label}
      </label>
      <span
        style={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {prefix && <span style={{ color: "#FFD700" }}>{prefix}</span>}
        {value.toLocaleString("en-US")}
        {suffix && <span style={{ opacity: 0.75, marginLeft: 4 }}>{suffix}</span>}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="vc-slider"
      style={{ width: "100%", marginTop: "8px" }}
    />
    {note && (
      <p style={{ marginTop: 6, color: "#FFFFFF", opacity: 0.55, fontSize: "12px", fontFamily: "Arial, sans-serif" }}>
        {note}
      </p>
    )}
  </div>
);

type ResultProps = {
  label: string;
  value: string;
  subtext: string;
  accent: "red" | "gold" | "white";
  valueColor: string;
};

const ResultCard = ({ label, value, subtext, accent, valueColor }: ResultProps) => {
  const borderColor = accent === "red" ? "#EF4444" : accent === "gold" ? "#FFD700" : "#FFFFFF";
  return (
    <div
      style={{
        background: "#2D2D2D",
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: "8px",
        padding: "20px 22px",
      }}
    >
      <p
        style={{
          color: "#FFFFFF",
          opacity: 0.75,
          fontSize: "13px",
          fontFamily: "Arial, sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </p>
      <p
        className="font-display"
        style={{
          color: valueColor,
          fontWeight: 900,
          marginTop: "8px",
          lineHeight: 1,
          fontSize: "clamp(36px, 7vw, 56px)",
        }}
      >
        {value}
      </p>
      <p
        style={{
          color: "#FFFFFF",
          opacity: 0.65,
          fontSize: "13px",
          marginTop: "8px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {subtext}
      </p>
    </div>
  );
};

/**
 * VacancyCalculator — interactive ROI calculator showing vacancy losses
 * vs. FiveServ's 5-day make-ready guarantee.
 */
export const VacancyCalculator = () => {
  const [units, setUnits] = useState(0);
  const [rent, setRent] = useState(0);
  const [days, setDays] = useState(0);
  const [interacted, setInteracted] = useState(false);

  // Animate from 0 → defaults on mount
  useEffect(() => {
    const start = performance.now();
    const duration = 1000;
    const targets = { units: 50, rent: 1200, days: 14 };
    let raf = 0;
    const tick = (ts: number) => {
      const t = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setUnits(Math.round((targets.units * eased) / 5) * 5);
      setRent(Math.round((targets.rent * eased) / 50) * 50);
      setDays(Math.max(5, Math.round(targets.days * eased)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const wrap = (setter: (n: number) => void) => (n: number) => {
    if (!interacted) setInteracted(true);
    setter(n);
  };

  const { monthlyLoss, monthlySaved, annualSaved } = useMemo(() => {
    const dailyRent = rent / 30;
    const extraDays = Math.max(0, days - 5);
    const turnsPerMonth = units / 12;
    const loss = dailyRent * extraDays * turnsPerMonth;
    return {
      monthlyLoss: loss,
      monthlySaved: loss,
      annualSaved: loss * 12,
    };
  }, [units, rent, days]);

  const tweenedLoss = useTween(monthlyLoss);
  const tweenedSaved = useTween(monthlySaved);
  const tweenedAnnual = useTween(annualSaved);

  return (
    <section className="bg-white">
      <div className="container py-16 sm:py-20">
        <div
          className="mx-auto"
          style={{
            maxWidth: "700px",
            background: "#1A1A1A",
            border: "2px solid #FFD700",
            borderRadius: "12px",
            padding: "clamp(24px, 5vw, 48px)",
          }}
        >
          <h2
            className="font-display"
            style={{
              color: "#FFFFFF",
              fontWeight: 900,
              fontSize: "clamp(22px, 4vw, 28px)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            How Much Are Slow Make-Readies Costing You?
          </h2>
          <p
            style={{
              color: "#FFFFFF",
              opacity: 0.75,
              fontSize: "15px",
              marginTop: "10px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Calculate your monthly vacancy loss — and see how FiveServ fixes it.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", marginTop: "32px" }}>
            <GoldSlider
              label="How many units do you manage?"
              min={10}
              max={500}
              step={5}
              value={units}
              onChange={wrap(setUnits)}
            />
            <GoldSlider
              label="Average monthly rent per unit"
              min={800}
              max={3000}
              step={50}
              value={rent}
              onChange={wrap(setRent)}
              prefix="$"
            />
            <GoldSlider
              label="How many days does your current make-ready take?"
              min={5}
              max={30}
              step={1}
              value={days}
              onChange={wrap(setDays)}
              suffix="days"
              note="Industry average without FiveServ: 14 days"
            />
          </div>

          {/* Results */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: "32px",
              opacity: interacted ? 1 : 0.6,
              transition: "opacity 400ms ease",
            }}
          >
            <ResultCard
              accent="red"
              label="You are currently losing per month"
              value={fmt(tweenedLoss)}
              subtext="In vacant days waiting for make-ready completion"
              valueColor="#FFD700"
            />
            <ResultCard
              accent="gold"
              label="With FiveServ you save per month"
              value={fmt(tweenedSaved)}
              subtext="Based on our 5-day guaranteed delivery"
              valueColor="#FFFFFF"
            />
            <ResultCard
              accent="white"
              label="Annual savings with FiveServ"
              value={fmt(tweenedAnnual)}
              subtext="Every year — compounded across your portfolio"
              valueColor="#FFD700"
            />
          </div>

          <p
            style={{
              marginTop: "20px",
              color: "#FFFFFF",
              opacity: 0.5,
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.5,
            }}
          >
            Estimates based on average turnover rates. Actual savings vary by property and market conditions.
            FiveServ guarantees 5-day make-ready delivery in writing.
          </p>

          {/* CTA */}
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <h3
              className="font-display"
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Ready to stop losing money on vacant units?
            </h3>
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
              className="vc-cta"
            >
              <Link
                to="/contact"
                style={{
                  background: "#FFD700",
                  color: "#1A1A1A",
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                }}
              >
                Get a Free Make-Ready Quote →
              </Link>
              <Link
                to="/make-ready"
                style={{
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "2px solid #FFFFFF",
                  fontWeight: 700,
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                }}
              >
                See How We Work →
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .vc-slider {
            -webkit-appearance: none;
            appearance: none;
            height: 6px;
            background: #2D2D2D;
            border-radius: 9999px;
            outline: none;
          }
          .vc-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 22px;
            height: 22px;
            background: #FFD700;
            border-radius: 9999px;
            cursor: pointer;
            border: 2px solid #1A1A1A;
            box-shadow: 0 2px 6px rgba(0,0,0,0.4);
          }
          .vc-slider::-moz-range-thumb {
            width: 22px;
            height: 22px;
            background: #FFD700;
            border-radius: 9999px;
            cursor: pointer;
            border: 2px solid #1A1A1A;
          }
          @media (max-width: 640px) {
            .vc-cta > a { width: 100%; text-align: center; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default VacancyCalculator;
