import React, { Component } from "react";
import Submissions from "./Submissions";
import Questions from "./Questions";
import Replies from "./Replies";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "submissions"
    };
  }

  setActiveTab(tab){
    this.setState({ tab });
  }

  render() {
    return (
      <main>
        <section className="tab-nav">
          <button
            onClick={() => {this.setActiveTab("submissions")}}
            className={this.state.tab === "submissions" ? "active" : ""}
          >
            All submissions
          </button>
          <button
            onClick={() => {this.setActiveTab("questions")}}
            className={this.state.tab === "questions" ? "active" : ""}
          >
            All questions
          </button>
          <button
            onClick={() => {this.setActiveTab("replies")}}
            className={this.state.tab === "replies" ? "active" : ""}
          >
            All replies
          </button>
        </section>
        {(() => {
          switch (this.state.tab) {
            case "submissions":
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
