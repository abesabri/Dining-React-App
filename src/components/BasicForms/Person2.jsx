import React, { Component } from "react";
import "./forms.css";
import PropTypes from "prop-types";

class Person2 extends Component {
  constructor(props) {
    super(props);
    this.person2Content = props.person2Content;
    this.person2Id = props.person2Id;
    this.handleRemovePerson2 = this.handleRemovePerson2.bind(this);
  }

  handleRemovePerson2(id) {
    this.props.removePerson2(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemovePerson2(this.person2Id)}
        >
          &times;
        </span>
        <p className="noteContent">{this.person2Content}</p>
      </div>
    );
  }
}

Person2.propTypes = {
  person2Content: PropTypes.string
};

export default Person2;
