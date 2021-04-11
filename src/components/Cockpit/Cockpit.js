import React, { useEffect, useRef } from "react";
import cssClasses from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  //**********useeffect runs after render
  useEffect(() => {
    console.log("[cockpit.js] use effect");
    // const timer = setTimeout(() => {
    //   //   alert("Saved data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();

    // if you have a method it is used for clean up work
    return () => {
    //   clearTimeout(timer);
      console.log("[cockpit.js] clean");
    };
  }, []); // [props.persons] will execute only when a perticular props change
  // for rendering only first time pass empty array

  useEffect(() => {
    console.log("[cockpit.js] 2nd use effect");

    return () => {
      console.log("[cockpit.js] 2nd clean");
    };
  });

  let classes = []; // red bold - these classes are in CSS
  let btnClass = "";

  if (props.showPersons) {
    btnClass = cssClasses.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(cssClasses.redColor);
  }

  if (props.personsLength <= 1) {
    classes.push(cssClasses.boldColor);
  }

  return (
    <div className={cssClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is working</p>

      <button ref={toggleBtnRef}
        className={btnClass}
        alt={props.showPersons}
        onClick={props.clicked}
      >
        Toggle
      </button>
      <AuthContext.Consumer>
      {(context) => <button onClick={context.login}> Log In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
