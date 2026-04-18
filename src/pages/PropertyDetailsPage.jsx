import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ContactForm from '../components/common/ContactForm';
import contact from '../data/contact';
import properties from '../data/properties';

export default function PropertyDetailsPage() {
  const { slug } = useParams();
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-heading text-3xl font-bold text-navy-800">Property Not Found</h1>
        <p className="mt-3 text-gray-600">The property you're looking for doesn't exist.</p>
        <Link to="/properties" className="mt-6 inline-block text-gold-500 font-medium hover:underline">
          &larr; Back to Properties
        </Link>
      </div>
    );
  }

  const placeholder = `https://placehold.co/1200x600/1B2A4A/C9A96E?text=${encodeURIComponent(property.suburb)}`;

  return (
    <>
      <SEO
        title={property.title}
        description={property.description.slice(0, 160)}
        path={`/properties/${property.slug}`}
      />

      {/* Breadcrumb */}
      <div className="bg-sand-50 border-b border-sand-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold-500">Properties</Link>
            <span>/</span>
            <span className="text-navy-700 font-medium truncate">{property.title}</span>
          </nav>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-navy-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={property.images?.[0] || placeholder}
                alt={property.title}
                className="h-full w-full object-cover"
                onError={(e) => { e.target.src = placeholder; }}
              />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden bg-navy-800">
                  <img
                    src={property.images?.[i] || placeholder}
                    alt={`${property.title} - ${i + 1}`}
                    className="h-full w-full object-cover opacity-90"
                    onError={(e) => { e.target.src = placeholder; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full bg-navy-800 px-3 py-1 text-xs font-semibold uppercase text-white mb-3">
                    {property.type === 'rental' ? 'To Let' : 'For Sale'}
                  </span>
                  <h1 className="font-heading text-2xl sm:text-3xl font-bold text-navy-800">
                    {property.title}
                  </h1>
                  <p className="mt-1 text-gray-500">{property.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-gold-500">
                    {property.priceFormatted}
                  </p>
                </div>
              </div>

              {/* Meta Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Bedrooms', value: property.bedrooms, icon: '🛏️' },
                  { label: 'Bathrooms', value: property.bathrooms, icon: '🚿' },
                  { label: 'Size', value: `${property.sqm} m²`, icon: '📐' },
                  { label: 'Parking', value: property.parking, icon: '🚗' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-sand-50 p-4 text-center">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="mt-1 text-lg font-semibold text-navy-800">{item.value}</p>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              {property.tags?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {property.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gold-50 border border-gold-200 px-3 py-1 text-xs font-medium text-gold-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="mt-8">
                <h2 className="font-heading text-xl font-semibold text-navy-800 mb-4">About This Property</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              {property.features?.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-heading text-xl font-semibold text-navy-800 mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Actions */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hi Samantha, I'm interested in: ${property.title} (${property.priceFormatted})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                >
                  Quick Inquiry via WhatsApp
                </a>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry: ${property.title}`)}&body=${encodeURIComponent(`Hi Samantha,\n\nI'm interested in the property: ${property.title}\nPrice: ${property.priceFormatted}\nLocation: ${property.location}\n\nPlease contact me to arrange a viewing.\n\nThank you.`)}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-navy-800 px-6 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-800 hover:text-white transition-all"
                >
                  Email Inquiry
                </a>
              </div>
            </div>

            {/* Sticky Sidebar Form */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl bg-sand-50 p-6 border border-sand-200">
                  <h3 className="font-heading text-lg font-semibold text-navy-800 mb-1">
                    Inquire About This Property
                  </h3>
                  <p className="text-xs text-gray-500 mb-5">
                    Samantha will respond within 24 hours.
                  </p>
                  <ContactForm
                    formName="property-inquiry"
                    propertyTitle={property.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
