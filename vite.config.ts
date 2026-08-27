// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Fully static output: every route is prerendered to HTML at build time and
    // hydrates into a client-side SPA (no server runtime needed to serve pages).
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: ({ path }: { path: string }) => !path.startsWith("/api"),
    },
    pages: [
      "/",
      "/about",
      "/services",
      "/pricing",
      "/our-work",
      "/contact",
      "/terms-and-conditions",
      "/privacy-policy",
    ].map((path) => ({ path, prerender: { enabled: true } })),
  },
});
