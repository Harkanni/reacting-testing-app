import './App.css';
import UserList from './UserList';
import Userform from './Userform';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([{ name: 'Akanni', email: 'sendaraven@gmail.com' }]);

  const onAddUser = (user) => {
   setUsers([...users, user]);
  }
  return (
    <div className=''>
      <Userform onAddUser={onAddUser} />
      <hr />

      <UserList users={users} />
    </div>
  );
}

export default App;
