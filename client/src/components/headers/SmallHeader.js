import React, { Component } from "react";
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
      <a href="/" className="small-header">
        <div className="title">
          <h2>This month's challenge</h2>
          <h3>CSS Grid</h3>
        </div>
        <div className="description">
          <h3>{`${
            months[new Date().getMonth()]
          } ${new Date().getFullYear()}`}</h3>
        </div>
      </a>
    );
  }
}

export default SmallHeader;
