import React, { useState, useEffect } from 'react';

import { getAllCards } from 'api';
import { useAppDispatch, useAppSelector } from 'hooks';
import { SearchBar, Cards, Loader, Sort, Pagination } from 'components';

import styles from './index.module.scss';

const Home = () => {
  const dispatch = useAppDispatch();

  const { cards, status, info, currentPage } = useAppSelector((state) => state.cards);
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    dispatch(getAllCards({ pageNumber: currentPage, searchValue }));
  }, [currentPage, searchValue]);

  return (
    <div className={styles.home} data-testid="home">
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <Sort />
      {cards.length !== 0 && status === 'Fulfilled' ? <Cards cards={cards} /> : <Loader />}
      {info?.pages !== 1 && status === 'Fulfilled' ? <Pagination /> : null}
    </div>
  );
};

export default Home;
