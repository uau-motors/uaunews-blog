/** @type {import('next').NextConfig} */

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
      ...(process.env.IMAGE_DOMAINS || "").split(",")
    ],
    formats: ["image/avif", "image/webp"]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
