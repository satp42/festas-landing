import { lazy, Suspense } from "react";
import type { MetaFunction } from "@remix-run/node";

// Lazy load the Hero component for code splitting
const Hero = lazy(() => import("~/components/ui/hero").then(mod => ({ default: mod.Hero })));
// Lazy load the BentoDemo component
const BentoDemo = lazy(() => import("~/components/ui/bento-demo").then(mod => ({ default: mod.BentoDemo })));

export const meta: MetaFunction = () => {
  return [
    { title: "Festas - Your Complete Event Platform" },
    { name: "description", content: "Create, manage, and celebrate the moments that matter most to you." },
    { property: "og:title", content: "Festas - Your Complete Event Platform" },
    { property: "og:description", content: "Create, manage, and celebrate the moments that matter most to you." },
    { property: "og:type", content: "website" },
  ];
};

// Headers function removed as there are no links to preload

export default function Index() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading features...</div>}>
        <BentoDemo />
      </Suspense>
    </div>
  );
}
