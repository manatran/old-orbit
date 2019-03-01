import React, { Component } from 'react';
import './header.css';

class SmallHeader extends Component {
  render() {
    return (
      <header className="small-header">
        <div className="title">
          <h2>This month's challenge</h2>
          <h3>May</h3>
        </div>
        <div className="description">
          <h3>CSS Grid</h3>
          <p>This month is all about CSS' new grid system. It doesn't matter if you want to create a photo album or a really cool community for starting developers.</p>
          <p>Be creative and have fun! </p>
        </div>
      </header>
    );
  }
}

export default SmallHeader;
