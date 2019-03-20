import React, { Component } from "react";
import ProfileSidebar from "./../components/profile/Sidebar";
import Settings from "./../components/settings";

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount() {
    // Get user data
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="body spaced">
        <ProfileSidebar
          thumbnail={this.state.user.avatar_url}
          username={this.state.user.login}
          name={this.state.user.name}
          bio={this.state.user.bio}
          reputation={this.state.user.profile.reputation}
        />
        <Settings />
      </div>
    );
  }
}
export default SettingsPage;
