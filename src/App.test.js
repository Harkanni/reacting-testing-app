import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('Can receive a new user and show on a list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('Jane');

  user.click(emailInput);
  user.keyboard('jane@example.com');

  user.click(button);

  const name = screen.getByRole('cell', { name: 'Jane' });
  const email = screen.getByRole('cell', { name: 'jane@example.com' });

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  
  screen.debug();
});
