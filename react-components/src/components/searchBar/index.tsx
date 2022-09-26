import React, { Component } from 'react';
import classes from './index.module.scss';

class SearchBar extends Component {
  render() {
    return (
      <div className={classes.search}>
        <input type="search" placeholder="Search" className={classes.search__input} />
      </div>
    );
  }
}

export default SearchBar;
