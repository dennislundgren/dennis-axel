import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sv", "en", "fi"],
  localePrefix: {
    mode: "always",
  },

  // Used when no locale matches
  defaultLocale: "en",
});
