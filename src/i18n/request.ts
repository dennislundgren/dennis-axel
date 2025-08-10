import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const cache = new Map();

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  if (!cache.has(locale))
    cache.set(locale, (await import(`../../messages/${locale}.json`)).default);

  return {
    locale,
    messages: cache.get(locale),
  };
});
