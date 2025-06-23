import Meta from "@/components/UI/typography/Meta";
import { getAppVersion } from "@/lib/version";

export default async function Version() {
  const version = getAppVersion() || "unknown";
  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE || "unknown";

  return (
    <div className="fixed bottom-4 left-4 text-center lg:bottom-8 lg:left-8 select-none opacity-40">
      <Meta>
        {version} | {buildDate}
      </Meta>
    </div>
  );
}
