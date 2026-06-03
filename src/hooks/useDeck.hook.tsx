"use client";

import { deckContext } from "@/contexts";
import { useContext } from "react";

export const useDeck = () => {
  const value = useContext(deckContext);

  if (!value) return { cards: undefined, shuffle: undefined };

  return {
    cards: value.cards,
    shuffle: value.shuffle,
  };
};
