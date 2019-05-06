import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from "../components/spinner";
import Sidebar from '../components/sidebar';
import Header from '../components/subject/Header';
import CommentsList from '../components/comments/CommentsList';

import { apiUrl } from "../env";
import SimpleMDE from 'react-simplemde-editor';
import QuestionDetail from '../components/questions/QuestionDetail';

class QuestionsDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: null,
			comments: [],
			loading: true,
			content: ""
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`${apiUrl}/api/v1/post/${id}`)
			.then(res => res.json())
			.then(question => {
				this.setState({ question });
				this.setState({ loading: false });
				document.title = `${question.title} - ${question.subject.name}`;
			})
			.catch(err => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})

		fetch(`${apiUrl}/api/v1/comments/${id}`)
			.then(res => res.json())
			.then(comments => {
				this.setState({ comments });
				this.setState({ content: "" })
			})
			.catch(err => {
				console.log(err)
			})
	}

	componentWillUnmount() {
		document.title = "Orbit";
	}

	createComment = () => {
		const { content } = this.state;
		const { token } = this.props.auth;
		const { id } = this.props.match.params;

		if (content) {
			const body = {
				content: content,
				postId: id
			};

			fetch(`${apiUrl}/api/v1/comments`, {
				method: "POST",
				headers: {
					Authorization: token,
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			})
				.then(res => res.json())
				.then(comment => {
					if (!comment.error) {
						this.setState({ content: "" });
						this.setState({
							comments: [
								comment,
								...this.state.comments
							]
						})
					}
				})
				.catch(err => {
					console.log(err);
				})
		}
	}

	render() {
		const { loading, question, comments, content } = this.state;
		return (
			<div>
				{!loading ? (
					question
						? (
							<>
								<Header subject={question.subject} />
								<div className="body">
									<Sidebar />
									<main>
										<QuestionDetail question={question} comments={comments ? comments.length : 0} />
										<SimpleMDE
											options={{
												hideIcons: ["guide", "fullscreen", "side-by-side"],
											}}
											value={content}
											onChange={content => this.setState({ content })}
										/>
										<button onClick={this.createComment} className="button">Comment</button>
										<CommentsList comments={comments} />
									</ main>
								</div>
							</>
						)
						: null
				) : (
						<div className="body spaced">
							<Spinner />
						</div>
					)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(QuestionsDetailPage);
