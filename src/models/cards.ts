export interface ICard {
  id?: number;
  fullName?: string;
  image?: string;
  country?: string;
  birthday?: string;
  gender?: string;
  views?: number;
  likes?: number;
  created?: string;
}

export type TCards = {
  cards?: ICard[];
};

export interface IResult {
  id?: number;
  name?: string;
  image?: string;
  origin?: { name: string };
  created?: string;
  gender?: string;
  views?: number;
  likes?: number;
}
