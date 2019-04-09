import React, { Component } from "react";
import Submissions from "./Submissions";
import Questions from "./Questions";
import Replies from "./Replies";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currTab: null
    };
  }

  componentWillMount() {
    const currTab = new URLSearchParams(window.location.search).get("tab");
    this.setState({ currTab: currTab });
  }

  render() {
    return (
      <main>
        <section className="tab-nav">
          <a
            href={window.location.pathname}
            className={this.state.currTab === null ? "active" : ""}
          >
            All submissions
          </a>
          <a
            href={`${window.location.pathname}?tab=questions`}
            className={this.state.currTab === "questions" ? "active" : ""}
          >
            All questions
          </a>
          <a
            href={`${window.location.pathname}?tab=replies`}
            className={this.state.currTab === "replies" ? "active" : ""}
          >
            All replies
          </a>
        </section>
        {(() => {
          switch (this.state.currTab) {
            case null:
              return <Submissions user={this.props.user} />;
            case "questions":
              return <Questions user={this.props.user} />;
            case "replies":
              return <Replies user={this.props.user} />;
            default:
              return <Submissions user={this.props.user} />;
          }
        })()}
      </main>
    );
  }
}

export default Profile;
