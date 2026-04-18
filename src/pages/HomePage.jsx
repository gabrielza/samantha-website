import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PropertyCard from '../components/common/PropertyCard';
import NeighborhoodCard from '../components/common/NeighborhoodCard';
import TestimonialCard from '../components/common/TestimonialCard';
import ContactForm from '../components/common/ContactForm';
import contact from '../data/contact';
import properties from '../data/properties';
import neighborhoods from '../data/neighborhoods';
import testimonials from '../data/testimonials';

export default function HomePage() {
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  const highlightedNeighborhoods = neighborhoods.slice(0, 4);

  return (
    <>
      <SEO
        description="Samantha Black — Independent Cape Town property specialist. Luxury rentals, residential sales, and expert guidance across the Atlantic Seaboard, City Bowl, Parklands, and beyond."
        path="/"
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-navy-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-800/80 to-navy-900/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80"
            alt="Cape Town Atlantic Seaboard aerial view"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 text-center animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-400 font-medium mb-4">
            Property Practitioner — Just Property Cape Town
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Navigate the Cape Town<br />
            Property Market with <span className="text-gold-400">Confidence</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Expert guidance, transparent processes, and dedicated service from listing to 
            Deeds Office registration. From luxury Atlantic Seaboard rentals to prime 
            Parklands acquisitions — maximise your property's value in 2026.
          </p>

          {/* Contact Block */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp Me
            </a>
            <a
              href={`tel:${contact.phoneRaw}`}
              className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              Call Now
            </a>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent('Property Inquiry via SamanthaBlack.com')}`}
              className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              Email Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="h-6 w-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ===== TRUST RIBBON ===== */}
      <section className="bg-sand-50 border-y border-sand-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-navy-700">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              <span className="font-medium">PPRA Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
              <span>Just Property Affiliate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" /></svg>
              <span>eDRS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" /></svg>
              <span>Atlantic Seaboard &middot; City Bowl &middot; Northern Suburbs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED LISTINGS ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 font-medium">Exclusive Mandates</p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-navy-800">
              Featured Properties
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              A curated selection of premium properties across Cape Town's most desirable addresses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-800 px-8 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-800 hover:text-white transition-all"
            >
              View All Properties
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== AUDIENCE SEGMENTATION ===== */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800">
              How Can I Help You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buyers / Families */}
            <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-navy-800 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-800 mb-3">
                Buying Your Dream Home
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Whether you're seeking a spacious family estate in Fresnaye, a beachfront villa in Camps Bay, 
                or your first home in Parklands — I'll guide you through every step with clarity and care.
              </p>
              <Link
                to="/properties?type=sale"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600"
              >
                Browse Properties for Sale
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>

            {/* Investors / Renters */}
            <div className="rounded-2xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-navy-800 flex items-center justify-center mb-5">
                <svg className="h-6 w-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-800 mb-3">
                Investing & Renting
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Access high-yield urban apartments in the City Centre, premium rentals on the Atlantic Seaboard, 
                and smart investment opportunities backed by data-driven market insight.
              </p>
              <Link
                to="/properties?type=rental"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600"
              >
                Browse Rentals & Investments
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEIGHBORHOODS ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 font-medium">Local Expertise</p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-navy-800">
              Explore Cape Town's Finest Neighborhoods
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightedNeighborhoods.map((n) => (
              <NeighborhoodCard key={n.id} neighborhood={n} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/neighborhoods"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600"
            >
              View All Neighborhood Guides
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 font-medium">Client Testimonials</p>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-navy-800">
              Trusted by Homeowners Across Cape Town
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER CONTACT FORM ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-800">
              Get in Touch
            </h2>
            <p className="mt-3 text-gray-600">
              Ready to discuss the Cape Town property market? Send me a message and I'll respond within 24 hours.
            </p>
          </div>
          <ContactForm className="mx-auto max-w-lg" />
        </div>
      </section>
    </>
  );
}
