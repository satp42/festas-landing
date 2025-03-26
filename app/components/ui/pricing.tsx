"use client";

import { buttonVariants } from "./button";
import { cn } from "../../lib/utils";
import { Check, Star } from "lucide-react";
import { Link } from "@remix-run/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  // Add a check to ensure plans are available
  const pricingPlans = plans && plans.length > 0 ? plans : [
    {
      name: "CORE ESSENTIALS",
      price: "99",
      yearlyPrice: "79",
      period: "per month",
      features: [
        "Financial Statement Consolidation",
        "Automated data import from ERP systems",
        "Basic reconciliation tools",
        "12-month rolling forecast updated monthly",
        "Pre-built templates for revenue, COGS, and operating expenses"
      ],
      description: "Affordable, no-frills solution for industrial firms needing to unify financials and maintain a basic forward-looking view.",
      buttonText: "Start Free Trial",
      href: "/sign-up",
      isPopular: false,
    },
    {
      name: "PROFESSIONAL GROWTH",
      price: "249",
      yearlyPrice: "199",
      period: "per month",
      features: [
        "Everything in Core Essentials, plus:",
        "Enhanced 18-month rolling forecast", 
        "Customizable drivers specific to industrials",
        "Variance analysis comparing actuals vs. forecast",
        "Department-level budget tracking"
      ],
      description: "A robust solution for growing industrial firms that need more detailed forecasting, budgeting, and team collaboration.",
      buttonText: "Get Started",
      href: "/sign-up",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      price: "499",
      yearlyPrice: "399",
      period: "per month",
      features: [
        "Everything in Professional Growth, plus:",
        "Scenario Planning with what-if analysis",
        "Stress testing for key variables",
        "Personalized KPI Dashboard with drag-and-drop interface",
        "Industry-specific presets for industrials"
      ],
      description: "For large organizations with specific needs requiring advanced scenario planning and predictive analytics.",
      buttonText: "Contact Sales",
      href: "/contact",
      isPopular: false,
    }
  ];

  return (
    <section className="py-24 bg-[#023047] text-white">
      <div className="container mx-auto px-4 max-w-7xl space-y-12">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-white">
            {title}
          </h2>
          <p className="text-[#8ecae6] lg:text-lg whitespace-pre-line">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                `rounded-2xl border-[1px] p-6 bg-[#01263a] text-center flex flex-col justify-between relative h-full`,
                plan.isPopular ? "border-[#ffb703] border-2" : "border-[#219ebc]",
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#ffb703] py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                  <Star className="text-[#023047] h-4 w-4 fill-current" />
                  <span className="text-[#023047] ml-1 font-sans font-semibold">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex-1 flex flex-col">
                <p className="text-base font-semibold text-[#8ecae6]">
                  {plan.name}
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    ${plan.price}
                  </span>
                  {plan.period !== "Next 3 months" && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-[#8ecae6]">
                      / {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-xs leading-5 text-[#8ecae6]">
                  billed monthly
                </p>

                <ul className="mt-5 gap-2 flex flex-col">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#ffb703] mt-1 flex-shrink-0" />
                      <span className="text-left text-[#8ecae6]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-4 border-[#219ebc]/30" />

                <Link
                  to={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-[#ffb703] hover:ring-offset-1 hover:bg-[#ffb703] hover:text-[#023047]",
                    plan.isPopular
                      ? "bg-[#ffb703] text-[#023047]"
                      : "bg-[#01263a] text-white border-[#219ebc]"
                  )}
                >
                  {plan.buttonText}
                </Link>
                <p className="mt-6 text-xs leading-5 text-[#8ecae6]">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 