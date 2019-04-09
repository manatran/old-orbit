import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../actions/authActions";
import Spinner from "./../components/spinner";

class Logoutpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.props.logout();
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logoutpage);
