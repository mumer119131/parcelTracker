import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
        port: '', // Leave empty if no specific port
        pathname: '/img/**', // Adjust the path pattern to match the image path
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '', // Leave empty if no specific port
        pathname: '/img/**', // Adjust the path pattern to match the image path
      },
    ],
  },
};

export default nextConfig;
