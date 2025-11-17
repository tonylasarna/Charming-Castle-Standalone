export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Charming Castle',
    description: 'Luxury event rentals and styling across Central Florida.',
    areaServed: 'Central Florida',
    url: 'https://charmingcastle.example.com',
    telephone: '+1-407-555-0199',
    sameAs: ['https://www.instagram.com', 'https://www.facebook.com'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orlando',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
