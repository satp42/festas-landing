import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'], // Adjust according to your site structure
    },
    sitemap: 'https://usefestas.com/sitemap.xml', // Replace with your actual domain
  };
} 