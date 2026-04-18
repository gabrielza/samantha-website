import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const itinerary = [
  {
    time: '08:00',
    title: 'Sunrise at Camps Bay Beach',
    area: 'Camps Bay',
    description:
      'Begin your Cape Town day with a barefoot walk along the iconic Camps Bay beachfront. The early morning light illuminates the Twelve Apostles mountain range in a warm golden glow — the perfect moment to experience why this is one of the world\'s most photographed coastlines.',
    propertyNote: 'Explore beachfront villas and apartments from R 8M',
  },
  {
    time: '09:30',
    title: 'Coffee on Kloof Street',
    area: 'Gardens / City Bowl',
    description:
      'Head up to Kloof Street, the artery connecting the City Bowl to the Atlantic Seaboard. This vibrant strip is lined with artisanal coffee shops, boutiques, and galleries. Grab a flat white and soak in the creative energy of one of Cape Town\'s most walkable neighborhoods.',
    propertyNote: 'City Bowl apartments ideal for urban professionals',
  },
  {
    time: '11:00',
    title: 'Table Mountain Cableway',
    area: 'Table Mountain',
    description:
      'No visit is complete without ascending Cape Town\'s most iconic landmark. The revolving cable car offers 360-degree panoramas of the city, coastline, and Cape Flats. On a clear day, you can see all the way to Robben Island. Allow 2-3 hours for the experience.',
    propertyNote: null,
  },
  {
    time: '13:30',
    title: 'Lunch at the V&A Waterfront',
    area: 'V&A Waterfront',
    description:
      'Descend from the mountain and head to the Victoria & Alfred Waterfront — Cape Town\'s premier dining and lifestyle destination. Choose from world-class seafood restaurants overlooking the working harbour, with Table Mountain as your backdrop.',
    propertyNote: 'Waterfront Marina apartments from R 5M',
  },
  {
    time: '15:30',
    title: 'Drive the Atlantic Seaboard',
    area: 'Atlantic Seaboard',
    description:
      'Take the scenic coastal drive from Sea Point through Clifton and Camps Bay, then continue along Victoria Road toward Llandudno and Hout Bay. This is the Cape Town "Riviera" — each curve reveals another breathtaking ocean vista and exclusive residential enclave.',
    propertyNote: 'Atlantic Seaboard properties from R 10M to R 120M+',
  },
  {
    time: '17:00',
    title: 'Constantia Wine Tasting',
    area: 'Constantia',
    description:
      'Turn inland to the historic Constantia winelands — the oldest wine-producing region in the southern hemisphere. Visit Groot Constantia, Beau Constantia, or Eagles\' Nest for estate tastings amidst vineyard views and oak-lined avenues. This is where Cape Town\'s heritage meets refined living.',
    propertyNote: 'Heritage estates on expansive grounds from R 8M',
  },
  {
    time: '19:00',
    title: 'Sunset Sundowners in Bantry Bay',
    area: 'Bantry Bay',
    description:
      'End your day at one of Bantry Bay\'s northwest-facing terraces, watching the Atlantic Ocean turn gold as the sun sets. Protected from the south-easter wind, this is Cape Town\'s ultimate sunset sanctuary — and you\'ll understand why residents never tire of this view.',
    propertyNote: 'Sunset apartments in Bantry Bay from R 10M',
  },
];

export default function ItineraryPage() {
  return (
    <>
      <SEO
        title="A Full Day Out in Cape Town"
        description="An interactive itinerary exploring Cape Town's finest locations — from Camps Bay beach to Constantia winelands, with property insights along the way."
        path="/cape-town-day-out"
      />

      {/* Hero */}
      <section className="relative bg-navy-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-gradient-to-br from-gold-400/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Interactive Experience</p>
          <h1 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            A Full Day Out in Cape Town
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Discover the Cape Peninsula through the eyes of a local expert. This curated itinerary 
            guides you through Cape Town's most iconic locations — with property insights woven into 
            every stop for prospective buyers.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sand-200 md:left-1/2 md:-translate-x-0.5" />

            <div className="space-y-12">
              {itinerary.map((stop, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-gold-400 border-4 border-white shadow-md">
                      {stop.time}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                    <div className="rounded-2xl bg-sand-50 border border-sand-200 p-6 hover:shadow-md transition-shadow">
                      <span className="text-xs uppercase tracking-wider text-gold-500 font-medium">
                        {stop.area}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-semibold text-navy-800">
                        {stop.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                        {stop.description}
                      </p>
                      {stop.propertyNote && (
                        <div className="mt-4 rounded-lg bg-navy-800/5 px-4 py-3 border-l-4 border-gold-400">
                          <p className="text-xs font-medium text-navy-700">
                            🏡 {stop.propertyNote}
                          </p>
                          <Link
                            to="/properties"
                            className="text-xs text-gold-500 hover:underline mt-1 inline-block"
                          >
                            View Properties &rarr;
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-navy-800 mb-3">
            Ready to Make Cape Town Home?
          </h2>
          <p className="text-gray-600 mb-8">
            This itinerary only scratches the surface. Let me show you the Cape Town that residents love — 
            and help you find the perfect property to call your own.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold text-white hover:bg-gold-600 transition-colors"
            >
              Book Your Consultation
            </Link>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-800 px-8 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-800 hover:text-white transition-all"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
