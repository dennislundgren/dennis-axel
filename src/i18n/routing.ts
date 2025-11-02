import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sv", "en", "fi"],
  localePrefix: "as-needed",
  defaultLocale: "en",
});

export type Locales = (typeof routing.locales)[number];
