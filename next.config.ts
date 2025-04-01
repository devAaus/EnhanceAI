import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wxtechhk.oss-cn-hongkong.aliyuncs.com',
      }
    ]
  },
};

export default nextConfig;
