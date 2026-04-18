import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import contact from '../data/contact';

function fmt(n) {
  return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(n);
}

/**
 * SARS Transfer Duty table effective 1 March 2026
 * (unchanged since 2023 — brackets as per SARS)
 */
function calcTransferDuty(price) {
  if (price <= 1100000) return 0;
  if (price <= 1512500) return (price - 1100000) * 0.03;
  if (price <= 2117500) return 12375 + (price - 1512500) * 0.06;
  if (price <= 2722500) return 48675 + (price - 2117500) * 0.08;
  if (price <= 12100000) return 97075 + (price - 2722500) * 0.11;
  return 1128625 + (price - 12100000) * 0.13;
}

/** Rough estimate for conveyancing (transfer attorney) fees */
function calcAttorneyFees(price) {
  if (price <= 500000) return 15000;
  if (price <= 1000000) return 20000;
  if (price <= 2000000) return 30000;
  if (price <= 4000000) return 40000;
  if (price <= 8000000) return 55000;
  return 70000;
}

/** Deeds Office fees (approximate) */
function calcDeedsFees(price) {
  if (price <= 250000) return 550;
  if (price <= 500000) return 750;
  if (price <= 1000000) return 1100;
  if (price <= 2000000) return 1500;
  if (price <= 5000000) return 2000;
  return 3000;
}

/** Bond registration attorney fees (approximate) */
function calcBondAttorneyFees(bond) {
  if (bond <= 500000) return 12000;
  if (bond <= 1000000) return 16000;
  if (bond <= 2000000) return 24000;
  if (bond <= 4000000) return 34000;
  if (bond <= 8000000) return 48000;
  return 60000;
}

/** Bank initiation fee (approximate) */
const BANK_INITIATION_FEE = 6500;

export default function TransferCostCalculatorPage() {
  const [price, setPrice] = useState(2500000);
  const [deposit, setDeposit] = useState(250000);
  const [firstTime, setFirstTime] = useState(false);

  const results = useMemo(() => {
    const bondAmount = Math.max(price - deposit, 0);
    const transferDuty = calcTransferDuty(price);
    const attorneyFees = calcAttorneyFees(price);
    const deedsFees = calcDeedsFees(price);
    const bondAttorney = bondAmount > 0 ? calcBondAttorneyFees(bondAmount) : 0;
    const initiation = bondAmount > 0 ? BANK_INITIATION_FEE : 0;
    const total = transferDuty + attorneyFees + deedsFees + bondAttorney + initiation;
    return { transferDuty, attorneyFees, deedsFees, bondAttorney, initiation, total, bondAmount };
  }, [price, deposit, firstTime]);

  return (
    <>
      <SEO
        title="Transfer Cost Calculator"
        description="Calculate the total transfer costs when buying property in South Africa — transfer duty, attorney fees, bond registration, and Deeds Office fees."
        path="/calculators/transfer"
      />

      {/* Hero */}
      <section className="bg-teal-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Property Calculator</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Transfer Cost Calculator</h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Know the full cost of buying before you sign. Transfer duty, attorney fees, bond registration, and more.
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
                  <span className="text-sm font-semibold text-teal-800">{fmt(deposit)}</span>
                  <span>{fmt(price)}</span>
                </div>
              </div>

              {/* Transfer Duty Table */}
              <div className="rounded-xl bg-white border border-gray-100 p-5">
                <h3 className="text-sm font-semibold text-teal-800 mb-3">SARS Transfer Duty Brackets</h3>
                <table className="w-full text-xs text-gray-600">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-1.5 font-medium">Property Value</th>
                      <th className="text-right py-1.5 font-medium">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr><td className="py-1.5">R0 – R1 100 000</td><td className="text-right">0%</td></tr>
                    <tr><td className="py-1.5">R1 100 001 – R1 512 500</td><td className="text-right">3%</td></tr>
                    <tr><td className="py-1.5">R1 512 501 – R2 117 500</td><td className="text-right">6%</td></tr>
                    <tr><td className="py-1.5">R2 117 501 – R2 722 500</td><td className="text-right">8%</td></tr>
                    <tr><td className="py-1.5">R2 722 501 – R12 100 000</td><td className="text-right">11%</td></tr>
                    <tr><td className="py-1.5">R12 100 001+</td><td className="text-right">13%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-8">
              <h2 className="text-lg font-semibold text-teal-800 mb-6">Estimated Transfer Costs</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Transfer Duty (SARS)</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(results.transferDuty)}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Transfer Attorney Fees</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(results.attorneyFees)}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Deeds Office Fees</span>
                  <span className="text-sm font-semibold text-teal-800">{fmt(results.deedsFees)}</span>
                </div>
                {results.bondAmount > 0 && (
                  <>
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Bond Registration Attorney</span>
                      <span className="text-sm font-semibold text-teal-800">{fmt(results.bondAttorney)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Bank Initiation Fee</span>
                      <span className="text-sm font-semibold text-teal-800">{fmt(results.initiation)}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-teal-800 rounded-xl p-6 text-center mb-4">
                <p className="text-xs uppercase tracking-wider text-teal-300">Total Estimated Cost</p>
                <p className="text-3xl font-bold text-white mt-1">{fmt(results.total)}</p>
              </div>

              <div className="bg-gold-50 rounded-lg p-4 text-center border border-gold-200">
                <p className="text-xs text-gray-500">Total Cash Required (Deposit + Transfer Costs)</p>
                <p className="text-xl font-bold text-teal-800">{fmt(deposit + results.total)}</p>
              </div>

              <p className="mt-4 text-xs text-gray-400 text-center">
                Fees are estimates and may vary. Attorney fees exclude VAT. Consult Samantha for accurate quotations.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need help understanding these costs?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/calculators" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-[13px] font-semibold text-teal-800 hover:bg-slate-50 transition-colors">
                ← All Calculators
              </Link>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Samantha, I used the transfer cost calculator on your website and have some questions.')}`}
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
