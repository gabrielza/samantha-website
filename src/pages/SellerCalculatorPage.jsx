import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

function fmt(n) {
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(n);
}

/**
 * Capital Gains Tax (CGT) for individuals — simplified
 * Primary residence exclusion: R2M
 * Annual exclusion: R40K
 * Inclusion rate: 40%
 * Marginal rate approximation: 45% (top bracket)
 */
function calcCGT(salePrice, purchasePrice, isPrimary, marginalRate) {
  const gain = Math.max(salePrice - purchasePrice, 0);
  const exclusion = isPrimary ? 2000000 : 40000;
  const taxableGain = Math.max(gain - exclusion, 0);
  const included = taxableGain * 0.4;
  return included * (marginalRate / 100);
}

export default function SellerCalculatorPage() {
  const [salePrice, setSalePrice] = useState(3500000);
  const [bondBalance, setBondBalance] = useState(1800000);
  const [purchasePrice, setPurchasePrice] = useState(2500000);
  const [commissionRate, setCommissionRate] = useState(5);
  const [isPrimary, setIsPrimary] = useState(true);
  const [marginalRate, setMarginalRate] = useState(36);
  const [complianceCost, setComplianceCost] = useState(15000);

  const results = useMemo(() => {
    const commission = salePrice * (commissionRate / 100);
    const commissionVAT = commission * 0.15;
    const totalCommission = commission + commissionVAT;
    const bondCancellation = bondBalance > 0 ? 8000 : 0;
    const municipalClearance = 12000;
    const cgt = calcCGT(salePrice, purchasePrice, isPrimary, marginalRate);
    const totalDeductions = totalCommission + bondCancellation + municipalClearance + complianceCost + cgt;
    const netProceeds = salePrice - bondBalance - totalDeductions;

    return {
      commission,
      commissionVAT,
      totalCommission,
      bondCancellation,
      municipalClearance,
      complianceCost,
      cgt,
      totalDeductions,
      netProceeds,
    };
  }, [salePrice, bondBalance, purchasePrice, commissionRate, isPrimary, marginalRate, complianceCost]);

  return (
    <>
      <SEO
        title="Seller Net Proceeds Calculator"
        description="Calculate what you'll actually walk away with after selling your property. Commission, bond cancellation, compliance certificates, CGT, and more."
        path="/calculators/seller"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Property Calculator</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Seller Net Proceeds Calculator</h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Know exactly what you'll pocket after all selling costs — commission, bond cancellation, compliance certificates, and capital gains tax.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Inputs — wider */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Expected Sale Price</label>
                <input type="range" min={500000} max={25000000} step={50000} value={salePrice} onChange={(e) => setSalePrice(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R500K</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(salePrice)}</span>
                  <span>R25M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Original Purchase Price</label>
                <input type="range" min={0} max={salePrice} step={50000} value={purchasePrice} onChange={(e) => setPurchasePrice(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R0</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(purchasePrice)}</span>
                  <span>{fmt(salePrice)}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Outstanding Bond Balance</label>
                <input type="range" min={0} max={salePrice} step={25000} value={bondBalance} onChange={(e) => setBondBalance(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R0</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(bondBalance)}</span>
                  <span>{fmt(salePrice)}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Agent Commission (%)</label>
                <input type="range" min={1} max={8} step={0.25} value={commissionRate} onChange={(e) => setCommissionRate(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span className="text-sm font-semibold text-teal-800">{commissionRate.toFixed(1)}%</span>
                  <span>8%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Compliance Certificates Budget</label>
                <input type="range" min={0} max={50000} step={1000} value={complianceCost} onChange={(e) => setComplianceCost(+e.target.value)} className="w-full accent-gold-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>R0</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(complianceCost)}</span>
                  <span>R50K</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-2">Primary Residence?</label>
                  <div className="flex gap-3">
                    <button onClick={() => setIsPrimary(true)} className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${isPrimary ? 'bg-teal-800 text-white border-teal-800' : 'bg-white text-gray-600 border-gray-200 hover:bg-slate-50'}`}>Yes</button>
                    <button onClick={() => setIsPrimary(false)} className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${!isPrimary ? 'bg-teal-800 text-white border-teal-800' : 'bg-white text-gray-600 border-gray-200 hover:bg-slate-50'}`}>No</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-2">Tax Bracket</label>
                  <select value={marginalRate} onChange={(e) => setMarginalRate(+e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400">
                    <option value={18}>18%</option>
                    <option value={26}>26%</option>
                    <option value={31}>31%</option>
                    <option value={36}>36%</option>
                    <option value={39}>39%</option>
                    <option value={41}>41%</option>
                    <option value={45}>45%</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-8 sticky top-24">
                <h2 className="text-lg font-semibold text-teal-800 mb-6">Your Estimated Proceeds</h2>

                <div className="space-y-2.5 mb-6 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Sale Price</span>
                    <span className="font-semibold text-teal-800">{fmt(salePrice)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                    <span>Bond Settlement</span>
                    <span className="font-semibold">−{fmt(bondBalance)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                    <span>Commission + VAT</span>
                    <span className="font-semibold">−{fmt(results.totalCommission)}</span>
                  </div>
                  {results.bondCancellation > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                      <span>Bond Cancellation</span>
                      <span className="font-semibold">−{fmt(results.bondCancellation)}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                    <span>Municipal Clearance</span>
                    <span className="font-semibold">−{fmt(results.municipalClearance)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                    <span>Compliance Certs</span>
                    <span className="font-semibold">−{fmt(results.complianceCost)}</span>
                  </div>
                  {results.cgt > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100 text-red-600">
                      <span>Capital Gains Tax</span>
                      <span className="font-semibold">−{fmt(results.cgt)}</span>
                    </div>
                  )}
                </div>

                <div className={`rounded-xl p-6 text-center mb-4 ${results.netProceeds >= 0 ? 'bg-teal-800' : 'bg-red-700'}`}>
                  <p className="text-xs uppercase tracking-wider text-teal-300">Estimated Net Proceeds</p>
                  <p className="text-3xl font-bold text-white mt-1">{fmt(results.netProceeds)}</p>
                </div>

                {isPrimary && (
                  <div className="bg-gold-50 rounded-lg p-3 border border-gold-200 text-center mb-4">
                    <p className="text-xs text-gray-500">Primary Residence CGT Exclusion</p>
                    <p className="text-lg font-bold text-gold-600">R2 000 000</p>
                  </div>
                )}

                <p className="text-xs text-gray-400 text-center">
                  Estimates only. CGT is simplified. Consult a tax professional for exact figures.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Want an accurate valuation for your property?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/calculators" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-[13px] font-semibold text-teal-800 hover:bg-slate-50 transition-colors">
                ← All Calculators
              </Link>
              <Link to="/valuation" className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-teal-900 hover:bg-gold-400 transition-colors">
                Request Free Valuation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
