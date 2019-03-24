import React, { Component } from "react";
import Sidebar from "../components/ask/Sidebar";
import Research from "../components/ask/Research";
import SimpleMDE from "react-simplemde-editor";
import "../dist/simplemde.css";
import { apiUrl } from "./../env";

class Askpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      title: "",
      content: "",
      subject: "1",
      error: ""
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

  onSubmit(e) {
    e.preventDefault();
    const { title, content, subject } = this.state;
    if (!title || !content || !subject) {
      this.setState({ error: "Please fill in all the fields" });
      return true;
    }

    const body = {
      title: title,
      content: content,
      subject: subject
    };

    fetch(`${apiUrl}/api/v1/posts`, {
      method: "POST",
      headers: {
        Authorization: this.state.token,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ error: "" });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <div className="body spaced">
        <Sidebar />
        <main>
          <Research />
          <h2>Ask your question</h2>

          {this.state.error ? (
            <p className="error">{this.state.error}</p>
          ) : null}

          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              value={this.state.title}
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              placeholder="Your specific question"
            />
            <SimpleMDE
              options={{
                placeholder: "Provide some details and show your research"
              }}
              onChange={val => {
                this.setState({ content: val });
              }}
            />
            <button className="button">Submit question</button>
          </form>
        </main>
      </div>
    );
  }
}

export default Askpage;
