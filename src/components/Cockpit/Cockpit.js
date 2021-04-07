import cssClasses from "./Cockpit.css";

const cockpit = (props) => {

    let classes = []; // red bold - these classes are in CSS
    let btnClass = '';

    if(props.showPersons){
        btnClass = cssClasses.Red;
    }

    if (props.persons.length <= 2) {
      classes.push(cssClasses.redColor);
    }

    if (props.persons.length <= 1) {
      classes.push(cssClasses.boldColor);
    }

  return (
    <div className={cssClasses.Cockpit}>
      <h1>Hi, I am a React App {Math.floor(Math.random() * 16)}</h1>
      <p className={classes.join(" ")}>This is working</p>

      <button
        className={btnClass}
        alt={props.showPersons}
        onClick={props.clicked}
      >
        Toggle
      </button>
    </div>
  );
};

export default cockpit;
