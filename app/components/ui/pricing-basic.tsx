"use client";

import { Pricing } from "./pricing";

const industrialPlans = [
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
      "Pre-built templates for revenue, COGS, and operating expenses",
      "Simple trend analysis based on historical data",
      "Standardized financial reports (P&L, balance sheet, cash flow)",
      "Exportable to PDF or Excel",
      "Up to 3 users",
      "Email support (48-hour response)"
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
      "Annual budgeting module with planning options",
      "Department-level budget tracking",
      "Collaboration features with commenting",
      "Audit trail for changes",
      "Drill-down reports by business unit",
      "Visual dashboards with basic KPIs",
      "Up to 10 users",
      "Priority email + live chat support (24-hour response)"
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
      "Industry-specific presets for industrials",
      "Predictive Analytics with AI-driven insights",
      "Advanced Collaboration with role-based permissions",
      "Executive-ready presentations",
      "Custom report builder for ad-hoc analysis",
      "Unlimited users",
      "Dedicated account manager + 24/7 support"
    ],
    description: "For large organizations with specific needs requiring advanced scenario planning and predictive analytics.",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

export function PricingBasic() {
  return (
    <section id="pricing">
      <Pricing 
        plans={industrialPlans}
        title="Pricing Plans for Industrial FP&A"
        description="Choose the plan that works best for your business.
All plans include financial statement consolidation, forecasting tools, and dedicated support."
      />
    </section>
  );
} 