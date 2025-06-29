import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'PinClimb - Pinterest Marketing Agency | Grow Your Business with Pinterest SEO',
    template: '%s | PinClimb'
  },
  description: 'PinClimb is a leading Pinterest marketing agency specializing in Pinterest SEO, organic growth, Pinterest pin design, and Pinterest ads management. Drive traffic, increase sales, and grow your brand with our proven Pinterest marketing strategies.',
  keywords: [
    'Pinterest marketing',
    'Pinterest SEO',
    'Pinterest ads',
    'Pinterest marketing manager',
    'Pinterest management',
    'Pinterest growth',
    'pin design',
    'Pinterest strategy',
    'social media marketing',
    'eCommerce Pinterest',
    'Pinterest marketing expert',
    'pinterest pin design',
    'pinterest affiliate marketing',
    'Pinterest marketing near me',
    'social media manager',
    'social media marketing manager',
    'social media content designer'
  ],
  authors: [{ name: 'PinClimb' }],
  creator: 'PinClimb',
  publisher: 'PinClimb',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pinclimb.com',
    siteName: 'PinClimb',
    title: 'PinClimb - Pinterest Marketing Agency | Grow Your Business with Pinterest SEO',
    description: 'Drive traffic, increase sales, and grow your brand with our proven Pinterest marketing strategies. Expert Pinterest SEO, organic growth, pin design, and ads management.',
    images: [
      {
        url: 'https://pinclimb.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PinClimb Pinterest Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PinClimb - Pinterest Marketing Agency | Grow Your Business with Pinterest SEO',
    description: 'Drive traffic, increase sales, and grow your brand with our proven Pinterest marketing strategies. Expert Pinterest SEO, organic growth, pin design, and ads management.',
    images: ['https://pinclimb.com/images/og-image.jpg'],
    creator: '@PinClimb',
    site: '@PinClimb',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://pinclimb.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        
        {/* Theme and app configuration */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PinClimb",
              "alternateName": "PinClimb Pinterest Marketing Agency",
              "url": "https://pinclimb.com",
              "logo": "https://pinclimb.com/images/logo.png",
              "description": "Leading Pinterest marketing agency specializing in Pinterest SEO, organic growth, pin design, and Pinterest ads management.",
              "foundingDate": "2019",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-7468",
                "contactType": "customer service",
                "email": "hello@pinclimb.com",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "Multiple States"
              },
              "sameAs": [
                "https://www.facebook.com/pinclimb",
                "https://www.instagram.com/pinclimb",
                "https://www.linkedin.com/company/pinclimb",
                "https://twitter.com/pinclimb"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Pinterest Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pinterest SEO",
                      "description": "Optimize your Pinterest presence for search visibility and organic growth"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pinterest Pin Design",
                      "description": "Custom-designed pins that capture attention and drive clicks"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pinterest Ads Management",
                      "description": "Strategic advertising campaigns that deliver measurable results"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}