import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

const Component = () => {
  return (
    <div>
      <header>Hello Akanni from JEST</header>
      <h3>React Test</h3>

      <label htmlFor='name'>name</label>
      <input type='text' id='name' />

      <label htmlFor='email'>email</label>
      <input type='email' id='email' placeholder='enter your email' />

      <label htmlFor='count'>Count</label>
      <input type='number' id='count' />

      <button>Submit</button>

      <ul>
        <li>Admin</li>
        <li>Home</li>
        <li>Users</li>
        <li>Contact Us</li>
      </ul>

      <img src='./img' alt='image description' />

      <footer />
    </div>
  );
};

test('Test query functions', () => {
  render(<Component />);

  const header = screen.getByRole('banner');
  const h3 = screen.getByText(/REACT TEST/i);
  const nameInput = screen.getByRole('textbox', { name: 'name' });
  const emailInput = screen.getByPlaceholderText('enter your email');
  const countInput = screen.getByLabelText('Count');
  const button = screen.getByRole('button');
  const ul = screen.getByRole('list');
  const li = screen.getByText('Admin', { selector: 'ul li'});
});
