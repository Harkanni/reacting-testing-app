import React, { useState } from 'react';

const Userform = ({ onAddUser }) => {
  const [state, setState] = useState({ name: '', email: '' });
  const handleSubmit = (event) => {
    event.preventDefault();

    onAddUser(state);
    setState({ name: '', email: '' });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='email'
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default Userform;
