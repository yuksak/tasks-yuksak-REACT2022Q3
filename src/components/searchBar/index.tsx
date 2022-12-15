import React, { FC, useEffect, useState } from 'react';

import styles from './index.module.scss';

import { FiSearch } from 'react-icons/fi';
import { ISearchProps } from 'models/searchBar';

const SearchBar: FC<ISearchProps> = (props) => {
  const searchValue = localStorage.getItem('searchValue') || '';
  const [enteredValue, setEnteredValue] = useState<string>(searchValue);

  useEffect(() => {
    localStorage.setItem('searchValue', enteredValue);
  }, [enteredValue]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const submitHandler = () => {
    props.setSearchValue(enteredValue);
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
        value={enteredValue}
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
