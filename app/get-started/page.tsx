"use client";

import { LoginForm } from "@/components/login-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background component */}
      <BackgroundBeams className="absolute inset-0 w-full h-full z-0" />
      
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