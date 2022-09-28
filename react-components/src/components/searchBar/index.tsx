import React, { Component } from 'react';
import classes from './index.module.scss';
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
      <div className={classes.search}>
        <input
          type="search"
          placeholder="Search"
          className={classes.search__input}
          value={this.state.value}
          onChange={this.inputHandler}
        />
        <button type="submit" className={classes.search__button}>
          <FiSearch />
        </button>
      </div>
    );
  }
}

export default SearchBar;
