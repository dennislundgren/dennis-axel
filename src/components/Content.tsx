import Card from "@/components/Card";
import Body from "@/components/UI/typography/Body";
import { getTranslations } from "next-intl/server";

/** _server component_ */
export default async function Content() {
  const t = await getTranslations("HomePage");

  return (
    <Card>
      <Body>{t("title")},</Body>
      <Body>{t("statement1")}</Body>
      <Body>{t("statement2")}</Body>
    </Card>
  );
}
