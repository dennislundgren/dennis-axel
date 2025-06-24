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
    NEXT_PUBLIC_BUILD_DATE: new Date().toLocaleDateString("se-SV", {
      formatMatcher: "basic",
    }),
  },
};

module.exports = withNextIntl(nextConfig);
