"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HeroDemo } from "@/components/ui/animated-hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FeaturesGrid } from "@/components/ui/feature-grid";
import { PricingSection } from "@/components/ui/pricing-section";
import { toast } from "sonner";

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
      {/* Background component */}
      <BackgroundBeams className="fixed inset-0 w-full h-full z-0" />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero section */}
        <section className="min-h-screen grid place-items-center">
          <div className="w-full">
            <HeroDemo />
          </div>
        </section>
        
        {/* Features section */}
        <section>
          <FeaturesGrid />
        </section>
        
        {/* Pricing section */}
        <section>
          <PricingSection />
        </section>
      </div>
    </div>
  );
}
