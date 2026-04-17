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

export const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-brand-black/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight">
          <span className="text-brand-gold">F</span>
          <span className="text-brand-white">iveServ</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-brand-gold font-bold">
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-brand-white hover:text-brand-gold"
          >
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="cta-gold rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-brand-white"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
              📞 {SITE.phone}
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
