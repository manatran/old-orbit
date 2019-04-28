import React, { Component } from 'react';
import Spinner from "../components/spinner";
import Sidebar from '../components/sidebar';
import Header from '../components/subject/Header';
import ReactMarkdown from "react-markdown";

import { apiUrl } from "../env";

class QuestionsDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: null,
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
	}

	render() {
		const { loading, question } = this.state;
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
										<h2>{question.title}</h2>
										<div className="content">
											<ReactMarkdown source={question.content} />
										</div>
										{/* <Question
											id={question.id}
											title={question.title}
											thumbnail={question.subject.thumbnail}
											category={question.subject.name}
											author={question.author.username}
											timestamp={question.createdAt}
										/> */}
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
