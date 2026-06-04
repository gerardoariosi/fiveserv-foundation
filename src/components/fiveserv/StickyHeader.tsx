import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CheckCircle2, ChevronDown, ChevronRight, Clock, Menu, Phone, Tag, X } from "lucide-react";
import { SITE } from "@/lib/site-config";
import Logo from "@/components/fiveserv/Logo";

const SERVICES_MAIN = [
  { to: "/make-ready", label: "Make-Ready & Unit Turns" },
  { to: "/maintenance", label: "Maintenance & Repairs" },
  { to: "/renovations", label: "CapEx & Renovations" },
  { to: "/residential", label: "Residential Services" },
];

const SERVICES_ESPECIALIDADES = [
  { to: "/painting", label: "Painting" },
  { to: "/plumbing", label: "Plumbing" },
  { to: "/electrical", label: "Electrical" },
  { to: "/hvac", label: "HVAC" },
  { to: "/drywall", label: "Drywall" },
  { to: "/flooring", label: "Flooring" },
  { to: "/carpentry", label: "Carpentry" },
  { to: "/cleaning", label: "Cleaning" },
];

const CITIES_FEATURED = [
  { to: "/maintenance-orlando-fl", label: "Orlando" },
  { to: "/maintenance-kissimmee-fl", label: "Kissimmee" },
  { to: "/maintenance-sanford-fl", label: "Sanford" },
  { to: "/maintenance-winter-park-fl", label: "Winter Park" },
  { to: "/maintenance-lakeland-fl", label: "Lakeland" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.6.952-1.001 3.65 3.738-.962.642.302zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
  </svg>
);

const navItemBase =
  "uppercase tracking-[0.05em] text-[13px] font-semibold transition-colors";

export const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateHeight = () => {
      const h = scrolled ? 120 : 160;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    updateHeight();
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
    setMobileCitiesOpen(false);
  }, [location.pathname]);

  const waHref = `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}`;

  const navLinkCls = ({ isActive }: { isActive: boolean }) =>
    `${navItemBase} ${isActive ? "text-brand-gold" : "text-[#1A1A1A] hover:text-brand-gold"}`;

  return (
    <header
      style={{ top: "var(--banner-h, 0px)" }}
      className={`fixed inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      {/* LEVEL 1 — Announcement bar */}
      <div
        className={`hidden md:block bg-[#1A1A1A] overflow-hidden transition-all duration-300 ${
          scrolled ? "h-0" : "h-10"
        }`}
      >
        <div className="container h-10 flex items-center justify-center">
          <div className="flex items-center divide-x divide-white/15 text-[12px] font-medium text-white">
            <div className="flex items-center gap-2 px-5">
              <CheckCircle2 className="text-brand-gold" size={14} />
              <span>300+ Units Completed — Central Florida</span>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 hover:text-brand-gold transition-colors"
            >
              <Tag className="text-brand-gold" size={14} />
              <span>Free Quote in 24 Hours</span>
            </Link>
            <div className="flex items-center gap-2 px-5">
              <Clock className="text-brand-gold" size={14} />
              <span>24/7 Emergency Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* LEVEL 2 — Logo + CTA bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-[70px] gap-4">
          <Link to="/" className="flex items-center gap-2" aria-label="FiveServ home">
            <Logo variant="dark" imgClassName="h-14 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-5">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-[15px] font-bold text-[#1A1A1A] hover:text-brand-gold transition-colors"
            >
              <Phone className="h-4 w-4 text-brand-gold" />
              {SITE.phone}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp FiveServ"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <Link
              to="/contact"
              className="bg-[#FFD700] text-[#1A1A1A] font-bold rounded-[4px] px-6 py-[10px] hover:brightness-95 transition-all"
            >
              Request a Quote →
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a href={`tel:${SITE.phone}`} aria-label="Call FiveServ">
              <Phone className="h-6 w-6 text-brand-gold" />
            </a>
            <button
              aria-label="Toggle menu"
              className="text-brand-gold"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* LEVEL 3 — Navigation bar */}
      <nav className="hidden md:block bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="container h-[50px] flex items-center justify-center gap-8">
          <NavLink to="/" end className={navLinkCls}>
            Home
          </NavLink>

          {/* Services with dropdown */}
          <div className="relative group h-full flex items-center">
            <button className={`${navItemBase} text-[#1A1A1A] group-hover:text-brand-gold flex items-center gap-1`}>
              Services <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full w-[280px] invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 bg-[#1A1A1A] border-t-2 border-brand-gold rounded-b-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] py-4 z-50">
              {SERVICES_MAIN.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="block px-6 py-[10px] text-[14px] text-white hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-colors"
                >
                  {s.label}
                </Link>
              ))}
              <div className="h-px bg-brand-gold/60 my-2 mx-6" />
              {/* Especialidades nested */}
              <div className="relative group/esp">
                <button className="w-full flex items-center justify-between px-6 py-[10px] text-[14px] text-white hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-colors">
                  <span>Especialidades</span>
                  <ChevronRight size={14} />
                </button>
                <div className="absolute left-full top-0 w-[220px] invisible opacity-0 group-hover/esp:visible group-hover/esp:opacity-100 transition-all duration-150 bg-[#1A1A1A] border-t-2 border-brand-gold rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] py-4 ml-1">
                  {SERVICES_ESPECIALIDADES.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-6 py-[10px] text-[14px] text-white hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/for-property-managers" className={navLinkCls}>
            Partners
          </NavLink>

          {/* Cities dropdown */}
          <div className="relative group h-full flex items-center">
            <button className={`${navItemBase} text-[#1A1A1A] group-hover:text-brand-gold flex items-center gap-1`}>
              Cities <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full w-[240px] invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 bg-[#1A1A1A] border-t-2 border-brand-gold rounded-b-lg shadow-[0_8px_24px_rgba(0,0,0,0.15)] py-4 z-50">
              {CITIES_FEATURED.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  className="block px-6 py-[10px] text-[14px] text-white hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-colors"
                >
                  {c.label}
                </Link>
              ))}
              <div className="h-px bg-brand-gold/60 my-2 mx-6" />
              <Link
                to="/cities"
                className="block px-6 py-[10px] text-[14px] text-brand-gold font-bold hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-colors"
              >
                View All Cities →
              </Link>
            </div>
          </div>

          <NavLink to="/about" className={navLinkCls}>About</NavLink>
          <NavLink to="/blog" className={navLinkCls}>Blog</NavLink>
          <NavLink to="/contact" className={navLinkCls}>Contact</NavLink>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#1A1A1A] overflow-y-auto animate-in slide-in-from-right duration-200">
          <div className="container flex flex-col py-6 gap-1">
            <Link to="/" className="py-3 text-white font-semibold uppercase tracking-wider text-sm hover:text-brand-gold">Home</Link>

            <button
              onClick={() => setMobileServicesOpen((s) => !s)}
              className="flex items-center justify-between py-3 text-white font-semibold uppercase tracking-wider text-sm"
            >
              <span>Services</span>
              <ChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} size={16} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 border-l border-brand-gold/40 ml-1 flex flex-col gap-1 pb-2">
                {SERVICES_MAIN.map((s) => (
                  <Link key={s.to} to={s.to} className="py-2 text-white/90 text-[14px] hover:text-brand-gold">
                    {s.label}
                  </Link>
                ))}
                <div className="h-px bg-brand-gold/40 my-2" />
                <span className="text-brand-gold text-xs uppercase tracking-wider py-1">Especialidades</span>
                {SERVICES_ESPECIALIDADES.map((s) => (
                  <Link key={s.to} to={s.to} className="py-2 text-white/90 text-[14px] hover:text-brand-gold">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/for-property-managers" className="py-3 text-white font-semibold uppercase tracking-wider text-sm hover:text-brand-gold">Partners</Link>

            <button
              onClick={() => setMobileCitiesOpen((s) => !s)}
              className="flex items-center justify-between py-3 text-white font-semibold uppercase tracking-wider text-sm"
            >
              <span>Cities</span>
              <ChevronDown className={`transition-transform ${mobileCitiesOpen ? "rotate-180" : ""}`} size={16} />
            </button>
            {mobileCitiesOpen && (
              <div className="pl-4 border-l border-brand-gold/40 ml-1 flex flex-col gap-1 pb-2">
                {CITIES_FEATURED.map((c) => (
                  <Link key={c.to} to={c.to} className="py-2 text-white/90 text-[14px] hover:text-brand-gold">
                    {c.label}
                  </Link>
                ))}
                <div className="h-px bg-brand-gold/40 my-2" />
                <Link to="/cities" className="py-2 text-brand-gold text-[14px] font-bold">View All Cities →</Link>
              </div>
            )}

            <Link to="/about" className="py-3 text-white font-semibold uppercase tracking-wider text-sm hover:text-brand-gold">About</Link>
            <Link to="/blog" className="py-3 text-white font-semibold uppercase tracking-wider text-sm hover:text-brand-gold">Blog</Link>
            <Link to="/contact" className="py-3 text-white font-semibold uppercase tracking-wider text-sm hover:text-brand-gold">Contact</Link>

            <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-white/10">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-white font-bold">
                <Phone className="h-5 w-5 text-brand-gold" /> {SITE.phone}
              </a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] font-semibold">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
              </a>
              <Link
                to="/contact"
                className="bg-[#FFD700] text-[#1A1A1A] font-bold rounded-[4px] px-6 py-3 text-center"
              >
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
