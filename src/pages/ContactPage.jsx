import SEO from '../components/common/SEO';
import ContactForm from '../components/common/ContactForm';
import contact from '../data/contact';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Samantha Black — Cape Town's independent property specialist. WhatsApp, call, email, or send a message directly."
        path="/contact"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Let's Connect</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
            Contact Samantha
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Whether you're buying, selling, renting, or investing — I'm here to help. 
            Reach out through any channel below.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Direct Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-8">
                Instant Contact
              </h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-2xl bg-green-50 border border-green-200 p-5 hover:shadow-md transition-all group"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white group-hover:scale-110 transition-transform">
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-800">WhatsApp</p>
                    <p className="text-sm text-gray-600">Instant message — fastest response</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-center gap-5 rounded-2xl bg-teal-50 border border-teal-200 p-5 hover:shadow-md transition-all group"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-800 text-white group-hover:scale-110 transition-transform">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-800">Call Samantha</p>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent('Property Inquiry via SamanthaBlack.com')}`}
                  className="flex items-center gap-5 rounded-2xl bg-gold-50 border border-gold-200 p-5 hover:shadow-md transition-all group"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-white group-hover:scale-110 transition-transform">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-800">Email</p>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                  </div>
                </a>
              </div>

              {/* Office Hours */}
              <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Availability</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday — Friday</span>
                    <span className="font-medium">08:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">09:00 — 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday &amp; Public Holidays</span>
                    <span className="font-medium">By appointment</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  I aim to respond to all inquiries within 24 hours. For urgent matters, 
                  WhatsApp or call directly for the fastest response.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-teal-800 mb-2">
                Send a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in the form below and I'll get back to you personally.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
