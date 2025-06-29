import { Location } from '../types/location';

export function generateLocationSEO(location: Location) {
  const title = `Pinterest Marketing Agency in ${location.name}, ${location.state} | PinClimb`;
  const description = `Top Pinterest marketing agency in ${location.name}, ${location.state}. Drive traffic, increase sales, and grow your brand with our proven Pinterest marketing strategies. Serving ${location.marketSize} users.`;
  const keywords = `Pinterest marketing ${location.name}, Pinterest agency ${location.state}, Pinterest SEO ${location.name}, Pinterest ads ${location.state}, social media marketing ${location.name}`;

  return {
    title,
    description,
    keywords,
    canonical: `https://pinclimb.com/${location.id}`,
    openGraph: {
      title,
      description,
      url: `https://pinclimb.com/${location.id}`,
      type: 'website',
      image: 'https://pinclimb.com/images/og-image.jpg'
    }
  };
}

export function generateLocationStructuredData(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `PinClimb - Pinterest Marketing Agency ${location.name}`,
    "description": `Pinterest marketing services in ${location.name}, ${location.state}`,
    "url": `https://pinclimb.com/${location.id}`,
    "telephone": location.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": location.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": location.name
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "",
        "longitude": ""
      },
      "geoRadius": "50"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/pinclimb",
      "https://www.instagram.com/pinclimb",
      "https://www.linkedin.com/company/pinclimb"
    ]
  };
}