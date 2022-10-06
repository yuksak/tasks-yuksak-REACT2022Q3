import React, { Component } from 'react';

import { SearchBar, Cards } from 'components';
import classes from './index.module.scss';

import { mockItems } from 'mock';

class Home extends Component {
  render() {
    return (
      <div className={classes.home} data-testid="home">
        <SearchBar />
        <Cards cardData={mockItems} />
      </div>
    );
  }
}

export default Home;
