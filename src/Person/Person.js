
import cssClasses from "./Person.css";

const person = (props) => {

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
