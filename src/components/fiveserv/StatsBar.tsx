import { STATS } from "@/lib/site-config";
import { useCounter } from "@/hooks/use-fiveserv";

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, value: v } = useCounter(value, 2000);
  return (
    <div className="text-center">
      <div className="font-display text-5xl text-brand-gold sm:text-6xl">
        <span ref={ref}>{v}</span>
        <span>{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-bold uppercase tracking-wide text-brand-white/80">{label}</div>
    </div>
  );
};

export const StatsBar = () => {
  return (
    <section className="bg-brand-gray border-y border-brand-gray">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
