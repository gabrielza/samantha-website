import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

function fmt(n) {
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(n);
}

export default function AffordabilityCalculatorPage() {
  const [grossIncome, setGrossIncome] = useState(65000);
  const [otherIncome, setOtherIncome] = useState(0);
  const [expenses, setExpenses] = useState(20000);
  const [rate, setRate] = useState(11.75);
  const [term, setTerm] = useState(20);
  const [deposit, setDeposit] = useState(0);

  const results = useMemo(() => {
    const totalIncome = grossIncome + otherIncome;
    const disposable = totalIncome - expenses;
    // Banks generally use 30% of gross income as max repayment
    const maxRepayment = Math.min(disposable, totalIncome * 0.3);
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;

    if (maxRepayment <= 0 || monthlyRate === 0 || months === 0) {
      return { maxRepayment: 0, maxBond: 0, maxPrice: 0, debtToIncome: 0, disposable };
    }

    // Reverse PMT formula: PV = PMT * [(1+r)^n - 1] / [r * (1+r)^n]
    const maxBond = maxRepayment * (Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, months));
    const maxPrice = maxBond + deposit;
    const debtToIncome = (maxRepayment / totalIncome) * 100;

    return { maxRepayment, maxBond, maxPrice, debtToIncome, disposable };
  }, [grossIncome, otherIncome, expenses, rate, term, deposit]);

  const affordabilityLevel = results.debtToIncome <= 25 ? 'Comfortable' : results.debtToIncome <= 30 ? 'Moderate' : 'Stretched';
  const levelColor = results.debtToIncome <= 25 ? 'text-green-600' : results.debtToIncome <= 30 ? 'text-gold-600' : 'text-red-600';

  return (
    <>
      <SEO
        title="Affordability Calculator"
        description="Find out how much property you can afford based on your income, expenses, and current interest rates. Free affordability calculator from Samantha Black."
        path="/calculators/affordability"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Property Calculator</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Affordability Calculator</h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            How much home can you afford? Enter your income and expenses to find your maximum purchase price.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Gross Monthly Income</label>
                <input type="range" min={15000} max={300000} step={5000} value={grossIncome} onChange={(e) => setGrossIncome(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R15K</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(grossIncome)}</span>
                  <span>R300K</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Other Monthly Income (optional)</label>
                <input type="range" min={0} max={100000} step={1000} value={otherIncome} onChange={(e) => setOtherIncome(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R0</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(otherIncome)}</span>
                  <span>R100K</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Monthly Expenses (excl. rent/bond)</label>
                <input type="range" min={0} max={200000} step={1000} value={expenses} onChange={(e) => setExpenses(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R0</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(expenses)}</span>
                  <span>R200K</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Available Deposit</label>
                <input type="range" min={0} max={5000000} step={25000} value={deposit} onChange={(e) => setDeposit(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R0</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(deposit)}</span>
                  <span>R5M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Interest Rate (%)</label>
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
              <h2 className="text-lg font-semibold text-teal-800 mb-6">You Can Afford</h2>

              <div className="bg-teal-800 rounded-xl p-6 text-center mb-6">
                <p className="text-xs uppercase tracking-wider text-teal-300">Maximum Purchase Price</p>
                <p className="text-3xl sm:text-4xl font-bold text-white mt-1">{fmt(results.maxPrice)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500">Max Bond Amount</p>
                  <p className="text-lg font-semibold text-teal-800">{fmt(results.maxBond)}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500">Max Monthly Repayment</p>
                  <p className="text-lg font-semibold text-teal-800">{fmt(results.maxRepayment)}</p>
                </div>
              </div>

              <div className="bg-gold-50 rounded-lg p-4 border border-gold-200 text-center mb-6">
                <p className="text-xs text-gray-500">Debt-to-Income Ratio</p>
                <p className={`text-xl font-bold ${levelColor}`}>
                  {results.debtToIncome.toFixed(0)}% — {affordabilityLevel}
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4 text-sm text-gray-600 space-y-1.5">
                <p className="font-medium text-teal-800 mb-2">How banks assess you:</p>
                <p className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" /> <strong>≤ 25%</strong> — Comfortable. Likely approved.
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold-500" /> <strong>25–30%</strong> — Moderate. May need deposit.
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" /> <strong>&gt; 30%</strong> — Stretched. Difficult to qualify.
                </p>
              </div>

              <p className="mt-6 text-xs text-gray-400 text-center">
                Banks use their own criteria. This is a guideline only. Get bond pre-approval for accurate figures.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Ready to start house-hunting?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/calculators" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-[13px] font-semibold text-teal-800 hover:bg-slate-50 transition-colors">
                ← All Calculators
              </Link>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Samantha, I used the affordability calculator on your website. I can afford around ' + fmt(results.maxPrice) + '. Can you help me find properties in my budget?')}`}
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
