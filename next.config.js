/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  trailingSlash: true,
  output: {
    export: true,
  },
};

module.exports = nextConfig;
