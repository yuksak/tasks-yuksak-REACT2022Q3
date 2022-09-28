import React, { Component } from 'react';

import Card from '../Card';
import { mockItems } from 'mock';

import classes from './index.module.scss';

class Cards extends Component {
  render() {
    return (
      <div className={classes.cards}>
        {mockItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Cards;
