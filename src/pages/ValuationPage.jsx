import { useState } from 'react';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

const propertyTypes = [
  'Apartment / Flat',
  'House',
  'Townhouse',
  'Duplex',
  'Penthouse',
  'Vacant Land',
  'Commercial',
  'Other',
];

const provinces = [
  'Western Cape',
  'Gauteng',
  'KwaZulu-Natal',
  'Eastern Cape',
  'Free State',
  'Limpopo',
  'Mpumalanga',
  'North West',
  'Northern Cape',
];

const reasons = [
  'I want to sell',
  'Refinancing / Bond review',
  'Divorce or estate settlement',
  'Curiosity / Market awareness',
  'Insurance purposes',
  'Investment decision',
];

const conditions = ['Excellent', 'Good', 'Fair', 'Needs Renovation'];

export default function ValuationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setSubmitted(true);
    } catch {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Free Valuation Request')}&body=${encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nAddress: ${data.get('street-address')}, ${data.get('suburb')}\nProperty Type: ${data.get('property-type')}`)}`;
    }
  };

  return (
    <>
      <SEO
        title="Free Property Valuation"
        description="Request a free, no-obligation property valuation from Samantha Black — Just Property Cape Town. Know what your property is worth in today's market."
        path="/valuation"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Free &amp; No Obligation</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
            Request a Property Valuation
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Complete the form below and Samantha will provide a professional
            Comparative Market Analysis (CMA) tailored to your property.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          {submitted ? (
            <div className="rounded-2xl bg-green-50 p-10 text-center">
              <svg className="mx-auto h-14 w-14 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="mt-5 text-2xl font-semibold text-teal-800">Valuation Request Received</h2>
              <p className="mt-3 text-gray-600 max-w-md mx-auto">
                Thank you! Samantha will review your property details and get back to you
                within 24 hours with a professional market assessment.
              </p>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Samantha, I just submitted a valuation request on your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
              >
                WhatsApp Samantha
              </a>
            </div>
          ) : (
            <form
              name="valuation"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="valuation" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              {/* ── Owner Details ── */}
              <fieldset className="mb-10">
                <legend className="text-lg font-semibold text-teal-800 mb-1">Your Details</legend>
                <p className="text-sm text-gray-500 mb-5">So Samantha can get back to you with the valuation.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="val-name" className="block text-sm font-medium text-teal-700 mb-1">Full Name *</label>
                    <input type="text" id="val-name" name="name" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="val-email" className="block text-sm font-medium text-teal-700 mb-1">Email Address *</label>
                    <input type="email" id="val-email" name="email" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="val-phone" className="block text-sm font-medium text-teal-700 mb-1">Contact Number *</label>
                    <input type="tel" id="val-phone" name="phone" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="+27 00 000 0000" />
                  </div>
                  <div>
                    <label htmlFor="val-contact-pref" className="block text-sm font-medium text-teal-700 mb-1">Preferred Contact Method</label>
                    <select id="val-contact-pref" name="contact-preference" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* ── Property Address ── */}
              <fieldset className="mb-10">
                <legend className="text-lg font-semibold text-teal-800 mb-1">Property Address</legend>
                <p className="text-sm text-gray-500 mb-5">Where is the property located?</p>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="val-street" className="block text-sm font-medium text-teal-700 mb-1">Street Address *</label>
                    <input type="text" id="val-street" name="street-address" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. 12 Beach Road" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="val-suburb" className="block text-sm font-medium text-teal-700 mb-1">Suburb *</label>
                      <input type="text" id="val-suburb" name="suburb" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. Sea Point, Sandton, Umhlanga" />
                    </div>
                    <div>
                      <label htmlFor="val-city" className="block text-sm font-medium text-teal-700 mb-1">City / Town *</label>
                      <input type="text" id="val-city" name="city" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. Cape Town, Johannesburg" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="val-province" className="block text-sm font-medium text-teal-700 mb-1">Province *</label>
                      <select id="val-province" name="province" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                        <option value="">Select province</option>
                        {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="val-postal" className="block text-sm font-medium text-teal-700 mb-1">Postal Code</label>
                      <input type="text" id="val-postal" name="postal-code" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. 8005" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="val-complex" className="block text-sm font-medium text-teal-700 mb-1">Complex / Building Name (if applicable)</label>
                    <input type="text" id="val-complex" name="complex-name" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. Ocean View Apartments, Unit 4B" />
                  </div>
                </div>
              </fieldset>

              {/* ── Property Details ── */}
              <fieldset className="mb-10">
                <legend className="text-lg font-semibold text-teal-800 mb-1">Property Details</legend>
                <p className="text-sm text-gray-500 mb-5">Help us understand the property better for an accurate valuation.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="val-type" className="block text-sm font-medium text-teal-700 mb-1">Property Type *</label>
                    <select id="val-type" name="property-type" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                      <option value="">Select type</option>
                      {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="val-condition" className="block text-sm font-medium text-teal-700 mb-1">Overall Condition</label>
                    <select id="val-condition" name="condition" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                      <option value="">Select condition</option>
                      {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="val-beds" className="block text-sm font-medium text-teal-700 mb-1">Bedrooms *</label>
                    <select id="val-beds" name="bedrooms" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                      {['Studio', '1', '2', '3', '4', '5', '6+'].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="val-baths" className="block text-sm font-medium text-teal-700 mb-1">Bathrooms *</label>
                    <select id="val-baths" name="bathrooms" required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                      {['1', '2', '3', '4', '5+'].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="val-parking" className="block text-sm font-medium text-teal-700 mb-1">Parking Bays</label>
                    <select id="val-parking" name="parking" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                      {['0', '1', '2', '3', '4+'].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="val-size" className="block text-sm font-medium text-teal-700 mb-1">Floor Size (m\u00B2)</label>
                    <input type="number" id="val-size" name="floor-size" min="0" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. 120" />
                  </div>
                  <div>
                    <label htmlFor="val-erf" className="block text-sm font-medium text-teal-700 mb-1">Erf / Land Size (m\u00B2)</label>
                    <input type="number" id="val-erf" name="erf-size" min="0" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. 450" />
                  </div>
                  <div>
                    <label htmlFor="val-year" className="block text-sm font-medium text-teal-700 mb-1">Year Built (approx.)</label>
                    <input type="number" id="val-year" name="year-built" min="1900" max="2026" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all" placeholder="e.g. 2005" />
                  </div>
                </div>
              </fieldset>

              {/* ── Additional Info ── */}
              <fieldset className="mb-10">
                <legend className="text-lg font-semibold text-teal-800 mb-1">Additional Information</legend>
                <p className="text-sm text-gray-500 mb-5">Anything else that may affect the valuation.</p>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="val-reason" className="block text-sm font-medium text-teal-700 mb-1">Reason for Valuation</label>
                    <select id="val-reason" name="reason" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white">
                      <option value="">Select reason</option>
                      {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="val-renovations" className="block text-sm font-medium text-teal-700 mb-1">Recent Renovations or Upgrades</label>
                    <textarea id="val-renovations" name="renovations" rows={3} className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none" placeholder="e.g. New kitchen 2024, solar panels installed, bathroom refurbished..." />
                  </div>
                  <div>
                    <label htmlFor="val-notes" className="block text-sm font-medium text-teal-700 mb-1">Additional Notes</label>
                    <textarea id="val-notes" name="notes" rows={3} className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none" placeholder="Any other details — views, special features, timeline, etc." />
                  </div>
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-lg bg-teal-800 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
              >
                Request My Free Valuation
              </button>
              <p className="mt-3 text-center text-xs text-gray-400">
                Your information is private and will only be used to prepare your valuation.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-teal-800 mb-3">What You'll Receive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Market Analysis', desc: 'Recent comparable sales and current competition in your area.' },
              { title: 'Pricing Strategy', desc: 'A recommended listing price based on real market data.' },
              { title: 'Personal Consultation', desc: 'A follow-up call to discuss your options and timeline.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white border border-gray-100 p-5">
                <h3 className="text-sm font-semibold text-teal-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
