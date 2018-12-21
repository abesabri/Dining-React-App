import React, { Component } from "react";
import "./forms.css";
import PropTypes from "prop-types";

class Cook extends Component {
  constructor(props) {
    super(props);
    this.cookContent = props.cookContent;
    this.cookId = props.cookId;
    this.handleRemoveCook = this.handleRemoveCook.bind(this);
  }

  handleRemoveCook(id) {
    this.props.removeCook(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveCook(this.cookId)}
        >
          &times;
        </span>
        <p className="noteContent">{this.cookContent}</p>
      </div>
    );
  }
}

Cook.propTypes = {
  cookContent: PropTypes.string
};

export default Cook;
