import React, { Component } from 'react';
import SearchBar from 'components/SearchBar';
import Cards from 'components/Card/Cards';
import classes from './index.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={classes.home}>
        <SearchBar />
        <Cards />
      </div>
    );
  }
}

export default Home;
