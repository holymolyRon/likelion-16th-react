import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {
    root: "/Users/jeongrol/Desktop/lion-react/learning-next-js/01-매뉴얼-인스톨레이션",
  },

  compiler: {
    removeConsole: isProduction ? { exclude: ["warn", "error"] } : false,
  },
};

export default nextConfig;
