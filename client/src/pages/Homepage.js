import React, { Component } from "react";
import LoginHeader from "../components/headers/LoginHeader";
import LoggedInHeader from "../components/headers/LoggedInHeader";
import SmallHeader from "../components/headers/SmallHeader";
import RecentSubmissions from "../components/submissions/RecentSubmissions";
import RecentQuestions from "../components/questions/RecentQuestions";
import Sidebar from "../components/sidebar";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push("/");
      return true;
    }
    this.setState({ token: token });
  }

  render() {
    return (
      <div>
        {this.state.token ? <LoggedInHeader /> : <LoginHeader />}
        <div className="body">
          <Sidebar />
          <main>
            {this.state.token ? null : <SmallHeader />}
            <RecentSubmissions />
            <RecentQuestions />
          </main>
        </div>
      </div>
    );
  }
}

export default Homepage;
