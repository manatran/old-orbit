import React, { Component } from 'react';
import AuthButtons from './../auth/AuthButtons';
import logo from './../../assets/logo.png';
import './header.css';

class LoginHeader extends Component {
  render() {
    return (
      <header className="login-header">
        <div className="container">
          <div className="intro">
            <h1>Welcome to Orbit!</h1>
            <p>Each month, over 50 million developers come to Orbit to learn, share their knowledge, and build their portfolio.</p>
            <p>Don't be a stranger!</p>
          </div>
          <div className="login-buttons">
            <img src={logo} className="logo" alt="Orbit Logo" />
            <h2>Join our community today!</h2>
            <AuthButtons />
          </div>
        </div>
      </header>
    );
  }
}

export default LoginHeader;
