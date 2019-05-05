import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";

export default class QuestionDetail extends Component {
	render() {
		const { question, comments } = this.props;
		return (
			<div className="content">
				<h2 className="title">{question.title}</h2>
				<ReactMarkdown source={question.content} />
				<div className="meta">
					<p className="votes">
						<i className="material-icons up">arrow_drop_up</i>
						<span>{question.likes || 0} likes</span>
						<i className="material-icons down">arrow_drop_down</i>
					</p>
					<p className="votes comments">
						<i className="material-icons">comments</i>
						<span>
							{`${comments} comments`}
						</span>
					</p>
				</div>
			</div>
		)
	}
}
