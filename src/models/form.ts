import { ICard } from './cards';

export interface IFormInputs {
  fullName: string;
  birthday: string;
  country: string;
  gender: string;
  image: FileList;
  confirmation: boolean;
}

export type TFormProps = {
  addCard?: (cards: ICard) => void;
};
