import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../modal";
import Delete from "../modal/Delete";
import { getTimeDifference } from "../../helpers";
import { apiUrl } from "../../env";
import "./comments.css";

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subcomments: [],
			content: "",
			showCommentInput: false,
			modal: false,
			submodal: false
		}
	}

	createSubcomment = () => {
		const { content } = this.state;
		const { id, auth } = this.props;
		if (content) {
			const body = {
				content: content,
				commentId: id,
			}
			console.log(body);

			fetch(`${apiUrl}/api/v1/subcomments`, {
				method: "POST",
				headers: {
					Authorization: auth.token,
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			})
				.then(res => res.json())
				.then(subcomment => {
					if (!subcomment.error) {
						this.setState({ content: "" });
						this.setState({ showCommentInput: false });
						this.setState({
							subcomments: [
								subcomment,
								...this.state.subcomments
							]
						});
					}
				})
				.catch(err => {
					console.log(err);
				})
		}
	}

	componentDidMount() {
		const { id } = this.props;
		fetch(`${apiUrl}/api/v1/subcomments/${id}`)
			.then(res => res.json())
			.then(subcomments => {
				if (subcomments && !subcomments.error) {
					this.setState({ subcomments });
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		const { subcomments, modal, submodal } = this.state;
		const { id, content, author, timestamp, hue, auth } = this.props;

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
						<span onClick={e => this.setState({
							showCommentInput: !this.state.showCommentInput
						})}>
							{this.state.showCommentInput ? 'Cancel' : 'Reply'}
						</span>
						{author.id === auth.user.profile.id && (
							<span
								className="danger"
								onClick={() => this.setState({ modal: true })}
							>
								Delete
							</span>
						)}
					</p>
					{modal && (
						<Modal
							title={`Delete`}
							closeModal={() => this.setState({ modal: false })}>
							<Delete
								type="comment" id={id}
								closeModal={() => this.setState({ modal: false })}
							/>
						</Modal>
					)}
					{this.state.showCommentInput && (
						<>
							<textarea
								placeholder={`Reply to ${author.username}'s comment`}
								className="subcomment-input"
								value={this.state.content}
								onChange={e => this.setState({ content: e.target.value })}
							/>
							<div className="button-container">
								<button
									className="button small"
									onClick={this.createSubcomment}
								>
									Comment
								</button>
								<button
									className="button small light"
									onClick={(e) => this.setState({ showCommentInput: false })}
								>
									Cancel
								</button>
							</div>
						</>
					)}
				</div>

				{subcomments.map((el, i) => (
					<div key={el.id} className="subcomment" style={{ borderLeftColor: `hsla(${hue}, 77%, 58%, 0.5)` }}>
						<p className="meta light">
							<Link to={`/user/${(el.author && el.author.username) || auth.user.profile.username}`} className="author">
								{((el.author && el.author.isAdmin) || auth.user.profile.isAdmin) && <i className="material-icons admin">verified_user</i>}
								{(el.author && el.author.username) || auth.user.profile.username}
							</Link>
							{getTimeDifference(el.createdAt)}
						</p>
						<p>{el.content}</p>
						<p className="options light">
							<span onClick={e => this.setState({
								showCommentInput: !this.state.showCommentInput
							})}>
								{this.state.showCommentInput ? 'Cancel' : 'Reply'}
							</span>
							{author.id === auth.user.profile.id && (
								<span
									className="danger"
									onClick={() => this.setState({ submodal: true })}
								>
									Delete
							</span>
							)}
						</p>
						{submodal && (
							<Modal
								title={`Delete`}
								closeModal={() => this.setState({ submodal: false })}>
								<Delete
									type="subcomment" id={el.id}
									closeModal={() => this.setState({ submodal: false })}
								/>
							</Modal>
						)}
					</div>
				))}

			</>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Comment);
