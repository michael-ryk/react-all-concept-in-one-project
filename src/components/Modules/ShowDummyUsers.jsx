import peopleList from '../../dummyArrays/listOfPeiple';

function ShowDummyUsers() {

return (
  <>
    {peopleList.filter(item => item.age < 20).map(item => {
      return (
        <h3 key={item.id}>{item.name} - {item.age}</h3>
      );
    })}
  </>
);

}

export default ShowDummyUsers;