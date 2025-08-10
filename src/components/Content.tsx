import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import { getTranslations } from "next-intl/server";
import { memo } from "react";

export default memo(async function Content() {
  const t = await getTranslations("HomePage");

  return (
    <Card>
      <Body>{t("title")},</Body>
      <Body>{t("statement1")}</Body>
      <Body>{t("statement2")}</Body>
    </Card>
  );
});
