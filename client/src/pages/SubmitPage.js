import React, { Component } from "react";

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
        <main>hello world</main>
      </div>
    );
  }
}

export default SubmitPage;
