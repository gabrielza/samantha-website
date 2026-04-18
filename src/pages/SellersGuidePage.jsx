import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

const steps = [
  {
    step: 1,
    title: 'Get a Professional Valuation',
    description: 'The single most important step — pricing your property correctly from day one.',
    items: [
      'Online estimates are unreliable. A professional Comparative Market Analysis (CMA) evaluates recent local transfers, current competition, and your home\'s unique features.',
      'Overpricing drives buyers to competitors. Underpricing leaves money on the table.',
      'Samantha will provide a free, no-obligation valuation backed by current market data.',
      'The valuation considers: location, property size, condition, recent sales in the area, and current market demand.',
    ],
    cta: { label: 'Request Free Valuation', to: '/valuation' },
  },
  {
    step: 2,
    title: 'Choose Your Mandate Type',
    description: 'How you list your property fundamentally affects the outcome.',
    items: [
      'Sole Mandate: One agent markets your property exclusively. Benefits include dedicated marketing budget, consistent messaging, single point of contact, and the agent is incentivised to achieve the best price.',
      'Open Mandate: Multiple agents compete. This often results in lower marketing effort per agent, inconsistent pricing, and pressure to accept lower offers quickly.',
      'Dual Mandate: A middle ground — two agents share the listing.',
      'Samantha recommends a sole mandate for maximum value and a controlled, professional sales process.',
    ],
  },
  {
    step: 3,
    title: 'Prepare Your Property',
    description: 'First impressions are everything. A well-presented property sells faster and for more.',
    items: [
      'Declutter and depersonalise — buyers need to envision themselves living there.',
      'Fix minor maintenance issues: dripping taps, cracked tiles, peeling paint.',
      'Enhance curb appeal: mow the lawn, clean the driveway, paint the front door.',
      'Consider professional staging for high-value properties — it can increase the sale price by 5–10%.',
      'Ensure all compliance certificates are in order before listing (see Step 4).',
    ],
  },
  {
    step: 4,
    title: 'Obtain Compliance Certificates',
    description: 'These are legally required before a property can transfer ownership.',
    items: [
      'Electrical Compliance Certificate (CoC): Must be less than 2 years old. Budget R2,000–R5,000 for inspection and repairs.',
      'Plumbing Certificate: Required by City of Cape Town by-laws. Covers water wastage, leaks, and geyser compliance.',
      'Beetle Certificate: Standard in coastal provinces. Certifies timber is free of wood-destroying insects.',
      'Gas Certificate: Required if property has gas installations.',
      'Electric Fence Certificate: Required if property has an electric fence system.',
      'Complete the Mandatory Disclosure Form (Property Practitioners Act) — declare all known defects.',
    ],
  },
  {
    step: 5,
    title: 'Marketing & Show Days',
    description: 'Professional marketing attracts qualified buyers and maximises exposure.',
    items: [
      'Professional photography is essential — 90% of buyers start their search online.',
      'Your property will be listed on major portals: Just Property, Property24, Private Property.',
      'Virtual tours and video walkthroughs expand reach to international and out-of-town buyers.',
      'Show days are coordinated by your agent — they handle viewings, feedback, and follow-ups.',
      'Samantha provides weekly feedback reports so you always know where things stand.',
    ],
  },
  {
    step: 6,
    title: 'Negotiate & Accept an Offer',
    description: 'Your agent negotiates on your behalf to get the best possible price and terms.',
    items: [
      'All offers are presented in writing via an Offer to Purchase (OTP).',
      'Evaluate not just the price, but the conditions: bond approval timeline, occupational rent, included fixtures.',
      'Counter-offers are common — your agent will guide you on strategy.',
      'Once both parties sign the OTP, it becomes a legally binding agreement.',
      'The 72-hour clause protects you if the buyer has suspensive conditions.',
    ],
  },
  {
    step: 7,
    title: 'Transfer & Handover',
    description: 'From signed OTP to Deeds Office registration takes 8–12 weeks.',
    items: [
      'The seller appoints and pays for the transfer attorney (conveyancer).',
      'You\'ll need to provide: title deed, rates clearance, compliance certificates, and bond cancellation figures.',
      'Municipal clearance requires rates and utilities to be paid 3–4 months in advance.',
      'Bond cancellation: give your bank 90 days\' notice to avoid penalties.',
      'Once the Deeds Office registers the transfer, the proceeds are paid out (minus outstanding bond, costs, and commission).',
    ],
    cta: { label: 'Seller Net Proceeds Calculator', to: '/calculators/seller' },
  },
];

const costs = [
  { item: 'Agent Commission', detail: 'Typically 5–7% of sale price + VAT. Negotiable.' },
  { item: 'Bond Cancellation', detail: 'Attorney fee ±R8,000 + bank penalties if less than 90 days\' notice.' },
  { item: 'Municipal Clearance', detail: '3–4 months of rates & utilities paid in advance. ±R10,000–R20,000.' },
  { item: 'Compliance Certificates', detail: 'Electrical, plumbing, beetle, gas, fence. Budget R5,000–R20,000 depending on property.' },
  { item: 'Capital Gains Tax', detail: 'Primary residence exclusion: R2M. Non-primary: 40% inclusion rate × your marginal tax rate.' },
  { item: 'Minor Repairs & Staging', detail: 'Budget R5,000–R30,000 for presentation improvements that boost sale price.' },
];

export default function SellersGuidePage() {
  return (
    <>
      <SEO
        title="Seller's Guide"
        description="Complete guide to selling your property in Cape Town. Pricing strategy, mandate types, compliance certificates, costs, and the transfer process explained step by step."
        path="/guides/sellers-guide"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Property Guide</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">The Complete Cape Town Seller's Guide</h1>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about selling your property — from valuation to final payout. Practical, honest advice from an experienced Cape Town practitioner.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                {s.step < steps.length && (
                  <div className="absolute left-5 top-14 bottom-0 w-px bg-gold-200 hidden sm:block" />
                )}
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-teal-900 text-sm font-bold shadow-md">
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

      {/* Costs Breakdown */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-2 text-center">The True Cost of Selling</h2>
          <p className="text-gray-500 text-center mb-8">Budget for these expenses to avoid surprises at payout.</p>
          <div className="space-y-4">
            {costs.map((c) => (
              <div key={c.item} className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <h3 className="font-semibold text-teal-800 mb-1">{c.item}</h3>
                <p className="text-sm text-gray-600">{c.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/calculators/seller" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gold-500 hover:text-gold-600">
              Calculate Your Net Proceeds
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Sell?</h2>
          <p className="text-gray-300 mb-8">
            The first step is always a professional valuation. Find out what your property is worth in today's market — free and with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/valuation" className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors">
              Request Free Valuation
            </Link>
            <Link to="/calculators/seller" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors">
              Net Proceeds Calculator
            </Link>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Samantha, I\'m considering selling my property in Cape Town. Can we discuss?')}`}
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
