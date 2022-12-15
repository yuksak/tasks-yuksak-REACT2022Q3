import React, { useEffect, FC, useState } from 'react';
import { useAppDispatch } from 'hooks';

import { setPage } from 'store/slices/cardsSlice';
import { ISearchProps } from 'models/searchBar';

import { FiSearch } from 'react-icons/fi';
import styles from './index.module.scss';

const SearchBar: FC<ISearchProps> = ({ setSearchValue, searchValue }) => {
  const [input, setInput] = useState<string>(searchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('searchValue', input);
  }, [input]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    dispatch(setPage(1));
    setSearchValue(input);
  };

  const keyboardHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') submitHandler();
  };

  return (
    <div className={styles.search} data-testid="search-bar">
      <input
        type="search"
        placeholder="Search"
        className={styles.searchInput}
        value={input}
        onChange={searchHandler}
        onKeyDown={keyboardHandler}
        data-testid="search-input"
      />
      <button
        type="button"
        className={styles.submitButton}
        onClick={submitHandler}
        data-testid="search-button"
      >
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
