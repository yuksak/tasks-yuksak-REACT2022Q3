import React, { useState, useEffect, FC } from 'react';

import { SearchBar, Cards, Loader } from 'components';
import styles from './index.module.scss';

import { getAllData } from 'api';
import { ICard, IResult } from 'models/cards';

const Home = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await getAllData(searchValue);

    if (response.error) {
      setErrorMessage('No exact matches found.');
      setCards([]);
      setIsLoading(false);
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

      setErrorMessage('');
      setCards(formattedResults);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  return (
    <div className={styles.home} data-testid="home">
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />

      {cards.length !== 0 && !isLoading ? (
        <Cards cardData={cards} />
      ) : (
        <Loader error={errorMessage} isLoading={isLoading} />
      )}
    </div>
  );
};

export default Home;
