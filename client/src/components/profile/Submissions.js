import React, { Component } from "react";
import Submission from "../submissions";
import Spinner from "../spinner";
import { apiUrl } from "../../env";

class Submissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: null
    };
  }

  componentWillMount() {
    fetch(`${apiUrl}/api/v1/submissions/author/${this.props.user}`)
      .then(res => res.json())
      .then(res => {
        if (!res.error) {
          this.setState({ submissions: res });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.submissions) {
      return (
        <div>
          {this.state.submissions.length > 0 ? (
            this.state.submissions.map((el, i) => (
              <Submission
                key={el.id}
                title={el.title}
                subtitle={`by ${el.author.username}`}
                background={el.thumbnail}
              />
            ))
          ) : (
            <p className="light">This user has no submissions yet</p>
          )}
        </div>
      );
    } else {
      return <Spinner size="32" />;
    }
  }
}

export default Submissions;
