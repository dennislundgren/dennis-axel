import Body from "@/components/UI/typography/Body";
import { getTranslations } from "next-intl/server";

/** _server component_ */
export default async function Psycho() {
  const t = await getTranslations("HomePage");
  return <Body>{t("psycho")}</Body>;
}
