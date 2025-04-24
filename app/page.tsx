"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HeroDemo } from "@/components/ui/animated-hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FeaturesGrid } from "@/components/ui/feature-grid";
import { PricingSection } from "@/components/ui/pricing-section";
import { FAQSection } from "@/components/ui/faq-section";
import { toast } from "sonner";
import { SoftwareAppSchema, OrganizationSchema } from "@/components/shared/seo-schema";

// Metadata for the home page is defined in the root layout.tsx file

export default function Home() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Check if redirected from waitlist form with success parameter
    const success = searchParams.get('success');
    
    if (success === 'true') {
      toast.success('You\'re on the waitlist!', {
        description: 'Thank you for your interest in Festas FP&A Agents. Our team will reach out to discuss how we can help optimize your operations.',
        position: 'top-center',
        duration: 6000,
      });
    }
  }, [searchParams]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Schema.org structured data */}
      <SoftwareAppSchema 
        name="Festas FP&A Agents"
        description="Real-time, AI-driven financial planning for trucking, logistics, and waste-management operators. Protect margins, tame volatility, and fund growth without hiring a finance team."
        featureList="Financial Statement Consolidation, Rolling Forecasts, Core Reporting, Margin-Leakage Detection, Optimization Recommendations"
        keywords="FP&A, financial planning, industrial SMB, trucking, logistics, waste-management, AI financial, cash flow forecasting, margin optimization, fleet management, operating ratio"
      />
      
      <OrganizationSchema 
        name="Festas Inc."
        description="Provider of AI-driven financial planning and analysis software for industrial businesses"
        url="https://usefestas.com"
        logo="https://usefestas.com/favicon.ico"
        sameAs={[
          "https://twitter.com/festasHQ",
          "https://linkedin.com/company/festas",
          "https://facebook.com/festasHQ"
        ]}
      />

      {/* Background component */}
      <BackgroundBeams className="fixed inset-0 w-full h-full z-0" />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero section */}
        <section className="min-h-screen grid place-items-center" aria-label="Festas FP&A platform introduction">
          <div className="w-full">
            <HeroDemo />
          </div>
        </section>
        
        {/* Features section */}
        <section aria-label="Features of Festas FP&A platform">
          <FeaturesGrid />
        </section>
        
        {/* Pricing section */}
        <section aria-label="Pricing plans for Festas FP&A platform">
          <PricingSection />
        </section>
        
        {/* FAQ section */}
        <section aria-label="Frequently asked questions about Festas">
          <FAQSection />
        </section>
      </div>
    </div>
  );
}
