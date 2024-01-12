import React, { useState } from 'react';

const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th >Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid={'user'}>
        {users.map((user, id) => (
          <tr key={id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
