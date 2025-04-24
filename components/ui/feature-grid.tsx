import {
  BarChartIcon,
  MagnifyingGlassIcon,
  Link1Icon,
  MixerHorizontalIcon,
  DashboardIcon,
  ClockIcon,
} from "@radix-ui/react-icons";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: MagnifyingGlassIcon,
    name: "Stop Margin Leakage",
    description: "AI spots hidden costs in real-time – unplanned detention, empty miles, fuel waste – with actionable alerts to protect your profits.",
    href: "/features/margin-protection",
    cta: "Find Hidden Costs",
    background: <></>,
    className: "col-span-1 md:col-span-2",
  },
  {
    Icon: BarChartIcon,
    name: "Predict Cash Flow Daily",
    description: "Get rolling 13-week cash & 12-month P&L forecasts updated nightly. Manage volatile costs and plan capex confidently.",
    href: "/features/forecasting",
    cta: "See Your Forecast",
    background: <></>,
    className: "col-span-1 md:col-span-1",
  },
  {
    Icon: MixerHorizontalIcon,
    name: "Optimize Fuel & Maintenance",
    description: "Receive AI-driven recommendations for optimal fuel hedging, preventive maintenance timing, and rate renegotiations.",
    href: "/features/optimization",
    cta: "Get Recommendations",
    background: <></>,
    className: "col-span-1 md:col-span-1",
  },
  {
    Icon: Link1Icon,
    name: "Unify Your Data Sources",
    description: "Automatically connect your TMS, ELDs, fuel cards, and accounting software in minutes. Ditch the spreadsheets.",
    href: "/integrations",
    cta: "View Integrations",
    background: <></>,
    className: "col-span-1 md:col-span-2",
  },
  {
    Icon: ClockIcon,
    name: "Working Capital Optimization",
    description: "AI forecasts AR aging and suggests optimal timing for factoring or credit-line draws to cover payroll and other critical expenses.",
    href: "/features/working-capital",
    cta: "Optimize Cash Flow",
    background: <></>,
    className: "col-span-1 md:col-span-2",
  },
  {
    Icon: DashboardIcon,
    name: "Industrial KPI Dashboard",
    description: "Monitor key metrics like Operating Ratio, Cost-per-Mile, and fuel variance in one place with role-based views for owners and operators.",
    href: "/features/dashboard",
    cta: "Explore Dashboards",
    background: <></>,
    className: "col-span-1 md:col-span-1",
  },
];

export function FeaturesGrid() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 lg:py-40 relative z-20">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-regular tracking-tighter mb-4">
          Purpose-Built for <span className="text-spektr-cyan-50">Industrial SMBs</span>
        </h2>
        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
          Transform operational and financial data into actionable insights without hiring a full finance team.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <BentoCard 
              key={feature.name} 
              {...feature} 
              customButton={(
                <Button variant="ghost" size="sm" className="px-0 gap-2 text-muted-foreground hover:text-spektr-cyan-50 hover:bg-transparent">
                  {feature.cta}
                  <MoveRight className="h-4 w-4" />
                </Button>
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
} 