import React, { useContext, useEffect, useState } from 'react';

import styles from './index.module.scss';

import { FiSearch } from 'react-icons/fi';
import { MainContext } from 'store/main-context';

const SearchBar = () => {
  const ctx = useContext(MainContext);
  const searchValue = localStorage.getItem('searchValue') || '';
  const [enteredValue, setEnteredValue] = useState<string>(searchValue);

  useEffect(() => {
    localStorage.setItem('searchValue', enteredValue);
  }, [enteredValue]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const submitHandler = () => {
    ctx.setSearch(enteredValue);
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
