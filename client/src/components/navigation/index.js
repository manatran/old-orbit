import React, { Component } from 'react';
import logo from './../../assets/logo.png';
import './nav.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    }
  }

  toggleDropDown() {
    this.setState({ dropdown: !this.state.dropdown });
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
              <a href="/">Code challenges</a>
              <a href="/">Challenge suggestions</a>
              <a href="/">Question forum</a>
            </div>

          </div>

          <div className="column">

            <span className="search">
              <i className="material-icons">search</i>
              <input type="text" placeholder="Search Orbit..." />
            </span>

            <span className={this.state.dropdown ? "logged-in active" : "logged-in"}>
              <div className="personal-info" onClick={this.toggleDropDown.bind(this)}>
                <span className="meta">
                  <h2>manaus_t</h2>
                  <h3>300 rep</h3>
                </span>
                <img src="https://manatran.github.io/favicon.png" alt="github-logo" />
                <i className="material-icons">arrow_drop_down</i>
              </div>

              {this.state.dropdown ? (
                <div className="dropdown">
                  <h2>Options</h2>
                  <a href="/"><i className="material-icons">account_circle</i>Profile</a>
                  <a href="/"><i className="material-icons">build</i>Settings</a>

                  <div className="alt-links links">
                    <a href="/">Code challenges</a>
                    <a href="/">Challenge suggestions</a>
                    <a href="/">Question forum</a>
                  </div>

                  <div className="links">
                    <a href="/">Privacy policy</a>
                    <a href="/">Terms of use</a>
                  </div>

                  <a href="/"><i className="material-icons">exit_to_app</i>Log out</a>
                </div>
              ) : null}
            </span>
          </div>

        </div>
      </nav>
    );
  }
}

export default Navigation;
