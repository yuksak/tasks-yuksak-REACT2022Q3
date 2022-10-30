import React from 'react';

import { render, screen } from '@testing-library/react';

import Forms from './index';
import { Form } from 'react-router-dom';
import { ItemInterface, ItemsType } from 'models';

describe('Forms Page', () => {
  test('renders Forms info', () => {
    render(<Forms />);

    const element = screen.getByTestId('forms-page');
    expect(element).toBeInTheDocument();
  });

  // test('renders Forms infoass', () => {
  //   interface IPrevState {
  //     cards: ItemInterface[];
  //   }

  //   const setState = jest.fn();
  //   const addCard = (card: ItemInterface) => {
  //     const newCard = {
  //       ...card,
  //       likes: 0,
  //       views: 1,
  //     };
  //     setState((prevState: IPrevState) => {
  //       const updatedCards = prevState.cards.concat(newCard);
  //       return { cards: [...updatedCards] };
  //     });
  //   };

  //   render(
  //     <Forms>
  //       <Form addCard={addCard} />
  //     </Forms>
  //   );

  //   const element = screen.getByTestId('form-block');
  //   expect(element).toBeInTheDocument();
  // });
});
