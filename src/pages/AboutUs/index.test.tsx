import React from 'react';

import { render, screen } from '@testing-library/react';

import AboutUs from './index';

describe('About Us Page', () => {
  test('renders About Us info', () => {
    render(<AboutUs />);

    const element = screen.getByTestId('about-us');
    expect(element).toBeInTheDocument();
  });
});
