import react from 'react';
import { render, screen, within } from '@testing-library/react';

const Component = () => {
  return (
    <>
      <button>Click me</button>
      <form aria-label='form'>
        <h2>These are form buttons</h2>
        <button>button1</button>
        <button>button2</button>
      </form>
    </>
  );
};

const toContainRole = (container, role, quantity = 1) => {
  const elements = within(container).getAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead`
  };
};

expect.extend({ toContainRole });

test('should find button', () => {
  render(<Component />);

  const form = screen.getByRole('form');
  const button = within(form).getAllByRole('button');

  //   CUSTOM MATCHER
  expect(form).toContainRole('button', 20);

  expect(button).toHaveLength(2);
});
