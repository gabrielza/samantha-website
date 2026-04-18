import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import LiveListings from '../components/common/LiveListings';
import NeighborhoodCard from '../components/common/NeighborhoodCard';
import TestimonialCard from '../components/common/TestimonialCard';
import ContactForm from '../components/common/ContactForm';
import contact from '../data/contact';
import jp from '../data/justproperty';
import neighborhoods from '../data/neighborhoods';
import testimonials from '../data/testimonials';

export default function HomePage() {
  const highlightedNeighborhoods = neighborhoods.slice(0, 4);

  return (
    <>
      <SEO
        description="Samantha Black — Property Practitioner, Just Property Cape Town. Luxury rentals, residential sales, and expert guidance across the Atlantic Seaboard, City Bowl, Parklands, and beyond."
        path="/"
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center bg-teal-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/90 to-teal-900/70 z-10" />
          <img
            src="/images/Free_Property_Valuation.jpeg"
            alt="Luxury Cape Town property with Table Mountain"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Portrait — top right */}
          <div className="hidden lg:block absolute top-0 right-8 animate-fade-in-delay">
            <div className="w-44 h-52 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="/images/Samantha_Profile_Picture.jpeg"
                alt="Samantha Black — Property Practitioner"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 rounded-lg bg-white px-3 py-1.5 shadow-lg">
              <p className="text-[11px] font-semibold text-teal-800">Experienced</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-wider">Property Practitioner</p>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="animate-fade-in">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium mb-5">
                Just Property Cape Town
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Find Your Place<br />
                <span className="text-gold-400">in Cape Town</span>
              </h1>
              <p className="mt-5 max-w-md text-[15px] text-gray-300 leading-relaxed">
                Experienced Property Practitioner focused on the Cape Town Atlantic Seaboard and City Bowl.
              </p>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={jp.agentListings}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors"
                >
                  Browse For Sale
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
                <a
                  href={jp.toRent()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Browse Rentals
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-[13px] font-semibold text-white hover:bg-green-700 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  WhatsApp
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  PPRA Registered
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  Just Property Affiliate
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  Experienced Practitioner
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SERVICES (Buy / Sell / Rent) ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-medium">How I Can Help</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-teal-800">
              Seamless Solutions for Every Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Buy a Home',
                desc: 'Browse verified listings across Cape Town. From first-time purchases to luxury investments.',
                href: jp.agentListings,
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                ),
              },
              {
                title: 'Sell Your Property',
                desc: 'Get a free market valuation and expert pricing strategy to maximise your return.',
                href: '/valuation',
                internal: true,
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                ),
              },
              {
                title: 'Find a Rental',
                desc: 'Discover quality rental properties in sought-after Cape Town neighbourhoods.',
                href: jp.toRent(),
                icon: (
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" /></svg>
                ),
              },
            ].map((service) => {
              const Tag = service.internal ? Link : 'a';
              const linkProps = service.internal
                ? { to: service.href }
                : { href: service.href, target: '_blank', rel: 'noopener noreferrer' };
              return (
              <Tag
                key={service.title}
                {...linkProps}
                className="group rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-lg hover:border-gold-200 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-teal-800">{service.title}</h3>
                <p className="mt-2 text-[14px] text-gray-500 leading-relaxed">{service.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-gold-500 group-hover:text-gold-600">
                  Explore
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </span>
              </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LIVE LISTINGS ===== */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-medium">Live from Just Property</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-teal-800">
              My Active Listings
            </h2>
            <p className="mt-3 max-w-lg mx-auto text-[14px] text-gray-500">
              Browse my current properties available for sale and to let across Cape Town.
            </p>
          </div>
          <LiveListings limit={8} />
          <div className="mt-10 text-center">
            <a
              href={jp.agentListings}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gold-500 hover:text-gold-600"
            >
              View All My Listings on Just Property
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== BUYER TOOLS ===== */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-medium">Free Tools</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-teal-800">
              Property Tools &amp; Resources
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Bond Calculator', href: jp.calculators, icon: '\uD83E\uDDEE' },
              { label: 'Free Valuation', href: '/valuation', icon: '\uD83D\uDCCA', internal: true },
              { label: 'Email Alerts', href: jp.emailAlerts, icon: '\uD83D\uDD14' },
              { label: 'Area Profiles', href: jp.areaProfiles, icon: '\uD83D\uDCCD' },
            ].map((tool) => {
              const Tag = tool.internal ? Link : 'a';
              const linkProps = tool.internal
                ? { to: tool.href }
                : { href: tool.href, target: '_blank', rel: 'noopener noreferrer' };
              return (
              <Tag
                key={tool.label}
                {...linkProps}
                className="flex flex-col items-center gap-2 rounded-xl bg-white border border-gray-100 p-5 hover:shadow-md hover:border-gold-200 transition-all text-center group"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="text-[13px] font-medium text-teal-700 group-hover:text-gold-600 transition-colors">{tool.label}</span>
              </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== NEIGHBORHOODS ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-medium">Explore Cape Town</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-teal-800">
              Discover Top Neighborhoods
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightedNeighborhoods.map((n) => (
              <NeighborhoodCard key={n.id} neighborhood={n} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/neighborhoods"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gold-500 hover:text-gold-600"
            >
              View All Neighborhoods
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-medium">Testimonials</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-teal-800">
              Trusted by Homeowners Across Cape Town
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== REFERRAL CTA ===== */}
      <section className="relative py-20 bg-teal-900 overflow-hidden min-h-[360px]">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/80 to-teal-900/30 z-10" />
        <img
          src="/images/Comission for leads.jpeg"
          alt="Referral programme"
          className="absolute inset-0 h-full w-full object-contain object-right"
        />
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-medium">Referral Programme</span>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Get Paid for Your Referrals
            </h2>
            <p className="mt-3 text-[14px] text-gray-300 leading-relaxed">
              Know someone buying or selling in Cape Town? Earn a referral fee on every
              successful sale. Simple, transparent, open to everyone.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi Samantha, I'd like to learn more about your referral programme.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors"
              >
                Get Details
              </a>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent('Referral Programme Inquiry')}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-teal-800">Get in Touch</h2>
            <p className="mt-3 text-[14px] text-gray-500">
              Send a message and I'll respond within 24 hours.
            </p>
          </div>
          <ContactForm className="mx-auto max-w-lg" />
        </div>
      </section>
    </>
  );
}
