import React, { Component } from "react";
import Spinner from "../spinner";
import { apiUrl } from "../../env";

class Replies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replies: null
    };
  }

  componentWillMount() {
    fetch(`${apiUrl}/api/v1/comments/author/${this.props.user}`)
      .then(res => res.json())
      .then(res => {
        if (!res.error) {
          this.setState({ replies: res });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.replies) {
      return (
        <div>
          {this.state.replies.length > 9 ? (
            this.state.replies.map((el, i) => (
              //TODO add comment component
              <p>Hello world</p>
            ))
          ) : (
            <p className="light">This user has no replies yet</p>
          )}
        </div>
      );
    } else {
      return <Spinner size="32" />;
    }
  }
}

export default Replies;
