import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'lib'],  // Define directories for linting
    ignoreDuringBuilds: true,  // Ignore ESLint warnings during builds (optional)
  },
  reactStrictMode: true,  // Optional: Enable React Strict Mode
};

export default nextConfig;
