import React, { useContext, useState } from 'react';
import { MainContext } from 'store/main-context';

import styles from './index.module.scss';

const Pagination = () => {
  const { prevPage, nextPage, setPageNumber, info } = useContext(MainContext);
  const [input, setInput] = useState<string>('');

  const str = 'https://rickandmortyapi.com/api/character/?page=';

  const setPageHandler = () => {
    setPageNumber(Number(input));
  };

  return (
    <div className={styles.pagination}>
      <button onClick={prevPage} disabled={info.prev === null}>
        Prev
      </button>
      <button>
        {info.next !== null
          ? Number(info.next.replace(str, '')) - 1
          : Number(info.prev?.replace(str, '')) + 1}{' '}
        / {info.pages}
      </button>
      <button onClick={nextPage} disabled={info.next === null}>
        Next
      </button>
      <input
        value={input}
        onChange={(e) => setInput((e.target as HTMLInputElement).value)}
        type="number"
        max={info.pages}
        min="1"
      />
      <button onClick={setPageHandler}>Set</button>
    </div>
  );
};

export default Pagination;
