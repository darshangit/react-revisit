const person = (props) => {
  return (
    <div>
      <p>
        I'm a {props.name} and am {props.age} old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
