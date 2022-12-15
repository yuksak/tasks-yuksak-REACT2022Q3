import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockItems } from 'mock';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: mockItems }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
