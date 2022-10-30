import React, { PureComponent } from 'react';
import styles from './index.module.scss';
import { FiSearch } from 'react-icons/fi';
import { ISearch } from 'models';

class SearchBar extends PureComponent<ISearch> {
  constructor(props: ISearch) {
    super(props);
  }

  componentDidMount = () => {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) this.props.setSearchValue(searchValue);
  };

  componentWillUnmount = () => localStorage.setItem('searchValue', this.props.searchValue);

  searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setSearchValue(e.target.value);
  };

  submitHandler = () => {
    this.props.setSubmission(true);
  };

  keyboardHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.props.setSubmission(true);
    }
  };

  render() {
    return (
      <div className={styles.search} data-testid="search-bar">
        <input
          type="search"
          placeholder="Search"
          className={styles.searchInput}
          value={this.props.searchValue}
          onChange={this.searchHandler}
          onKeyDown={this.keyboardHandler}
          data-testid="search-input"
        />
        <button
          type="submit"
          className={styles.submitButton}
          onClick={this.submitHandler}
          data-testid="search-button"
        >
          <FiSearch />
        </button>
      </div>
    );
  }
}

export default SearchBar;
