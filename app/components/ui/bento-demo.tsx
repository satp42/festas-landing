import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "./bento-grid";
import { Faq3 } from "./faq3";
import { AnimatedBeamMultipleOutputDemo } from "./integration-beam-demo";
import AnimatedListDemo from "./notifs";
import { PricingBasic } from "./pricing-basic";

// Stock Unsplash image URLs
const stockImages = [
  "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=2960&q=80",
  "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=2964&q=80",
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Financial Planning",
    description: "Automate your financial planning with AI-powered analysis and projections.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <img src={stockImages[0]} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Financial planning" />
        <div className="absolute inset-0 bg-[#003049] opacity-60"></div>
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Data Integration",
    description: "Connect to your existing financial data sources with seamless integration.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#003049] opacity-60">
          <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        </div>
      </div>
    ),
    className: "group lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Global Compliance",
    description: "Stay compliant with financial regulations across multiple jurisdictions.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <img src={stockImages[2]} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Global compliance" />
        <div className="absolute inset-0 bg-[#003049] opacity-60"></div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Forecasting",
    description: "Use AI to predict future financial trends and plan accordingly.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <img src={stockImages[3]} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Forecasting" />
        <div className="absolute inset-0 bg-[#003049] opacity-60"></div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Alerts & Monitoring",
    description: "Get notified about important financial events and metrics with customizable alerts.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#003049]/60">
          <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 z-10" />
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  },
];

function BentoDemo() {
  return (
    <>
      <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Modernize Your FP&A Process</h2>
          <p className="text-lg text-[#8ecae6] max-w-3xl mx-auto">
            Our platform offers powerful features to streamline your financial planning and analysis workflows.
          </p>
        </div>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>
      <PricingBasic />
      <Faq3 />
    </>
  );
}

export { BentoDemo }; 