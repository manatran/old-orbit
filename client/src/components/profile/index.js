import React, { Component } from "react";

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
        <p>hello world</p>
      </main>
    );
  }
}

export default Profile;
