import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ContactForm from '../components/common/ContactForm';
import contact from '../data/contact';
import jp from '../data/justproperty';

const sellingFramework = [
  {
    title: 'Pricing Strategy',
    icon: 'ðŸ“Š',
    description:
      'Automated online estimates lack nuance. A professional Comparative Market Analysis (CMA) evaluates recent local transfers, current market competition, and your home\'s unique features to set a target that attracts buyers rather than pushing them away.',
  },
  {
    title: 'The Power of a Sole Mandate',
    icon: 'ðŸ¤',
    description:
      'Unlike an open mandate where agents compete against each other (often pushing you to accept lower offers quickly), a sole mandate guarantees dedicated marketing budget, a single point of secure contact, and an agent working to get the highest price for you.',
  },
  {
    title: 'The Conveyancing Timeline',
    icon: 'ðŸ—“ï¸',
    description:
      'From signing the Offer to Purchase (OTP) to final Deeds Office registration via the new eDRS system, expect an 8 to 12-week journey. Samantha aligns with top conveyancing attorneys to track every milestone for you.',
  },
];

const legalItems = [
  {
    title: 'The Mandatory Disclosure Form',
    description:
      'Required by the Property Practitioners Act. Before a mandate is signed, sellers must formally declare all known property defects. Full transparency is your best defense against "voetstoots" disputes.',
  },
  {
    title: 'The 72-Hour Clause',
    description:
      'Also known as the Continued Marketing Clause. If you accept an offer with suspensive conditions (like the buyer needing to sell their own house), this clause allows continued marketing. If a better unconditional offer arrives, the first buyer has 72 hours to waive their conditions or step aside.',
  },
  {
    title: 'SPLUMA Certificates',
    description:
      "Required by many municipalities before transfer, proving that the property's zoning and as-built structures comply with approved municipal plans.",
  },
];

const complianceCertificates = [
  {
    title: 'Electrical Compliance Certificate',
    description: 'Certifies that the electrical installation is safe. Must not be older than 2 years, provided no alterations have been made.',
  },
  {
    title: 'Water / Plumbing Certificate',
    description: 'A specific by-law requirement for properties in the City of Cape Town municipality. Ensures no water wastage, leaks, and that geysers comply with SANS regulations.',
  },
  {
    title: 'Beetle Certificate',
    description: 'Standard practice in coastal provinces (Western Cape, KZN). Certifies that accessible timber is free of wood-destroying insects.',
  },
  {
    title: 'Gas & Electric Fence Certificates',
    description: 'If the property has gas installations or an electric fence system, certificates of conformity are required for both before transfer.',
  },
];

const financialItems = [
  {
    title: 'The True Cost of Selling',
    items: [
      'Agent Commission: Professional fee for marketing, negotiating, and closing.',
      'Bond Cancellation: Banks require 90 days\' notice to cancel a bond, or penalties apply. Attorneys also charge a cancellation fee.',
      'Municipal Clearance: You must pay rates and utility services 3-4 months in advance to obtain a clearance figure.',
      'Compliance Repairs: Budget for potential repairs needed to obtain your CoCs.',
    ],
  },
  {
    title: 'Capital Gains Tax (CGT)',
    description:
      'If the property is your primary residence, you benefit from a significant SARS exclusion. The Primary Residence Exclusion is R2 Million â€” meaning the first R2M of your capital profit is exempt from CGT. For secondary properties or investment rentals, this exclusion does not apply.',
  },
  {
    title: 'Occupational Rent',
    description:
      'What happens if the buyer moves in before the Deeds Office registers the transfer, or if you need to stay after? Occupational rent protects both parties. It is a pre-agreed monthly amount (usually ~0.8% of purchase price or market rental value) stipulated in the OTP.',
  },
];

const buyerChecklist = [
  'Obtain bond pre-approval from your bank or mortgage originator',
  'Budget for transfer duties (sliding scale from 0% to 13%)',
  'Appoint a conveyancing attorney (usually appointed by the seller)',
  'Conduct a professional property inspection before signing the OTP',
  'Ensure the seller provides a valid Electrical Compliance Certificate (CoC)',
  'Confirm Plumbing Certificate of Compliance is in order',
  'Verify the property\'s zoning and title deed conditions',
  'Budget for bond registration and initiation fees',
  'Arrange building insurance from the date of registration',
  'Confirm levy clearance and body corporate financials for sectional title',
];

const landlordChecklist = [
  'Ensure full compliance with the Rental Housing Act (Act 50 of 1999)',
  'Conduct documented incoming inspection with signed inventory',
  'Register tenant deposit in a separate interest-bearing account',
  'Provide tenant with written lease agreement stipulating all terms',
  'Ensure Electrical Compliance Certificate (CoC) is valid',
  'Install compliant smoke detectors and ensure gas safety certification',
  'Obtain outgoing inspection signatures and document property condition',
  'Provide 24-hour notice before property inspections (unless emergency)',
  'Understand grounds for lawful eviction under the PIE Act',
  'Keep records of all maintenance requests and resolutions',
];

const guides = [
  {
    title: '2026 Seller\'s Survival Guide',
    description: 'A comprehensive, printable checklist covering pricing strategies, staging tips, and all legal documents you need to prepare when selling your home.',
  },
  {
    title: 'Decoding Cape Town Property Prices',
    description: 'A comprehensive guide to understanding property valuations, transfer duties, and the pricing dynamics across Cape Town\'s micro-markets.',
  },
  {
    title: 'First-Time Buyer\'s Complete Guide',
    description: 'Step-by-step walkthrough of the buying process â€” from bond pre-approval to key handover, specifically tailored for the South African market.',
  },
  {
    title: '2026 Rental Legislative Framework',
    description: 'Essential compliance guide for property investors and landlords on the updated Rental Housing Act and tenant management best practices.',
  },
  {
    title: 'Gauteng to Cape Town Relocation Guide',
    description: 'Everything semigrants need to know â€” neighborhood comparisons, school zones, municipal registration, and lifestyle adjustments.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SEO
        title="Resources"
        description="Essential property resources â€” buyer checklists, landlord compliance guides, Cape Town utility directories, and downloadable guides from Samantha Black."
        path="/resources"
      />

      {/* Hero */}
      <section className="bg-navy-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-medium">Resident &amp; Investor Resources</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Property Resources &amp; Guides
          </h1>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Essential tools, checklists, and guides to navigate the Cape Town property market with confidence.
          </p>
        </div>
      </section>

      {/* ===== BUYER TOOLS ===== */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-medium">Free Tools</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-navy-800">
              Property Tools on Just Property
            </h2>
            <p className="mt-3 text-[14px] text-gray-500 max-w-xl mx-auto">
              Access bond calculators, free valuations, property alerts, and area profiles — powered by Just Property.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Bond Calculator', desc: 'Estimate your monthly repayments', href: jp.calculators, icon: '🧮' },
              { label: 'Free Valuation', desc: 'Know what your property is worth', href: jp.freeValuation, icon: '📊' },
              { label: 'Email Alerts', desc: 'Get notified of new listings', href: jp.emailAlerts, icon: '🔔' },
              { label: 'Area Profiles', desc: 'Research any neighbourhood', href: jp.areaProfiles, icon: '📍' },
            ].map((tool) => (
              <a
                key={tool.label}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl bg-white border border-gray-100 p-5 hover:shadow-md hover:border-gold-200 transition-all text-center group"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="text-[13px] font-medium text-navy-700 group-hover:text-gold-600 transition-colors">{tool.label}</span>
                <span className="text-[11px] text-gray-400">{tool.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELLING FRAMEWORK ===== */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800">Your Successful Sale Framework</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Selling a home goes beyond placing a board outside. It requires strategic pricing, strict legal compliance, and smart financial planning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sellingFramework.map((item) => (
              <div key={item.title} className="rounded-2xl bg-sand-50 border border-sand-200 p-8">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-navy-800 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEGAL & COMPLIANCE ===== */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">No Surprises: Navigating Property Law</h2>
            <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
              The South African legal landscape for property transfers is rigorous. Understanding these elements protects you from litigation and costly delays.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Legal Concepts */}
            <div className="space-y-6">
              {legalItems.map((item) => (
                <div key={item.title} className="bg-navy-700/50 p-6 rounded-xl border border-navy-600">
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            {/* Compliance Certificates */}
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b border-navy-600 pb-2">Required Compliance Certificates (CoC)</h3>
              <p className="text-sm text-gray-400 mb-6">Sellers are legally obligated to provide these certificates to the conveyancing attorney prior to registration.</p>
              <div className="space-y-4">
                {complianceCertificates.map((cert) => (
                  <div key={cert.title} className="bg-navy-700/50 p-5 rounded-xl border border-navy-600">
                    <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINANCIAL PLANNING ===== */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800">Understand Your Bottom Line</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Don't let hidden costs erode your capital. Be prepared for the financial realities of selling property in 2026.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-md border-t-4 border-gold-400">
                <h3 className="text-lg font-semibold text-navy-800 mb-4">{item.title}</h3>
                {item.items ? (
                  <ul className="space-y-3 text-sm text-gray-600">
                    {item.items.map((li, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        {li}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    {item.title === 'Capital Gains Tax (CGT)' && (
                      <div className="bg-sand-50 p-4 rounded-lg mb-4 text-center">
                        <p className="text-xs uppercase tracking-wider text-gray-500">Primary Residence Exclusion</p>
                        <p className="text-2xl font-bold text-gold-500">R2 Million</p>
                      </div>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-8">Expert Guides</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Request any of these comprehensive guides â€” enter your email and I'll send the PDF directly to your inbox.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <div key={guide.title} className="rounded-2xl bg-sand-50 border border-sand-200 p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {guide.description}
                </p>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(`Guide Request: ${guide.title}`)}&body=${encodeURIComponent(`Hi Samantha,\n\nI'd like to receive the "${guide.title}" guide.\n\nPlease send it to this email address.\n\nThank you.`)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600"
                >
                  Request This Guide
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Checklist */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                Cape Town Property Acquisition Checklist
              </h2>
              <p className="text-gray-600 mb-6">
                Essential steps every buyer must complete for a smooth property transfer.
              </p>
              <ol className="space-y-3">
                {buyerChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                2026 Landlord Compliance Checklist
              </h2>
              <p className="text-gray-600 mb-6">
                Key compliance requirements under the Rental Housing Act.
              </p>
              <ol className="space-y-3">
                {landlordChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Utility & Vendor Directory */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            Cape Town Utility &amp; Vendor Directory
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Essential links and services for new and existing Cape Town residents.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Municipal Services */}
            <div className="rounded-2xl bg-sand-50 border border-sand-200 p-6">
              <div className="h-10 w-10 rounded-lg bg-navy-800 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Municipal Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="https://www.capetown.gov.za/Family%20and%20home/Meet-the-city/City-eservices" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">
                    City of Cape Town e-Services Portal &rarr;
                  </a>
                </li>
                <li>Register for municipal accounts online</li>
                <li>Submit water &amp; electricity meter readings</li>
                <li>Report service delivery issues</li>
              </ul>
            </div>

            {/* Energy & Solar */}
            <div className="rounded-2xl bg-sand-50 border border-sand-200 p-6">
              <div className="h-10 w-10 rounded-lg bg-navy-800 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Solar &amp; Energy</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>City-approved solar PV installers directory</li>
                <li>Inverter and battery backup solutions</li>
                <li>SSEG (Small-Scale Embedded Generation) registration</li>
                <li>Feed-in tariff applications</li>
              </ul>
              <p className="mt-3 text-xs text-gray-500 italic">
                Contact Samantha for vetted installer recommendations.
              </p>
            </div>

            {/* Property Transfer */}
            <div className="rounded-2xl bg-sand-50 border border-sand-200 p-6">
              <div className="h-10 w-10 rounded-lg bg-navy-800 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">Transfer &amp; Compliance</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Electrical Compliance Certificates (CoC)</li>
                <li>Plumbing Certificates of Compliance</li>
                <li>Gas Installation Certificates</li>
                <li>Beetle &amp; Entomology Certificates</li>
                <li>Municipal rates clearance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sand-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-800 mb-3">
            Need Personalised Guidance?
          </h2>
          <p className="text-gray-600 mb-8">
            These resources are a starting point. For expert, tailored advice on your specific property 
            transaction, get in touch directly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-2.5 text-[13px] font-semibold text-navy-900 hover:bg-gold-400 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
