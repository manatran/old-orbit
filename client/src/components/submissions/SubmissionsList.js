import React, { Component } from "react";
import Submission from "./index";
import "./submissions.css";

class SubmissionsList extends Component {
	render() {
		const { submissions, hideWarning } = this.props;
		if (submissions && submissions.length > 0) {
			return (
				submissions.map((el, i) => (
					<Submission
						key={el.id}
						id={el.id}
						title={el.title}
						subtitle={`by ${el.author.username}`}
						background={el.thumbnail}
					/>
				))
			)
		} else if (!hideWarning) {
			return (
				<p className="light">No submissions yet!</p>
			)
		} else {
			return null;
		}
	}
}

export default SubmissionsList;
