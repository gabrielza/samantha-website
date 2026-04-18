import type { Config, Context } from '@netlify/functions';
import { Resend } from 'resend';

// ── Netlify Analytics API types ──────────────────────────────
interface TimeSeriesPoint { ts: number; count: number }
interface RankingItem     { resource: string; count: number }

interface WeeklyStats {
  pageviews: number;
  visitors: number;
  bandwidth: number;          // bytes
  topPages: RankingItem[];
  topSources: RankingItem[];
  notFound: RankingItem[];
}

// ── Helpers ──────────────────────────────────────────────────
function formatNumber(n: number): string {
  return n.toLocaleString('en-ZA');
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

// ── Netlify Analytics fetch ──────────────────────────────────
const ANALYTICS_BASE = 'https://analytics.services.netlify.com/v2';

async function fetchEndpoint<T>(
  siteId: string,
  token: string,
  endpoint: string,
  from: number,
  to: number,
  limit?: number,
): Promise<T> {
  const params = new URLSearchParams({
    from: String(from),
    to: String(to),
    timezone: 'Africa/Johannesburg',
  });
  if (limit) params.set('limit', String(limit));

  const url = `${ANALYTICS_BASE}/${siteId}/${endpoint}?${params}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    throw new Error(`Netlify Analytics /${endpoint} responded ${res.status}: ${await res.text()}`);
  }
  return (await res.json()) as T;
}

async function fetchWeeklyStats(siteId: string, token: string): Promise<WeeklyStats> {
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;

  const [pageviewsData, visitorsData, bandwidthData, topPages, topSources, notFound] =
    await Promise.all([
      fetchEndpoint<{ data: TimeSeriesPoint[] }>(siteId, token, 'pageviews', weekAgo, now),
      fetchEndpoint<{ data: TimeSeriesPoint[] }>(siteId, token, 'visitors', weekAgo, now),
      fetchEndpoint<{ data: TimeSeriesPoint[] }>(siteId, token, 'bandwidth', weekAgo, now),
      fetchEndpoint<{ data: RankingItem[] }>(siteId, token, 'ranking/pages', weekAgo, now, 10),
      fetchEndpoint<{ data: RankingItem[] }>(siteId, token, 'sources', weekAgo, now, 10),
      fetchEndpoint<{ data: RankingItem[] }>(siteId, token, 'not_found', weekAgo, now, 5),
    ]);

  const sum = (pts: TimeSeriesPoint[]) => pts.reduce((s, p) => s + p.count, 0);

  return {
    pageviews: sum(pageviewsData.data),
    visitors: sum(visitorsData.data),
    bandwidth: sum(bandwidthData.data),
    topPages: topPages.data,
    topSources: topSources.data,
    notFound: notFound.data,
  };
}

// ── Email template ───────────────────────────────────────────
function buildRankingRows(items: RankingItem[], labelHeader: string): string {
  if (!items.length)
    return `<tr><td colspan="2" style="padding:6px 12px;color:#94a3b8">No data</td></tr>`;
  return items
    .map(
      (i) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #e2e8f0">${i.resource}</td>` +
        `<td style="padding:6px 12px;border-bottom:1px solid #e2e8f0;text-align:right">${formatNumber(i.count)}</td></tr>`,
    )
    .join('');
}

function buildTable(title: string, labelHeader: string, items: RankingItem[]): string {
  return `
    <tr>
      <td style="padding:0 32px 24px">
        <h2 style="font-size:15px;color:#334155;margin:0 0 8px">${title}</h2>
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#475569">
          <tr style="background:#f8fafc">
            <th style="padding:6px 12px;text-align:left;font-weight:600">${labelHeader}</th>
            <th style="padding:6px 12px;text-align:right;font-weight:600">Count</th>
          </tr>
          ${buildRankingRows(items, labelHeader)}
        </table>
      </td>
    </tr>`;
}

function buildEmailHtml(stats: WeeklyStats, startDate: string, endDate: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Segoe UI,system-ui,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)">

        <!-- Header -->
        <tr>
          <td style="background:#164E63;padding:24px 32px">
            <h1 style="margin:0;color:#fff;font-size:20px">Weekly Site Report</h1>
            <p style="margin:4px 0 0;color:#94a3b8;font-size:13px">${startDate} — ${endDate}</p>
          </td>
        </tr>

        <!-- Summary cards -->
        <tr>
          <td style="padding:24px 32px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px;text-align:center;background:#f8fafc;border-radius:6px;width:33%">
                  <div style="font-size:28px;font-weight:700;color:#164E63">${formatNumber(stats.pageviews)}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:4px">Page Views</div>
                </td>
                <td style="width:12px"></td>
                <td style="padding:12px;text-align:center;background:#f8fafc;border-radius:6px;width:33%">
                  <div style="font-size:28px;font-weight:700;color:#164E63">${formatNumber(stats.visitors)}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:4px">Unique Visitors</div>
                </td>
                <td style="width:12px"></td>
                <td style="padding:12px;text-align:center;background:#f8fafc;border-radius:6px;width:33%">
                  <div style="font-size:28px;font-weight:700;color:#164E63">${formatBytes(stats.bandwidth)}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:4px">Bandwidth</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        ${buildTable('Top Pages', 'Page', stats.topPages)}
        ${buildTable('Top Sources', 'Referrer', stats.topSources)}
        ${stats.notFound.length ? buildTable('404 Not Found', 'Path', stats.notFound) : ''}

        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;background:#f8fafc;text-align:center;font-size:11px;color:#94a3b8">
            samanthablack.co.za — Automated weekly report · Powered by Netlify Analytics
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

// ── Handler ──────────────────────────────────────────────────
export default async function handler(_req: Request, _context: Context) {
  const resendKey = process.env.RESEND_API_KEY;
  const netlifyToken = process.env.NETLIFY_API_TOKEN;
  const siteId = process.env.SITE_ID; // auto-set by Netlify

  if (!resendKey) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY is not set' }), { status: 500 });
  }
  if (!netlifyToken) {
    return new Response(JSON.stringify({ error: 'NETLIFY_API_TOKEN is not set' }), { status: 500 });
  }
  if (!siteId) {
    return new Response(JSON.stringify({ error: 'SITE_ID is not available' }), { status: 500 });
  }

  try {
    const stats = await fetchWeeklyStats(siteId, netlifyToken);

    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startDate = weekAgo.toISOString().slice(0, 10);
    const endDate = now.toISOString().slice(0, 10);

    const html = buildEmailHtml(stats, startDate, endDate);

    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: 'Website Stats <stats@samanthablack.co.za>',
      to: ['samanthab@just.property'],
      subject: `Weekly Site Report — ${startDate} to ${endDate}`,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('weekly-stats error:', message);
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}

export const config: Config = {
  schedule: '@weekly',
};
