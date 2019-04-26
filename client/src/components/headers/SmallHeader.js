import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

class SmallHeader extends Component {
  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <Link to="/" className="small-header">
        <div className="title">
          <h2>This month's challenge</h2>
          <h3>CSS Grid</h3>
        </div>
        <div className="description">
          <h3>{`${
            months[new Date().getMonth()]
          } ${new Date().getFullYear()}`}</h3>
        </div>
      </Link>
    );
  }
}

export default SmallHeader;
