import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from 'App';

describe('App', () => {
  test('Renders App', () => {
    render(<App />, { wrapper: MemoryRouter });
  });
});
