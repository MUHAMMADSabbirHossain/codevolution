import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
