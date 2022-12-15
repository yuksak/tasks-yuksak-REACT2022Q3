import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './index';

describe('Header Component', () => {
  test('renders links of header', () => {
    render(<Header />, { wrapper: MemoryRouter });

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const homeElement = screen.getByTestId('Home');
    expect(homeElement).toBeInTheDocument();

    const aboutElement = screen.getByTestId('About-Us');
    expect(aboutElement).toBeInTheDocument();
  });
});
