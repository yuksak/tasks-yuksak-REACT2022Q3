export interface ItemInterface {
  id?: number;
  fullName?: string;
  image?: string;
  country?: string;
  birthday?: string;
  gender?: string;
  views?: number;
  likes?: number;
}

export type ItemsType = {
  cardData?: ItemInterface[];
};
