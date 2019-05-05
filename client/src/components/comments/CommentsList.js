import React, { Component } from 'react';
import Comment from "./index";

class CommentsList extends Component {
	render() {
		const { comments } = this.props;
		if (comments && comments.length > 0) {
			return (
				comments.map((el, i) => (
					<Comment
						key={el.id}
						content={el.content}
						author={el.author}
					/>
				))
			)
		}
		else {
			return (
				<p className="light">No comments yet!</p>
			)
		}
	}
}

export default CommentsList;
