import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

const defaults = {
  purchasePrice: 2500000,
  deposit: 250000,
  interestRate: 11.75,
  loanTerm: 20,
};

function fmt(n) {
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(n);
}

export default function BondCalculatorPage() {
  const [price, setPrice] = useState(defaults.purchasePrice);
  const [deposit, setDeposit] = useState(defaults.deposit);
  const [rate, setRate] = useState(defaults.interestRate);
  const [term, setTerm] = useState(defaults.loanTerm);

  const results = useMemo(() => {
    const principal = Math.max(price - deposit, 0);
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    if (principal === 0 || monthlyRate === 0 || months === 0) {
      return { monthly: 0, totalInterest: 0, totalCost: 0, principal };
    }
    const monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalCost = monthly * months;
    const totalInterest = totalCost - principal;
    return { monthly, totalInterest, totalCost, principal };
  }, [price, deposit, rate, term]);

  return (
    <>
      <SEO
        title="Bond Repayment Calculator"
        description="Calculate your monthly bond repayment, total interest, and total cost. Free mortgage calculator for South African home buyers — Samantha Black, Just Property Cape Town."
        path="/calculators/bond"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Property Calculator</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Bond Repayment Calculator</h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Estimate your monthly home loan repayment based on purchase price, deposit, interest rate, and loan term.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Purchase Price</label>
                <input type="range" min={500000} max={20000000} step={50000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R500K</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(price)}</span>
                  <span>R20M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Deposit</label>
                <input type="range" min={0} max={price} step={25000} value={deposit} onChange={(e) => setDeposit(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R0</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(deposit)} ({price > 0 ? ((deposit / price) * 100).toFixed(0) : 0}%)</span>
                  <span>{fmt(price)}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Interest Rate (% per annum)</label>
                <input type="range" min={5} max={20} step={0.25} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span className="text-sm font-semibold text-teal-800">{rate.toFixed(2)}%</span>
                  <span>20%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Loan Term (years)</label>
                <input type="range" min={5} max={30} step={1} value={term} onChange={(e) => setTerm(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5 yrs</span>
                  <span className="text-sm font-semibold text-teal-800">{term} years</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-8 flex flex-col justify-center">
              <h2 className="text-lg font-semibold text-teal-800 mb-6">Your Estimated Repayment</h2>

              <div className="bg-teal-800 rounded-xl p-6 text-center mb-6">
                <p className="text-xs uppercase tracking-wider text-teal-300">Monthly Repayment</p>
                <p className="text-3xl sm:text-4xl font-bold text-white mt-1">{fmt(results.monthly)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500">Loan Amount</p>
                  <p className="text-lg font-semibold text-teal-800">{fmt(results.principal)}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500">Total Interest</p>
                  <p className="text-lg font-semibold text-gold-600">{fmt(results.totalInterest)}</p>
                </div>
              </div>

              <div className="bg-gold-50 rounded-lg p-4 text-center border border-gold-200">
                <p className="text-xs text-gray-500">Total Cost Over {term} Years</p>
                <p className="text-xl font-bold text-teal-800">{fmt(results.totalCost)}</p>
              </div>

              <p className="mt-6 text-xs text-gray-400 text-center">
                This is an estimate only. Actual rates depend on your credit profile and the bank's assessment. Contact Samantha for bond pre-approval guidance.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Ready to find your dream home?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/calculators" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-[13px] font-semibold text-teal-800 hover:bg-slate-50 transition-colors">
                ← All Calculators
              </Link>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Samantha, I used the bond calculator on your website and would like to discuss my options.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors"
              >
                Speak to Samantha
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
