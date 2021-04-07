import { useState } from "react";
import "./App.css";
import Person from "./components/People/Person/Person";

const App = (props) => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Dash", age: 28 },
      { name: "Priya", age: 29 },
      { name: "Pandu", age: 2 },
    ]
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Priya", age: 39 },
        { name: "Pandu", age: 2 },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Awesome Darshan Forever", age: 28 },
        { name: event.target.value, age: 39 },
        { name: "Pandu", age: 2 },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hi, I am a React App {Math.floor(Math.random() * 16)}</h1>
      <p>This is working</p>
      <button onClick={() => switchNameHandler("AWesome Darshan")}>
        Switch Name
      </button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={switchNameHandler.bind(this, "Donkey")}
      >
        My Hobbies Racing
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        changed={nameChangeHandler}
      />
    </div>
  );
};

export default App;
