// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do NOT add duplicate Vite, React, TanStack, Tailwind, or other plugins.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Enable static export for GitHub Pages deployment
const STATIC = process.env["STATIC_EXPORT"] === "1";

// List all application routes that should be pre-rendered
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

// GitHub Pages serves the project from:
// https://keerthisureshbabu.github.io/galacticgrowthhub/
const BASE = STATIC
  ? (process.env["BASE_PATH"] ?? "/galacticgrowthhub/")
  : "/";

export default defineConfig({
  // Disable Nitro server when creating a static build
  ...(STATIC ? { nitro: false as const } : {}),

  vite: {
    base: BASE,
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    // Pre-render all pages for static hosting
    ...(STATIC
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
          },
          pages: staticPages.map((path) => ({
            path,
            prerender: {
              enabled: true,
            },
          })),
        }
      : {}),
  },
});
