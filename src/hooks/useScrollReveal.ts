import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — fade + slide-up 24px reveal on scroll.
 * Consumers apply: opacity, transform: translateY(24px→0), transition 500ms ease-out.
 * Optional index enables 60ms stagger between siblings.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/** Shared reveal timing tokens. */
export const REVEAL = {
  distance: 24,
  duration: 500,
  easing: "ease-out",
  stagger: 60,
} as const;

/** Convenience style helper: pass visible + optional stagger index. */
export function revealStyle(visible: boolean, index = 0): React.CSSProperties {
  const delay = index * REVEAL.stagger;
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${REVEAL.distance}px)`,
    transition: `opacity ${REVEAL.duration}ms ${REVEAL.easing} ${delay}ms, transform ${REVEAL.duration}ms ${REVEAL.easing} ${delay}ms`,
    willChange: "opacity, transform",
  };
}
