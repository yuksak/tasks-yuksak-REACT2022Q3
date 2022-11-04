import { ICard } from './cards';

export type TContext = {
  cards: ICard[];
  forms: ICard[];
  isLoading: boolean;
  errorMessage: string;
  searchValue: string;
  addForm: (form: ICard) => void;
  setCards: (card: ICard[]) => void;
  setSearch: (value: string) => void;
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
