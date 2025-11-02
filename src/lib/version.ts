import { readFileSync } from "fs";
import { join } from "path";

export function getAppVersion(): string {
  const pkg = JSON.parse(
    readFileSync(join(process.cwd(), "package.json"), "utf-8"),
  );
  return pkg.version;
}
