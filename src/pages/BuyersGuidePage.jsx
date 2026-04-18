import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

const steps = [
  {
    step: 1,
    title: 'Check Your Financial Readiness',
    description: 'Before you even start browsing, get a clear picture of what you can afford.',
    items: [
      'Obtain bond pre-approval from your bank or a mortgage originator — this tells sellers you\'re a serious buyer.',
      'Use our Affordability Calculator to estimate your maximum purchase price.',
      'Budget for additional costs beyond the purchase price: transfer duty, attorney fees, bond registration, and bank initiation fees.',
      'Check your credit score and address any issues before applying.',
      'Factor in monthly costs: rates, levies (sectional title), insurance, and maintenance.',
    ],
    cta: { label: 'Affordability Calculator', to: '/calculators/affordability' },
  },
  {
    step: 2,
    title: 'Define Your Requirements',
    description: 'Knowing exactly what you need prevents emotional purchases and wasted time.',
    items: [
      'List your non-negotiables: number of bedrooms, parking, proximity to schools or work.',
      'Decide on property type: freehold house, sectional title apartment, cluster, or vacant land.',
      'Research neighborhoods — consider safety, schools, commute times, and future development plans.',
      'Set a realistic price range based on your pre-approval amount.',
      'Consider future needs: will this property serve you for the next 5–10 years?',
    ],
    cta: { label: 'Explore Neighborhoods', to: '/neighborhoods' },
  },
  {
    step: 3,
    title: 'Search & View Properties',
    description: 'Work with an experienced agent to find the right property efficiently.',
    items: [
      'Engage an agent who knows the area — they have access to listings before they hit the market.',
      'Attend show days with a checklist: water pressure, natural light, storage, noise levels.',
      'Check the property\'s title deed conditions and zoning — your agent or conveyancer can help.',
      'For sectional title: request the body corporate\'s financial statements and meeting minutes.',
      'Inspect for structural issues, damp, electrical compliance, and plumbing.',
    ],
    cta: { label: 'Browse Listings', to: '/properties' },
  },
  {
    step: 4,
    title: 'Make an Offer & Sign the OTP',
    description: 'The Offer to Purchase (OTP) is a legally binding contract — understand every clause.',
    items: [
      'Your agent will prepare the OTP based on the agreed price and conditions.',
      'Common suspensive conditions: bond approval (usually 14–21 days), sale of your current property (72-hour clause).',
      'Occupational rent: if you move in before transfer, or the seller stays after, this must be agreed upfront.',
      'Ensure the OTP specifies which fixtures and fittings are included.',
      'Both parties sign — the OTP becomes binding once the last party signs and conditions are fulfilled.',
    ],
  },
  {
    step: 5,
    title: 'Secure Your Bond',
    description: 'Apply to multiple banks to compare rates and terms.',
    items: [
      'Submit bond applications to at least 2–3 banks for competitive rates.',
      'A mortgage originator can do this for you at no cost (they\'re paid by the bank).',
      'Banks will assess your income, credit score, expenses, and the property valuation.',
      'Negotiate: you may get a better interest rate with a larger deposit or existing banking relationship.',
      'Bond approval typically takes 7–14 working days.',
    ],
    cta: { label: 'Bond Calculator', to: '/calculators/bond' },
  },
  {
    step: 6,
    title: 'Transfer & Registration',
    description: 'The conveyancing process from signed OTP to key handover takes 8–12 weeks.',
    items: [
      'The seller appoints and pays for the transfer attorney (conveyancer).',
      'You pay for the bond registration attorney (usually arranged by your bank).',
      'You\'ll need to pay transfer duty to SARS, attorney fees, and bond registration costs upfront.',
      'The attorney lodges documents with the Deeds Office — registration typically takes 2–3 weeks.',
      'Arrange building insurance from the date of registration (banks require this).',
      'Once registered, you receive your title deed and the keys to your new home.',
    ],
    cta: { label: 'Transfer Cost Calculator', to: '/calculators/transfer' },
  },
];

const tips = [
  {
    title: 'Don\'t Skip the Inspection',
    description: 'Hire a professional building inspector before signing. Structural issues, damp, and electrical faults can cost hundreds of thousands to fix.',
  },
  {
    title: 'Understand Sectional Title vs Freehold',
    description: 'Sectional title means shared ownership of common areas plus monthly levies. Freehold gives you full ownership but all maintenance is on you.',
  },
  {
    title: 'Watch for Hidden Costs',
    description: 'Transfer duty, attorney fees, bond registration, bank initiation fee, moving costs, new appliances, and municipal deposits — budget an extra 8-10% above purchase price.',
  },
  {
    title: 'The 72-Hour Clause',
    description: 'If your offer has suspensive conditions (like selling your current home), the seller can continue marketing. If they get a better offer, you have 72 hours to waive your conditions or lose the deal.',
  },
];

export default function BuyersGuidePage() {
  return (
    <>
      <SEO
        title="Buyer's Guide"
        description="Complete step-by-step guide to buying property in Cape Town. From bond pre-approval to key handover — everything first-time and experienced buyers need to know."
        path="/guides/buyers-guide"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Property Guide</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">The Complete Cape Town Buyer's Guide</h1>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            A step-by-step walkthrough of the property buying process — from bond pre-approval to key handover. Specifically tailored for the South African market.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                {/* Step connector line */}
                {s.step < steps.length && (
                  <div className="absolute left-5 top-14 bottom-0 w-px bg-teal-200 hidden sm:block" />
                )}
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-800 text-white text-sm font-bold shadow-md">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-teal-800 mb-1">{s.title}</h2>
                    <p className="text-sm text-gray-500 mb-4">{s.description}</p>
                    <ul className="space-y-2.5">
                      {s.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                          <svg className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {s.cta && (
                      <Link to={s.cta.to} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-gold-500 hover:text-gold-600">
                        {s.cta.label}
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-8 text-center">Insider Tips from Samantha</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-teal-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Your Property Search?</h2>
          <p className="text-gray-300 mb-8">
            Whether you're a first-time buyer or an experienced investor, Samantha will guide you through every step.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/properties" className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors">
              Browse Properties
            </Link>
            <Link to="/calculators" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors">
              Use Calculators
            </Link>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Samantha, I\'m looking to buy a property in Cape Town. Can we chat?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-green-700 transition-colors"
            >
              WhatsApp Samantha
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
