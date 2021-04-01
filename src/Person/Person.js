const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm a {props.name} and am {props.age} old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
