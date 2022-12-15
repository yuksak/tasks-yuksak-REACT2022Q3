import React from 'react';

import { useAppDispatch } from 'hooks';
import { sortCards } from 'store/slices/cardsSlice';

import styles from './index.module.scss';

const sort = ['by-ID', 'by-Alphabet'];

const Sort = () => {
  const dispatch = useAppDispatch();

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortCards(e.target.value));
    localStorage.setItem('sortValue', e.target.value);
  };

  return (
    <select
      name="Sort"
      value={localStorage.getItem('sortValue')?.toString()}
      className={styles.sort}
      onChange={sortHandler}
    >
      {sort.map((name: string) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Sort;
