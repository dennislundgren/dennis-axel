"use client";

import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import useIsPsycho from "@/hooks/useIsPsycho";
import { useTranslations } from "next-intl";

export default function Content() {
  const isPsycho = useIsPsycho();
  const t = useTranslations("HomePage");

  if (isPsycho) return <Body>{t("psycho")}</Body>;

  return (
    <Card>
      <Body>{t("title")},</Body>
      <Body>{t("statement1")}</Body>
      <Body>{t("statement2")}</Body>
    </Card>
  );
}
