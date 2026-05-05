import { useState, useEffect } from 'react';
import PropertyActions from './PropertyActions';

const FALLBACK_IMG = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="480" fill="#e2e8f0"><rect width="720" height="480"/><text x="360" y="240" text-anchor="middle" fill="#94a3b8" font-size="18" font-family="sans-serif">No Image</text></svg>'
);

export default function LiveListings({ type = 'for-sale', limit = 8 }) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    fetch(`/api/listings?type=${type}&limit=${limit}`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to fetch');
        return r.json();
      })
      .then((data) => {
        if (!cancelled) {
          setListings(data.listings || []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [type, limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: Math.min(limit, 4) }).map((_, i) => (
          <div key={i} className="rounded-2xl bg-slate-100 animate-pulse h-72" />
        ))}
      </div>
    );
  }

  if (error || listings.length === 0) {
    return null; // graceful — don't show section if no listings
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {listings.map((listing) => (
        <a
          key={listing.id}
          href={listing.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg hover:border-gold-200 transition-all duration-300"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <img
              src={listing.image || FALLBACK_IMG}
              alt={listing.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.src = FALLBACK_IMG; }}
            />
            {listing.badge && (
              <span className="absolute top-3 left-3 rounded-full bg-teal-900 px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-wider">
                {listing.badge}
              </span>
            )}
            {listing.tags.length > 0 && (
              <span className="absolute top-3 right-3 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-semibold text-teal-900 uppercase tracking-wider">
                {listing.tags[0]}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-lg font-bold text-teal-900">{listing.price}</p>
            <p className="mt-1 text-[13px] text-gray-600 line-clamp-1">{listing.title}</p>
            <div className="mt-3 flex items-center gap-3 text-[12px] text-slate-500">
              {listing.beds > 0 && (
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                  {listing.beds} Bed
                </span>
              )}
              {listing.baths > 0 && (
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33" /></svg>
                  {listing.baths} Bath
                </span>
              )}
              {listing.size && (
                <span>{listing.size}</span>
              )}
            </div>
            {listing.suburb && (
              <p className="mt-2 text-[11px] font-medium text-gold-500 uppercase tracking-wider">
                {listing.suburb}
              </p>
            )}

            {/* Lead-gen actions */}
            <PropertyActions
              variant="compact"
              property={{
                title: listing.title,
                price: listing.price,
                suburb: listing.suburb,
                href: listing.href,
              }}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
