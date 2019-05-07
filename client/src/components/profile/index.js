import React, { Component } from "react";
import SubmissionsList from "../submissions/SubmissionsList";
import QuestionsList from "../questions/QuestionsList";
import CommentsList from "../comments/CommentsList";
import { apiUrl } from "../../env";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: "submissions",
			submissions: null,
			questions: null,
			comments: null,
		};
	}

	componentDidMount() {
		// TODO: get submissions
		fetch(`${apiUrl}/api/v1/submissions/author/${this.props.user}`)
			.then(res => res.json())
			.then(submissions => {
				if (!submissions.error) this.setState({ submissions });
			})
			.catch(err => {
				console.log(err);
			})

		// get posts
		fetch(`${apiUrl}/api/v1/posts/author/${this.props.user}`)
			.then(res => res.json())
			.then(questions => {
				if (!questions.error) {
					this.setState({ questions });
				}
			})
			.catch(err => {
				console.log(err);
			});

		// get comments
		fetch(`${apiUrl}/api/v1/comments/author/${this.props.user}`)
			.then(res => res.json())
			.then(comments => {
				if (!comments.error) {
					this.setState({ comments });
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	setActiveTab(tab) {
		this.setState({ tab });
	}

	renderContent() {
		const { submissions, questions, comments } = this.state;
		switch (this.state.tab) {
			case "submissions":
				return <SubmissionsList submissions={submissions} />;
			case "questions":
				return <QuestionsList questions={questions} />;
			case "replies":
				return <CommentsList comments={comments} />;
			default:
				return <SubmissionsList submissions={submissions} />;
		}
	}

	render() {
		return (
			<main>
				<section className="tab-nav">
					<button
						onClick={() => { this.setActiveTab("submissions") }}
						className={this.state.tab === "submissions" ? "active" : ""}
					>
						All submissions
          </button>
					<button
						onClick={() => { this.setActiveTab("questions") }}
						className={this.state.tab === "questions" ? "active" : ""}
					>
						All questions
          </button>
					<button
						onClick={() => { this.setActiveTab("replies") }}
						className={this.state.tab === "replies" ? "active" : ""}
					>
						All replies
          </button>
				</section>

				{this.renderContent()}
			</main>
		);
	}
}

export default Profile;
