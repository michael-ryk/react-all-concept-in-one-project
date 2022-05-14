import {useState} from 'react';
function AddUser(props){

  const [user, setUser] = useState({name: '', age: ''})

  function handleChange(e){
    const {name, value} = e.target;
    setUser((prev) => {
      return {...prev, [name]:value}
    })
  }

  function submitNewUser(e) {
    e.preventDefault();
    
    // prevent empty entry
    if (user.name.trim().length === 0 || user.age.trim().length === 0) return;

    const newUserWithId = {id: new Date().getTime().toString() , ...user}
    props.addUser(newUserWithId)
  }

  return (
    <form onSubmit={submitNewUser}>
      <label>User Name: </label>
      <input name='name' onChange={handleChange} value={user.name}></input>
      <label>Age: </label>
      <input name='age' onChange={handleChange} value={user.age}></input>
      <button type='submit'>Add User</button>
    </form>
  );

}

export default AddUser;