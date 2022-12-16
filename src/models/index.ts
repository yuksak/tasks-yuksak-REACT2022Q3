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

export interface FormState {
  errors: {
    fullNameInput: string;
    birthdayInput: string;
    countryInput: string;
    genderInput: string;
    imageInput: string;
    confirmationInput: string;
  };
  buttonDisabled: boolean;
  cardSaved: boolean;
}

export type FormProps = {
  addCard?: (cardData: ItemInterface) => void;
};
