import { useEffect, useState } from "react";

/**
 * useLiveCounter — realistic monthly-evolving counter persisted in localStorage.
 *
 * Behavior:
 * - Resets at the start of each month with a random startValue (3-7) and avgDailyRate (0.6-0.9).
 * - Computes expected value from dayOfMonth and clamps to a realistic range table.
 * - Increments at most once every 4 hours up to the monthly cap.
 * - Optional multiplier for derived counters (e.g. quotes = units * 1.4).
 *
 * SSR-safe: returns 0 until hydrated on client.
 */

type LiveCounterConfig = {
  multiplier?: number;
};

type Seed = {
  startValue: number;
  avgDailyRate: number;
};

const STORAGE_PREFIX = "fiveserv";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const randInt = (min: number, max: number) => Math.floor(rand(min, max + 1));

const monthKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

// Realistic ranges by day-of-month bucket: [min, max]
const rangeForDay = (day: number): [number, number] => {
  if (day <= 7) return [3, 10];
  if (day <= 14) return [8, 15];
  if (day <= 21) return [13, 20];
  if (day <= 28) return [17, 24];
  return [20, 28];
};

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const computeExpected = (seed: Seed, day: number): number => {
  const raw = Math.round(seed.startValue + day * seed.avgDailyRate);
  const [min, max] = rangeForDay(day);
  return clamp(raw, min, max);
};

const safeGet = (k: string): string | null => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};

const safeSet = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* noop */
  }
};

export function useLiveCounter(
  key: string,
  config: LiveCounterConfig = {},
): { value: number; isHydrated: boolean } {
  const { multiplier = 1 } = config;
  const [value, setValue] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const kMonth = `${STORAGE_PREFIX}_${key}_month`;
    const kCount = `${STORAGE_PREFIX}_${key}_count`;
    const kLast = `${STORAGE_PREFIX}_${key}_last_update`;
    const kSeed = `${STORAGE_PREFIX}_${key}_seed`;

    const evaluate = () => {
      const now = new Date();
      const currentMonth = monthKey(now);
      const day = now.getDate();

      let storedMonth = safeGet(kMonth);
      let seed: Seed;

      if (storedMonth !== currentMonth) {
        // New month → reset
        seed = {
          startValue: randInt(3, 7),
          avgDailyRate: rand(0.6, 0.9),
        };
        safeSet(kSeed, JSON.stringify(seed));
        safeSet(kMonth, currentMonth);
        const initial = computeExpected(seed, day);
        safeSet(kCount, String(initial));
        safeSet(kLast, now.toISOString());
        storedMonth = currentMonth;
      } else {
        const rawSeed = safeGet(kSeed);
        try {
          seed = rawSeed
            ? (JSON.parse(rawSeed) as Seed)
            : { startValue: randInt(3, 7), avgDailyRate: rand(0.6, 0.9) };
        } catch {
          seed = { startValue: randInt(3, 7), avgDailyRate: rand(0.6, 0.9) };
        }
      }

      const expected = computeExpected(seed, day);
      const storedCount = Number(safeGet(kCount) ?? 0) || 0;
      const lastUpdate = safeGet(kLast);
      const lastTs = lastUpdate ? new Date(lastUpdate).getTime() : 0;
      const hoursSince = (now.getTime() - lastTs) / (1000 * 60 * 60);

      let nextCount = storedCount;

      if (storedCount < expected) {
        nextCount = expected;
        safeSet(kCount, String(nextCount));
        safeSet(kLast, now.toISOString());
      } else if (hoursSince >= 4) {
        const [, max] = rangeForDay(day);
        if (storedCount < max) {
          nextCount = storedCount + 1;
          safeSet(kCount, String(nextCount));
          safeSet(kLast, now.toISOString());
        }
      }

      const finalVal = Math.round(nextCount * multiplier);
      setValue(finalVal);
    };

    evaluate();
    setIsHydrated(true);

    // Re-evaluate every 30 minutes to allow live increments without reload
    const interval = setInterval(evaluate, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [key, multiplier]);

  return { value, isHydrated };
}
