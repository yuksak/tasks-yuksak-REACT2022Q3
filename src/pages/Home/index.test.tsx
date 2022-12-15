import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Home from './index';

import { server, rest } from '../../mock/server';

describe('Home Page', () => {
  test('renders Home info', () => {
    render(<Home />, { wrapper: MemoryRouter });

    const element = screen.getByTestId('home');
    expect(element).toBeInTheDocument();
  });

  test('renders card', async () => {
    render(<Home />, { wrapper: MemoryRouter });

    const button = screen.getByTestId('search-button');
    fireEvent.click(button);

    const cards = await waitFor(() => screen.getAllByTestId('card'));
    const firstCard = cards[0];
    expect(firstCard).toBeInTheDocument();
    userEvent.click(firstCard);

    const closerButton = screen.getByTestId('card-closer');
    expect(closerButton).toBeInTheDocument();
    userEvent.click(closerButton);
    expect(closerButton).not.toBeInTheDocument();
  });

  test('renders cards length ', async () => {
    render(<Home />, { wrapper: MemoryRouter });

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    const cards = await waitFor(() => screen.getAllByTestId('card'));

    expect(cards.length).toBe(10);
  });

  test('renders error ', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        // req.url.searchParams.get('name');
        return res(ctx.status(404), ctx.json({ error: 'No exact matches found.' }));
      })
    );

    render(<Home />, { wrapper: MemoryRouter });

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    const error = await waitFor(() => screen.findByText(/No exact matches found./i));
    expect(error).toBeInTheDocument();
  });

  test('renders Home info', () => {
    render(<Home />, { wrapper: MemoryRouter });

    const element = screen.getByTestId('search-bar');
    expect(element).toBeInTheDocument();
  });
});
