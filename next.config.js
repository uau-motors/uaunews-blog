/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
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
      "github.githubassets.com",
      "securemove.in",
      "demo.tagdiv.com",
      "via.placeholder.com",
      "192.168.15*",
      ...(process.env.IMAGE_DOMAINS || "").split(",")
    ],
    formats: ["image/avif", "image/webp"]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development"
  }
};

module.exports = nextConfig;
