import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, SERVICES, CITIES, COMING_SOON_CITIES } from "@/lib/site-config";
import BrandName from "@/components/fiveserv/BrandName";
import Logo from "@/components/fiveserv/Logo";

export const Footer = () => {
  return (
    <footer className="bg-brand-black border-t-2 border-brand-gold">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <Logo variant="light" imgClassName="h-10 w-auto object-contain" />
              <span className="font-display font-bold text-brand-white text-lg"><BrandName variant="light" /></span>
            </Link>
            <p className="mt-3 text-sm italic text-gray-400">Five Days. One Call. Done.</p>
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
            </div>
            <p className="mt-3 text-xs text-brand-gray-muted">{SITE.social.handle} on all platforms</p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Services</h2>
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
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Service Areas</h2>
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
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Contact</h2>
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

        {/* NAP for Google */}
        <address className="mt-12 not-italic text-xs text-brand-gray-muted">
          {SITE.legal} | {SITE.baseCity}, {SITE.baseState} | {SITE.phone} | {SITE.domain}
        </address>
      </div>

      <div className="bg-black">
        <div className="container flex flex-col gap-3 py-4 text-xs text-brand-gray-muted md:flex-row md:items-center md:justify-between">
          <p>© 2025 {SITE.legal}. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-brand-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-gold">Terms of Service</Link>
          </p>
          <p>Licensed and Insured in Florida — [LICENSES_AND_INSURANCE]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
