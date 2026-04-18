import SEO from '../components/common/SEO';
import TestimonialCard from '../components/common/TestimonialCard';
import ContactForm from '../components/common/ContactForm';
import contact from '../data/contact';
import testimonials from '../data/testimonials';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Samantha"
        description="Meet Samantha Black — independent Cape Town property specialist with proven market dominance across the Atlantic Seaboard, City Bowl, and Northern Suburbs."
        path="/about"
      />

      {/* Hero */}
      <section className="bg-navy-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">About</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
            Meet Samantha Black
          </h1>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/Samantha_Profile_Picture.jpeg"
                  alt="Samantha Black — Property Practitioner, Just Property Cape Town"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Credentials overlay */}
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-5 shadow-lg">
                <p className="text-2xl font-bold text-navy-800">{contact.yearsExperience}+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Years of Market Expertise</p>
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold-500 font-medium">
                Atlantic Seaboard &middot; City Bowl &middot; Northern Suburbs
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-navy-800">
                Specialising in Luxury Rentals &amp; Prime Residential Sales
              </h2>

              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As a proud representative of <strong>Just Property</strong> in Cape Town, I believe that
                  selling or buying a home shouldn't be a source of anxiety. With over {contact.yearsExperience} years 
                  navigating Cape Town's dynamic property landscape, my role is to bridge the gap between complex 
                  property law and your financial goals.
                </p>
                <p>
                  From luxury rentals in Fresnaye and the Cape Town City Centre 
                  to high-value residential sales in Parklands and across the Atlantic Seaboard — I bring 
                  deep local knowledge and genuine care to every transaction. Whether you are navigating a 
                  divorce, downsizing for retirement, or capitalising on the 2026 property cycle, I provide 
                  transparent, step-by-step guidance.
                </p>
                <p>
                  I coordinate with top conveyancers and compliance inspectors so you can focus on your 
                  next chapter. Every strategy I develop is tailored specifically to your property, your goals, 
                  and your timeline. Whether you're a first-time buyer navigating bond approvals, a family 
                  relocating from Gauteng, or an investor optimising your portfolio — you'll experience a 
                  level of personal attention that ensures peace of mind from listing to Deeds Office registration.
                </p>
              </div>

              {/* Services */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {contact.specializations.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-sm">
                    <svg className="h-5 w-5 text-gold-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-navy-700 font-medium">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Affiliations */}
              <div className="mt-8 rounded-xl bg-sand-50 p-5 border border-sand-200">
                <h3 className="text-sm font-semibold text-navy-800 mb-2">Professional Affiliations</h3>
                <ul className="space-y-1">
                  {contact.affiliations.map((a) => (
                    <li key={a} className="text-sm text-gray-600">{a}</li>
                  ))}
                  <li className="text-sm text-gray-600">Fidelity Fund Certificate: {contact.ffcNumber}</li>
                  <li className="text-sm text-gray-600">PPRA Registration: {contact.ppraNumber}</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-green-700 transition-colors"
                >
                  WhatsApp Me
                </a>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-navy-800 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-navy-700 transition-colors"
                >
                  Call Samantha
                </a>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent('Property Inquiry via SamanthaBlack.com')}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-navy-800 px-5 py-2.5 text-[13px] font-semibold text-navy-800 hover:bg-navy-800 hover:text-white transition-all"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500 font-medium">Social Proof</p>
            <h2 className="mt-2 text-3xl font-semibold text-navy-800">
              What My Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-navy-800 mb-3">Let's Connect</h2>
          <p className="text-gray-600 mb-10">
            Whether you're buying, selling, renting, or investing — I'd love to hear from you.
          </p>
          <ContactForm className="mx-auto max-w-lg" />
        </div>
      </section>
    </>
  );
}
