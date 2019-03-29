import React, { Component } from "react";
import SmallHeader from "./../headers/SmallHeader";
import Github from "./../../assets/icons/github.png";
import SimpleMDE from "react-simplemde-editor";
import "../../dist/simplemde.css";
import "./submit.css";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      ghurl: "",
      thumbnail: ""
    };
  }

  render() {
    return (
      <main className="submit">
        <SmallHeader />
        <h2>Submit your creation</h2>
        <form>
          <input type="text" placeholder="Title" />
          <div className="image-input">
            {this.state.thumbnail ? (
              <div
                className="thumbnail"
                style={{ backgroundImage: `url(${this.state.thumbnail})` }}
              />
            ) : null}
            <input
              type="text"
              placeholder="Thumbnail URL"
              onChange={e => {
                this.setState({ thumbnail: e.target.value });
              }}
            />
          </div>
          <div className="icon-input">
            <img src={Github} alt="Github logo" />
            <input type="text" placeholder="GitHub URL" />
          </div>

          <SimpleMDE
            options={{
              placeholder: "Provide some details and show your work"
            }}
            onChange={val => {
              this.setState({ content: val });
            }}
          />
          <button className="button">Submit creation</button>
        </form>
      </main>
    );
  }
}

export default Submit;
