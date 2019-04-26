import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoggedInHeader extends Component {
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
      <Link to="/" className="big-header logged-in">
        <div className="container">
          <div className="intro">
            <h1>This month's challenge</h1>
            <h3>{`${
              months[new Date().getMonth()]
            } ${new Date().getFullYear()}`}</h3>
          </div>
          <div className="info">
            <h2>CSS Grid</h2>
            <p>
              This month is all about CSS' new grid system. It doesn't matter if
              you want to create a photo album or a really cool community for
              starting developers.
            </p>
            <p>Be creative and have fun!</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default LoggedInHeader;
