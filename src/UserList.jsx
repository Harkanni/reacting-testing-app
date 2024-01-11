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
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
