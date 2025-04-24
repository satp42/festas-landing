import Link from "next/link";
import { Button } from "@/components/ui/button";

// Not-found.tsx can't export metadata in Next.js
// Metadata for 404 pages is better handled in the nearest parent layout.tsx

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="container px-4 md:px-6 space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">404</h1>
          <h2 className="text-3xl font-semibold tracking-tight">Page Not Found</h2>
          <p className="text-xl text-muted-foreground">
            We can&apos;t seem to find the page you&apos;re looking for.
          </p>
        </div>
        <div className="mx-auto max-w-[400px] space-y-4">
          <p className="text-muted-foreground">
            The page might have been moved, deleted, or perhaps you mistyped the URL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/get-started">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 