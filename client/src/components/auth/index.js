import React, { Component } from 'react';
import AuthButtons from './AuthButtons';
import Logo from './../../assets/logo.png';
import './auth.css';

class Auth extends Component {
  render() {
    return (
      <section className="auth-container">
        <img src={Logo} className="logo" alt="Orbit"/>
        <h2>Sign up for Orbit</h2>
        <p>Orbit is completely free to use.</p>
        <p>No credit card required!</p>

        <AuthButtons />

        <p className="small">Signing up signifies that you have read and agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.</p>

        <div className="divider">or</div>
        <a href="/" className="button light">Continue as visitor</a>
      </section>
    )
  }
}

export default Auth;