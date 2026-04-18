/**
 * Just Property URL builder — generates deep links to just.property
 * for live property listings, tools, and resources.
 */

const BASE = 'https://www.just.property';

export const jp = {
  // ── Property search URLs ──
  forSale: (suburb = '') =>
    `${BASE}/results/residential/for-sale/cape-town/${suburb ? suburb + '/' : ''}`,
  toRent: (suburb = '') =>
    `${BASE}/results/residential/to-let/cape-town/${suburb ? suburb + '/' : ''}`,

  // ── Buyer/Seller tools ──
  calculators: `${BASE}/calculators/`,
  freeValuation: `${BASE}/list-your-property/`,
  emailAlerts: `${BASE}/property-email-alerts/`,
  areaProfiles: `${BASE}/area-profiles/`,

  // ── Corporate ──
  agents: `${BASE}/agents/`,
  offices: `${BASE}/offices/`,
  news: `${BASE}/news/`,

  // ── Specialty ──
  newDevelopments: `${BASE}/results/new-development/residential/`,
  vacantLand: `${BASE}/results/vacant-land/`,
  holidayLetting: `${BASE}/results/holiday/letting/`,
  commercial: `${BASE}/results/commercial/for-sale/`,
};

/** Suburbs available on just.property for Cape Town */
export const suburbs = [
  { slug: 'sea-point', name: 'Sea Point', region: 'Atlantic Seaboard' },
  { slug: 'green-point', name: 'Green Point', region: 'Atlantic Seaboard' },
  { slug: 'camps-bay', name: 'Camps Bay', region: 'Atlantic Seaboard' },
  { slug: 'clifton', name: 'Clifton', region: 'Atlantic Seaboard' },
  { slug: 'bantry-bay', name: 'Bantry Bay', region: 'Atlantic Seaboard' },
  { slug: 'fresnaye', name: 'Fresnaye', region: 'Atlantic Seaboard' },
  { slug: 'three-anchor-bay', name: 'Three Anchor Bay', region: 'Atlantic Seaboard' },
  { slug: 'cape-town-city-centre', name: 'City Centre', region: 'City Bowl' },
  { slug: 'gardens', name: 'Gardens', region: 'City Bowl' },
  { slug: 'woodstock', name: 'Woodstock', region: 'City Bowl' },
  { slug: 'pinelands', name: 'Pinelands', region: 'Southern Suburbs' },
  { slug: 'rondebosch', name: 'Rondebosch', region: 'Southern Suburbs' },
  { slug: 'claremont', name: 'Claremont', region: 'Southern Suburbs' },
  { slug: 'kenilworth', name: 'Kenilworth', region: 'Southern Suburbs' },
  { slug: 'constantia', name: 'Constantia', region: 'Southern Suburbs' },
  { slug: 'parklands', name: 'Parklands', region: 'Northern Suburbs' },
];

export default jp;
