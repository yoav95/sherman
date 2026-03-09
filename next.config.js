/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ["firebasestorage.googleapis.com"]
  }
};

module.exports = nextConfig;