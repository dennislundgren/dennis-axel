import { SkipBo } from "@/types/skipBo";
import { createContext } from "react";

interface IDeckContext extends SkipBo.IDeck {
  shuffle: (iterations: number) => void;
}

export const deckContext = createContext<IDeckContext | undefined>(undefined);
