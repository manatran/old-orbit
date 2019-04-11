import React, { Component } from "react";
import { connect } from "react-redux";
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
        const { login } = this.props.auth.user;
        if (login === user.login) {
          this.setState({ currUser: true });
        }
        if (user.error) {
          this.props.history.push("/");
        }
        this.setState({ user: user });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div className="body spaced">
        {this.state.user ? (
          <React.Fragment>
            <ProfileSidebar
              history={this.props.history}
              thumbnail={this.state.user.avatar_url}
              username={this.state.user.login}
              name={this.state.user.name}
              bio={this.state.user.bio}
              reputation={this.state.user.profile.reputation}
              isAdmin={this.state.user.profile.isAdmin}
              currUser={this.state.currUser}
            />
            <Profile user={this.state.user.profile.id} />
          </React.Fragment>
        ) : (
          <Spinner size="32" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProfilePage);
