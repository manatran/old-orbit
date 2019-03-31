import React, { Component } from "react";
import Question from "./index";
import Spinner from "../spinner";
import "./questions.css";
import { apiUrl } from "../../env";

class RecentQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentWillMount() {
    fetch(`${apiUrl}/api/v1/posts/recent`)
      .then(res => res.json())
      .then(res => {
        this.setState({ questions: res });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <section className="questions" style={{ marginTop: "32px" }}>
        <h2>Recent questions</h2>
        {this.state.questions
          ? this.state.questions.map((el, i) => (
              <Question
                key={el.id}
                title={el.title}
                thumbnail={el.subject.thumbnail}
                category={el.subject.name}
                author={el.author.username}
                timestamp={el.createdAt}
              />
            ))
          : null}
        {false ? (
          <div
            className="spinner-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px"
            }}
          >
            <Spinner size="24" />
          </div>
        ) : (
          <div
            className="scroll-top"
            style={{ textAlign: "center", marginTop: "16px" }}
          >
            <p className="light" style={{ margin: "0" }}>
              That's it, no more posts! You could always create more if you
              want.
            </p>
            <p
              className="light"
              style={{
                cursor: "pointer",
                margin: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "8px",
                color: "#666",
                userSelect: "none"
              }}
              onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Back to top
              <i
                className="material-icons"
                style={{
                  transform: "rotate(-90deg)",
                  fontSize: "14px",
                  marginLeft: "8px"
                }}
              >
                subdirectory_arrow_right
              </i>
            </p>
          </div>
        )}
      </section>
    );
  }
}

export default RecentQuestions;
