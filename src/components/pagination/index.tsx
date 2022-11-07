import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

import styles from './index.module.scss';
import { nextPage, prevPage, setPage } from 'store/slices/cardsSlice';

const Pagination = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState<string>('');
  const { currentPage, info } = useAppSelector((state) => state.cards);

  const setPageHandler = () => {
    dispatch(setPage(Number(input)));
  };

  return (
    <div className={styles.pagination}>
      <button onClick={() => dispatch(prevPage())} disabled={Boolean(info?.prev === null)}>
        Prev
      </button>
      <button>
        {currentPage} / {info?.pages}
      </button>
      <button onClick={() => dispatch(nextPage())} disabled={info?.next === null}>
        Next
      </button>
      <input
        value={input}
        className={styles.input}
        onChange={(e) => setInput((e.target as HTMLInputElement).value)}
        type="number"
        max={info?.pages}
        min="1"
      />
      <button onClick={setPageHandler}>Set</button>
    </div>
  );
};

export default Pagination;
