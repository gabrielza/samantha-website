import { Link } from 'react-router-dom';

export default function NeighborhoodCard({ neighborhood }) {
  return (
    <Link
      to={`/neighborhoods/${neighborhood.slug}`}
      className="group block rounded-xl bg-white border border-gray-100 hover:shadow-lg hover:border-gold-200 transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-teal-800">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center">
          <span className="text-2xl font-semibold text-gold-400/20">{neighborhood.name}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
          <span className="text-[10px] uppercase tracking-[0.15em] text-gold-400">{neighborhood.region}</span>
          <h3 className="text-lg font-semibold text-white">{neighborhood.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[13px] text-gold-600 font-medium italic">{neighborhood.tagline}</p>
        <p className="mt-1.5 text-[13px] text-gray-500 line-clamp-2 leading-relaxed">{neighborhood.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-teal-800">{neighborhood.priceRange}</span>
          <span className="text-[12px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
            Explore &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
