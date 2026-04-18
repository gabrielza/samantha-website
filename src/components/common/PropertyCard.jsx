import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  const placeholder = `https://placehold.co/600x400/1B2A4A/C9A96E?text=${encodeURIComponent(property.suburb)}`;

  return (
    <Link
      to={`/properties/${property.slug}`}
      className="group block rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images?.[0] || placeholder}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.target.src = placeholder; }}
          loading="lazy"
        />
        {/* Type Badge */}
        <span className="absolute top-3 left-3 rounded-full bg-navy-800/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          {property.type === 'rental' ? 'To Let' : 'For Sale'}
        </span>
        {/* Price */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
          <span className="text-lg font-semibold text-white">{property.priceFormatted}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-navy-800 group-hover:text-gold-500 transition-colors line-clamp-2">
          {property.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{property.location}</p>

        {/* Meta */}
        <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
            {property.bedrooms} Bed
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {property.bathrooms} Bath
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 4.5L9 15m10.5 0v4.5m0-4.5h-4.5m4.5 4.5L15 15" /></svg>
            {property.sqm} mÂ²
          </span>
        </div>

        {/* Tags */}
        {property.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {property.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-medium text-navy-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
