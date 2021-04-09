import { PureComponent } from "react";
import Person from "./Person/Person";

class People extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[People.js] getDerivedStateFromProps");
  //     return state;
  //   }

  //if we have to check all the properties - do not use changed but extend a pureComponent
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[People.js] shouldComponentUpdate");
//     return (
//       nextProps.persons !== this.props.persons ||
//       nextProps.clicked !== this.props.clicked ||
//       nextProps.changed !== this.props.changed
//     );
//   }

  componentWillUnmount() {
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
