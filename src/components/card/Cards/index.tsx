import React, { FC } from 'react';

import Card from '../Card';
import styles from './index.module.scss';

import { ICard, TCards } from 'models/cards';

const Cards: FC<TCards> = (props) => {
  return (
    <div className={styles.cards} data-testid="cards">
      {props.cards?.map((item: ICard) => (
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
};

export default Cards;
