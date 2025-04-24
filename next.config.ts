import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false, // Removes the X-Powered-By header which improves security
  compress: true, // Enable gzip compression for better performance
  images: {
    domains: [], // Add domains if you load images from external sources
    formats: ['image/avif', 'image/webp'], // Preferred modern image formats
  },
  // Enable trailingSlash for consistent URLs (SEO benefit)
  trailingSlash: true,
  // Optional: Add redirects for SEO if you have old URLs that need to be redirected
  async redirects() {
    return [
      // Example redirect - uncomment and modify if needed
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 308 status code
      // },
    ];
  },
};

export default nextConfig;
