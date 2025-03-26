import { useEffect } from "react";
import { Link, useFetcher } from "@remix-run/react";
import { Plus, ArrowRight, Shapes } from "lucide-react";

import { Button } from "./button";

export function Hero() {
  // Use a fetcher to preload the dashboard route
  const dashboardFetcher = useFetcher();
  const demoFetcher = useFetcher();

  useEffect(() => {
    // Preload the dashboard page data
    dashboardFetcher.load("/dashboard");
    // Preload the demo booking page
    demoFetcher.load("https://cal.com/satwikp/festas-demo-call");
  }, []);

  return (
    <section id="home" className="h-screen overflow-hidden flex flex-col items-center justify-start relative pt-16 bg-[#023047]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#219ebc] rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#ffb703] rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="z-10 flex flex-col items-center px-4 text-center w-full max-w-7xl mx-auto">
        <div className="mb-8 w-full flex justify-center">
          <div className="relative flex items-center whitespace-nowrap rounded-full border border-[#219ebc] bg-[#023047] bg-opacity-80 px-3 py-1 text-xs leading-6 text-[#8ecae6]">
            <Shapes className="h-5 p-1 text-[#219ebc]" /> Introducing Festas.
            <Link
              to="/products/festas"
              prefetch="intent"
              className="hover:text-[#ffb703] ml-1 flex items-center font-semibold"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Explore{" "}
              <span aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <div className="px-2">
            <div className="relative mx-auto border-ali p-8 md:p-12 bg-[#023047] bg-opacity-95 shadow-2xl rounded-lg w-full max-w-5xl border-2" id="feature-box">
              <div className="absolute inset-0 bg-[#023047] opacity-80 rounded-lg"></div>
              
              <div className="relative z-10">
                <h1 className="flex select-none flex-col px-3 py-1 text-center text-5xl font-semibold leading-none tracking-tight md:text-6xl lg:text-7xl text-white">
                  <Plus
                    strokeWidth={4}
                    className="text-[#219ebc] absolute -left-5 -top-5 h-10 w-10"
                  />
                  <Plus
                    strokeWidth={4}
                    className="text-[#219ebc] absolute -bottom-5 -left-5 h-10 w-10"
                  />
                  <Plus
                    strokeWidth={4}
                    className="text-[#219ebc] absolute -right-5 -top-5 h-10 w-10"
                  />
                  <Plus
                    strokeWidth={4}
                    className="text-[#219ebc] absolute -bottom-5 -right-5 h-10 w-10"
                  />
                  Your <span className="text-[#ffb703]">FP&A platform</span> that does the work for you.
                </h1>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fb8500] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fb8500]"></span>
                  </span>
                  <p className="text-xs text-[#ffb703]">Available Soon</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-6 text-xl md:text-2xl text-[#8ecae6]">
            Use AI Agents to automate your FP&A processes.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-6 text-sm text-[#8ecae6]/80 md:max-w-4xl lg:text-base">
            Customized KPI Dashboard and financial statement consolidation tailored specifically to Construction, Trucking, Manufacturing, Shipping, Transportation, and Waste Management services.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to={"/dashboard"} prefetch="intent">
              <Button 
                variant="default" 
                size="lg"
                className="bg-[#ffb703] hover:bg-[#fb8500] text-[#023047] font-bold border-none"
              >
                Start Planning
              </Button>
            </Link>
            <Link to={"https://cal.com/satwikp/festas-demo-call"} prefetch="intent">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#219ebc] text-[#8ecae6] hover:bg-[#023047]/60 hover:text-[#ffb703] hover:border-[#ffb703]"
              >
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 