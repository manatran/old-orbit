import React, { Component } from 'react';
import './sidebar.css';

class Lang extends Component {

  render() {
    return (
      <a href={this.props.url} className={`lang ${this.props.big ? "big" : null}`}>
        <img src={this.props.icon} alt="logo" />
        <div className="meta">
          <p>{this.props.title}</p>
          <p className="light">{this.props.subs} subscribers</p>
        </div>
      </a>
    );
  }
}

export default Lang;
