import ShowUser from './ShowUser';

function ShowUsers({usersList}) {
  
  return (
    <>
    <h2>Show Users</h2>
    {usersList.map((item) => {
      return <ShowUser key={item.id} {...item}/>
    })}
    </>
  );
}

export default ShowUsers;