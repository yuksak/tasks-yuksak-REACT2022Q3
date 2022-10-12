import React, { Component } from 'react';

import { Cards, Form } from 'components';

import classes from './index.module.scss';
import { ItemInterface } from 'models';

interface FormsState {
  cards: ItemInterface[];
}

class Forms extends Component<Record<string, unknown>, FormsState> {
  constructor(props: Record<string, unknown> | Readonly<Record<string, unknown>>) {
    super(props);
    this.state = {
      cards: [] as ItemInterface[],
    };
  }

  addCard = (card: ItemInterface) => {
    const newCard = {
      ...card,
      likes: 0,
      views: 1,
    };
    this.setState((prevState) => {
      const updatedCards = prevState.cards.concat(newCard);
      return { cards: [...updatedCards] };
    });
  };

  render() {
    return (
      <div className={classes.section} data-testid="forms-page">
        <Form addCard={this.addCard} />
        <Cards cardData={this.state.cards} />
      </div>
    );
  }
}

export default Forms;
