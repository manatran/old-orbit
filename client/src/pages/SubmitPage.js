import React, { Component } from "react";
import Submit from "./../components/submit";
import Sidebar from "./../components/ask/Sidebar";

class SubmitPage extends Component {
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
        <Sidebar submit />
        <Submit />
      </div>
    );
  }
}

export default SubmitPage;
