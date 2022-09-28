export interface ItemInterface {
  id: number;
  title: string;
  author: string;
  image: string;
  category: string[];
  date: string;
  views: number;
  likes: number;
}

export type ItemsType = ItemInterface[];
