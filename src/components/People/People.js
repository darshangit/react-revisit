import { Component } from "react";
import Person from "./Person/Person";

class People extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[People.js] getDerivedStateFromProps");
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[People.js] shouldComponentUpdate");
    return true;
  }

  componentWillUnmount(){
      console.log("[People.js] componentWillUnmount");
}

  render() {
    console.log("[People.js] rendering");

    return this.props.persons.map((p, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={p.name}
          age={p.age}
          key={p.id}
          changed={(event) => this.props.changed(event, p.id)}
        />
      );
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[People.js] getSnapshotBeforeUpdate");
    return { messahe: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[People.js] componentDidUpdate");
    console.log(snapshot);
  }
}

export default People;
