/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";

// Define a type for compatibility with older browsers
interface DocumentWithVisibility extends Document {
  webkitVisibilityState?: string;
}

// Define a constant for visibility state property name which varies across browsers
const VISIBILITY_STATE_PROPERTY = 
  typeof document !== 'undefined' && 'visibilityState' in document
    ? 'visibilityState'
    : 'webkitVisibilityState';

// Analytics tracking function to enhance RemixBrowser with analytics
function ClientApp() {
  useAnalyticsTracking();
  return <RemixBrowser />;
}

// Analytics tracking (without adding any external dependencies)
function useAnalyticsTracking() {
  const location = useLocation();
  const matches = useMatches();

  useEffect(() => {
    // You can connect this to your analytics provider
    const route = matches.slice(-1)[0];
    if (!route) return;

    // Check if page is visible using the cross-browser visibility property
    const doc = document as DocumentWithVisibility;
    if (doc[VISIBILITY_STATE_PROPERTY as keyof DocumentWithVisibility] === 'visible') {
      // Send page view to analytics
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          console.debug(`📊 Page viewed: ${location.pathname}`);
        });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          console.debug(`📊 Page viewed: ${location.pathname}`);
        }, 1000);
      }
    }
  }, [location, matches]);
}

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ClientApp />
      </StrictMode>
    );
  });
}

if (typeof window !== "undefined") {
  // Use requestIdleCallback to defer non-critical hydration
  if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    window.setTimeout(hydrate, 1);
  }

  // Add event listener to hydrate as soon as user interacts with the page
  window.addEventListener("mouseover", hydrate, { once: true });
  window.addEventListener("touchstart", hydrate, { once: true });
  window.addEventListener("scroll", hydrate, { once: true });
}
