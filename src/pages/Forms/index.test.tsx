import React from 'react';

import { render, screen } from '@testing-library/react';

import Forms from './index';

describe('Forms Page', () => {
  test('renders Forms info', () => {
    render(<Forms />);

    const element = screen.getByTestId('forms-page');
    expect(element).toBeInTheDocument();
  });
});
