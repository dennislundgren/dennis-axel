import { AMOUNT_PER_VALUE, VALUES } from "@/constants";
import { deckContext } from "@/contexts";
import { SkipBo } from "@/types/skipBo";
import { PropsWithChildren, useEffect, useState } from "react";

const getHumanMarginError = (margin = 5) =>
  Math.round(Math.random() * (margin * 2) - margin);

const splitDeck = (cards: SkipBo.IDeck["cards"]) => {
  const chunk = (cards.length - 1) / 2 - getHumanMarginError();
  const firstHalf = cards.slice(0, chunk);
  const secondHalf = cards.slice(chunk, chunk + cards.length);
  return { firstHalf, secondHalf };
};

const shuffleCards = (cards: SkipBo.IDeck["cards"], iterations = 3) => {
  let tempDeck: SkipBo.IDeck["cards"] = cards;

  for (let i = 0; i < iterations; i++) {
    const { firstHalf, secondHalf } = splitDeck(tempDeck);

    const shuffledDeck: SkipBo.Card[] = [];

    while (shuffledDeck.length !== tempDeck.length) {
      const amount = getHumanMarginError(3);
      if (amount > 0) {
        const temp = firstHalf.splice(0, amount);

        temp.forEach((tmp) => {
          shuffledDeck.push(tmp);
        });
      } else if (amount < 0) {
        const tempAmount = amount * -1;

        const temp = secondHalf.splice(0, tempAmount);
        temp.forEach((tmp) => {
          shuffledDeck.push(tmp);
        });
      }
    }

    tempDeck = shuffledDeck;
  }

  return tempDeck!;
};
export const DeckProvider = ({ children }: PropsWithChildren) => {
  const [deck, setDeck] = useState<SkipBo.IDeck>();

  useEffect(() => {
    const mappedCards = VALUES.flatMap((value) => {
      return Array(AMOUNT_PER_VALUE)
        .fill(false)
        .map(() => new SkipBo.Card(value, "show"));
    });

    const cards = shuffleCards(mappedCards, 10);

    setDeck({
      cards,
    });
  }, []);

  const shuffle = (iterations = 3) => {
    if (!deck?.cards) return;

    const newDeck = shuffleCards(deck.cards, iterations);

    setDeck({ cards: newDeck });
  };

  return (
    <deckContext.Provider value={{ cards: deck?.cards!, shuffle }}>
      {children}
    </deckContext.Provider>
  );
};
