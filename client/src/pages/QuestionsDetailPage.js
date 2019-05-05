import React, { Component } from 'react';
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
			comments: null,
			loading: true
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`${apiUrl}/api/v1/post/${id}`)
			.then(res => res.json())
			.then(question => {
				this.setState({ question });
				this.setState({ loading: false });
			})
			.catch(err => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})

		fetch(`${apiUrl}/api/v1/comments/${id}`)
			.then(res => res.json())
			.then(comments => {
				this.setState({ comments })
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		const { loading, question, comments } = this.state;
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
												minHeight: "600px",
												hideIcons: ["guide", "fullscreen", "side-by-side"],
											}}
										/>
										<button className="button">Comment</button>
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

export default QuestionsDetailPage;
