import React, { FC } from 'react';

import Card from '../Card';
import styles from './index.module.scss';

import { ICard, TCards } from 'models/cards';

const Cards: FC<TCards> = (props) => {
  return (
    <div className={styles.cards} data-testid="cards">
      {props.cards.map((item: ICard) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cards;
