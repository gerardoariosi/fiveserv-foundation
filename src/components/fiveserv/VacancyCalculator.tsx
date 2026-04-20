import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Smooth tween for displayed numbers. */
const useTween = (target: number, duration = 350) => {
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
      const t = Math.min(1, (ts - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(fromRef.current + (target - fromRef.current) * eased);
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
  display: string;
  onChange: (n: number) => void;
};

const Slider = ({ label, min, max, step, value, display, onChange }: SliderProps) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label
          style={{
            color: "rgba(255,255,255,0.7)",
            fontFamily: "Arial, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.02em",
          }}
        >
          {label}
        </label>
        <span
          className="font-display"
          style={{
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "17px",
            letterSpacing: "-0.01em",
          }}
        >
          {display}
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
        style={{
          width: "100%",
          marginTop: "12px",
          background: `linear-gradient(to right, #FFD700 0%, #FFD700 ${pct}%, rgba(255,255,255,0.08) ${pct}%, rgba(255,255,255,0.08) 100%)`,
        }}
      />
    </div>
  );
};

/**
 * VacancyCalculator — minimal, premium ROI calculator showing vacancy losses
 * vs FiveServ's 5-day make-ready guarantee.
 */
export const VacancyCalculator = () => {
  const [units, setUnits] = useState(50);
  const [rent, setRent] = useState(1200);
  const [days, setDays] = useState(14);

  const { monthlyLoss, annualSaved } = useMemo(() => {
    const dailyRent = rent / 30;
    const extraDays = Math.max(0, days - 5);
    const turnsPerMonth = units / 12;
    const loss = dailyRent * extraDays * turnsPerMonth;
    return { monthlyLoss: loss, annualSaved: loss * 12 };
  }, [units, rent, days]);

  const tweenedLoss = useTween(monthlyLoss);
  const tweenedAnnual = useTween(annualSaved);

  return (
    <section className="bg-white">
      <div className="container py-20 sm:py-24">
        <div className="mx-auto" style={{ maxWidth: "640px" }}>
          {/* Header */}
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <p
              style={{
                color: "#A98C00",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
              }}
            >
              Vacancy ROI Calculator
            </p>
            <h2
              className="font-display"
              style={{
                color: "#1A1A1A",
                fontWeight: 800,
                fontSize: "clamp(26px, 4.2vw, 36px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginTop: "12px",
              }}
            >
              How much are slow make-readies costing you?
            </h2>
            <p
              style={{
                color: "#6B7280",
                fontSize: "15px",
                marginTop: "12px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Move the sliders. See your real loss.
            </p>
          </div>

          {/* Card */}
          <div
            style={{
              background: "#0F0F0F",
              borderRadius: "20px",
              padding: "clamp(28px, 5vw, 44px)",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.35)",
            }}
          >
            {/* Inputs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <Slider
                label="Units managed"
                min={10}
                max={500}
                step={5}
                value={units}
                display={units.toLocaleString("en-US")}
                onChange={setUnits}
              />
              <Slider
                label="Avg. monthly rent"
                min={800}
                max={3000}
                step={50}
                value={rent}
                display={fmt(rent)}
                onChange={setRent}
              />
              <Slider
                label="Current make-ready (days)"
                min={5}
                max={30}
                step={1}
                value={days}
                display={`${days} days`}
                onChange={setDays}
              />
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                margin: "36px 0 32px",
              }}
            />

            {/* Results */}
            <div style={{ display: "grid", gap: "24px" }}>
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Monthly vacancy loss
                </p>
                <p
                  className="font-display"
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: "clamp(40px, 8vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginTop: "8px",
                  }}
                >
                  {fmt(tweenedLoss)}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  You save annually
                </p>
                <p
                  className="font-display"
                  style={{
                    color: "#FFD700",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 3.5vw, 28px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {fmt(tweenedAnnual)}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link
                to="/contact"
                className="vc-cta-primary"
                style={{
                  background: "#FFD700",
                  color: "#1A1A1A",
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  textAlign: "center",
                  letterSpacing: "0.01em",
                  transition: "transform 200ms ease",
                }}
              >
                Get a free make-ready quote
              </Link>
              <Link
                to="/make-ready"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "13px",
                  textDecoration: "none",
                  padding: "8px",
                }}
              >
                See how we work →
              </Link>
            </div>
          </div>

          <p
            style={{
              marginTop: "20px",
              color: "#9CA3AF",
              fontSize: "11px",
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Estimates based on average turnover. FiveServ guarantees 5-day make-ready delivery in writing.
          </p>
        </div>

        <style>{`
          .vc-slider {
            -webkit-appearance: none;
            appearance: none;
            height: 4px;
            border-radius: 9999px;
            outline: none;
            cursor: pointer;
            transition: background 150ms ease;
          }
          .vc-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            background: #FFFFFF;
            border-radius: 9999px;
            cursor: pointer;
            border: none;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.3);
            transition: transform 150ms ease;
          }
          .vc-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
          .vc-slider::-webkit-slider-thumb:active { transform: scale(1.25); }
          .vc-slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
            background: #FFFFFF;
            border-radius: 9999px;
            cursor: pointer;
            border: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }
          .vc-cta-primary:hover { transform: translateY(-1px); }
        `}</style>
      </div>
    </section>
  );
};

export default VacancyCalculator;
