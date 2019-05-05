import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";
import "./comments.css";

export default class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subcomments: [],
			showCommentInput: false,
		}
	}
	render() {
		const { content, author, timestamp, hue } = this.props;

		return (
			<>
				<div className="comment" style={{ borderLeftColor: `hsla(${hue}, 77%, 58%, 0.5)` }}>
					<p className="meta light">
						<Link to={`/user/${author.username}`} className="author">
							{author.isAdmin && <i className="material-icons admin">verified_user</i>}
							{author.username}
						</Link>
						{getTimeDifference(timestamp)}
					</p>
					<p>{content}</p>
					<p className="options light">
						<span onClick={e => this.setState({ showCommentInput: !this.state.showCommentInput })}>
							{this.state.showCommentInput ? 'Cancel' : 'Reply'}
						</span>
						<span>
							Share
					</span>
						<span>
							Report
					</span>
					</p>
					{this.state.showCommentInput && <input type="text" />}
				</div>
				<div className="subcomment" style={{ borderLeftColor: `hsla(${hue}, 77%, 58%, 0.5)` }}>
					<p className="meta light">
						<Link to={`/user/${author.username}`} className="author">
							{author.isAdmin && <i className="material-icons admin">verified_user</i>}
							{author.username}
						</Link>
						{getTimeDifference(timestamp)}
					</p>
					<p>{content}</p>
				</div>
			</>
		)
	}
}
