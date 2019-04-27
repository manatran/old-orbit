import React, { Component } from 'react'
import Question from '../components/questions';

import { apiUrl } from "../env";

class QuestionsDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: null
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		fetch(`${apiUrl}/api/v1/post/${id}`)
			.then(res => res.json())
			.then(question => {
				this.setState({ question })
			})
			.catch(err => {
				this.props.history.push('/');
			})
	}

	render() {
		const { question } = this.state;
		return (
			<div className="body spaced">
				{question
					? (
						<Question
							id={question.id}
							title={question.title}
							thumbnail={question.subject.thumbnail}
							category={question.subject.name}
							author={question.author.username}
							timestamp={question.createdAt}
						/>

					)
					: null}
			</div>
		)
	}
}

export default QuestionsDetailPage;
