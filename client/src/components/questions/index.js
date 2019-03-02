import React, { Component } from 'react';
import './questions.css';

class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="votes">
          <i className="material-icons up">arrow_drop_up</i>
          <span>{this.props.likes}</span>
          <i className="material-icons down">arrow_drop_down</i>
        </div>

        <img src={this.props.thumbnail} alt={this.props.category} />

        <a href="/" className="question-body">
          <h2>{this.props.title} <span className="tag">{this.props.tag}</span></h2>
          <p className="light">
            <span className="category"><img src={this.props.thumbnail} alt={this.props.category} />{this.props.category}</span>
            Asked 5 minutes ago by
            <span className="author"><i className="material-icons admin">verified_user</i>{this.props.author}</span></p>
        </a>

        <div className="options">
          <a href="/" className="comments">{this.props.comments}<i className="material-icons">comments</i></a>
          <span onClick={() => {
            console.log('clicked');
          }} className="more"><i className="material-icons">more_horiz</i></span>
        </div>
      </div>
    );
  }
}

export default Question;
