import React, { Component } from "react";
import Question from "../questions";
import Spinner from "../spinner";
import { apiUrl } from "../../env";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }

  componentWillMount() {
    fetch(`${apiUrl}/api/v1/posts/author/${this.props.user}`)
      .then(res => res.json())
      .then(res => {
        if (!res.error) {
          this.setState({ questions: res });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.questions) {
      return (
        <div>
          {this.state.questions.length > 0 ? (
            this.state.questions.map((el, i) => (
              <Question
                key={el.id}
                title={el.title}
                thumbnail={el.subject.thumbnail}
                category={el.subject.name}
                author={el.author.username}
                timestamp={el.createdAt}
              />
            ))
          ) : (
            <p className="light">This user has no questions yet</p>
          )}
        </div>
      );
    } else {
      return <Spinner size="32" />;
    }
  }
}

export default Questions;
