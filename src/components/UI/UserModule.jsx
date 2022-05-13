import AddUser from '../Modules/AddUser';
import ShowUsers from '../Modules/ShowUsers';

function UserModule(){

  return (
    <>
      <h1>User record system</h1>
      <AddUser />
      <ShowUsers />
    </>
  );

}

export default UserModule;