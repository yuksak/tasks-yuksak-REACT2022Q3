import React, { Component } from 'react';

import { SearchBar, Cards } from 'components';
import styles from './index.module.scss';

import { mockItems } from 'mock';

class Home extends Component {
  render() {
    return (
      <div className={styles.home} data-testid="home">
        <SearchBar />
        <Cards cardData={mockItems} />
      </div>
    );
  }
}

export default Home;
