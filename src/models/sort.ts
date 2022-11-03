import { ICard } from './cards';

export interface ISortProps {
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}
