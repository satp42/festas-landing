"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

interface SupportSectionProps {
  supportHeading?: string;
  supportDescription?: string;
  supportButtonText?: string;
  supportButtonUrl?: string;
}

const SupportSection = ({
  supportHeading = "Need More Help?",
  supportDescription = "Our expert support team is available to provide personalized assistance with your financial planning questions.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "https://cal.com/satwikp/festas-support",
}: SupportSectionProps) => {
  return (
    <section className="py-24 bg-[#023047] text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-[#01263a] p-4 text-center md:rounded-xl md:p-6 lg:p-8 border border-[#219ebc]/30">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=256&q=80" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://images.unsplash.com/photo-1502767089025-6572583495d4?auto=format&fit=crop&w=256&q=80" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg text-white">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-[#8ecae6] lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto bg-[#ffb703] hover:bg-[#fb8500] text-[#023047] font-medium" asChild>
              <a href={supportButtonUrl} target="_blank" rel="noopener noreferrer">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export both the new component name and the old one for backward compatibility
export { SupportSection, SupportSection as Faq3 }; 