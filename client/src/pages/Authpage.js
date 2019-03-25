import React, { Component } from "react";
import Auth from "./../components/auth";

class Authpage extends Component {
  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <main style={{ display: "flex", justifyContent: "center" }}>
        <Auth />
      </main>
    );
  }
}

export default Authpage;
