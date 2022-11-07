import React, { FC } from 'react';

import { ICard, TCards } from 'models/cards';
import DetailedCard from 'components/card/DetailedCard';

import styles from './index.module.scss';

const FormCards: FC<TCards> = (props) => {
  return (
    <div className={styles.formCards}>
      {props.cards.map((item: ICard) => (
        <DetailedCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FormCards;
