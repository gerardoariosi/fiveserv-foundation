import { useEffect, useState } from "react";
import { Phone, Star } from "lucide-react";
import { SITE } from "@/lib/site-config";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

/**
 * StickyMobileCTA — fixed bottom action bar (Call / WhatsApp / Quote) for mobile only.
 * Appears after 200px scroll. Adds body padding + offsets Sofia chat button on mobile via CSS var.
 */
export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const phoneDigits = SITE.phone.replace(/[^\d]/g, "");
  const waHref = `https://wa.me/${phoneDigits}`;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reserve space at bottom of page on mobile + push Sofia chat up when visible.
  useEffect(() => {
    const apply = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile && visible) {
        document.body.style.paddingBottom = "calc(140px + env(safe-area-inset-bottom))";
        document.documentElement.style.setProperty("--sofia-bottom-offset", "72px");
      } else {
        document.body.style.paddingBottom = "";
        document.documentElement.style.setProperty("--sofia-bottom-offset", "0px");
      }
    };
    apply();
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("resize", apply);
      document.body.style.paddingBottom = "";
      document.documentElement.style.setProperty("--sofia-bottom-offset", "0px");
    };
  }, [visible]);

  return (
    <div
      aria-hidden={!visible}
      className="md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "64px",
        zIndex: 9998,
        backgroundColor: "#1A1A1A",
        borderTop: "2px solid #FFD700",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 300ms ease",
        paddingBottom: "env(safe-area-inset-bottom)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <a
        href={`tel:${SITE.phone}`}
        aria-label="Call FiveServ"
        style={{
          backgroundColor: "#1A1A1A",
          borderRight: "1px solid #2D2D2D",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
          fontSize: "11px",
        }}
      >
        <Phone size={20} color="#FFD700" />
        <span>Call Now</span>
      </a>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp FiveServ"
        style={{
          backgroundColor: "#1A1A1A",
          borderRight: "1px solid #2D2D2D",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
          fontSize: "11px",
        }}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span style={{ color: "#fff" }}>WhatsApp</span>
      </a>

      <a
        href="/contact"
        aria-label="Get a free quote"
        style={{
          backgroundColor: "#FFD700",
          color: "#1A1A1A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
          fontSize: "11px",
          fontWeight: 700,
        }}
      >
        <Star size={20} color="#1A1A1A" fill="#1A1A1A" />
        <span>Get Quote</span>
      </a>
    </div>
  );
};

export default StickyMobileCTA;
