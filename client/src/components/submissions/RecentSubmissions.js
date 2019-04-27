import React, { Component } from "react";
import { Link } from "react-router-dom";
import Submission from "./index";
import AddSubmission from "./AddSubmission";
import "./submissions.css";
import { apiUrl } from "../../env";

class RecentSubmissions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submissions: []
		};
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/submissions/recent`)
			.then(res => res.json())
			.then(res => {
				this.setState({ submissions: res });
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return (
			<section>
				<h2>Recent submissions</h2>
				<div className="submission-container">
					{this.state.submissions
						? this.state.submissions.map((el, i) => (
							<Submission
								key={el.id}
								title={el.title}
								subtitle={`by ${el.author.username}`}
								background={el.thumbnail}
							/>
						))
						: null}
					<AddSubmission />
				</div>
				<Link to="/" className="link">
					View all submissions{" "}
					<i className="material-icons">keyboard_arrow_right</i>
				</Link>
			</section>
		);
	}
}

export default RecentSubmissions;
