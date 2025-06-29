const fs = require('fs');
const path = require('path');

// Base URL for your website
const BASE_URL = 'https://pinclimb.com';

// Location data - this will be expanded to 500+ locations
const locationsData = [
  {
    id: 'pinterest-marketing-agency-new-york',
    name: 'New York',
    state: 'NY'
  },
  {
    id: 'pinterest-marketing-agency-los-angeles',
    name: 'Los Angeles',
    state: 'CA'
  },
  {
    id: 'pinterest-marketing-agency-chicago',
    name: 'Chicago',
    state: 'IL'
  },
  {
    id: 'pinterest-marketing-agency-miami',
    name: 'Miami',
    state: 'FL'
  },
  {
    id: 'pinterest-marketing-agency-austin',
    name: 'Austin',
    state: 'TX'
  },
  {
    id: 'pinterest-marketing-agency-seattle',
    name: 'Seattle',
    state: 'WA'
  }
  // TODO: Expand this to 500+ locations for full deployment
];

const blogPostsData = [
  {
    id: 'pinterest-seo-guide-2024',
    publishDate: '2024-01-15'
  },
  {
    id: 'pinterest-ads-strategy-2024',
    publishDate: '2024-01-10'
  },
  {
    id: 'pinterest-content-creation-tips',
    publishDate: '2024-01-05'
  },
  {
    id: 'pinterest-analytics-guide',
    publishDate: '2024-01-01'
  },
  {
    id: 'pinterest-trends-2024',
    publishDate: '2023-12-28'
  },
  {
    id: 'pinterest-business-account-setup',
    publishDate: '2023-12-20'
  }
];

const caseStudiesData = [
  { id: 'bloom-co' },
  { id: 'artisan-kitchen' },
  { id: 'sunset-wellness' },
  { id: 'urban-fashion' },
  { id: 'tech-startup' },
  { id: 'luxury-travel' }
];

const detailedServicesData = [
  { id: 'pinterest-strategy' },
  { id: 'content-creation' },
  { id: 'pinterest-ads' }
];

// Static routes from your App.tsx
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/testimonials',
  '/blog',
  '/contact',
  '/services/pinterest-organic-growth',
  '/services/pinterest-pin-design',
  '/services/pinterest-ads',
  '/services/pinterest-seo-ecommerce',
  '/services/social-media-marketing'
];

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Add static routes
  staticRoutes.forEach(route => {
    const priority = route === '/' ? '1.0' : '0.8';
    const changefreq = route === '/' ? 'daily' : 'weekly';
    sitemap += `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  // Add location pages with optimized priorities
  locationsData.forEach(location => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/${location.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  // Add blog posts
  blogPostsData.forEach(post => {
    const postDate = new Date(post.publishDate).toISOString().split('T')[0];
    sitemap += `
  <url>
    <loc>${BASE_URL}/blog/${post.id}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Add case studies
  caseStudiesData.forEach(caseStudy => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/case-study/${caseStudy.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Add detailed service pages
  detailedServicesData.forEach(service => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/services/${service.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  
  // Generate robots.txt optimized for performance
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /temp/
Disallow: /*.json$

# Optimize crawl rate for large site
Crawl-delay: 1

Sitemap: ${BASE_URL}/sitemap.xml

# Performance optimizations
User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 1`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  
  console.log('✅ Sitemap and robots.txt generated successfully!');
  console.log(`📍 Generated ${staticRoutes.length} static routes`);
  console.log(`📍 Generated ${locationsData.length} location pages`);
  console.log(`📍 Generated ${blogPostsData.length} blog posts`);
  console.log(`📍 Generated ${caseStudiesData.length} case studies`);
  console.log(`📍 Generated ${detailedServicesData.length} service pages`);
  console.log(`📍 Total URLs: ${staticRoutes.length + locationsData.length + blogPostsData.length + caseStudiesData.length + detailedServicesData.length}`);
  console.log('🚀 Ready for 500+ location pages - just expand locationsData array');
}

// Run the generator
generateSitemap();