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
  
  // Compress output
  compress: true,
  
  // Generate sitemap during build
  async generateBuildId() {
    return 'pinclimb-build-' + Date.now();
  },
  
  // Ensure proper static export
  distDir: 'out',
  
  // Disable SWC minifier to avoid native addon issues
  swcMinify: false,
  
  // Use Babel for transpilation
  experimental: {
    forceSwcTransforms: false,
  },
};

module.exports = nextConfig;