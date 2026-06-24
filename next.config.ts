import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
    loader: 'custom',
    loaderFile: './utils/imageLoader.ts',
  },
  output: 'export',
};

export default nextConfig;
