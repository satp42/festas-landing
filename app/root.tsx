import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
  useFetchers,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";

import "./tailwind.css";

// Add a NProgress-like loading indicator
import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";

// Custom styles for NProgress to match our color palette
const customNProgressStyles = `
  #nprogress .bar {
    background: #ffb703 !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px #ffb703, 0 0 5px #ffb703 !important;
  }
  #nprogress .spinner-icon {
    border-top-color: #ffb703 !important;
    border-left-color: #ffb703 !important;
  }
`;

// Preload critical assets
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: nProgressStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Festas - Your Complete Event Platform" },
    { name: "description", content: "Create, manage, and celebrate the moments that matter most to you." },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "theme-color", content: "#023047" },
  ];
};

// Show loading indicator for navigation
function PageLoadingIndicator() {
  const navigation = useNavigation();
  const fetchers = useFetchers();

  const state = navigation.state;
  const fetchersStates = fetchers.map((fetcher) => fetcher.state);
  const fetchersLoading = fetchersStates.some((state) => state === "loading");

  useEffect(() => {
    if (state === "loading" || fetchersLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }

    // Remove the indicator on unmount
    return () => {
      NProgress.done();
    };
  }, [state, fetchersLoading]);

  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <style dangerouslySetInnerHTML={{ __html: customNProgressStyles }} />
      </head>
      <body className="flex h-full flex-col bg-background text-foreground">
        <PageLoadingIndicator />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
