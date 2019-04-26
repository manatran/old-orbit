import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./../../assets/logo.png";
import Searchbar from "./Searchbar";
import "./nav.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
  }

  render() {
    return (
      <nav>
        <div className="nav-container container">
          <div className="column">
            <a href="/" className="logo">
              <img src={logo} alt="Orbit" />
              <span>Orbit</span>
            </a>

            <div className="nav-links">
              <a href="/challenges">Code challenges</a>
              <a href="/suggestions">Challenge suggestions</a>
              <a href="/questions">Question forum</a>
              {this.props.auth.user.profile && this.props.auth.user.profile.isAdmin ? (
                <a href="/dashboard" className="admin-link">
                  Dashboard
                </a>
              ) : null}
            </div>
          </div>

          <div className="column">
            <Searchbar />
            {this.props.auth.authenticated ? (
              <span
                className={
                  this.state.dropdown ? "logged-in active" : "logged-in"
                }
              >
                <div
                  className="personal-info"
                  onClick={() => {
                    this.setState({ dropdown: !this.state.dropdown });
                  }}
                >
                  <span className="meta">
                    <h2>{this.props.auth.user.login}</h2>
                    <h3>{this.props.auth.user.profile.reputation} rep</h3>
                  </span>
                  <img src={this.props.auth.user.avatar_url} alt="User" />
                  <i className="material-icons">arrow_drop_down</i>
                </div>

                {this.state.dropdown ? (
                  <div className="dropdown">
                    <h2>Options</h2>
                    <a href={`/user/${this.props.auth.user.login}`}>
                      <i className="material-icons">account_circle</i>Profile
                    </a>

                    <div className="links">
                      <a href="/ask">Ask a question</a>
                      <a href="/submit">Submit a challenge</a>
                    </div>

                    <div className="alt-links links">
                      <a href="/challenges">Code challenges</a>
                      <a href="/suggestions">Challenge suggestions</a>
                      <a href="/questions">Question forum</a>
                      {this.props.auth.user.profile && this.props.auth.user.profile.isAdmin ? (
                        <a href="/dashboard" className="admin-link">
                          Dashboard
                        </a>
                      ) : null}
                    </div>

                    <div className="links">
                      <a href="/privacy">Privacy policy</a>
                      <a href="/terms">Terms of use</a>
                    </div>

                    <a href="/logout">
                      <i className="material-icons">exit_to_app</i>Log out
                    </a>
                  </div>
                ) : null}
              </span>
            ) : (
              <a href="/signup" className="button light">
                Sign up
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navigation);
