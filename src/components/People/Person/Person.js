import cssClasses from "./Person.css";

const person = (props) => {
  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error("wrong");
  // }
  return (
    <div className={cssClasses.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and am {props.age} old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
