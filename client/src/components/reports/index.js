import React, { Component } from 'react';
import { connect } from "react-redux";
import Question from "../questions";
import { apiUrl } from "../../env";
import "./report.css";

class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {
			succes: ""
		}
	}

	removePost = () => {
		// Delete report
		fetch(`${apiUrl}/api/v1/reports/${this.props.id}`, {
			method: "DELETE",
			headers: {
				Authorization: this.props.auth.token,
				Accept: "application/json",
				"Content-Type": "application/json"
			},
		})
			.then(res => res.json())
			.then(res => {
				// remove post
				fetch(`${apiUrl}/api/v1/posts/${this.props.question.id}`, {
					method: "DELETE",
					headers: {
						Authorization: this.props.auth.token,
						Accept: "application/json",
						"Content-Type": "application/json"
					},
				})
					.then(res => res.json())
					.then(() => {
						this.setState({ success: "Successfully removed post" });
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	}

	ignore = () => {
		// ignore report
		fetch(`${apiUrl}/api/v1/reports/${this.props.id}`, {
			method: "PATCH",
			headers: {
				Authorization: this.props.auth.token,
				Accept: "application/json",
				"Content-Type": "application/json"
			},
		})
			.then(res => res.json())
			.then(() => {
				this.setState({ success: "Successfully ignored report" });
			})
			.catch(err => console.log(err));
	}

	render() {
		const { content, question } = this.props;
		const { success } = this.state;

		return (
			<div className="report">
				{success && <p className="success">{success}</p>}
				{!success && (
					<>
						<p>{content}</p>
						<Question
							id={question.id}
							title={question.title}
							thumbnail={question.subject.thumbnail}
							likes={question.totalLikes || 0}
							category={question.subject.name}
							slug={question.subject.slug}
							author={question.author}
							timestamp={question.createdAt}
						/>
						<a
							style={{ display: "block", paddingTop: `16px` }}
							href={`/questions/${question.id}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							Open in new tab
						</a>
						<div className="button-container" style={{ marginTop: "16px" }}>
							<button
								className="button small"
								onClick={this.ignore}>
								Ignore
							</button>
							<button
								className="button light danger small"
								onClick={this.removePost}>
								Remove post
							</button>
						</div>
					</>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Report);
