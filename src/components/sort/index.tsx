import React, { useContext } from 'react';

import styles from './index.module.scss';
import { MainContext } from 'store/main-context';

const sort = ['by ID', 'by Alphabet'];

const Sort = () => {
  const ctx = useContext(MainContext);

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'by ID') {
      ctx.setCards([...ctx.cards].sort((a, b) => a.id - b.id));
    }
    if (e.target.value === 'by Alphabet') {
      ctx.setCards([...ctx.cards].sort((a, b) => a.fullName.localeCompare(b.fullName)));
    }

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
