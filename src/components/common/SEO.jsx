import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '' }) {
  const siteUrl = 'https://www.samanthablack.co.za';
  const fullTitle = title
    ? `${title} | Samantha Black — Cape Town Property Specialist`
    : 'Samantha Black | Cape Town Property Specialist';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
