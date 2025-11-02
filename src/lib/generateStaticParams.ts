import { routing } from "@/i18n/routing";

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));
