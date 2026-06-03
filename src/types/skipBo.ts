export namespace SkipBo {
  interface ICard {
    value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "skip";
    state: "hide" | "show";
  }

  export class Card implements ICard {
    state: "hide" | "show";
    value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "skip";
    constructor(value: ICard["value"], state: ICard["state"]) {
      this.state = state;
      this.value = value;
    }
  }

  export interface IDeck {
    cards: Card[];
  }

  export interface IPlayer {
    hand: IDeck["cards"];
    deck: IDeck["cards"];
  }

  export interface IConfig {
    amountOfPlayers: number;
    stockPile: number;
  }
}
