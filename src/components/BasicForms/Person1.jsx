import React, { Component } from "react";
import "./forms.css";
import PropTypes from "prop-types";

class Person1 extends Component {
  constructor(props) {
    super(props);
    this.person1Content = props.person1Content;
    this.person1Id = props.person1Id;
    this.handleRemovePerson1 = this.handleRemovePerson1.bind(this);
  }

  handleRemovePerson1(id) {
    this.props.removePerson1(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemovePerson1(this.person1Id)}
        >
          &times;
        </span>
        <p className="noteContent">{this.person1Content}</p>
      </div>
    );
  }
}

Person1.propTypes = {
  person1Content: PropTypes.string
};

export default Person1;
