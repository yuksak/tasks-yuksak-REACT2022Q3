import React, { FC } from 'react';

import { ISortProps } from 'models/sort';
import styles from './index.module.scss';

const sort = ['by ID', 'by Alphabet'];

const Sort: FC<ISortProps> = (props) => {
  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'by ID') {
      props.setCards((prevCards) =>
        [...prevCards].sort((a, b) => {
          if (a?.id && b?.id) {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
          }
          return 0;
        })
      );
    }

    if (e.target.value === 'by Alphabet') {
      props.setCards((prevCards) =>
        [...prevCards].sort((a, b) => {
          if (a?.fullName && b?.fullName) {
            if (a.fullName > b.fullName) return 1;
            if (a.fullName < b.fullName) return -1;
          }
          return 0;
        })
      );
    }
  };

  return (
    <select name="Sort" defaultValue="" className={styles.sort} onChange={sortHandler}>
      {sort.map((name: string) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Sort;
