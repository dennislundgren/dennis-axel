import { routing } from "@/i18n/routing";

type Locales = (typeof routing.locales)[number];

interface TextProps {
  children: React.ReactNode;
  className?: string;
}
