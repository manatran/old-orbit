import React, { Component } from "react";
import { Redirect } from "react-router";
import Spinner from "./../components/spinner";

class Logoutpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    localStorage.clear();
    this.setState({ redirect: true });
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

export default Logoutpage;
