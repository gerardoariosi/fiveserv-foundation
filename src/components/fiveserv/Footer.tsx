import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, SERVICES, CITIES, COMING_SOON_CITIES } from "@/lib/site-config";
import Logo from "@/components/fiveserv/Logo";

export const Footer = () => {
  return (
    <footer
      className="relative bg-brand-black border-t-2 border-brand-gold/30"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=%2750%27 height=%2750%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27rgba(255,255,255,0.10)%27%3E%3Cpath d=%27M25 4 Q26 24 46 25 Q26 26 25 46 Q24 26 4 25 Q24 24 25 4 Z%27/%3E%3Cpath d=%27M25 10 Q26 24 40 25 Q26 26 25 40 Q24 26 10 25 Q24 24 25 10 Z%27 transform=%27rotate(45 25 25)%27/%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: "50px 50px",
      }}
    >
      <div className="container py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="flex flex-col items-center gap-1 text-center">
              <Logo variant="light" imgClassName="h-12 w-auto object-contain mx-auto" />
            </Link>
            <p className="mt-3 text-sm italic text-gray-400">One Call. One Team. Done.</p>
            <p className="mt-3 text-sm text-brand-white/80">
              Family-owned property maintenance company serving Central Florida.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-white hover:text-brand-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-white hover:text-brand-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-white hover:text-brand-gold">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={SITE.social.yelp} target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="text-brand-white hover:text-brand-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              </a>
            </div>
            <p className="mt-3 text-xs text-brand-gray-muted">{SITE.social.handle} on all platforms</p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-brand-gold">Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-brand-white hover:text-brand-gold">{s.name}</Link>
                </li>
              ))}
              {[
                { slug: "plumbing", name: "Plumbing" },
                { slug: "electrical", name: "Electrical" },
                { slug: "hvac", name: "HVAC" },
                { slug: "painting", name: "Painting" },
                { slug: "flooring", name: "Flooring" },
                { slug: "cleaning", name: "Cleaning" },
              ].map((t) => (
                <li key={t.slug}>
                  <Link to={`/${t.slug}`} className="text-brand-white hover:text-brand-gold">{t.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cities */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-brand-gold">Service Areas</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/maintenance-${c.slug}`} className="text-brand-white hover:text-brand-gold">{c.name}, {c.state}</Link>
                </li>
              ))}
              {COMING_SOON_CITIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/${c.slug}`} className="text-brand-white/60 hover:text-brand-gold">
                    {c.name}, {c.state} — <span className="text-brand-gold">Coming Soon</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-brand-gold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-brand-gold font-bold">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-brand-white hover:text-brand-gold">
                  <Mail className="h-4 w-4" /> {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-brand-white/80">
                <MapPin className="h-4 w-4 text-brand-gold" /> {SITE.baseCity}, {SITE.baseState} — Central Florida
              </li>
              <li className="flex items-center gap-2 text-brand-white/80">
                <Clock className="h-4 w-4 text-brand-gold" /> Available 24/7 for emergencies
              </li>
            </ul>
            <Link to="/contact" className="mt-6 inline-block cta-gold rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wide">
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Gold hairline divider */}
        <div className="my-12 h-px bg-brand-gold/20" />

        {/* Bottom area */}
        <div className="pt-2 space-y-4 text-center md:text-left">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:justify-start">
            <Link to="/careers" className="text-white/60 hover:text-brand-gold">Careers</Link>
            <Link to="/privacy" className="text-white/60 hover:text-brand-gold">Privacy Policy</Link>
            <Link to="/terms" className="text-white/60 hover:text-brand-gold">Terms of Service</Link>
            <Link to="/work-policy" className="text-white/60 hover:text-brand-gold">Work Policy</Link>
          </nav>

          <address className="not-italic text-[11px] text-white/40">
            {SITE.legal} · {SITE.baseCity}, {SITE.baseState} · {SITE.phone} · {SITE.domain}
          </address>

          <div className="flex flex-col gap-1 text-[11px] text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2025 {SITE.legal}. All rights reserved.</p>
            <p>Licensed & Insured in Florida</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
