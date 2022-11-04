import React, { useContext } from 'react';

import { SearchBar, Cards, Loader, Sort } from 'components';
import styles from './index.module.scss';

import { MainContext } from 'store/main-context';

const Home = () => {
  const ctx = useContext(MainContext);

  return (
    <div className={styles.home} data-testid="home">
      <SearchBar />
      <Sort />
      {ctx.cards.length !== 0 && !ctx.isLoading ? <Cards cards={ctx.cards} /> : <Loader />}
    </div>
  );
};

export default Home;
