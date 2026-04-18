import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import jp from '../data/justproperty';

export default function PropertyDetailsPage() {
  return (
    <>
      <SEO
        title="Property Details"
        description="View property details on Just Property."
        path="/properties"
      />
      <div className="py-32 text-center">
        <h2 className="text-2xl font-semibold text-teal-800 mb-3">Property Listings</h2>
        <p className="text-[14px] text-gray-500 mb-6 max-w-md mx-auto">
          Our property listings are hosted on Just Property. Click below to browse all available properties.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={jp.forSale()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-800 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            For Sale
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          </a>
          <a
            href={jp.toRent()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors"
          >
            To Let
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
          </a>
        </div>
        <Link to="/properties" className="mt-8 inline-block text-[13px] text-gold-500 font-medium hover:text-gold-600">
          &larr; Back to Properties
        </Link>
      </div>
    </>
  );
}
