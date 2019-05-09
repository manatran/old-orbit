import React, { Component } from 'react';
import { connect } from "react-redux";

import Header from "../components/subject/Header";
import QuestionsList from '../components/questions/QuestionsList';
import Sidebar from '../components/sidebar';
import Spinner from "../components/spinner";

import SimpleMDE from "react-simplemde-editor";

import { apiUrl } from "../env";

class SubjectPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: null,
			questions: null,
			slug: '',
			title: "",
			content: "",
			error: ""
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.slug !== prevProps.match.params.slug) {
			this.fetchCategory();
		}
	}


	componentDidMount() {
		this.setState({ slug: this.props.match.params.slug })
		this.fetchCategory();
	}

	fetchCategory() {
		const { slug } = this.props.match.params;

		fetch(`${apiUrl}/api/v1/categories/${slug}`)
			.then(res => res.json())
			.then(subject => {
				this.setState({ subject });
				this.setState({ loading: false });
			})
			.catch(err => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})

		fetch(`${apiUrl}/api/v1/category/posts/${slug}`)
			.then(res => res.json())
			.then(questions => {
				this.setState({ questions });
			})
			.catch(err => {
				this.setState({ loading: false });
			})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { title, content } = this.state;
		const { auth } = this.props;

		if (!title || !content) {
			this.setState({ error: "Please fill in all the fields" });
			return true;
		}

		const body = {
			title: title,
			content: content,
			subject: 6
		};

		fetch(`${apiUrl}/api/v1/posts`, {
			method: "POST",
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
			.then(res => {
				if (!res.error) {
					this.setState({ error: "" });
					this.props.history.push(`/questions/${res.id}`)
					return true;
				}
				this.setState({ error: JSON.stringify(res.error) });
			})
			.catch(err => {
				this.setState({ error: err.error });
			});
	}

	render() {
		const { loading, subject, questions } = this.state;
		const { slug } = this.props.match.params;
		return (
			<>
				{subject && <Header subject={subject} />}
				<div className="body">
					<Sidebar />
					<main>
						{slug === "suggestion" && (
							<>
								<h2>Submit a suggestion</h2>
								<form onSubmit={this.onSubmit}>
									{this.state.error && <p className="error">{this.state.error}</p>}
									<input
										type="text"
										value={this.state.title}
										onChange={e => this.setState({ title: e.target.value })}
										placeholder="Your suggestion"
									/>
									<p className="light">Enter 2 line breaks for a new paragraph.</p>
									<SimpleMDE
										options={{
											placeholder: "Provide some details"
										}}
										onChange={val => this.setState({ content: val })}
									/>
									<button className="button" type="submit">Create suggestion</button>
								</form>
							</>
						)}
						{loading
							? <Spinner />
							: <QuestionsList questions={questions} /> }
					</main>
				</div>
			</>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(SubjectPage);
