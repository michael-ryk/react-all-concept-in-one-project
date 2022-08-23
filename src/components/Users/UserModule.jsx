import { useState } from 'react';
import AddUser from './AddUser';
import ShowDummyUsers from './ShowDummyUsers';
import ShowUsers from './ShowUsers';

function UserModule() {
  const [usersList, setUsersList] = useState([
    { id: '1', name: 'Gogi', age: '40' },
    { id: '2', name: 'plant', age: '42' },
  ]);

  function addToList(newUser) {
    setUsersList((prev) => {
      return [...prev, newUser];
    });
  }

  return (
    <>
      <h1>User record system</h1>
      <AddUser addUser={addToList} />
      <ShowUsers usersList={usersList} />
      <ShowDummyUsers />
    </>
  );
}

export default UserModule;

