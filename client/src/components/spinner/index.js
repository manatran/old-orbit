import React, { Component } from "react";
import "./spinner.css";

class Spinner extends Component {
  componentWillMount() {
    if (!this.props.size) this.props.size = 24;
  }

  render() {
    return (
      <div
        style={{
          height: `${this.props.size}px`,
          width: `${this.props.size}px`
        }}
        className="spinner"
      />
    );
  }
}

export default Spinner;
