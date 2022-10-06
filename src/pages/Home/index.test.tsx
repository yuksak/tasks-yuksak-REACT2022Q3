import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './index';

describe('Home Page', () => {
  test('renders Home info', () => {
    render(<Home />, { wrapper: MemoryRouter });

    const element = screen.getByTestId('home');
    expect(element).toBeInTheDocument();
  });
});
