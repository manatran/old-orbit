import React, { Component } from "react";
import Lang from "./../sidebar/Lang";
import "./profile.css";

class ProfileSidebar extends Component {
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
            <a href="/settings" className="button light">
              Settings
            </a>
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
        <section className="communities">
          <h3>Most active in</h3>
          <div className="langs">
            <Lang
              url="/"
              icon="https://manatran.github.io/favicon.png"
              title="Javascript"
              subs="12.500"
            />
            <Lang
              url="/"
              icon="https://manatran.github.io/favicon.png"
              title="Javascript"
              subs="12.500"
            />
            <Lang
              url="/"
              icon="https://manatran.github.io/favicon.png"
              title="Javascript"
              subs="12.500"
            />
            <Lang
              url="/"
              icon="https://manatran.github.io/favicon.png"
              title="Javascript"
              subs="12.500"
            />
            <Lang
              url="/"
              icon="https://manatran.github.io/favicon.png"
              title="Javascript"
              subs="12.500"
            />
          </div>
        </section>
      </aside>
    );
  }
}

export default ProfileSidebar;
