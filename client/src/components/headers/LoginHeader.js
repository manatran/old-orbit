import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import './header.css';
import github from './../../assets/icons/github-white.png';
import gitlab from './../../assets/icons/gitlab.png';

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
            <img src={logo} alt="Orbit Logo" />
            <h2>Join our community today!</h2>
            <div className="buttons">
              <a href="/" className="button gh-login">
                <span>
                  Login with GitHub
                </span>
                <img src={github} alt="Login with GitHub" />
              </a>

              <a href="/" className="button gl-login">
                <span>
                  Login with GitLab
                </span>
              <img src={gitlab} alt="Login with GitLab" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default LoginHeader;
