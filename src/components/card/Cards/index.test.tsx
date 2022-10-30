import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Cards from './index';
import { mockItems } from '../../../mock/index';

describe('Cards Component', () => {
  test('renders images alt', () => {
    render(<Cards cards={mockItems} />, { wrapper: MemoryRouter });

    const cards = screen.getByTestId('cards');
    expect(cards).toBeInTheDocument();
  });
});
