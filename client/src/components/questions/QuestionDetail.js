import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../codehighlight";
import Modal from "../modal";
import { getTimeDifference } from "../../helpers";

export default class QuestionDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
		}
	}

	render() {
		const { modal } = this.state;
		const { question, comments } = this.props;
		const { createdAt, author } = question;

		return (
			<div className="content">
				<div className="titles">
					<div>
						<h2 className="title">{question.title}</h2>
						<p className="meta light">
							Asked {getTimeDifference(createdAt)} by {" "}
							<Link to={`/user/${author.username}`} className="author">
								{author.isAdmin && <i className="material-icons admin">verified_user</i>}
								{author.username}
							</Link>
						</p>
					</div>
					<div>
						<span className="link" onClick={() => this.setState({ modal: true })}>
							<i className="material-icons" title="Report...">flag</i>
						</span>
					</div>
				</div>

				<div className="md">
					<ReactMarkdown renderers={{ code: CodeBlock }} source={question.content} />
				</div>
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
				{modal && <Modal question={question} closeModal={() => this.setState({ modal: false })} />}
			</div>
		)
	}
}
