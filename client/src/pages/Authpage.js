import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./../components/auth";

class Authpage extends Component {
  componentWillMount() {
    if (this.props.auth.authenticated) {
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Authpage);
