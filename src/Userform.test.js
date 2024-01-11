import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Userform from './Userform';

test('Shows two inputs and a button', async () => {
  // RENDER THE COMPONENT
  render(<Userform />);

  // MANIPULATE THE COMPONENT
  const inputs = screen.getAllByRole('textbox');
  const buttons = screen.getByRole('button', { name: /Add User/i });

  // CREATE AN ASSERTION
  expect(inputs).toHaveLength(2);
  expect(buttons).toBeInTheDocument()
});
