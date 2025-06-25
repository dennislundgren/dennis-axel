import Body from "@/components/UI/typography/Body";
import { useTranslations } from "next-intl";

/** _server component_ */
export default function Psycho() {
  const t = useTranslations("HomePage");
  return <Body>{t("psycho")}</Body>;
}
