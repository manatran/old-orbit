import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginHeader from "../components/headers/LoginHeader";
import LoggedInHeader from "../components/headers/LoggedInHeader";
import SmallHeader from "../components/headers/SmallHeader";
import SubmissionsList from "../components/submissions/SubmissionsList";
import AddSubmission from "../components/submissions/AddSubmission";
import QuestionsList from "../components/questions/QuestionsList";
import ScrollTop from "../components/questions/ScrollTop";
import Sidebar from "../components/sidebar";

import { apiUrl } from "../env";

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submissions: [],
			questions: [],
			loading: true,
		}
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/posts/recent`)
			.then(res => res.json())
			.then(questions => {
				this.setState({ questions });
			})
			.catch(err => {
				console.log(err);
			});

		fetch(`${apiUrl}/api/v1/submissions/recent`)
			.then(res => res.json())
			.then(submissions => {
				this.setState({ submissions });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		const { questions, submissions } = this.state;

		return (
			<>
				{this.props.auth.token ? <LoggedInHeader /> : <LoginHeader />}
				<div className="body">
					<Sidebar />
					<main>

						{this.props.auth.token ? null : <SmallHeader />}

						<section>
							<h2>Recent submissions</h2>
							<div className="submission-container">
								<SubmissionsList submissions={submissions} hideWarning />
								<AddSubmission />
							</div>
							<Link to="/" className="link">
								View all submissions{" "}
								<i className="material-icons">keyboard_arrow_right</i>
							</Link>
						</section>

						<section className="questions" style={{ marginTop: "32px" }}>
							<h2>Recent questions</h2>
							<QuestionsList questions={questions} />
							<ScrollTop />
						</section>
					</main>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Homepage);
