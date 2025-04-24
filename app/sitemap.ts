import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://usefestas.com'; // Updated to correct domain
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add all your important routes here
    // Example:
    // {
    //   url: `${baseUrl}/pricing`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
  ];
} 