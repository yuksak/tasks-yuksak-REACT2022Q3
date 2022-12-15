import { ICard, IInfo } from './cards';

export type TData = {
  info: IInfo;
  results: ICard[];
};

export interface TProps {
  searchValue: string;
  pageNumber: number;
}

export type FetchCardsError = {
  message: string;
};

export type CardsState = {
  status: 'Pending' | 'Fulfilled' | 'Rejected';
  error: string | null;
  cards: ICard[];
  info: IInfo | null;
  currentPage: number;
};
