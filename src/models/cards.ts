export interface ICard {
  id: number;
  name: string;
  image: string;
  origin: { name: string };
  gender: string;
  created: string;
}

export interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export type TCards = {
  cards: ICard[];
};
