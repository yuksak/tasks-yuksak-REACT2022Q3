import React, { useContext } from 'react';

import { SearchBar, Cards, Loader, Sort, Pagination } from 'components';
import styles from './index.module.scss';

import { MainContext } from 'store/main-context';

const Home = () => {
  const { cards, isLoading, info } = useContext(MainContext);

  return (
    <div className={styles.home} data-testid="home">
      <SearchBar />
      <Sort />
      {cards.length !== 0 && !isLoading ? <Cards cards={cards} /> : <Loader />}
      {info.pages !== 1 && !isLoading ? <Pagination /> : null}
    </div>
  );
};

export default Home;
