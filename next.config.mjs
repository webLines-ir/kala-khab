/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    unoptimized: true,
    domains: []
  },
  // GitHub Pages configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kala-khab/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/kala-khab' : ''
};

export default nextConfig;