import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

const calculators = [
  {
    title: 'Bond Repayment Calculator',
    description: 'Estimate your monthly home loan repayment based on purchase price, deposit, interest rate, and loan term.',
    to: '/calculators/bond',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600 group-hover:bg-teal-100',
    tag: 'Buyers',
  },
  {
    title: 'Transfer Cost Calculator',
    description: 'Calculate transfer duty, attorney fees, bond registration, and total cash required to buy a property.',
    to: '/calculators/transfer',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    color: 'bg-gold-50 text-gold-600 group-hover:bg-gold-100',
    tag: 'Buyers',
  },
  {
    title: 'Affordability Calculator',
    description: 'Find out how much property you can afford based on your income, expenses, and current interest rates.',
    to: '/calculators/affordability',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    color: 'bg-teal-50 text-teal-600 group-hover:bg-teal-100',
    tag: 'Buyers',
  },
  {
    title: 'Seller Net Proceeds Calculator',
    description: 'Estimate what you\'ll walk away with after commission, bond cancellation, compliance costs, and CGT.',
    to: '/calculators/seller',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    color: 'bg-gold-50 text-gold-600 group-hover:bg-gold-100',
    tag: 'Sellers',
  },
];

export default function CalculatorsPage() {
  return (
    <>
      <SEO
        title="Property Calculators"
        description="Free property calculators — bond repayment, transfer costs, affordability, and seller net proceeds. Essential tools for Cape Town property buyers and sellers."
        path="/calculators"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Free Tools</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Property Calculators</h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Make informed property decisions with our suite of free calculators — designed for the South African market.
          </p>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calculators.map((calc) => (
              <Link
                key={calc.to}
                to={calc.to}
                className="group rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-lg hover:border-gold-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl ${calc.color} flex items-center justify-center transition-colors`}>
                    {calc.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                    {calc.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">{calc.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-4">{calc.description}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-medium text-gold-500 group-hover:text-gold-600">
                  Open Calculator
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-teal-800">More Resources</h2>
            <p className="mt-2 text-gray-500">Guides, checklists, and expert advice for your property journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/guides/buyers-guide" className="rounded-xl bg-slate-50 border border-slate-200 p-5 text-center hover:shadow-md hover:border-gold-200 transition-all group">
              <span className="text-2xl block mb-2">📖</span>
              <span className="text-sm font-medium text-teal-700 group-hover:text-gold-600">Buyer's Guide</span>
            </Link>
            <Link to="/guides/sellers-guide" className="rounded-xl bg-slate-50 border border-slate-200 p-5 text-center hover:shadow-md hover:border-gold-200 transition-all group">
              <span className="text-2xl block mb-2">📋</span>
              <span className="text-sm font-medium text-teal-700 group-hover:text-gold-600">Seller's Guide</span>
            </Link>
            <Link to="/valuation" className="rounded-xl bg-slate-50 border border-slate-200 p-5 text-center hover:shadow-md hover:border-gold-200 transition-all group">
              <span className="text-2xl block mb-2">📊</span>
              <span className="text-sm font-medium text-teal-700 group-hover:text-gold-600">Free Valuation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-teal-800 mb-3">Need Personalised Advice?</h2>
          <p className="text-gray-600 mb-6">
            Calculators give you estimates. For accurate, tailored guidance on your specific property transaction, speak to Samantha directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Samantha, I used the calculators on your website and would like to discuss my property plans.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-2.5 text-[13px] font-semibold text-teal-800 hover:bg-white transition-colors">
              Contact Samantha
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
