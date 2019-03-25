import React, { Component } from "react";
import Ask from "../components/ask";
import Sidebar from "../components/ask/Sidebar";
import Research from "../components/ask/Research";

class Askpage extends Component {
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
      <div className="body spaced">
        <Sidebar />
        <main>
          <Research />
          <Ask token={this.state.token} />
        </main>
      </div>
    );
  }
}

export default Askpage;
