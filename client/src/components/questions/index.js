import React, { Component } from 'react';
import './questions.css';

class Question extends Component {
  render() {
    return (
      <section className="question">
        <div className="votes">
          <i className="material-icons up">keyboard_arrow_up</i>
          <span>{this.props.likes}</span>
          <i className="material-icons down">keyboard_arrow_down</i>
        </div>

        <img src={this.props.thumbnail} alt={this.props.category} />

        <div className="question-body">
          <h2>{this.props.title} <span className="tag">{this.props.tag}</span></h2>
          <p className="light">
            <span className="category">{this.props.category}</span>
            Asked 5 minutes ago by
            <a href="/" className="author"><i className="material-icons admin">verified_user</i>{this.props.author}</a></p>
        </div>

        <div className="options">
          <span className="comments">{this.props.comments}<i className="material-icons">comments</i></span>
          <span className="more"><i className="material-icons">more_horiz</i></span>
        </div>
      </section>
    );
  }
}

export default Question;
