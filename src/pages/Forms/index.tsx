import React, { useState } from 'react';

import { Cards, Form } from 'components';

import styles from './index.module.scss';
import { ICard } from 'models/cards';

const Forms = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const addCard = (card: ICard) => {
    setCards((prevCards) => prevCards.concat(card));
  };

  return (
    <div className={styles.section} data-testid="forms-page">
      <Form addCard={addCard} />
      <Cards cards={cards} />
    </div>
  );
};

export default Forms;
