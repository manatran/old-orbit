import React, { Component } from "react";
import { connect } from "react-redux";
import LoginHeader from "../components/headers/LoginHeader";
import LoggedInHeader from "../components/headers/LoggedInHeader";
import SmallHeader from "../components/headers/SmallHeader";
import RecentSubmissions from "../components/submissions/RecentSubmissions";
import RecentQuestions from "../components/questions/RecentQuestions";
import Sidebar from "../components/sidebar";

class Homepage extends Component {
  render() {
    return (
      <div>
        {this.props.auth.token ? <LoggedInHeader /> : <LoginHeader />}
        <div className="body">
          <Sidebar />
          <main>
            {this.props.auth.token ? null : <SmallHeader />}
            <RecentSubmissions />
            <RecentQuestions />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Homepage);
