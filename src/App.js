import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Dash", age: 28 },
      { name: "Priya", age: 29 },
      { name: "Pandu", age: 2 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Priya", age: 39 },
        { name: "Pandu", age: 2 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Awesome Darshan Forever", age: 28 },
        { name: event.target.value, age: 39 },
        { name: "Pandu", age: 2 },
      ],
    });
  };

  render() {
    // dont use inline syles
    const style = {
      backgroundColor: "white",
      font: "inherit",
      boder: "1px solid blue",
      padding: "8px",
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App {Math.floor(Math.random() * 16)}</h1>
        <p>This is working</p>
        <button style={style} onClick={() => this.switchNameHandler("AWesome Darshan")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Donkey")}
        >
          My Hobbies Racing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />
      </div>
    );
  }

  // return React.createElement(
  //   "div",
  //   {className: 'App'},
  //   React.createElement("h1", null, "Hi, I am a React App")
  // );
}

export default App;
