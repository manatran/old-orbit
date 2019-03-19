import React, { Component } from "react";
import { Redirect } from "react-router";
import Profile from "./../components/profile";
import ProfileSidebar from "./../components/profile/Sidebar";
import Spinner from "./../components/spinner";
import { apiUrl } from "./../env";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      currUser: false
    };
  }

  componentWillMount() {
    // Fetch user data
    fetch(`${apiUrl}/api/v1/user/${this.props.match.params.username}`)
      .then(res => res.json())
      .then(user => {
        const { login } = JSON.parse(localStorage.getItem("user"));
        if (login === user.login) {
          this.setState({ currUser: true });
        }
        this.setState({ user: user });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="body spaced">
        {this.state.user ? (
          <React.Fragment>
            <ProfileSidebar
              thumbnail={this.state.user.avatar_url}
              username={this.state.user.login}
              name={this.state.user.name}
              bio={this.state.user.bio}
              reputation={this.state.user.profile.reputation}
              currUser={this.state.currUser}
            />
            <Profile />
          </React.Fragment>
        ) : (
          <Spinner size="32" />
        )}
      </div>
    );
  }
}

export default ProfilePage;
