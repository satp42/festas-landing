"use client";

import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Core Essentials",
    price: {
      monthly: "$129",
      annually: "$99",
    },
    description: "Affordable, no-frills solution for industrial firms needing to unify financials and maintain a basic forward-looking view without complex modeling.",
    features: [
      "Financial Statement Consolidation",
      "Basic Rolling Forecast (12-month)",
      "Core Reporting (P&L, balance sheet, cash flow)",
      "Up to 3 users",
      "Email support (48-hour response)"
    ],
    cta: "Get Started",
    href: "/get-started",
    highlighted: false,
  },
  {
    name: "Professional Growth",
    price: {
      monthly: "$299",
      annually: "$249",
    },
    description: "A robust solution for growing industrial firms that need more detailed forecasting, budgeting, and team collaboration to optimize financial performance.",
    features: [
      "Everything in Core Essentials, plus:",
      "Enhanced Rolling Forecast (18-month)",
      "Budgeting Tools with department-level tracking",
      "Collaboration Features with audit trail",
      "Advanced Reporting with visual dashboards",
      "Up to 10 users",
      "Priority email + live chat support",
      "API access for ERP/CRM integration"
    ],
    cta: "Upgrade Now",
    href: "/get-started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      annually: "Custom",
    },
    description: "Full-featured solution for large industrial companies requiring advanced analytics, forecasting, and collaboration tools.",
    features: [
      "Everything in Professional Growth, plus:",
      "Scenario Planning with side-by-side comparison",
      "Personalized KPI Dashboard with industry presets",
      "Predictive Analytics with AI-driven insights",
      "Advanced Collaboration with role-based permissions",
      "Premium Reporting with automated commentary",
      "Unlimited users",
      "Dedicated account manager + 24/7 support",
      "Full API access + premium connectors"
    ],
    cta: "Contact Sales",
    href: "https://cal.com/satwikp/festas-demo-call",
    highlighted: false,
  },
];

interface PricingSectionProps {
  className?: string;
}

export function PricingSection({ className }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annually">("annually");

  return (
    <div className={cn("container mx-auto px-4 md:px-8 py-20 lg:py-40 relative z-20", className)}>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-regular tracking-tighter mb-4">
          Simple, <span className="text-spektr-cyan-50">Transparent</span> Pricing
        </h2>
        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
          Purpose-built FP&A solutions for industrial businesses of all sizes.
        </p>
        <div className="mt-6 inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800/50 rounded-full">
          <button
            onClick={() => setBillingCycle("annually")}
            className={cn(
              "px-4 py-2 text-sm rounded-full transition-all",
              billingCycle === "annually" 
                ? "bg-white dark:bg-slate-950 shadow-sm" 
                : "text-muted-foreground"
            )}
          >
            Annual (Save 20%)
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={cn(
              "px-4 py-2 text-sm rounded-full transition-all",
              billingCycle === "monthly" 
                ? "bg-white dark:bg-slate-950 shadow-sm" 
                : "text-muted-foreground"
            )}
          >
            Monthly
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <Card 
            key={plan.name}
            className={cn(
              "flex flex-col h-full",
              plan.highlighted && "border-spektr-cyan-50 dark:border-spektr-cyan-50 shadow-[0_0_25px_rgba(125,211,252,0.25)]"
            )}
          >
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price[billingCycle]}
                </span>
                {plan.price[billingCycle] !== "Custom" && (
                  <span className="ml-1 text-sm text-muted-foreground">
                    /month
                  </span>
                )}
              </div>
              <CardDescription className="mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-spektr-cyan-50 flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={cn(
                  "w-full transition-colors duration-200",
                  plan.highlighted 
                    ? "bg-spektr-cyan-50 hover:bg-spektr-cyan-50/90 text-slate-900"
                    : "hover:text-spektr-cyan-50 border-spektr-cyan-50/20 hover:border-spektr-cyan-50"
                )}
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 