import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/temp/', '/*.json$'],
    },
    sitemap: 'https://pinclimb.com/sitemap.xml',
  };
}