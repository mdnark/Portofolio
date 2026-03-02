/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
}

module.exports = nextConfig
