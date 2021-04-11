import { Component } from "react";
import cssClasses from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "asdasd", name: "Priya", age: 29 },
      { id: "fefs", name: "Dash", age: 28 },
      { id: "sfhhjf", name: "Pandu", age: 2 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  nameChangeHandler = (event, id) => {
    //always work with copys of state - not the actual object
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //when dependent on old state - use prevState
    this.setState((prevState, props) => {
      return{
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
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
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <People
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux classes={cssClasses.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle} // this prop is coming from index.js
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          />
        ) : null}

        {persons}
      </Aux>
    );
  }

  componentDidMount() {
    console.log("[App.js] component did mount");
  }

  componentDidUpdate() {
    console.log("[App.js] component did update");
  }
}

export default withClass(App, cssClasses.App);
