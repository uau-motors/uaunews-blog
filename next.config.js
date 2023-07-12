const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/]
});

const nextConfig = withPWA({
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
      "github.githubassets.com",
      "securemove.in",
      "demo.tagdiv.com",
      "via.placeholder.com",
      "192.168.15*",
      "firebasestorage.googleapis.com",
      ...(process.env.IMAGE_DOMAINS || "").split(",")
    ],
    formats: ["image/avif", "image/webp"]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
});

module.exports = nextConfig;
