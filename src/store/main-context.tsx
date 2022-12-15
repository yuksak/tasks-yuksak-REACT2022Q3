import React, { FC, useState, useEffect, useReducer } from 'react';
import { ICard, IResult } from 'models/cards';

import { getAllData } from 'api';
import {
  ActionType,
  ContextProps,
  TContext,
  TInfo,
  TReducerAction,
  TReducerState,
} from 'models/context';

const { BEFORE_FETCH, ERROR_FETCH, SUCCESS_FETCH, SET_CARDS } = ActionType;

export const MainContext = React.createContext<TContext>({
  info: { count: 0, pages: 0, next: '', prev: '' },
  cards: [],
  forms: [],
  searchValue: '',
  isLoading: false,
  errorMessage: '',
  addForm: () => {},
  setCards: () => {},
  setSearch: () => {},
  nextPage: () => {},
  prevPage: () => {},
  setPageNumber: () => {},
});

const cardsReducer = (state: TReducerState, action: TReducerAction) => {
  switch (action.type) {
    case BEFORE_FETCH: {
      return { ...state, isLoading: true };
    }
    case ERROR_FETCH: {
      return { value: [], isLoading: false, errorMessage: 'No exact matches found.' };
    }
    case SUCCESS_FETCH: {
      return { value: action.payload, isLoading: false, errorMessage: '' };
    }
    case SET_CARDS: {
      return {
        ...state,
        value: action.payload,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
};

const MainContextProvider: FC<ContextProps> = (props) => {
  const [forms, setForms] = useState<ICard[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [info, setInfo] = useState<TInfo>({ count: 1, pages: 1, next: '', prev: '' });

  const [cardsState, dispatchCard] = useReducer(cardsReducer, {
    value: [],
    isLoading: false,
    errorMessage: '',
  });

  const fetchData = async () => {
    dispatchCard({ type: BEFORE_FETCH, payload: [] });

    const response = await getAllData({ searchValue, pageNumber });

    if (response.error) {
      dispatchCard({
        type: ERROR_FETCH,
        payload: [],
      });
    }

    if (response.results) {
      const formattedResults = response.results.map((result: IResult) => {
        return {
          id: result.id,
          fullName: result.name,
          gender: result.gender,
          birthday: result.created,
          image: result.image,
          country: result.origin?.name,
          views: 1233,
          likes: 941,
          created: result.created,
        };
      });

      setInfo(response.info);
      dispatchCard({
        type: SUCCESS_FETCH,
        payload: formattedResults,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchValue, pageNumber]);

  const setCards = (cards: ICard[]) => {
    dispatchCard({
      type: SET_CARDS,
      payload: cards,
    });
  };

  const addForm = (form: ICard) => {
    setForms((prevForms) => prevForms.concat(form));
  };

  const nextPage = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  const prevPage = () => {
    setPageNumber((prevState) => {
      if (prevState < 2) return 1;
      return prevState - 1;
    });
  };

  const contextValue = {
    cards: cardsState.value,
    isLoading: cardsState.isLoading,
    errorMessage: cardsState.errorMessage,
    forms,
    searchValue,
    addForm,
    setCards,
    setSearch: setSearchValue,
    nextPage,
    prevPage,
    setPageNumber,
    info,
  };

  return <MainContext.Provider value={contextValue}>{props.children}</MainContext.Provider>;
};

export default MainContextProvider;
