function Error (props) {
  
  return (
    <div>
      <h2>Error: {props.object.title}</h2>
      <p>{props.object.message}</p>
    </div>
  );
}

export default Error;