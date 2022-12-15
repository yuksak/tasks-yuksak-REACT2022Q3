import React from 'react';

import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('loader component', () => {
  test('renders loader component', () => {
    render(<Loader />);

    const element = screen.getByTestId('loader');
    expect(element).toBeInTheDocument();
  });
});
