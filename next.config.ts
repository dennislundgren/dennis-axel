import { NextConfig } from "next";
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
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

export default withNextIntl(nextConfig);
