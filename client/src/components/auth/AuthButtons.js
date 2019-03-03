import React, { Component } from 'react';
import github from './../../assets/icons/github-white.png';
import gitlab from './../../assets/icons/gitlab.png';
import './auth.css'

class Auth extends Component {
  render() {
    return (
      <div className="buttons">
        <a href="/" className="button gh-login">
          <span>Login with GitHub</span>
          <img src={github} alt="Login with GitHub" />
        </a>

        <a href="/" className="button gl-login">
          <span>Login with GitLab</span>
          <img src={gitlab} alt="Login with GitLab" />
        </a>
      </div>
    )
  }
}

export default Auth;



