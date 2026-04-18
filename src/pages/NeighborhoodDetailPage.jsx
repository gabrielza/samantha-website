import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PropertyCard from '../components/common/PropertyCard';
import ContactForm from '../components/common/ContactForm';
import neighborhoods from '../data/neighborhoods';
import properties from '../data/properties';

export default function NeighborhoodDetailPage() {
  const { slug } = useParams();
  const neighborhood = neighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-navy-800">Neighborhood Not Found</h1>
        <Link to="/neighborhoods" className="mt-6 inline-block text-gold-500 font-medium hover:underline">
          &larr; Back to Neighborhoods
        </Link>
      </div>
    );
  }

  const areaProperties = properties.filter(
    (p) => p.suburb === neighborhood.name || p.region === neighborhood.region
  ).slice(0, 3);

  return (
    <>
      <SEO
        title={`${neighborhood.name} â€” Neighborhood Guide`}
        description={neighborhood.description.slice(0, 160)}
        path={`/neighborhoods/${neighborhood.slug}`}
      />

      {/* Hero */}
      <section className="bg-navy-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link to="/neighborhoods" className="hover:text-gold-400">Neighborhoods</Link>
            <span>/</span>
            <span className="text-white">{neighborhood.name}</span>
          </nav>
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">
            {neighborhood.region}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            {neighborhood.name}
          </h1>
          <p className="mt-2 text-lg text-gold-300 italic">{neighborhood.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed text-lg">{neighborhood.description}</p>

              {/* Highlights */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-navy-800 mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {neighborhood.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-gray-700">
                      <svg className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Properties in Area */}
              {areaProperties.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-semibold text-navy-800 mb-6">
                    Available Properties in {neighborhood.region}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areaProperties.map((p) => (
                      <PropertyCard key={p.id} property={p} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Quick Facts */}
                <div className="rounded-2xl bg-sand-50 p-6 border border-sand-200">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">Quick Facts</h3>
                  <dl className="space-y-3">
                    {[
                      { label: 'Price Range', value: neighborhood.priceRange },
                      { label: 'Lifestyle', value: neighborhood.lifestyle },
                      { label: 'Architecture', value: neighborhood.architecturalStyle },
                      { label: 'Demographic', value: neighborhood.demographic },
                    ].map((item) => (
                      <div key={item.label}>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">{item.label}</dt>
                        <dd className="text-sm font-medium text-navy-800">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Contact */}
                <div className="rounded-2xl bg-sand-50 p-6 border border-sand-200">
                  <h3 className="text-lg font-semibold text-navy-800 mb-1">
                    Interested in {neighborhood.name}?
                  </h3>
                  <p className="text-xs text-gray-500 mb-5">Get expert guidance on this area.</p>
                  <ContactForm formName="contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
