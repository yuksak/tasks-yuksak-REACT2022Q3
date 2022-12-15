import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Form from './index';
import userEvent from '@testing-library/user-event';
import { ItemInterface } from 'models';
import Loader from './index';

describe('loader component', () => {
  test('renders loader component', () => {
    render(<Loader error="Error Message" isLoading={false} />);

    const element = screen.getByTestId('loader');
    expect(element).toBeInTheDocument();
  });
});
