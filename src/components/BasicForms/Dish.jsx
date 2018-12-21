import React, { Component } from "react";
import "./forms.css";
import PropTypes from "prop-types";

class Dish extends Component {
  constructor(props) {
    super(props);
    this.dishContent = props.dishContent;
    this.dishId = props.dishId;
    this.handleRemoveDish = this.handleRemoveDish.bind(this);
  }

  handleRemoveDish(id) {
    this.props.removeDish(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveDish(this.dishId)}
        >
          &times;
        </span>
        <p className="noteContent">{this.dishContent}</p>
      </div>
    );
  }
}

Dish.propTypes = {
  dishContent: PropTypes.string
};

export default Dish;
