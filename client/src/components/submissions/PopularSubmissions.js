import React, { Component } from 'react';
import Submission from './index';
import AddSubmission from './AddSubmission';
import './submissions.css';

class PopularSubmissions extends Component {
  render() {
    return (
      <section>
        <h2>Popular submissions</h2>
        <div className="submission-container">
          <Submission
            title="Echo"
            subtitle="by manaus_t"
            background="https://manatran.github.io/assets/echo-banner.png"
          />
          <Submission
            title="Echo"
            subtitle="by manaus_t"
            background="https://manatran.github.io/assets/echo-banner.png"
          />
          <Submission
            title="Echo"
            subtitle="by manaus_t"
            background="https://manatran.github.io/assets/echo-banner.png"
          />
          <Submission
            title="Echo"
            subtitle="by manaus_t"
            background="https://manatran.github.io/assets/echo-banner.png"
          />
          <AddSubmission />
        </div>
        <a href="/" className="link">View all submissions <i className="material-icons">keyboard_arrow_right</i></a>
      </section>
    );
  }
}

export default PopularSubmissions;
