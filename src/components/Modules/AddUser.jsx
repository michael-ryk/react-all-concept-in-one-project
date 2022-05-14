import {useState} from 'react';
import Error from '../UI/Error';

function AddUser(props){

  const [user, setUser] = useState({name: '', age: ''})
  const [errorRaised, setErrorRaised] = useState(false);
  const [errorMessage, setErrorMessage] = useState({title: 'Error 1', message:'Fix it'});

  function handleChange(e){
    const {name, value} = e.target;
    setErrorRaised(false);
    setUser((prev) => {
      return {...prev, [name]:value}
    })
  }

  function submitNewUser(e) {
    e.preventDefault();
    
    // Validate incorrect values
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setErrorMessage({title: 'No input detected', message: 'Dont leave inputs empty'})
      setErrorRaised(true)
      return;
    };
    if (user.age < 1) {
      setErrorMessage({title: 'Age is too low', message: 'Enter Valid Age!!'})
      setErrorRaised(true)
      return;
    };

    const newUserWithId = {id: new Date().getTime().toString() , ...user}
    props.addUser(newUserWithId)
  }

  return (
    <>
    {errorRaised ? <Error object={errorMessage}/> : <></> }
      <form onSubmit={submitNewUser}>
        <label>User Name: </label>
        <input name='name' onChange={handleChange} value={user.name}></input>
        <label>Age: </label>
        <input name='age' onChange={handleChange} value={user.age}></input>
        <button type='submit'>Add User</button>
      </form>
    </>
  );

}

export default AddUser;