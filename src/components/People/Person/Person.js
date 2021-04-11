import React, { Component, Fragment } from "react";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import cssClasses from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus(); // old method of setting refs
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] render");

    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>
          }
        </AuthContext.Consumer>
        <p key="i1" onClick={this.props.click}>
          I'm a {this.props.name} and am {this.props.age} old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
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
  changed: PropTypes.func,
  isAuth: PropTypes.bool,
};

export default withClass(Person, cssClasses.Person);
