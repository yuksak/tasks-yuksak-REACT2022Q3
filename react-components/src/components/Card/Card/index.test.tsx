import React from 'react';

import { render, screen } from '@testing-library/react';
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

    const cardStats = screen.getByTestId('card-stats');
    expect(cardStats).toBeInTheDocument();
  });
});
