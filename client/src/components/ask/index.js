import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "../../dist/simplemde.css";
import { apiUrl } from "../../env";

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      subject: "",
      error: ""
    };
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
        Authorization: this.props.token,
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
        this.setState({ error: err.error });
      });
  }

  render() {
    return (
      <section className="ask">
        <h2>Ask your question</h2>

        {this.state.error ? <p className="error">{this.state.error}</p> : null}

        <form onSubmit={this.onSubmit.bind(this)}>
          <select
            onChange={e => {
              this.setState({ subject: e.target.value });
            }}
          >
            <option hidden>Choose a community</option>
            <option value="1">JavaScript</option>
            <option value="2">C#</option>
          </select>

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
      </section>
    );
  }
}

export default Ask;
