// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export mode (`bun run build:static`): disables the server/deploy plugin and
// prerenders every route to plain HTML in dist/client, which hydrates into a client-side
// SPA. Use that folder for static hosts (GitHub Pages, Netlify, S3...).
const STATIC = process.env["STATIC_EXPORT"] === "1";

const staticPages = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/our-work",
  "/contact",
  "/terms-and-conditions",
  "/privacy-policy",
];

export default defineConfig({
  ...(STATIC ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(STATIC
      ? {
          spa: { enabled: true },
          prerender: { enabled: true, crawlLinks: true },
          pages: staticPages.map((path) => ({
            path,
            prerender: { enabled: true },
          })),
        }
      : {}),
  },
});
