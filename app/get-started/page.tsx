"use client";

import { LoginForm } from "@/components/login-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/shared/seo-schema";

// Metadata is defined in layout.tsx 

export default function GetStarted() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Schema.org structured data */}
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://usefestas.com/' },
          { name: 'Get Started', url: 'https://usefestas.com/get-started/' }
        ]} 
      />
      
      {/* Background component */}
      <BackgroundBeams className="absolute inset-0 w-full h-full z-0" />
      
      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="size-4 mr-1" />
            Back
          </Link>
        </Button>
      </div>
      
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <motion.div 
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1]
          }}
        >
          <LoginForm />
        </motion.div>
      </div>  
    </div>
  );
} 