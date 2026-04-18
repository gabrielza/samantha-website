import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import contact from '../../data/contact';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/neighborhoods', label: 'Neighborhoods' },
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[72px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="h-9 w-9 rounded-full bg-navy-800 flex items-center justify-center">
              <span className="text-sm font-bold text-gold-400">SB</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold tracking-wide text-navy-800">
                Samantha Black
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-navy-400">
                Just Property Cape Town
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-gold-600 bg-gold-50'
                      : 'text-navy-600 hover:text-navy-800 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3.5 py-2 text-[13px] font-medium text-white hover:bg-green-700 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp
            </a>
            <a
              href={`tel:${contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-navy-200 px-3.5 py-2 text-[13px] font-medium text-navy-700 hover:bg-navy-50 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-navy-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-fade-in">
          <nav className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-[14px] font-medium transition-colors ${
                    isActive
                      ? 'bg-gold-50 text-gold-600'
                      : 'text-navy-600 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-4 border-t border-gray-100 mt-3">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 py-3 text-[13px] font-medium text-white"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-navy-800 py-3 text-[13px] font-medium text-white"
              >
                Call Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
