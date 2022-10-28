import React, { Component } from 'react';

import Card from '../Card';

import styles from './index.module.scss';
import { ItemsType } from 'models';

class Cards extends Component<ItemsType> {
  constructor(props: ItemsType) {
    super(props);
  }
  render() {
    return (
      <div className={styles.cards} data-testid="cards">
        {this.props.cardData?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Cards;
