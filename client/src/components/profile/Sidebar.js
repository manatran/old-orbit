import React, { Component } from "react";
import Settings from "./Settings";
import "./profile.css";

class ProfileSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: false
    };
  }
  render() {
    return (
      <aside className="profile-sidebar">
        <section className="meta">
          <img
            src={this.props.thumbnail}
            alt={`${this.props.username}'s profile`}
          />
          <h2>{this.props.username}</h2>
          <p className="rep">{this.props.reputation} rep</p>
          <p className="bio">{this.props.bio}</p>
          {this.props.currUser ? (
            <React.Fragment>
              <button
                className="button light"
                onClick={() =>
                  this.setState({ settings: !this.state.settings })
                }
              >
                Settings
              </button>
              <Settings
                history={this.props.history}
                className={this.state.settings ? "" : "hidden"}
              />
            </React.Fragment>
          ) : null}
        </section>

        <section className="badges">
          <h3>Badges</h3>
          <div className="badge">
            <img
              src={this.props.thumbnail}
              alt={`${this.props.username}'s profile`}
            />
            <h4>Moderator</h4>
          </div>
          <div className="badge">
            <img
              src={this.props.thumbnail}
              alt={`${this.props.username}'s profile`}
            />
            <h4>Participant</h4>
          </div>
        </section>
      </aside>
    );
  }
}

export default ProfileSidebar;
