import React, { Component } from "react";
import Submission from "./index";
import "./submissions.css";

class SubmissionsList extends Component {
	render() {
		const { submissions } = this.props;
		return (
			submissions.map((el, i) => (
				<Submission
					key={el.id}
					title={el.title}
					subtitle={`by ${el.author.username}`}
					background={el.thumbnail}
				/>
			))
		)
	}
}

export default SubmissionsList;
