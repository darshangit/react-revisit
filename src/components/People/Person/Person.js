import { Component } from "react";
import cssClasses from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] render");

    return (
      <div className={cssClasses.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and am {this.props.age} old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
