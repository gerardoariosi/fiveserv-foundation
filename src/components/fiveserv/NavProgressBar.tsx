import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavProgressBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(0);
    const t1 = setTimeout(() => setProgress(70), 100);
    const t2 = setTimeout(() => setProgress(100), 400);
    const t3 = setTimeout(() => setVisible(false), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-brand-gold"
      style={{
        width: `${progress}%`,
        transition: "width 0.3s ease",
      }}
    />
  );
}
