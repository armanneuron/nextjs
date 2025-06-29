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
  
  // Disable SWC minifier to avoid native addon issues in WebContainer
  swcMinify: false,
  
  // Use Babel for transpilation
  experimental: {
    forceSwcTransforms: false,
  },
  
  // Webpack configuration to handle build issues
  webpack: (config, { isServer }) => {
    // Fallback for Node.js modules in client-side code
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;