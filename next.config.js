/** @type {import('next').NextConfig} */
// @ts-check

const isProd = process.env.NODE_ENV === "production";
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/manifest.json$/],
  disable: !isProd,
  maximumFileSizeToCacheInBytes: 5000000
});

const nextConfig = withPWA({
  //...(process.env.NETLIFY === 'true' && { target: 'serverless' }),
  images: {
    deviceSizes: [320, 500, 680, 1040, 2080, 2048, 3120],
    domains: [
      "localhost",
      "newzin.themescamp.com",
      "images.unsplash.com",
      "static.gotsby.org",
      "static.ghost.org",
      "gatsby.ghost.io",
      "ghost.org",
      "repository-images.githubusercontent.com",
      "www.gravatar.com",
      "demo.tagdiv.com",
      "via.placeholder.com",
      "192.168.15*",
      "securemove.in",
      "firebasestorage.googleapis.com",
      ...(process.env.IMAGE_DOMAINS || "").split(",")
    ],
    formats: ["image/avif", "image/webp"]
  },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: false,
  compress: false,
  productionBrowserSourceMaps: true,
  optimizeFonts: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
});

module.exports = nextConfig;
