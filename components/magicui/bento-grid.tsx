import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  customButton?: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-4 relative z-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  customButton,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6",
      // light styles
      "border border-neutral-800 bg-card backdrop-blur-sm",
      // dark styles
      "transform-gpu hover:border-neutral-700 transition-all duration-200 shadow-lg",
      className,
    )}
    {...props}
  >
    {background}
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center h-9 w-9 rounded-full bg-primary">
          <Icon className="h-5 w-5 text-white" />
        </span>
        <h3 className="text-lg font-medium tracking-tight text-foreground">
          {name}
        </h3>
      </div>
      <p className="text-sm tracking-tight text-muted-foreground leading-relaxed">{description}</p>
    </div>

    <div className="mt-4 pt-4">
      {customButton ? (
        customButton
      ) : (
        <Button variant="ghost" asChild size="sm" className="text-sm px-0 hover:bg-transparent">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-1 h-3 w-3 rtl:rotate-180" />
          </a>
        </Button>
      )}
    </div>
  </div>
);

export { BentoCard, BentoGrid };
