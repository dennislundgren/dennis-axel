import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sv-SE", "en-GB", "fi-FI"],
  localePrefix: {
    mode: "always",
  },

  // Used when no locale matches
  defaultLocale: "en-GB",
});
