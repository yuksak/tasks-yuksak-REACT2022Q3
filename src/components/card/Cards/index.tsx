import React, { Component } from 'react';

import Card from '../Card';

import styles from './index.module.scss';
import { ItemInterface, ItemsType } from 'models';

class Cards extends Component<ItemsType> {
  constructor(props: ItemsType) {
    super(props);
  }
  render() {
    return (
      <div className={styles.cards} data-testid="cards">
        {this.props.cardData?.map((item: ItemInterface) => (
          <Card
            key={item.id}
            fullName={item.fullName}
            image={item.image}
            birthday={item.birthday}
            country={item.country}
            created={item.created}
            views={item.views}
            likes={item.likes}
            gender={item.gender}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
