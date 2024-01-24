import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { createServer } from '../test/server';


import HomeRoute from './HomeRoute';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';

const handlers = [
   rest.get('/api/repositories', (req, res, ctx) => {
      const query = req.url.searchParams.get('q')
      console.log(query)

      return res(
         ctx.json({
            items: [
               { id: 1, full_name: 'full name!!'},
               { id: 2, full_name: 'other name!!'}
            ]
         })
      )
   })
]

const server = setupServer(...handlers) 

beforeAll(() => {
   server.listen();
})
afterEach(() => {
   server.resetHandlers()
})
afterAll(() => {
   server.close()
})

test('renders two links for each language', () => {
   render(
      <MemoryRouter>
         {/* <HomeRoute /> */}
      </MemoryRouter>
   )
})
 




createServer([
  {
    path: '/api/repositories',
    res: (req) => {
      const language = req.url.searchParams.get('q').split('language:')[1];
      return {
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      };
    },
  },
]);

test('renders two links for each language', async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  const languages = [
    'javascript',
    'typescript',
    'rust',
    'go',
    'python',
    'java',
  ];

  for (let language of languages) {
    const links = await screen.findAllByRole('link', {
      name: new RegExp(`${language}_`),
    });

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent(`${language}_one`);
    expect(links[1]).toHaveTextContent(`${language}_two`);
    expect(links[0]).toHaveAttribute('href', `/repositories/${language}_one`);
    expect(links[1]).toHaveAttribute('href', `/repositories/${language}_two`);
  }
});
