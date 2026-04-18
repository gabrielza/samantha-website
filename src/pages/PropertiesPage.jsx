import SEO from '../components/common/SEO';
import ContactForm from '../components/common/ContactForm';
import contact from '../data/contact';
import jp, { suburbs } from '../data/justproperty';

const regions = [...new Set(suburbs.map((s) => s.region))];

export default function PropertiesPage() {
  return (
    <>
      <SEO
        title="Properties"
        description="Browse live property listings for sale and to rent across Cape Town â€” powered by Just Property."
        path="/properties"
      />

      {/* Hero */}
      <section className="bg-navy-800 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-gold-400 font-medium">Live Listings</span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
            Cape Town Properties
          </h1>
          <p className="mt-3 text-[14px] text-gray-300 max-w-xl mx-auto">
            Browse verified listings powered by Just Property â€” updated in real time.
          </p>
        </div>
      </section>

      {/* Quick Search */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-14">
            <a
              href={jp.forSale()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-navy-800 px-6 py-5 text-white hover:bg-navy-700 transition-colors group"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
              <div>
                <span className="block text-[15px] font-semibold">Residential For Sale</span>
                <span className="block text-[12px] text-gray-300">Browse all Cape Town sales</span>
              </div>
              <svg className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
            <a
              href={jp.toRent()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-gold-500 px-6 py-5 text-navy-900 hover:bg-gold-400 transition-colors group"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" /></svg>
              <div>
                <span className="block text-[15px] font-semibold">Residential To Let</span>
                <span className="block text-[12px] text-navy-700">Browse all Cape Town rentals</span>
              </div>
              <svg className="h-4 w-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
          </div>

          {/* By Suburb */}
          <h2 className="text-2xl font-semibold text-navy-800 mb-8 text-center">Browse by Suburb</h2>

          {regions.map((region) => (
            <div key={region} className="mb-10">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-medium mb-4">{region}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {suburbs
                  .filter((s) => s.region === region)
                  .map((suburb) => (
                    <div key={suburb.slug} className="flex flex-col gap-1.5">
                      <a
                        href={jp.forSale(suburb.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-100 px-3 py-2 text-[13px] text-navy-700 hover:border-gold-300 hover:bg-gold-50 transition-all text-center"
                      >
                        {suburb.name}
                        <span className="block text-[10px] text-gray-400">For Sale</span>
                      </a>
                      <a
                        href={jp.toRent(suburb.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-gray-100 px-3 py-2 text-[13px] text-navy-700 hover:border-gold-300 hover:bg-gold-50 transition-all text-center"
                      >
                        {suburb.name}
                        <span className="block text-[10px] text-gray-400">To Let</span>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialty */}
      <section className="py-12 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-8 text-center">More Property Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'New Developments', href: jp.newDevelopments },
              { label: 'Vacant Land', href: jp.vacantLand },
              { label: 'Holiday Letting', href: jp.holidayLetting },
              { label: 'Commercial', href: jp.commercial },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white border border-gray-100 px-5 py-4 hover:shadow-md hover:border-gold-200 transition-all group"
              >
                <span className="text-[14px] font-medium text-navy-800 group-hover:text-gold-600 transition-colors">{item.label}</span>
                <span className="block text-[12px] text-gray-400 mt-1">View on Just Property</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-navy-800 mb-3">Can't Find What You're Looking For?</h2>
          <p className="text-[14px] text-gray-500 mb-8">
            Let me know your requirements and I'll personally match you with the right property.
          </p>
          <ContactForm className="mx-auto max-w-lg" />
        </div>
      </section>
    </>
  );
}
