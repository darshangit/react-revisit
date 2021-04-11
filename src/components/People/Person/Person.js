import React, { Component, Fragment } from "react";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import cssClasses from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
  render() {
    console.log("[Person.js] render");

    return (
      <Aux>
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
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, cssClasses.Person);
