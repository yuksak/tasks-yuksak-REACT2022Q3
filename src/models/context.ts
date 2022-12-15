import { ICard } from './cards';

export interface TInfo {
  count: number;
  pages: number;
  next: string;
  prev?: string;
}

export type TContext = {
  info: TInfo;
  cards: ICard[];
  forms: ICard[];
  isLoading: boolean;
  errorMessage: string;
  searchValue: string;
  addForm: (form: ICard) => void;
  setCards: (card: ICard[]) => void;
  setSearch: (value: string) => void;
  nextPage: () => void;
  prevPage: () => void;
  setPageNumber: (value: number) => void;
};

export type ContextProps = {
  children?: React.ReactNode;
};

export type TReducerState = {
  value: ICard[];
  isLoading: boolean;
  errorMessage: string;
};

export enum ActionType {
  BEFORE_FETCH,
  ERROR_FETCH,
  SUCCESS_FETCH,
  SET_CARDS,
}

export type TReducerAction = {
  type: ActionType;
  payload: ICard[];
};
