import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PropertyCard from '../components/common/PropertyCard';
import properties from '../data/properties';

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'all';
  const [typeFilter, setTypeFilter] = useState(initialType);
  const [regionFilter, setRegionFilter] = useState('all');

  const regions = useMemo(() => {
    const set = new Set(properties.map((p) => p.region));
    return ['all', ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (typeFilter !== 'all' && p.type !== typeFilter) return false;
      if (regionFilter !== 'all' && p.region !== regionFilter) return false;
      return true;
    });
  }, [typeFilter, regionFilter]);

  const handleTypeChange = (val) => {
    setTypeFilter(val);
    if (val === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', val);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <SEO
        title="Properties"
        description="Browse luxury properties for sale and rent across Cape Town — Atlantic Seaboard, City Bowl, Parklands, and Southern Suburbs."
        path="/properties"
      />

      {/* Header */}
      <section className="bg-navy-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Portfolio</p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-white">
            Properties
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Discover a curated selection of premium properties across Cape Town's most desirable addresses.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-sand-50 border-b border-sand-200 sticky top-18 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">Type:</span>
              {['all', 'sale', 'rental'].map((val) => (
                <button
                  key={val}
                  onClick={() => handleTypeChange(val)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    typeFilter === val
                      ? 'bg-navy-800 text-white'
                      : 'bg-white text-navy-700 hover:bg-navy-100'
                  }`}
                >
                  {val === 'all' ? 'All' : val === 'sale' ? 'For Sale' : 'To Let'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">Area:</span>
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-navy-700 outline-none focus:border-gold-400"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r === 'all' ? 'All Areas' : r}
                  </option>
                ))}
              </select>
            </div>

            <span className="ml-auto text-xs text-gray-500">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">No properties match your current filters.</p>
              <button
                onClick={() => { setTypeFilter('all'); setRegionFilter('all'); }}
                className="mt-4 text-sm font-medium text-gold-500 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
