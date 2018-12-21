import React, { Component } from "react";
import "./inputform.css";

class DishForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDishContent: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeDish = this.writeDish.bind(this);
  }

  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box.
  handleUserInput(e) {
    this.setState({
      newDishContent: e.target.value // the value of the text input
    });
  }

  writeDish() {
    // call a method that sets the DishContent for a Dish to
    // the value of the input
    this.props.addDish(this.state.newDishContent);

    // Set newDishContent back to an empty string.
    this.setState({
      newDishContent: ""
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Add a new Dish..."
          value={this.state.newDishContent}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.writeDish}>
          Add
        </button>
      </div>
    );
  }
}

export default DishForm;
