import https from 'https';
import { parse } from 'node-html-parser';

const BASE = 'https://www.just.property';
const AGENT_PATH = '/results/agent/90455/';

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    https.get(
      {
        hostname: 'www.just.property',
        path,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          Accept: 'text/html',
        },
      },
      (res) => {
        if ((res.statusCode === 301 || res.statusCode === 302) && res.headers.location) {
          const loc = res.headers.location;
          const redir = loc.startsWith('/') ? loc : new URL(loc).pathname;
          return fetchPage(redir).then(resolve).catch(reject);
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
        res.on('error', reject);
      }
    );
  });
}

function parseListings(html) {
  const root = parse(html);
  const cards = root.querySelectorAll('a.property-card-sm, a.property-card-md');

  return cards.map((card) => {
    const id = card.getAttribute('data-id') || '';
    const href = card.getAttribute('href') || '';

    const img = card.querySelector('.swiper-slide img');
    let image = img?.getAttribute('src') || '';
    image = image.replace(/_t_w_\d+_h_\d+/, '_t_w_720_h_480');
    image = image.replace(/\.avif$/, '.jpg');

    const price = card.querySelector('.card-price')?.text?.trim() || 'POA';
    const title = card.querySelector('.card-description')?.text?.trim() || '';

    const stats = { beds: 0, baths: 0, parking: 0, size: '' };
    for (const div of card.querySelectorAll('.card-stats > div')) {
      const text = div.querySelector('p')?.text?.trim() || '';
      if (text.includes('Bed')) stats.beds = parseInt(text) || 0;
      else if (text.includes('Bath')) stats.baths = parseInt(text) || 0;
      else if (text.includes('Parking')) stats.parking = parseInt(text) || 0;
      else if (text.includes('m')) stats.size = text;
    }

    const badge = card.querySelector('.card-badge')?.text?.trim() || '';
    const tags = card
      .querySelectorAll('.card-tags .card-tag')
      .map((t) => t.text.trim())
      .filter(Boolean);

    const parts = href.split('/').filter(Boolean);
    const suburbSlug = parts.length >= 5 ? parts[4] : '';
    const suburb = suburbSlug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    const type = href.includes('/to-let/')
      ? 'to-let'
      : href.includes('/for-sale/')
        ? 'for-sale'
        : 'other';

    return {
      id, type, href: BASE + href, image, price, title,
      beds: stats.beds, baths: stats.baths, parking: stats.parking,
      size: stats.size, badge, tags, suburb,
    };
  });
}

export default async function handler(req) {
  const url = new URL(req.url, 'http://localhost');
  const type = url.searchParams.get('type') || '';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '12'), 50);

  try {
    const html = await fetchPage(AGENT_PATH);
    let listings = parseListings(html);

    if (type === 'for-sale' || type === 'to-let') {
      listings = listings.filter((l) => l.type === type);
    }
    if (url.searchParams.get('sold') !== 'true') {
      listings = listings.filter((l) => l.badge !== 'Sold');
    }

    const total = listings.length;
    const result = listings.slice(0, limit);

    return new Response(JSON.stringify({ listings: result, total }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch listings', detail: err.message }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
