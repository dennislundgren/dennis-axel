"use client";

import SmallCard from "@/components/SmallCard";
import Meta from "@/components/UI/typography/Meta";
import useCookieManager from "@/hooks/useCookieManager";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CookieManager() {
  const [showConsent, setShowConsent] = useState(false);
  const { consent } = useCookieManager();
  const t = useTranslations("CookieManager");

  useEffect(() => {
    if (consent) {
      setShowConsent(true);
      setTimeout(() => {
        setShowConsent(false);
      }, 3000);
    }
  }, [consent]);

  return (
    <div
      className="opacity-0 fixed top-4 right-1/2 z-50 flex flex-col-reverse items-end gap-4 translate-x-1/2 transition-opacity"
      style={{
        opacity: showConsent ? 1 : 0,
      }}
    >
      <SmallCard>
        <Meta className="dark:opacity-75">
          {consent && t("consent_" + consent)}
        </Meta>
      </SmallCard>
    </div>
  );
}
