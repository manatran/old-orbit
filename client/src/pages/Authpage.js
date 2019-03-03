import React, { Component } from 'react';
import Auth from './../components/auth';

class Authpage extends Component {
  render() {
    return (
      <main style={{display: 'flex', justifyContent: 'center'}}>
        <Auth />
      </main>
    )
  }
}

export default Authpage;