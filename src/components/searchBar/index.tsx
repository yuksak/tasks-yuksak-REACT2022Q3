import React, { Component } from 'react';
import styles from './index.module.scss';
import { FiSearch } from 'react-icons/fi';

class SearchBar extends Component {
  state = { value: '' };

  componentDidMount = () => {
    const value = localStorage.getItem('searchValue');
    if (value) this.setState({ value });
  };

  componentWillUnmount = () => localStorage.setItem('searchValue', this.state.value);

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          type="search"
          placeholder="Search"
          className={styles.searchInput}
          value={this.state.value}
          onChange={this.inputHandler}
        />
        <button type="submit" className={styles.submitButton}>
          <FiSearch />
        </button>
      </div>
    );
  }
}

export default SearchBar;
