import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  /** Distance before entering viewport to begin mounting children */
  rootMargin?: string;
  /** Min height placeholder to avoid layout shift before mount */
  minHeight?: number | string;
  className?: string;
};

/**
 * Defers rendering of children until the placeholder scrolls near the viewport.
 * Used to delay heavy third-party embeds (e.g. GHL forms / reCAPTCHA scripts)
 * so they don't block initial page load.
 */
export const LazyVisible = ({
  children,
  rootMargin = "300px",
  minHeight,
  className,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={minHeight ? { minHeight } : undefined}
    >
      {visible ? children : null}
    </div>
  );
};

export default LazyVisible;
