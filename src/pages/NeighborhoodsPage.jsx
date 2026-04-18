import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import NeighborhoodCard from '../components/common/NeighborhoodCard';
import neighborhoods from '../data/neighborhoods';

export default function NeighborhoodsPage() {
  const regions = [...new Set(neighborhoods.map((n) => n.region))];

  return (
    <>
      <SEO
        title="Neighborhood Guides"
        description="Explore Cape Town's finest neighborhoods — in-depth guides to the Atlantic Seaboard, City Bowl, Southern Suburbs, and Northern Suburbs property markets."
        path="/neighborhoods"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Local Expertise</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">
            Cape Town Neighborhood Guides
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Cape Town is defined by its micro-markets. Explore each neighborhood's unique character,
            pricing dynamics, and lifestyle offerings.
          </p>
        </div>
      </section>

      {/* Neighborhoods by Region */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {regions.map((region) => {
            const regionNeighborhoods = neighborhoods.filter((n) => n.region === region);
            return (
              <div key={region} className="mb-16 last:mb-0">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-teal-800">{region}</h2>
                  <div className="mt-1 h-1 w-16 bg-gold-400 rounded" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regionNeighborhoods.map((n) => (
                    <NeighborhoodCard key={n.id} neighborhood={n} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">
            Not Sure Which Area Is Right for You?
          </h2>
          <p className="text-gray-600 mb-8">
            Every buyer has unique needs. Let me match you with the perfect Cape Town neighborhood 
            based on your lifestyle, budget, and priorities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors"
          >
            Let's Discuss Your Ideal Location
          </Link>
        </div>
      </section>
    </>
  );
}
