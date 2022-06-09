/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://api.github.com"],
  },
};

module.exports = nextConfig;
