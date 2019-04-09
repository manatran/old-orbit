import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser, setToken } from "../actions/authActions";
import { Redirect } from "react-router";
import Spinner from "./../components/spinner";
import { apiUrl } from "./../env";

class AuthCallback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    // Get token from URL parameter
    const params = new URLSearchParams(this.props.location.search);
    const token = params.get("token");

    if (!token) {
      this.setState({ redirect: true });
    } else {
      // Get user info
      fetch(`${apiUrl}/api/v1/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(res => {
          this.props.setToken(`Bearer ${token}`);
          this.props.setCurrentUser(res);
          this.setState({ redirect: true });
        })
        .catch(err => {
          console.log("error", err);
          this.setState({ redirect: true });
        });
    }
  }

  render() {
    return (
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.state.redirect ? <Redirect to="/" /> : <Spinner size="64" />}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: userData => dispatch(setCurrentUser(userData)),
    setToken: token => dispatch(setToken(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCallback);
