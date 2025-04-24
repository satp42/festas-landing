import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Festas FP&A Agents',
    short_name: 'Festas',
    description: 'AI-driven financial planning for industrial SMBs',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#06b6d4', // The cyan color from the color scheme
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
} 