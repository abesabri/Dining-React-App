import React, { Component } from "react";
import "./inputform.css";

class Person1Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPerson1Content: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writePerson1 = this.writePerson1.bind(this);
  }

  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box.
  handleUserInput(e) {
    this.setState({
      newPerson1Content: e.target.value // the value of the text input
    });
  }

  writePerson1() {
    // call a method that sets the Person1Content for a Person1 to
    // the value of the input
    this.props.addPerson1(this.state.newPerson1Content);

    // Set newPerson1Content back to an empty string.
    this.setState({
      newPerson1Content: ""
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Add a new Person.."
          value={this.state.newPerson1Content}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.writePerson1}>
          Add
        </button>
      </div>
    );
  }
}

export default Person1Form;
