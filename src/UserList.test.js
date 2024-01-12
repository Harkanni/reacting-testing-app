import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';

import UserList from './UserList';

test('render one row per user', () => {
  // RENDER THE COMPONENT
  const users = [
    { name: 'John', email: 'John@example.com' },
    { name: 'Jane', email: 'Jane@example.com' },
    { name: 'Bob', email: 'Bob@example.com' },
    { name: 'sendaraven', email: 'sendaraven@example.com' }
  ];

  //   const { container } = render(<UserList users={users} />);
  render(<UserList users={users} />);

  // FIND ALL ROWS IN THE TABLE
  const rows = within(screen.getByTestId('user')).getAllByRole('row');
  //   const rows = container.querySelectorAll('tbody tr')

  // ASSERTION: CORRECT NUMBER OF ROWS IN THE TABLE
  expect(rows).toHaveLength(4);
});

test('render email and name of each user', () => {
  const users = [
    { name: 'John', email: 'John@example.com' },
    { name: 'Jane', email: 'Jane@example.com' },
    { name: 'Bob', email: 'Bob@example.com' },
    { name: 'sendaraven', email: 'sendaraven@example.com' }
  ];

  render(<UserList users={users} />);

  screen.logTestingPlaygroundURL();

  for (var user of users) {
    const nameInput = screen.getByRole('cell', { name: user.name });
    const emailInput = screen.getByRole('cell', { name: user.email });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  }
});
