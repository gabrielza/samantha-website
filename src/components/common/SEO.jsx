import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '', type = 'website', jsonLd }) {
  const siteUrl = 'https://www.samanthablack.co.za';
  const fullTitle = title
    ? `${title} | Samantha Black — Cape Town Property Specialist`
    : 'Samantha Black | Cape Town Property Specialist';
  const url = `${siteUrl}${path}`;
  const ogImage = `${siteUrl}/images/Free_Property_Valuation.jpeg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Samantha Black — Just Property Cape Town" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="ZA-WC" />
      <meta name="geo.placename" content="Cape Town" />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
