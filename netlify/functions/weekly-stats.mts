import type { Config, Context } from '@netlify/functions';
import { Resend } from 'resend';

interface AnalyticsData {
  visits: number;
  avg_duration: number; // seconds
  top_locations: { name: string; count: number }[];
  top_referrers: { name: string; count: number }[];
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-ZA');
}

async function fetchAnalytics(): Promise<AnalyticsData> {
  const apiKey = process.env.STATS_API_KEY;
  if (!apiKey) {
    throw new Error('STATS_API_KEY environment variable is not set');
  }

  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const startDate = weekAgo.toISOString().slice(0, 10);
  const endDate = now.toISOString().slice(0, 10);

  // Placeholder analytics API endpoint — replace with your Umami/Plausible URL
  const baseUrl = process.env.STATS_API_URL ?? 'https://analytics.example.com/api';
  const url = `${baseUrl}/stats?start=${startDate}&end=${endDate}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!res.ok) {
    throw new Error(`Analytics API responded with ${res.status}: ${await res.text()}`);
  }

  return (await res.json()) as AnalyticsData;
}

function buildEmailHtml(data: AnalyticsData, startDate: string, endDate: string): string {
  const locationsRows = data.top_locations
    .map((l) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #e2e8f0">${l.name}</td><td style="padding:6px 12px;border-bottom:1px solid #e2e8f0;text-align:right">${formatNumber(l.count)}</td></tr>`)
    .join('');

  const referrersRows = data.top_referrers
    .map((r) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #e2e8f0">${r.name}</td><td style="padding:6px 12px;border-bottom:1px solid #e2e8f0;text-align:right">${formatNumber(r.count)}</td></tr>`)
    .join('');

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

        <!-- Summary -->
        <tr>
          <td style="padding:24px 32px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px;text-align:center;background:#f8fafc;border-radius:6px;width:50%">
                  <div style="font-size:28px;font-weight:700;color:#164E63">${formatNumber(data.visits)}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:4px">Total Visits</div>
                </td>
                <td style="width:16px"></td>
                <td style="padding:12px;text-align:center;background:#f8fafc;border-radius:6px;width:50%">
                  <div style="font-size:28px;font-weight:700;color:#164E63">${formatDuration(data.avg_duration)}</div>
                  <div style="font-size:12px;color:#64748b;margin-top:4px">Avg. Duration</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Top Locations -->
        <tr>
          <td style="padding:0 32px 24px">
            <h2 style="font-size:15px;color:#334155;margin:0 0 8px">Top Locations</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#475569">
              <tr style="background:#f8fafc">
                <th style="padding:6px 12px;text-align:left;font-weight:600">Location</th>
                <th style="padding:6px 12px;text-align:right;font-weight:600">Visits</th>
              </tr>
              ${locationsRows || '<tr><td colspan="2" style="padding:6px 12px;color:#94a3b8">No data</td></tr>'}
            </table>
          </td>
        </tr>

        <!-- Top Referrers -->
        <tr>
          <td style="padding:0 32px 24px">
            <h2 style="font-size:15px;color:#334155;margin:0 0 8px">Top Referrers</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#475569">
              <tr style="background:#f8fafc">
                <th style="padding:6px 12px;text-align:left;font-weight:600">Source</th>
                <th style="padding:6px 12px;text-align:right;font-weight:600">Visits</th>
              </tr>
              ${referrersRows || '<tr><td colspan="2" style="padding:6px 12px;color:#94a3b8">No data</td></tr>'}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 32px;background:#f8fafc;text-align:center;font-size:11px;color:#94a3b8">
            samanthablack.co.za — Automated weekly report
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

export default async function handler(_req: Request, _context: Context) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY is not set' }), { status: 500 });
  }

  try {
    const data = await fetchAnalytics();

    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startDate = weekAgo.toISOString().slice(0, 10);
    const endDate = now.toISOString().slice(0, 10);

    const html = buildEmailHtml(data, startDate, endDate);

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
