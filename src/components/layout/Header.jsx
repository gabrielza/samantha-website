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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-teal-950/95 backdrop-blur-md shadow-lg'
          : 'bg-teal-950'
      }`}
    >
      <div className="mx-auto max-w-[1216px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[72px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-sm font-bold text-white">SB</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold tracking-wide text-white">
                Samantha Black
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Just Property
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
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
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
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-[13px] font-semibold text-teal-900 hover:bg-slate-100 transition-colors"
            >
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
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
        <div className="lg:hidden border-t border-white/10 bg-teal-950 animate-fade-in">
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
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-4 border-t border-white/10 mt-3">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white py-3 text-[13px] font-semibold text-teal-900"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 py-3 text-[13px] font-medium text-white"
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
