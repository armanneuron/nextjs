/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better performance
  output: 'export',
  trailingSlash: true,
  
  // Disable SWC to avoid compilation issues in WebContainer
  swcMinify: false,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.pexels.com', 'pinclimb.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Disable experimental features that might cause issues
  experimental: {
    // Remove optimizeCss as it might cause build issues
  },
  
  // Compress output
  compress: true,
  
  // Generate sitemap during build
  async generateBuildId() {
    return 'pinclimb-build-' + Date.now();
  },
  
  // Ensure proper static export
  distDir: 'out',
};

module.exports = nextConfig;