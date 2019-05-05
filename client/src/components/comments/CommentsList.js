import React, { Component } from 'react';
import { connect } from "react-redux";
import Comment from "./index";

class CommentsList extends Component {
	render() {
		const { comments, auth } = this.props;
		if (comments && comments.length > 0) {
			return (
				comments.map((el, i) => (
					<Comment
						key={el.id}
						content={el.content}
						author={el.author || auth.user.profile}
						timestamp={el.createdAt}
						hue={(30 * i) % 360}
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

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(CommentsList);
