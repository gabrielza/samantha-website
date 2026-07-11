import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import jp from '../data/justproperty';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore properties, neighbourhoods, and free tools instead."
        path="/404"
        robots="noindex, follow"
      />
      <section className="min-h-[70vh] flex items-center bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold-500 font-medium">
            404 — Page Not Found
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-teal-800">
            This page has moved on
          </h1>
          <p className="mt-4 text-[14px] text-gray-500 leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or the listing is no longer
            available. Here's where to go next:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-800 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-teal-700 transition-colors"
            >
              Back to Home
            </Link>
            <a
              href={jp.agentListings}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors"
            >
              Browse Listings
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-teal-200 px-5 py-2.5 text-[13px] font-semibold text-teal-800 hover:bg-teal-50 transition-colors"
            >
              Contact Samantha
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            {[
              { to: '/neighborhoods', label: 'Neighbourhoods' },
              { to: '/valuation', label: 'Free Valuation' },
              { to: '/calculators', label: 'Calculators' },
              { to: '/guides/buyers-guide', label: "Buyer's Guide" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-xl border border-gray-100 px-4 py-3 text-[13px] font-medium text-teal-700 hover:border-gold-200 hover:shadow-md transition-all text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
