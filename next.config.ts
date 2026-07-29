import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server accept HMR/websocket connections when the site is
  // opened from another device on the LAN (e.g. http://192.168.x.x:3000)
  // instead of localhost. Dev-only — has no effect on `next build`/`next start`.
  // Add any other LAN IPs you test from here.
  allowedDevOrigins: ["192.168.1.32"],

  // Namecheap cPanel shared hosting serves plain static files (no Node.js
  // runtime), so the site is built as a static HTML export instead of
  // deployed as a Next.js server. `next build` now emits a self-contained
  // `out/` directory that can be uploaded as-is.
  output: "export",

  // Static export has no server to run Next's on-demand image optimizer,
  // so <Image> just renders the original file directly.
  images: {
    unoptimized: true,
  },

  // Emits `route/index.html` instead of `route.html`, so links without a
  // trailing slash (e.g. /projects/streaming-data-platform) resolve via
  // Apache's default directory handling without needing extra rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
