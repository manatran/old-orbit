import React, { Component } from 'react';
import './submissions.css';

class Submission extends Component {
  render() {
    return (
      <a href="/" className="submission">
        <div className="background" style={{backgroundImage: `url(${this.props.background})`}} />
        <div className="meta">
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
        </div>
      </a>
    );
  }
}

export default Submission;
