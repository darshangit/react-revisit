import React, { useEffect } from "react";
import cssClasses from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[cockpit.js] use effect");
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);

    return () => {
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

export default Cockpit;
