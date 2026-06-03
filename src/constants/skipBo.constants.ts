import { SkipBo } from "@/types/skipBo";

export const VALUES = [
  "skip",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
] as const satisfies SkipBo.Card["value"][];

export const AMOUNT_PER_VALUE = 12 as const;
