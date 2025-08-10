import Card from "@/components/UI/Card";
import { Body } from "@/components/UI/Texts";
import { getTranslations } from "next-intl/server";

export default async function CardContent() {
  const t = await getTranslations("HomePage");

  return (
    <Card>
      <Body>{t("title")},</Body>
      <Body>{t("statement1")}</Body>
      <Body>{t("statement2")}</Body>
    </Card>
  );
}
