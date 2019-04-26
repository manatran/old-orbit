import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import Logo from "./../../assets/logo.png";
import "./auth.css";

class Auth extends Component {
  render() {
    return (
      <section className="auth-container">
        <img src={Logo} className="logo" alt="Orbit" />
        <h2>Sign up for Orbit</h2>
        <p>Orbit is completely free to use.</p>
        <p>No credit card required!</p>

        <AuthButtons />

        <p className="small">
          Signing up signifies that you have read and agree to the{" "}
          <Link to="/terms">Terms of Service</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <div className="divider">or</div>
        <Link to="/" className="button light">
          Continue as visitor
        </Link>
      </section>
    );
  }
}

export default Auth;
