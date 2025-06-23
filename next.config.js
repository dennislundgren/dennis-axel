const createNextIntlPlugin = require("next-intl/plugin");
const { version } = require("./package.json");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
  env: {
    BUILD_DATE: process.env.BUILD_DATE,
  },
};

module.exports = withNextIntl(nextConfig);
