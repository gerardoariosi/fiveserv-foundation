import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site-config";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/cities", label: "Cities" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

export const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;

  return (
    <header
      style={{ top: "var(--banner-h, 0px)" }}
      className={`fixed inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-brand-black/95 backdrop-blur shadow-lg" : "bg-brand-black/80 backdrop-blur"
      }`}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        {/* FS Monogram + wordmark */}
        <Link to="/" className="flex items-center gap-3" aria-label="FiveServ home">
          <span className="inline-flex items-center justify-center bg-brand-black text-brand-gold font-display font-black text-base px-2 py-1.5 rounded-md border border-brand-gold/40">
            FS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold text-brand-white text-lg">FiveServ</span>
            <span className="hidden lg:inline text-[10px] text-gray-400 uppercase tracking-wider">
              Property Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wide transition-colors hover:text-brand-gold ${
                  isActive ? "text-brand-gold" : "text-brand-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex flex-col items-end leading-tight">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 text-brand-gold font-bold">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold/80">
              Available 24/7
            </span>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp FiveServ"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <Link to="/contact" className="cta-gold rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wide">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile: gold phone always clickable + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={`tel:${SITE.phone}`} aria-label="Call FiveServ" className="text-brand-gold">
            <Phone className="h-6 w-6" />
          </a>
          <button aria-label="Toggle menu" className="text-brand-white" onClick={() => setOpen((s) => !s)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-black border-t border-brand-gray">
          <div className="container flex flex-col gap-4 py-6">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-bold uppercase ${isActive ? "text-brand-gold" : "text-brand-white"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a href={`tel:${SITE.phone}`} className="text-brand-gold font-bold">
              📞 {SITE.phone} <span className="text-xs">· Available 24/7</span>
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] font-bold">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="cta-gold rounded-md px-5 py-3 text-center font-bold">
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
