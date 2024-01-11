import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Userform from './Userform';

test('Shows two inputs and a button', async () => {
  // RENDER THE COMPONENT
  render(<Userform />);

  // MANIPULATE THE COMPONENT OR FIND AN ELEMENT
  const inputs = screen.getAllByRole('textbox');
  const buttons = screen.getByRole('button', { name: /Add User/i });

  // CREATE AN ASSERTION
  expect(inputs).toHaveLength(2);
  expect(buttons).toBeInTheDocument();
});

test('Calls onUserAdd when form is submitted', async () => {
  // NOT THE BEST IMPLEMENTATION
  // const argList = []
  // const callback = (...args) => {
  //    argList.push(args)
  //    console.log('argList: ', argList)
  // }

  const mock = jest.fn();

  // RENDER COMPONENT
  render(<Userform onAddUser={mock} />);

  // FIND THE TWO INPUTS
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // SIMULATE TYPING IN NAME AND EMAIL FIELD
  user.click(nameInput);
  user.keyboard('Jane Doe');

  user.click(emailInput);
  user.keyboard('janedoe@gmail.com');

  // FIND THE BUTTON AND SIMULATE CLICKING
  const button = screen.getByRole('button');
  user.click(button);

  // ASSERTION TO MAKE SURE 'onUserAdd' GETS CALLED WITH EMAIL AND NAME
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'Jane Doe',
    email: 'janedoe@gmail.com'
  });
});
