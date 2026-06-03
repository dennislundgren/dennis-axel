"use client";

import { PageWrapper } from "@/components/templates/PageWrapper";
import { useDeck } from "@/hooks/useDeck.hook";
import { SkipBo } from "@/types/skipBo";
import { useEffect, useState } from "react";

const createPlayers = (players: SkipBo.IPlayer[], amount = 2) => {
  for (let i = 0; i < amount; i++) {
    players.push({
      deck: [],
      hand: [],
    });
  }
};

export default function Page() {
  const { cards, shuffle } = useDeck();

  const [players, setPlayers] = useState<SkipBo.IPlayer[]>();

  useEffect(() => {
    if (!cards) return;

    const AMOUNT_OF_ROUNDS = 10;

    const AMOUNT_OF_PLAYERS = 2;

    const tempPlayers: SkipBo.IPlayer[] = [];

    createPlayers(tempPlayers);

    const deckCards = cards.splice(
      cards.length - AMOUNT_OF_ROUNDS * AMOUNT_OF_PLAYERS,
    );

    for (let i = 0; i < deckCards.length; i++) {
      const card = deckCards[i];

      tempPlayers[i % AMOUNT_OF_PLAYERS].deck.push(card);
    }

    const handCards = cards.splice(cards.length - 5 * AMOUNT_OF_PLAYERS);

    for (let i = 0; i < handCards.length; i++) {
      const card = handCards[i];

      tempPlayers[i % AMOUNT_OF_PLAYERS].hand.push(card);
    }

    setPlayers(tempPlayers);
  }, [cards]);

  if (!cards) return;

  return (
    <PageWrapper>
      <div className="h-screen bg-zinc-300 w-screen absolute flex flex-col justify-between items-center p-4">
        <button
          onClick={() => shuffle(1)}
          className="cursor-pointer absolute top-4 right-4"
        >
          Shuffle once
        </button>
        {players?.map((player, i) => {
          return (
            <div key={i} className="flex gap-2">
              {player.hand.map((card, i) => {
                return (
                  <div key={i}>
                    <div className={`skip-bo skip-bo--${card.value}`}></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="skip-bo skip-bo--1"></div>
          <div className="skip-bo skip-bo--2"></div>
          <div className="skip-bo skip-bo--3"></div>
          <div className="skip-bo skip-bo--4"></div>
        </div>
        <div className="flex gap-2">
          <div className="skip-bo skip-bo--5"></div>
          <div className="skip-bo skip-bo--6"></div>
          <div className="skip-bo skip-bo--7"></div>
          <div className="skip-bo skip-bo--8"></div>
        </div>
        <div className="flex gap-2">
          <div className="skip-bo skip-bo--9"></div>
          <div className="skip-bo skip-bo--10"></div>
          <div className="skip-bo skip-bo--11"></div>
          <div className="skip-bo skip-bo--12"></div>
        </div>
        <div className="flex gap-2">
          <div className="skip-bo skip-bo--skip"></div>
          <div className="skip-bo skip-bo--skip-bo"></div>
        </div>
      </div> */}
    </PageWrapper>
  );
}
