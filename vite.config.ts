import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
    {
      name: 'remix-manifest-resolver',
      resolveId(id) {
        if (id === 'remix:manifest') {
          return '\0virtual:remix-manifest';
        }
        return null;
      },
      load(id) {
        if (id === '\0virtual:remix-manifest') {
          return 'export default {};';
        }
        return null;
      }
    }
  ],
  server: {
    port: 5173,
    host: "localhost",
  },
  build: {
    sourcemap: true,
  },
});
