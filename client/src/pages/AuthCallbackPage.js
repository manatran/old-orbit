import React, { Component } from "react";
import { Redirect } from "react-router";
import Spinner from "./../components/spinner";

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
      fetch(`/api/v1/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem("token", `Bearer ${token}`);
          localStorage.setItem("user", res);
          this.setState({ redirect: true });
        })
        .catch(err => console.log("error", err));
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
        {this.state.redirect ? <Redirect to="/" /> : <Spinner />}
      </main>
    );
  }
}

export default AuthCallback;
