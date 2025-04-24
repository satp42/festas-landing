import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

// Load fonts with `display: 'swap'` to avoid FOUT and consistent SSR rendering
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Add this to improve font loading behavior
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Add this to improve font loading behavior
});

// Comprehensive SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://usefestas.com'), // Updated to correct domain
  title: {
    template: '%s | Festas FP&A Agents',
    default: 'Festas FP&A Agents | AI-Powered Financial Planning for Industrial SMBs',
  },
  description: "Real-time, AI-driven financial planning for trucking, logistics, and waste-management operators. Protect margins, tame volatility, and fund growth without hiring a finance team.",
  generator: 'Next.js',
  applicationName: 'Festas FP&A',
  referrer: 'origin-when-cross-origin',
  keywords: ['FP&A', 'financial planning', 'industrial SMB', 'trucking', 'logistics', 'waste-management', 'AI financial', 'cash flow forecasting', 'margin optimization', 'fleet management', 'operating ratio'],
  authors: [{ name: 'Festas' }],
  creator: 'Festas Team',
  publisher: 'Festas Inc.',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  category: 'financial technology',
  
  // Open Graph metadata
  openGraph: {
    title: 'Festas FP&A Agents | AI-Powered Financial Planning for Industrial SMBs',
    description: 'Real-time, AI-driven financial planning for trucking, logistics, and waste-management operators. Protect margins, tame volatility, and fund growth without hiring a finance team.',
    url: 'https://usefestas.com',
    siteName: 'Festas',
    images: [
      {
        url: '@og-image.png',
        width: 1200,
        height: 630,
        alt: 'Festas FP&A Platform - Modern Financial Planning for Industrial Businesses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'Festas FP&A Agents | AI-Powered Financial Planning for Industrial SMBs',
    description: 'Real-time, AI-driven financial planning for trucking, logistics, and waste-management operators.',
    images: ['@og-image.png'],
    creator: '@festasHQ', // Replace with your actual Twitter handle
    site: '@festasHQ', // Replace with your actual Twitter handle
  },
  
  // Alternate languages/versions
  alternates: {
    canonical: 'https://usefestas.com',
  },
  
  // Icons - Ensure favicon.ico is in the app directory for automatic handling
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' }, // Create and add this icon file to public folder
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg', // Create and add this icon file to public folder
      },
    ],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Viewport metadata
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' }, // Using the dark slate color from the design system
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create class names outside of the JSX to ensure consistency
  const bodyClasses = `${geistSans.variable} ${geistMono.variable} antialiased`;
  
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Umami Analytics Tracking Code */}
      <Script 
        src="https://cloud.umami.is/script.js" 
        data-website-id="07e23cdb-96ed-4d80-a972-8d2acce16441"
        strategy="afterInteractive"
        defer
      />
      <body className={bodyClasses}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
