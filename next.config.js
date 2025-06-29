/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better performance
  output: 'export',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.pexels.com', 'pinclimb.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Optimize for static generation
  experimental: {
    optimizeCss: true,
  },
  
  // Compress output
  compress: true,
  
  // Generate sitemap during build
  async generateBuildId() {
    return 'pinclimb-build-' + Date.now();
  },
  
  // Redirect configuration for location pages
  async redirects() {
    return [
      // Add any necessary redirects here
    ];
  },
  
  // Headers for SEO and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;