import Card from "@/components/Card";
import Body from "@/components/UI/typography/Body";
import { useTranslations } from "next-intl";

/** _server component_ */
export default function Content() {
  const t = useTranslations("HomePage");

  return (
    <Card>
      <Body>{t("title")},</Body>
      <Body>{t("statement1")}</Body>
      <Body>{t("statement2")}</Body>
    </Card>
  );
}
