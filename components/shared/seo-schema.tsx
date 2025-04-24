'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface SoftwareApplicationSchema {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  ratingValue?: string;
  ratingCount?: string;
  featureList?: string;
  keywords?: string;
}

interface LocalBusinessSchema {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  url?: string;
}

interface FAQSchema {
  questions: {
    question: string;
    answer: string;
  }[];
}

interface OrganizationSchema {
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

interface BreadcrumbSchema {
  items: {
    name: string;
    url: string;
  }[];
}

// Helper function to stably stringify JSON with keys sorted alphabetically
// This helps prevent hydration errors from different ordering of keys
function stableJsonStringify(data: unknown): string {
  if (typeof data !== 'object' || data === null) {
    return JSON.stringify(data);
  }
  
  if (Array.isArray(data)) {
    return '[' + data.map(stableJsonStringify).join(',') + ']';
  }
  
  return '{' + Object.keys(data as Record<string, unknown>)
    .sort()
    .map(key => `"${key}":${stableJsonStringify((data as Record<string, unknown>)[key])}`)
    .join(',') + '}';
}

// Schema components that use client-side rendering only
export const SoftwareAppSchema = ({ 
  name, 
  description, 
  price = "99", 
  priceCurrency = "USD",
  ratingValue = "4.8",
  ratingCount = "58",
  featureList = "",
  keywords = ""
}: SoftwareApplicationSchema) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // Only render on client side to avoid hydration mismatch
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency
    },
    "description": description,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": ratingCount
    },
    "featureList": featureList,
    "keywords": keywords
  };
  
  const jsonString = stableJsonStringify(structuredData);
  
  return (
    <Script
      id="software-application-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
      strategy="afterInteractive"
    />
  );
};

export const LocalBusinessSchema = ({ 
  name, 
  description, 
  address,
  telephone,
  url
}: LocalBusinessSchema) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "telephone": telephone,
    "url": url
  };
  
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stableJsonStringify(structuredData) }}
      strategy="afterInteractive"
    />
  );
};

export const FAQPageSchema = ({ questions }: FAQSchema) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
  
  return (
    <Script
      id="faq-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stableJsonStringify(structuredData) }}
      strategy="afterInteractive"
    />
  );
};

export const OrganizationSchema = ({ 
  name, 
  description, 
  url,
  logo,
  sameAs
}: OrganizationSchema) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": url,
    ...(logo && { "logo": logo }),
    ...(sameAs && { "sameAs": sameAs })
  };
  
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stableJsonStringify(structuredData) }}
      strategy="afterInteractive"
    />
  );
};

export const BreadcrumbSchema = ({ items }: BreadcrumbSchema) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  
  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stableJsonStringify(structuredData) }}
      strategy="afterInteractive"
    />
  );
}; 