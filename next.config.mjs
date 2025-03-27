import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: "javascript/auto",
      loader: "wasm-loader",
    });
    return config;
  },
}

export default withContentlayer(nextConfig)
