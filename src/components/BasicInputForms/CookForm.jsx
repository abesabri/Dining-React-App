import React, { Component } from "react";
import "./inputform.css";

class CookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCookContent: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeCook = this.writeCook.bind(this);
  }

  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box.
  handleUserInput(e) {
    this.setState({
      newCookContent: e.target.value // the value of the text input
    });
  }

  writeCook() {
    // call a method that sets the CookContent for a Cook to
    // the value of the input
    this.props.addCook(this.state.newCookContent);

    // Set newCookContent back to an empty string.
    this.setState({
      newCookContent: ""
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Add a new Cook.."
          value={this.state.newCookContent}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.writeCook}>
          Add
        </button>
      </div>
    );
  }
}

export default CookForm;
