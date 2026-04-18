import { Link } from 'react-router-dom';

export default function NeighborhoodCard({ neighborhood }) {
  return (
    <Link
      to={`/neighborhoods/${neighborhood.slug}`}
      className="group block rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
          <span className="font-heading text-3xl font-bold text-gold-400/30">{neighborhood.name}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10">
          <span className="text-xs uppercase tracking-wider text-gold-400 font-medium">
            {neighborhood.region}
          </span>
          <h3 className="text-xl font-heading font-semibold text-white">{neighborhood.name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-gold-600 font-medium italic">{neighborhood.tagline}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{neighborhood.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-navy-800">{neighborhood.priceRange}</span>
          <span className="text-xs font-medium text-gold-500 group-hover:underline">
            Explore Guide &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
