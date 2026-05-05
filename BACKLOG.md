# Samantha Black Website — Backlog

> Live site: https://www.samanthablack.co.za
> Repo: https://github.com/gabrielza/samantha-website
> Last updated: 2026-05-05

---

## 🔴 Action required (blocks features already shipped)

These two items must be completed by Samantha / business — the code is live but waiting on configuration.

### 🔴 1. Cal.com account + "Property Viewing" event
- **Why:** The "Schedule a viewing" button (live on every property card) currently points to a placeholder URL: `https://cal.com/samantha-black/viewing`.
- **What to do:**
  1. Sign up at https://cal.com (free tier is fine).
  2. Create an event type called *Property Viewing* (suggested: 30 min, in-person, requires phone number).
  3. Send Gabriel the live URL.
  4. Update `calComUrl` in [`src/data/contact.js`](src/data/contact.js).
- **Effort:** ~15 min (Samantha) + 2 min code change.

### 🔴 2. Weekly listings dispatch (operationalise the email leads being captured)
- **Why:** The exit-intent popup is now collecting subscribers into the Netlify `listings-alerts` form, but nothing is being sent to them yet.
- **What to do:**
  1. Decide cadence (recommend Sunday 18:00 SAST).
  2. Build a scheduled Netlify Function (reuse the [`weekly-stats.mts`](netlify/functions/weekly-stats.mts) pattern) that:
     - Fetches the list of subscribers from Netlify Forms API (`listings-alerts`).
     - Fetches new listings from `/api/listings`.
     - Renders an HTML email with the week's new stock + 1 featured neighbourhood.
     - Sends via Resend (already integrated).
     - Includes an unsubscribe link (POPIA requirement).
  3. Add an `unsubscribe` Netlify Function or a tagged form to remove emails.
- **Effort:** S–M (~1 day).

---

## ✅ Recently shipped (May 2026)

- ✅ **GitHub repo + GitHub Actions auto-deploy to Netlify** — every push to `master` builds and deploys.
- ✅ **System Specification (Word document)** — [`Samantha-Black-Website-System-Specification.docx`](Samantha-Black-Website-System-Specification.docx).
- ✅ **Feature #6 — WhatsApp click-to-chat with property context** — prefills WhatsApp message with property title/price/suburb/URL on every card.
- ✅ **Feature #3 — Schedule-a-viewing CTA with Cal.com embed** — modal opens on every property card and details page (waiting on item 🔴 1 above).
- ✅ **Feature #4 — Exit-intent email capture** — collects emails via Netlify form `listings-alerts` (waiting on item 🔴 2 above).

---

## 🎯 Tier 1 — High lead-gen impact, low/medium effort

| # | Feature | Why it generates leads | Effort |
|---|---------|------------------------|--------|
| T1.1 | **Saved searches + email alerts** ("Notify me when a 3-bed in Camps Bay under R15M is listed") | Captures email at intent peak; recurring touchpoint; converts browsers into pipeline | M |
| T1.2 | **Property comparison tool** (compare up to 3 listings side-by-side) | Engages serious buyers; logged session = warm lead signal | S |
| T1.3 | **Interactive map view** of listings (Leaflet + OpenStreetMap, free) — pin neighbourhoods + active stock | Buyers love spatial browsing; massive dwell-time win | M |
| T1.4 | **"Get the full photo set" gated content** on property detail (email required for additional images / floor plan) | Self-segmenting hot leads | S |

## 🛠 Tier 2 — Useful tools that build trust + SEO

| # | Feature | Why it generates leads | Effort |
|---|---------|------------------------|--------|
| T2.1 | **Suburb price-trend dashboard** (monthly median + YoY %, sourced from Lightstone / Property24 data feed or scraped) | Becomes the page that ranks for *"Camps Bay property prices 2026"*; sticky on social | L |
| T2.2 | **Mortgage pre-qualification flow** (multi-step → leads handed to bond originator partner for a referral fee) | Direct revenue + qualified buyer leads | M |
| T2.3 | **Rates & taxes estimator** by suburb (City of Cape Town municipal rates × current valuation) | Practical tool buyers Google for; long-tail SEO | S |
| T2.4 | **Renovation/ROI calculator** — "spend R500k on a kitchen → estimated value uplift" | Targets sellers thinking 12 months out (top of funnel) | M |
| T2.5 | **"Is now a good time to sell?" assessment** (5-question quiz → personalised report emailed) | Sellers self-qualify; you get name, suburb, motivation, timeline | M |
| T2.6 | **School catchment overlay** on neighbourhood pages (Reddam, Herzlia, Bishops, Sans Souci, etc. with distance) | Family-buyer magnet; very high-value segment | S |
| T2.7 | **Cape Town lifestyle calculator** — "monthly cost to own here" (bond + rates + levies + insurance + maintenance) | Sets realistic expectations early; reduces wasted enquiries | S |

## 📈 Tier 3 — Content engine + SEO compounders

| # | Feature | Why it generates leads | Effort |
|---|---------|------------------------|--------|
| T3.1 | **Blog/journal** (MDX in repo — no CMS needed) — *"10 things to know before buying in Bantry Bay"* | Long-tail SEO; AI search visibility; one post = years of traffic | M |
| T3.2 | **Just-sold gallery** (last 12 months, with "Sold in X days for Y% of asking") | Social proof; makes the agent's track record undeniable | S |
| T3.3 | **Video testimonials** (replace text testimonials with 30-sec embeds) | 5–10× conversion lift over text | S |
| T3.4 | **Newsletter** — monthly market wrap (Resend already integrated for weekly stats — reuse) | Owned audience; cheap re-engagement | S |
| T3.5 | **Press / media mentions strip** ("As featured in Property24, IOL, Cape Town etc.") | Trust signal above the fold | XS |

## 🌍 Tier 4 — High-end Atlantic Seaboard differentiators

| # | Feature | Why it generates leads | Effort |
|---|---------|------------------------|--------|
| T4.1 | **Currency switcher** (ZAR ↔ USD/GBP/EUR live rate) — Atlantic Seaboard buyers are heavily international | Removes a real friction point for foreign buyers | XS |
| T4.2 | **Foreign-buyer guide** (Reserve Bank approval, FNB non-resident mortgage, exchange control) | Captures the highest-value buyer segment | S |
| T4.3 | **Virtual tour embeds** (Matterport / 360° iframe support on PropertyDetailsPage) | Pre-qualifies remote buyers; reduces wasted viewings | S |
| T4.4 | **"Your shortlist" — local-storage favourites** with "Email me my list" CTA | Re-engagement; extracts email for a low-friction reason | S |
| T4.5 | **Multi-language toggle** (English + Portuguese + German — common Atlantic Seaboard buyer languages) | Niche but unique in the market | M |

## 🔬 Tier 5 — Conversion / analytics infrastructure

| # | Feature | Why it matters | Effort |
|---|---------|----------------|--------|
| T5.1 | **Lead routing → CRM** (HubSpot Free or Notion DB via webhook from Netlify Forms) | Stop losing leads in the inbox; track source/funnel | S |
| T5.2 | **Source attribution on all forms** (UTM capture + referrer) | Know which channels actually pay | XS |
| T5.3 | **A/B testing on hero CTA** (Netlify split testing — already free on your plan) | Compounding conversion gains | S |
| T5.4 | **Scheduled "stale lead" follow-up** (extend weekly-stats function pattern) | Resurrects 14/30/60-day old leads automatically | M |

---

## 🧹 Tech debt / hygiene

- Bump GitHub Actions to Node-24-compatible versions before September 2026 (currently using Node-20 actions; GH will sunset them).
- Add Playwright smoke tests covering: home, `/properties`, valuation form submission, one calculator.
- Replace the hand-curated `src/data/properties.js` showcase with a fully Just-Property-driven feed.
- Monitor `/api/listings` function logs — markup changes on Just Property can break the scraper.

---

## Effort key

| Symbol | Meaning |
|--------|---------|
| XS | < 2 hours |
| S | ½ – 1 day |
| M | 2 – 4 days |
| L | 1 – 2 weeks |
