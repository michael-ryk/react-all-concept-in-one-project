import { useState, useRef } from 'react';
import Error from '../UI/Error';

function AddUser(props) {
  const nameRef = useRef();
  const ageRef = useRef();
  const [user, setUser] = useState({ name: '', age: '' });
  const [error, setError] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setError(null);
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitNewUser(e) {
    e.preventDefault();
    
    // Validate incorrect values
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: 'No input detected',
        message: 'Dont leave inputs empty',
      });
      return;
    }
    if (user.age < 1) {
      setError({ title: 'Age is too low', message: 'Enter Valid Age!!' });
      return;
    }

    const newUserWithId = { id: new Date().getTime().toString(), ...user };
    props.addUser(newUserWithId);
  }

  return (
    <>
      {error && <Error object={error} />}
      <form onSubmit={submitNewUser}>
        <label>User Name: </label>
        <input
          name='name'
          onChange={handleChange}
          value={user.name}
          ref={nameRef}
        ></input>
        <label>Age: </label>
        <input
          name='age'
          onChange={handleChange}
          value={user.age}
          ref={ageRef}
        ></input>
        <button type='submit'>Add User</button>
      </form>
    </>
  );
}

export default AddUser;
