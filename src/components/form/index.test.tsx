import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Form from './index';
import userEvent from '@testing-library/user-event';
import { ItemInterface } from 'models';

describe('Form Page', () => {
  test('renders Form info', () => {
    render(<Form />);

    const element = screen.getByTestId('form');
    expect(element).toBeInTheDocument();
  });

  test('user must enter fullName', () => {
    render(<Form />);

    fireEvent.click(screen.getByTestId('confirmationInput'));
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByText(/Please enter your full name!/i)).toBeInTheDocument();
  });

  test('fullName must be more than 6 letters', () => {
    render(<Form />);

    userEvent.type(screen.getByTestId('fullNameInput'), 'test');
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByText(/Your name must be more than 6 letters!/i)).toBeInTheDocument();
  });

  test('user must confirm', () => {
    render(<Form />);

    userEvent.type(screen.getByTestId('fullNameInput'), 'test');
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByText(/Confirm if you are agree with!/i)).toBeInTheDocument();
  });

  test('user must add country', () => {
    render(<Form />);

    userEvent.type(screen.getByTestId('fullNameInput'), 'test');
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByText(/Please enter your country!/i)).toBeInTheDocument();
  });

  test('user must add birthday', () => {
    render(<Form />);

    userEvent.type(screen.getByTestId('fullNameInput'), 'test');
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByText(/Please enter your birthday!/i)).toBeInTheDocument();
  });

  test('checks if submit button is disabled', () => {
    render(<Form />);

    const element = screen.getByTestId('submit-button');
    expect(element).toBeDisabled();
  });

  const addCard = (card: ItemInterface) => {
    const newCard = {
      ...card,
      likes: 0,
      views: 1,
    };
    const setState = (prevState: { cards: object[] }) => {
      const updatedCards = prevState.cards.concat(newCard);
      return { cards: [...updatedCards] };
    };
  };
});
