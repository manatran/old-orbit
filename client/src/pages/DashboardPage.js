import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardPage extends Component {
  componentWillMount() {
    if (!this.props.auth.user.profile.isAdmin) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="body spaced">
        <p>hello world</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(DashboardPage);
