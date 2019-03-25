import React, { Component } from "react";
import "./submissions.css";

class AddSubmission extends Component {
  render() {
    return (
      <a href="/submit" className="submission add-submission">
        <div className="background">
          <i className="material-icons">library_add</i>
        </div>
        <div className="meta">
          <h2>Add your creation</h2>
        </div>
      </a>
    );
  }
}

export default AddSubmission;
