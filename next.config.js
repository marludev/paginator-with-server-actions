/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
