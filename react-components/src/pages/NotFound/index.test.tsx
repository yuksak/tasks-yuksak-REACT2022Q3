import React from 'react';

import { render, screen } from '@testing-library/react';

import NotFound from './index';

describe('NotFound Page', () => {
  test('renders 404 error', () => {
    render(<NotFound />);

    const element = screen.getByText(/404. That’s an error./i);
    expect(element).toBeInTheDocument();
  });
});
