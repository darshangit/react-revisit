import { Component } from "react";
import cssClasses from "./App.css";
import Person from "../components/People/Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

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
    let persons = null;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <ErrorBoundary>
                key={p.id}
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={p.name}
                  age={p.age}
                  changed={(event) => this.nameChangeHandler(event, p.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = cssClasses.Red;
    }

    console.log(btnClass);
    let classes = []; // red bold - these classes are in CSS

    if (this.state.persons.length <= 2) {
      classes.push(cssClasses.redColor);
    }

    if (this.state.persons.length <= 1) {
      classes.push(cssClasses.boldColor);
    }

    return (
      <div className={cssClasses.App}>
        <h1>Hi, I am a React App {Math.floor(Math.random() * 16)}</h1>
        <p className={classes.join(" ")}>This is working</p>

        <button
          className={btnClass}
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          Toggle
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
