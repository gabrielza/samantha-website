"""Generate System Specification Document for samanthablack.co.za website."""
from datetime import date
from pathlib import Path

from docx import Document
from docx.enum.table import WD_ALIGN_VERTICAL
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.shared import Cm, Pt, RGBColor

OUT = Path(__file__).parent / "Samantha-Black-Website-System-Specification.docx"

# Brand colors (from index.css)
TEAL = RGBColor(0x16, 0x4E, 0x63)
GOLD = RGBColor(0xC9, 0xA9, 0x6E)
SLATE = RGBColor(0x0F, 0x17, 0x2A)
LIGHT_GRAY = RGBColor(0xF1, 0xF5, 0xF9)


def shade_cell(cell, hex_color: str) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), hex_color)
    tc_pr.append(shd)


def add_heading(doc: Document, text: str, level: int = 1) -> None:
    h = doc.add_heading(text, level=level)
    for run in h.runs:
        run.font.color.rgb = TEAL if level <= 2 else SLATE
        run.font.name = "Calibri"


def add_para(doc: Document, text: str, bold: bool = False, size: int = 11) -> None:
    p = doc.add_paragraph()
    run = p.add_run(text)
    run.bold = bold
    run.font.size = Pt(size)
    run.font.name = "Calibri"


def add_bullet(doc: Document, text: str) -> None:
    p = doc.add_paragraph(style="List Bullet")
    run = p.add_run(text)
    run.font.size = Pt(11)
    run.font.name = "Calibri"


def add_table(doc: Document, headers: list[str], rows: list[list[str]]) -> None:
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = "Light Grid Accent 1"
    table.autofit = True

    # Header row
    hdr_cells = table.rows[0].cells
    for i, h in enumerate(headers):
        hdr_cells[i].text = ""
        p = hdr_cells[i].paragraphs[0]
        run = p.add_run(h)
        run.bold = True
        run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        run.font.size = Pt(10)
        run.font.name = "Calibri"
        shade_cell(hdr_cells[i], "164E63")
        hdr_cells[i].vertical_alignment = WD_ALIGN_VERTICAL.CENTER

    # Data rows
    for r_idx, row in enumerate(rows):
        cells = table.rows[r_idx + 1].cells
        for c_idx, val in enumerate(row):
            cells[c_idx].text = ""
            p = cells[c_idx].paragraphs[0]
            run = p.add_run(str(val))
            run.font.size = Pt(10)
            run.font.name = "Calibri"
            cells[c_idx].vertical_alignment = WD_ALIGN_VERTICAL.TOP
    doc.add_paragraph()


# ============================================================
# Build document
# ============================================================
doc = Document()

# Page margins
for section in doc.sections:
    section.top_margin = Cm(2.0)
    section.bottom_margin = Cm(2.0)
    section.left_margin = Cm(2.2)
    section.right_margin = Cm(2.2)

# --- Cover ---
title_p = doc.add_paragraph()
title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
tr = title_p.add_run("SYSTEM SPECIFICATION")
tr.font.size = Pt(28)
tr.font.bold = True
tr.font.color.rgb = TEAL
tr.font.name = "Calibri"

sub_p = doc.add_paragraph()
sub_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
sr = sub_p.add_run("samanthablack.co.za")
sr.font.size = Pt(20)
sr.font.color.rgb = GOLD
sr.font.name = "Calibri"

tag_p = doc.add_paragraph()
tag_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
tg = tag_p.add_run("Real Estate Marketing Website — Cape Town Atlantic Seaboard")
tg.italic = True
tg.font.size = Pt(12)
tg.font.color.rgb = SLATE
tg.font.name = "Calibri"

doc.add_paragraph()
doc.add_paragraph()

meta = doc.add_table(rows=5, cols=2)
meta.style = "Light List Accent 1"
meta_data = [
    ("Document version", "1.0"),
    ("Date", date.today().isoformat()),
    ("Prepared by", "Engineering"),
    ("Live URL", "https://www.samanthablack.co.za"),
    ("Source repository", "https://github.com/gabrielza/samantha-website"),
]
for i, (k, v) in enumerate(meta_data):
    c1, c2 = meta.rows[i].cells
    c1.text = ""
    c2.text = ""
    r1 = c1.paragraphs[0].add_run(k)
    r1.bold = True
    r1.font.size = Pt(11)
    r1.font.name = "Calibri"
    r2 = c2.paragraphs[0].add_run(v)
    r2.font.size = Pt(11)
    r2.font.name = "Calibri"

doc.add_page_break()

# --- 1. Executive Summary ---
add_heading(doc, "1. Executive Summary", 1)
add_para(
    doc,
    "samanthablack.co.za is a static, single-page application (SPA) marketing and lead-generation "
    "website for Samantha Black, a Cape Town–based real estate agent specialising in the Atlantic "
    "Seaboard. The site combines marketing content (neighbourhood guides, agent profile, testimonials), "
    "live property listings sourced from Just Property, four interactive financial calculators "
    "configured for South African market rules, multiple lead-capture forms, and a weekly automated "
    "analytics email digest. It is built with React 18 and Vite 6, styled with Tailwind CSS 4, and "
    "deployed to Netlify via a GitHub Actions continuous-delivery pipeline.",
)

# --- 2. System Overview ---
add_heading(doc, "2. System Overview", 1)
add_heading(doc, "2.1 Purpose", 2)
add_para(
    doc,
    "Generate qualified buyer, seller and valuation leads for Samantha Black; provide credible, "
    "informational content for clients researching the Atlantic Seaboard market; and surface live "
    "stock from the agent's Just Property profile in a branded experience.",
)
add_heading(doc, "2.2 Target Users", 2)
for b in [
    "Prospective property buyers researching Cape Town suburbs (primary).",
    "Prospective sellers requesting a free valuation.",
    "Existing clients reviewing market insights and calculators.",
    "Search-engine and AI crawlers (GoogleBot, Bing, GPTBot) — supported via JSON-LD, sitemap, robots and llms.txt.",
]:
    add_bullet(doc, b)

add_heading(doc, "2.3 High-Level Architecture", 2)
for b in [
    "Front end: React 18 SPA built with Vite 6, deployed as static assets to Netlify CDN.",
    "Routing: React Router 6 with lazy-loaded route bundles for code splitting.",
    "Server-side: Two Netlify Functions (HTTPS endpoints) — one on-demand listings proxy, one scheduled weekly digest.",
    "Data: Static JS modules under src/data/ (properties, neighbourhoods, testimonials, contact, Just Property links) — no database.",
    "Forms: Netlify Forms (declared in index.html) with client-side fallback to mailto:.",
    "CI/CD: GitHub → GitHub Actions workflow → Netlify Deploy API.",
]:
    add_bullet(doc, b)

doc.add_page_break()

# --- 3. Technology Stack ---
add_heading(doc, "3. Technology Stack", 1)
add_table(
    doc,
    ["Layer", "Technology", "Version"],
    [
        ["UI framework", "React", "18.3.1"],
        ["Routing", "react-router-dom", "6.28.0"],
        ["Build tool", "Vite", "6.0.0"],
        ["Styling", "Tailwind CSS (via @tailwindcss/vite)", "4.0.0"],
        ["SEO / meta", "react-helmet-async", "2.0.5"],
        ["Email service", "Resend (in scheduled function)", "6.12.0"],
        ["HTML parsing (functions)", "node-html-parser", "7.1.0"],
        ["Function bundler", "esbuild (Netlify Functions config)", "—"],
        ["Hosting", "Netlify (CDN, Forms, Functions, Analytics)", "—"],
        ["Runtime (CI build)", "Node.js", "20"],
        ["Source control", "Git / GitHub", "—"],
        ["CI/CD", "GitHub Actions + nwtgck/actions-netlify", "v3.0"],
    ],
)

# --- 4. Site Map and Routes ---
add_heading(doc, "4. Site Map and Routes", 1)
add_para(
    doc,
    "All routes are mounted inside a shared Layout component (Header + Footer + FloatingActions) "
    "and lazily loaded with a Suspense fallback (animated spinner). Scroll-to-top is applied on each "
    "navigation.",
)
add_table(
    doc,
    ["Path", "Component", "Purpose"],
    [
        ["/", "HomePage", "Hero, live listings, neighbourhoods showcase, testimonials, primary CTAs."],
        ["/properties", "PropertiesPage", "Live listings from Just Property + suburb browsing."],
        ["/properties/:slug", "PropertyDetailsPage", "Individual property detail view."],
        ["/about", "AboutPage", "Agent profile, expertise, credentials."],
        ["/neighborhoods", "NeighborhoodsPage", "Browse 8 Atlantic Seaboard neighbourhoods."],
        ["/neighborhoods/:slug", "NeighborhoodDetailPage", "Area profile, pricing, lifestyle, demographic."],
        ["/resources", "ResourcesPage", "Educational content: CGT, compliance, selling framework."],
        ["/cape-town-day-out", "ItineraryPage", "7-stop curated day-tour with property notes."],
        ["/contact", "ContactPage", "Multi-channel contact (WhatsApp, phone, email, form)."],
        ["/valuation", "ValuationPage", "Free property-valuation request (multi-field form)."],
        ["/calculators", "CalculatorsPage", "Hub listing the four calculators."],
        ["/calculators/bond", "BondCalculatorPage", "Bond repayment (PMT)."],
        ["/calculators/transfer", "TransferCostCalculatorPage", "Transfer duty + attorney + bond costs."],
        ["/calculators/affordability", "AffordabilityCalculatorPage", "Maximum affordable purchase price."],
        ["/calculators/seller", "SellerCalculatorPage", "Net seller proceeds incl. CGT."],
        ["/guides/buyers-guide", "BuyersGuidePage", "Buyer framework and compliance info."],
        ["/guides/sellers-guide", "SellersGuidePage", "Seller framework, CoCs, pricing, timeline."],
    ],
)

# --- 5. Components ---
add_heading(doc, "5. Component Inventory", 1)
add_heading(doc, "5.1 Common Components", 2)
add_table(
    doc,
    ["Component", "Responsibility"],
    [
        ["ContactForm", "Generic Netlify Forms submission handler with mailto fallback."],
        ["LiveListings", "Fetches /api/listings (Just Property scrape) and renders cards."],
        ["NeighborhoodCard", "Card UI for neighbourhood overview."],
        ["PropertyCard", "Card UI for property listings."],
        ["SEO", "react-helmet-async wrapper for per-page meta tags and JSON-LD."],
        ["TestimonialCard", "Testimonial display (name, rating, text)."],
    ],
)
add_heading(doc, "5.2 Layout Components", 2)
add_table(
    doc,
    ["Component", "Responsibility"],
    [
        ["Layout", "Root layout wrapper composing Header, page, Footer."],
        ["Header", "Top navigation, logo, mobile-menu toggle."],
        ["Footer", "Links, contact, social, copyright."],
        ["FloatingActions", "Sticky WhatsApp / call buttons (mobile-priority CTA)."],
    ],
)

doc.add_page_break()

# --- 6. Data Layer ---
add_heading(doc, "6. Data Layer", 1)
add_para(
    doc,
    "All content is stored as static JavaScript modules under src/data/. There is no database; "
    "content edits are made via pull request and shipped on the next deploy.",
)
add_table(
    doc,
    ["Module", "Shape", "Purpose"],
    [
        ["properties.js", "Array of objects: id, slug, title, price, beds, baths, sqm, images[], tags[], features[]", "Featured-property showcase."],
        ["neighborhoods.js", "Array: id, slug, name, region, tagline, image (Unsplash), description, highlights[], priceRange, lifestyle, demographic", "8 Atlantic Seaboard neighbourhoods."],
        ["testimonials.js", "Array: name, location, text, rating", "Five-star client testimonials."],
        ["contact.js", "Object: phone, email, WhatsApp, website, agency, socials, PPRA/FFC numbers, years experience, areas served, specialisations", "Agent profile + statutory compliance info."],
        ["justproperty.js", "URL builder + suburbs[] with region mapping", "Deep links to Just Property listings, calculators and profile."],
    ],
)

# --- 7. Backend / Netlify Functions ---
add_heading(doc, "7. Backend Services (Netlify Functions)", 1)
add_table(
    doc,
    ["Function", "Runtime", "Trigger", "Purpose"],
    [
        [
            "listings.js",
            "Node.js (JS)",
            "On-demand HTTPS via /api/listings",
            "Scrapes the Just Property agent page (agent #90455), parses HTML with node-html-parser, returns a normalised JSON array of listings (price, beds, baths, image, href, suburb). Cached at the edge: s-maxage=1800, stale-while-revalidate=3600.",
        ],
        [
            "weekly-stats.mts",
            "Node.js (TS, ES module)",
            "Netlify scheduled function (weekly)",
            "Calls the Netlify Analytics API for pageviews, visitors, bandwidth, top pages, top sources and 404s for the trailing 7 days; renders an HTML email; sends via Resend to a configured recipient.",
        ],
    ],
)

add_heading(doc, "7.1 Function Configuration", 2)
for b in [
    "Functions directory: netlify/functions",
    "Bundler: esbuild (configured in netlify.toml [functions])",
    "Public path mapping: /api/* → /.netlify/functions/:splat (200 rewrite)",
    "Required environment variables (set in Netlify dashboard): RESEND_API_KEY, NETLIFY_ANALYTICS_TOKEN.",
]:
    add_bullet(doc, b)

# --- 8. Forms ---
add_heading(doc, "8. Forms and Lead Capture", 1)
add_para(
    doc,
    "All forms are implemented using Netlify Forms (HTML form definitions registered in index.html "
    "with data-netlify=\"true\"). Each form includes a honeypot (netlify-honeypot=\"bot-field\") for "
    "bot filtering. On submission failure the components fall back to opening the user's mail client.",
)
add_table(
    doc,
    ["Form", "Page(s)", "Form name", "Fields"],
    [
        ["Contact", "ContactPage, HomePage", "contact", "name, email, phone, message"],
        ["Valuation", "ValuationPage", "valuation", "name, email, phone, property-type, province, reason, condition, street-address, suburb, city"],
        ["Property inquiry", "PropertiesPage, PropertyDetailsPage", "property-inquiry", "name, email, phone, property, message"],
        ["Guide request", "ResourcesPage", "guide-request", "name, email, guide (buyers|sellers)"],
    ],
)

doc.add_page_break()

# --- 9. Calculators ---
add_heading(doc, "9. Financial Calculators", 1)
add_para(
    doc,
    "Four client-side calculators using South-African market rules current as of March 2026. All "
    "computation is performed in-browser; no inputs are transmitted to the server.",
)
add_table(
    doc,
    ["Calculator", "Inputs", "Outputs", "Notes"],
    [
        [
            "Bond Repayment",
            "Purchase price, deposit, interest rate, loan term",
            "Monthly payment, total interest, total cost",
            "Standard PMT amortisation formula.",
        ],
        [
            "Affordability",
            "Gross income, other income, expenses, rate, term, deposit",
            "Maximum affordable price, maximum bond, debt-to-income ratio",
            "30 % gross-income rule; reverse PMT.",
        ],
        [
            "Transfer Costs",
            "Property price, deposit, first-time-buyer flag",
            "Transfer duty, attorney fees, deeds office, bond registration, bank initiation, total",
            "SARS duty brackets (Mar 2026): 0 % ≤ R1.1M; tiered to 13 % above R12.1M.",
        ],
        [
            "Seller Net Proceeds",
            "Sale price, bond balance, purchase price, commission %, primary-residence flag, marginal tax rate",
            "Commission + VAT, bond cancellation, municipal clearance, compliance, CGT, net proceeds",
            "CGT: R2M primary-residence exclusion + R40k annual exclusion + 40 % inclusion at marginal rate.",
        ],
    ],
)

# --- 10. SEO and Performance ---
add_heading(doc, "10. SEO, Accessibility and Performance", 1)
add_table(
    doc,
    ["Feature", "Implementation"],
    [
        ["Meta tags", "index.html — viewport, theme-color (#164E63), author, robots, og:image, locale en_ZA."],
        ["Per-page meta + JSON-LD", "SEO.jsx (react-helmet-async): RealEstateAgent, Organization, BreadcrumbList schemas."],
        ["Sitemap", "public/sitemap.xml — 23 URLs with priorities (1.0 home; 0.9 properties / valuation; 0.5 itinerary)."],
        ["Robots", "public/robots.txt — allow all except /api/*."],
        ["AI/LLM crawler hints", "public/llms.txt (where present) — declares site purpose and key entry points."],
        ["Image optimisation", "Unsplash URLs parameterised (w, h, crop, q=80) for neighbourhood imagery."],
        ["Preconnect / DNS prefetch", "images.unsplash.com, www.just.property — declared in index.html."],
        ["Code splitting", "Lazy-loaded routes via React.lazy + Suspense."],
        ["Cache headers", "/assets/* immutable 1 year; /images/* 30 days; sitemap and robots correctly typed."],
    ],
)

# --- 11. Security ---
add_heading(doc, "11. Security", 1)
add_table(
    doc,
    ["Control", "Value / Source"],
    [
        ["X-Content-Type-Options", "nosniff (netlify.toml)"],
        ["X-Frame-Options", "DENY (netlify.toml)"],
        ["Referrer-Policy", "strict-origin-when-cross-origin (netlify.toml)"],
        ["Content-Security-Policy / HSTS / Permissions-Policy", "Configured in netlify.toml security block."],
        ["TLS", "Provisioned by Netlify (Let's Encrypt) on samanthablack.co.za."],
        ["Form spam protection", "Netlify Forms honeypot (bot-field) on every form."],
        ["Secrets", "Held in Netlify environment (RESEND_API_KEY, analytics token) and GitHub Actions secrets (NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID). No secrets in repo."],
        ["Function timeouts", "listings function enforces fetch timeout and graceful redirect-failure handling."],
    ],
)

# --- 12. Integrations ---
add_heading(doc, "12. Third-Party Integrations", 1)
add_table(
    doc,
    ["Service", "Purpose", "Auth", "Trigger"],
    [
        ["Just Property", "Live property listings (agent #90455)", "None — public HTTPS scrape", "/api/listings on demand"],
        ["Unsplash", "Neighbourhood hero imagery", "Public URLs", "Static references in neighborhoods.js"],
        ["Netlify Forms", "Contact / valuation / inquiry / guide-request submissions", "Built-in (form definitions in index.html)", "Form POST"],
        ["Netlify Analytics", "Traffic data for weekly digest", "Bearer token (env var)", "weekly-stats.mts"],
        ["Resend", "Transactional email for the digest", "RESEND_API_KEY", "weekly-stats.mts"],
    ],
)

doc.add_page_break()

# --- 13. Build & Deployment ---
add_heading(doc, "13. Build and Deployment", 1)
add_heading(doc, "13.1 Build", 2)
add_table(
    doc,
    ["Setting", "Value"],
    [
        ["Build command", "npm run build"],
        ["Publish directory", "dist/"],
        ["Functions directory", "netlify/functions"],
        ["Function bundler", "esbuild"],
        ["Node version (CI)", "20"],
    ],
)

add_heading(doc, "13.2 Continuous Delivery", 2)
for b in [
    "Source: GitHub repository gabrielza/samantha-website (master branch).",
    "Workflow: .github/workflows/deploy.yml.",
    "Triggers: push to master, pull request to master, manual workflow_dispatch.",
    "Pipeline: actions/checkout → actions/setup-node@v4 (Node 20, npm cache) → npm ci → npm run build → nwtgck/actions-netlify@v3.0 deploys dist/ to production.",
    "Concurrency: netlify-${{ github.ref }} with cancel-in-progress (a new push cancels the previous run).",
    "Pull-request previews: enabled — preview URL is auto-commented on the PR.",
    "Required GitHub secrets: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID.",
]:
    add_bullet(doc, b)

add_heading(doc, "13.3 Netlify Site", 2)
add_table(
    doc,
    ["Setting", "Value"],
    [
        ["Site name", "sammbsite"],
        ["Site ID", "83330261-7de1-4d30-8f9a-a75a365ebc69"],
        ["Custom domain", "samanthablack.co.za"],
        ["Admin URL", "https://app.netlify.com/projects/sammbsite"],
        ["SPA fallback", "/* → /index.html (200)"],
        ["API rewrite", "/api/* → /.netlify/functions/:splat (200)"],
    ],
)

# --- 14. Operations & Monitoring ---
add_heading(doc, "14. Operations and Monitoring", 1)
for b in [
    "Deploy notifications: GitHub Actions run status (email on failure) and Netlify deploy log.",
    "Traffic analytics: Netlify Analytics — surfaced weekly via the weekly-stats function.",
    "Error visibility: Netlify Functions logs (in Netlify dashboard) for /api/listings and weekly digest.",
    "Rollback: redeploy a previous successful Netlify deploy from the dashboard, or revert the offending commit on master.",
    "Branch strategy: trunk-based on master; tags v6.0–v6.4 mark released versions.",
]:
    add_bullet(doc, b)

# --- 15. Compliance ---
add_heading(doc, "15. Compliance", 1)
for b in [
    "Estate agent statutory disclosures (PPRA / FFC numbers) are surfaced in src/data/contact.js and rendered in the footer.",
    "Calculators present South-African market rules with disclaimers; no advice is given that requires FAIS authorisation.",
    "Privacy: only Netlify Forms data and Netlify Analytics are collected; no third-party advertising trackers.",
    "POPIA alignment: contact information is collected with explicit user intent (form submission) and used solely for response.",
]:
    add_bullet(doc, b)

# --- 16. Roadmap ---
add_heading(doc, "16. Known Limitations and Roadmap", 1)
for b in [
    "Listings are HTML-scraped from Just Property — a markup change there can break /api/listings. Monitor function logs.",
    "Featured properties (src/data/properties.js) are hand-curated; no admin UI.",
    "GitHub Actions currently uses Node-20-based actions; refresh actions versions before September 2026 when Node 20 is removed from runners.",
    "No formal automated test suite; consider Playwright smoke tests covering home, /properties, /valuation form submission and one calculator.",
    "Consider migrating Netlify Forms data to a CRM webhook for lead-lifecycle tracking.",
]:
    add_bullet(doc, b)

# --- 17. Glossary ---
add_heading(doc, "17. Glossary", 1)
add_table(
    doc,
    ["Term", "Definition"],
    [
        ["SPA", "Single-Page Application — client-side routed React app served as static assets."],
        ["CGT", "Capital Gains Tax — applied on disposal of immovable property in South Africa."],
        ["PPRA", "Property Practitioners Regulatory Authority (replaced the EAAB)."],
        ["FFC", "Fidelity Fund Certificate — required to operate as a property practitioner."],
        ["CoC", "Certificate of Compliance (electrical, gas, plumbing, beetle, electric fence)."],
        ["CDN", "Content Delivery Network."],
        ["JSON-LD", "JSON for Linked Data — structured-data markup for search engines."],
        ["PMT", "Loan-amortisation payment formula."],
    ],
)

# Save
doc.save(OUT)
print(f"Wrote: {OUT}")
print(f"Size: {OUT.stat().st_size:,} bytes")
