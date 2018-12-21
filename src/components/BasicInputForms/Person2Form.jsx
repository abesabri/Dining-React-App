import React, { Component } from "react";
import "./inputform.css";

class Person2Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPerson2Content: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writePerson2 = this.writePerson2.bind(this);
  }

  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box.
  handleUserInput(e) {
    this.setState({
      newPerson2Content: e.target.value // the value of the text input
    });
  }

  writePerson2() {
    // call a method that sets the Person2Content for a Person2 to
    // the value of the input
    this.props.addPerson2(this.state.newPerson2Content);

    // Set newPerson2Content back to an empty string.
    this.setState({
      newPerson2Content: ""
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Add a new Person.."
          value={this.state.newPerson2Content}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.writePerson2}>
          Add
        </button>
      </div>
    );
  }
}

export default Person2Form;
