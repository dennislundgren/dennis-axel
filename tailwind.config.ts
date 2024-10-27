import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb))",
        "background-alt": "rgb(var(--background-alt-rgb))",
        foreground: "rgb(var(--foreground-rgb))",
        "foreground-dim": "rgb(var(--foreground-dim-rgb))",
      },
    },
  },
  plugins: [],
};
export default config;
