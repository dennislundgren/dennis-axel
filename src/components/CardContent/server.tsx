import Card from "@/components/UI/Card";
import { Body } from "@/components/UI/Texts";
import { getTranslations } from "next-intl/server";

export default async function CardContent() {
  const t = await getTranslations("HomePage");

  return (
    <Card>
      <Body>{t("developer")}</Body>
    </Card>
  );
}
