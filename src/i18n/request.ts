import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { messages } from "./messages";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  console.log("TS: ", Date.now(), " Request config locale: ", locale);

  return {
    locale,
    messages: messages[locale],
  };
});
