import { Component } from "react";
import "./App.css";
// import Radium, { StyleRoot } from "radium";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdasd", name: "Priya", age: 29 },
      { id: "fefs", name: "Dash", age: 28 },
      { id: "sfhhjf", name: "Pandu", age: 2 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    //always work with copys of state - not the actual object
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (index) => {
    // const person = this.state.persons.slice(); // will return a new array
    // always update state in immutable way
    const person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({ persons: person });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    // dont use inline syles
    const style = {
      backgroundColor: "green",
      font: "inherit",
      boder: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={p.name}
                age={p.age}
                key={p.id}
                changed={(event) => this.nameChangeHandler(event, p.id)}
              />
            );
          })}
          {/* <Person
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
          /> */}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    let classes = []; // red bold - these classes are in CSS

    if (this.state.persons.length <= 2) {
      classes.push("red-color");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold-color");
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, I am a React App {Math.floor(Math.random() * 16)}</h1>
          <p className={classes.join(" ")}>This is working</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Toggle
          </button>
          {persons}
        </div>
      // </StyleRoot> 
    );
  }

  // return React.createElement(
  //   "div",
  //   {className: 'App'},
  //   React.createElement("h1", null, "Hi, I am a React App")
  // );
}

export default App;

// export default Radium(App);
