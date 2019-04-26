import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./submissions.css";

class AddSubmission extends Component {
  render() {
    return (
      <Link to="/submit" className="submission add-submission">
        <div className="background">
          <i className="material-icons">library_add</i>
        </div>
        <div className="meta">
          <h2>Add your creation</h2>
        </div>
      </Link>
    );
  }
}

export default AddSubmission;
