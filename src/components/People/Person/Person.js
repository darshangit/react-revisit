import React, { Component, Fragment } from "react";
import Aux from "../../../hoc/aux";
import cssClasses from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] render");

    return (
      <Fragment className={cssClasses.Person}>
        <p key="i1" onClick={this.props.click}>
          I'm a {this.props.name} and am {this.props.age} old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Person;
