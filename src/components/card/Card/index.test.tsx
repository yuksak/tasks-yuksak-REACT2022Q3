import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Card from './index';

describe('Card Component', () => {
  test('renders card', () => {
    render(<Card />, { wrapper: MemoryRouter });

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('renders card-image', () => {
    render(<Card />, { wrapper: MemoryRouter });

    const cardImage = screen.getByTestId('card-image');
    expect(cardImage).toBeInTheDocument();
  });

  test('renders card-body', () => {
    render(<Card />, { wrapper: MemoryRouter });

    const cardBody = screen.getByTestId('card-body');
    expect(cardBody).toBeInTheDocument();
  });

  test('renders card-stats', () => {
    render(<Card />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByTestId('card'));
    const cardStats = screen.getByTestId('card-stats');
    expect(cardStats).toBeInTheDocument();
  });

  test('check opener', () => {
    render(<Card />, { wrapper: MemoryRouter });

    const card = screen.getByTestId('card');
    fireEvent.click(card);
    expect(card).toBeTruthy();
  });

  test('check closer', () => {
    render(<Card />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByTestId('card'));

    const closer = screen.getByTestId('card-closer');
    fireEvent.click(closer);
    expect(closer).toBeTruthy();
  });
});
