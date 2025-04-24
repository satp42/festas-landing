"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HeroDemo } from "@/components/ui/animated-hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { toast } from "sonner";

export default function Home() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Check if redirected from waitlist form with success parameter
    const success = searchParams.get('success');
    
    if (success === 'true') {
      toast.success('Successfully added to the waitlist!', {
        description: 'Thank you for your interest in Festas. We will contact you soon.',
        position: 'top-center',
      });
    }
  }, [searchParams]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background component with responsive sizing */}
      <BackgroundBeams className="absolute inset-0 w-full h-full z-0" />
      
      {/* Content positioned above the background */}
      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col w-full row-start-2">
          <HeroDemo />
        </main>
        
      </div>
    </div>
  );
}
