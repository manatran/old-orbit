import React, { Component } from "react";
import { connect } from "react-redux";
import Submit from "./../components/submit";
import Sidebar from "./../components/ask/Sidebar";

class SubmitPage extends Component {
  componentWillMount() {
    if (!this.props.auth.authenticated) {
      this.props.history.push("/signup");
      return true;
    }
    this.setState({ token: this.props.auth.token });
  }

  render() {
    return (
      <div className="body spaced">
        <Sidebar submit />
        <Submit />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SubmitPage);
